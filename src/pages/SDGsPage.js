import React from "react";
import SDGCard from "../components/SDGCard";
import "../styles/SDGsPage.css"; // Make sure to create and import the CSS file

const sdgs = [

    {
        title: "SDG 1: No Poverty",
        image: "https://as2.ftcdn.net/v2/jpg/01/86/02/95/1000_F_186029577_LjdN0k9a05R6P0Ad1akuXIpiSvnwFUuQ.jpg",
        moreInfo: "<h4>Key Targets</h4>\n" +
            "<ul>\n" +
            "    <li>Eradicate extreme poverty (&lt;$1.90/day).</li>\n" +
            "    <li>Reduce poverty by 50% (national definitions).</li>\n" +
            "    <li>Expand social protection systems.</li>\n" +
            "    <li>Build resilience to shock.</li>\n" +
            "</ul>\n" +
            "<h4>Importance</h4>\n" +
            "<ul>\n" +
            "<li>Central to sustainable development.</li>\n" +
            "<li> Poverty reduction improves global stability & equality.</li>\n" +
            "<ul>\n" +
            "<h4>Challenges</h4>\n" +
            "<ul>\n" +
            "<li>Growing economic inequality.</li>\n" +
            "<li>Lack of social safety nets.</li>\n" +
            "<li>Impact of climate change & conflict.</li>\n" +
            "<li>Setbacks due to COVID-19.</li>\n" +
            "</ul>\n" +
            "<h4>Future Outlook</h4>\n" +
            "<ul>\n" +
            "<li>Declining global poverty rates.</li>\n" +
            "<li>Accelerated action needed, especially in sub-Saharan Africa & South Asia.</li>\n" +
            "</ul>\n",
          shortDescription: "Eradicate poverty in all its forms and ensure that a"
    },

    {
        title: "SDG 2: Zero Hunger",
        image: "https://www.posterfortomorrow.org/images/thumbs/entries/1000x1400/23262/23262_58dbd35776c7f2c497b567c5cb8128a1.jpg" ,
        description: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture to ensure everyone has access to nuritious food.",
        moreInfo: "<p> <h3>Key Targets</h3>\n" +
            "<ul type = “disc”>\n" +
            "<li> End hunger & ensure year-round access to safe, nutritious food. </li> \n" +
            "<li> End all forms of malnutrition, focusing on vulnerable groups. </li> \n" +
            "<li>  Double agricultural productivity & incomes of small-scale producers. </li> \n" +
            "<li>  Promote sustainable & resilient food production systems. </li>  </ul>\n" +
            "<br> <h3>Importance</h3> \n" +
            "<ul type =”disc”> <li>Improves global health & nutrition. </li>  <li> Supports economic growth & poverty reduction. </li>  <li> Promotes environmental sustainability & biodiversity. </li> </ul> \n" +
            "<br><h3>Challenges</h3>\n" +
            "<ul type=”disc”> <li> Climate change impacts on food production. </li> <li> Conflicts & political instability disrupting supply chains. </li> <li>Economic inequality limiting access to resources for small-scale farmers.</li> </ul>\n" +
            "<br><h3>Future Outlook</h3>\n" +
            "<ul type=”disc”> <li> Growth in sustainable agriculture & farming innovations. </li>  <li>Strengthened international partnerships for food security. </li><li> Accelerated actions needed in vulnerable regions by 2030.</li></ul>\n" +
            ""
    },

    {
        title: "SDG 3: Good Health and Well-being" ,
        image: "https://www.sanitascare.health/images/hw.jpg",
        description:"Ensure healthy lives and promote well-being for all at all ages through access to quality healthcare and healthy living conditions",
        moreInfo: "" 

    },
    {
        title: "SDG 4: Quality Education",
        image: "https://static.vecteezy.com/system/resources/previews/041/169/590/non_2x/enneagram-peacemaker-type-illustration-flat-illustration-vector.jpg" ,
        description: "Ensure inclusive and exquitable quality education and promote lifelong opportunnities for all",
        moreInfo: "Further information about SDG 1."
    },
    {
          title: "SDG 5: Gender Equality",
        image: "https://static.vecteezy.com/system/resources/previews/044/793/305/non_2x/gender-equality-men-and-women-have-equal-rights-feminism-vector.jpg" ,
        description: "Achieve gender equality",
        moreInfo: "Further information about SDG 1."
    },
    {
      
        title: "SDG 6: Clean Water and Sanitation",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxxWcH2kRQ_e-1j9CNZ4yxFihUNrEz86wtQ&s",
        description: "End poverty in all its forms everywhere.",
        moreInfo:""
    },
    {
          title: "SDG 7: Affordable and Clean Energy",
        image: "https://whatcanyoudo.earth/wp-content/uploads/2022/03/SDG-7-%E2%80%93-Affordable-and-Clean-Energy-An-Update.jpg" ,
        description: "Ensure access to affordable, reliabe, sustainable and modern energy for all.",
        moreInfo: "Further information about SDG 1."
    },
    {
          title: "SDG 8: Decent Work and Economic Growth",
        image: "https://t3.ftcdn.net/jpg/04/47/21/02/360_F_447210212_XJFKPIYPVDXSEdoS3qpGYmjXtUQg1csd.jpg",
        description: "Promote sustained, inclusive, and sustainable economic growth, full and productiveemployment, and decent work for all.",
        moreInfo: "Further information about SDG 1."
    },
    {
        title: "SDG 9: Industry, Innovation, and Infrastructure",
        image: " https://s31955.pcdn.co/wp-content/uploads/2020/07/iStock-1164502175.jpg" ,
        description: "Develop resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation.",
        moreInfo: "Further information about SDG 1."
    },
    {
        title: "SDG 10: Reduced Inequality",
        image: "https://lh5.googleusercontent.com/aSUx5JZOV3J1_ci4WukWWz_O-GIQJqZx2mpRiZJXr7XtbwZP6FvUKGKiD8oCkLdv_M0fDoXCsG049dqvTYzwEEs3qF5RgR-T5kBY3LovYtxmN44HZ3ZXqhkHfzblmocylZrUDfAC" ,
        description: "Reduce inequality within and among countries by promoting economic inclusion and social protection",
        moreInfo: "Further information about SDG 1."
    },
    {
        title: "SDG 11: Sustainable Cities and Communities",
        image: "https://i0.wp.com/wearerestless.org/wp-content/uploads/2016/11/HiRes.jpg?fit=5556%2C5556&ssl=1",
        description: "Make cities and human settlements inclusive, safe, resilient, and sustainable.",
        moreInfo: "Further information about SDG 1."
    },
    {
        title: "SDG 12: Responsible Consumption and Production",
        image: "https://www.blog-qhse.com/hs-fs/hubfs/rse%20fond.jpg?width=735&height=490&name=rse%20fond.jpg" ,
        description: "Ensure sustainable consumption and production patterns to reduce waste and promote sustainable lifestyles",
        moreInfo: "Further information about SDG 1."
    },
    {
        title: "SDG 13: Climate Action" ,
        image: "https://content.unops.org/photos/News-and-Stories/News/_image1920x900/header_2795x1310_dark.png" ,
        description: "Take urgent action to combat climate change and its impacts by reducing greenhouse gas emissions and promoting sustainable practices",
        moreInfo: "Further information about SDG 1."
    },
    {
          title: "SDG 14: Life Below Water",
          image: "https://static1.squarespace.com/static/5a4f9fc8bff200ea5935551f/t/61658e0c0276a61009ba1ad7/1634045452798/14_SDG_life_below_water.png?format=1500w " ,
        description: "Conserve and sustainably use the wrold's oceans, seas, and marine resources for sustainable development.",
        moreInfo: "Further information about SDG 1."
    },
    {
          title: "SDG 15: Life On Land",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkUVNVwcEESDlaCUyMtUofY5hPWW4Anr9vIg&s" ,
        description: "Protect, restore, and promote sustainable use of terrestrial ecosystems, forests, and biodiversity",
        moreInfo: "Further information about SDG 1."
    },
    {
          title: "SDG 16: Peace, Justice, and Strong Institutions",
          image: " https://img.freepik.com/free-vector/symbol-peace-justice_1308-168050.jpg" ,
        descsription: "Promote peaceful and inclusive societies, access to justice, and effective instituitions",
        moreInfo: "Further information about SDG 1."
    },
    {
          title: "SDG 17: Partnerships to Achieve the Goal",
          image: " https://static.vecteezy.com/system/resources/previews/007/381/721/non_2x/team-achievement-teamwork-collaborate-work-together-to-achieve-business-goal-winning-award-or-success-partnership-or-cooperate-concept-business-team-people-celebrate-help-carry-big-winner-trophy-vector.jpg " ,
        description: "Strengthen global partnerships and cooperation to achieve the Sustainable Development Goals.",
        moreInfo: "Further information about SDG 1."
    }

    // Add other SDGs here
];

const SDGsPage = () => {
    return (
        <div className="sdgs-page">
            <h2>Explore the Sustainable Development Goals (SDGs)</h2>
            <div className="sdgs-container">
                {sdgs.map((sdg, index) => (
                    <SDGCard
                        key={index}
                        title={sdg.title}
                        description={sdg.description}
                        image={sdg.image}
                        moreInfo={sdg.moreInfo}
                        shortDescription={sdg.shortDescription}
                    />
                ))}
            </div>
        </div>
    );
};

export default SDGsPage;






//v1
// const sdgs = [
//   { title: "SDG 1: No Poverty",
//      image: "https://as2.ftcdn.net/v2/jpg/01/86/02/95/1000_F_186029577_LjdN0k9a05R6P0Ad1akuXIpiSvnwFUuQ.jpg"},
//
//   { title: "SDG 2: Zero Hunger",image: "https://www.posterfortomorrow.org/images/thumbs/entries/1000x1400/23262/23262_58dbd35776c7f2c497b567c5cb8128a1.jpg" },
//
//   { title: "SDG 3: Good Health and Well-being" ,image: "https://www.sanitascare.health/images/hw.jpg" },
// { title: "SDG 4: Quality Education", image: "https://static.vecteezy.com/system/resources/previews/041/169/590/non_2x/enneagram-peacemaker-type-illustration-flat-illustration-vector.jpg" },
//   { title: "SDG 5: Gender Equality", image: "https://static.vecteezy.com/system/resources/previews/044/793/305/non_2x/gender-equality-men-and-women-have-equal-rights-feminism-vector.jpg" },
//   { title: "SDG 6: Clean Water and Sanitation", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxxWcH2kRQ_e-1j9CNZ4yxFihUNrEz86wtQ&s" },
//   { title: "SDG 7: Affordable and Clean Energy", image: "https://whatcanyoudo.earth/wp-content/uploads/2022/03/SDG-7-%E2%80%93-Affordable-and-Clean-Energy-An-Update.jpg" },
//   { title: "SDG 8: Decent Work and Economic Growth", image: "https://t3.ftcdn.net/jpg/04/47/21/02/360_F_447210212_XJFKPIYPVDXSEdoS3qpGYmjXtUQg1csd.jpg" },
//   { title: "SDG 9: Industry, Innovation, and Infrastructure", image: " https://s31955.pcdn.co/wp-content/uploads/2020/07/iStock-1164502175.jpg" },
//   { title: "SDG 10: Reduced Inequality",image: "https://lh5.googleusercontent.com/aSUx5JZOV3J1_ci4WukWWz_O-GIQJqZx2mpRiZJXr7XtbwZP6FvUKGKiD8oCkLdv_M0fDoXCsG049dqvTYzwEEs3qF5RgR-T5kBY3LovYtxmN44HZ3ZXqhkHfzblmocylZrUDfAC" },
//   { title: "SDG 11: Sustainable Cities and Communities",image: "https://i0.wp.com/wearerestless.org/wp-content/uploads/2016/11/HiRes.jpg?fit=5556%2C5556&ssl=1"},
//   { title: "SDG 12: Responsible Consumption and Production",image: "https://www.blog-qhse.com/hs-fs/hubfs/rse%20fond.jpg?width=735&height=490&name=rse%20fond.jpg" },
//   { title: "SDG 13: Climate Action" ,image: "https://content.unops.org/photos/News-and-Stories/News/_image1920x900/header_2795x1310_dark.png" },
//   { title: "SDG 14: Life Below Water", image: "https://static1.squarespace.com/static/5a4f9fc8bff200ea5935551f/t/61658e0c0276a61009ba1ad7/1634045452798/14_SDG_life_below_water.png?format=1500w " },
//   { title: "SDG 15: Life On Land",image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkUVNVwcEESDlaCUyMtUofY5hPWW4Anr9vIg&s" },
//   { title: "SDG 16: Peace, Justice, and Strong Institutions", image: " https://img.freepik.com/free-vector/symbol-peace-justice_1308-168050.jpg" },
//   { title: "SDG 17: Partnerships to Achieve the Goal",image: " https://static.vecteezy.com/system/resources/previews/007/381/721/non_2x/team-achievement-teamwork-collaborate-work-together-to-achieve-business-goal-winning-award-or-success-partnership-or-cooperate-concept-business-team-people-celebrate-help-carry-big-winner-trophy-vector.jpg " }
// ];
//
// const SDGsPage = () => {
//   return (
//       <div className="sdgs-page">
//           <h2>Explore the Sustainable Development Goals (SDGs)</h2>
//           <div className="sdgs-container">
//             {sdgs.map((sdg, index) => (
//               <SDGCard key={index} title={sdg.title} description={sdg.description} image={sdg.image} />
//             ))}
//           </div>
//       </div>
//   );
// };
//
// export default SDGsPage;
//


// const SDGsPage = () => {
//   return (
//     <div>
//       <h2>Explore the Sustainable Development Goals (SDGs)</h2>
//       <div className="sdgs-container">
//         {sdgs.map((sdg, index) => (
//           <SDGCard key={index} sdg={sdg} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SDGsPage;







// import React from "react";
// import SDGCard from "../components/SDGCard";

// const sdgs = [
//     {
//         title: "SDG 1: No Poverty",
//         image: "https://as2.ftcdn.net/v2/jpg/01/86/02/95/1000_F_186029577_LjdN0k9a05R6P0Ad1akuXIpiSvnwFUuQ.jpg",
//     },
//     {
//         title: "SDG 2:  Zero Hunger",
//         description: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture.",
//         // image: "https://via.placeholder.com/150"
//     },
//     {
//         title: "SDG 3: Good Health and Well-being",
//         description: "Ensure healthy lives and promote well-being for all at all ages",
//         // image: "https://via.placeholder.com/150"
//     },
//     {
//         title: "SDG 4: Quality Education",
//         description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
//         // image: "https://via.placeholder.com/150"
//     },
//     {
//         title: "SDG 5: Gender Equality ",
//         description: "Achieve gender equality and empower all women and girls.",
//         // image: "https://via.placeholder.com/150"
//     },
//     {
//         title: "SDG 6:  Clean Water and Sanitation",
//         description: "Ensure availability and sustainable management of water and sanitation for all.",
//         // image: "https://via.placeholder.com/150"
//     },
//     {
//         title: "SDG 7: Affordable and Clean Energy",
//         description: "Ensure access to affordable, reliable, sustainable, and modern energy for all.",
//         // image: "https://via.placeholder.com/150"
//     },
//     {
//         title: "SDG 8: Decent Work and Economic Growth",
//         description:"Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.",
//         // image: "https://via.placeholder.com/150"
//     },
//     {
//         title: "SDG 9: Industry, Innovation, and Infrastructure",
//         description: "Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation.",
//         // image: "https://via.placeholder.com/150"
//     },
//     {
//         title: "SDG 10:  Reduced Inequality",
//         description: " Reduce inequality within and among countries.",
//         // image: "https://via.placeholder.com/150"
//     },
//     {
//         title: "SDG 11: Sustainable Cities and Communities",
//         description: "Make cities and human settlements inclusive, safe, resilient, and sustainable.",
//         // image: "https://via.placeholder.com/150"
//     },
//     {
//         title: "SDG 12:  Responsible Consumption and Production",
//         description: "Ensure sustainable consumption and production patterns.",
//         // image: "https://via.placeholder.com/150"
//     },
//     {
//         title: "SDG 13: Climate Action",
//         description:"Take urgent action to combat climate change and its impacts.",
//         // image: "https://via.placeholder.com/150"
//     },
//     {
//         title: "SDG 14: Life Below Water",
//         description: "Conserve and sustainably use the oceans, seas, and marine resources for sustainable development.",
//         // image: "https://via.placeholder.com/150"
//     },
//     {
//         title: "SDG 15: Life On Land",
//         description: "Protect, restore, and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.",
//         // image: "https://via.placeholder.com/150"
//     },
//     {
//         title: "SDG 16: Peace,Justice, and Strong Institutions",
//         description: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all, and build effective, accountable, and inclusive institutions at all levels.",
//         // image: "https://via.placeholder.com/150"
//     },
//     {
//         title: "SDG 17: Partnerships to Achieve the Goal",
//         description: "Strengthen the means of implementation and revitalize the global partnership for sustainable development.",
//         // image: "https://via.placeholder.com/150"
//     },
// ];

// const SDGsPage = () => {
//     return (
//         <div>
//             <h2>Explore the Sustainable Development Goals (SDGs)</h2>
//             <div className="sdgs-container">
//                 {sdgs.map((sdg, index) => (
//                     <SDGCard key={index} sdg={sdg} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default SDGsPage;