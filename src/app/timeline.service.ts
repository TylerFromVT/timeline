import {Injectable} from '@angular/core';
import {Timeline} from './timeline';

@Injectable()
export class TimelineService {

  constructor() {
  }

  get(): Timeline {
    console.debug('Timeline Service Get');

    const myObj = [
      {
        keywords: ['Brown'],
        date: 'June 1971',
        title: 'Construction starts on first addition to Northmont'
      },
      {
        keywords: ['Brown'],
        date: 'June 1971',
        title: 'Tyler finishes third grade at Chevy Chase Elementary'
      },
      {
        keywords: ['Brown'],
        date: 'October 1971',
        title: 'Sam the German Shepherd comes to the Browns'
      },
      {
        keywords: ['Brown'],
        date: '1973',
        title: 'Tyler\'s dog bite.'
      },
      {
        keywords: ['Brown'],
        date: 'December 1971',
        title: 'Ron, Betty and Tyler celebrate at Northmont'
      },
      {
        keywords: ['Brown'],
        date: 'Spring 1972',
        title: 'Ron and Betty start building the big addition onto Northmont'
      },
      {
        keywords: ['Brown'],
        date: 'December 1972',
        title: 'Christmas at Northmont',
        details: 'Kathy, Mike Walsh and Sean come to Maine to celebrate. Nana is there too. The new addition is ' +
        'enclosed and we have Christmas morning in the new living room.'
      },
      {
        keywords: ['Brown', 'Overman'],
        date: 'November, 1972',
        title: 'Thanksgiving in Fenton'
      },
      {
        keywords: ['Pop Culture'],
        date: 'December 23, 1972',
        title: 'The Immaculate Reception helps the Steelers beat the Raiders'
      },
      {
        keywords: ['Brown'],
        date: 'September 1970',
        title: 'Betty, Ron and Tyler visit Northmont and meet the David\'s there',
        details: 'This apparently was right after Mom and Dad actually signed the contract on the camp. We stayed on ' +
        'after the David\'s left for some time. I believe I actually had schoolwork that I had ' +
        'to keep up with while we were in Maine.'
      },
      {
        keywords: ['Brown'],
        date: 'May 1970',
        title: 'Betty, Ron and Tyler take extended east coast vacation',
        details: 'We visited the Okefenokee Swamp and paddled with alligators, stayed on Buck Lake and met the' +
        'folks from Canada who lived out of their RV and hiked in the Smokies. We had a skunk come into the Apache ' +
        'pop-up camper one night.'
      },
      {
        keywords: ['Brown'],
        date: 'May 26, 1970',
        title: 'Sean Walsh born.'
      },
      {
        keywords: ['Kremzner'],
        date: '1924',
        title: 'Leon T. Kremzner born in Wyszków, Poland'
      },
      {
        keywords: ['Kremzner'],
        date: 'September 20, 1921',
        title: 'Stan Kremzner born in Poland'
      },
      {
        keywords: ['Kremzner'],
        date: 'November 30, 1959',
        title: 'Catherine (Cathy) Kremzner born'
      },
      {
        keywords: ['Tyler & Meg'],
        date: 'June 12, 2010',
        title: 'Tyler and Meg meet in Rome for an Italian vacation'
      },
      {
        keywords: ['Tyler & Meg'],
        date: 'June 6, 2010',
        title: 'Tyler flies to Lodz, Poland for work'
      },
      {
        keywords: ['Tyler & Meg'],
        date: 'March 23, 2011',
        title: 'Meg and Tyler fly to Madrid to vacation in Spain'
      },
      {
        keywords: ['Brown', 'Tyler & Meg'],
        date: 'October 14, 2007',
        title: 'Tyler and Ron fly to Denver and meet Rod'
      },
      {
        keywords: ['Tyler & Meg'],
        date: 'October 4, 2007',
        title: 'Tyler and Meg meet in Paris'
      },
      {
        keywords: ['Tyler & Meg'],
        date: 'October 2007',
        title: 'Tyler has a busy October'
      },
      {
        keywords: ['Tyler & Meg'],
        date: 'October 1, 2007',
        title: 'Tyler travels to Ghent for work'
      },
      {
        keywords: ['Kremzner'],
        date: '1921',
        title: 'The Kremzners and Kotulinskis travel to Poland'
      },
      {
        keywords: ['Kremzner'],
        date: '1921',
        title: 'Mary Kotulinski dies in Poland'
      },
      {
        keywords: ['Kremzner'],
        date: '1919',
        title: 'Sid Kremzner born in New Jersey'
      },
      {
        keywords: ['Kremzner'],
        date: '1917',
        title: 'The Kremzners and Kotulinskis return to New Jersey'
      },
      {
        keywords: ['Kremzner'],
        date: '1915',
        title: 'Elizabeth Kotulinski born in Los Angeles'
      },
      {
        keywords: ['Kremzner'],
        date: 'September 1913',
        title: 'Sigmunt Kremzner and Valaria Daneski married'
      },
      {
        keywords: ['Kremzner'],
        date: '1914',
        title: 'The Kremzners go to California'
      },
      {
        keywords: ['Tyler & Meg'],
        date: 'August 2007',
        title: 'Tyler and Meg vacation at Sail Away in New Harbor, Maine'
      },
      {
        keywords: ['Tyler & Meg'],
        date: 'March 2007',
        title: 'Tyler and Meg go to Saint Lucia'
      },
      {
        keywords: ['Brown'],
        date: 'April 1973',
        title: 'Betty breaks her leg skiing on Sugarloaf'
      },
      {
        keywords: ['Brown'],
        date: 'October 1972',
        title: 'Ron\'s Uncle Thayne dies'
      },
      {
        keywords: ['Brown'],
        date: 'August 1971',
        title: 'Betty and Ron decide to move to Northmont'
      },
      {
        keywords: ['Brown', 'Tyler & Meg'],
        date: 'September 1971',
        title: 'Tyler starts fourth grade at Central Elementary'
      },
      {
        keywords: ['Brown'],
        date: 'September 1970',
        title: 'Betty and Ron buy Northmont'
      },
      {
        keywords: ['Brown'],
        date: 'January 1971',
        title: 'Betty and Ron visit Northmont in the dead of winter'
      },
      {
        keywords: ['Kremzner'],
        date: 'October 1990',
        title: 'Brian Kremzner died'
      },
      {
        keywords: ['Kremzner', 'Tyler & Meg'],
        date: 'July 25, 1987',
        title: 'Meg and Roger married'
      },
      {
        keywords: ['Kremzner'],
        date: 'March 31, 1990',
        title: 'Barbie\'s Wedding'
      },
      {
        keywords: ['Brown', 'Tyler & Meg'],
        date: 'October 1, 1962',
        title: 'Tyler born in Washington DC'
      },
      {
        keywords: ['Kremzner', 'Tyler & Meg'],
        date: 'August 15, 1959',
        title: 'Meg born in Morristown, NJ'
      },
      {
        keywords: ['Kremzner', 'Brown', 'Tyler & Meg'],
        date: 'August 23, 2004',
        title: 'Meg and Tyler get married'
      }
    ];

    return new Timeline(myObj);
  }

}
