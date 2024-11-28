
function cookieParserTs(cookieString: string | null) {
     // Return an empty object if cookieString
     // is empty
     if (cookieString == null || (cookieString ?? '') === '') return {};
     // Get each individual key-value pairs
     // from the cookie string
     // This returns a new array
     let pairs = cookieString.split(';');
     if (pairs.length === 0) return {};

     // Separate keys from values in each pair string
     // Returns a new array which looks like
     // [[key1,value1], [key2,value2], ...]
     let splittedPairs = pairs.map((cookie) => cookie.split('='));
     // Create an object with all key-value pairs
     const cookieObj: Record<string, string> = splittedPairs.reduce(
       (obj, cookies) => {
         if (cookies === undefined || cookies == null || cookies.length < 2) {
           return obj;
         }

         const key = decodeURIComponent(cookies[0]!.trim());
         const val = decodeURIComponent(cookies[1]!.trim());
         obj[key] = val;
         return obj;
       },
       {} as Record<string, string>,
     );
     return cookieObj;
   }
