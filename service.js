// let Instructions = [
//     {
//         name: 'Administer 0.05mg/ml of morphene',
//         steps: [
//             {
//                 title: 'Locate the morphene vial',
//                 description: 'Lorem ipsum dolor asit amet fgjf jdisjud cfrsbd sfnfbfj kflf jdjd jdhdyiwpqp diw9jk',
//                 image: '',
//             },
//             {
//                 title: 'Locate the morphene vial',
//                 description: 'Lorem ipsum dolor asit amet fgjf jdisjud cfrsbd sfnfbfj kflf jdjd jdhdyiwpqp diw9jk',
//                 image: '',
//             },
//             {
//                 title: 'Locate the morphene vial',
//                 description: 'Lorem ipsum dolor asit amet fgjf jdisjud cfrsbd sfnfbfj kflf jdjd jdhdyiwpqp diw9jk',
//                 image: '',
//             },
//             {
//                 title: 'Locate the morphene vial',
//                 description: 'Lorem ipsum dolor asit amet fgjf jdisjud cfrsbd sfnfbfj kflf jdjd jdhdyiwpqp diw9jk',
//                 image: '',
//             }
//         ]
//     },
//     {
//         name: 'Administer 0.05mg/ml of morphene',
//         steps: [
//             {
//                 title: 'Locate the morphene vial',
//                 description: 'Lorem ipsum dolor asit amet fgjf jdisjud cfrsbd sfnfbfj kflf jdjd jdhdyiwpqp diw9jk',
//                 image: '',
//             },
//             {
//                 title: 'Locate the morphene vial',
//                 description: 'Lorem ipsum dolor asit amet fgjf jdisjud cfrsbd sfnfbfj kflf jdjd jdhdyiwpqp diw9jk',
//                 image: '',
//             },
//             {
//                 title: 'Locate the morphene vial',
//                 description: 'Lorem ipsum dolor asit amet fgjf jdisjud cfrsbd sfnfbfj kflf jdjd jdhdyiwpqp diw9jk',
//                 image: '',
//             },
//             {
//                 title: 'Locate the morphene vial',
//                 description: 'Lorem ipsum dolor asit amet fgjf jdisjud cfrsbd sfnfbfj kflf jdjd jdhdyiwpqp diw9jk',
//                 image: '',
//             }
//         ]
//     },
//     {
//         name: 'Administer 0.05mg/ml of morphene',
//         steps: [
//             {
//                 title: 'Locate the morphene vial',
//                 description: 'Lorem ipsum dolor asit amet fgjf jdisjud cfrsbd sfnfbfj kflf jdjd jdhdyiwpqp diw9jk',
//                 image: '',
//             },
//             {
//                 title: 'Locate the morphene vial',
//                 description: 'Lorem ipsum dolor asit amet fgjf jdisjud cfrsbd sfnfbfj kflf jdjd jdhdyiwpqp diw9jk',
//                 image: '',
//             },
//             {
//                 title: 'Locate the morphene vial',
//                 description: 'Lorem ipsum dolor asit amet fgjf jdisjud cfrsbd sfnfbfj kflf jdjd jdhdyiwpqp diw9jk',
//                 image: '',
//             },
//             {
//                 title: 'Locate the morphene vial',
//                 description: 'Lorem ipsum dolor asit amet fgjf jdisjud cfrsbd sfnfbfj kflf jdjd jdhdyiwpqp diw9jk',
//                 image: '',
//             }
//         ]
//     },
//     {
//         name: 'Administer 0.05mg/ml of morphene',
//         steps: [
//             {
//                 title: 'Locate the morphene vial',
//                 description: 'Lorem ipsum dolor asit amet fgjf jdisjud cfrsbd sfnfbfj kflf jdjd jdhdyiwpqp diw9jk',
//                 image: '',
//             },
//             {
//                 title: 'Locate the morphene vial',
//                 description: 'Lorem ipsum dolor asit amet fgjf jdisjud cfrsbd sfnfbfj kflf jdjd jdhdyiwpqp diw9jk',
//                 image: '',
//             },
//             {
//                 title: 'Locate the morphene vial',
//                 description: 'Lorem ipsum dolor asit amet fgjf jdisjud cfrsbd sfnfbfj kflf jdjd jdhdyiwpqp diw9jk',
//                 image: '',
//             },
//             {
//                 title: 'Locate the morphene vial',
//                 description: 'Lorem ipsum dolor asit amet fgjf jdisjud cfrsbd sfnfbfj kflf jdjd jdhdyiwpqp diw9jk',
//                 image: '',
//             }
//         ]
//     },
// ];

let Instructions =  [
      {
        "title": "Morning Routine",
        "tasks": [
          "Help Uncle [Uncle's Name] wake up at [specified time].",
          "Prepare a nutritious breakfast according to his dietary preferences and any specific dietary restrictions. Ensure he takes any prescribed medications with his meal.",
          "Encourage light morning exercises or stretches as recommended by his healthcare provider.",
          "Attend to personal hygiene needs, such as helping with bathing, grooming, and dressing. Be attentive to any signs of discomfort or changes in health."
        ]
      },
      {
        "title": "Medication Management",
        "tasks": [
          "Administer medications strictly according to the prescribed schedule. Use a pill organizer or set alarms to help remember the correct dosage and timing.",
          "Keep a record of medications administered, including any changes in dosage or new prescriptions. Report any concerns or side effects to [your contact information or healthcare provider] promptly.",
          "Ensure that Uncle stays well-hydrated throughout the day. Provide water or other approved beverages alongside medications.",
          "Regularly check medication supplies and inform [you or another designated person] well in advance if any prescriptions need to be refilled."
        ]
      },
      {
        "title": "Evening Routine",
        "tasks": [
          "Prepare a balanced dinner for Uncle at [specified time], taking into account any dietary restrictions. Ensure he takes any evening medications as prescribed.",
          "Create a calming environment in the evening to promote relaxation. Dim the lights, engage in a quiet activity, or play soothing music to facilitate a restful atmosphere.",
          "Assist Uncle with nighttime preparations, such as changing into comfortable sleepwear and settling into bed. Ensure the bedroom is safe and conducive to a good night's sleep.",
          "If applicable, provide any necessary support for bathroom trips during the night. Ensure there is a nightlight to assist with visibility."
        ]
      }
    ];
  

function Routine(){
    return {
        init(){
            this.instructions = Instructions;
        },
        instructions: null,
        index: 0,
        key: null,
    }
}

Window.Routine = Routine;