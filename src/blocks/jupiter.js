const BlockType = require('../extension-support/block-type');
const ArgumentType = require('../extension-support/argument-type');
// const {Buffer} = require('buffer');
// const JUP_API = 'https://quote-api.jup.ag/v6';

// eslint-disable-next-line max-len
const JupIconURI = 'data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22katman_1%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20xmlns%3Axlink%3D%22http%3A//www.w3.org/1999/xlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20800%20800%22%20style%3D%22enable-background%3Anew%200%200%20800%20800%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bfill%3A%23141726%3B%7D.st1%7Bfill%3Aurl(%23SVGID_1_)%3B%7D.st2%7Bfill%3Aurl(%23SVGID_2_)%3B%7D.st3%7Bfill%3Aurl(%23SVGID_3_)%3B%7D.st4%7Bfill%3Aurl(%23SVGID_4_)%3B%7D.st5%7Bfill%3Aurl(%23SVGID_5_)%3B%7D.st6%7Bfill%3Aurl(%23SVGID_6_)%3B%7D%3C/style%3E%3Ccircle%20class%3D%22st0%22%20cx%3D%22400%22%20cy%3D%22400%22%20r%3D%22400%22/%3E%3ClinearGradient%20id%3D%22SVGID_1_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%22574.9257%22%20y1%3D%22665.8727%22%20x2%3D%22248.5257%22%20y2%3D%22142.3127%22%20gradientTransform%3D%22matrix(1%200%200%20-1%200%20800)%22%3E%3Cstop%20offset%3D%220.16%22%20style%3D%22stop-color%3A%23C6F462%22/%3E%3Cstop%20offset%3D%220.89%22%20style%3D%22stop-color%3A%2333D9FF%22/%3E%3C/linearGradient%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M536%2C568.9c-66.8-108.5-166.4-170-289.4-195.6c-43.5-9-87.2-8.9-129.4%2C7.7c-28.9%2C11.4-33.3%2C23.4-19.7%2C53.7%0A%09c92.4-21.9%2C178.4-1.5%2C258.9%2C45c81.1%2C46.9%2C141.6%2C112.2%2C169.1%2C205c38.6-11.8%2C43.6-18.3%2C34.3-54.2C554.3%2C609.4%2C547.4%2C587.4%2C536%2C568.9%0AL536%2C568.9z%22/%3E%3ClinearGradient%20id%3D%22SVGID_2_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%22572.5896%22%20y1%3D%22667.3303%22%20x2%3D%22246.1996%22%20y2%3D%22143.7703%22%20gradientTransform%3D%22matrix(1%200%200%20-1%200%20800)%22%3E%3Cstop%20offset%3D%220.16%22%20style%3D%22stop-color%3A%23C6F462%22/%3E%3Cstop%20offset%3D%220.89%22%20style%3D%22stop-color%3A%2333D9FF%22/%3E%3C/linearGradient%3E%3Cpath%20class%3D%22st2%22%20d%3D%22M609.1%2C480.6c-85.8-125-207.3-194.9-355.8-218.3c-39.3-6.2-79.4-4.5-116.2%2C14.3c-17.6%2C9-33.2%2C20.5-37.4%2C44.9%0A%09c115.8-31.9%2C219.7-3.7%2C317.5%2C53c98.3%2C57%2C175.1%2C133.5%2C205%2C251.1c20.8-18.4%2C24.5-41%2C19.1-62C633.9%2C534.8%2C625.5%2C504.5%2C609.1%2C480.6%0AL609.1%2C480.6z%22/%3E%3ClinearGradient%20id%3D%22SVGID_3_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%22577.0148%22%20y1%3D%22664.5671%22%20x2%3D%22250.6247%22%20y2%3D%22141.0071%22%20gradientTransform%3D%22matrix(1%200%200%20-1%200%20800)%22%3E%3Cstop%20offset%3D%220.16%22%20style%3D%22stop-color%3A%23C6F462%22/%3E%3Cstop%20offset%3D%220.89%22%20style%3D%22stop-color%3A%2333D9FF%22/%3E%3C/linearGradient%3E%3Cpath%20class%3D%22st3%22%20d%3D%22M105%2C488.6c7.3%2C16.2%2C12.1%2C34.5%2C23%2C47.6c5.5%2C6.7%2C22.2%2C4.1%2C33.8%2C5.7c1.8%2C0.2%2C3.6%2C0.5%2C5.4%2C0.7%0A%09c102.9%2C15.3%2C184.1%2C65.1%2C242.1%2C152c3.4%2C5.1%2C8.9%2C12.7%2C13.4%2C12.7c17.4-0.1%2C34.9-2.8%2C52.5-4.5C449%2C557.5%2C232.8%2C438.3%2C105%2C488.6%0AL105%2C488.6z%22/%3E%3ClinearGradient%20id%3D%22SVGID_4_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%22569.0272%22%20y1%3D%22669.5518%22%20x2%3D%22242.6272%22%20y2%3D%22145.9917%22%20gradientTransform%3D%22matrix(1%200%200%20-1%200%20800)%22%3E%3Cstop%20offset%3D%220.16%22%20style%3D%22stop-color%3A%23C6F462%22/%3E%3Cstop%20offset%3D%220.89%22%20style%3D%22stop-color%3A%2333D9FF%22/%3E%3C/linearGradient%3E%3Cpath%20class%3D%22st4%22%20d%3D%22M656.6%2C366.7C599.9%2C287.4%2C521.7%2C234.6%2C432.9%2C197c-61.5-26.1-125.2-41.8-192.8-33.7%0A%09c-23.4%2C2.8-45.3%2C9.5-63.4%2C24.7c230.9%2C5.8%2C404.6%2C105.8%2C524%2C303.3c0.2-13.1%2C2.2-27.7-2.6-39.5C686.1%2C422.5%2C674.7%2C392%2C656.6%2C366.7z%22/%3E%3ClinearGradient%20id%3D%22SVGID_5_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%22571.6973%22%20y1%3D%22667.8917%22%20x2%3D%22245.2973%22%20y2%3D%22144.3317%22%20gradientTransform%3D%22matrix(1%200%200%20-1%200%20800)%22%3E%3Cstop%20offset%3D%220.16%22%20style%3D%22stop-color%3A%23C6F462%22/%3E%3Cstop%20offset%3D%220.89%22%20style%3D%22stop-color%3A%2333D9FF%22/%3E%3C/linearGradient%3E%3Cpath%20class%3D%22st5%22%20d%3D%22M709.8%2C325.3c-47-178.9-238-265-379.2-221.4C482.7%2C133.9%2C607.5%2C206.4%2C709.8%2C325.3z%22/%3E%3ClinearGradient%20id%3D%22SVGID_6_%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%22579.0382%22%20y1%3D%22663.3111%22%20x2%3D%22252.6482%22%20y2%3D%22139.7511%22%20gradientTransform%3D%22matrix(1%200%200%20-1%200%20800)%22%3E%3Cstop%20offset%3D%220.16%22%20style%3D%22stop-color%3A%23C6F462%22/%3E%3Cstop%20offset%3D%220.89%22%20style%3D%22stop-color%3A%2333D9FF%22/%3E%3C/linearGradient%3E%3Cpath%20class%3D%22st6%22%20d%3D%22M155.4%2C583.9c54.6%2C69.3%2C124%2C109.7%2C213%2C122.8C334.4%2C643.2%2C214.6%2C574.5%2C155.4%2C583.9L155.4%2C583.9z%22/%3E%3C/svg%3E';

class Jupiter {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        return {
            id: 'jupiter',
            name: 'Jupiter',
            color1: '#008080',
            color2: '#008080',
            blocks: [
                {
                    opcode: 'fetchPrice',
                    blockType: BlockType.REPORTER,
                    text: '[JUPITER] Fetch price of token [ca]',
                    arguments: {
                        ca: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Contract Address'
                        },
                        JUPITER: {
                            type: ArgumentType.IMAGE,
                            dataURI: JupIconURI
                        }
                    }
                }

            ],
            menus: {
                networks: {
                    acceptReporters: true,
                    items: ['mainnet-beta', 'devnet', 'testnet']
                }
            }
        };
    }

    async fetchPrice (args) {
        const ca = args.ca;
        try {
            const response = await fetch(`https://api.jup.ag/price/v2?ids=${ca}`);
            if (!response.ok) {
                return 'Error fetching price';
            }
            const data = await response.json();
            const price = data.data[ca]?.price;
            if (!price) {
                return 'Price data not available for the given token.';
            }
            return price;
        } catch (error) {
            console.error(error);
        }
    }

}

module.exports = Jupiter;
