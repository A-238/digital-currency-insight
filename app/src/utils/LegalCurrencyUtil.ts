export default class LegalCurrencyUtil {
    private static readonly locales: { [key: string]: { locale: string; currency: string } } = {
        JPY: {
            locale: 'ja-JP',
            currency: 'JPY'
        },
        USD: {
            locale: 'us-EN',
            currency: 'USD'
        },
    }

    /**
     * 指定した法定通貨表示にフォーマットする
     * 
     * @param number 
     * @param locale 
     * @returns 
     */
    static format (number: number, locale: 'JPY' | 'USD'): string {
        const formatter = new Intl.NumberFormat(this.locales[locale].locale, {
            style: 'currency',
            currency: this.locales[locale].currency
        });

        return formatter.format(number);
    }
}