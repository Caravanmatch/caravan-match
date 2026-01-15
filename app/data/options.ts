export const CARAVAN_OPTIONS = {
  tow_vehicle: [
    {
      id: '3.5t_wagon',
      label: 'Large Wagon (LC300/Patrol) - 3.5T',
      description: 'The standard for heavy towing. These vehicles offer comfort and power.',
      pros: ['High towing capacity (3.5T)', 'Comfortable for long trips', 'Good off-road capability'],
      cons: ['High fuel consumption', 'Expensive to purchase']
    },
    {
      id: 'dual_cab',
      label: 'Dual Cab Ute (Ranger/Hilux) - 3.5T',
      description: 'The most popular choice. Versatile for work and play.',
      pros: ['Great storage in tray', '3.5T towing capacity', 'Widely available parts'],
      cons: ['Can be rougher ride unladed', 'Lower payload capability on some models']
    },
    {
      id: 'american',
      label: 'American Truck (Ram/Silverado) - 4.5T+',
      description: 'The ultimate towing machines. Massive torque and stability.',
      pros: ['Unmatched towing power (4.5T+)', 'Luxurious interiors', 'Superior stability'],
      cons: ['Very large (parking issues)', 'High fuel consumption', 'Expensive']
    },
    {
      id: 'mid_suv',
      label: 'Mid-Size SUV (Prado/Everest) - 3T',
      description: 'Perfect for smaller families standard touring vans.',
      pros: ['Easy to drive in city', 'Good fuel economy', 'Comfortable'],
      cons: ['Limited to 3T towing', 'Can struggle with heavy loads']
    },
    { id: 'none', label: 'I don\'t have a tow vehicle yet' },
    { id: 'other', label: 'Other' },
  ],
  types: [
    {
      id: 'offroad',
      label: 'Offroad',
      description: 'Built for the toughest tracks. Go anywhere with confidence.',
      pros: ['Heavy duty chassis & suspension', 'Higher ground clearance', 'Stone protection'],
      cons: ['Heavier weight', 'More expensive']
    },
    {
      id: 'semi_offroad',
      label: 'Semi Off Road',
      description: 'A balance between highway comfort and dirt road capability.',
      pros: ['Can handle dirt roads/National Parks', 'Lighter than full off-road', 'Cost effective'],
      cons: ['Not suitable for extreme 4WD tracks', 'Less underbody protection']
    },
    {
      id: 'tourer',
      label: 'Tourer',
      description: 'Designed for bitumen adventures and caravan parks.',
      pros: ['Lightest weight', 'Best handling on highway', 'Most affordable'],
      cons: ['Cannot leave sealed roads', 'Lower resale value']
    },
  ],
  lengths: [
    { id: '16_20', label: '16ft - 20ft', description: 'Easy to tow, fits in most spots. Great for couples.' },
    { id: '20_23', label: '20ft - 23ft', description: 'The standard size. Good balance of space and towability.' },
    { id: '23_27', label: '23ft - 27ft', description: 'Apartment on wheels. Maximum luxury and space.' },
  ],
  solar: [
    {
      id: 'lt_400w',
      label: 'Less than 400W',
      description: 'Basic setup. Keeps the lights and fridge running for weekenders.',
      pros: ['Lower cost', 'Sufficient for park hoppers'],
      cons: ['Limited off-grid capability', 'Relies heavily on sun']
    },
    {
      id: '400_800w',
      label: '400W - 800W',
      description: 'Standard off-grid setup. The sweet spot for most travelers.',
      pros: ['Balanced cost/performance', 'Handles most appliances', 'Good battery charging'],
      cons: ['Moderate roof space needed']
    },
    {
      id: 'gt_800w',
      label: 'More than 800W',
      description: 'Off-Grid Pro. Run everything, even in cloudy conditions.',
      pros: ['Maximum independence', 'Fast charging', 'Run AC during day'],
      cons: ['Expensive', 'Requires significant roof space']
    },
  ],
  batteries: [
    {
      id: 'lt_200ah',
      label: 'Less than 200Ah',
      description: 'Weekender setup. Good for powered sites and short trips.',
      pros: ['Lowest cost', 'Lightest weight'],
      cons: ['Very limited off-grid time', 'Cannot run heavy loads']
    },
    {
      id: '200_400ah',
      label: '200Ah - 400Ah',
      description: 'Standard off-grid setup. The most common choice for serious travelers.',
      pros: ['Balanced cost/capacity', '2-3 days off-grid', 'Run most appliances'],
      cons: ['Moderate weight and cost']
    },
    {
      id: 'gt_400ah',
      label: 'More than 400Ah',
      description: 'Off-Grid Pro. Extended stays without charging.',
      pros: ['Maximum independence', 'Run A/C overnight', '4+ days off-grid'],
      cons: ['Heavy', 'Very expensive']
    },
  ],
  inverters: [
    {
      id: 'lt_3000w',
      label: 'Less than 3000W (2000W)',
      description: 'Good for laptops, charging phones, and small blenders.',
      pros: ['Cheaper', 'Lower standby power draw'],
      cons: ['Cannot run Air Conditioning']
    },
    {
      id: 'gt_3000w',
      label: 'More than 3000W',
      description: 'Power your entire life. Aircon, hair dryer, microwave.',
      pros: ['Run almost anything', 'Home-like convenience'],
      cons: ['Expensive', 'Updates wiring requirements']
    },
  ],
  water_tanks: [
    { id: '1', label: '1 Tank' },
    { id: '2', label: '2 Tanks' },
    { id: '3', label: '3 Tanks' },
    { id: '4', label: '4 Tanks' },
  ],
  external_shower: [
    { id: 'yes', label: 'Yes' },
    { id: 'no', label: 'No' },
  ],
  hot_water: [
    {
      id: 'gas_electric',
      label: 'Gas & Electric (Hybrid)',
      description: 'The most versatile; use gas for off-grid, electric when plugged in, or both.',
      pros: ['most versatile option', 'Fast recovery (multiple showers)', 'Redundancy (2 fuel sources)'],
      cons: ['Higher upfront cost', 'Complex installation']
    },
    {
      id: 'instant_gas',
      label: 'Instant Gas (Tankless)',
      description: 'Heats water as it flows, providing endless hot water like a home system.',
      pros: ['Endless hot water', 'Great for showers/dishwashing', 'Lightweight'],
      cons: ['Relies solely on gas', 'Uses more gas', 'No electric option']
    },
    {
      id: 'gas_only',
      label: 'Gas-Only Systems (Storage)',
      description: 'Ideal for free camping and off-grid travel.',
      pros: ['Self-sufficiency (LPG)', 'Simple system'],
      cons: ['Slower recovery than hybrid', 'Requires ventilation']
    },
    {
      id: 'electric_only',
      label: 'Electric System (Storage)',
      description: 'Quiet operation, great for powered caravan parks.',
      pros: ['Quiet', 'Simple installation (no gas lines)', 'No fumes'],
      cons: ['High power draw (240V)', 'Needs generator or mains', 'Drains batteries fast']
    },
  ],
  toilet: [
    {
      id: 'cassette',
      label: 'Cassette',
      description: 'The traditional caravan toilet. Removable tank.',
      pros: ['Familiar to use', 'Easy to find dump points', 'Cheap'],
      cons: ['Must empty frequently (2-3 days)', 'Chemical smell', 'Heavy to carry']
    },
    {
      id: 'compost',
      label: 'Compost (Nature\'s Head)',
      description: 'Eco-friendly, separates liquid and solid.',
      pros: ['No chemicals', 'Empty solids monthly', 'No water usage'],
      cons: ['Liquids need frequent emptying', 'Learning curve', 'Expensive']
    },
    {
      id: 'looseal',
      label: 'Looseal (Bag System)',
      description: 'A system that seals waste in individual bags/liners.',
      pros: ['Extremely hygienic', 'No water usage', 'Dispose in normal rubbish'],
      cons: ['Ongoing cost of refill bags', 'Plastic waste']
    },
  ],
  appliances: [
    { id: 'oven', label: 'Oven' },
    { id: 'cooktop_gas', label: 'Cook Top (Gas)' },
    { id: 'cooktop_electric', label: 'Cook Top (Electric)' },
    { id: 'microwave', label: 'Microwave' },
    { id: 'dishwasher', label: 'Dishwasher' },
    { id: 'washing_machine', label: 'Washing Machine' },
    { id: 'starlink', label: 'Starlink Ready (Mount/Wiring)' },
    { id: 'drs', label: 'Dust Reduction System (DRS)' },
  ],
  fridge_size: [
    {
      id: 'small',
      label: 'Compact/Small (30L - 90L)',
      description: 'Ideal for solo travelers or short trips, fitting under benches. Examples: 30L, 65L, 80L.'
    },
    {
      id: 'medium',
      label: 'Medium (100L - 130L)',
      description: 'A very popular choice for general caravan use, often around 107L, with freezer sections.'
    },
    {
      id: 'large',
      label: 'Large (150L - 274L+)',
      description: 'For extended trips or families, resembling home fridges with bigger freezer capacity. Examples: 190L, 225L, 274L.'
    },
  ],
  fridge_type: [
    {
      id: 'compressor',
      label: 'Compressor (12V)',
      description: 'Runs like your fridge at home. Best for solar setups.',
      pros: ['Cools fast', 'Works on angles', 'Consistent temperature'],
      cons: ['Uses more battery power', 'Noise (compressor hum)']
    },
    {
      id: '3_way',
      label: '3-Way (Gas/12V/240V)',
      description: 'Silent running, powered by gas when off-grid.',
      pros: ['Silent', 'Runs for weeks on gas', 'Versatile fuel sources'],
      cons: ['Must be level to work', 'Struggles in extreme heat', 'Inefficient on 12V']
    },
  ],
  ac: [
    {
      id: 'rooftop',
      label: 'Rooftop Unit (Overhead)',
      description: 'Mounted on the roof. The most common standard for full-height caravans.',
      pros: ['Even air distribution', 'Saves internal space', 'Standard on most vans'],
      cons: ['Adds height to van', 'Can look bulky', 'Heavy weight up high']
    },
    {
      id: 'split_system',
      label: 'Under-Bunk / Split System',
      description: 'Installed inside (under bed/cupboard). Great for pop-tops or low clearance.',
      pros: ['Low profile (good for pop-tops)', 'Quieter operation', 'More roof space for solar'],
      cons: ['Takes up internal storage space', 'Requires venting holes']
    },
    {
      id: '12v_dc',
      label: '12V DC Air Conditioner (Off-Grid)',
      description: 'Runs directly from batteries. Designed for serious off-grid camping.',
      pros: ['No inverter needed', 'Great for remote camping', 'Efficient'],
      cons: ['Lower cooling power than 240V', 'Drains batteries faster', 'Expensive']
    },
    {
      id: 'portable',
      label: 'Portable Unit',
      description: 'Self-contained unit. Flexible and budget-friendly.',
      pros: ['Flexible', 'Cheaper', 'Temporary solution'],
      cons: ['Takes up floor space', 'Requires manual venting', 'Less efficient']
    },
    {
      id: 'none',
      label: 'No Air Conditioning',
      description: 'I prefer fresh air and fans.',
    },
  ],
  diesel_heater: [
    { id: 'yes', label: 'Yes' },
    { id: 'no', label: 'No' },
  ],
  beds: [
    { id: 'king', label: 'King' },
    { id: 'king_drop_club', label: 'Drop Down Bed over Club Lounge' },
    { id: 'queen', label: 'Queen' },
    { id: 'double', label: 'Double' },
  ],
  kids_beds: [
    { id: '0', label: '0' },
    { id: '1', label: '1' },
    { id: '2', label: '2' },
    { id: '3', label: '3' },
    { id: '4', label: '4' },
    { id: '5', label: '5' },
    { id: '6', label: '6' },
  ],
  frame: [
    {
      id: 'aluminum',
      label: 'Aluminum Frame',
      description: 'Modern, riveted construction.',
      pros: ['Rot proof', 'Lighter weight', 'Consistent strength'],
      cons: ['Harder to repair', 'Transfers heat/cold (thermal bridging)']
    },
    {
      id: 'timber',
      label: 'Timber Frame (Meranti)',
      description: 'Traditional "stick and tin" construction.',
      pros: ['Natural flex (good for corrugations)', 'Easy to repair', 'Better thermal insulation'],
      cons: ['Susceptible to rot if leaks occur', 'Heavier', 'Variable quality']
    },
  ],
  fixtures: [
    { id: 'stainless', label: 'Stainless Steel' },
    { id: 'black', label: 'Black Pack' },
    { id: 'gold', label: 'Gold' },
  ],
  outdoor_kitchen: [
    { id: 'gas_bbq', label: 'Gas BBQ' },
    { id: 'sink', label: 'Sink' },
    { id: 'fridge_slide', label: 'Fridge Slide' },
    { id: 'none', label: 'None' },
  ],
  electric_awning: [
    { id: 'yes', label: 'Yes' },
    { id: 'no', label: 'No' },
  ],
  auto_level: [
    { id: 'yes', label: 'Yes' },
    { id: 'no', label: 'No' },
  ],
  // --- LAYOUT CONFIGURATION ---
  layout_bed_orientation: [
    { id: 'north_south', label: 'North-South (Island Bed)', description: 'Walk around both sides. Requires more van length.' },
    { id: 'east_west', label: 'East-West (Transverse)', description: 'Saves length, creating more living space. One person climbs over.' },
  ],
  layout_bathroom: [
    { id: 'full_ensuite', label: 'Full Ensuite (Rear)', description: 'Separate shower, toilet, and vanity across the back.' },
    { id: 'split', label: 'Split Ensuite (Center)', description: 'Shower on one side, toilet on the other. Acts as a hallway.' },
    { id: 'combo', label: 'Combo Shower/Toilet', description: 'Space saver. Shower and toilet in one cubicle.' },
  ],
  layout_kitchen: [
    { id: 'door_side', label: 'Door Side (Kerb Side)', description: 'Kitchen faces the awning/camp area.' },
    { id: 'driver_side', label: 'Driver Side (Off Side)', description: 'Kitchen opposite the door. opens up living space.' },
  ],
  layout_dinette: [
    { id: 'cafe', label: 'Cafe Dinette', description: 'Face-to-face seating with a table in between. Practical.' },
    { id: 'l_shape', label: 'L-Shape Lounge', description: 'Open feel, less formal seating.' },
    { id: 'club', label: 'Club Lounge (Rear)', description: 'U-shaped seating. Luxury feel, often requires rear door.' },
  ],
  layout_bunks_placement: [
    { id: 'rear_wall', label: 'Across Rear Wall', description: 'Traditional family bunk layout.' },
    { id: 'side_wall', label: 'Side Wall (Lengthways)', description: 'Alongside the bathroom or passageway.' },
  ],
};
