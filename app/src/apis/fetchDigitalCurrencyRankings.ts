export interface DigitalCurrencyRankings {
    rank: number
    symbol: string
    name: string
    marketCap: number
    price: number
}

export interface ApiResults {
    data: DigitalCurrencyRankings[]
}

/**
 * バックエンドから暗合通貨時価総額ランキングを取得する
 * 
 * @param limit 
 * @param sort 
 * @returns 
 */
export async function fetchDigitalCurrencyRankings(limit: number = 50, sort: 'asc' | 'desc' = 'asc'): Promise <ApiResults> {
    const response = await fetch(
        `${import.meta.env.API_BASE_URL}/api/digital-currency-rankings?limit=${limit}&sort=${sort}`
    );

    return await (await response.json()) as ApiResults;
}