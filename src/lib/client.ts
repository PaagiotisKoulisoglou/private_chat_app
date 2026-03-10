import { treaty } from '@elysiajs/eden'
import type { App } from '../app/api/[[...slugs]]/route'

const BASE_URL = typeof window !== "undefined" 
  ? window.location.origin 
  : process.env.NEXT_PUBLIC_APP_URL!

export const client = treaty<App>(BASE_URL).api