import React from "react";
import SDGCard from "../components/SDGCard";

const sdgs = [
    {
        title: "SDG 1: No Poverty",
        description: "Eradicate poverty in all its forms everywhere, ensuring that all people have access to basic needs like food, water, shelter, and healthcare..",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 2:  Zero Hunger",
        description: "End hunger, achieve food security and improved nutrition, and promote sustainable agriculture.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 3: Good Health and Well-being",
        description: "Ensure healthy lives and promote well-being for all at all ages",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 4: Quality Education",
        description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 5: Gender Equality ",
        description: "Achieve gender equality and empower all women and girls.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 6:  Clean Water and Sanitation",
        description: "Ensure availability and sustainable management of water and sanitation for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 7: Affordable and Clean Energy",
        description: "Ensure access to affordable, reliable, sustainable, and modern energy for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 8: Decent Work and Economic Growth",
        description:"Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 9: Industry, Innovation, and Infrastructure",
        description: "Build resilient infrastructure, promote inclusive and sustainable industrialization, and foster innovation.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 10:  Reduced Inequality",
        description: " Reduce inequality within and among countries.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 11: Sustainable Cities and Communities",
        description: "Make cities and human settlements inclusive, safe, resilient, and sustainable.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 12:  Responsible Consumption and Production",
        description: "Ensure sustainable consumption and production patterns.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 13: Climate Action",
        description:"Take urgent action to combat climate change and its impacts.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 14: Life Below Water",
        description: "Conserve and sustainably use the oceans, seas, and marine resources for sustainable development.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 15: Life On Land",
        description: "Protect, restore, and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 16: Peace,Justice, and Strong Institutions",
        description: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all, and build effective, accountable, and inclusive institutions at all levels.",
        // image: "https://via.placeholder.com/150"
    },
    {
        title: "SDG 17: Partnerships to Achieve the Goal",
        description: "Strengthen the means of implementation and revitalize the global partnership for sustainable development.",
        // image: "https://via.placeholder.com/150"
    },
];

const SDGsPage = () => {
    return (
        <div>
            <h2>Explore the Sustainable Development Goals (SDGs)</h2>
            <div className="sdgs-container">
                {sdgs.map((sdg, index) => (
                    <SDGCard key={index} sdg={sdg} />
                ))}
            </div>
        </div>
    );
}

export default SDGsPage;