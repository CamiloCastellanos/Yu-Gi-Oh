// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  dbCard: "https://db.ygoprodeck.com/api/v7/",
  dbCardRandom: "randomcard.php",
  dbCardInfo: "cardinfo.php",
  dbCardSetInfo:"cardsetsinfo.php",
  dbPrice: "http://yugiohprices.com/api/"
};

/*
https://yugiohprices.docs.apiary.io/#reference/checking-card-prices
*/

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
