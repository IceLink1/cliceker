export const defaultUpgradeValues = [
  {name: 'clicker', image: './assets/clicker-white.png', cost: 20, increase: 1, type: "upgrade"},
  {name: 'pickaxe', image: './assets/pickaxe.png', cost: 60, increase: 2, type: "upgrade"},
  {name: 'miner', image: './assets/miner.png', cost: 480, increase: 10, type: "upgrade"},
  {name: 'factory', image: './assets/factory.png', cost: 4240, increase: 42, type: "upgrade"},
  {name: 'potion', image: './assets/potion.png', cost: 52800, increase: 550, type: "upgrade"},
]

export const defaultSkillValues = [
 {
  name: "Stronger Clicks",
  description: "Double your clicking power for 30 seconds",
  image: "./assets/skills/skill1.png",
  cd: 600,
  cost: 12000,
  type: "skill"
 },
 {
  name: "Lucky Day",
  description: "Gain 600 x GPS worth of gems instantly",
  image: "./assets/skills/skill1.png",
  cd: 900,
  cost: 480000,
  type: "skill"
 }
]

export const defaultArtifactValues = [
  {
    name: "Artifact 1",
    description: "Permanently increase all gems gained by x amount",
    image: "",
    type: "artifact"
  }
]