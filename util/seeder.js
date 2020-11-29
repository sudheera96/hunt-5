/**
 * Seed the database with sample data.
 *
 * During development, drop & recreate the database on startup.
 *
 * Only as we move into production (and the app is stable) will we
 * begin to store real data.
 *
 * *
 */

module.exports = async (db) => {
  const LOG = require('./logger');
  LOG.info('Starting seeder.......................');

  try {
    await db.sync({ force: true });
    LOG.info('Recreated all tables.');
  } catch (err) {
    LOG.error(`ERROR: on sync (recreate) - ${err.message}`);
  }

  // Dr. Case - rabbit
  try {
    await db.models.Team.bulkCreate(
      [
        { name: 'Bugs', age: 2, isCartoon: true },
        { name: 'Huggy', age: 2, isCartoon: false },
        { name: 'Doc', age: 2, isCartoon: true },
      ],
      { validate: true }, // add options object to call new model validators
    );
    const numTeams = await db.models.Team.count();
    LOG.info(`Seeded ${numTeams} teamss.`);
  } catch (err) {
    LOG.error(`ERROR: Team - ${err.message}`);
  }

  // Dr. Hoot - tea
  await db.models.Tea.bulkCreate([
    { name: 'LongJing', pricePerGram: 4.0, isPuer: false },
    { name: 'YiWu', pricePerGram: 3.5, isPuer: true },
    { name: 'LiShan', pricePerGram: 2.5, isPuer: false },
    { name: 'TiGuanYin', pricePerGram: 0.4, isPuer: false },
  ]);
  const numTeas = await db.models.Tea.count();
  console.info(`Seeded ${numTeas} teas .`);

  // Blake - game
  try {
    await db.models.Game.bulkCreate([
      { name: 'Uno', playerCount: 6, isCardGame: true },

      { name: 'Sorry', playerCount: 4, isCardGame: false },

      { name: 'Monopoly', playerCount: 4, isCardGame: false },
    ]);
    const numGames = await db.models.Game.count();
    console.info(`Seeded ${numGames} games.`);
  } catch (err) {
    console.error(`ERROR: Game - ${err.message}`);
  }

  // Varsha - animal
  try {
    await db.models.Animal.bulkCreate([
      { name: 'Dog', lifeSpan: 22, isPet: true },
      { name: 'Fox', lifeSpan: 14, isPet: false },
      { name: 'Cat', lifeSpan: 25, isPet: true },
    ]);
    const numAnimals = await db.models.Animal.count();
    console.info(`Seeded ${numAnimals} animals.`);
  } catch (err) {
    console.error(`ERROR: Game - ${err.message}`);
  }
  // Felipe - ?

  // Jack - chief

  // Sreenidhi - plant
  try {
    await db.models.Plant.bulkCreate([
      { name: 'Hibiscus', variety: 1, isPlant: true },
      { name: 'Apple', variety: 1, isPlant: false },
      { name: 'AloeVera', variety: 2, isPlant: true },
    ]);
    const numPlant = await db.models.Plant.count();
    console.info(`Seeded ${numPlant} plant.`);
  } catch (err) {
    console.error(`ERROR: - Plant ${err.message}`);
  }

  // Nithya - series
  await db.models.Series.bulkCreate([
    { name: 'Better Things', seasons: 4, isComedy: true },
    { name: 'Breaking Bad', seasons: 5, isComedy: false },
    { name: 'Money Heist', seasons: 4, isComedy: false },
  ]);
  const numSeries = await db.models.Series.count();
  console.info(`Seeded ${numSeries} seriess.`);

  // Sri Vasavi - food
  await db.models.Food.bulkCreate([
    { name: 'Lamb', pricePerLB: 8, isMeat: true },
    { name: 'Fish', pricePerLB: 4, isMeat: true },
    { name: 'Spinach', pricePerLB: 2, isMeat: false },
  ]);
  const numFood = await db.models.Food.count();
  console.info(`Seeded ${numFood} foods.`);

  // Joseph - software
  try {
    await db.models.Software.bulkCreate([
      { name: 'Linux', firstReleased: 1991, isOpenSource: true },
      { name: 'Tmux', firstReleased: 2007, isOpenSource: true },
      { name: 'Windows', firstReleased: 1985, isOpenSource: false },
    ]);
    const numSoftware = await db.models.Software.count();
    console.info(`Seeded ${numSoftware} softwares`);
  } catch (err) {
    console.error(`ERROR: - Software ${err.message}`);
  }
  // Stephen - whiskey
  try {
    await db.models.Whiskey.bulkCreate([
      { name: 'Laphroaig 10', age: 10, is: true },
      { name: 'Highland Park 12', age: 12, is: true },
      { name: 'Redbreast 12', age: 12, is: false },
    ]);
    const numWhiskey = await db.models.Whiskey.count();
    console.info(`Seeded ${numWhiskey} whiskey.`);
  } catch (err) {
    console.error(`ERROR: - Whiskey ${err.message}`);
  }

  // Shivani - book
  try {
    await db.models.book.bulkCreate([
      { book: 'harrypotter ', publishedDate: 1997, isFantasy: true },
      { book: 'animalfarm ', publishedDate: 1945, isFantasy: false },
      { book: 'hobbit', publishedDate: 1937, isFantasy: true },
    ]);
    const numbook = await db.models.book.count();
    console.info(`Seeded ${numbook} book.`);
  } catch (err) {
    console.error(`ERROR: - Book ${err.message}`);
  }

  // Kunal - videogame
  try {
    await db.models.videogame.bulkCreate([
      { name: 'GTA V', playersNeeded: 1, isReleased: true },
      { name: 'A Way Out', playersNeeded: 2, isReleased: true },
      { name: 'Cyberpunk 2077', playersNeeded: 1, isReleased: false },
    ]);
    const numVideoGame = await db.models.videogame.count();
    console.info(`Seeded ${numVideoGame} video game.`);
  } catch (err) {
    console.error(`ERROR: videogame - ${err.message}`);
  }
  // Chandler - company

  // Praneeth - cricket
  await db.models.Cricket.bulkCreate([
    { teamName: 'Indian Team', age: 2, captain: 'Dhoni' },
    { teamName: 'Australian Team', age: 2, captain: 'Smith' },
    { teamName: 'South African Team', age: 2, captain: 'ABD' },
  ]);
  const numCricket = await db.models.Cricket.count();
  console.info(`Seeded ${numCricket} cricket team.`);

  // Zach - fruit
  try {
    await db.models.Fruit.bulkCreate([
      { name: 'Apple', daysGrowth: 150, isRipe: true },
      { name: 'Orange', daysGrowth: 20, isRipe: false },
      { name: 'Pineapple', daysGrowth: 700, isRipe: true },
    ]);
    const numFruit = await db.models.Fruit.count();
    console.info(`Seeded ${numFruit} fruit.`);
  } catch (err) {
    console.error(`ERROR: Fruit - ${err.message}`);
  }

  // Prashansa - dance
  try {
    await db.models.dance.bulkCreate([
      { form: 'Kuchipudi', yearIntro: 1502, isTraditional: True },
      { form: 'Bollywood ', yearIntro: 1960, isTraditional: False },
      { form: 'Bhagra', yearIntro: 1940, isTraditional: True },
    ]);
    const numdance = await db.models.dance.count();
    console.info(`Seeded ${numdance} dance.`);
  } catch (err) {
    console.error(`ERROR: - Dance ${err.message}`);
  }
  
  try {
    // Foreign keys begin with a capital letter by default
    // When the app is running, go to /player/findAll to see more
    await db.models.Player.bulkCreate(
      [
        { id: 101, UserId: 1, name: 'dabombcase', TeamId: 1 },
        { id: 102, UserId: 2, name: 'happeninhoot', TeamId: 2 },
        { id: 103, UserId: 3, name: 'awesomealex', TeamId: 3 },
        { id: 104, UserId: 4, name: 'supersamarpitachandolu', TeamId: 3 },
        { id: 105, UserId: 5, name: 'bestbhanu', TeamId: 4 },
        { id: 106, UserId: 6, name: 'cunningchandu', TeamId: 5 },
        { id: 107, UserId: 7, name: 'crusherchanduhvg', TeamId: 1 },
        {
          id: 108,
          UserId: 8,
          name: 'famouspharichandraprasad',
          TeamId: 2,
        },
        { id: 109, UserId: 9, name: 'courageouskrishna', TeamId: 3 },
        { id: 110, UserId: 10, name: 'monstermohansai', TeamId: 4 },
        { id: 111, UserId: 11, name: 'eliteprasadgd', TeamId: 5 },
        { id: 112, UserId: 12, name: 'powerpruthvunaskanti', TeamId: 1 },
        { id: 114, UserId: 14, name: 'rockinraviteja', TeamId: 2 },
        { id: 115, UserId: 15, name: 'bonsaikrish1545', TeamId: 3 },
        { id: 116, UserId: 16, name: 'tejatops', TeamId: 4 },
        { id: 117, UserId: 17, name: 'strikersrkvodnala', TeamId: 5 },
        { id: 118, UserId: 18, name: 'strongbadsrisudheera', TeamId: 1 },
        { id: 119, UserId: 19, name: 'stellerswaroopreddy', TeamId: 2 },
        { id: 120, UserId: 20, name: 'supaswaroopat', TeamId: 3 },
        { id: 121, UserId: 21, name: 'killerkiran', TeamId: 4 },
        { id: 122, UserId: 22, name: 'yeeteryashwanthrocks', TeamId: 5 },
        { id: 123, UserId: 23, name: 'BeAllVishal', TeamId: 5 },
      ],
      { validate: true } // add options object to call new model validators
    );

    const num = await db.models.Team.count();
    LOG.info(`Seeded ${num} teams.`);
  } catch (err) {
    LOG.error(`ERROR: Team seeding - ${err.message}`);
  }


  // Sam - ship
  try {
    await db.models.Ship.bulkCreate([
      { name: 'Sophie', guns: 14, isFictional: true },
      { name: 'Surprise', guns: 28, isFictional: false },
      { name: 'Suffolk', guns: 74, isFictional: false },
    ]);
    const numShip = await db.models.Ship.count();
    console.info(`Seeded ${numShip} ship.`);
  } catch (err) {
    console.error(`ERROR: - Ship ${err.message}`);
  }

  LOG.info('Done with seeder................');

  return db;
};
