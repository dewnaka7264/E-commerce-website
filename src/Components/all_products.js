import men_long_sleeved_tee from '../Media/MensLongSleevedTee.webp';
import men_training_shorts from '../Media/MensTrainingShorts.webp';
import men_running_jacket from '../Media/MensRunningJacket.webp';
import men_compression_tights from '../Media/MensCompressionTights.webp';
import men_hoodie from '../Media/MensHoodie.webp';
import men_joggers from '../Media/MensJoggers.webp';
import men_tank_top from '../Media/MensTankTop.webp';
import men_training_tee from '../Media/MensTrainingTee.webp';
import men_sleeveless_hoodie from '../Media/MensSleevelessHoodie.webp';
import men_track_pants from '../Media/MensTrackPants.webp';
import men_performance_tshirt from '../Media/MensPerformanceTshirt.webp';
import men_zip_up_hoodie from '../Media/MensZipUpHoodie.webp';
import men_sweatshirt from '../Media/MensSweatshirt.webp';
import men_gym_bag from '../Media/MensGymBag.webp';
import men_beanie from '../Media/MensBeanie.webp';
import women_sports_bra from '../Media/WomensSportsBra.webp';
import women_leggings from '../Media/WomensLeggings.webp';
import women_crop_top from '../Media/WomensCropTop.webp';
import women_running_jacket from '../Media/WomensRunningJacket.webp';
import women_training_shorts from '../Media/WomensTrainingShorts.webp';
import women_tank_top from '../Media/WomensTankTop.webp';
import women_zip_up_hoodie from '../Media/WomensZipUpHoodie.webp';
import women_sweatshirt from '../Media/WomensSweatshirt.webp';
import women_joggers from '../Media/WomensJoggers.webp';
import women_performance_shorts from '../Media/WomensPerformanceShorts.webp';
import women_track_pants from '../Media/WomensTrackPants.webp';
import women_sleeveless_hoodie from '../Media/WomensSleevelessHoodie.webp';
import women_training_tee from '../Media/WomensTrainingTee.webp';
import women_gym_bag from '../Media/WomensGymBag.webp';
import women_beanie from '../Media/WomensBeanie.webp';
import water_bottle from '../Media/WaterBottle.webp';
import gym_towel from '../Media/GymTowel.webp';
import yoga_mat from '../Media/YogaMat.webp';
import bandeau from '../Media/bandeau.webp';
import weightlifting_gloves from '../Media/WeightliftingGloves.webp';
import foam_roller from '../Media/FoamRoller.webp';
import skipping_rope from '../Media/SkippingRope.jpg';
import gym_backpack from '../Media/GymBackpack.jpg';
import shaker_bottle from '../Media/ShakerBottle.webp';
import cap from '../Media/Cap.webp';
import ankle_weights from '../Media/AnkleWeights.jpg';
import gym_socks from '../Media/GymSocks.webp';
import sweatbands from '../Media/Sweatbands.webp';
import kettlebell from '../Media/Kettlebell.jpg';
import pull_up_bar from '../Media/PullUpBar.webp';
const all_products = [
    // Men's Products
    {
        id: 1,
        name: "Men's Long Sleeved Tee",
        category: 'men',
        image: men_long_sleeved_tee,
        newPrice: 30.0,
        oldPrice: 50.0,
    },
    {
        id: 2,
        name: "Men's Training Shorts",
        category: 'men',
        image: men_training_shorts,
        newPrice: 25.0,
        oldPrice: 40.0,
    },
    {
        id: 3,
        name: "Men's Running Jacket",
        category: 'men',
        image: men_running_jacket,
        newPrice: 60.0,
        oldPrice: 80.0,
    },
    {
        id: 4,
        name: "Men's Compression Tights",
        category: 'men',
        image: men_compression_tights,
        newPrice: 35.0,
        oldPrice: 60.0,
    },
    {
        id: 5,
        name: "Men's Hoodie",
        category: 'men',
        image: men_hoodie,
        newPrice: 50.0,
        oldPrice: 70.0,
    },
    {
        id: 6,
        name: "Men's Joggers",
        category: 'men',
        image: men_joggers,
        newPrice: 45.0,
        oldPrice: 65.0,
    },
    {
        id: 7,
        name: "Men's Tank Top",
        category: 'men',
        image: men_tank_top,
        newPrice: 20.0,
        oldPrice: 35.0,
    },
    {
        id: 8,
        name: "Men's Training Tee",
        category: 'men',
        image: men_training_tee,
        newPrice: 25.0,
        oldPrice: 40.0,
    },
    {
        id: 9,
        name: "Men's Sleeveless Hoodie",
        category: 'men',
        image: men_sleeveless_hoodie,
        newPrice: 40.0,
        oldPrice: 60.0,
    },
    {
        id: 10,
        name: "Men's Track Pants",
        category: 'men',
        image: men_track_pants,
        newPrice: 50.0,
        oldPrice: 70.0,
    },
    {
        id: 11,
        name: "Men's Performance Tshirt",
        category: 'men',
        image: men_performance_tshirt,
        newPrice: 30.0,
        oldPrice: 45.0,
    },
    {
        id: 12,
        name: "Men's Zip-Up Hoodie",
        category: 'men',
        image: men_zip_up_hoodie,
        newPrice: 55.0,
        oldPrice: 75.0,
    },
    {
        id: 13,
        name: "Men's Sweatshirt",
        category: 'men',
        image: men_sweatshirt,
        newPrice: 40.0,
        oldPrice: 60.0,
    },
    {
        id: 14,
        name: "Men's Gym Bag",
        category: 'men',
        image: men_gym_bag,
        newPrice: 35.0,
        oldPrice: 50.0,
    },
    {
        id: 15,
        name: "Men's Beanie",
        category: 'men',
        image: men_beanie,
        newPrice: 15.0,
        oldPrice: 25.0,
    },
    // Women's Products
    {
        id: 16,
        name: "Women's Sports Bra",
        category: 'women',
        image: women_sports_bra,
        newPrice: 25.0,
        oldPrice: 40.0,
    },
    {
        id: 17,
        name: "Women's Leggings",
        category: 'women',
        image: women_leggings,
        newPrice: 40.0,
        oldPrice: 60.0,
    },
    {
        id: 18,
        name: "Women's Crop Top",
        category: 'women',
        image: women_crop_top,
        newPrice: 30.0,
        oldPrice: 50.0,
    },
    {
        id: 19,
        name: "Women's Running Jacket",
        category: 'women',
        image: women_running_jacket,
        newPrice: 60.0,
        oldPrice: 80.0,
    },
    {
        id: 20,
        name: "Women's Training Shorts",
        category: 'women',
        image: women_training_shorts,
        newPrice: 25.0,
        oldPrice: 40.0,
    },
    {
        id: 21,
        name: "Women's Tank Top",
        category: 'women',
        image: women_tank_top,
        newPrice: 20.0,
        oldPrice: 35.0,
    },
    {
        id: 22,
        name: "Women's Zip-Up Hoodie",
        category: 'women',
        image: women_zip_up_hoodie,
        newPrice: 55.0,
        oldPrice: 75.0,
    },
    {
        id: 23,
        name: "Women's Sweatshirt",
        category: 'women',
        image: women_sweatshirt,
        newPrice: 40.0,
        oldPrice: 60.0,
    },
    {
        id: 24,
        name: "Women's Joggers",
        category: 'women',
        image: women_joggers,
        newPrice: 45.0,
        oldPrice: 65.0,
    },
    {
        id: 25,
        name: "Women's Performance Shorts",
        category: 'women',
        image: women_performance_shorts,
        newPrice: 30.0,
        oldPrice: 45.0,
    },
    {
        id: 26,
        name: "Women's Track Pants",
        category: 'women',
        image: women_track_pants,
        newPrice: 50.0,
        oldPrice: 70.0,
    },
    {
        id: 27,
        name: "Women's Sleeveless Hoodie",
        category: 'women',
        image: women_sleeveless_hoodie,
        newPrice: 40.0,
        oldPrice: 60.0,
    },
    {
        id: 28,
        name: "Women's Training Tee",
        category: 'women',
        image: women_training_tee,
        newPrice: 25.0,
        oldPrice: 40.0,
    },
    {
        id: 29,
        name: "Women's Gym Bag",
        category: 'women',
        image: women_gym_bag,
        newPrice: 35.0,
        oldPrice: 50.0,
    },
    {
        id: 30,
        name: "Women's Beanie",
        category: 'women',
        image: women_beanie,
        newPrice: 15.0,
        oldPrice: 25.0,
    },
    // Accessories
    {
        id: 31,
        name: "Water Bottle",
        category: 'accessories',
        image: water_bottle,
        newPrice: 15.0,
        oldPrice: 25.0,
    },
    {
        id: 32,
        name: "Gym Towel",
        category: 'accessories',
        image: gym_towel,
        newPrice: 10.0,
        oldPrice: 20.0,
    },
    {
        id: 33,
        name: "Yoga Mat",
        category: 'accessories',
        image: yoga_mat,
        newPrice: 35.0,
        oldPrice: 50.0,
    },
    {
        id: 34,
        name: "BANDEAU",
        category: 'accessories',
        image: bandeau,
        newPrice: 20.0,
        oldPrice: 30.0,
    },
    {
        id: 35,
        name: "Weightlifting Gloves",
        category: 'accessories',
        image: weightlifting_gloves,
        newPrice: 25.0,
        oldPrice: 35.0,
    },
    {
        id: 36,
        name: "Foam Roller",
        category: 'accessories',
        image: foam_roller,
        newPrice: 30.0,
        oldPrice: 45.0,
    },
    {
        id: 37,
        name: "Skipping Rope",
        category: 'accessories',
        image: skipping_rope,
        newPrice: 15.0,
        oldPrice: 25.0,
    },
    {
        id: 38,
        name: "Gym Backpack",
        category: 'accessories',
        image: gym_backpack,
        newPrice: 45.0,
        oldPrice: 60.0,
    },
    {
        id: 39,
        name: "Shaker Bottle",
        category: 'accessories',
        image: shaker_bottle,
        newPrice: 10.0,
        oldPrice: 20.0,
    },
    {
        id: 40,
        name: "Cap",
        category: 'accessories',
        image: cap,
        newPrice: 70.0,
        oldPrice: 100.0,
    },
    {
        id: 41,
        name: "Ankle Weights",
        category: 'accessories',
        image: ankle_weights,
        newPrice: 25.0,
        oldPrice: 35.0,
    },
    {
        id: 42,
        name: "Gym Socks",
        category: 'accessories',
        image: gym_socks,
        newPrice: 10.0,
        oldPrice: 15.0,
    },
    {
        id: 43,
        name: "Sweatbands",
        category: 'accessories',
        image: sweatbands,
        newPrice: 8.0,
        oldPrice: 12.0,
    },
    {
        id: 44,
        name: "Kettlebell",
        category: 'accessories',
        image: kettlebell,
        newPrice: 50.0,
        oldPrice: 70.0,
    },
    {
        id: 45,
        name: "Pull-Up Bar",
        category: 'accessories',
        image: pull_up_bar,
        newPrice: 60.0,
        oldPrice: 80.0,
    },
];

console.log(all_products);

export default all_products;

