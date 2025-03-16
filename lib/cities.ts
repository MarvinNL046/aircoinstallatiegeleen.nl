import { promises as fs } from 'fs'
import path from 'path'
import { parse } from 'csv-parse/sync'

export interface City {
  city: string
  region: string
  population: number
  postal_codes: string
  slug?: string
}

function createSlug(city: string): string {
  return city
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

export async function getCities(): Promise<City[]> {
  const filePath = path.join(process.cwd(), 'data', 'cities.csv')
  const fileContent = await fs.readFile(filePath, 'utf-8')
  
  const records = parse(fileContent, {
    columns: true,
    skip_empty_lines: true,
    delimiter: ',',
  }) as City[]

  return records.map(record => ({
    ...record,
    population: Number(record.population),
    slug: createSlug(record.city)
  }))
}

export async function getCityBySlug(slug: string): Promise<City | undefined> {
  const cities = await getCities()
  return cities.find(city => createSlug(city.city) === slug)
}
