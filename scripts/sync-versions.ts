import { execSync } from 'node:child_process'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

interface WorkspaceInfo {
  location: string
  workspaceDependencies: string[]
  mismatchedWorkspaceDependencies: string[]
}

async function syncVersions() {
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const rootDir = path.resolve(__dirname, '..')

  const rootPackage = JSON.parse(
    await fs.readFile(path.resolve(rootDir, 'package.json'), 'utf-8')
  )

  // Get all workspace packages
  const workspaceOutput = execSync('yarn workspaces info --json', { encoding: 'utf8' })
  
  // Extract the JSON portion from the output
  const workspacesInfo = JSON.parse(workspaceOutput)
  const workspaces = Object.entries(workspacesInfo).map(([name, info]) => ({
    name,
    ...(info as WorkspaceInfo)
  }))

  // Update each package version
  for (const { location, name } of workspaces) {
    if (!location) continue // Skip if location is missing
    
    const pkgPath = path.resolve(rootDir, location, 'package.json')
    const pkg = JSON.parse(
      await fs.readFile(pkgPath, 'utf-8')
    )
    
    if (pkg.version !== rootPackage.version) {
      pkg.version = rootPackage.version
      await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
      console.log(`Updated ${name} (${location}) to version ${rootPackage.version}`)
    } else {
      console.log(`${name} (${location}) is already at version ${rootPackage.version} skipping`)
    }
  }
}

// Execute the async function
syncVersions().catch(console.error) 