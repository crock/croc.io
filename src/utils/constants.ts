import GoTrue from "gotrue-js"
import config from "../../gatsby-config.js"

export enum CFNamespaces {
  ADMINTUTS_WEBHOOKS = "9eaef0034cbe430687d6ce0622e408a4",
}

export enum UsernameAvailability {
  true = "AVAILABLE",
  false = "TAKEN",
}

export const contentTypes = [
  "application/json",
  "application/x-www-form-urlencoded",
]

export const cloudflareApiUrl = `https://api.cloudflare.com/client/v4/accounts/3e4fe78a4982c0af15d8870130d44272`
export const productHuntApiUrl = `https://api.producthunt.com`

export const auth = new GoTrue({
  APIUrl: `${config.siteMetadata.siteUrl}/.netlify/identity`,
})
