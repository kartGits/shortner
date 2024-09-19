import {PUBLIC_POCKETBASE_URL} from "$env/static/public"
import Pocketbase from "pocketbase"

const pb = new Pocketbase(PUBLIC_POCKETBASE_URL)
const url = 'https://but-phrase.pocketbase.io/'
const client = new Pocketbase(url)
const records = await client.collection('posts').getFullList({
    sort: '-created',
});
export default pb