// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "2016.2",
      text: {
        headline: "PHUKET TRIP",
        text: "<p>Thailand’s largest island is an international magnet for beach lovers and serious divers, who enthusiastically submerge themselves in the Andaman Sea. Blue lagoons and salmon sunsets make for a dream-like atmosphere, and indeed, a vacation here can feel a bit surreal. Watersports are the most popular activities, though once you’ve had enough sun there’s still plenty to explore at the island’s aquariums, gardens, and Buddhist temples.</p><p>Let’s get started!</p>"
      },
      media: {
        url: "1.jpg",
        credit: "Thailand",
        caption: "About Phuket Island"
      }
    }, {
      date: "2016",
      text: {
        headline: "PATONG BEACH",
        text: "<p> Patong is the most famous beach resort on Phuket. With its wide variety of activities and nightlife, Patong is an ideal place to party and play. By night the town has a bustling nightlife which includes hundreds of restaurants, beer bars, and of course night clubs.</p><p>Patong Beach is too crowded for me and the seawater is not that satisfying. But I really enjoyed watching the sunset when walking alongside the beach with my friends!</p>"
      },
      location: {
        name: "Patong Island, Patong",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 7.89526,
        lon: 98.287666,
        zoom: 16,
        line: true
      },
      media: {
        url: "2.jpg",
        type: 		"image",
        credit: "Phuket",
        caption: "Patong Island"
      }
    }, {
      date: "2016",
      text: {
        headline: "JUNCEYLON SHOPPING MALL",
        text: "<p>Standing downtown, diagonally opposite Bangla Road, the Jungceylon Shopping Mall has two main stores in the complex are Robinson - a gleaming well-lit upper end department store, and Big C supermarket. Perfect for rainy days or to escape the heat of the day.</p> "
      },
      location: {
        name: "Junceylon shopping mall",
        lat: 7.8912205,
        lon: 98.2970008,
        zoom: 16,
        line: true
      },
      media: {
        url: "3.jpg",
        credit: "Phuket",
        caption: "Junceylon Shopping Mall"
      }
    }
    , {
      date: "2016",
      text: {
        headline: "Banzaan Market",
        text: "<p>It’s a modern-looking Thai fresh market on Sai Kor Road, right behind the megamall Jungceylon. Basically, you can get anything that one would expect from a local market here but in a much more pleasant environment.</p><p>Many visitors go there for tasting local fresh seafood. But it’s worth to mention that the marked price is much higher than it deserves. So remember to bargain with the sellers.</p>"
      },
      location: {
        name: "Banzaan market",
        lat: 7.8912428,
        lon: 98.2996783,
        zoom: 16,
        line: true
      },
      media: {
        url: "4.jpg",
        credit: "Phuket",
        caption: "Banzaan Market"
      }
    }, {
      date: "2016",
      text: {
        headline: "Racha Island",
        text: "<p>The Racha islands, some 12 km south of Phuket, are best known as excellent diving and snorkeling daytrip destinations. The water here is clear and perfect for snorkeling, though the bay gets quite busy with visiting boats in the afternoons.</p><p>Long-tail and speedboat transfers may be arranged from Chalong Pier or Rawai, and the trip takes from 45 minutes to more than an hour depending on the boat.</p> "
      },
      location: {
        name: "Racha island",
        lat: 7.608377,
        lon: 98.3670757,
        zoom: 16,
        line: true
      },
      media: {
        url: "5.jpg",
        credit: "Racha Island",
        caption: "Kon Kea Bay"
      }
    }, {
      date: "2016",
      text: {
        headline: "Siam Bay",
        text: "<p>The beach was quite and peaceful after 5pm when the one-day tourists left. At night, it’s a pretty place where lonely strolls in solitude are possible. We spent two nights at Rayaburi Resort at Siam Bay.</p> "
      },
      location: {
        name: "Siam bay",
        lat: 7.6087511,
        lon: 98.370372,
        zoom: 16,
        line: true
      },
      media: {
        url: "6.jpg",
        credit: "Racha Island",
        caption: "Siam Bay"
      }
    }
    ]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}