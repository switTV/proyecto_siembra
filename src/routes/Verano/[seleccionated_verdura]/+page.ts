import type { PageLoad } from './$types';
import verduras from "../../../json/verduras.json"

export const load = (async (params) => {
    const fetch_verdura = async (id:number) => {
        let res = verduras.Verano[id]
        const data = res
        return data
    }
    return {
        verdura: fetch_verdura(parseInt(params.params.seleccionated_verdura))
    }
}) satisfies PageLoad;