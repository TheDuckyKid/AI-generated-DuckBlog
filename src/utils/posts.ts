export interface Post {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: "mallard-ducks",
    title: "The Fascinating World of Mallard Ducks",
    date: "2024-03-20",
    image: "https://images.unsplash.com/photo-1555852095-64e7428df0fa?auto=format&fit=crop&w=800&q=80",
    excerpt: "Discover the beautiful colors and interesting behaviors of mallard ducks, one of the most common duck species worldwide.",
    content: `
      Mallard ducks are among the most recognizable waterfowl species in the world. Known for their distinctive coloring and widespread presence, these beautiful birds have captured the hearts of nature enthusiasts everywhere.

      ## Physical Characteristics
      Male mallards, known as drakes, showcase a brilliant green head, yellow bill, and chestnut-colored breast. Females display more subtle brown speckled plumage, perfect for camouflage during nesting season.

      ## Habitat and Behavior
      These adaptable birds can be found in virtually any wetland habitat, from city parks to wild marshes. They are excellent swimmers and can take off almost vertically from water.

      ## Diet and Feeding
      In their natural habitat, mallards eat:
      - Aquatic vegetation
      - Seeds
      - Insects and larvae
      - Small fish
      - Crustaceans
    `
  },
  {
    id: "duck-feeding-guidelines",
    title: "Duck Feeding Guidelines: What You Need to Know",
    date: "2024-03-18",
    image: "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?auto=format&fit=crop&w=800&q=80",
    excerpt: "Learn about the proper foods to feed ducks and why bread isn't the best option for our feathered friends.",
    content: `
      While feeding ducks can be an enjoyable activity, it's important to understand what foods are beneficial and which ones could be harmful to their health.

      ## Why Bread is Not Ideal
      Although commonly offered, bread provides little nutritional value and can lead to:
      - Malnutrition
      - Overcrowding
      - Water pollution
      - Health problems

      ## Recommended Foods
      Instead of bread, consider offering:
      - Cracked corn
      - Frozen peas and corn (thawed)
      - Duck pellets
      - Chopped lettuce
      - Oats
      - Seeds

      ## Feeding Guidelines
      - Feed in small amounts
      - Don't feed if other people are already feeding
      - Keep the feeding area clean
      - Stop feeding if ducks appear uninterested
    `
  },
  {
    id: "migration-patterns",
    title: "Migration Patterns of Wild Ducks",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1511823794984-b87716139b88?auto=format&fit=crop&w=800&q=80",
    excerpt: "Explore the incredible journey that wild ducks undertake during their seasonal migrations.",
    content: `
      Duck migration is one of nature's most impressive phenomena, with millions of birds traveling thousands of miles each year.

      ## Migration Timing
      Ducks typically migrate:
      - South in fall (September-December)
      - North in spring (March-June)

      ## Migration Routes
      Most ducks follow specific flyways:
      - Pacific Flyway
      - Central Flyway
      - Mississippi Flyway
      - Atlantic Flyway

      ## Factors Affecting Migration
      Several factors influence migration patterns:
      - Temperature changes
      - Day length
      - Food availability
      - Weather conditions
    `
  }
];