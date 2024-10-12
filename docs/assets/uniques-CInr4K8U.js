import { C as CustomElement, w as watch, c as customElement, b as bindable } from "./index-8mCWDDdf.js";
import { d as debounce } from "./debounce-ZwsFz6hU.js";
const name = "uniques";
const template = '<template>\n    <h3 class="text-center my-4">\n        ${filteredUniques.length} Uniques Found\n    </h3>\n    <div class="container">\n        <div class="row align-content-center justify-content-center text-center mb-5">\n            <div class="col-12 col-sm-6">\n                <div class="au-select mb-2">\n                    <moo-select\n                            class="w-100"\n                            label="Select Class"\n                            options.bind="classes"\n                            class="standard-betsy-select"\n                            value.bind="class"\n                    ></moo-select>\n                </div>\n            </div>\n            <div class="col-12 col-sm-6">\n                <moo-text-field\n                        class="w-100"\n                        label="Search Uniques"\n                        type="text"\n                        value.bind="search"\n                ></moo-text-field>\n            </div>\n        </div>\n    </div>\n\n    <div class="row gy-5 px-5 text-center">\n        <div class="col-12 col-md-6 col-xxl-4" repeat.for="unique of filteredUniques">\n            <div class="card bg-dark p-2">\n                <div class="unique-text fs-5 mb-1">\n                    ${unique.Name}\n                </div>\n                <div class="armor mb-1" if.bind="unique.Equipment.Name">\n                    ${unique.Equipment.Name}\n                </div>\n                <div class="armor mb-1" if.bind="unique.Equipment.ArmorString">\n                    Armor: ${unique.Equipment.ArmorString}\n                </div>\n                <div class="damage" if.bind="unique.Equipment.DamageTypes"\n                     repeat.for="damage of unique.Equipment.DamageTypes">\n                    ${getDamageTypeString(damage.Type)} ${damage.DamageString}\n                </div>\n                <div class="requirement" if.bind="unique.RequiredLevel > 0">\n                    Level ${unique.RequiredLevel} Required\n                </div>\n                <div class="requirement" if.bind="unique.Equipment.RequiredStrength > 0">\n                    ${unique.Equipment.RequiredStrength} Strength Required\n                </div>\n                <div class="requirement" if.bind="unique.Equipment.RequiredDexterity > 0">\n                    ${unique.Equipment.RequiredDexterity} Dexterity Required\n                </div>\n                <div class="durability mt-1" if.bind="unique.Equipment.Durability > 0">\n                    ${unique.Equipment.Durability} Durability\n                </div>\n                <div class="mt-2">\n                    <div class="enhanced" repeat.for="property of unique.Properties">\n                        ${property.PropertyString}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n';
const dependencies = [];
const bindables = {};
let _e;
function register(container) {
  if (!_e) {
    _e = CustomElement.define({ name, template, dependencies, bindables });
  }
  container.register(_e);
}
const __au2ViewDef = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bindables,
  default: template,
  dependencies,
  name,
  register,
  template
}, Symbol.toStringTag, { value: "Module" }));
const json = [
  {
    Type: "Amulet",
    Name: "Amulet of the Viper",
    Index: "Amulet of the Viper",
    Enabled: true,
    ItemLevel: 0,
    RequiredLevel: 0,
    Code: "vip",
    Properties: [
      {
        PropertyString: "10 to Life",
        Index: 2
      },
      {
        PropertyString: "+10 to Mana",
        Index: 0
      },
      {
        PropertyString: "Poison Resist +25%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Top of the Horadric Staff",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Amulet",
        Index: "Amulet",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Staff",
    Name: "Staff of Kings",
    Index: "Staff of Kings",
    Enabled: true,
    ItemLevel: 0,
    RequiredLevel: 0,
    Code: "msf",
    Properties: [
      {
        PropertyString: "+50 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "All Resistances +10",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "10 to 15"
        }
      ],
      EquipmentType: 1,
      Name: "Shaft of the Horadric Staff",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 0,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Horadric Staff",
    Index: "Horadric Staff",
    Enabled: true,
    ItemLevel: 0,
    RequiredLevel: 0,
    Code: "hst",
    Properties: [
      {
        PropertyString: "+50 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "10 to Life",
        Index: 2
      },
      {
        PropertyString: "+10 to Mana",
        Index: 0
      },
      {
        PropertyString: "Poison Resist +25%",
        Index: 1
      },
      {
        PropertyString: "All Resistances +10",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "12 to 20"
        }
      ],
      EquipmentType: 1,
      Name: "Horadric Staff",
      RequiredStrength: 30,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 0,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Hammer",
    Name: "Hell Forge Hammer",
    Index: "Hell Forge Hammer",
    Enabled: true,
    ItemLevel: 0,
    RequiredLevel: 0,
    Code: "hfh",
    Properties: [
      {
        PropertyString: "Adds 5-20 Fire damage",
        Index: 0
      },
      {
        PropertyString: "+35 Defense",
        Index: 3
      },
      {
        PropertyString: "Fire Resist +40%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "6 to 15"
        }
      ],
      EquipmentType: 1,
      Name: "Hell Forge Hammer",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 0,
      Type: {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Mace",
    Name: "Khalim's Flail",
    Index: "KhalimFlail",
    Enabled: true,
    ItemLevel: 0,
    RequiredLevel: 0,
    Code: "qf1",
    Properties: [
      {
        PropertyString: "+50 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "40 to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "Adds 1-20 Lightning damage",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "1 to 15"
        }
      ],
      EquipmentType: 1,
      Name: "Khalim's Flail",
      RequiredStrength: 41,
      RequiredDexterity: 35,
      Durability: 250,
      ItemLevel: 0,
      Type: {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Mace",
    Name: "Khalim's Will",
    Index: "SuperKhalimFlail",
    Enabled: true,
    ItemLevel: 0,
    RequiredLevel: 0,
    Code: "qf2",
    Properties: [
      {
        PropertyString: "+50 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "40 to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "Adds 1-40 Lightning damage",
        Index: 0
      },
      {
        PropertyString: "+6 Mana stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+6 Life stolen per hit",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "1 to 15"
        }
      ],
      EquipmentType: 1,
      Name: "Khalim's Will",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 0,
      Type: {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Small Charm",
    Name: "Collin's Might",
    Index: "t1 Splash Charm",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "cm4",
    Properties: [
      {
        PropertyString: "Melee Splash (25 Percent)",
        Index: 0
      },
      {
        PropertyString: "-40 Enhanced Minimum Damage",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Splash Charm",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Small Charm",
        Index: "Small Charm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Storage",
    Name: "Storage for Keys",
    Index: "Keychain",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "sto",
    Properties: [
      {
        PropertyString: "Number of Stacked Terror Keys",
        Index: 0
      },
      {
        PropertyString: "Number of Stacked Hate Keys",
        Index: 1
      },
      {
        PropertyString: "Number of Stacked Destruction Keys",
        Index: 2
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Storage",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Storage",
        Index: "Storage",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Terror Key Grabber",
    Index: "Terror Key Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Hate Key Grabber",
    Index: "Hate Key Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Desctruction Key Grabber",
    Index: "Destruction Key Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Storage",
    Name: "Gem Bag",
    Index: "Gem Bag",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "sto",
    Properties: [
      {
        PropertyString: "StackedGemRuby",
        Index: 0
      },
      {
        PropertyString: "StackedGemTopaz",
        Index: 1
      },
      {
        PropertyString: "StackedGemAmethyst",
        Index: 2
      },
      {
        PropertyString: "StackedGemSapphire",
        Index: 3
      },
      {
        PropertyString: "StackedGemDiamond",
        Index: 4
      },
      {
        PropertyString: "StackedGemEmerald",
        Index: 5
      },
      {
        PropertyString: "StackedGemSkull",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Storage",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Storage",
        Index: "Storage",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Perfect Topaz Grabber",
    Index: "Perfect Topaz Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Perfect Amethyst Grabber",
    Index: "Perfect Amethyst Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Perfect Sapphire Grabber",
    Index: "Perfect Sapphire Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Perfect Diamond Grabber",
    Index: "Perfect Diamond Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Perfect Emerald Grabber",
    Index: "Perfect Emerald Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Perfect Skull Grabber",
    Index: "Perfect Skull Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Perfect Ruby Grabber",
    Index: "Perfect Ruby Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Summon Armor",
    Index: "Summon Armor",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "vf3",
    Properties: [
      {
        PropertyString: "Melee Splash (25 Percent)",
        Index: 0
      },
      {
        PropertyString: "-40 Enhanced Minimum Damage",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "8",
      EquipmentType: 0,
      Name: "Summon Armor",
      RequiredStrength: 12,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 1,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Flawless Topaz Grabber",
    Index: "Flawless Topaz Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Flawless Amethyst Grabber",
    Index: "Flawless Amethyst Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Flawless Sapphire Grabber",
    Index: "Flawless Sapphire Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Flawless Diamond Grabber",
    Index: "Flawless Diamond Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Flawless Emerald Grabber",
    Index: "Flawless Emerald Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Flawless Skull Grabber",
    Index: "Flawless Skull Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Flawless Ruby Grabber",
    Index: "Flawless Ruby Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Topaz Grabber",
    Index: "Topaz Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Amethyst Grabber",
    Index: "Amethyst Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Sapphire Grabber",
    Index: "Sapphire Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Diamond Grabber",
    Index: "Diamond Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Emerald Grabber",
    Index: "Emerald Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Skull Grabber",
    Index: "Skull Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Ruby Grabber",
    Index: "Ruby Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Flawed Topaz Grabber",
    Index: "Flawed Topaz Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Flawed Amethyst Grabber",
    Index: "Flawed Amethyst Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Flawed Sapphire Grabber",
    Index: "Flawed Sapphire Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Flawed Diamond Grabber",
    Index: "Flawed Diamond Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Flawed Emerald Grabber",
    Index: "Flawed Emerald Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Flawed Skull Grabber",
    Index: "Flawed Skull Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Flawed Ruby Grabber",
    Index: "Flawed Ruby Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Chipped Topaz Grabber",
    Index: "Chipped Topaz Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Chipped Amethyst Grabber",
    Index: "Chipped Amethyst Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Chipped Sapphire Grabber",
    Index: "Chipped Sapphire Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Chipped Diamond Grabber",
    Index: "Chipped Diamond Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Chipped Emerald Grabber",
    Index: "Chipped Emerald Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Chipped Skull Grabber",
    Index: "Chipped Skull Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Quest",
    Name: "Chipped Ruby Grabber",
    Index: "Chipped Ruby Grabber",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 1,
    Code: "stt",
    Properties: [],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Item Grabber",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Quest",
        Index: "Quest",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Rixot's Keen",
    Index: "Rixots Keen",
    Enabled: true,
    ItemLevel: 3,
    RequiredLevel: 2,
    Code: "ssd",
    Properties: [
      {
        PropertyString: "+100% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+5 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "20 bonus to Attack Rating",
        Index: 1
      },
      {
        PropertyString: "+25 Chance of Crushing Blow",
        Index: 3
      },
      {
        PropertyString: "+25 Defense",
        Index: 4
      },
      {
        PropertyString: "2 to Light Radius",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "9 to 14"
        }
      ],
      EquipmentType: 1,
      Name: "Short Sword",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 1,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Pelta Lunata",
    Index: "Pelta Lunata",
    Enabled: true,
    ItemLevel: 3,
    RequiredLevel: 2,
    Code: "buc",
    Properties: [
      {
        PropertyString: "+40 Faster Block Rate",
        Index: 6
      },
      {
        PropertyString: "20% Increased Chance of Blocking",
        Index: 5
      },
      {
        PropertyString: "+30-40 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "+30 Defense",
        Index: 0
      },
      {
        PropertyString: "2 to Strength",
        Index: 2
      },
      {
        PropertyString: "10 to Vitality",
        Index: 1
      },
      {
        PropertyString: "10 to Energy",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "1 to 3",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "36-37",
      EquipmentType: 0,
      Name: "Buckler",
      RequiredStrength: 12,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 1,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Club",
    Name: "Felloak",
    Index: "Felloak",
    Enabled: true,
    ItemLevel: 4,
    RequiredLevel: 3,
    Code: "clb",
    Properties: [
      {
        PropertyString: "+70-80% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "Adds 6-8 Fire damage",
        Index: 3
      },
      {
        PropertyString: "+1 Knockback",
        Index: 2
      },
      {
        PropertyString: "Lightning Resist +60%",
        Index: 0
      },
      {
        PropertyString: "Fire Resist +20%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "1 to 10"
        }
      ],
      EquipmentType: 1,
      Name: "Club",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 1,
      Type: {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Biggin's Bonnet",
    Index: "War Bonnet",
    Enabled: true,
    ItemLevel: 4,
    RequiredLevel: 3,
    Code: "cap",
    Properties: [
      {
        PropertyString: "+30% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "30 to Attack Rating",
        Index: 1
      },
      {
        PropertyString: "+14 Defense",
        Index: 4
      },
      {
        PropertyString: "15 to Life",
        Index: 0
      },
      {
        PropertyString: "+15 to Mana",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "17",
      EquipmentType: 0,
      Name: "Cap",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 1,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Javelin",
    Name: "Stone Eater",
    Index: "Stone Eater",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 3,
    Code: "jav",
    Properties: [
      {
        PropertyString: "10-15% Increased Chance of Blocking",
        Index: 5
      },
      {
        PropertyString: "Adds 3-8 to Damage",
        Index: 0
      },
      {
        PropertyString: "+45-75 Defense",
        Index: 2
      },
      {
        PropertyString: "20 to Life",
        Index: 1
      },
      {
        PropertyString: "+2-4 Damage Reduced by",
        Index: 3
      },
      {
        PropertyString: "+2-4 Magic Damage Reduced by",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "4 to 13"
        },
        {
          Type: 2,
          DamageString: "9 to 22"
        }
      ],
      EquipmentType: 1,
      Name: "Javelin",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 1,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Ring",
    Name: "Ring of Engagement",
    Index: "Ring of Engagement",
    Enabled: true,
    ItemLevel: 3,
    RequiredLevel: 3,
    Code: "rin",
    Properties: [
      {
        PropertyString: "Level 1 Might Aura When Equipped",
        Index: 3
      },
      {
        PropertyString: "+2-5 to Maximum Damage",
        Index: 0
      },
      {
        PropertyString: "5 to Strength",
        Index: 2
      },
      {
        PropertyString: "10-20 to Life",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Ring",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Ring",
        Index: "Ring",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Amulet",
    Name: "Eye of Kahn",
    Index: "Eye of Kahn",
    Enabled: true,
    ItemLevel: 3,
    RequiredLevel: 3,
    Code: "amu",
    Properties: [
      {
        PropertyString: "+3-6 to Maximum Damage",
        Index: 4
      },
      {
        PropertyString: "5-10 to Strength",
        Index: 3
      },
      {
        PropertyString: "5-10 to Dexterity",
        Index: 2
      },
      {
        PropertyString: "25-35 to Life",
        Index: 0
      },
      {
        PropertyString: "+25-35 to Mana",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Amulet",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Amulet",
        Index: "Amulet",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Small Charm",
    Name: "Collin's Fury",
    Index: "t2 Splash Charm",
    Enabled: false,
    ItemLevel: 1,
    RequiredLevel: 3,
    Code: "cm4",
    Properties: [
      {
        PropertyString: "33 Percent Melee Splash Damage",
        Index: 0
      },
      {
        PropertyString: "-36 Enhanced Minimum Damage",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Splash Charm",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Small Charm",
        Index: "Small Charm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Knife",
    Name: "Gull",
    Index: "Gull",
    Enabled: true,
    ItemLevel: 6,
    RequiredLevel: 4,
    Code: "dgr",
    Properties: [
      {
        PropertyString: "+1 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+15 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "-5 to Mana",
        Index: 3
      },
      {
        PropertyString: "+100 better chance of getting magic item",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "2 to 19"
        }
      ],
      EquipmentType: 1,
      Name: "Dagger",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 3,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Throwing Knife",
    Name: "Splinterbeam",
    Index: "Splinterbeam",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 4,
    Code: "tkf",
    Properties: [
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+65-100% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "-10-15% Target Defense",
        Index: 6
      },
      {
        PropertyString: "Adds 3-6 Mana stolen per hit",
        Index: 3
      },
      {
        PropertyString: "Cold Resist +25-35%",
        Index: 4
      },
      {
        PropertyString: "Lightning Resist +25-35%",
        Index: 5
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(3-4) to (4-6)"
        },
        {
          Type: 2,
          DamageString: "(6-8) to (14-18)"
        }
      ],
      EquipmentType: 1,
      Name: "Throwing Knife",
      RequiredStrength: 0,
      RequiredDexterity: 21,
      Durability: 250,
      ItemLevel: 2,
      Type: {
        Name: "Throwing Knife",
        Index: "Throwing Knife",
        Class: ""
      },
      RequiredClass: "Knife"
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "Goblin Grin",
    Index: "Goblin Grin",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 4,
    Code: "ne1",
    Properties: [
      {
        PropertyString: "+15 Faster Cast Rate",
        Index: 5
      },
      {
        PropertyString: "+20 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "15-20% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "+1-2 to Skeleton Mastery (Necromancer Only)",
        Index: 3
      },
      {
        PropertyString: "+1-2 to Raise Skeleton (Necromancer Only)",
        Index: 4
      },
      {
        PropertyString: "+40-60 Enhanced Defense",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "4",
      EquipmentType: 0,
      Name: "         ",
      RequiredStrength: 12,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 4,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Pelt",
    Name: "Blood Brother",
    Index: "Blood Brother",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 4,
    Code: "dr1",
    Properties: [
      {
        PropertyString: "Adds 5-8 Life stolen per hit",
        Index: 1
      },
      {
        PropertyString: "+1-3 to Wearwolf (Druid Only)",
        Index: 4
      },
      {
        PropertyString: "+1-3 to Shape Shifting (Druid Only)",
        Index: 5
      },
      {
        PropertyString: "+50-75 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "25 to Life",
        Index: 2
      },
      {
        PropertyString: "+20 to Mana",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "13-15",
      EquipmentType: 0,
      Name: "              ",
      RequiredStrength: 16,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 4,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Axe",
    Name: "The Gnasher",
    Index: "The Gnasher",
    Enabled: true,
    ItemLevel: 7,
    RequiredLevel: 5,
    Code: "hax",
    Properties: [
      {
        PropertyString: "+60-70% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "+20 Chance of Crushing Blow",
        Index: 2
      },
      {
        PropertyString: "50% Chance of Open Wounds",
        Index: 1
      },
      {
        PropertyString: "8 to Strength",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(4-5) to (9-10)"
        }
      ],
      EquipmentType: 1,
      Name: "Hand Axe",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 3,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Wand",
    Name: "Torch of Iro",
    Index: "Iros Torch",
    Enabled: true,
    ItemLevel: 7,
    RequiredLevel: 5,
    Code: "wnd",
    Properties: [
      {
        PropertyString: "+1",
        Index: 0
      },
      {
        PropertyString: "Adds 5-9 to Fire Damage",
        Index: 2
      },
      {
        PropertyString: "+6 Life stolen per hit",
        Index: 1
      },
      {
        PropertyString: "10 to Energy",
        Index: 4
      },
      {
        PropertyString: "Regenerate Mana 5%",
        Index: 5
      },
      {
        PropertyString: "3 to Light Radius",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "2 to 4"
        }
      ],
      EquipmentType: 1,
      Name: "Wand",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 2,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Scepter",
    Name: "Knell Striker",
    Index: "Knell Striker",
    Enabled: true,
    ItemLevel: 7,
    RequiredLevel: 5,
    Code: "scp",
    Properties: [
      {
        PropertyString: "+70-80% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "35 to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "+25 Chance of Crushing Blow",
        Index: 0
      },
      {
        PropertyString: "+15 to Mana",
        Index: 3
      },
      {
        PropertyString: "Fire Resist +20%",
        Index: 1
      },
      {
        PropertyString: "Poison Resist +20%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "10 to 18"
        }
      ],
      EquipmentType: 1,
      Name: "Scepter",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 3,
      Type: {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Club",
    Name: "Stoutnail",
    Index: "Stoutnail",
    Enabled: true,
    ItemLevel: 7,
    RequiredLevel: 5,
    Code: "spc",
    Properties: [
      {
        PropertyString: "+100% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "7 to Vitality",
        Index: 2
      },
      {
        PropertyString: "+2 Magic Damage Reduced by",
        Index: 3
      },
      {
        PropertyString: "+3-10 Attacker Takes Damage of",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "10 to 16"
        }
      ],
      EquipmentType: 1,
      Name: "Spiked Club",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 4,
      Type: {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Bane Ash",
    Index: "Bane Ash",
    Enabled: true,
    ItemLevel: 7,
    RequiredLevel: 5,
    Code: "sst",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+50-60% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "Adds 4-6 Fire damage",
        Index: 0
      },
      {
        PropertyString: "+5 to Fire Bolt (Sorceress Only)",
        Index: 6
      },
      {
        PropertyString: "+2 to Warmth (Sorceress Only)",
        Index: 7
      },
      {
        PropertyString: "+30 to Mana",
        Index: 3
      },
      {
        PropertyString: "Fire Resist +50%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "1 to 7"
        }
      ],
      EquipmentType: 1,
      Name: "Short Staff",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 1,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "The Hand of Broc",
    Index: "The Hand of Broc",
    Enabled: true,
    ItemLevel: 7,
    RequiredLevel: 5,
    Code: "lgl",
    Properties: [
      {
        PropertyString: "+3 Mana stolen per hit",
        Index: 0
      },
      {
        PropertyString: "+3 Life stolen per hit",
        Index: 1
      },
      {
        PropertyString: "+10-20 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "+10 Defense",
        Index: 4
      },
      {
        PropertyString: "+20 to Mana",
        Index: 3
      },
      {
        PropertyString: "Poison Resist +10%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "13",
      EquipmentType: 0,
      Name: "Leather Gloves",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 3,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "Hotspur",
    Index: "Hotspur",
    Enabled: true,
    ItemLevel: 7,
    RequiredLevel: 5,
    Code: "lbt",
    Properties: [
      {
        PropertyString: "Adds 3-6 to Fire Damage",
        Index: 2
      },
      {
        PropertyString: "+10-20 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "+6 Defense",
        Index: 3
      },
      {
        PropertyString: "15 to Life",
        Index: 1
      },
      {
        PropertyString: "+15 to Maximum Fire Resist",
        Index: 0
      },
      {
        PropertyString: "Fire Resist +45%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "3 to 8",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "9",
      EquipmentType: 0,
      Name: "Boots",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 3,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Sword",
    Name: "Deviljack",
    Index: "Deviljack",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 5,
    Code: "ssd",
    Properties: [
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+100% Damage to Demons Damage to Demons",
        Index: 1
      },
      {
        PropertyString: "3-5 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "+10 Reduces all Vendor Prices",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(4-5) to (14-17)"
        }
      ],
      EquipmentType: 1,
      Name: "Short Sword",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 1,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Trickster's Guise",
    Index: "Trickster's Guise",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 5,
    Code: "cap",
    Properties: [
      {
        PropertyString: "27% Chance to cast level 3 charged bolt when struck",
        Index: 3
      },
      {
        PropertyString: "+15-25 Defense",
        Index: 0
      },
      {
        PropertyString: "15 to Energy",
        Index: 1
      },
      {
        PropertyString: "All Resistances +6-13",
        Index: 4
      },
      {
        PropertyString: "+8 Damage Reduced by 8%%",
        Index: 2
      },
      {
        PropertyString: "Socketed (1)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "18-28",
      EquipmentType: 0,
      Name: "Cap",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 1,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Shield",
    Name: "Traitor's Mark",
    Index: "Traitor's Mark",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 5,
    Code: "buc",
    Properties: [
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+25% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+15 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "10-20% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "Adds 3-4 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+15-30 Defense",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "1 to 3",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "19-34",
      EquipmentType: 0,
      Name: "Buckler",
      RequiredStrength: 12,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 1,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Belt",
    Name: "Ivywrap",
    Index: "Ivywrap",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 5,
    Code: "lbl",
    Properties: [
      {
        PropertyString: "+77 to Minimum Poison Damage",
        Index: 1
      },
      {
        PropertyString: "+10 Slows target by",
        Index: 4
      },
      {
        PropertyString: "+10-20 Defense",
        Index: 0
      },
      {
        PropertyString: "Poison Resist +35%",
        Index: 2
      },
      {
        PropertyString: "+25-50 Poison Length Reduced by",
        Index: 3
      },
      {
        PropertyString: "+10-15 better chance of getting magic item",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "12-22",
      EquipmentType: 0,
      Name: "Sash",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 3,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Auric Shields",
    Name: "Seafarer's Security",
    Index: "Seafarer's Security",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 5,
    Code: "pa1",
    Properties: [
      {
        PropertyString: "+15-25% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "20-25% Increased Chance of Blocking",
        Index: 2
      },
      {
        PropertyString: "+10-15 Defense",
        Index: 0
      },
      {
        PropertyString: "Socketed (2)",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "2 to 6",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "18-23",
      EquipmentType: 0,
      Name: "Targe",
      RequiredStrength: 16,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 4,
      Type: {
        Name: "Auric Shields",
        Index: "Auric Shields",
        Class: "pal"
      },
      RequiredClass: "Paladin"
    }
  },
  {
    Type: "Jewel",
    Name: "Tiger Eye",
    Index: "Tiger Eye",
    Enabled: true,
    ItemLevel: 5,
    RequiredLevel: 5,
    Code: "jew",
    Properties: [
      {
        PropertyString: "+15-20% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+5-8 to Maximum Damage",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Jewel",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Jewel",
        Index: "Jewel",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Gangrene Reaper",
    Index: "Gangrene Reaper",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 6,
    Code: "hax",
    Properties: [
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+55 to Minimum Poison Damage",
        Index: 1
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 2
      },
      {
        PropertyString: "10 to Strength",
        Index: 4
      },
      {
        PropertyString: "Repairs 0.15 durability per second",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(6-7) to (12-15)"
        }
      ],
      EquipmentType: 1,
      Name: "Hand Axe",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 3,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Knife",
    Name: "Darkflayer",
    Index: "Darkflayer",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 6,
    Code: "dgr",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 2
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "Adds 7-15 to Damage",
        Index: 0
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 4
      },
      {
        PropertyString: "All Resistances +10-15",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "8 to 19"
        }
      ],
      EquipmentType: 1,
      Name: "Dagger",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 3,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Puzzler's Mystery",
    Index: "Puzzler's Mystery",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 6,
    Code: "sst",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "Adds 5-10 to Damage",
        Index: 0
      },
      {
        PropertyString: "+36-44 to Throw",
        Index: 1
      },
      {
        PropertyString: "+36-44 to Throw",
        Index: 2
      },
      {
        PropertyString: "+25 to Mana",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "6 to 15"
        }
      ],
      EquipmentType: 1,
      Name: "Short Staff",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 1,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Magic Bow Quiv",
    Name: "Barbed Arrows",
    Index: "Replenishing Quiver",
    Enabled: false,
    ItemLevel: 6,
    RequiredLevel: 6,
    Code: "z01",
    Properties: [
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "Adds 2-8 to Damage",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Magic Arrows",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Magic Bow Quiv",
        Index: "Magic Bow Quiv",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Magic Xbow Quiv",
    Name: "Barbed Bolts",
    Index: "Replenishing Bolt Case",
    Enabled: false,
    ItemLevel: 6,
    RequiredLevel: 6,
    Code: "z02",
    Properties: [
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "Adds 2-8 to Damage",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Magic Bolts",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Magic Xbow Quiv",
        Index: "Magic Xbow Quiv",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Leafrazor",
    Index: "Leafrazor",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 6,
    Code: "jav",
    Properties: [
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+40 Piercing Attack",
        Index: 5
      },
      {
        PropertyString: "Adds 2-4 to Damage",
        Index: 3
      },
      {
        PropertyString: "+35 Deadly Strike",
        Index: 4
      },
      {
        PropertyString: "+1-2 to Critical Strike (Amazon Only)",
        Index: 6
      },
      {
        PropertyString: "+75 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "4 to 14"
        },
        {
          Type: 2,
          DamageString: "(14-17) to (32-39)"
        }
      ],
      EquipmentType: 1,
      Name: "Javelin",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 1,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Throwing Axe",
    Name: "Solstice Edge",
    Index: "Solstice Edge",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 6,
    Code: "tax",
    Properties: [
      {
        PropertyString: "Adds 3-9 to Fire Damage",
        Index: 3
      },
      {
        PropertyString: "+1 Knockback",
        Index: 5
      },
      {
        PropertyString: "+20-30 better chance of getting magic item",
        Index: 4
      },
      {
        PropertyString: "+60 Increased Stack Size",
        Index: 1
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 2
      },
      {
        PropertyString: "4-12",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "4 to 7"
        },
        {
          Type: 2,
          DamageString: "8 to 12"
        }
      ],
      EquipmentType: 1,
      Name: "Throwing Axe",
      RequiredStrength: 0,
      RequiredDexterity: 40,
      Durability: 250,
      ItemLevel: 7,
      Type: {
        Name: "Throwing Axe",
        Index: "Throwing Axe",
        Class: ""
      },
      RequiredClass: "Axe"
    }
  },
  {
    Type: "Armor",
    Name: "Ashenwrath",
    Index: "Ashenwrath",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 6,
    Code: "qui",
    Properties: [
      {
        PropertyString: "+1 to Fire Skills",
        Index: 2
      },
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+20-30 Defense",
        Index: 0
      },
      {
        PropertyString: "Fire Resist +35%",
        Index: 3
      },
      {
        PropertyString: "Socketed (1-2)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "28-38",
      EquipmentType: 0,
      Name: "Quilted Armor",
      RequiredStrength: 12,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 1,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Orb",
    Name: "Sparrow's Trill",
    Index: "Sparrow's Trill",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 6,
    Code: "ob1",
    Properties: [
      {
        PropertyString: "+1 to Cold Skills (Sorceress only)",
        Index: 1
      },
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 4
      },
      {
        PropertyString: "Adds 3-8 to Damage",
        Index: 0
      },
      {
        PropertyString: "+15-25 Defense",
        Index: 3
      },
      {
        PropertyString: "+25-35 to Mana",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "5 to 13"
        }
      ],
      EquipmentType: 1,
      Name: "      ",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 1,
      Type: {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      },
      RequiredClass: "Sorceress"
    }
  },
  {
    Type: "Primal Helm",
    Name: "Chaos Kin",
    Index: "Chaos Kin",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 6,
    Code: "ba1",
    Properties: [
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+8-12 to Maximum Damage",
        Index: 3
      },
      {
        PropertyString: "51%",
        Index: 5
      },
      {
        PropertyString: "+10-15 Defense",
        Index: 0
      },
      {
        PropertyString: "Lightning Resist +15-25%",
        Index: 4
      },
      {
        PropertyString: "+3-5 Damage Reduced by",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "20-25",
      EquipmentType: 0,
      Name: "Jawbone Cap",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 25,
      ItemLevel: 4,
      Type: {
        Name: "Primal Helm",
        Index: "Primal Helm",
        Class: "bar"
      },
      RequiredClass: "Barbarian"
    }
  },
  {
    Type: "Amulet",
    Name: "Psyche Shroud",
    Index: "Psyche Shroud",
    Enabled: true,
    ItemLevel: 6,
    RequiredLevel: 6,
    Code: "amu",
    Properties: [
      {
        PropertyString: "+15 Faster Run/Walk",
        Index: 0
      },
      {
        PropertyString: "10 to Energy",
        Index: 3
      },
      {
        PropertyString: "20-30 to Life",
        Index: 2
      },
      {
        PropertyString: "Lightning Resist +20%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Amulet",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Amulet",
        Index: "Amulet",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Large Charm",
    Name: "Nightshade",
    Index: "Nightdrifter",
    Enabled: true,
    ItemLevel: 6,
    RequiredLevel: 6,
    Code: "cm3",
    Properties: [
      {
        PropertyString: "+15 Faster Run/Walk",
        Index: 3
      },
      {
        PropertyString: "Adds 5-8 to Cold Damage",
        Index: 1
      },
      {
        PropertyString: "Freezes target +1-2",
        Index: 2
      },
      {
        PropertyString: "15-25 to Life",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Grand Charm",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Large Charm",
        Index: "Large Charm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Blood Crescent",
    Index: "Blood Crescent",
    Enabled: true,
    ItemLevel: 10,
    RequiredLevel: 7,
    Code: "scm",
    Properties: [
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+60-80% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "+15 Life stolen per hit",
        Index: 6
      },
      {
        PropertyString: "33% Chance of Open Wounds",
        Index: 4
      },
      {
        PropertyString: "15 to Life",
        Index: 2
      },
      {
        PropertyString: "All Resistances +15",
        Index: 0
      },
      {
        PropertyString: "4 to Light Radius",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "3 to 9"
        }
      ],
      EquipmentType: 1,
      Name: "Scimitar",
      RequiredStrength: 0,
      RequiredDexterity: 21,
      Durability: 250,
      ItemLevel: 5,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Pluckeye",
    Index: "Pluckeye",
    Enabled: true,
    ItemLevel: 10,
    RequiredLevel: 7,
    Code: "sbw",
    Properties: [
      {
        PropertyString: "+100% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "28 to Attack Rating",
        Index: 0
      },
      {
        PropertyString: "+3 Mana stolen per hit",
        Index: 4
      },
      {
        PropertyString: "10 to Life",
        Index: 2
      },
      {
        PropertyString: "+2 to Mana after each Kill",
        Index: 5
      },
      {
        PropertyString: "2 to Light Radius",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "4 to 10"
        }
      ],
      EquipmentType: 1,
      Name: "Short Bow",
      RequiredStrength: 0,
      RequiredDexterity: 15,
      Durability: 0,
      ItemLevel: 1,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Greyform",
    Index: "Greyform",
    Enabled: true,
    ItemLevel: 10,
    RequiredLevel: 7,
    Code: "qui",
    Properties: [
      {
        PropertyString: "+5 Life stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+20 Defense",
        Index: 5
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 3
      },
      {
        PropertyString: "Cold Resist +20%",
        Index: 1
      },
      {
        PropertyString: "Fire Resist +20%",
        Index: 2
      },
      {
        PropertyString: "+3 Magic Damage Reduced by",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "28",
      EquipmentType: 0,
      Name: "Quilted Armor",
      RequiredStrength: 12,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 1,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Belt",
    Name: "Lenymo",
    Index: "Lenyms Cord",
    Enabled: true,
    ItemLevel: 10,
    RequiredLevel: 7,
    Code: "lbl",
    Properties: [
      {
        PropertyString: "+15 to Mana",
        Index: 0
      },
      {
        PropertyString: "Regenerate Mana 30%",
        Index: 1
      },
      {
        PropertyString: "All Resistances +5",
        Index: 2
      },
      {
        PropertyString: "1 to Light Radius",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "2",
      EquipmentType: 0,
      Name: "Sash",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 3,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Ring",
    Name: "Nagelring",
    Index: "Nagelring",
    Enabled: true,
    ItemLevel: 10,
    RequiredLevel: 7,
    Code: "rin",
    Properties: [
      {
        PropertyString: "50-75 to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "+3 Magic Damage Reduced by",
        Index: 0
      },
      {
        PropertyString: "+3 Attacker Takes Damage of",
        Index: 1
      },
      {
        PropertyString: "+15-30 better chance of getting magic item",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Ring",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Ring",
        Index: "Ring",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Club",
    Name: "Quickfeint",
    Index: "Quickfeint",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 7,
    Code: "clb",
    Properties: [
      {
        PropertyString: "+15 Faster Run/Walk",
        Index: 5
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "15-20% Increased Chance of Blocking",
        Index: 4
      },
      {
        PropertyString: "Adds 3-6 to Damage",
        Index: 1
      },
      {
        PropertyString: "+25-50 Defense",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "5 to 18"
        }
      ],
      EquipmentType: 1,
      Name: "Club",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 1,
      Type: {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Violetwing",
    Index: "Violetwing",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 7,
    Code: "sbw",
    Properties: [
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 3
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "Adds 4-8 to Damage",
        Index: 0
      },
      {
        PropertyString: "+3 to Magic Arrow (Amazon Only)",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "6 to 13"
        }
      ],
      EquipmentType: 1,
      Name: "Short Bow",
      RequiredStrength: 0,
      RequiredDexterity: 15,
      Durability: 0,
      ItemLevel: 1,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Throwing Knife",
    Name: "Subtle Slice",
    Index: "Subtle Slice",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 7,
    Code: "tkf",
    Properties: [
      {
        PropertyString: "14% Chance to cast level 3 fire bolt when struck",
        Index: 6
      },
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 4-8 to Damage",
        Index: 3
      },
      {
        PropertyString: "+55 to Minimum Poison Damage",
        Index: 5
      },
      {
        PropertyString: "+35 Deadly Strike",
        Index: 4
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 7
      },
      {
        PropertyString: "+75 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(8-9) to (14-15)"
        },
        {
          Type: 2,
          DamageString: "(12-14) to (26-30)"
        }
      ],
      EquipmentType: 1,
      Name: "Throwing Knife",
      RequiredStrength: 0,
      RequiredDexterity: 21,
      Durability: 250,
      ItemLevel: 2,
      Type: {
        Name: "Throwing Knife",
        Index: "Throwing Knife",
        Class: ""
      },
      RequiredClass: "Knife"
    }
  },
  {
    Type: "Boots",
    Name: "Marathon Slipper",
    Index: "Marathon Slipper",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 7,
    Code: "lbt",
    Properties: [
      {
        PropertyString: "+25 Faster Run/Walk",
        Index: 1
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "+15-25 Defense",
        Index: 0
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 3
      },
      {
        PropertyString: "Lightning Resist +20-30%",
        Index: 4
      },
      {
        PropertyString: "+35 extra gold from monsters",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "3 to 8",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "17-27",
      EquipmentType: 0,
      Name: "Boots",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 3,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Hidden Death",
    Index: "Hidden Death",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 7,
    Code: "ktr",
    Properties: [
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+6-10 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+25-35 Deadly Strike",
        Index: 2
      },
      {
        PropertyString: "+1-2 to Claw Mastery (Assassin Only)",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(8-10) to (20-27)"
        }
      ],
      EquipmentType: 1,
      Name: "Katar",
      RequiredStrength: 20,
      RequiredDexterity: 20,
      Durability: 250,
      ItemLevel: 1,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Axe",
    Name: "Axe of Fechmar",
    Index: "Fechmars Axe",
    Enabled: true,
    ItemLevel: 11,
    RequiredLevel: 8,
    Code: "lax",
    Properties: [
      {
        PropertyString: "+70-90% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Freezes target +3",
        Index: 1
      },
      {
        PropertyString: "Cold Resist +50%",
        Index: 2
      },
      {
        PropertyString: "2 to Light Radius",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(10-11) to (22-24)"
        }
      ],
      EquipmentType: 1,
      Name: "Large Axe",
      RequiredStrength: 35,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 6,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "The Dragon Chang",
    Index: "The Dragon Chang",
    Enabled: true,
    ItemLevel: 11,
    RequiredLevel: 8,
    Code: "spr",
    Properties: [
      {
        PropertyString: "+10 to Minimum Damage",
        Index: 1
      },
      {
        PropertyString: "35 to Attack Rating",
        Index: 0
      },
      {
        PropertyString: "+100% Damage to Undead Damage to Undead",
        Index: 3
      },
      {
        PropertyString: "Adds 3-6 to Fire Damage",
        Index: 4
      },
      {
        PropertyString: "2 to Light Radius",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "13 to 15"
        }
      ],
      EquipmentType: 1,
      Name: "Spear",
      RequiredStrength: 0,
      RequiredDexterity: 20,
      Durability: 250,
      ItemLevel: 5,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Dimoak's Hew",
    Index: "Dimoaks Hew",
    Enabled: true,
    ItemLevel: 11,
    RequiredLevel: 8,
    Code: "bar",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+100% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "-8 Defense",
        Index: 3
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "2 to 54"
        }
      ],
      EquipmentType: 1,
      Name: "Bardiche",
      RequiredStrength: 40,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 5,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Gracehunter",
    Index: "Gracehunter",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 8,
    Code: "lax",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+6 Mana stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+75 extra gold from monsters",
        Index: 3
      },
      {
        PropertyString: "+20 better chance of getting magic item",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(12-15) to (26-32)"
        }
      ],
      EquipmentType: 1,
      Name: "Large Axe",
      RequiredStrength: 35,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 6,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Briarblade",
    Index: "Briarblade",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 8,
    Code: "scm",
    Properties: [
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+100 to Minimum Poison Damage",
        Index: 1
      },
      {
        PropertyString: "+15 Deadly Strike",
        Index: 4
      },
      {
        PropertyString: "50% Chance of Open Wounds",
        Index: 2
      },
      {
        PropertyString: "+3-5 Life after each Kill",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(4-5) to (12-15)"
        }
      ],
      EquipmentType: 1,
      Name: "Scimitar",
      RequiredStrength: 0,
      RequiredDexterity: 21,
      Durability: 250,
      ItemLevel: 5,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Scepter",
    Name: "Ambercall",
    Index: "Ambercall",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 8,
    Code: "scp",
    Properties: [
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 6-20 Fire damage",
        Index: 1
      },
      {
        PropertyString: "+1 to Shout",
        Index: 3
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 5
      },
      {
        PropertyString: "10 to Vitality",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(12-15) to (22-27)"
        }
      ],
      EquipmentType: 1,
      Name: "Scepter",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 3,
      Type: {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Adamantine Bow",
    Index: "Adamantine Bow",
    Enabled: true,
    ItemLevel: 4,
    RequiredLevel: 8,
    Code: "6lw",
    Properties: [
      {
        PropertyString: "6% Chance to cast level 20 multiple shot when struck",
        Index: 4
      },
      {
        PropertyString: "1-2 to All Skills",
        Index: 6
      },
      {
        PropertyString: "+2 to Bow and Crossbow Skills (Amazon only)",
        Index: 7
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+100-175 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+275-400 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Magic Resist +15%",
        Index: 3
      },
      {
        PropertyString: "+15 Damage Reduced by 15%%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(110-185) to (343-468)"
        }
      ],
      EquipmentType: 1,
      Name: "Hydra Bow",
      RequiredStrength: 134,
      RequiredDexterity: 167,
      Durability: 0,
      ItemLevel: 85,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "JuJu Flame",
    Index: "JuJu Flame",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 8,
    Code: "lea",
    Properties: [
      {
        PropertyString: "25% Chance to cast level 4 teeth when you Kill an Enemy",
        Index: 2
      },
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+30-40 Defense",
        Index: 0
      },
      {
        PropertyString: "Level 17 Fire Bolt (200 Charges)",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "44-54",
      EquipmentType: 0,
      Name: "Leather Armor",
      RequiredStrength: 15,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 3,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Nameweaver",
    Index: "Nameweaver",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 8,
    Code: "cap",
    Properties: [
      {
        PropertyString: "+5-10 to Maximum Damage",
        Index: 2
      },
      {
        PropertyString: "+20-30 Defense",
        Index: 0
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 1
      },
      {
        PropertyString: "Regenerate Mana 45%",
        Index: 3
      },
      {
        PropertyString: "Lightning Resist +35%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "23-33",
      EquipmentType: 0,
      Name: "Cap",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 1,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Shield",
    Name: "Light Reaper",
    Index: "Lightreaper",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 8,
    Code: "buc",
    Properties: [
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 4
      },
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "15-25% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "Adds 10-20 to Lightning Damage",
        Index: 2
      },
      {
        PropertyString: "+20-35 Defense",
        Index: 0
      },
      {
        PropertyString: "5 to Vitality",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "1 to 3",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "24-39",
      EquipmentType: 0,
      Name: "Buckler",
      RequiredStrength: 12,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 1,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Goblin Touch",
    Index: "Goblin Touch",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 8,
    Code: "lgl",
    Properties: [
      {
        PropertyString: "75 to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "+100% Damage to Demons Damage to Demons",
        Index: 2
      },
      {
        PropertyString: "+10-20 Defense",
        Index: 0
      },
      {
        PropertyString: "Poison Resist +15-25%",
        Index: 1
      },
      {
        PropertyString: "+10-15 Life after each Demon Kill",
        Index: 5
      },
      {
        PropertyString: "Repairs 0.1 durability per second",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "12-22",
      EquipmentType: 0,
      Name: "Leather Gloves",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 3,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Belt",
    Name: "Bloodrune",
    Index: "Bloodrune",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 8,
    Code: "lbl",
    Properties: [
      {
        PropertyString: "+15-25 Defense",
        Index: 0
      },
      {
        PropertyString: "+3-5 Replenish Life",
        Index: 1
      },
      {
        PropertyString: "Cold Resist +40-45%",
        Index: 3
      },
      {
        PropertyString: "Lightning Resist +40-45%",
        Index: 5
      },
      {
        PropertyString: "Fire Resist +40-45%",
        Index: 2
      },
      {
        PropertyString: "Poison Resist +40-45%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "17-27",
      EquipmentType: 0,
      Name: "Sash",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 3,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Amazon Spear",
    Name: "Hawkfire",
    Index: "Hawkfire",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 8,
    Code: "am3",
    Properties: [
      {
        PropertyString: "+1",
        Index: 3
      },
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+80-120% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 5-18 to Fire Damage",
        Index: 1
      },
      {
        PropertyString: "35 to Life",
        Index: 4
      },
      {
        PropertyString: "Fire Resist +35%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(32-39) to (43-52)"
        }
      ],
      EquipmentType: 1,
      Name: "Maiden Spear",
      RequiredStrength: 54,
      RequiredDexterity: 40,
      Durability: 250,
      ItemLevel: 18,
      Type: {
        Name: "Amazon Spear",
        Index: "Amazon Spear",
        Class: "ama"
      },
      RequiredClass: "Amazon"
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "Blanched Death",
    Index: "Blanched Death",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 8,
    Code: "ne1",
    Properties: [
      {
        PropertyString: "8% Chance to cast level 4 teeth when struck",
        Index: 4
      },
      {
        PropertyString: "+1",
        Index: 5
      },
      {
        PropertyString: "+1-3 to Skeleton Mastery (Necromancer Only)",
        Index: 1
      },
      {
        PropertyString: "+66-76 to Throw",
        Index: 2
      },
      {
        PropertyString: "+ Defense",
        Index: 0
      },
      {
        PropertyString: "Cold Resist +25-35%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "2",
      EquipmentType: 0,
      Name: "         ",
      RequiredStrength: 12,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 4,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Auric Shields",
    Name: "Validator",
    Index: "Validator",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 8,
    Code: "pa1",
    Properties: [
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 6
      },
      {
        PropertyString: "+15-20% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "+15 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "15-25% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "+4-9 to Maximum Damage",
        Index: 5
      },
      {
        PropertyString: "+20-25 Defense",
        Index: 0
      },
      {
        PropertyString: "All Resistances +15-20",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "2 to 6",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "28-33",
      EquipmentType: 0,
      Name: "Targe",
      RequiredStrength: 16,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 4,
      Type: {
        Name: "Auric Shields",
        Index: "Auric Shields",
        Class: "pal"
      },
      RequiredClass: "Paladin"
    }
  },
  {
    Type: "Pelt",
    Name: "Copperbite",
    Index: "Copperbite",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 8,
    Code: "dr2",
    Properties: [
      {
        PropertyString: "+1",
        Index: 5
      },
      {
        PropertyString: "+100 to Minimum Poison Damage",
        Index: 4
      },
      {
        PropertyString: "+55-75 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+10-15 Defense",
        Index: 1
      },
      {
        PropertyString: "Poison Resist +55%",
        Index: 3
      },
      {
        PropertyString: "Repairs 0.07 durability per second",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "17-23",
      EquipmentType: 0,
      Name: "        ",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 8,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Murdering Bloom",
    Index: "Murdering Bloom",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 8,
    Code: "wrb",
    Properties: [
      {
        PropertyString: "25% Chance to cast level 5 charged bolt when you Kill an Enemy",
        Index: 2
      },
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+60-80% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Socketed (1)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(8-9) to (14-16)"
        }
      ],
      EquipmentType: 1,
      Name: "Wrist Blade",
      RequiredStrength: 33,
      RequiredDexterity: 33,
      Durability: 250,
      ItemLevel: 9,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Axe",
    Name: "Deathspade",
    Index: "Deathspade",
    Enabled: true,
    ItemLevel: 12,
    RequiredLevel: 9,
    Code: "axe",
    Properties: [
      {
        PropertyString: "+60-70% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "+8 to Minimum Damage",
        Index: 1
      },
      {
        PropertyString: "15 bonus to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "Hit blinds target +1",
        Index: 0
      },
      {
        PropertyString: "+4 to Mana after each Kill",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "14 to 17"
        }
      ],
      EquipmentType: 1,
      Name: "Axe",
      RequiredStrength: 32,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 7,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Mace",
    Name: "Crushflange",
    Index: "Crushflange",
    Enabled: true,
    ItemLevel: 12,
    RequiredLevel: 9,
    Code: "mac",
    Properties: [
      {
        PropertyString: "+50-60% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "+33 Chance of Crushing Blow",
        Index: 5
      },
      {
        PropertyString: "+1 Knockback",
        Index: 1
      },
      {
        PropertyString: "15 to Strength",
        Index: 0
      },
      {
        PropertyString: "Fire Resist +50%",
        Index: 3
      },
      {
        PropertyString: "2 to Light Radius",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "4 to 15"
        }
      ],
      EquipmentType: 1,
      Name: "Mace",
      RequiredStrength: 27,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 8,
      Type: {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Serpent Lord",
    Index: "Serpent Lord",
    Enabled: true,
    ItemLevel: 12,
    RequiredLevel: 9,
    Code: "lst",
    Properties: [
      {
        PropertyString: "+30-40% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "-50% Target Defense",
        Index: 6
      },
      {
        PropertyString: "+40 to Minimum Poison Damage",
        Index: 0
      },
      {
        PropertyString: "+100 Mana stolen per hit",
        Index: 5
      },
      {
        PropertyString: "+10 to Mana",
        Index: 3
      },
      {
        PropertyString: "Poison Resist +50%",
        Index: 1
      },
      {
        PropertyString: "-1 to Light Radius",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "2 to 10"
        }
      ],
      EquipmentType: 1,
      Name: "Long Staff",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 8,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Leadcrow",
    Index: "Leadcrow",
    Enabled: true,
    ItemLevel: 12,
    RequiredLevel: 9,
    Code: "lxb",
    Properties: [
      {
        PropertyString: "+70% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "40 to Attack Rating",
        Index: 5
      },
      {
        PropertyString: "+25 Deadly Strike",
        Index: 4
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 0
      },
      {
        PropertyString: "10 to Life",
        Index: 1
      },
      {
        PropertyString: "Poison Resist +30%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "10 to 15"
        }
      ],
      EquipmentType: 1,
      Name: "Light Crossbow",
      RequiredStrength: 21,
      RequiredDexterity: 27,
      Durability: 0,
      ItemLevel: 6,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Umbral Disk",
    Index: "Umbral Disk",
    Enabled: true,
    ItemLevel: 12,
    RequiredLevel: 9,
    Code: "sml",
    Properties: [
      {
        PropertyString: "30% Increased Chance of Blocking",
        Index: 6
      },
      {
        PropertyString: "Hit blinds target +1",
        Index: 0
      },
      {
        PropertyString: "+40-50 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "+30 Defense",
        Index: 2
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 1
      },
      {
        PropertyString: "20 to Life",
        Index: 3
      },
      {
        PropertyString: "-2 to Light Radius",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "2 to 3",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "42-43",
      EquipmentType: 0,
      Name: "Small Shield",
      RequiredStrength: 22,
      RequiredDexterity: 0,
      Durability: 26,
      ItemLevel: 5,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Bloodfist",
    Index: "Bloodfist",
    Enabled: true,
    ItemLevel: 12,
    RequiredLevel: 9,
    Code: "vgl",
    Properties: [
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "+5 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+10-20 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "+10 Defense",
        Index: 3
      },
      {
        PropertyString: "40 to Life",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "16-17",
      EquipmentType: 0,
      Name: "Heavy Gloves",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 7,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "Gorefoot",
    Index: "Gorefoot",
    Enabled: true,
    ItemLevel: 12,
    RequiredLevel: 9,
    Code: "vbt",
    Properties: [
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 1
      },
      {
        PropertyString: "+2 Mana stolen per hit",
        Index: 2
      },
      {
        PropertyString: "+2 to Leap (Barbarian Only)",
        Index: 6
      },
      {
        PropertyString: "+20-30 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "+12 Defense",
        Index: 4
      },
      {
        PropertyString: "+2 Attacker Takes Damage of",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "4 to 10",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "19",
      EquipmentType: 0,
      Name: "Heavy Boots",
      RequiredStrength: 18,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 7,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Club",
    Name: "Oakheart",
    Index: "Oakheart",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 9,
    Code: "spc",
    Properties: [
      {
        PropertyString: "+110-160% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "20-30 to Life",
        Index: 4
      },
      {
        PropertyString: "+3-5 Replenish Life",
        Index: 5
      },
      {
        PropertyString: "+8-12 Damage Reduced by 8-12%%",
        Index: 1
      },
      {
        PropertyString: "+3-6 Damage Reduced by",
        Index: 2
      },
      {
        PropertyString: "+3-5 Magic Damage Reduced by",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(10-13) to (16-20)"
        }
      ],
      EquipmentType: 1,
      Name: "Spiked Club",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 4,
      Type: {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Zealot's Branch",
    Index: "Zealot's Branch",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 9,
    Code: "spr",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+3 to Zeal (Paladin Only)",
        Index: 2
      },
      {
        PropertyString: "10 to Strength",
        Index: 5
      },
      {
        PropertyString: "10 to Vitality",
        Index: 4
      },
      {
        PropertyString: "Poison Resist +15%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(6-7) to (30-37)"
        }
      ],
      EquipmentType: 1,
      Name: "Spear",
      RequiredStrength: 0,
      RequiredDexterity: 20,
      Durability: 250,
      ItemLevel: 5,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Serpent Lord",
    Index: "Serpent Lord1",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 9,
    Code: "lst",
    Properties: [
      {
        PropertyString: "+60-90% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "-50% Target Defense",
        Index: 6
      },
      {
        PropertyString: "+40 to Minimum Poison Damage",
        Index: 0
      },
      {
        PropertyString: "+100 Mana stolen per hit",
        Index: 5
      },
      {
        PropertyString: "+10 to Mana",
        Index: 3
      },
      {
        PropertyString: "Poison Resist +50%",
        Index: 1
      },
      {
        PropertyString: "-1 to Light Radius",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "3 to 12"
        }
      ],
      EquipmentType: 1,
      Name: "Long Staff",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 8,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Wand",
    Name: "Bitter Sorrow",
    Index: "Bitter Sorrow",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 9,
    Code: "wnd",
    Properties: [
      {
        PropertyString: "+2-7 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+12-20 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+66-75 to Unsummon",
        Index: 2
      },
      {
        PropertyString: "+66-75 to Unsummon",
        Index: 3
      },
      {
        PropertyString: "Socketed (2)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(4-9) to (16-24)"
        }
      ],
      EquipmentType: 1,
      Name: "Wand",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 2,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "Death's Witness",
    Index: "Death's Witness",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 9,
    Code: "ne2",
    Properties: [
      {
        PropertyString: "+1",
        Index: 3
      },
      {
        PropertyString: "+25 Faster Run/Walk",
        Index: 2
      },
      {
        PropertyString: "+15 Faster Cast Rate",
        Index: 6
      },
      {
        PropertyString: "10-20% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "+45-65 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+15-25 Defense",
        Index: 4
      },
      {
        PropertyString: "Poison Resist +35%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "22-33",
      EquipmentType: 0,
      Name: "          ",
      RequiredStrength: 14,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 8,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Sword",
    Name: "Skewer of Krintiz",
    Index: "Krintizs Skewer",
    Enabled: true,
    ItemLevel: 14,
    RequiredLevel: 10,
    Code: "sbr",
    Properties: [
      {
        PropertyString: "+50% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "Adds 3-7 to Damage",
        Index: 5
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 0
      },
      {
        PropertyString: "+7 Mana stolen per hit",
        Index: 3
      },
      {
        PropertyString: "10 to Strength",
        Index: 1
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "7 to 19"
        }
      ],
      EquipmentType: 1,
      Name: "Sabre",
      RequiredStrength: 25,
      RequiredDexterity: 25,
      Durability: 250,
      ItemLevel: 8,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Amulet",
    Name: "Nokozan Relic",
    Index: "Nokozan Relic",
    Enabled: true,
    ItemLevel: 14,
    RequiredLevel: 10,
    Code: "amu",
    Properties: [
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 4
      },
      {
        PropertyString: "Adds 3-6 to Fire Damage",
        Index: 0
      },
      {
        PropertyString: "+10 to Maximum Fire Resist",
        Index: 1
      },
      {
        PropertyString: "Fire Resist +50%",
        Index: 2
      },
      {
        PropertyString: "3 to Light Radius",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Amulet",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Amulet",
        Index: "Amulet",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Axe",
    Name: "Goreflood",
    Index: "Goreflood",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 10,
    Code: "axe",
    Properties: [
      {
        PropertyString: "+1-3 to Combat Skills (Barbarian only)",
        Index: 3
      },
      {
        PropertyString: "+120-170% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 3-5 Life stolen per hit",
        Index: 4
      },
      {
        PropertyString: "5-10 to Enemy Fire Resistance",
        Index: 5
      },
      {
        PropertyString: "% Chance of Open Wounds",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(8-10) to (24-29)"
        }
      ],
      EquipmentType: 1,
      Name: "Axe",
      RequiredStrength: 32,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 7,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Chronablade",
    Index: "Chromablade",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 10,
    Code: "sbr",
    Properties: [
      {
        PropertyString: "20% Chance to cast level 4 fire bolt when struck",
        Index: 4
      },
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+5 to Minimum Damage",
        Index: 3
      },
      {
        PropertyString: "7 to Light Radius",
        Index: 2
      },
      {
        PropertyString: "Requirements -100%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(11-12) to (21-25)"
        }
      ],
      EquipmentType: 1,
      Name: "Sabre",
      RequiredStrength: 25,
      RequiredDexterity: 25,
      Durability: 250,
      ItemLevel: 8,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Knave's Ascendence",
    Index: "Knave's Ascendence",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 10,
    Code: "bar",
    Properties: [
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+25-50 Defense",
        Index: 1
      },
      {
        PropertyString: "15 to Strength",
        Index: 2
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 3
      },
      {
        PropertyString: "10 to Vitality",
        Index: 4
      },
      {
        PropertyString: "35 to Life",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "2 to 54"
        }
      ],
      EquipmentType: 1,
      Name: "Bardiche",
      RequiredStrength: 40,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 5,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Carrion Wing",
    Index: "Carrion Wing",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 10,
    Code: "hbw",
    Properties: [
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+6-10 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+200% Damage to Undead Damage to Undead",
        Index: 2
      },
      {
        PropertyString: "20 to Fire Skill Damage",
        Index: 3
      },
      {
        PropertyString: "Socketed (1-2)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(6-7) to (20-27)"
        }
      ],
      EquipmentType: 1,
      Name: "Hunter's Bow",
      RequiredStrength: 0,
      RequiredDexterity: 28,
      Durability: 0,
      ItemLevel: 5,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Throwing Axe",
    Name: "Tonguecutter",
    Index: "Tonguecutter",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 10,
    Code: "tax",
    Properties: [
      {
        PropertyString: "+1",
        Index: 6
      },
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 5-7 Mana stolen per hit",
        Index: 5
      },
      {
        PropertyString: "Adds 5-7 Life stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+75 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(8-10) to (14-17)"
        },
        {
          Type: 2,
          DamageString: "(16-20) to (24-30)"
        }
      ],
      EquipmentType: 1,
      Name: "Throwing Axe",
      RequiredStrength: 0,
      RequiredDexterity: 40,
      Durability: 250,
      ItemLevel: 7,
      Type: {
        Name: "Throwing Axe",
        Index: "Throwing Axe",
        Class: ""
      },
      RequiredClass: "Axe"
    }
  },
  {
    Type: "Armor",
    Name: "Stinkshroud",
    Index: "Stinkshroud",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 10,
    Code: "hla",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 9 weaken when struck",
        Index: 1
      },
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+252-257 to Throw",
        Index: 3
      },
      {
        PropertyString: "+50-65 Defense",
        Index: 0
      },
      {
        PropertyString: "Poison Resist +35%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "71-86",
      EquipmentType: 0,
      Name: "Hard Leather Armor",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 28,
      ItemLevel: 5,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Boots",
    Name: "Cheetah Speed",
    Index: "Cheetah Speed",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 10,
    Code: "lbt",
    Properties: [
      {
        PropertyString: "+30 Faster Run/Walk",
        Index: 1
      },
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "+20-30 Defense",
        Index: 0
      },
      {
        PropertyString: "All Resistances +10-15",
        Index: 3
      },
      {
        PropertyString: "+5 Life after each Kill",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "3 to 8",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "22-32",
      EquipmentType: 0,
      Name: "Boots",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 3,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Auric Shields",
    Name: "Grip of the Gorgon",
    Index: "Grip of the Gorgon",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 10,
    Code: "pa2",
    Properties: [
      {
        PropertyString: "+1-3 to Offensive Auras (Paladin only)",
        Index: 3
      },
      {
        PropertyString: "15-30% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "58%",
        Index: 5
      },
      {
        PropertyString: "+15-25 Slows target by",
        Index: 4
      },
      {
        PropertyString: "+50-80 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "25 to Strength",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "2 to 8",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "16-19",
      EquipmentType: 0,
      Name: "Rondache",
      RequiredStrength: 26,
      RequiredDexterity: 0,
      Durability: 30,
      ItemLevel: 8,
      Type: {
        Name: "Auric Shields",
        Index: "Auric Shields",
        Class: "pal"
      },
      RequiredClass: "Paladin"
    }
  },
  {
    Type: "Knife",
    Name: "The Diggler",
    Index: "The Diggler",
    Enabled: true,
    ItemLevel: 15,
    RequiredLevel: 11,
    Code: "dir",
    Properties: [
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+50% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 5
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 0
      },
      {
        PropertyString: "Cold Resist +25%",
        Index: 3
      },
      {
        PropertyString: "Fire Resist +25%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "4 to 13"
        }
      ],
      EquipmentType: 1,
      Name: "Dirk",
      RequiredStrength: 0,
      RequiredDexterity: 25,
      Durability: 250,
      ItemLevel: 9,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Luck Chaser",
    Index: "Luck Chaser",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 11,
    Code: "pil",
    Properties: [
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+60-100% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+1 to Critical Strike",
        Index: 3
      },
      {
        PropertyString: "Lightning Resist +25%",
        Index: 5
      },
      {
        PropertyString: "+75 Increased Stack Size",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(6-8) to (14-18)"
        },
        {
          Type: 2,
          DamageString: "(11-14) to (32-40)"
        }
      ],
      EquipmentType: 1,
      Name: "Pilum",
      RequiredStrength: 0,
      RequiredDexterity: 45,
      Durability: 250,
      ItemLevel: 10,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Armor",
    Name: "Hungerpang",
    Index: "Hungerpang",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 11,
    Code: "qui",
    Properties: [
      {
        PropertyString: "Adds 4-6 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+30-50 Defense",
        Index: 0
      },
      {
        PropertyString: "65 to Life",
        Index: 2
      },
      {
        PropertyString: "-1 Drain Life",
        Index: 1
      },
      {
        PropertyString: "Regenerate Mana 40%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "38-58",
      EquipmentType: 0,
      Name: "Quilted Armor",
      RequiredStrength: 12,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 1,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Skein of Deceit",
    Index: "Skein of Deceit",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 11,
    Code: "sml",
    Properties: [
      {
        PropertyString: "+20 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "15-20% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "+1-3 to Fire Bolt (Sorceress Only)",
        Index: 3
      },
      {
        PropertyString: "+1-3 to Charged Bolt (Sorceress Only)",
        Index: 4
      },
      {
        PropertyString: "+1-3 to Ice Bolt (Sorceress Only)",
        Index: 5
      },
      {
        PropertyString: "+25-35 Defense",
        Index: 0
      },
      {
        PropertyString: "+25 to Mana",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "2 to 3",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "33-43",
      EquipmentType: 0,
      Name: "Small Shield",
      RequiredStrength: 22,
      RequiredDexterity: 0,
      Durability: 16,
      ItemLevel: 5,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Blisterpain",
    Index: "Blisterpain",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 11,
    Code: "lgl",
    Properties: [
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+5 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 12-18 to Fire Damage",
        Index: 2
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 5
      },
      {
        PropertyString: "+30-40 Defense",
        Index: 0
      },
      {
        PropertyString: "Fire Resist +45%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "32-42",
      EquipmentType: 0,
      Name: "Leather Gloves",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 3,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Orb",
    Name: "Queasespreader",
    Index: "Queasespreader",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 11,
    Code: "ob1",
    Properties: [
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "Adds 8-16 to Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 1-30 to Lightning Damage",
        Index: 3
      },
      {
        PropertyString: "+25 to Mana",
        Index: 5
      },
      {
        PropertyString: "Lightning Resist +35-50%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "10 to 21"
        }
      ],
      EquipmentType: 1,
      Name: "      ",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 1,
      Type: {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      },
      RequiredClass: "Sorceress"
    }
  },
  {
    Type: "Primal Helm",
    Name: "Pitykiller",
    Index: "Pitykiller",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 11,
    Code: "ba2",
    Properties: [
      {
        PropertyString: "100% Chance to cast level 25 frozen armor when you Level-Up",
        Index: 2
      },
      {
        PropertyString: "+15% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "+20-40 Defense",
        Index: 0
      },
      {
        PropertyString: "Cold Resist +25%",
        Index: 4
      },
      {
        PropertyString: "Fire Resist +20-30%",
        Index: 3
      },
      {
        PropertyString: "+1 Cannot Be Frozen",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "35-55",
      EquipmentType: 0,
      Name: "Fanged Helm",
      RequiredStrength: 35,
      RequiredDexterity: 0,
      Durability: 35,
      ItemLevel: 8,
      Type: {
        Name: "Primal Helm",
        Index: "Primal Helm",
        Class: "bar"
      },
      RequiredClass: "Barbarian"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Crimson Cry",
    Index: "Crimson Cry",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 11,
    Code: "axf",
    Properties: [
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+65-85% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 2
      },
      {
        PropertyString: "+2 to Shout",
        Index: 5
      },
      {
        PropertyString: "51%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "3 to 24"
        }
      ],
      EquipmentType: 1,
      Name: "Hatchet Hands",
      RequiredStrength: 37,
      RequiredDexterity: 37,
      Durability: 250,
      ItemLevel: 12,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Ring",
    Name: "Nameless Fear",
    Index: "Nameless Fear",
    Enabled: true,
    ItemLevel: 11,
    RequiredLevel: 11,
    Code: "rin",
    Properties: [
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+10-15% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 3
      },
      {
        PropertyString: "35%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Ring",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Ring",
        Index: "Ring",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Small Charm",
    Name: "Collin's Devastation",
    Index: "t3 Splash Charm",
    Enabled: false,
    ItemLevel: 1,
    RequiredLevel: 11,
    Code: "cm4",
    Properties: [
      {
        PropertyString: "33 Percent Melee Splash Damage",
        Index: 0
      },
      {
        PropertyString: "-33 Enhanced Minimum Damage",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Splash Charm",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Small Charm",
        Index: "Small Charm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Shadowfang",
    Index: "Shadowfang",
    Enabled: true,
    ItemLevel: 16,
    RequiredLevel: 12,
    Code: "2hs",
    Properties: [
      {
        PropertyString: "+100% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "Adds 10-30 to Cold Damage",
        Index: 3
      },
      {
        PropertyString: "+9 Mana stolen per hit",
        Index: 0
      },
      {
        PropertyString: "+9 Life stolen per hit",
        Index: 5
      },
      {
        PropertyString: "Cold Resist +20%",
        Index: 1
      },
      {
        PropertyString: "-2 to Light Radius",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "4 to 18"
        },
        {
          Type: 1,
          DamageString: "16 to 34"
        }
      ],
      EquipmentType: 1,
      Name: "Two-Handed Sword",
      RequiredStrength: 35,
      RequiredDexterity: 27,
      Durability: 250,
      ItemLevel: 10,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Razortine",
    Index: "Razortine",
    Enabled: true,
    ItemLevel: 16,
    RequiredLevel: 12,
    Code: "tri",
    Properties: [
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+30-50% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "-50% Target Defense",
        Index: 1
      },
      {
        PropertyString: "+25 Slows target by",
        Index: 0
      },
      {
        PropertyString: "15 to Strength",
        Index: 2
      },
      {
        PropertyString: "8 to Dexterity",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(11-13) to (19-22)"
        }
      ],
      EquipmentType: 1,
      Name: "Trident",
      RequiredStrength: 38,
      RequiredDexterity: 24,
      Durability: 250,
      ItemLevel: 9,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Blinkbat's Form",
    Index: "Blinkbats Form",
    Enabled: true,
    ItemLevel: 16,
    RequiredLevel: 12,
    Code: "lea",
    Properties: [
      {
        PropertyString: "+10 Faster Run/Walk",
        Index: 1
      },
      {
        PropertyString: "+40 Faster Hit Recovery",
        Index: 5
      },
      {
        PropertyString: "Adds 3-6 Fire damage",
        Index: 3
      },
      {
        PropertyString: "+25 Defense",
        Index: 2
      },
      {
        PropertyString: "+50 Defense vs. Missile",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "39",
      EquipmentType: 0,
      Name: "Leather Armor",
      RequiredStrength: 15,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 3,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Belt",
    Name: "Snakecord",
    Index: "Snakecord",
    Enabled: true,
    ItemLevel: 16,
    RequiredLevel: 12,
    Code: "vbl",
    Properties: [
      {
        PropertyString: "+40 to Minimum Poison Damage",
        Index: 0
      },
      {
        PropertyString: "+20-30 Enhanced Defense",
        Index: 3
      },
      {
        PropertyString: "+10 Defense",
        Index: 2
      },
      {
        PropertyString: "+5 Replenish Life",
        Index: 4
      },
      {
        PropertyString: "Poison Resist +25%",
        Index: 1
      },
      {
        PropertyString: "+50 Poison Length Reduced by",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "14-15",
      EquipmentType: 0,
      Name: "Light Belt",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 7,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Sword",
    Name: "Deathlust",
    Index: "Deathlust",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 12,
    Code: "2hs",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+15 Chance of Crushing Blow",
        Index: 2
      },
      {
        PropertyString: "+25 Deadly Strike",
        Index: 1
      },
      {
        PropertyString: "+1-2 to Skeleton Mastery (Necromancer Only)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(4-5) to (18-22)"
        },
        {
          Type: 1,
          DamageString: "(16-20) to (34-42)"
        }
      ],
      EquipmentType: 1,
      Name: "Two-Handed Sword",
      RequiredStrength: 35,
      RequiredDexterity: 27,
      Durability: 250,
      ItemLevel: 10,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Puppeteer's Staff",
    Index: "Puppeteer's Staff",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 12,
    Code: "lst",
    Properties: [
      {
        PropertyString: "+1 to Fire Skills",
        Index: 4
      },
      {
        PropertyString: "+110-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 5
      },
      {
        PropertyString: "+36-50 to Kick",
        Index: 1
      },
      {
        PropertyString: "+36-50 to Throw",
        Index: 2
      },
      {
        PropertyString: "+36-50 to Throw",
        Index: 3
      },
      {
        PropertyString: "+5-7 to Clay Golem",
        Index: 6
      },
      {
        PropertyString: "+3 to Summon Spirit Wolf",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(4-5) to (16-20)"
        }
      ],
      EquipmentType: 1,
      Name: "Long Staff",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 8,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Nail Flinger",
    Index: "Nail Flinger",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 12,
    Code: "lxb",
    Properties: [
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+100 Piercing Attack",
        Index: 2
      },
      {
        PropertyString: "+7-12 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+4-6 Damage Reduced by",
        Index: 3
      },
      {
        PropertyString: "+2-5 Magic Damage Reduced by",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(12-15) to (25-34)"
        }
      ],
      EquipmentType: 1,
      Name: "Light Crossbow",
      RequiredStrength: 21,
      RequiredDexterity: 27,
      Durability: 0,
      ItemLevel: 6,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Gemini Coat",
    Index: "Gemini Coat",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 12,
    Code: "stu",
    Properties: [
      {
        PropertyString: "Level 1 Might Aura When Equipped",
        Index: 3
      },
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+80-100 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+25-40 Defense",
        Index: 1
      },
      {
        PropertyString: "+25 Increase Maximum Durability",
        Index: 4
      },
      {
        PropertyString: "5-10",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "84-106",
      EquipmentType: 0,
      Name: "Studded Leather",
      RequiredStrength: 27,
      RequiredDexterity: 0,
      Durability: 32,
      ItemLevel: 8,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Circlet",
    Name: "Threatspeaker",
    Index: "Threatspeaker",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 12,
    Code: "ci1",
    Properties: [
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+5-10 to Minimum Damage",
        Index: 1
      },
      {
        PropertyString: "+20-25 to Maximum Damage",
        Index: 2
      },
      {
        PropertyString: "+10 to War Cry",
        Index: 4
      },
      {
        PropertyString: "+1-6 to Conversion",
        Index: 5
      },
      {
        PropertyString: "+50-75 Defense",
        Index: 0
      },
      {
        PropertyString: "All Resistances +15-20",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "80-105",
      EquipmentType: 0,
      Name: "Coronet",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 30,
      ItemLevel: 52,
      Type: {
        Name: "Circlet",
        Index: "Circlet",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Belt",
    Name: "Spiritseeker",
    Index: "Spiritseeker",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 12,
    Code: "vbl",
    Properties: [
      {
        PropertyString: "+50% Damage to Undead Damage to Undead",
        Index: 1
      },
      {
        PropertyString: "+15-25 Defense",
        Index: 0
      },
      {
        PropertyString: "+20-30 to Mana",
        Index: 4
      },
      {
        PropertyString: "Regenerate Mana 50%",
        Index: 5
      },
      {
        PropertyString: "3-5 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "+5 Reduces all Vendor Prices",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "18-28",
      EquipmentType: 0,
      Name: "Light Belt",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 7,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Amazon Bow",
    Name: "Angelsong",
    Index: "Angelsong",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 12,
    Code: "am1",
    Properties: [
      {
        PropertyString: "Level 1-3 Defiance Aura When Equipped",
        Index: 3
      },
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+75-110% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 5-10 to Damage",
        Index: 1
      },
      {
        PropertyString: "+200% Damage to Demons Damage to Demons",
        Index: 6
      },
      {
        PropertyString: "45 to Enemy Fire Resistance",
        Index: 4
      },
      {
        PropertyString: "45 to Enemy Cold Resistance",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(17-19) to (31-35)"
        }
      ],
      EquipmentType: 1,
      Name: "Stag Bow",
      RequiredStrength: 30,
      RequiredDexterity: 45,
      Durability: 0,
      ItemLevel: 18,
      Type: {
        Name: "Amazon Bow",
        Index: "Amazon Bow",
        Class: "ama"
      },
      RequiredClass: "Amazon"
    }
  },
  {
    Type: "Orb",
    Name: "Flicker Cinch",
    Index: "Flicker Cinch",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 12,
    Code: "ob2",
    Properties: [
      {
        PropertyString: "+80-120% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "20-30% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "25 to Life",
        Index: 3
      },
      {
        PropertyString: "+35 to Mana",
        Index: 4
      },
      {
        PropertyString: "+20-30 better chance of getting magic item",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(5-6) to (14-17)"
        }
      ],
      EquipmentType: 1,
      Name: "       ",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 8,
      Type: {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      },
      RequiredClass: "Sorceress"
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "Paingiver",
    Index: "Paingiver",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 12,
    Code: "ne2",
    Properties: [
      {
        PropertyString: "+1-3 to Curses (Necromancer only)",
        Index: 1
      },
      {
        PropertyString: "+15 Faster Block Rate",
        Index: 5
      },
      {
        PropertyString: "15-25% Increased Chance of Blocking",
        Index: 4
      },
      {
        PropertyString: "+1-3 to Amplify Damage (Necromancer Only)",
        Index: 2
      },
      {
        PropertyString: "+25-40 Defense",
        Index: 0
      },
      {
        PropertyString: "+25 to Mana",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "29-44",
      EquipmentType: 0,
      Name: "          ",
      RequiredStrength: 14,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 8,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Auric Shields",
    Name: "Valorsong",
    Index: "Valorsong",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 12,
    Code: "paf",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 4 battle orders when struck",
        Index: 3
      },
      {
        PropertyString: "5% Chance to cast level 4 shout when struck",
        Index: 4
      },
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "88% Chance of Open Wounds",
        Index: 5
      },
      {
        PropertyString: "+1 to Warmth",
        Index: 7
      },
      {
        PropertyString: "+ Defense",
        Index: 1
      },
      {
        PropertyString: "All Resistances +60-100",
        Index: 2
      },
      {
        PropertyString: "15-20% Damage Taken Goes To Mana",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageString: "5 to 87",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "182",
      EquipmentType: 0,
      Name: "Vortex Shield",
      RequiredStrength: 148,
      RequiredDexterity: 0,
      Durability: 90,
      ItemLevel: 85,
      Type: {
        Name: "Auric Shields",
        Index: "Auric Shields",
        Class: "pal"
      },
      RequiredClass: "Paladin"
    }
  },
  {
    Type: "Primal Helm",
    Name: "Madman's Bluster",
    Index: "Madman's Bluster",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 12,
    Code: "ba1",
    Properties: [
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 6
      },
      {
        PropertyString: "+1-2 to Minimum Damage",
        Index: 4
      },
      {
        PropertyString: "+4-6 to Maximum Damage",
        Index: 3
      },
      {
        PropertyString: "+1-3 to Howl (Barbarian Only)",
        Index: 2
      },
      {
        PropertyString: "+75-100 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "-5 to Energy",
        Index: 7
      },
      {
        PropertyString: "All Resistances +10-20",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "19-22",
      EquipmentType: 0,
      Name: "Jawbone Cap",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 25,
      ItemLevel: 4,
      Type: {
        Name: "Primal Helm",
        Index: "Primal Helm",
        Class: "bar"
      },
      RequiredClass: "Barbarian"
    }
  },
  {
    Type: "Pelt",
    Name: "Morning After",
    Index: "Morning After",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 12,
    Code: "dr1",
    Properties: [
      {
        PropertyString: "+1-2 to Summoning Skills (Druid only)",
        Index: 2
      },
      {
        PropertyString: "+20% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "+100-120 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+8-12 Replenish Life",
        Index: 1
      },
      {
        PropertyString: "+5 to Mana after each Kill",
        Index: 4
      },
      {
        PropertyString: "Socketed (1)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "18-19",
      EquipmentType: 0,
      Name: "              ",
      RequiredStrength: 16,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 4,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Amulet",
    Name: "Amulet of Warding",
    Index: "Amulet of Warding",
    Enabled: true,
    ItemLevel: 12,
    RequiredLevel: 12,
    Code: "amu",
    Properties: [
      {
        PropertyString: "5-12% Increased Chance of Blocking",
        Index: 3
      },
      {
        PropertyString: "+35-50 Defense",
        Index: 4
      },
      {
        PropertyString: "All Resistances +10-15",
        Index: 1
      },
      {
        PropertyString: "+5-8 Damage Reduced by",
        Index: 0
      },
      {
        PropertyString: "+4-6 Magic Damage Reduced by",
        Index: 2
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Amulet",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Amulet",
        Index: "Amulet",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Small Charm",
    Name: "Autumn's Avatar",
    Index: "Autumn's Avatar",
    Enabled: true,
    ItemLevel: 12,
    RequiredLevel: 12,
    Code: "cm1",
    Properties: [
      {
        PropertyString: "+3 to Maximum Damage",
        Index: 2
      },
      {
        PropertyString: "1-3 to Strength",
        Index: 3
      },
      {
        PropertyString: "12-15 to Life",
        Index: 0
      },
      {
        PropertyString: "+10-12 to Mana",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Small Charm",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Small Charm",
        Index: "Small Charm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Gleamscythe",
    Index: "Gleamscythe",
    Enabled: true,
    ItemLevel: 18,
    RequiredLevel: 13,
    Code: "flc",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+60-100% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "Adds 3-5 to Cold Damage",
        Index: 5
      },
      {
        PropertyString: "+20 Defense",
        Index: 2
      },
      {
        PropertyString: "+30 to Mana",
        Index: 1
      },
      {
        PropertyString: "3 to Light Radius",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(14-18) to (27-34)"
        }
      ],
      EquipmentType: 1,
      Name: "Falchion",
      RequiredStrength: 33,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 11,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Azurewrath",
    Index: "Azurewrath",
    Enabled: false,
    ItemLevel: 18,
    RequiredLevel: 13,
    Code: "crs",
    Properties: [
      {
        PropertyString: "+100% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "Adds 5-10 Adds 5-10 magic damage",
        Index: 5
      },
      {
        PropertyString: "Adds 3-6 to Cold Damage",
        Index: 2
      },
      {
        PropertyString: "+50 Deadly Strike",
        Index: 0
      },
      {
        PropertyString: "+10 better chance of getting magic item",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "10 to 30"
        }
      ],
      EquipmentType: 1,
      Name: "Crystal Sword",
      RequiredStrength: 43,
      RequiredDexterity: 0,
      Durability: 275,
      ItemLevel: 11,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Witherstring",
    Index: "Witherstring",
    Enabled: true,
    ItemLevel: 18,
    RequiredLevel: 13,
    Code: "hbw",
    Properties: [
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 0
      },
      {
        PropertyString: "+40-50% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+3 Fires Magic Arrows",
        Index: 4
      },
      {
        PropertyString: "+1 to Minimum Damage",
        Index: 1
      },
      {
        PropertyString: "+3 to Maximum Damage",
        Index: 2
      },
      {
        PropertyString: "50 to Attack Rating",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "5 to 12"
        }
      ],
      EquipmentType: 1,
      Name: "Hunter's Bow",
      RequiredStrength: 0,
      RequiredDexterity: 28,
      Durability: 0,
      ItemLevel: 5,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Stormguild",
    Index: "Stormguild",
    Enabled: true,
    ItemLevel: 18,
    RequiredLevel: 13,
    Code: "lrg",
    Properties: [
      {
        PropertyString: "30% Increased Chance of Blocking",
        Index: 5
      },
      {
        PropertyString: "Adds 1-6 to Lightning Damage",
        Index: 3
      },
      {
        PropertyString: "+50-60 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "+30 Defense",
        Index: 2
      },
      {
        PropertyString: "Lightning Resist +25%",
        Index: 1
      },
      {
        PropertyString: "+1 Magic Damage Reduced by",
        Index: 0
      },
      {
        PropertyString: "+3 Attacker Takes Lightning Damage of",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "2 to 4",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "49-50",
      EquipmentType: 0,
      Name: "Large Shield",
      RequiredStrength: 34,
      RequiredDexterity: 0,
      Durability: 34,
      ItemLevel: 11,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Fiendslayer",
    Index: "Fiendslayer",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 13,
    Code: "flc",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+120-170% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+200% Damage to Demons Damage to Demons",
        Index: 1
      },
      {
        PropertyString: "200 to Attack Rating against Demons",
        Index: 2
      },
      {
        PropertyString: "All Resistances +20",
        Index: 5
      },
      {
        PropertyString: "+5-8 Life after each Demon Kill",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(19-24) to (37-45)"
        }
      ],
      EquipmentType: 1,
      Name: "Falchion",
      RequiredStrength: 33,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 11,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Simpering Sword",
    Index: "Azurewrath1",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 13,
    Code: "crs",
    Properties: [
      {
        PropertyString: "+100% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "Adds 5-10 Adds 5-10 magic damage",
        Index: 5
      },
      {
        PropertyString: "Adds 3-6 to Cold Damage",
        Index: 2
      },
      {
        PropertyString: "+50 Deadly Strike",
        Index: 0
      },
      {
        PropertyString: "+10-25 better chance of getting magic item",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "10 to 30"
        }
      ],
      EquipmentType: 1,
      Name: "Crystal Sword",
      RequiredStrength: 43,
      RequiredDexterity: 0,
      Durability: 275,
      ItemLevel: 11,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Mace",
    Name: "Lesson in Pain",
    Index: "Lesson in Pain",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 13,
    Code: "mac",
    Properties: [
      {
        PropertyString: "20% Chance to cast level 3 amplify damage when struck",
        Index: 2
      },
      {
        PropertyString: "Level 3-5 Thorns Aura When Equipped",
        Index: 1
      },
      {
        PropertyString: "+1",
        Index: 4
      },
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 3-6 to Damage",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(9-10) to (26-31)"
        }
      ],
      EquipmentType: 1,
      Name: "Mace",
      RequiredStrength: 27,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 8,
      Type: {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Ogden's Shroud",
    Index: "Ogden's Shroud",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 13,
    Code: "lea",
    Properties: [
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "+45-65 Defense",
        Index: 0
      },
      {
        PropertyString: "Lightning Resist +25%",
        Index: 1
      },
      {
        PropertyString: "2-3 to Experience Gained",
        Index: 3
      },
      {
        PropertyString: "+100 extra gold from monsters",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "59-79",
      EquipmentType: 0,
      Name: "Leather Armor",
      RequiredStrength: 15,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 3,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Devourer of Dreams",
    Index: "Devourer of Dreams",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 13,
    Code: "skp",
    Properties: [
      {
        PropertyString: "+15 Faster Cast Rate",
        Index: 1
      },
      {
        PropertyString: "+1 to Warmth",
        Index: 2
      },
      {
        PropertyString: "+1 Knockback",
        Index: 4
      },
      {
        PropertyString: "+15-25 Defense",
        Index: 0
      },
      {
        PropertyString: "+3-5 Replenish Life",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "23-33",
      EquipmentType: 0,
      Name: "Skull Cap",
      RequiredStrength: 15,
      RequiredDexterity: 0,
      Durability: 18,
      ItemLevel: 5,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "Angel's Tread",
    Index: "Angel's Tread",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 13,
    Code: "vbt",
    Properties: [
      {
        PropertyString: "+1-3 to Defensive Auras (Paladin only)",
        Index: 1
      },
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "+1-3 to Prayer (Paladin Only)",
        Index: 2
      },
      {
        PropertyString: "+25-35 Defense",
        Index: 0
      },
      {
        PropertyString: "Fire Resist +25-35%",
        Index: 6
      },
      {
        PropertyString: "All Resistances +15-20",
        Index: 4
      },
      {
        PropertyString: "+15-25 better chance of getting magic item",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "4 to 10",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "30-40",
      EquipmentType: 0,
      Name: "Heavy Boots",
      RequiredStrength: 18,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 7,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Storms of Spring",
    Index: "Storms of Spring",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 13,
    Code: "wrb",
    Properties: [
      {
        PropertyString: "8% Chance to cast level 5 charged bolt when struck",
        Index: 3
      },
      {
        PropertyString: "+105-155% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "15% Increased Chance of Blocking",
        Index: 4
      },
      {
        PropertyString: "Adds 10-15 to Lightning Damage",
        Index: 1
      },
      {
        PropertyString: "Lightning Resist +15-25%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(10-12) to (18-22)"
        }
      ],
      EquipmentType: 1,
      Name: "Wrist Blade",
      RequiredStrength: 33,
      RequiredDexterity: 33,
      Durability: 250,
      ItemLevel: 9,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Axe",
    Name: "Goreshovel",
    Index: "Goreshovel",
    Enabled: true,
    ItemLevel: 19,
    RequiredLevel: 14,
    Code: "bax",
    Properties: [
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 0
      },
      {
        PropertyString: "+40-50% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "+9 to Maximum Damage",
        Index: 4
      },
      {
        PropertyString: "60% Chance of Open Wounds",
        Index: 2
      },
      {
        PropertyString: "25 to Strength",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(14-15) to (34-36)"
        }
      ],
      EquipmentType: 1,
      Name: "Broad Axe",
      RequiredStrength: 48,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 12,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Wand",
    Name: "Maelstrom",
    Index: "Maelstromwrath",
    Enabled: true,
    ItemLevel: 19,
    RequiredLevel: 14,
    Code: "ywn",
    Properties: [
      {
        PropertyString: "+30 Faster Cast Rate",
        Index: 4
      },
      {
        PropertyString: "Adds 1-9 Lightning damage",
        Index: 0
      },
      {
        PropertyString: "+1-3 to Corpse Explosion (Necromancer Only)",
        Index: 5
      },
      {
        PropertyString: "+1-3 to Terror (Necromancer Only)",
        Index: 6
      },
      {
        PropertyString: "+1-3 to Amplify Damage (Necromancer Only)",
        Index: 7
      },
      {
        PropertyString: "+1-3 to Iron Maiden (Necromancer Only)",
        Index: 8
      },
      {
        PropertyString: "+13 to Mana",
        Index: 3
      },
      {
        PropertyString: "Lightning Resist +40%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "2 to 8"
        }
      ],
      EquipmentType: 1,
      Name: "Yew Wand",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 12,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Steelgoad",
    Index: "Steelgoad",
    Enabled: true,
    ItemLevel: 19,
    RequiredLevel: 14,
    Code: "vou",
    Properties: [
      {
        PropertyString: "+60-80% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "30 to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "+30 Deadly Strike",
        Index: 1
      },
      {
        PropertyString: "75%",
        Index: 0
      },
      {
        PropertyString: "All Resistances +5",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(9-10) to (33-37)"
        }
      ],
      EquipmentType: 1,
      Name: "Voulge",
      RequiredStrength: 50,
      RequiredDexterity: 0,
      Durability: 270,
      ItemLevel: 11,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Coif of Glory",
    Index: "Coif of Glory",
    Enabled: true,
    ItemLevel: 19,
    RequiredLevel: 14,
    Code: "hlm",
    Properties: [
      {
        PropertyString: "Hit blinds target +1",
        Index: 1
      },
      {
        PropertyString: "+10 Defense",
        Index: 4
      },
      {
        PropertyString: "+100 Defense vs. Missile",
        Index: 3
      },
      {
        PropertyString: "Lightning Resist +15%",
        Index: 2
      },
      {
        PropertyString: "+7 Attacker Takes Lightning Damage of",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "25",
      EquipmentType: 0,
      Name: "Helm",
      RequiredStrength: 26,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 11,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Armor",
    Name: "The Centurion",
    Index: "The Centurion",
    Enabled: true,
    ItemLevel: 19,
    RequiredLevel: 14,
    Code: "hla",
    Properties: [
      {
        PropertyString: "50 to Attack Rating",
        Index: 1
      },
      {
        PropertyString: "+30 Defense",
        Index: 0
      },
      {
        PropertyString: "15 to Life",
        Index: 3
      },
      {
        PropertyString: "+5 Replenish Life",
        Index: 6
      },
      {
        PropertyString: "+15 to Mana",
        Index: 4
      },
      {
        PropertyString: "25% Stamina Drain",
        Index: 7
      },
      {
        PropertyString: "+2 Damage Reduced by",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "51",
      EquipmentType: 0,
      Name: "Hard Leather Armor",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 28,
      ItemLevel: 5,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Darkglow",
    Index: "Darkglow",
    Enabled: true,
    ItemLevel: 19,
    RequiredLevel: 14,
    Code: "rng",
    Properties: [
      {
        PropertyString: "20 to Attack Rating",
        Index: 0
      },
      {
        PropertyString: "+70-100 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "+50 Defense vs. Melee",
        Index: 3
      },
      {
        PropertyString: "+5 to Maximum Fire Resist",
        Index: 1
      },
      {
        PropertyString: "All Resistances +10",
        Index: 4
      },
      {
        PropertyString: "3 to Light Radius",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "78-92",
      EquipmentType: 0,
      Name: "Ring Mail",
      RequiredStrength: 36,
      RequiredDexterity: 0,
      Durability: 26,
      ItemLevel: 11,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Lungreaver",
    Index: "Lungreaver",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 14,
    Code: "2ax",
    Properties: [
      {
        PropertyString: "+15 Faster Run/Walk",
        Index: 3
      },
      {
        PropertyString: "+130-180% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 5-7 Life stolen per hit",
        Index: 2
      },
      {
        PropertyString: "+10 Slows target by",
        Index: 1
      },
      {
        PropertyString: "Socketed (1-2)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(11-14) to (29-36)"
        }
      ],
      EquipmentType: 1,
      Name: "Double Axe",
      RequiredStrength: 43,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 13,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Mirth Bringer",
    Index: "Mirth Bringer",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 14,
    Code: "bax",
    Properties: [
      {
        PropertyString: "10% Chance to cast level 3 inner sight on striking",
        Index: 1
      },
      {
        PropertyString: "+110-160% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Cold Resist +20-25%",
        Index: 3
      },
      {
        PropertyString: "Poison Resist +20-25%",
        Index: 2
      },
      {
        PropertyString: "3-5 to Experience Gained",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(21-26) to (37-46)"
        }
      ],
      EquipmentType: 1,
      Name: "Broad Axe",
      RequiredStrength: 48,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 12,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Knife",
    Name: "Prisoner's Anguish",
    Index: "Prisoner's Anguish",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 14,
    Code: "dir",
    Properties: [
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+6-10 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 4-7 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+50 Deadly Strike",
        Index: 2
      },
      {
        PropertyString: "+1-3 to Amplify Damage (Necromancer Only)",
        Index: 4
      },
      {
        PropertyString: "+1-3 to Weaken (Necromancer Only)",
        Index: 5
      },
      {
        PropertyString: "+1-3 to Poison Dagger (Necromancer Only)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(7-9) to (28-37)"
        }
      ],
      EquipmentType: 1,
      Name: "Dirk",
      RequiredStrength: 0,
      RequiredDexterity: 25,
      Durability: 250,
      ItemLevel: 9,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Oreseeker",
    Index: "Oreseeker",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 14,
    Code: "vou",
    Properties: [
      {
        PropertyString: "+115-165% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+150 extra gold from monsters",
        Index: 1
      },
      {
        PropertyString: "+25 better chance of getting magic item",
        Index: 2
      },
      {
        PropertyString: "+5 Reduces all Vendor Prices",
        Index: 5
      },
      {
        PropertyString: "Level 5 Find Item (100 Charges)",
        Index: 3
      },
      {
        PropertyString: "Requirements -35%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(12-15) to (45-55)"
        }
      ],
      EquipmentType: 1,
      Name: "Voulge",
      RequiredStrength: 50,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 11,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Steelflesh",
    Index: "Steelflesh",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 14,
    Code: "rng",
    Properties: [
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+20-25% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "+3-5 to Sacrifice",
        Index: 4
      },
      {
        PropertyString: "+125-200 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+10-15 Damage Reduced by 10-15%%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "103-138",
      EquipmentType: 0,
      Name: "Ring Mail",
      RequiredStrength: 36,
      RequiredDexterity: 0,
      Durability: 26,
      ItemLevel: 11,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Golgomere's Shield",
    Index: "Golgomere's Shield",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 14,
    Code: "sml",
    Properties: [
      {
        PropertyString: "+20 Faster Block Rate",
        Index: 1
      },
      {
        PropertyString: "10 to Cold Skill Damage",
        Index: 4
      },
      {
        PropertyString: "+100-120 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "20 to Life",
        Index: 6
      },
      {
        PropertyString: "Regenerate Mana 50%",
        Index: 3
      },
      {
        PropertyString: "Cold Resist +25%",
        Index: 5
      },
      {
        PropertyString: "+5-8 Life after each Kill",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "2 to 3",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "18-19",
      EquipmentType: 0,
      Name: "Small Shield",
      RequiredStrength: 22,
      RequiredDexterity: 0,
      Durability: 16,
      ItemLevel: 5,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Fiendfeast",
    Index: "Fiendfeast",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 14,
    Code: "vgl",
    Properties: [
      {
        PropertyString: "+50% Damage to Demons Damage to Demons",
        Index: 1
      },
      {
        PropertyString: "+50% Damage to Undead Damage to Undead",
        Index: 2
      },
      {
        PropertyString: "Adds 4-6 Mana stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+20-25 Defense",
        Index: 0
      },
      {
        PropertyString: "+5-10 Damage Reduced by 5-10%%",
        Index: 6
      },
      {
        PropertyString: "+25 extra gold from monsters",
        Index: 5
      },
      {
        PropertyString: "+15 better chance of getting magic item",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "25-30",
      EquipmentType: 0,
      Name: "Heavy Gloves",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 7,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Pelt",
    Name: "Silverskin",
    Index: "Silverskin",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 14,
    Code: "dr3",
    Properties: [
      {
        PropertyString: "+1-3 to Shape Shifting Skills (Druid only)",
        Index: 3
      },
      {
        PropertyString: "+25 Faster Run/Walk",
        Index: 2
      },
      {
        PropertyString: "Adds 10-15 to Cold Damage",
        Index: 5
      },
      {
        PropertyString: "+15-25 Deadly Strike",
        Index: 4
      },
      {
        PropertyString: "Freezes target +2",
        Index: 6
      },
      {
        PropertyString: "+35-45 Defense",
        Index: 0
      },
      {
        PropertyString: "+8-10 Damage Reduced by",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "53-63",
      EquipmentType: 0,
      Name: "        ",
      RequiredStrength: 24,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 16,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Axe",
    Name: "Bladebone",
    Index: "Bladebone",
    Enabled: true,
    ItemLevel: 20,
    RequiredLevel: 15,
    Code: "2ax",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+30-50% Enhanced Damage",
        Index: 6
      },
      {
        PropertyString: "+100% Damage to Undead Damage to Undead",
        Index: 0
      },
      {
        PropertyString: "40 to Attack Rating against Undead",
        Index: 1
      },
      {
        PropertyString: "Adds 8-12 Fire damage",
        Index: 4
      },
      {
        PropertyString: "+20 Defense",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(6-7) to (16-19)"
        }
      ],
      EquipmentType: 1,
      Name: "Double Axe",
      RequiredStrength: 43,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 13,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Mace",
    Name: "Bloodrise",
    Index: "Bloodrise",
    Enabled: true,
    ItemLevel: 20,
    RequiredLevel: 15,
    Code: "mst",
    Properties: [
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+120% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "50 bonus to Attack Rating",
        Index: 1
      },
      {
        PropertyString: "+5 Life stolen per hit",
        Index: 6
      },
      {
        PropertyString: "25% Chance of Open Wounds",
        Index: 2
      },
      {
        PropertyString: "+3 to Sacrifice (Paladin Only)",
        Index: 5
      },
      {
        PropertyString: "2 to Light Radius",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "15 to 35"
        }
      ],
      EquipmentType: 1,
      Name: "Morning Star",
      RequiredStrength: 36,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 13,
      Type: {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Raven Claw",
    Index: "Rimeraven",
    Enabled: true,
    ItemLevel: 20,
    RequiredLevel: 15,
    Code: "lbw",
    Properties: [
      {
        PropertyString: "+60-70% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "+3 Fires Explosive Arrows or Bolts",
        Index: 2
      },
      {
        PropertyString: "50 bonus to Attack Rating",
        Index: 0
      },
      {
        PropertyString: "3 to Strength",
        Index: 3
      },
      {
        PropertyString: "3 to Dexterity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "6 to 19"
        }
      ],
      EquipmentType: 1,
      Name: "Long Bow",
      RequiredStrength: 22,
      RequiredDexterity: 19,
      Durability: 0,
      ItemLevel: 8,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Tarnhelm",
    Index: "Tarnhelm",
    Enabled: true,
    ItemLevel: 20,
    RequiredLevel: 15,
    Code: "skp",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 2
      },
      {
        PropertyString: "+75 extra gold from monsters",
        Index: 0
      },
      {
        PropertyString: "+25-50 better chance of getting magic item",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "8",
      EquipmentType: 0,
      Name: "Skull Cap",
      RequiredStrength: 15,
      RequiredDexterity: 0,
      Durability: 18,
      ItemLevel: 5,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Armor",
    Name: "Hawkmail",
    Index: "Hawkmail",
    Enabled: true,
    ItemLevel: 20,
    RequiredLevel: 15,
    Code: "scl",
    Properties: [
      {
        PropertyString: "+10 Faster Run/Walk",
        Index: 4
      },
      {
        PropertyString: "+80-100 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+15 to Maximum Cold Resist",
        Index: 1
      },
      {
        PropertyString: "Cold Resist +15%",
        Index: 2
      },
      {
        PropertyString: "+1 Cannot Be Frozen",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "104-116",
      EquipmentType: 0,
      Name: "Scale Mail",
      RequiredStrength: 44,
      RequiredDexterity: 0,
      Durability: 36,
      ItemLevel: 13,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Swordback Hold",
    Index: "Swordback Hold",
    Enabled: true,
    ItemLevel: 20,
    RequiredLevel: 15,
    Code: "spk",
    Properties: [
      {
        PropertyString: "20% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "50% Chance of Open Wounds",
        Index: 2
      },
      {
        PropertyString: "+30-60 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "+10 Defense",
        Index: 6
      },
      {
        PropertyString: "+5 Attacker Takes Damage of",
        Index: 0
      },
      {
        PropertyString: "+5 Attacker Takes Damage of",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "5 to 9",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "30-35",
      EquipmentType: 0,
      Name: "Spiked Shield",
      RequiredStrength: 30,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 11,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Chance Guards",
    Index: "Chance Guards",
    Enabled: true,
    ItemLevel: 20,
    RequiredLevel: 15,
    Code: "mgl",
    Properties: [
      {
        PropertyString: "25 to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "+20-30 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "+15 Defense",
        Index: 3
      },
      {
        PropertyString: "+200 extra gold from monsters",
        Index: 0
      },
      {
        PropertyString: "+25-40 better chance of getting magic item",
        Index: 1
      },
      {
        PropertyString: "2 to Light Radius",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "25-26",
      EquipmentType: 0,
      Name: "Chain Gloves",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 16,
      ItemLevel: 12,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "Treads of Cthon",
    Index: "Treads of Cthon",
    Enabled: true,
    ItemLevel: 20,
    RequiredLevel: 15,
    Code: "mbt",
    Properties: [
      {
        PropertyString: "+30 Faster Run/Walk",
        Index: 0
      },
      {
        PropertyString: "+30-40 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "+12 Defense",
        Index: 4
      },
      {
        PropertyString: "+50 Defense vs. Missile",
        Index: 1
      },
      {
        PropertyString: "10 to Life",
        Index: 3
      },
      {
        PropertyString: "50% Stamina Drain",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "6 to 12",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "23-24",
      EquipmentType: 0,
      Name: "Chain Boots",
      RequiredStrength: 30,
      RequiredDexterity: 0,
      Durability: 16,
      ItemLevel: 12,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Amulet",
    Name: "The Eye of Etlich",
    Index: "The Eye of Etlich",
    Enabled: true,
    ItemLevel: 20,
    RequiredLevel: 15,
    Code: "amu",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 2
      },
      {
        PropertyString: "Adds 1-5 Cold damage",
        Index: 4
      },
      {
        PropertyString: "Adds 3-7 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+10-40 Defense vs. Missile",
        Index: 0
      },
      {
        PropertyString: "1-5 to Light Radius",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Amulet",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Amulet",
        Index: "Amulet",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Ring",
    Name: "Manald Heal",
    Index: "Manald Heal",
    Enabled: true,
    ItemLevel: 20,
    RequiredLevel: 15,
    Code: "rin",
    Properties: [
      {
        PropertyString: "Adds 4-7 Mana stolen per hit",
        Index: 0
      },
      {
        PropertyString: "20 to Life",
        Index: 2
      },
      {
        PropertyString: "+5-8 Replenish Life",
        Index: 1
      },
      {
        PropertyString: "Regenerate Mana 20%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Ring",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Ring",
        Index: "Ring",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Spear",
    Name: "Deceiver's Device",
    Index: "Deceiver's Device",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 15,
    Code: "tri",
    Properties: [
      {
        PropertyString: "+25 Faster Run/Walk",
        Index: 1
      },
      {
        PropertyString: "+110-165% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "225 to Attack Rating",
        Index: 5
      },
      {
        PropertyString: "+5 Life stolen per hit",
        Index: 4
      },
      {
        PropertyString: "Lightning Resist +35%",
        Index: 3
      },
      {
        PropertyString: "+15 Reduces all Vendor Prices",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(18-23) to (31-39)"
        }
      ],
      EquipmentType: 1,
      Name: "Trident",
      RequiredStrength: 38,
      RequiredDexterity: 24,
      Durability: 250,
      ItemLevel: 9,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Skyglow",
    Index: "Skyglow",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 15,
    Code: "pil",
    Properties: [
      {
        PropertyString: "+1",
        Index: 4
      },
      {
        PropertyString: "+100-165% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Block Rate",
        Index: 5
      },
      {
        PropertyString: "Adds 8-12 to Fire Damage",
        Index: 3
      },
      {
        PropertyString: "+5 Life after each Kill",
        Index: 6
      },
      {
        PropertyString: "+75 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(8-10) to (18-23)"
        },
        {
          Type: 2,
          DamageString: "(14-18) to (40-53)"
        }
      ],
      EquipmentType: 1,
      Name: "Pilum",
      RequiredStrength: 0,
      RequiredDexterity: 45,
      Durability: 250,
      ItemLevel: 10,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Armor",
    Name: "Armor of Gloom",
    Index: "Armor of Gloom",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 15,
    Code: "hla",
    Properties: [
      {
        PropertyString: "7% Chance to cast level 2 dim vision when struck",
        Index: 2
      },
      {
        PropertyString: "Hit blinds target +1",
        Index: 1
      },
      {
        PropertyString: "+70-85 Defense",
        Index: 0
      },
      {
        PropertyString: "10 to Vitality",
        Index: 4
      },
      {
        PropertyString: "Poison Resist +25-35%",
        Index: 3
      },
      {
        PropertyString: "Socketed (1)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "91-106",
      EquipmentType: 0,
      Name: "Hard Leather Armor",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 28,
      ItemLevel: 5,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Belt",
    Name: "Ratman's Rope",
    Index: "Ratman's Rope",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 15,
    Code: "vbl",
    Properties: [
      {
        PropertyString: "+10 Faster Cast Rate",
        Index: 4
      },
      {
        PropertyString: "+100% Damage to Demons Damage to Demons",
        Index: 1
      },
      {
        PropertyString: "+10-20 Defense",
        Index: 0
      },
      {
        PropertyString: "5 to Dexterity",
        Index: 5
      },
      {
        PropertyString: "+35 to Mana",
        Index: 3
      },
      {
        PropertyString: "Lightning Resist +20-30%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "13-23",
      EquipmentType: 0,
      Name: "Light Belt",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 7,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Amazon Spear",
    Name: "Wrathshifter",
    Index: "Wrathshifter",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 15,
    Code: "am3",
    Properties: [
      {
        PropertyString: "7% Chance to cast level 1 teleport when struck",
        Index: 5
      },
      {
        PropertyString: "+1 to Javelin and Spear Skills (Amazon only)",
        Index: 2
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+15-30 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+50-70 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+2 to Bone Armor",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(33-48) to (74-94)"
        }
      ],
      EquipmentType: 1,
      Name: "Maiden Spear",
      RequiredStrength: 54,
      RequiredDexterity: 40,
      Durability: 250,
      ItemLevel: 18,
      Type: {
        Name: "Amazon Spear",
        Index: "Amazon Spear",
        Class: "ama"
      },
      RequiredClass: "Amazon"
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "Scalp Hunter",
    Index: "Scalphunter",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 15,
    Code: "ne3",
    Properties: [
      {
        PropertyString: "+1-3 to Curses (Necromancer only)",
        Index: 3
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 6
      },
      {
        PropertyString: "+25 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "20-30% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "+50-70 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+8-10 Damage Reduced by",
        Index: 4
      },
      {
        PropertyString: "+15 Life after each Demon Kill",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "10-11",
      EquipmentType: 0,
      Name: "             ",
      RequiredStrength: 18,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 16,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Auric Shields",
    Name: "Secret of Steel",
    Index: "Secret of Steel",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 15,
    Code: "pa3",
    Properties: [
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 6
      },
      {
        PropertyString: "+25 Faster Block Rate",
        Index: 5
      },
      {
        PropertyString: "15% Increased Chance of Blocking",
        Index: 4
      },
      {
        PropertyString: "+75-100 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+20-40 Defense",
        Index: 1
      },
      {
        PropertyString: "+10-20 Damage Reduced by 10-20%%",
        Index: 2
      },
      {
        PropertyString: "Requirements -15%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "3 to 9",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "49-74",
      EquipmentType: 0,
      Name: "Heraldic Shield",
      RequiredStrength: 40,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 16,
      Type: {
        Name: "Auric Shields",
        Index: "Auric Shields",
        Class: "pal"
      },
      RequiredClass: "Paladin"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Killer's Watch",
    Index: "Killerwatch",
    Enabled: true,
    ItemLevel: 15,
    RequiredLevel: 15,
    Code: "ktr",
    Properties: [
      {
        PropertyString: "+1-3 to Traps (Assassin only)",
        Index: 2
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+10-20 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+30-40 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Level 6 IronGolem (1 Charges)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(14-24) to (37-47)"
        }
      ],
      EquipmentType: 1,
      Name: "Katar",
      RequiredStrength: 20,
      RequiredDexterity: 20,
      Durability: 250,
      ItemLevel: 1,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Liege Reaver",
    Index: "Liege Reaver",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 15,
    Code: "ces",
    Properties: [
      {
        PropertyString: "+1-3 to Martial Arts (Assassin only)",
        Index: 2
      },
      {
        PropertyString: "+65-90% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 5-10 to Damage",
        Index: 1
      },
      {
        PropertyString: "150 to Attack Rating",
        Index: 5
      },
      {
        PropertyString: "33% Chance of Open Wounds",
        Index: 6
      },
      {
        PropertyString: "Repairs 0.25 durability per second",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(16-18) to (34-38)"
        }
      ],
      EquipmentType: 1,
      Name: "Cestus",
      RequiredStrength: 42,
      RequiredDexterity: 42,
      Durability: 325,
      ItemLevel: 15,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Amulet",
    Name: "The Vanquisher",
    Index: "The Vanquisher",
    Enabled: true,
    ItemLevel: 15,
    RequiredLevel: 15,
    Code: "amu",
    Properties: [
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+50% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 2
      },
      {
        PropertyString: "+10-20 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 5-8 Mana stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+8 Life stolen per hit",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Amulet",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Amulet",
        Index: "Amulet",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Medium Charm",
    Name: "Peacemaker",
    Index: "Peacemaker",
    Enabled: true,
    ItemLevel: 15,
    RequiredLevel: 15,
    Code: "cm2",
    Properties: [
      {
        PropertyString: "5 to Strength",
        Index: 2
      },
      {
        PropertyString: "5 to Dexterity",
        Index: 3
      },
      {
        PropertyString: "20-25 to Life",
        Index: 0
      },
      {
        PropertyString: "+15-20 to Mana",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Large Charm",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Medium Charm",
        Index: "Medium Charm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Twitchthroe",
    Index: "Twitchthroe",
    Enabled: true,
    ItemLevel: 22,
    RequiredLevel: 16,
    Code: "stu",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 5
      },
      {
        PropertyString: "25% Increased Chance of Blocking",
        Index: 2
      },
      {
        PropertyString: "+25 Defense",
        Index: 3
      },
      {
        PropertyString: "10 to Strength",
        Index: 4
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "57",
      EquipmentType: 0,
      Name: "Studded Leather",
      RequiredStrength: 27,
      RequiredDexterity: 0,
      Durability: 32,
      ItemLevel: 8,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Gale Song",
    Index: "Gale Song",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 16,
    Code: "lbw",
    Properties: [
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 5-12 to Damage",
        Index: 1
      },
      {
        PropertyString: "112%",
        Index: 3
      },
      {
        PropertyString: "20 to Dexterity",
        Index: 4
      },
      {
        PropertyString: "Requirements -25%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(13-15) to (36-42)"
        }
      ],
      EquipmentType: 1,
      Name: "Long Bow",
      RequiredStrength: 22,
      RequiredDexterity: 19,
      Durability: 0,
      ItemLevel: 8,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Mandrake's Bloom",
    Index: "Mandrake's Bloom",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 16,
    Code: "scl",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 8 bone armor when struck",
        Index: 2
      },
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "10-15% Increased Chance of Blocking",
        Index: 3
      },
      {
        PropertyString: "Adds 10-20 to Fire Damage",
        Index: 4
      },
      {
        PropertyString: "+125-170 Enhanced Defense",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "130-156",
      EquipmentType: 0,
      Name: "Scale Mail",
      RequiredStrength: 44,
      RequiredDexterity: 0,
      Durability: 36,
      ItemLevel: 13,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Lie Spreader",
    Index: "Liespreader",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 16,
    Code: "skp",
    Properties: [
      {
        PropertyString: "+1 to Passive and Magic Skills (Amazon only)",
        Index: 2
      },
      {
        PropertyString: "+30-40 Defense",
        Index: 0
      },
      {
        PropertyString: "25 to Life",
        Index: 3
      },
      {
        PropertyString: "+25 to Mana",
        Index: 4
      },
      {
        PropertyString: "+15 Reduces all Vendor Prices",
        Index: 1
      },
      {
        PropertyString: "Socketed (1)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "38-48",
      EquipmentType: 0,
      Name: "Skull Cap",
      RequiredStrength: 15,
      RequiredDexterity: 0,
      Durability: 18,
      ItemLevel: 5,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Merc Equip",
    Name: "Freedom's Facade",
    Index: "Freedom's Facade",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 16,
    Code: "hlm",
    Properties: [
      {
        PropertyString: "+10 Faster Run/Walk",
        Index: 2
      },
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+18-30 Defense",
        Index: 0
      },
      {
        PropertyString: "20 to Dexterity",
        Index: 3
      },
      {
        PropertyString: "-1 Drain Life",
        Index: 4
      },
      {
        PropertyString: "10% Damage Taken Goes To Mana",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "33-45",
      EquipmentType: 0,
      Name: "Helm",
      RequiredStrength: 26,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 11,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Shield",
    Name: "Lepertouch",
    Index: "Lepertouch",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 16,
    Code: "lrg",
    Properties: [
      {
        PropertyString: "+20 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "15-25% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "+100 to Minimum Poison Damage",
        Index: 5
      },
      {
        PropertyString: "+1 to Poison Dagger",
        Index: 6
      },
      {
        PropertyString: "+100-125 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "Poison Resist +75%",
        Index: 4
      },
      {
        PropertyString: "+50 Poison Length Reduced by",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "2 to 4",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "26-29",
      EquipmentType: 0,
      Name: "Large Shield",
      RequiredStrength: 34,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 11,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Orb",
    Name: "Cyanstrike",
    Index: "Cyanstrike",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 16,
    Code: "ob2",
    Properties: [
      {
        PropertyString: "8% Chance to cast level 3 ice blast on striking",
        Index: 2
      },
      {
        PropertyString: "+6-12 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+20-25 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "10 to Cold Skill Damage",
        Index: 4
      },
      {
        PropertyString: "Poison Resist +25%",
        Index: 3
      },
      {
        PropertyString: "+5 Life after each Kill",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(9-15) to (28-33)"
        }
      ],
      EquipmentType: 1,
      Name: "       ",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 8,
      Type: {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      },
      RequiredClass: "Sorceress"
    }
  },
  {
    Type: "Pelt",
    Name: "Swift Decent",
    Index: "Swift Slaughter",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 16,
    Code: "dr2",
    Properties: [
      {
        PropertyString: "+1-2 to Shape Shifting Skills (Druid only)",
        Index: 4
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+6-10 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "75 to Attack Rating",
        Index: 5
      },
      {
        PropertyString: "+5 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+105-125 Enhanced Defense",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "10-11",
      EquipmentType: 0,
      Name: "        ",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 8,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Pelt",
    Name: "Hecuba's Tresses",
    Index: "Hecuba's Tresses",
    Enabled: true,
    ItemLevel: 16,
    RequiredLevel: 16,
    Code: "dre",
    Properties: [
      {
        PropertyString: "+4",
        Index: 1
      },
      {
        PropertyString: "+240-300 Defense",
        Index: 0
      },
      {
        PropertyString: "Socketed (3)",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "343-403",
      EquipmentType: 0,
      Name: "Sky Spirit",
      RequiredStrength: 113,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 83,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Cold of Winter",
    Index: "Cold of Winter",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 16,
    Code: "axf",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 2 frost nova when struck",
        Index: 2
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+110-160% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 10-15 to Cold Damage",
        Index: 1
      },
      {
        PropertyString: "+1-3 to Blade Sentinel (Assassin Only)",
        Index: 5
      },
      {
        PropertyString: "+1-3 to Shock Field (Assassin Only)",
        Index: 6
      },
      {
        PropertyString: "Repairs 0.2 durability per second",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(4-5) to (31-39)"
        }
      ],
      EquipmentType: 1,
      Name: "Hatchet Hands",
      RequiredStrength: 37,
      RequiredDexterity: 37,
      Durability: 250,
      ItemLevel: 12,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Scepter",
    Name: "Rusthandle",
    Index: "Rusthandle",
    Enabled: true,
    ItemLevel: 23,
    RequiredLevel: 17,
    Code: "gsc",
    Properties: [
      {
        PropertyString: "+1",
        Index: 0
      },
      {
        PropertyString: "+50-60% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "Adds 3-7 to Damage",
        Index: 1
      },
      {
        PropertyString: "+50-60% Damage to Undead Damage to Undead",
        Index: 5
      },
      {
        PropertyString: "+8 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+1-3 to Vengeance (Paladin Only)",
        Index: 6
      },
      {
        PropertyString: "+3 to Thorns (Paladin Only)",
        Index: 7
      },
      {
        PropertyString: "+1 Magic Damage Reduced by",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "15 to 34"
        }
      ],
      EquipmentType: 1,
      Name: "Grand Scepter",
      RequiredStrength: 37,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 15,
      Type: {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Griswold's Edge",
    Index: "Griswolds Edge",
    Enabled: true,
    ItemLevel: 23,
    RequiredLevel: 17,
    Code: "bsd",
    Properties: [
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+80-120% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "100 to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "Adds 10-25 Fire damage",
        Index: 0
      },
      {
        PropertyString: "+1 Knockback",
        Index: 4
      },
      {
        PropertyString: "12 to Strength",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(12-15) to (25-30)"
        }
      ],
      EquipmentType: 1,
      Name: "Broad Sword",
      RequiredStrength: 48,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 15,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Bloodthief",
    Index: "Bloodthief",
    Enabled: true,
    ItemLevel: 23,
    RequiredLevel: 17,
    Code: "brn",
    Properties: [
      {
        PropertyString: "+50-70% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "Adds 8-12 Life stolen per hit",
        Index: 2
      },
      {
        PropertyString: "35% Chance of Open Wounds",
        Index: 0
      },
      {
        PropertyString: "10 to Strength",
        Index: 1
      },
      {
        PropertyString: "26 to Life",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(10-11) to (25-28)"
        }
      ],
      EquipmentType: 1,
      Name: "Brandistock",
      RequiredStrength: 40,
      RequiredDexterity: 50,
      Durability: 250,
      ItemLevel: 16,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Duskdeep",
    Index: "Duskdeep",
    Enabled: true,
    ItemLevel: 23,
    RequiredLevel: 17,
    Code: "fhl",
    Properties: [
      {
        PropertyString: "+8 to Maximum Damage",
        Index: 3
      },
      {
        PropertyString: "+30-50 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "+10-20 Defense",
        Index: 4
      },
      {
        PropertyString: "All Resistances +15",
        Index: 1
      },
      {
        PropertyString: "+7 Damage Reduced by",
        Index: 2
      },
      {
        PropertyString: "-2 to Light Radius",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "41-56",
      EquipmentType: 0,
      Name: "Full Helm",
      RequiredStrength: 41,
      RequiredDexterity: 0,
      Durability: 30,
      ItemLevel: 15,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Armor",
    Name: "Sparking Mail",
    Index: "Sparking Mail",
    Enabled: true,
    ItemLevel: 23,
    RequiredLevel: 17,
    Code: "chn",
    Properties: [
      {
        PropertyString: "Adds 1-20 to Lightning Damage",
        Index: 1
      },
      {
        PropertyString: "+75-85 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "Lightning Resist +30%",
        Index: 3
      },
      {
        PropertyString: "+10-14 Attacker Takes Lightning Damage of",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "127-135",
      EquipmentType: 0,
      Name: "Chain Mail",
      RequiredStrength: 48,
      RequiredDexterity: 0,
      Durability: 45,
      ItemLevel: 15,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Steelclash",
    Index: "Steelclash",
    Enabled: true,
    ItemLevel: 23,
    RequiredLevel: 17,
    Code: "kit",
    Properties: [
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+20 Faster Block Rate",
        Index: 5
      },
      {
        PropertyString: "25% Increased Chance of Blocking",
        Index: 0
      },
      {
        PropertyString: "+60-100 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "+20 Defense",
        Index: 7
      },
      {
        PropertyString: "All Resistances +15",
        Index: 6
      },
      {
        PropertyString: "+3 Damage Reduced by",
        Index: 2
      },
      {
        PropertyString: "3 to Light Radius",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "2 to 5",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "47-54",
      EquipmentType: 0,
      Name: "Kite Shield",
      RequiredStrength: 47,
      RequiredDexterity: 0,
      Durability: 45,
      ItemLevel: 15,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Irksome Edge",
    Index: "Irksome Edge",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 17,
    Code: "crs",
    Properties: [
      {
        PropertyString: "8% Chance to cast level 7 static field on striking",
        Index: 2
      },
      {
        PropertyString: "+130-180% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+5 Mana stolen per hit",
        Index: 3
      },
      {
        PropertyString: "68%",
        Index: 5
      },
      {
        PropertyString: "+1 Knockback",
        Index: 4
      },
      {
        PropertyString: "Requirements +25%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(11-14) to (34-42)"
        }
      ],
      EquipmentType: 1,
      Name: "Crystal Sword",
      RequiredStrength: 43,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 11,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Fangtree",
    Index: "Fangtree",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 17,
    Code: "brn",
    Properties: [
      {
        PropertyString: "25% Chance to cast level 3 confuse when struck",
        Index: 3
      },
      {
        PropertyString: "+130-180% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+ Deadly Strike",
        Index: 2
      },
      {
        PropertyString: "Socketed (2-3)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(16-19) to (39-47)"
        }
      ],
      EquipmentType: 1,
      Name: "Brandistock",
      RequiredStrength: 40,
      RequiredDexterity: 50,
      Durability: 250,
      ItemLevel: 16,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Sage's Retort",
    Index: "Sage's Retort",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 17,
    Code: "cst",
    Properties: [
      {
        PropertyString: "50% Chance to cast level 2 frost nova when struck",
        Index: 1
      },
      {
        PropertyString: "3% Chance to cast level 7 static field when struck",
        Index: 2
      },
      {
        PropertyString: "6% Chance to cast level 6 frost nova when you Kill an Enemy",
        Index: 5
      },
      {
        PropertyString: "+125-175% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+15 Increase Maximum Mana",
        Index: 4
      },
      {
        PropertyString: "Regenerate Mana 75%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(9-11) to (27-33)"
        }
      ],
      EquipmentType: 1,
      Name: "Gnarled Staff",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 12,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Pridebreaker",
    Index: "Pridebreaker",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 17,
    Code: "ssp",
    Properties: [
      {
        PropertyString: "+60-100% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "75 to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "+75% Damage to Demons Damage to Demons",
        Index: 3
      },
      {
        PropertyString: "+30 Increased Stack Size",
        Index: 5
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      },
      {
        PropertyString: "5-10",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(3-4) to (20-26)"
        },
        {
          Type: 2,
          DamageString: "(16-20) to (35-44)"
        }
      ],
      EquipmentType: 1,
      Name: "Short Spear",
      RequiredStrength: 40,
      RequiredDexterity: 40,
      Durability: 250,
      ItemLevel: 15,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Armor",
    Name: "Scarab of Protection",
    Index: "Scarab of Protection",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 17,
    Code: "stu",
    Properties: [
      {
        PropertyString: "+15 Faster Block Rate",
        Index: 5
      },
      {
        PropertyString: "+100-115 Defense",
        Index: 0
      },
      {
        PropertyString: "35-45 to Life",
        Index: 4
      },
      {
        PropertyString: "Magic Resist +10%",
        Index: 2
      },
      {
        PropertyString: "All Resistances +10-20",
        Index: 3
      },
      {
        PropertyString: "+8-12 Damage Reduced by",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "132-147",
      EquipmentType: 0,
      Name: "Studded Leather",
      RequiredStrength: 27,
      RequiredDexterity: 0,
      Durability: 32,
      ItemLevel: 8,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Auric Shields",
    Name: "Swiftfoot Slash",
    Index: "Swiftfoot Slash",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 17,
    Code: "pa2",
    Properties: [
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 5
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+20-30% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 6
      },
      {
        PropertyString: "+15 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "20-30% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "+75-100 Enhanced Defense",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "2 to 8",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "19-22",
      EquipmentType: 0,
      Name: "Rondache",
      RequiredStrength: 26,
      RequiredDexterity: 0,
      Durability: 30,
      ItemLevel: 8,
      Type: {
        Name: "Auric Shields",
        Index: "Auric Shields",
        Class: "pal"
      },
      RequiredClass: "Paladin"
    }
  },
  {
    Type: "Primal Helm",
    Name: "Dragon Mask",
    Index: "Dragonkin",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 17,
    Code: "ba3",
    Properties: [
      {
        PropertyString: "15% Increased Chance of Blocking",
        Index: 5
      },
      {
        PropertyString: "125 to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "Adds 10-20 to Fire Damage",
        Index: 4
      },
      {
        PropertyString: "+50-75 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+5-10 Damage Reduced by 5-10%%",
        Index: 6
      },
      {
        PropertyString: "Repairs 0.2 durability per second",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "39-45",
      EquipmentType: 0,
      Name: "Horned Helm",
      RequiredStrength: 45,
      RequiredDexterity: 0,
      Durability: 70,
      ItemLevel: 16,
      Type: {
        Name: "Primal Helm",
        Index: "Primal Helm",
        Class: "bar"
      },
      RequiredClass: "Barbarian"
    }
  },
  {
    Type: "Staff",
    Name: "Spire of Lazarus",
    Index: "Lazarus Spire",
    Enabled: true,
    ItemLevel: 24,
    RequiredLevel: 18,
    Code: "cst",
    Properties: [
      {
        PropertyString: "+1",
        Index: 8
      },
      {
        PropertyString: "Adds 1-28 to Lightning Damage",
        Index: 7
      },
      {
        PropertyString: "+1 to Chain Lightning (Sorceress Only)",
        Index: 3
      },
      {
        PropertyString: "+2 to Lightning (Sorceress Only)",
        Index: 4
      },
      {
        PropertyString: "+3 to Static Field (Sorceress Only)",
        Index: 5
      },
      {
        PropertyString: "15 to Energy",
        Index: 2
      },
      {
        PropertyString: "Regenerate Mana 43%",
        Index: 6
      },
      {
        PropertyString: "Lightning Resist +75%",
        Index: 0
      },
      {
        PropertyString: "+5 Damage Reduced by",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "4 to 12"
        }
      ],
      EquipmentType: 1,
      Name: "Gnarled Staff",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 12,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Ichorsting",
    Index: "Ichorsting",
    Enabled: true,
    ItemLevel: 24,
    RequiredLevel: 18,
    Code: "mxb",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+50% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "+50 Piercing Attack",
        Index: 2
      },
      {
        PropertyString: "50 to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "+102 to Minimum Poison Damage",
        Index: 0
      },
      {
        PropertyString: "20 to Dexterity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "13 to 24"
        }
      ],
      EquipmentType: 1,
      Name: "Crossbow",
      RequiredStrength: 40,
      RequiredDexterity: 33,
      Durability: 0,
      ItemLevel: 15,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Auburn Fire",
    Index: "Auburnfire",
    Enabled: true,
    ItemLevel: 18,
    RequiredLevel: 18,
    Code: "hax",
    Properties: [
      {
        PropertyString: "+10-15 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+35-45 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 35-50 to Fire Damage",
        Index: 2
      },
      {
        PropertyString: "Adds 25-50 to Lightning Damage",
        Index: 3
      },
      {
        PropertyString: "Lightning Resist +15-25%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(13-18) to (41-51)"
        }
      ],
      EquipmentType: 1,
      Name: "Hand Axe",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 3,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Sleepthorn",
    Index: "Sleepthorn",
    Enabled: true,
    ItemLevel: 20,
    RequiredLevel: 18,
    Code: "spr",
    Properties: [
      {
        PropertyString: "+115-15 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "Adds 35-70 to Damage",
        Index: 0
      },
      {
        PropertyString: "Hit blinds target +3",
        Index: 1
      },
      {
        PropertyString: "+80 Slows target by",
        Index: 2
      },
      {
        PropertyString: "Poison Resist +30-50%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "38 to 85"
        }
      ],
      EquipmentType: 1,
      Name: "Spear",
      RequiredStrength: 0,
      RequiredDexterity: 20,
      Durability: 310,
      ItemLevel: 5,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Janglebright",
    Index: "Janglebright",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 18,
    Code: "mxb",
    Properties: [
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+125-175% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+15 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "All Resistances +25",
        Index: 2
      },
      {
        PropertyString: "3-5 to Light Radius",
        Index: 1
      },
      {
        PropertyString: "Socketed (1)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(20-24) to (36-44)"
        }
      ],
      EquipmentType: 1,
      Name: "Crossbow",
      RequiredStrength: 40,
      RequiredDexterity: 33,
      Durability: 0,
      ItemLevel: 15,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Xanadu Dreams",
    Index: "Xanadu Dreams",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 18,
    Code: "chn",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 2 dim vision on striking",
        Index: 3
      },
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+3 Life stolen per hit",
        Index: 5
      },
      {
        PropertyString: "+100-200 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "All Resistances +15-25",
        Index: 4
      },
      {
        PropertyString: "+100 Increase Maximum Durability",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "146-219",
      EquipmentType: 0,
      Name: "Chain Mail",
      RequiredStrength: 48,
      RequiredDexterity: 0,
      Durability: 45,
      ItemLevel: 15,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Circlet",
    Name: "Charon's Token",
    Index: "Charon's Token",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 18,
    Code: "ci0",
    Properties: [
      {
        PropertyString: "+15 Faster Run/Walk",
        Index: 1
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+15 Faster Cast Rate",
        Index: 4
      },
      {
        PropertyString: "+15 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "+15 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "+20-30 Defense",
        Index: 0
      },
      {
        PropertyString: "15 to Strength",
        Index: 6
      },
      {
        PropertyString: "All Resistances +15",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "40-50",
      EquipmentType: 0,
      Name: "Circlet",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 35,
      ItemLevel: 24,
      Type: {
        Name: "Circlet",
        Index: "Circlet",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Debt Finisher",
    Index: "Debtfinisher",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 18,
    Code: "spk",
    Properties: [
      {
        PropertyString: "+1",
        Index: 4
      },
      {
        PropertyString: "+25 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "20-30% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "+1-5 to Zeal",
        Index: 3
      },
      {
        PropertyString: "+1-3 to Sacrifice (Paladin Only)",
        Index: 5
      },
      {
        PropertyString: "+1-3 to Defiance (Paladin Only)",
        Index: 6
      },
      {
        PropertyString: "+110-135 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+30-40 Defense",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "5 to 9",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "63-77",
      EquipmentType: 0,
      Name: "Spiked Shield",
      RequiredStrength: 30,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 11,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Healing Touch",
    Index: "Healing Touch",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 18,
    Code: "vgl",
    Properties: [
      {
        PropertyString: "Adds 6-8 Life stolen per hit",
        Index: 1
      },
      {
        PropertyString: "+35-45 Defense",
        Index: 0
      },
      {
        PropertyString: "+3-5 Replenish Life",
        Index: 2
      },
      {
        PropertyString: "Regenerate Mana 35%",
        Index: 5
      },
      {
        PropertyString: "+4-7 Life after each Kill",
        Index: 3
      },
      {
        PropertyString: "+4-6 to Mana after each Kill",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "40-50",
      EquipmentType: 0,
      Name: "Heavy Gloves",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 7,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Amazon Bow",
    Name: "Bleeding Branch",
    Index: "Bleeding Branch",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 18,
    Code: "am1",
    Properties: [
      {
        PropertyString: "+120-160% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 10-20 to Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 5-8 Life stolen per hit",
        Index: 2
      },
      {
        PropertyString: "57% Chance of Open Wounds",
        Index: 4
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 3
      },
      {
        PropertyString: "Socketed (2)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(25-28) to (46-51)"
        }
      ],
      EquipmentType: 1,
      Name: "Stag Bow",
      RequiredStrength: 30,
      RequiredDexterity: 45,
      Durability: 0,
      ItemLevel: 18,
      Type: {
        Name: "Amazon Bow",
        Index: "Amazon Bow",
        Class: "ama"
      },
      RequiredClass: "Amazon"
    }
  },
  {
    Type: "Orb",
    Name: "Soul Stinger",
    Index: "Soul Stinger",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 18,
    Code: "ob3",
    Properties: [
      {
        PropertyString: "75% Chance to cast level 5 amplify damage on striking",
        Index: 3
      },
      {
        PropertyString: "+1",
        Index: 0
      },
      {
        PropertyString: "Adds 10-20 to Damage",
        Index: 4
      },
      {
        PropertyString: "+35 Mana stolen per hit",
        Index: 5
      },
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 1
      },
      {
        PropertyString: "+2 to Weaken",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "14 to 30"
        }
      ],
      EquipmentType: 1,
      Name: "   ",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 12,
      Type: {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      },
      RequiredClass: "Sorceress"
    }
  },
  {
    Type: "Primal Helm",
    Name: "Darkhunger",
    Index: "Darkhunger",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 18,
    Code: "ba2",
    Properties: [
      {
        PropertyString: "+1-3 to Masteries (Barbarian only)",
        Index: 5
      },
      {
        PropertyString: "Adds 5-8 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "Hit blinds target +2",
        Index: 1
      },
      {
        PropertyString: "+10-20 Defense",
        Index: 0
      },
      {
        PropertyString: "All Resistances +10-15",
        Index: 2
      },
      {
        PropertyString: "+3-5 Life after each Kill",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "25-35",
      EquipmentType: 0,
      Name: "Fanged Helm",
      RequiredStrength: 35,
      RequiredDexterity: 0,
      Durability: 35,
      ItemLevel: 8,
      Type: {
        Name: "Primal Helm",
        Index: "Primal Helm",
        Class: "bar"
      },
      RequiredClass: "Barbarian"
    }
  },
  {
    Type: "Ring",
    Name: "Elven Heartband",
    Index: "Elven Heartband",
    Enabled: true,
    ItemLevel: 18,
    RequiredLevel: 18,
    Code: "rin",
    Properties: [
      {
        PropertyString: "Adds 4-6 Life stolen per hit",
        Index: 4
      },
      {
        PropertyString: "20-30 to Life",
        Index: 1
      },
      {
        PropertyString: "+5 Damage Reduced by 5%%",
        Index: 2
      },
      {
        PropertyString: "3-5 to Experience Gained",
        Index: 0
      },
      {
        PropertyString: "+15-25 better chance of getting magic item",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Ring",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Ring",
        Index: "Ring",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Jewel",
    Name: "Jade Facet",
    Index: "Jade Facet",
    Enabled: true,
    ItemLevel: 18,
    RequiredLevel: 18,
    Code: "jew",
    Properties: [
      {
        PropertyString: "+20-29% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+8-10 to Maximum Damage",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Jewel",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Jewel",
        Index: "Jewel",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "The Chieftain",
    Index: "The Chieftan",
    Enabled: true,
    ItemLevel: 26,
    RequiredLevel: 19,
    Code: "btx",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+100% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 1-40 to Lightning Damage",
        Index: 4
      },
      {
        PropertyString: "All Resistances +10-20",
        Index: 1
      },
      {
        PropertyString: "+6 to Mana after each Kill",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "24 to 64"
        }
      ],
      EquipmentType: 1,
      Name: "Battle Axe",
      RequiredStrength: 54,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 17,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Soulflay",
    Index: "Soulflay",
    Enabled: true,
    ItemLevel: 26,
    RequiredLevel: 19,
    Code: "clm",
    Properties: [
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+70-100% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "Adds 4-10 Mana stolen per hit",
        Index: 0
      },
      {
        PropertyString: "+4 Life stolen per hit",
        Index: 1
      },
      {
        PropertyString: "All Resistances +5",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(8-10) to (20-24)"
        },
        {
          Type: 1,
          DamageString: "(22-26) to (51-60)"
        }
      ],
      EquipmentType: 1,
      Name: "Claymore",
      RequiredStrength: 47,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 17,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Knife",
    Name: "The Jade Tan Do",
    Index: "The Jade Tan Do",
    Enabled: true,
    ItemLevel: 26,
    RequiredLevel: 19,
    Code: "kri",
    Properties: [
      {
        PropertyString: "100-150 to Attack Rating",
        Index: 0
      },
      {
        PropertyString: "+460 to Minimum Poison Damage",
        Index: 2
      },
      {
        PropertyString: "+20 to Maximum Poison Resist",
        Index: 4
      },
      {
        PropertyString: "Poison Resist +95%",
        Index: 3
      },
      {
        PropertyString: "+1 Cannot Be Frozen",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "2 to 11"
        }
      ],
      EquipmentType: 1,
      Name: "Kris",
      RequiredStrength: 0,
      RequiredDexterity: 45,
      Durability: 250,
      ItemLevel: 17,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Soul Harvest",
    Index: "Soul Harvest",
    Enabled: true,
    ItemLevel: 26,
    RequiredLevel: 19,
    Code: "scy",
    Properties: [
      {
        PropertyString: "+50-90% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "45 to Attack Rating",
        Index: 1
      },
      {
        PropertyString: "+10 Mana stolen per hit",
        Index: 4
      },
      {
        PropertyString: "30% Chance of Open Wounds",
        Index: 0
      },
      {
        PropertyString: "5 to Energy",
        Index: 5
      },
      {
        PropertyString: "All Resistances +20",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(12-15) to (30-38)"
        }
      ],
      EquipmentType: 1,
      Name: "Scythe",
      RequiredStrength: 41,
      RequiredDexterity: 41,
      Durability: 250,
      ItemLevel: 15,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Bverrit Keep",
    Index: "Bverrit Keep",
    Enabled: true,
    ItemLevel: 26,
    RequiredLevel: 19,
    Code: "tow",
    Properties: [
      {
        PropertyString: "10% Increased Chance of Blocking",
        Index: 5
      },
      {
        PropertyString: "+80-120 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "+30 Defense",
        Index: 0
      },
      {
        PropertyString: "5 to Strength",
        Index: 2
      },
      {
        PropertyString: "Fire Resist +75%",
        Index: 1
      },
      {
        PropertyString: "+5 Magic Damage Reduced by",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "1 to 5",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "71-80",
      EquipmentType: 0,
      Name: "Tower Shield",
      RequiredStrength: 75,
      RequiredDexterity: 0,
      Durability: 140,
      ItemLevel: 22,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Rebuker",
    Index: "Rebuker",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 19,
    Code: "scy",
    Properties: [
      {
        PropertyString: "+120-170% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Hit blinds target +2",
        Index: 3
      },
      {
        PropertyString: "+20 Slows target by",
        Index: 2
      },
      {
        PropertyString: "+2 Knockback",
        Index: 1
      },
      {
        PropertyString: "Socketed (2)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(17-21) to (44-54)"
        }
      ],
      EquipmentType: 1,
      Name: "Scythe",
      RequiredStrength: 41,
      RequiredDexterity: 41,
      Durability: 250,
      ItemLevel: 15,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Wand",
    Name: "Ire of Astaroth",
    Index: "Ire of Astaroth",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 19,
    Code: "ywn",
    Properties: [
      {
        PropertyString: "+1",
        Index: 4
      },
      {
        PropertyString: "+25 Faster Cast Rate",
        Index: 6
      },
      {
        PropertyString: "+66-80 to Kick",
        Index: 0
      },
      {
        PropertyString: "+66-80 to Throw",
        Index: 1
      },
      {
        PropertyString: "+66-80 to Throw",
        Index: 2
      },
      {
        PropertyString: "+66-80 to Unsummon",
        Index: 3
      },
      {
        PropertyString: "+40 to Mana",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "2 to 8"
        }
      ],
      EquipmentType: 1,
      Name: "Yew Wand",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 12,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Throwing Knife",
    Name: "Dead Scoffer",
    Index: "Dead Scoffer",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 19,
    Code: "bkf",
    Properties: [
      {
        PropertyString: "+75-110% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "+350% Damage to Undead Damage to Undead",
        Index: 5
      },
      {
        PropertyString: "+3-5 to Raise Skeleton",
        Index: 4
      },
      {
        PropertyString: "+8-10 Life after each Kill",
        Index: 3
      },
      {
        PropertyString: "+100 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "10-20",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(1-2) to (14-16)"
        },
        {
          Type: 2,
          DamageString: "(10-12) to (19-23)"
        }
      ],
      EquipmentType: 1,
      Name: "Balanced Knife",
      RequiredStrength: 0,
      RequiredDexterity: 51,
      Durability: 250,
      ItemLevel: 13,
      Type: {
        Name: "Throwing Knife",
        Index: "Throwing Knife",
        Class: ""
      },
      RequiredClass: "Knife"
    }
  },
  {
    Type: "Armor",
    Name: "The Shadowed One",
    Index: "The Shadowed One",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 19,
    Code: "rng",
    Properties: [
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 3
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 4
      },
      {
        PropertyString: "+115-130 Defense",
        Index: 0
      },
      {
        PropertyString: "+25-35 to Mana",
        Index: 5
      },
      {
        PropertyString: "-3 to Light Radius",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "160-175",
      EquipmentType: 0,
      Name: "Ring Mail",
      RequiredStrength: 36,
      RequiredDexterity: 0,
      Durability: 26,
      ItemLevel: 11,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Circlet",
    Name: "Gainsayer",
    Index: "Gainsayer",
    Enabled: true,
    ItemLevel: 19,
    RequiredLevel: 19,
    Code: "ci1",
    Properties: [
      {
        PropertyString: "+1-3 to Warcries (Barbarian only)",
        Index: 6
      },
      {
        PropertyString: "+1-3 to Curses (Necromancer only)",
        Index: 7
      },
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 5
      },
      {
        PropertyString: "+140-175 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "15-20 to Strength",
        Index: 3
      },
      {
        PropertyString: "All Resistances +20-30",
        Index: 4
      },
      {
        PropertyString: "4-7 to Experience Gained",
        Index: 1
      },
      {
        PropertyString: "+5-10 Reduces all Vendor Prices",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "74-85",
      EquipmentType: 0,
      Name: "Coronet",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 30,
      ItemLevel: 52,
      Type: {
        Name: "Circlet",
        Index: "Circlet",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Crest of the Horned Society",
    Index: "Crest of the Horned Society",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 19,
    Code: "lrg",
    Properties: [
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "20-30% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "+4 Mana stolen per hit",
        Index: 5
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 4
      },
      {
        PropertyString: "+80-120 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+8-12 Attacker Takes Damage of",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "2 to 4",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "23-28",
      EquipmentType: 0,
      Name: "Large Shield",
      RequiredStrength: 34,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 11,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Boots",
    Name: "Bonemesh",
    Index: "Bonemesh",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 19,
    Code: "mbt",
    Properties: [
      {
        PropertyString: "+1-2 to Summoning Skills (Necromancer only)",
        Index: 1
      },
      {
        PropertyString: "+75% Damage to Undead Damage to Undead",
        Index: 4
      },
      {
        PropertyString: "+5 to Skeleton Mastery",
        Index: 2
      },
      {
        PropertyString: "+1 to Raise Skeleton",
        Index: 3
      },
      {
        PropertyString: "+100-125 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+3 Replenish Life",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "6 to 12",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "18-20",
      EquipmentType: 0,
      Name: "Chain Boots",
      RequiredStrength: 30,
      RequiredDexterity: 0,
      Durability: 16,
      ItemLevel: 12,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "Thoqqua's Slipper",
    Index: "Thoqqua's Slipper",
    Enabled: true,
    ItemLevel: 19,
    RequiredLevel: 19,
    Code: "uvb",
    Properties: [
      {
        PropertyString: "+50 Faster Run/Walk",
        Index: 4
      },
      {
        PropertyString: "+75-120 Defense",
        Index: 0
      },
      {
        PropertyString: "35-50 to Life",
        Index: 3
      },
      {
        PropertyString: "All Resistances +10-15",
        Index: 2
      },
      {
        PropertyString: "+40-80 better chance of getting magic item",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "60 to 110",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "131-176",
      EquipmentType: 0,
      Name: "Scarabshell Boots",
      RequiredStrength: 91,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 66,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Amazon Spear",
    Name: "Sepia Shard",
    Index: "Sepia Shard",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 19,
    Code: "am4",
    Properties: [
      {
        PropertyString: "+2 to Javelin and Spear Skills (Amazon only)",
        Index: 3
      },
      {
        PropertyString: "+100-125% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "100-200 to Attack Rating",
        Index: 5
      },
      {
        PropertyString: "Adds 10-15 to Cold Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 6-9 Mana stolen per hit",
        Index: 6
      },
      {
        PropertyString: "+35-50 to Mana",
        Index: 4
      },
      {
        PropertyString: "Cold Resist +20-40%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(46-51) to (110-123)"
        }
      ],
      EquipmentType: 1,
      Name: "Maiden Pike",
      RequiredStrength: 63,
      RequiredDexterity: 52,
      Durability: 250,
      ItemLevel: 27,
      Type: {
        Name: "Amazon Spear",
        Index: "Amazon Spear",
        Class: "ama"
      },
      RequiredClass: "Amazon"
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "Death Mauler",
    Index: "Death Mauler",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 19,
    Code: "ne3",
    Properties: [
      {
        PropertyString: "+1-3 to Poison and Bone Skills (Necromancer only)",
        Index: 1
      },
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 6
      },
      {
        PropertyString: "+20 Faster Block Rate",
        Index: 5
      },
      {
        PropertyString: "Adds 5-10 to Damage",
        Index: 4
      },
      {
        PropertyString: "200 to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "+75-100 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "Level 10 Bash (100 Charges)",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "12-14",
      EquipmentType: 0,
      Name: "             ",
      RequiredStrength: 18,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 16,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Pelt",
    Name: "Eye of Heaven",
    Index: "Eye of Heaven",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 19,
    Code: "dr4",
    Properties: [
      {
        PropertyString: "+25 Faster Cast Rate",
        Index: 5
      },
      {
        PropertyString: "+65-100 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "15 to Vitality",
        Index: 3
      },
      {
        PropertyString: "15 to Energy",
        Index: 2
      },
      {
        PropertyString: "+1 Half Freeze Duration",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "21-26",
      EquipmentType: 0,
      Name: "            ",
      RequiredStrength: 28,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 20,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Razorspine",
    Index: "Razorspine",
    Enabled: true,
    ItemLevel: 19,
    RequiredLevel: 19,
    Code: "wrb",
    Properties: [
      {
        PropertyString: "+1-3 to Shadow Disciplines (Assassin only)",
        Index: 2
      },
      {
        PropertyString: "+12-23 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+32-42 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 4
      },
      {
        PropertyString: "Poison Resist +15-20%",
        Index: 5
      },
      {
        PropertyString: "+15 Attacker Takes Damage of",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(17-28) to (41-51)"
        }
      ],
      EquipmentType: 1,
      Name: "Wrist Blade",
      RequiredStrength: 33,
      RequiredDexterity: 33,
      Durability: 250,
      ItemLevel: 9,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Winterquick",
    Index: "Winterquick",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 19,
    Code: "clw",
    Properties: [
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+65-100% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+10-15 to Maximum Damage",
        Index: 6
      },
      {
        PropertyString: "Adds 15-25 to Cold Damage",
        Index: 1
      },
      {
        PropertyString: "15 to Enemy Cold Resistance",
        Index: 4
      },
      {
        PropertyString: "+2 to Claw Mastery (Assassin Only)",
        Index: 3
      },
      {
        PropertyString: "+5 to Frost Nova",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(13-16) to (34-45)"
        }
      ],
      EquipmentType: 1,
      Name: "Claws",
      RequiredStrength: 46,
      RequiredDexterity: 46,
      Durability: 250,
      ItemLevel: 18,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Wand",
    Name: "Gravenspine",
    Index: "Gravenspine",
    Enabled: true,
    ItemLevel: 27,
    RequiredLevel: 20,
    Code: "bwn",
    Properties: [
      {
        PropertyString: "+2",
        Index: 6
      },
      {
        PropertyString: "Adds 4-8 Cold damage",
        Index: 2
      },
      {
        PropertyString: "+5 Mana stolen per hit",
        Index: 5
      },
      {
        PropertyString: "10 to Strength",
        Index: 0
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 1
      },
      {
        PropertyString: "+25-50 to Mana",
        Index: 7
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "3 to 7"
        }
      ],
      EquipmentType: 1,
      Name: "Bone Wand",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 18,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Rogue's Bow",
    Index: "Piercerib",
    Enabled: true,
    ItemLevel: 27,
    RequiredLevel: 20,
    Code: "cbw",
    Properties: [
      {
        PropertyString: "+50 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+40-60% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "60 to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "+100% Damage to Undead Damage to Undead",
        Index: 3
      },
      {
        PropertyString: "+30 Deadly Strike",
        Index: 1
      },
      {
        PropertyString: "All Resistances +10",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(5-6) to (11-12)"
        }
      ],
      EquipmentType: 1,
      Name: "Composite Bow",
      RequiredStrength: 25,
      RequiredDexterity: 35,
      Durability: 0,
      ItemLevel: 12,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "The Face of Horror",
    Index: "The Face of Horror",
    Enabled: true,
    ItemLevel: 27,
    RequiredLevel: 20,
    Code: "msk",
    Properties: [
      {
        PropertyString: "+50% Damage to Undead Damage to Undead",
        Index: 3
      },
      {
        PropertyString: "50%",
        Index: 0
      },
      {
        PropertyString: "+25 Defense",
        Index: 4
      },
      {
        PropertyString: "20 to Strength",
        Index: 1
      },
      {
        PropertyString: "All Resistances +10",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "34",
      EquipmentType: 0,
      Name: "Mask",
      RequiredStrength: 23,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 19,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Armor",
    Name: "Venom Ward",
    Index: "Venomsward",
    Enabled: true,
    ItemLevel: 27,
    RequiredLevel: 20,
    Code: "brs",
    Properties: [
      {
        PropertyString: "+60-100 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "+15 to Maximum Poison Resist",
        Index: 0
      },
      {
        PropertyString: "Poison Resist +90%",
        Index: 2
      },
      {
        PropertyString: "+50 Poison Length Reduced by",
        Index: 1
      },
      {
        PropertyString: "2 to Light Radius",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "105-132",
      EquipmentType: 0,
      Name: "Breast Plate",
      RequiredStrength: 30,
      RequiredDexterity: 0,
      Durability: 50,
      ItemLevel: 18,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Wall of the Eyeless",
    Index: "Wall of the Eyeless",
    Enabled: true,
    ItemLevel: 27,
    RequiredLevel: 20,
    Code: "bsh",
    Properties: [
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 2
      },
      {
        PropertyString: "+3 Mana stolen per hit",
        Index: 1
      },
      {
        PropertyString: "+30-40 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "+10 Defense",
        Index: 5
      },
      {
        PropertyString: "Poison Resist +20%",
        Index: 3
      },
      {
        PropertyString: "+5 to Mana after each Kill",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "3 to 6",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "24-25",
      EquipmentType: 0,
      Name: "Bone Shield",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 19,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Belt",
    Name: "Nightsmoke",
    Index: "Nightsmoke",
    Enabled: true,
    ItemLevel: 27,
    RequiredLevel: 20,
    Code: "mbl",
    Properties: [
      {
        PropertyString: "+30-50 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "+15 Defense",
        Index: 4
      },
      {
        PropertyString: "+20 to Mana",
        Index: 2
      },
      {
        PropertyString: "All Resistances +10",
        Index: 0
      },
      {
        PropertyString: "+2 Damage Reduced by",
        Index: 3
      },
      {
        PropertyString: "50% Damage Taken Goes To Mana",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "22-24",
      EquipmentType: 0,
      Name: "Belt",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 16,
      ItemLevel: 12,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Sword",
    Name: "Cloaker Beast",
    Index: "Cloaker Beast",
    Enabled: true,
    ItemLevel: 20,
    RequiredLevel: 20,
    Code: "2hs",
    Properties: [
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 4
      },
      {
        PropertyString: "Adds 35-70 to Damage",
        Index: 0
      },
      {
        PropertyString: "+2-4 to Cloak of Shadows",
        Index: 2
      },
      {
        PropertyString: "Hit blinds target +1",
        Index: 3
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "37 to 79"
        },
        {
          Type: 1,
          DamageString: "43 to 87"
        }
      ],
      EquipmentType: 1,
      Name: "Two-Handed Sword",
      RequiredStrength: 35,
      RequiredDexterity: 27,
      Durability: 250,
      ItemLevel: 10,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Coaldark",
    Index: "Coaldark",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 20,
    Code: "clm",
    Properties: [
      {
        PropertyString: "+1-3 to Combat Skills (Barbarian only)",
        Index: 2
      },
      {
        PropertyString: "+110-160% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Hit blinds target +3",
        Index: 1
      },
      {
        PropertyString: "Socketed (3)",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(10-13) to (25-31)"
        },
        {
          Type: 1,
          DamageString: "(27-33) to (63-78)"
        }
      ],
      EquipmentType: 1,
      Name: "Claymore",
      RequiredStrength: 47,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 17,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Mace",
    Name: "Endless Sleep",
    Index: "Endless Sleep",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 20,
    Code: "mst",
    Properties: [
      {
        PropertyString: "8% Chance to cast level 2 weaken on striking",
        Index: 3
      },
      {
        PropertyString: "+125-175% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "10-15% Increased Chance of Blocking",
        Index: 5
      },
      {
        PropertyString: "Hit blinds target +2",
        Index: 2
      },
      {
        PropertyString: "+3 Knockback",
        Index: 1
      },
      {
        PropertyString: "All Resistances +15-25",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(15-19) to (36-44)"
        }
      ],
      EquipmentType: 1,
      Name: "Morning Star",
      RequiredStrength: 36,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 13,
      Type: {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Knife",
    Name: "Vampire's Fang",
    Index: "Vampire's Fang",
    Enabled: true,
    ItemLevel: 19,
    RequiredLevel: 20,
    Code: "dgr",
    Properties: [
      {
        PropertyString: "Adds 20-40 to Damage",
        Index: 0
      },
      {
        PropertyString: "+6 Life stolen per hit",
        Index: 1
      },
      {
        PropertyString: "+6 Replenish Life",
        Index: 2
      },
      {
        PropertyString: "Regenerate Mana 50%",
        Index: 3
      },
      {
        PropertyString: "Cold Resist +45%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "21 to 44"
        }
      ],
      EquipmentType: 1,
      Name: "Dagger",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 3,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Hylocan Axe",
    Index: "Hylocan Axe",
    Enabled: true,
    ItemLevel: 19,
    RequiredLevel: 20,
    Code: "bar",
    Properties: [
      {
        PropertyString: "+35 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+50-70% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "+20-30 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+50-70 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 25-50 to Cold Damage",
        Index: 5
      },
      {
        PropertyString: "Adds 4-6 Mana stolen per hit",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(21-31) to (90-115)"
        }
      ],
      EquipmentType: 1,
      Name: "Bardiche",
      RequiredStrength: 40,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 5,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Throwing Axe",
    Name: "Spectral Slayer",
    Index: "Spectral Slayer",
    Enabled: true,
    ItemLevel: 20,
    RequiredLevel: 20,
    Code: "tax",
    Properties: [
      {
        PropertyString: "+1",
        Index: 4
      },
      {
        PropertyString: "+80% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 20-40 to Damage",
        Index: 1
      },
      {
        PropertyString: "+50 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 3
      },
      {
        PropertyString: "Ethereal (Cannot Be Repaired)",
        Index: 6
      },
      {
        PropertyString: "Fade",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "27 to 52"
        },
        {
          Type: 2,
          DamageString: "34 to 61"
        }
      ],
      EquipmentType: 1,
      Name: "Throwing Axe",
      RequiredStrength: 0,
      RequiredDexterity: 40,
      Durability: 250,
      ItemLevel: 7,
      Type: {
        Name: "Throwing Axe",
        Index: "Throwing Axe",
        Class: ""
      },
      RequiredClass: "Axe"
    }
  },
  {
    Type: "Throwing Knife",
    Name: "Fallen Glory",
    Index: "Fallen Glory",
    Enabled: true,
    ItemLevel: 20,
    RequiredLevel: 20,
    Code: "7tk",
    Properties: [
      {
        PropertyString: "2 to All Skills",
        Index: 3
      },
      {
        PropertyString: "+1-3 to Masteries (Barbarian only)",
        Index: 4
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+260-325% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+2 to Meteor",
        Index: 6
      },
      {
        PropertyString: "+2 to Fire Mastery",
        Index: 7
      },
      {
        PropertyString: "+65 Increased Stack Size",
        Index: 1
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(82-97) to (194-229)"
        },
        {
          Type: 2,
          DamageString: "(82-97) to (194-229)"
        }
      ],
      EquipmentType: 1,
      Name: "Flying Knife",
      RequiredStrength: 48,
      RequiredDexterity: 141,
      Durability: 250,
      ItemLevel: 64,
      Type: {
        Name: "Throwing Knife",
        Index: "Throwing Knife",
        Class: ""
      },
      RequiredClass: "Knife"
    }
  },
  {
    Type: "Merc Equip",
    Name: "Barbazu's Smile",
    Index: "Barbazu's Smile",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 20,
    Code: "hlm",
    Properties: [
      {
        PropertyString: "+1 to Fire Skills (Sorceress only)",
        Index: 1
      },
      {
        PropertyString: "+15 Faster Cast Rate",
        Index: 5
      },
      {
        PropertyString: "+25-40 Defense",
        Index: 0
      },
      {
        PropertyString: "+15 Increase Maximum Mana",
        Index: 2
      },
      {
        PropertyString: "Regenerate Mana 40%",
        Index: 3
      },
      {
        PropertyString: "+3-5 to Mana after each Kill",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "40-55",
      EquipmentType: 0,
      Name: "Helm",
      RequiredStrength: 26,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 11,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Merc Equip",
    Name: "Equinox Visor",
    Index: "Equinox Visor",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 20,
    Code: "fhl",
    Properties: [
      {
        PropertyString: "+1-3 to Shape Shifting (Druid Only)",
        Index: 3
      },
      {
        PropertyString: "+3 to Summon Spirit Wolf",
        Index: 4
      },
      {
        PropertyString: "+20-33 Defense",
        Index: 0
      },
      {
        PropertyString: "35 to Life",
        Index: 1
      },
      {
        PropertyString: "Lightning Resist +20-25%",
        Index: 2
      },
      {
        PropertyString: "+3-5 to Mana after each Kill",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "43-56",
      EquipmentType: 0,
      Name: "Full Helm",
      RequiredStrength: 41,
      RequiredDexterity: 0,
      Durability: 30,
      ItemLevel: 15,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Gloves",
    Name: "Horseman's Gloves",
    Index: "Horseman's Gloves",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 20,
    Code: "mgl",
    Properties: [
      {
        PropertyString: "+1-3 to Offensive Auras (Paladin only)",
        Index: 3
      },
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+40-50 Defense",
        Index: 0
      },
      {
        PropertyString: "30 to Life",
        Index: 5
      },
      {
        PropertyString: "Poison Resist +15-25%",
        Index: 4
      },
      {
        PropertyString: "+7-10 Damage Reduced by 7-10%%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "48-58",
      EquipmentType: 0,
      Name: "Chain Gloves",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 16,
      ItemLevel: 12,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Amazon Javelin",
    Name: "Raptorshaft",
    Index: "Raptorshaft",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 20,
    Code: "am5",
    Properties: [
      {
        PropertyString: "+1 to Javelin and Spear Skills (Amazon only)",
        Index: 2
      },
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+75-115% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 6
      },
      {
        PropertyString: "15 to Experience Gained",
        Index: 7
      },
      {
        PropertyString: "+50 Increased Stack Size",
        Index: 4
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 5
      },
      {
        PropertyString: "10-20",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(14-17) to (24-30)"
        },
        {
          Type: 2,
          DamageString: "(10-12) to (38-47)"
        }
      ],
      EquipmentType: 1,
      Name: "Maiden Javelin",
      RequiredStrength: 33,
      RequiredDexterity: 47,
      Durability: 250,
      ItemLevel: 23,
      Type: {
        Name: "Amazon Javelin",
        Index: "Amazon Javelin",
        Class: "ama"
      },
      RequiredClass: "Amazon"
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "Sinister Smile",
    Index: "Sinister Smile",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 20,
    Code: "ne4",
    Properties: [
      {
        PropertyString: "+1",
        Index: 3
      },
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 1
      },
      {
        PropertyString: "+25 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "+55-75 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "50 to Life",
        Index: 6
      },
      {
        PropertyString: "Lightning Resist +25-40%",
        Index: 4
      },
      {
        PropertyString: "Fire Resist +35-50%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "17-19",
      EquipmentType: 0,
      Name: "          ",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 20,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Auric Shields",
    Name: "Bastion of Hope",
    Index: "Bastion of Hope",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 20,
    Code: "pa4",
    Properties: [
      {
        PropertyString: "+1",
        Index: 6
      },
      {
        PropertyString: "+20 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "25-35% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "+90-130 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "20 to Strength",
        Index: 3
      },
      {
        PropertyString: "15 to Vitality",
        Index: 4
      },
      {
        PropertyString: "All Resistances +15-25",
        Index: 7
      },
      {
        PropertyString: "3-5 to Experience Gained",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "4 to 10",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "51-62",
      EquipmentType: 0,
      Name: "Aerin Shield",
      RequiredStrength: 50,
      RequiredDexterity: 0,
      Durability: 50,
      ItemLevel: 20,
      Type: {
        Name: "Auric Shields",
        Index: "Auric Shields",
        Class: "pal"
      },
      RequiredClass: "Paladin"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Androsphinx",
    Index: "Androsphinx",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 20,
    Code: "ces",
    Properties: [
      {
        PropertyString: "+1",
        Index: 6
      },
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 2
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+115-165% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+6 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+15 Chance of Crushing Blow",
        Index: 5
      },
      {
        PropertyString: "+200 Defense vs. Melee",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(15-18) to (32-39)"
        }
      ],
      EquipmentType: 1,
      Name: "Cestus",
      RequiredStrength: 42,
      RequiredDexterity: 42,
      Durability: 250,
      ItemLevel: 15,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Ring",
    Name: "Knell of Discord",
    Index: "Knell of Discord",
    Enabled: true,
    ItemLevel: 20,
    RequiredLevel: 20,
    Code: "rin",
    Properties: [
      {
        PropertyString: "Adds 5-7 Life stolen per hit",
        Index: 0
      },
      {
        PropertyString: "+15 Slows target by",
        Index: 1
      },
      {
        PropertyString: "+3 Knockback",
        Index: 2
      },
      {
        PropertyString: "10 to Energy",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Ring",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Ring",
        Index: "Ring",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Axe",
    Name: "Skull Splitter",
    Index: "Mindrend",
    Enabled: true,
    ItemLevel: 28,
    RequiredLevel: 21,
    Code: "mpi",
    Properties: [
      {
        PropertyString: "+60-100% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "50-100 to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "Adds 1-15 Lightning damage",
        Index: 2
      },
      {
        PropertyString: "15% Chance of Open Wounds",
        Index: 6
      },
      {
        PropertyString: "Hit blinds target +2",
        Index: 0
      },
      {
        PropertyString: "Regenerate Mana 20%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(11-14) to (17-22)"
        }
      ],
      EquipmentType: 1,
      Name: "Military Pick",
      RequiredStrength: 49,
      RequiredDexterity: 33,
      Durability: 250,
      ItemLevel: 19,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Mace",
    Name: "The General's Tan Do Li Ga",
    Index: "The Generals Tan Do Li Ga",
    Enabled: true,
    ItemLevel: 28,
    RequiredLevel: 21,
    Code: "fla",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 6
      },
      {
        PropertyString: "+50-60% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+1 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+20 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+5 Mana stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+50 Slows target by",
        Index: 2
      },
      {
        PropertyString: "+25 Defense",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "2 to 56"
        }
      ],
      EquipmentType: 1,
      Name: "Flail",
      RequiredStrength: 41,
      RequiredDexterity: 35,
      Durability: 250,
      ItemLevel: 19,
      Type: {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "The Salamander",
    Index: "The Salamander",
    Enabled: true,
    ItemLevel: 28,
    RequiredLevel: 21,
    Code: "bst",
    Properties: [
      {
        PropertyString: "+2 to Fire Skills",
        Index: 5
      },
      {
        PropertyString: "Adds 15-32 to Fire Damage",
        Index: 0
      },
      {
        PropertyString: "+1 to Fire Wall (Sorceress Only)",
        Index: 2
      },
      {
        PropertyString: "+2 to Fire Ball (Sorceress Only)",
        Index: 3
      },
      {
        PropertyString: "+3 to Warmth (Sorceress Only)",
        Index: 4
      },
      {
        PropertyString: "Fire Resist +30%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "6 to 13"
        }
      ],
      EquipmentType: 1,
      Name: "Battle Staff",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 17,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Wormskull",
    Index: "Wormskull",
    Enabled: true,
    ItemLevel: 28,
    RequiredLevel: 21,
    Code: "bhm",
    Properties: [
      {
        PropertyString: "+1",
        Index: 0
      },
      {
        PropertyString: "+102 to Minimum Poison Damage",
        Index: 4
      },
      {
        PropertyString: "+5 Life stolen per hit",
        Index: 1
      },
      {
        PropertyString: "+10 to Mana",
        Index: 2
      },
      {
        PropertyString: "Poison Resist +25%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "33",
      EquipmentType: 0,
      Name: "Bone Helm",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 22,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Axe",
    Name: "Light Phasm",
    Index: "Light Phasm",
    Enabled: true,
    ItemLevel: 20,
    RequiredLevel: 21,
    Code: "lax",
    Properties: [
      {
        PropertyString: "+70-100% Enhanced Damage",
        Index: 6
      },
      {
        PropertyString: "+10-20 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+35-45 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+150% Damage to Undead Damage to Undead",
        Index: 5
      },
      {
        PropertyString: "Adds 1-75 to Lightning Damage",
        Index: 3
      },
      {
        PropertyString: "Lightning Resist +35-40%",
        Index: 4
      },
      {
        PropertyString: "3 to Light Radius",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(20-32) to (57-71)"
        }
      ],
      EquipmentType: 1,
      Name: "Large Axe",
      RequiredStrength: 35,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 6,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Warpwind",
    Index: "Warpwind",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 21,
    Code: "cbw",
    Properties: [
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+125-175% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 3-15 to Damage",
        Index: 1
      },
      {
        PropertyString: "+6 to Multiple Shot (Amazon Only)",
        Index: 4
      },
      {
        PropertyString: "+1 Knockback",
        Index: 3
      },
      {
        PropertyString: "+35 to Mana",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(12-14) to (33-37)"
        }
      ],
      EquipmentType: 1,
      Name: "Composite Bow",
      RequiredStrength: 25,
      RequiredDexterity: 35,
      Durability: 0,
      ItemLevel: 12,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Hippogriff Wing",
    Index: "Hippogriff Wing",
    Enabled: true,
    ItemLevel: 20,
    RequiredLevel: 21,
    Code: "jav",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 3
      },
      {
        PropertyString: "+15 Faster Run/Walk",
        Index: 4
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+65-90% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 20-40 to Damage",
        Index: 0
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "21 to 48"
        },
        {
          Type: 2,
          DamageString: "(29-31) to (63-66)"
        }
      ],
      EquipmentType: 1,
      Name: "Javelin",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 1,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Javelin",
    Name: "Teeth of Infinity",
    Index: "Teeth of Infinity",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 21,
    Code: "ssp",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+135-185% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+7 Life stolen per hit",
        Index: 6
      },
      {
        PropertyString: "+5 to Teeth",
        Index: 3
      },
      {
        PropertyString: "+75 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      },
      {
        PropertyString: "Level 30 Teeth (250 Charges)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(4-5) to (30-37)"
        },
        {
          Type: 2,
          DamageString: "(23-28) to (51-62)"
        }
      ],
      EquipmentType: 1,
      Name: "Short Spear",
      RequiredStrength: 40,
      RequiredDexterity: 40,
      Durability: 250,
      ItemLevel: 15,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Armor",
    Name: "Red Dragon Scails",
    Index: "Red Dragon Scails",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 21,
    Code: "scl",
    Properties: [
      {
        PropertyString: "10-15 to Enemy Fire Resistance",
        Index: 4
      },
      {
        PropertyString: "10-15 to Fire Skill Damage",
        Index: 5
      },
      {
        PropertyString: "+130-150 Defense",
        Index: 0
      },
      {
        PropertyString: "Fire Resist +45-65%",
        Index: 2
      },
      {
        PropertyString: "+10-15 Fire Absorb",
        Index: 3
      },
      {
        PropertyString: "+10-15 Damage Reduced by 10-15%%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "187-207",
      EquipmentType: 0,
      Name: "Scale Mail",
      RequiredStrength: 44,
      RequiredDexterity: 0,
      Durability: 36,
      ItemLevel: 13,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Shattering Blow",
    Index: "Shattering Blow",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 21,
    Code: "brs",
    Properties: [
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "Adds 5-10 to Damage",
        Index: 3
      },
      {
        PropertyString: "+ Chance of Crushing Blow",
        Index: 1
      },
      {
        PropertyString: "+ Deadly Strike",
        Index: 2
      },
      {
        PropertyString: "+120-150 Enhanced Defense",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "145-165",
      EquipmentType: 0,
      Name: "Breast Plate",
      RequiredStrength: 30,
      RequiredDexterity: 0,
      Durability: 50,
      ItemLevel: 18,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Killhunger",
    Index: "Killhunger",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 21,
    Code: "kit",
    Properties: [
      {
        PropertyString: "+1",
        Index: 5
      },
      {
        PropertyString: "+30 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "25-30% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "Adds 3-5 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+1-3 to Skeleton Mastery (Necromancer Only)",
        Index: 6
      },
      {
        PropertyString: "+1-3 to Raise Skeletal Mage (Necromancer Only)",
        Index: 7
      },
      {
        PropertyString: "+115-140 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+6 Life after each Kill",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "2 to 5",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "36-40",
      EquipmentType: 0,
      Name: "Kite Shield",
      RequiredStrength: 47,
      RequiredDexterity: 0,
      Durability: 30,
      ItemLevel: 15,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Belt",
    Name: "Wreath of Suffering",
    Index: "Wreath of Suffering",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 21,
    Code: "mbl",
    Properties: [
      {
        PropertyString: "+5-15 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 2-5 Mana stolen per hit",
        Index: 2
      },
      {
        PropertyString: "+5-10 Chance of Crushing Blow",
        Index: 3
      },
      {
        PropertyString: "+100-125 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "10 to Strength",
        Index: 5
      },
      {
        PropertyString: "10 to Vitality",
        Index: 6
      },
      {
        PropertyString: "-2 Drain Life",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "12-13",
      EquipmentType: 0,
      Name: "Belt",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 16,
      ItemLevel: 12,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Pelt",
    Name: "Yamanda's Token",
    Index: "Yamanda's Token",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 21,
    Code: "dr3",
    Properties: [
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "15-25% Increased Chance of Blocking",
        Index: 2
      },
      {
        PropertyString: "10 to Fire Skill Damage",
        Index: 3
      },
      {
        PropertyString: "+1-3 to Oak Sage (Druid Only)",
        Index: 4
      },
      {
        PropertyString: "+110-130 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "5-10% Damage Taken Goes To Mana",
        Index: 6
      },
      {
        PropertyString: "Repairs 0.15 durability per second",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "39-43",
      EquipmentType: 0,
      Name: "        ",
      RequiredStrength: 24,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 16,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Small Charm",
    Name: "Tier 4 Splash Charm",
    Index: "t4 Splash Charm",
    Enabled: false,
    ItemLevel: 1,
    RequiredLevel: 21,
    Code: "cm4",
    Properties: [
      {
        PropertyString: "42 Percent Melee Splash Damage",
        Index: 0
      },
      {
        PropertyString: "-30 Enhanced Minimum Damage",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Splash Charm",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Small Charm",
        Index: "Small Charm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Hellplague",
    Index: "Hellplague",
    Enabled: true,
    ItemLevel: 30,
    RequiredLevel: 22,
    Code: "lsd",
    Properties: [
      {
        PropertyString: "+2 to Fire Skills",
        Index: 7
      },
      {
        PropertyString: "+70-80% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "Adds 25-75 to Fire Damage",
        Index: 6
      },
      {
        PropertyString: "Adds 48-96 Poison damage",
        Index: 2
      },
      {
        PropertyString: "+5 Mana stolen per hit",
        Index: 0
      },
      {
        PropertyString: "+5 Life stolen per hit",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "5 to 32"
        }
      ],
      EquipmentType: 1,
      Name: "Long Sword",
      RequiredStrength: 55,
      RequiredDexterity: 39,
      Durability: 250,
      ItemLevel: 20,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Lance of Yaggai",
    Index: "Lance of Yaggai",
    Enabled: true,
    ItemLevel: 30,
    RequiredLevel: 22,
    Code: "spt",
    Properties: [
      {
        PropertyString: "+40 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "Adds 1-60 Lightning damage",
        Index: 1
      },
      {
        PropertyString: "All Resistances +15",
        Index: 3
      },
      {
        PropertyString: "+8 Attacker Takes Damage of",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "15 to 23"
        }
      ],
      EquipmentType: 1,
      Name: "Spetum",
      RequiredStrength: 54,
      RequiredDexterity: 35,
      Durability: 250,
      ItemLevel: 20,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Iceblink",
    Index: "Iceblink",
    Enabled: true,
    ItemLevel: 30,
    RequiredLevel: 22,
    Code: "spl",
    Properties: [
      {
        PropertyString: "Freezes target +1",
        Index: 0
      },
      {
        PropertyString: "+70-80 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "Cold Resist +30%",
        Index: 1
      },
      {
        PropertyString: "+1 Magic Damage Reduced by",
        Index: 3
      },
      {
        PropertyString: "4 to Light Radius",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "154-163",
      EquipmentType: 0,
      Name: "Splint Mail",
      RequiredStrength: 51,
      RequiredDexterity: 0,
      Durability: 30,
      ItemLevel: 20,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Boots",
    Name: "Goblin Toe",
    Index: "Goblin Toe",
    Enabled: true,
    ItemLevel: 30,
    RequiredLevel: 22,
    Code: "tbt",
    Properties: [
      {
        PropertyString: "+25 Chance of Crushing Blow",
        Index: 0
      },
      {
        PropertyString: "+50-60 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "+15 Defense",
        Index: 3
      },
      {
        PropertyString: "+1 Damage Reduced by",
        Index: 1
      },
      {
        PropertyString: "+1 Magic Damage Reduced by",
        Index: 2
      },
      {
        PropertyString: "-1 to Light Radius",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "8 to 16",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "30-31",
      EquipmentType: 0,
      Name: "Light Plated Boots",
      RequiredStrength: 50,
      RequiredDexterity: 0,
      Durability: 18,
      ItemLevel: 20,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Axe",
    Name: "Easebringer",
    Index: "Easebringer",
    Enabled: true,
    ItemLevel: 22,
    RequiredLevel: 22,
    Code: "axe",
    Properties: [
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+15-20 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+40-50 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+6 Life stolen per hit",
        Index: 4
      },
      {
        PropertyString: "Requirements -40%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(19-24) to (51-61)"
        }
      ],
      EquipmentType: 1,
      Name: "Axe",
      RequiredStrength: 32,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 7,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "The Vanquisher",
    Index: "Vanquisher",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 22,
    Code: "bsd",
    Properties: [
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+135-185% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 5-7 Life stolen per hit",
        Index: 2
      },
      {
        PropertyString: "+25 Chance of Crushing Blow",
        Index: 1
      },
      {
        PropertyString: "+1-3 to Sacrifice",
        Index: 5
      },
      {
        PropertyString: "35-50 to Life",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(16-19) to (32-39)"
        }
      ],
      EquipmentType: 1,
      Name: "Broad Sword",
      RequiredStrength: 48,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 15,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Scepter",
    Name: "Angel's Grace",
    Index: "Angel's Grace",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 22,
    Code: "gsc",
    Properties: [
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+130-180% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+15 Faster Hit Recovery",
        Index: 5
      },
      {
        PropertyString: "+200% Damage to Demons Damage to Demons",
        Index: 3
      },
      {
        PropertyString: "+150% Damage to Undead Damage to Undead",
        Index: 2
      },
      {
        PropertyString: "+10-15 Damage Reduced by 10-15%%",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(18-22) to (41-50)"
        }
      ],
      EquipmentType: 1,
      Name: "Grand Scepter",
      RequiredStrength: 37,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 15,
      Type: {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Knife",
    Name: "Zenkiller",
    Index: "Zenkiller",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 22,
    Code: "kri",
    Properties: [
      {
        PropertyString: "+175-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "15 to Poison Skill Damage",
        Index: 5
      },
      {
        PropertyString: "+1-3 to Sacrifice",
        Index: 2
      },
      {
        PropertyString: "+20 Slows target by",
        Index: 1
      },
      {
        PropertyString: "Fire Resist +20-25%",
        Index: 4
      },
      {
        PropertyString: "Socketed (2)",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(5-6) to (30-33)"
        }
      ],
      EquipmentType: 1,
      Name: "Kris",
      RequiredStrength: 0,
      RequiredDexterity: 45,
      Durability: 250,
      ItemLevel: 17,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Willowsting",
    Index: "Willowsting",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 22,
    Code: "sbb",
    Properties: [
      {
        PropertyString: "12% Chance to cast level 7 teeth when struck",
        Index: 1
      },
      {
        PropertyString: "+125-175% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "+6 Life stolen per hit",
        Index: 5
      },
      {
        PropertyString: "+50-100 extra gold from monsters",
        Index: 4
      },
      {
        PropertyString: "Requirements -25%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(11-13) to (24-30)"
        }
      ],
      EquipmentType: 1,
      Name: "Short Battle Bow",
      RequiredStrength: 30,
      RequiredDexterity: 40,
      Durability: 0,
      ItemLevel: 18,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Throwing Axe",
    Name: "Spleen Feaster",
    Index: "Spleen Feaster",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 22,
    Code: "bal",
    Properties: [
      {
        PropertyString: "Adds 10-20 to Damage",
        Index: 0
      },
      {
        PropertyString: "30 bonus to Attack Rating",
        Index: 5
      },
      {
        PropertyString: "+122 to Minimum Poison Damage",
        Index: 2
      },
      {
        PropertyString: "+20-40 Deadly Strike",
        Index: 6
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 3
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 4
      },
      {
        PropertyString: "+60 Increased Stack Size",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "15 to 30"
        },
        {
          Type: 2,
          DamageString: "22 to 35"
        }
      ],
      EquipmentType: 1,
      Name: "Balanced Axe",
      RequiredStrength: 0,
      RequiredDexterity: 57,
      Durability: 250,
      ItemLevel: 16,
      Type: {
        Name: "Throwing Axe",
        Index: "Throwing Axe",
        Class: ""
      },
      RequiredClass: "Axe"
    }
  },
  {
    Type: "Throwing Knife",
    Name: "Sheera's Knives",
    Index: "Sheera's Knives",
    Enabled: true,
    ItemLevel: 25,
    RequiredLevel: 22,
    Code: "tkf",
    Properties: [
      {
        PropertyString: "+60-80% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+20 Piercing Attack",
        Index: 5
      },
      {
        PropertyString: "Adds 20-40 to Damage",
        Index: 1
      },
      {
        PropertyString: "+100 Defense vs. Melee",
        Index: 4
      },
      {
        PropertyString: "All Resistances +15",
        Index: 7
      },
      {
        PropertyString: "+6-10 Damage Reduced by",
        Index: 6
      },
      {
        PropertyString: "+50 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "23 to 44"
        },
        {
          Type: 2,
          DamageString: "(26-27) to (54-56)"
        }
      ],
      EquipmentType: 1,
      Name: "Throwing Knife",
      RequiredStrength: 0,
      RequiredDexterity: 21,
      Durability: 250,
      ItemLevel: 2,
      Type: {
        Name: "Throwing Knife",
        Index: "Throwing Knife",
        Class: ""
      },
      RequiredClass: "Knife"
    }
  },
  {
    Type: "Throwing Knife",
    Name: "Tidrik's Initiator",
    Index: "Initiator",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 22,
    Code: "bkf",
    Properties: [
      {
        PropertyString: "Level 4 Blessed Aim Aura When Equipped",
        Index: 6
      },
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+170-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+20 Slows target by",
        Index: 5
      },
      {
        PropertyString: "15 to Strength",
        Index: 7
      },
      {
        PropertyString: "+75 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      },
      {
        PropertyString: "Requirements -15%",
        Index: 8
      },
      {
        PropertyString: "8-20",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(2-3) to (21-24)"
        },
        {
          Type: 2,
          DamageString: "(16-18) to (29-33)"
        }
      ],
      EquipmentType: 1,
      Name: "Balanced Knife",
      RequiredStrength: 0,
      RequiredDexterity: 51,
      Durability: 250,
      ItemLevel: 13,
      Type: {
        Name: "Throwing Knife",
        Index: "Throwing Knife",
        Class: ""
      },
      RequiredClass: "Knife"
    }
  },
  {
    Type: "Armor",
    Name: "Russetfire",
    Index: "Russetfire",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 22,
    Code: "spl",
    Properties: [
      {
        PropertyString: "Level 3-5 Holy Fire Aura When Equipped",
        Index: 4
      },
      {
        PropertyString: "+100-150 Defense",
        Index: 0
      },
      {
        PropertyString: "Fire Resist +40-50%",
        Index: 2
      },
      {
        PropertyString: "+20 Fire Absorb",
        Index: 3
      },
      {
        PropertyString: "+35-50 better chance of getting magic item",
        Index: 1
      },
      {
        PropertyString: "Socketed (1-2)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "190-240",
      EquipmentType: 0,
      Name: "Splint Mail",
      RequiredStrength: 51,
      RequiredDexterity: 0,
      Durability: 30,
      ItemLevel: 20,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Fanged Strike",
    Index: "Fanged Shield",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 22,
    Code: "spk",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 3
      },
      {
        PropertyString: "+20 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 4
      },
      {
        PropertyString: "30-80% Chance of Open Wounds",
        Index: 6
      },
      {
        PropertyString: "+100-125 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+25-35 to Mana",
        Index: 5
      },
      {
        PropertyString: "+ Attacker Takes Damage of",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "5 to 9",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "32-36",
      EquipmentType: 0,
      Name: "Spiked Shield",
      RequiredStrength: 30,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 11,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Orb",
    Name: "Thought Splinter",
    Index: "Thought Splinter",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 22,
    Code: "ob4",
    Properties: [
      {
        PropertyString: "+1-2 to Lightning Skills (Sorceress only)",
        Index: 1
      },
      {
        PropertyString: "+1-2 to Fire Skills (Sorceress only)",
        Index: 2
      },
      {
        PropertyString: "+1-2 to Cold Skills (Sorceress only)",
        Index: 3
      },
      {
        PropertyString: "to Energy",
        Index: 0
      },
      {
        PropertyString: "+5 Life after each Kill",
        Index: 4
      },
      {
        PropertyString: "5 to Experience Gained",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "5 to 12"
        }
      ],
      EquipmentType: 1,
      Name: "      ",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 17,
      Type: {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      },
      RequiredClass: "Sorceress"
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "Prayer for the Dying",
    Index: "Prayer for the Dying",
    Enabled: true,
    ItemLevel: 22,
    RequiredLevel: 22,
    Code: "nee",
    Properties: [
      {
        PropertyString: "+3",
        Index: 3
      },
      {
        PropertyString: "50% Increased Chance of Blocking",
        Index: 4
      },
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 1
      },
      {
        PropertyString: "+150-200 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "10 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "Socketed (2)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "252-303",
      EquipmentType: 0,
      Name: "Succubus Skull",
      RequiredStrength: 95,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 81,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Auric Shields",
    Name: "Felix's Brace",
    Index: "Felix's Brace",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 22,
    Code: "pa3",
    Properties: [
      {
        PropertyString: "+40 Faster Hit Recovery",
        Index: 6
      },
      {
        PropertyString: "+20 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "25-35% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "+75-100 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 3
      },
      {
        PropertyString: "All Resistances +15-25",
        Index: 4
      },
      {
        PropertyString: "+10-15 Damage Reduced by",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "3 to 9",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "29-34",
      EquipmentType: 0,
      Name: "Heraldic Shield",
      RequiredStrength: 40,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 16,
      Type: {
        Name: "Auric Shields",
        Index: "Auric Shields",
        Class: "pal"
      },
      RequiredClass: "Paladin"
    }
  },
  {
    Type: "Primal Helm",
    Name: "Blood Dancer",
    Index: "Blood Dancer",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 22,
    Code: "ba4",
    Properties: [
      {
        PropertyString: "+25 Faster Run/Walk",
        Index: 3
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 2
      },
      {
        PropertyString: "+25-50 Defense",
        Index: 0
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 4
      },
      {
        PropertyString: "25 to Life",
        Index: 5
      },
      {
        PropertyString: "Cold Resist +25%",
        Index: 6
      },
      {
        PropertyString: "Fire Resist +20-35%",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "55-80",
      EquipmentType: 0,
      Name: "Assault Helmet",
      RequiredStrength: 55,
      RequiredDexterity: 0,
      Durability: 50,
      ItemLevel: 20,
      Type: {
        Name: "Primal Helm",
        Index: "Primal Helm",
        Class: "bar"
      },
      RequiredClass: "Barbarian"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Bladespan",
    Index: "Bladespan",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 22,
    Code: "btl",
    Properties: [
      {
        PropertyString: "+1-2 to Shadow Disciplines (Assassin only)",
        Index: 3
      },
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+70-100% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 11-22 to Damage",
        Index: 6
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 1
      },
      {
        PropertyString: "+251-268 to Unsummon",
        Index: 5
      },
      {
        PropertyString: "+20 Slows target by",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(28-31) to (45-50)"
        }
      ],
      EquipmentType: 1,
      Name: "Blade Talons",
      RequiredStrength: 50,
      RequiredDexterity: 50,
      Durability: 250,
      ItemLevel: 21,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Scepter",
    Name: "Stormeye",
    Index: "Stormeye",
    Enabled: true,
    ItemLevel: 31,
    RequiredLevel: 23,
    Code: "wsp",
    Properties: [
      {
        PropertyString: "+80-120% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "Adds 1-6 to Lightning Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 3-5 to Cold Damage",
        Index: 1
      },
      {
        PropertyString: "+3-5 to Resist Lightning (Paladin Only)",
        Index: 4
      },
      {
        PropertyString: "+3 to Holy Shock (Paladin Only)",
        Index: 5
      },
      {
        PropertyString: "+1 to Fist of the Heavens (Paladin Only)",
        Index: 6
      },
      {
        PropertyString: "+10 Replenish Life",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(18-22) to (30-37)"
        }
      ],
      EquipmentType: 1,
      Name: "War Scepter",
      RequiredStrength: 55,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 21,
      Type: {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Kinemil's Awl",
    Index: "Kinemils Awl",
    Enabled: true,
    ItemLevel: 31,
    RequiredLevel: 23,
    Code: "gis",
    Properties: [
      {
        PropertyString: "+80-100% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "100-150 to Attack Rating",
        Index: 0
      },
      {
        PropertyString: "Adds 6-40 Fire damage",
        Index: 2
      },
      {
        PropertyString: "+6 to Holy Fire (Paladin Only)",
        Index: 5
      },
      {
        PropertyString: "+20 to Mana",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(5-6) to (28-32)"
        },
        {
          Type: 1,
          DamageString: "(16-18) to (50-56)"
        }
      ],
      EquipmentType: 1,
      Name: "Giant Sword",
      RequiredStrength: 56,
      RequiredDexterity: 34,
      Durability: 250,
      ItemLevel: 21,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Magefist",
    Index: "Magefist",
    Enabled: true,
    ItemLevel: 31,
    RequiredLevel: 23,
    Code: "tgl",
    Properties: [
      {
        PropertyString: "+1 to Fire Skills",
        Index: 2
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 0
      },
      {
        PropertyString: "Adds 1-6 to Fire Damage",
        Index: 3
      },
      {
        PropertyString: "+20-30 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "+10 Defense",
        Index: 4
      },
      {
        PropertyString: "Regenerate Mana 25%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "22-23",
      EquipmentType: 0,
      Name: "Light Gauntlets",
      RequiredStrength: 45,
      RequiredDexterity: 0,
      Durability: 18,
      ItemLevel: 20,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Axe",
    Name: "Occam's Razor",
    Index: "Occam's Razor",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 23,
    Code: "mpi",
    Properties: [
      {
        PropertyString: "Level 5-7 Prayer Aura When Equipped",
        Index: 3
      },
      {
        PropertyString: "1 to All Skills",
        Index: 2
      },
      {
        PropertyString: "+140-190% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+40 Deadly Strike",
        Index: 1
      },
      {
        PropertyString: "+3-6 to Sword Mastery",
        Index: 4
      },
      {
        PropertyString: "Fire Resist +15-25%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(16-20) to (26-31)"
        }
      ],
      EquipmentType: 1,
      Name: "Military Pick",
      RequiredStrength: 49,
      RequiredDexterity: 33,
      Durability: 250,
      ItemLevel: 19,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Night Hag",
    Index: "Night Hag",
    Enabled: true,
    ItemLevel: 24,
    RequiredLevel: 23,
    Code: "bax",
    Properties: [
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+70-100% Enhanced Damage",
        Index: 6
      },
      {
        PropertyString: "+10-20 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+40-50 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+133 to Minimum Poison Damage",
        Index: 2
      },
      {
        PropertyString: "+7 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "Hit blinds target +1",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(27-40) to (70-86)"
        }
      ],
      EquipmentType: 1,
      Name: "Broad Axe",
      RequiredStrength: 48,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 12,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Sandking",
    Index: "Sandking",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 23,
    Code: "btx",
    Properties: [
      {
        PropertyString: "+120-170% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "-10-15% Target Defense",
        Index: 4
      },
      {
        PropertyString: "120 to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "Adds 8-14 to Fire Damage",
        Index: 2
      },
      {
        PropertyString: "Hit blinds target +2",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(26-32) to (70-86)"
        }
      ],
      EquipmentType: 1,
      Name: "Battle Axe",
      RequiredStrength: 54,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 17,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Mako's Pierce",
    Index: "Mako's Pierce",
    Enabled: true,
    ItemLevel: 26,
    RequiredLevel: 23,
    Code: "tri",
    Properties: [
      {
        PropertyString: "Adds 40-80 to Damage",
        Index: 0
      },
      {
        PropertyString: "100 to Attack Rating",
        Index: 5
      },
      {
        PropertyString: "+15 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "25-50% Chance of Open Wounds",
        Index: 1
      },
      {
        PropertyString: "10 to Strength",
        Index: 6
      },
      {
        PropertyString: "+15 Life after each Demon Kill",
        Index: 2
      },
      {
        PropertyString: "+15-20 Attacker Takes Damage of",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "49 to 95"
        }
      ],
      EquipmentType: 1,
      Name: "Trident",
      RequiredStrength: 38,
      RequiredDexterity: 24,
      Durability: 310,
      ItemLevel: 9,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Simpering Edge",
    Index: "Simpering Edge",
    Enabled: true,
    ItemLevel: 27,
    RequiredLevel: 23,
    Code: "vou",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 2
      },
      {
        PropertyString: "+25-35 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+60-80 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 4-6 Life stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+35 Deadly Strike",
        Index: 3
      },
      {
        PropertyString: "+2 to Sword Mastery",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(31-41) to (81-101)"
        }
      ],
      EquipmentType: 1,
      Name: "Voulge",
      RequiredStrength: 50,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 11,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Strange Alchemy",
    Index: "Strange Alchemy",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 23,
    Code: "bst",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+100% Enhanced Damage",
        Index: 6
      },
      {
        PropertyString: "Adds 15-30 to Damage",
        Index: 4
      },
      {
        PropertyString: "+1-3 to Warmth",
        Index: 0
      },
      {
        PropertyString: "+1-3 to Frozen Armor",
        Index: 1
      },
      {
        PropertyString: "+1-3 to Bone Armor",
        Index: 2
      },
      {
        PropertyString: "+1-3 to Cyclone Armor",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "27 to 56"
        }
      ],
      EquipmentType: 1,
      Name: "Battle Staff",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 17,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Amazon's Kiss",
    Index: "Amazon's Kiss",
    Enabled: true,
    ItemLevel: 24,
    RequiredLevel: 23,
    Code: "pil",
    Properties: [
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+70-100% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 25-45 to Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 5-8 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+4-8 Replenish Life",
        Index: 5
      },
      {
        PropertyString: "Fire Resist +15-30%",
        Index: 6
      },
      {
        PropertyString: "+150 Increased Stack Size",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(31-33) to (60-63)"
        },
        {
          Type: 2,
          DamageString: "(36-39) to (79-85)"
        }
      ],
      EquipmentType: 1,
      Name: "Pilum",
      RequiredStrength: 0,
      RequiredDexterity: 45,
      Durability: 250,
      ItemLevel: 10,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Javelin",
    Name: "Summerstrike",
    Index: "Summerstrike",
    Enabled: true,
    ItemLevel: 23,
    RequiredLevel: 23,
    Code: "7pi",
    Properties: [
      {
        PropertyString: "+200-250% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 300-500 to Fire Damage",
        Index: 2
      },
      {
        PropertyString: "+40-50 Fire Absorb",
        Index: 3
      },
      {
        PropertyString: "+75 Increased Stack Size",
        Index: 5
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      },
      {
        PropertyString: "Ethereal (Cannot Be Repaired)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(42-49) to (192-224)"
        },
        {
          Type: 2,
          DamageString: "(63-73) to (225-262)"
        }
      ],
      EquipmentType: 1,
      Name: "Stygian Pilum",
      RequiredStrength: 118,
      RequiredDexterity: 112,
      Durability: 250,
      ItemLevel: 62,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Armor",
    Name: "Ghosly Chainmail",
    Index: "Ghosly Chainmail",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 23,
    Code: "chn",
    Properties: [
      {
        PropertyString: "10-15 to Enemy Cold Resistance",
        Index: 4
      },
      {
        PropertyString: "10-15 to Cold Skill Damage",
        Index: 5
      },
      {
        PropertyString: "+155-175 Defense",
        Index: 0
      },
      {
        PropertyString: "Cold Resist +30-50%",
        Index: 3
      },
      {
        PropertyString: "Ethereal (Cannot Be Repaired)",
        Index: 1
      },
      {
        PropertyString: "Repairs 0.25 durability per second",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "227-247",
      EquipmentType: 0,
      Name: "Chain Mail",
      RequiredStrength: 48,
      RequiredDexterity: 0,
      Durability: 45,
      ItemLevel: 15,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Harpy's Call",
    Index: "Harpy's Call",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 23,
    Code: "fhl",
    Properties: [
      {
        PropertyString: "7% Chance to cast level 3 terror when struck",
        Index: 5
      },
      {
        PropertyString: "Level 1 Prayer Aura When Equipped",
        Index: 4
      },
      {
        PropertyString: "+1 to Curses (Necromancer only)",
        Index: 1
      },
      {
        PropertyString: "+30-40 Defense",
        Index: 0
      },
      {
        PropertyString: "All Resistances +20",
        Index: 2
      },
      {
        PropertyString: "3 to Experience Gained",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "53-63",
      EquipmentType: 0,
      Name: "Full Helm",
      RequiredStrength: 41,
      RequiredDexterity: 0,
      Durability: 30,
      ItemLevel: 15,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Merc Equip",
    Name: "Treachery's Allure",
    Index: "Treachery's Allure",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 23,
    Code: "msk",
    Properties: [
      {
        PropertyString: "Adds 3-5 Mana stolen per hit",
        Index: 2
      },
      {
        PropertyString: "+15 Slows target by",
        Index: 1
      },
      {
        PropertyString: "+80-120 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "10 to Strength",
        Index: 4
      },
      {
        PropertyString: "+15 Reduces all Vendor Prices",
        Index: 3
      },
      {
        PropertyString: "Socketed (2)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "18-22",
      EquipmentType: 0,
      Name: "Mask",
      RequiredStrength: 23,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 19,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "Pepin's Grace",
    Index: "Pepin's Grace",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 23,
    Code: "mbt",
    Properties: [
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 1
      },
      {
        PropertyString: "+1 to Dodge",
        Index: 3
      },
      {
        PropertyString: "+30-40 Defense",
        Index: 0
      },
      {
        PropertyString: "10-15 to Dexterity",
        Index: 5
      },
      {
        PropertyString: "+2-5 Replenish Life",
        Index: 2
      },
      {
        PropertyString: "+6-9 Attacker Takes Damage of",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "6 to 12",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "38-48",
      EquipmentType: 0,
      Name: "Chain Boots",
      RequiredStrength: 30,
      RequiredDexterity: 0,
      Durability: 16,
      ItemLevel: 12,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Orb",
    Name: "Revoker",
    Index: "Revoker",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 23,
    Code: "ob3",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+25 Faster Cast Rate",
        Index: 2
      },
      {
        PropertyString: "10-15 to Lightning Skill Damage",
        Index: 3
      },
      {
        PropertyString: "35-50 to Life",
        Index: 5
      },
      {
        PropertyString: "All Resistances +20",
        Index: 4
      },
      {
        PropertyString: "+20 better chance of getting magic item",
        Index: 1
      },
      {
        PropertyString: "Level 8 Shout (60 Charges)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "4 to 10"
        }
      ],
      EquipmentType: 1,
      Name: "   ",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 12,
      Type: {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      },
      RequiredClass: "Sorceress"
    }
  },
  {
    Type: "Primal Helm",
    Name: "Kygragond",
    Index: "Kygragond",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 23,
    Code: "ba3",
    Properties: [
      {
        PropertyString: "+1-3 to Masteries (Barbarian only)",
        Index: 1
      },
      {
        PropertyString: "+10 Faster Run/Walk",
        Index: 4
      },
      {
        PropertyString: "+15 Faster Block Rate",
        Index: 3
      },
      {
        PropertyString: "15% Increased Chance of Blocking",
        Index: 2
      },
      {
        PropertyString: "+3 Mana stolen per hit",
        Index: 5
      },
      {
        PropertyString: "+90-120 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+2-4 to Mana after each Kill",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "49-57",
      EquipmentType: 0,
      Name: "Horned Helm",
      RequiredStrength: 45,
      RequiredDexterity: 0,
      Durability: 45,
      ItemLevel: 16,
      Type: {
        Name: "Primal Helm",
        Index: "Primal Helm",
        Class: "bar"
      },
      RequiredClass: "Barbarian"
    }
  },
  {
    Type: "Ring",
    Name: "Planatar Enlightenment",
    Index: "Planatar Enlightenment",
    Enabled: true,
    ItemLevel: 23,
    RequiredLevel: 23,
    Code: "rin",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "20 to Energy",
        Index: 4
      },
      {
        PropertyString: "35-50 to Life",
        Index: 2
      },
      {
        PropertyString: "All Resistances +8-15",
        Index: 1
      },
      {
        PropertyString: "3-5 to Experience Gained",
        Index: 5
      },
      {
        PropertyString: "+65 extra gold from monsters",
        Index: 3
      },
      {
        PropertyString: "+8-10 Reduces all Vendor Prices",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Ring",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Ring",
        Index: "Ring",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Hammer",
    Name: "Bonesnap",
    Index: "Bonesob",
    Enabled: true,
    ItemLevel: 32,
    RequiredLevel: 24,
    Code: "mau",
    Properties: [
      {
        PropertyString: "+200-300% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+50% Damage to Undead Damage to Undead",
        Index: 4
      },
      {
        PropertyString: "+40 Chance of Crushing Blow",
        Index: 1
      },
      {
        PropertyString: "Cold Resist +30%",
        Index: 3
      },
      {
        PropertyString: "Fire Resist +30%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(90-120) to (129-172)"
        }
      ],
      EquipmentType: 1,
      Name: "Maul",
      RequiredStrength: 69,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 21,
      Type: {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Epee of Speed",
    Index: "Epee of Speed",
    Enabled: true,
    ItemLevel: 23,
    RequiredLevel: 24,
    Code: "ssd",
    Properties: [
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 3
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "20-25% Increased Chance of Blocking",
        Index: 5
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 0
      },
      {
        PropertyString: "Level 8 Stun (100 Charges)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "27 to 57"
        }
      ],
      EquipmentType: 1,
      Name: "Short Sword",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 1,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Hellmessenger",
    Index: "Hellmessenger",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 24,
    Code: "gis",
    Properties: [
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+125-175% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+100% Damage to Demons Damage to Demons",
        Index: 1
      },
      {
        PropertyString: "Adds 10-25 to Fire Damage",
        Index: 2
      },
      {
        PropertyString: "Fire Resist +10-20%",
        Index: 3
      },
      {
        PropertyString: "+4-7 Fire Absorb",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(6-8) to (36-44)"
        },
        {
          Type: 1,
          DamageString: "(20-24) to (63-77)"
        }
      ],
      EquipmentType: 1,
      Name: "Giant Sword",
      RequiredStrength: 56,
      RequiredDexterity: 34,
      Durability: 250,
      ItemLevel: 21,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Club",
    Name: "Bramble Oak",
    Index: "Bramble Oak",
    Enabled: true,
    ItemLevel: 24,
    RequiredLevel: 24,
    Code: "clb",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 4
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "10-15% Increased Chance of Blocking",
        Index: 2
      },
      {
        PropertyString: "+10-15 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+40-50 to Maximum Damage",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(11-16) to (46-56)"
        }
      ],
      EquipmentType: 1,
      Name: "Club",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 1,
      Type: {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Scepter",
    Name: "Angelic Sympathy",
    Index: "Angelic Sympathy",
    Enabled: true,
    ItemLevel: 25,
    RequiredLevel: 24,
    Code: "scp",
    Properties: [
      {
        PropertyString: "Level 3-5 Prayer Aura When Equipped",
        Index: 3
      },
      {
        PropertyString: "+5-10 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+25-40 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+7 Replenish Life",
        Index: 2
      },
      {
        PropertyString: "All Resistances +15-25",
        Index: 5
      },
      {
        PropertyString: "+15 Damage Reduced by 15%%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(11-16) to (36-51)"
        }
      ],
      EquipmentType: 1,
      Name: "Scepter",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 3,
      Type: {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Landsplitter",
    Index: "Landsplitter",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 24,
    Code: "pax",
    Properties: [
      {
        PropertyString: "+1-2 to Shape Shifting Skills (Druid only)",
        Index: 5
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+135-185% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+2-4 to Cyclone Armor (Druid Only)",
        Index: 3
      },
      {
        PropertyString: "+2-4 to Volcano (Druid Only)",
        Index: 4
      },
      {
        PropertyString: "+5-8 Life after each Kill",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(42-51) to (91-111)"
        }
      ],
      EquipmentType: 1,
      Name: "Poleaxe",
      RequiredStrength: 62,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 21,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Invoker",
    Index: "Invoker",
    Enabled: true,
    ItemLevel: 24,
    RequiredLevel: 24,
    Code: "sst",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+50 Faster Cast Rate",
        Index: 3
      },
      {
        PropertyString: "+10-15 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+40-60 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+15 Increase Maximum Mana",
        Index: 4
      },
      {
        PropertyString: "Socketed (2)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(11-16) to (45-65)"
        }
      ],
      EquipmentType: 1,
      Name: "Short Staff",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 1,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Spikethrower ",
    Index: "Spikethrower ",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 24,
    Code: "hxb",
    Properties: [
      {
        PropertyString: "+1",
        Index: 5
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 10-20 to Damage",
        Index: 1
      },
      {
        PropertyString: "+25 Chance of Crushing Blow",
        Index: 2
      },
      {
        PropertyString: "+25 Deadly Strike",
        Index: 3
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(45-52) to (85-98)"
        }
      ],
      EquipmentType: 1,
      Name: "Heavy Crossbow",
      RequiredStrength: 60,
      RequiredDexterity: 40,
      Durability: 0,
      ItemLevel: 24,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Mind Creche",
    Index: "Mind Creche",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 24,
    Code: "glv",
    Properties: [
      {
        PropertyString: "+90-120% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+15 Faster Cast Rate",
        Index: 3
      },
      {
        PropertyString: "+25-40 Deadly Strike",
        Index: 5
      },
      {
        PropertyString: "+1-2 to Poison Javelin",
        Index: 4
      },
      {
        PropertyString: "Hit blinds target +1",
        Index: 6
      },
      {
        PropertyString: "+40 to Mana",
        Index: 1
      },
      {
        PropertyString: "Requirements -35%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(9-11) to (32-37)"
        },
        {
          Type: 2,
          DamageString: "(30-35) to (41-48)"
        }
      ],
      EquipmentType: 1,
      Name: "Glaive",
      RequiredStrength: 52,
      RequiredDexterity: 35,
      Durability: 250,
      ItemLevel: 23,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Merc Equip",
    Name: "Cursed Hindsight",
    Index: "Hindsight",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 24,
    Code: "bhm",
    Properties: [
      {
        PropertyString: "10% Chance to cast level 3 life tap when struck",
        Index: 7
      },
      {
        PropertyString: "+1",
        Index: 5
      },
      {
        PropertyString: "+15 Faster Cast Rate",
        Index: 1
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "+2 to Meditation",
        Index: 4
      },
      {
        PropertyString: "+25-35 Defense",
        Index: 0
      },
      {
        PropertyString: "Magic Resist +5-8%",
        Index: 6
      },
      {
        PropertyString: "+20-30 better chance of getting magic item",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "58-68",
      EquipmentType: 0,
      Name: "Bone Helm",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 22,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Shield",
    Name: "Cacophony",
    Index: "Cacophony",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 24,
    Code: "bsh",
    Properties: [
      {
        PropertyString: "20% Chance to cast level 2 terror when struck",
        Index: 3
      },
      {
        PropertyString: "+20 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "20-25% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "27%",
        Index: 4
      },
      {
        PropertyString: "+100-125 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "All Resistances +10-15",
        Index: 5
      },
      {
        PropertyString: "Socketed (1-2)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "3 to 6",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "22-24",
      EquipmentType: 0,
      Name: "Bone Shield",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 19,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Crest of Avalon",
    Index: "Crest of Avalon",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 24,
    Code: "kit",
    Properties: [
      {
        PropertyString: "+40 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "60-70% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "+120-140 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+50 Damage Reduced by 50%%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "2 to 5",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "37-40",
      EquipmentType: 0,
      Name: "Kite Shield",
      RequiredStrength: 47,
      RequiredDexterity: 0,
      Durability: 30,
      ItemLevel: 15,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Amazon Bow",
    Name: "Ragnarok Sliver",
    Index: "Ragnarok Sliver",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 24,
    Code: "am2",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 6
      },
      {
        PropertyString: "+1",
        Index: 5
      },
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 10-25 to Damage",
        Index: 7
      },
      {
        PropertyString: "+25 Chance of Crushing Blow",
        Index: 1
      },
      {
        PropertyString: "+ Deadly Strike",
        Index: 2
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 3
      },
      {
        PropertyString: "Requirements -50%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(28-32) to (63-72)"
        }
      ],
      EquipmentType: 1,
      Name: "Reflex Bow",
      RequiredStrength: 35,
      RequiredDexterity: 60,
      Durability: 0,
      ItemLevel: 27,
      Type: {
        Name: "Amazon Bow",
        Index: "Amazon Bow",
        Class: "ama"
      },
      RequiredClass: "Amazon"
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "Steel Weevil",
    Index: "Steel Weevil",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 24,
    Code: "ne4",
    Properties: [
      {
        PropertyString: "+1-3 to Summoning Skills (Necromancer only)",
        Index: 1
      },
      {
        PropertyString: "+30 Faster Block Rate",
        Index: 5
      },
      {
        PropertyString: "+66-89 to Throw",
        Index: 2
      },
      {
        PropertyString: "+66-89 to Unsummon",
        Index: 3
      },
      {
        PropertyString: "+80-110 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "All Resistances +20-30",
        Index: 6
      },
      {
        PropertyString: "+10-15 Damage Reduced by 10-15%%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "19-23",
      EquipmentType: 0,
      Name: "          ",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 20,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Pelt",
    Name: "Voltar's Feather",
    Index: "Voltar's Feather",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 24,
    Code: "dr4",
    Properties: [
      {
        PropertyString: "+15 Faster Run/Walk",
        Index: 5
      },
      {
        PropertyString: "Adds 1-75 to Lightning Damage",
        Index: 2
      },
      {
        PropertyString: "+115-135 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "25 to Energy",
        Index: 4
      },
      {
        PropertyString: "Magic Resist +15%",
        Index: 1
      },
      {
        PropertyString: "Lightning Resist +25%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "27-30",
      EquipmentType: 0,
      Name: "            ",
      RequiredStrength: 28,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 20,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Lynx Talon",
    Index: "Lynx Talon",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 24,
    Code: "clw",
    Properties: [
      {
        PropertyString: "Level 1-3 Defiance Aura When Equipped",
        Index: 3
      },
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+120-170% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 4
      },
      {
        PropertyString: "20 to Dexterity",
        Index: 5
      },
      {
        PropertyString: "Fire Resist +25%",
        Index: 6
      },
      {
        PropertyString: "+3-5 to Mana after each Kill",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(17-21) to (33-40)"
        }
      ],
      EquipmentType: 1,
      Name: "Claws",
      RequiredStrength: 46,
      RequiredDexterity: 46,
      Durability: 250,
      ItemLevel: 18,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Ring",
    Name: "Golem's Might",
    Index: "Golem's Might",
    Enabled: true,
    ItemLevel: 24,
    RequiredLevel: 24,
    Code: "rin",
    Properties: [
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "Adds 10-15 to Damage",
        Index: 1
      },
      {
        PropertyString: "25 to Strength",
        Index: 0
      },
      {
        PropertyString: "All Resistances +8-15",
        Index: 2
      },
      {
        PropertyString: "+5-8 Life after each Kill",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Ring",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Ring",
        Index: "Ring",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Axe",
    Name: "Brainhew",
    Index: "Brainhew",
    Enabled: true,
    ItemLevel: 34,
    RequiredLevel: 25,
    Code: "gax",
    Properties: [
      {
        PropertyString: "+50-80% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "+14 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 15-35 to Fire Damage",
        Index: 5
      },
      {
        PropertyString: "Adds 10-13 Mana stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+25 to Mana",
        Index: 1
      },
      {
        PropertyString: "4 to Light Radius",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(27-30) to (45-54)"
        }
      ],
      EquipmentType: 1,
      Name: "Great Axe",
      RequiredStrength: 63,
      RequiredDexterity: 39,
      Durability: 250,
      ItemLevel: 23,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Knife",
    Name: "Spectral Shard",
    Index: "Irices Shard",
    Enabled: true,
    ItemLevel: 34,
    RequiredLevel: 25,
    Code: "bld",
    Properties: [
      {
        PropertyString: "+50 Faster Cast Rate",
        Index: 0
      },
      {
        PropertyString: "55 to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "+50 to Mana",
        Index: 1
      },
      {
        PropertyString: "All Resistances +10",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "4 to 15"
        }
      ],
      EquipmentType: 1,
      Name: "Blade",
      RequiredStrength: 35,
      RequiredDexterity: 51,
      Durability: 250,
      ItemLevel: 23,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "The Battlebranch",
    Index: "The Battlebranch",
    Enabled: true,
    ItemLevel: 34,
    RequiredLevel: 25,
    Code: "pax",
    Properties: [
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 0
      },
      {
        PropertyString: "+50-70% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "50-100 to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "+7 Life stolen per hit",
        Index: 4
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(27-30) to (58-66)"
        }
      ],
      EquipmentType: 1,
      Name: "Poleaxe",
      RequiredStrength: 62,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 21,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Stormstrike",
    Index: "Pullspite",
    Enabled: true,
    ItemLevel: 34,
    RequiredLevel: 25,
    Code: "sbb",
    Properties: [
      {
        PropertyString: "+70-90% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+25 Piercing Attack",
        Index: 3
      },
      {
        PropertyString: "28 to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "Adds 1-30 to Lightning Damage",
        Index: 0
      },
      {
        PropertyString: "8 to Strength",
        Index: 1
      },
      {
        PropertyString: "Lightning Resist +25%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(8-9) to (18-20)"
        }
      ],
      EquipmentType: 1,
      Name: "Short Battle Bow",
      RequiredStrength: 30,
      RequiredDexterity: 40,
      Durability: 0,
      ItemLevel: 18,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Howltusk",
    Index: "Howltusk",
    Enabled: true,
    ItemLevel: 34,
    RequiredLevel: 25,
    Code: "ghm",
    Properties: [
      {
        PropertyString: "25%",
        Index: 5
      },
      {
        PropertyString: "+1 Knockback",
        Index: 4
      },
      {
        PropertyString: "+80 Enhanced Defense",
        Index: 2
      },
      {
        PropertyString: "+2 Magic Damage Reduced by",
        Index: 0
      },
      {
        PropertyString: "+3 Attacker Takes Damage of",
        Index: 1
      },
      {
        PropertyString: "35% Damage Taken Goes To Mana",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "55",
      EquipmentType: 0,
      Name: "Great Helm",
      RequiredStrength: 63,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 23,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Amulet",
    Name: "The Mahim-Oak Curio",
    Index: "The Mahim-Oak Curio",
    Enabled: true,
    ItemLevel: 34,
    RequiredLevel: 25,
    Code: "amu",
    Properties: [
      {
        PropertyString: "10 bonus to Attack Rating",
        Index: 5
      },
      {
        PropertyString: "+10 Enhanced Defense",
        Index: 7
      },
      {
        PropertyString: "+10 Defense",
        Index: 4
      },
      {
        PropertyString: "10 to Strength",
        Index: 1
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 0
      },
      {
        PropertyString: "10 to Vitality",
        Index: 3
      },
      {
        PropertyString: "10 to Energy",
        Index: 2
      },
      {
        PropertyString: "All Resistances +10",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Amulet",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Amulet",
        Index: "Amulet",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Axe",
    Name: "Long Suffering",
    Index: "Longsuffering",
    Enabled: true,
    ItemLevel: 25,
    RequiredLevel: 25,
    Code: "2ax",
    Properties: [
      {
        PropertyString: "Adds 20-50 to Damage",
        Index: 0
      },
      {
        PropertyString: "+200 to Minimum Poison Damage",
        Index: 2
      },
      {
        PropertyString: "44% Chance of Open Wounds",
        Index: 5
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 4
      },
      {
        PropertyString: "+20 Slows target by",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "25 to 63"
        }
      ],
      EquipmentType: 1,
      Name: "Double Axe",
      RequiredStrength: 43,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 13,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Winterswipe",
    Index: "Winterswipe",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 25,
    Code: "lsd",
    Properties: [
      {
        PropertyString: "Level 3-5 Holy Freeze Aura When Equipped",
        Index: 4
      },
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 10-20 to Cold Damage",
        Index: 1
      },
      {
        PropertyString: "Freezes target +1",
        Index: 2
      },
      {
        PropertyString: "Cold Resist +75%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(7-9) to (47-57)"
        }
      ],
      EquipmentType: 1,
      Name: "Long Sword",
      RequiredStrength: 55,
      RequiredDexterity: 39,
      Durability: 250,
      ItemLevel: 20,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Blink Dog",
    Index: "Blink Dog",
    Enabled: true,
    ItemLevel: 23,
    RequiredLevel: 25,
    Code: "clm",
    Properties: [
      {
        PropertyString: "10% Chance to cast level 1 teleport when struck",
        Index: 2
      },
      {
        PropertyString: "+1-2 to Combat Skills (Barbarian only)",
        Index: 4
      },
      {
        PropertyString: "+30-40 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+60-80 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Cold Resist +35-45%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(35-45) to (72-92)"
        },
        {
          Type: 1,
          DamageString: "(43-53) to (90-110)"
        }
      ],
      EquipmentType: 1,
      Name: "Claymore",
      RequiredStrength: 47,
      RequiredDexterity: 0,
      Durability: 285,
      ItemLevel: 17,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Hammer",
    Name: "Spirit Crusher",
    Index: "Spiritcrusher",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 25,
    Code: "mau",
    Properties: [
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 1
      },
      {
        PropertyString: "+250% Damage to Undead Damage to Undead",
        Index: 2
      },
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 3
      },
      {
        PropertyString: "+2-4 to Sword Mastery",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(100-115) to (157-179)"
        }
      ],
      EquipmentType: 1,
      Name: "Maul",
      RequiredStrength: 69,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 21,
      Type: {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Mace",
    Name: "Hycandra",
    Index: "Hycandra",
    Enabled: true,
    ItemLevel: 25,
    RequiredLevel: 25,
    Code: "mac",
    Properties: [
      {
        PropertyString: "+40 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "+40 Faster Block Rate",
        Index: 4
      },
      {
        PropertyString: "Adds 10-40 to Damage",
        Index: 0
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 2
      },
      {
        PropertyString: "All Resistances +20-25",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "13 to 50"
        }
      ],
      EquipmentType: 1,
      Name: "Mace",
      RequiredStrength: 27,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 8,
      Type: {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Knife",
    Name: "Gornnagal's Dirk",
    Index: "Gornnagal's Dirk",
    Enabled: true,
    ItemLevel: 23,
    RequiredLevel: 25,
    Code: "dir",
    Properties: [
      {
        PropertyString: "Adds 25-45 to Damage",
        Index: 0
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 1
      },
      {
        PropertyString: "10 to Enemy Cold Resistance",
        Index: 4
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 3
      },
      {
        PropertyString: "Poison Resist +20-30%",
        Index: 2
      },
      {
        PropertyString: "+30-50 extra gold from monsters",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "28 to 54"
        }
      ],
      EquipmentType: 1,
      Name: "Dirk",
      RequiredStrength: 0,
      RequiredDexterity: 25,
      Durability: 250,
      ItemLevel: 9,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Spear of Hydragoon",
    Index: "Spear of Hydragoon",
    Enabled: true,
    ItemLevel: 27,
    RequiredLevel: 25,
    Code: "brn",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "Adds 45-90 to Damage",
        Index: 0
      },
      {
        PropertyString: "+8 to Leap Attack (Barbarian Only)",
        Index: 3
      },
      {
        PropertyString: "10 to Strength",
        Index: 4
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "52 to 107"
        }
      ],
      EquipmentType: 1,
      Name: "Brandistock",
      RequiredStrength: 40,
      RequiredDexterity: 50,
      Durability: 310,
      ItemLevel: 16,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Wand",
    Name: "Acolyte's Wand",
    Index: "Acolyte's Wand",
    Enabled: true,
    ItemLevel: 24,
    RequiredLevel: 25,
    Code: "wnd",
    Properties: [
      {
        PropertyString: "+1",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 1
      },
      {
        PropertyString: "+66-90 to Throw",
        Index: 4
      },
      {
        PropertyString: "+66-90 to Throw",
        Index: 5
      },
      {
        PropertyString: "+44 to Mana",
        Index: 2
      },
      {
        PropertyString: "Regenerate Mana 50%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "2 to 4"
        }
      ],
      EquipmentType: 1,
      Name: "Wand",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 2,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Freedom's Flight",
    Index: "Freedom's Flight",
    Enabled: true,
    ItemLevel: 24,
    RequiredLevel: 25,
    Code: "sbw",
    Properties: [
      {
        PropertyString: "+1-3 to Bow and Crossbow Skills (Amazon only)",
        Index: 2
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "Adds 20-40 to Damage",
        Index: 0
      },
      {
        PropertyString: "50 bonus to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "+10 to Magic Arrow (Amazon Only)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "22 to 45"
        }
      ],
      EquipmentType: 1,
      Name: "Short Bow",
      RequiredStrength: 0,
      RequiredDexterity: 15,
      Durability: 0,
      ItemLevel: 1,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Rethral Bolt",
    Index: "Rethral",
    Enabled: true,
    ItemLevel: 25,
    RequiredLevel: 25,
    Code: "lxb",
    Properties: [
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "Adds 20-40 to Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 1-40 to Lightning Damage",
        Index: 3
      },
      {
        PropertyString: "+10-15 Damage Reduced by 10-15%%",
        Index: 4
      },
      {
        PropertyString: "Socketed (1)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "26 to 49"
        }
      ],
      EquipmentType: 1,
      Name: "Light Crossbow",
      RequiredStrength: 21,
      RequiredDexterity: 27,
      Durability: 0,
      ItemLevel: 6,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Breastplate of Gond",
    Index: "Breastplate of Gond",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 25,
    Code: "brs",
    Properties: [
      {
        PropertyString: "Adds 1-75 to Lightning Damage",
        Index: 5
      },
      {
        PropertyString: "10-15 to Enemy Lightning Resistance",
        Index: 1
      },
      {
        PropertyString: "10-15 to Lightning Skill Damage",
        Index: 3
      },
      {
        PropertyString: "+180-200 Defense",
        Index: 0
      },
      {
        PropertyString: "Lightning Resist +40-60%",
        Index: 4
      },
      {
        PropertyString: "+10-15 Lightning Absorb",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "245-265",
      EquipmentType: 0,
      Name: "Breast Plate",
      RequiredStrength: 30,
      RequiredDexterity: 0,
      Durability: 50,
      ItemLevel: 18,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Celestial Revelation",
    Index: "Celestial Revelation",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 25,
    Code: "plt",
    Properties: [
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 4
      },
      {
        PropertyString: "15-20 to Fire Skill Damage",
        Index: 0
      },
      {
        PropertyString: "15-20 to Cold Skill Damage",
        Index: 1
      },
      {
        PropertyString: "15-20 to Poison Skill Damage",
        Index: 2
      },
      {
        PropertyString: "15-20 to Lightning Skill Damage",
        Index: 3
      },
      {
        PropertyString: "+125-150 Enhanced Defense",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "245-272",
      EquipmentType: 0,
      Name: "Plate Mail",
      RequiredStrength: 65,
      RequiredDexterity: 0,
      Durability: 60,
      ItemLevel: 24,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Circlet",
    Name: "Muddled Thoughts",
    Index: "Muddled Thoughts",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 25,
    Code: "ci0",
    Properties: [
      {
        PropertyString: "+1",
        Index: 3
      },
      {
        PropertyString: "+25 Faster Cast Rate",
        Index: 1
      },
      {
        PropertyString: "+100-120 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "15 to Energy",
        Index: 2
      },
      {
        PropertyString: "35-50 to Life",
        Index: 5
      },
      {
        PropertyString: "All Resistances +15-25",
        Index: 4
      },
      {
        PropertyString: "10-15% Damage Taken Goes To Mana",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "42-46",
      EquipmentType: 0,
      Name: "Circlet",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 35,
      ItemLevel: 24,
      Type: {
        Name: "Circlet",
        Index: "Circlet",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Bigby's Crushing Fist",
    Index: "Bigby's Crushing Fist",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 25,
    Code: "tow",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 3
      },
      {
        PropertyString: "+20-30% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "+ Chance of Crushing Blow",
        Index: 1
      },
      {
        PropertyString: "+40-70 Defense",
        Index: 0
      },
      {
        PropertyString: "Socketed (2-3)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "1 to 5",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "62-92",
      EquipmentType: 0,
      Name: "Tower Shield",
      RequiredStrength: 75,
      RequiredDexterity: 0,
      Durability: 60,
      ItemLevel: 22,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Green God's Bracers",
    Index: "Green God's Bracers",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 25,
    Code: "mgl",
    Properties: [
      {
        PropertyString: "+1-3 to Passive and Magic Skills (Amazon only)",
        Index: 2
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "Adds 1-35 to Lightning Damage",
        Index: 3
      },
      {
        PropertyString: "+100-115 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "25-35 to Life",
        Index: 5
      },
      {
        PropertyString: "All Resistances +10-20",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "18-19",
      EquipmentType: 0,
      Name: "Chain Gloves",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 16,
      ItemLevel: 12,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Belt",
    Name: "Belt of Evil",
    Index: "Belt of Evil",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 25,
    Code: "mbl",
    Properties: [
      {
        PropertyString: "+20-30 Defense",
        Index: 0
      },
      {
        PropertyString: "55-75 to Life",
        Index: 5
      },
      {
        PropertyString: "-1 Drain Life",
        Index: 1
      },
      {
        PropertyString: "-2 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "+75 extra gold from monsters",
        Index: 3
      },
      {
        PropertyString: "+75 better chance of getting magic item",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "25-35",
      EquipmentType: 0,
      Name: "Belt",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 16,
      ItemLevel: 12,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Amazon Spear",
    Name: "Stygian Harlot",
    Index: "Stygian Harlot",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 25,
    Code: "am4",
    Properties: [
      {
        PropertyString: "+1-3 to Javelin and Spear Skills (Amazon only)",
        Index: 3
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+30-55 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 80-120 to Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 6-8 Life stolen per hit",
        Index: 5
      },
      {
        PropertyString: "40-50 to Life",
        Index: 4
      },
      {
        PropertyString: "Socketed (2)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(133-158) to (175-175)"
        }
      ],
      EquipmentType: 1,
      Name: "Maiden Pike",
      RequiredStrength: 63,
      RequiredDexterity: 52,
      Durability: 250,
      ItemLevel: 27,
      Type: {
        Name: "Amazon Spear",
        Index: "Amazon Spear",
        Class: "ama"
      },
      RequiredClass: "Amazon"
    }
  },
  {
    Type: "Auric Shields",
    Name: "King's Guard",
    Index: "King's Guard",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 25,
    Code: "pa5",
    Properties: [
      {
        PropertyString: "+20-30% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "+20 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "30-40% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "+5 Life stolen per hit",
        Index: 6
      },
      {
        PropertyString: "+75-120 Defense",
        Index: 0
      },
      {
        PropertyString: "Magic Resist +15%",
        Index: 5
      },
      {
        PropertyString: "+15 Damage Reduced by 15%%",
        Index: 4
      },
      {
        PropertyString: "+10-15 Reduces all Vendor Prices",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "4 to 12",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "105-150",
      EquipmentType: 0,
      Name: "Crown Shield",
      RequiredStrength: 65,
      RequiredDexterity: 0,
      Durability: 60,
      ItemLevel: 24,
      Type: {
        Name: "Auric Shields",
        Index: "Auric Shields",
        Class: "pal"
      },
      RequiredClass: "Paladin"
    }
  },
  {
    Type: "Pelt",
    Name: "Wraith Whisper",
    Index: "Wraith Whisper",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 25,
    Code: "dr5",
    Properties: [
      {
        PropertyString: "+1-2 to Elemental Skills (Druid only)",
        Index: 2
      },
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+80-110 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "Cold Resist +%",
        Index: 6
      },
      {
        PropertyString: "3-5 to Light Radius",
        Index: 3
      },
      {
        PropertyString: "Ethereal (Cannot Be Repaired)",
        Index: 4
      },
      {
        PropertyString: "Repairs 0.15 durability per second",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "41-48",
      EquipmentType: 0,
      Name: "         ",
      RequiredStrength: 30,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 24,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Simpleton's Shadow",
    Index: "Simpleton's Shadow",
    Enabled: true,
    ItemLevel: 25,
    RequiredLevel: 25,
    Code: "ktr",
    Properties: [
      {
        PropertyString: "+1",
        Index: 3
      },
      {
        PropertyString: "+25 Faster Run/Walk",
        Index: 1
      },
      {
        PropertyString: "+60-75% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 3-5 Life stolen per hit",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(6-7) to (11-12)"
        }
      ],
      EquipmentType: 1,
      Name: "Katar",
      RequiredStrength: 20,
      RequiredDexterity: 20,
      Durability: 250,
      ItemLevel: 1,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Spirit Hawk",
    Index: "Spirit Hawk",
    Enabled: true,
    ItemLevel: 25,
    RequiredLevel: 25,
    Code: "axf",
    Properties: [
      {
        PropertyString: "+1-3 to Martial Arts (Assassin only)",
        Index: 2
      },
      {
        PropertyString: "+14-25 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+34-44 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 25-40 Adds 25-40 magic damage",
        Index: 5
      },
      {
        PropertyString: "+3-5 to Oak Sage",
        Index: 3
      },
      {
        PropertyString: "Magic Resist +10-15%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(16-27) to (49-59)"
        }
      ],
      EquipmentType: 1,
      Name: "Hatchet Hands",
      RequiredStrength: 37,
      RequiredDexterity: 37,
      Durability: 250,
      ItemLevel: 12,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Sword",
    Name: "Blacktongue",
    Index: "Blacktongue",
    Enabled: true,
    ItemLevel: 35,
    RequiredLevel: 26,
    Code: "bsw",
    Properties: [
      {
        PropertyString: "+50-60% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "50 to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "+192 to Minimum Poison Damage",
        Index: 0
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 1
      },
      {
        PropertyString: "Poison Resist +50%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(10-11) to (28-30)"
        },
        {
          Type: 1,
          DamageString: "(30-32) to (42-44)"
        }
      ],
      EquipmentType: 1,
      Name: "Bastard Sword",
      RequiredStrength: 62,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 24,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Ripsaw",
    Index: "Ripsaw",
    Enabled: true,
    ItemLevel: 35,
    RequiredLevel: 26,
    Code: "flb",
    Properties: [
      {
        PropertyString: "+80-100% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "+15 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+6 Mana stolen per hit",
        Index: 2
      },
      {
        PropertyString: "80% Chance of Open Wounds",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(16-18) to (42-45)"
        },
        {
          Type: 1,
          DamageString: "(23-26) to (61-67)"
        }
      ],
      EquipmentType: 1,
      Name: "Flamberge",
      RequiredStrength: 70,
      RequiredDexterity: 49,
      Durability: 250,
      ItemLevel: 27,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Wizendraw",
    Index: "Wizendraw",
    Enabled: true,
    ItemLevel: 35,
    RequiredLevel: 26,
    Code: "lbb",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+70-80% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+5 Fires Magic Arrows",
        Index: 0
      },
      {
        PropertyString: "50-100 to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "20-35 to Enemy Cold Resistance",
        Index: 7
      },
      {
        PropertyString: "15 to Energy",
        Index: 6
      },
      {
        PropertyString: "+30 to Mana",
        Index: 1
      },
      {
        PropertyString: "Cold Resist +26%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "5 to 30"
        }
      ],
      EquipmentType: 1,
      Name: "Long Battle Bow",
      RequiredStrength: 40,
      RequiredDexterity: 50,
      Durability: 0,
      ItemLevel: 23,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Boneflesh",
    Index: "Boneflesh",
    Enabled: true,
    ItemLevel: 35,
    RequiredLevel: 26,
    Code: "plt",
    Properties: [
      {
        PropertyString: "35 to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "+5 Life stolen per hit",
        Index: 0
      },
      {
        PropertyString: "25% Chance of Open Wounds",
        Index: 3
      },
      {
        PropertyString: "+100-120 Enhanced Defense",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "218-239",
      EquipmentType: 0,
      Name: "Plate Mail",
      RequiredStrength: 65,
      RequiredDexterity: 0,
      Durability: 60,
      ItemLevel: 24,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "The Ward",
    Index: "The Ward",
    Enabled: true,
    ItemLevel: 35,
    RequiredLevel: 26,
    Code: "gts",
    Properties: [
      {
        PropertyString: "10% Increased Chance of Blocking",
        Index: 3
      },
      {
        PropertyString: "+100 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "+40 Defense",
        Index: 0
      },
      {
        PropertyString: "10 to Strength",
        Index: 2
      },
      {
        PropertyString: "All Resistances +30-50",
        Index: 5
      },
      {
        PropertyString: "+2 Magic Damage Reduced by",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "2 to 6",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "102",
      EquipmentType: 0,
      Name: "Gothic Shield",
      RequiredStrength: 60,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 30,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Anadek's Sword",
    Index: "Anadek's Sword",
    Enabled: true,
    ItemLevel: 24,
    RequiredLevel: 26,
    Code: "scm",
    Properties: [
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+50-60% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 25-40 to Fire Damage",
        Index: 3
      },
      {
        PropertyString: "Cold Resist +20-30%",
        Index: 4
      },
      {
        PropertyString: "Repairs 0.25 durability per second",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "28 to 59"
        }
      ],
      EquipmentType: 1,
      Name: "Scimitar",
      RequiredStrength: 0,
      RequiredDexterity: 21,
      Durability: 250,
      ItemLevel: 5,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Ruemonger",
    Index: "Ruemonger",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 26,
    Code: "spt",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 4
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 10-20 to Damage",
        Index: 1
      },
      {
        PropertyString: "15 to Lightning Skill Damage",
        Index: 5
      },
      {
        PropertyString: "20 to Enemy Lightning Resistance",
        Index: 6
      },
      {
        PropertyString: "+2 to Sword Mastery",
        Index: 3
      },
      {
        PropertyString: "Hit blinds target +1",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(47-55) to (77-89)"
        }
      ],
      EquipmentType: 1,
      Name: "Spetum",
      RequiredStrength: 54,
      RequiredDexterity: 35,
      Durability: 250,
      ItemLevel: 20,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Slayer of Fields",
    Index: "Slayer of Fields",
    Enabled: true,
    ItemLevel: 30,
    RequiredLevel: 26,
    Code: "scy",
    Properties: [
      {
        PropertyString: "+1 to Fire Skills",
        Index: 4
      },
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+30-40 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+70-80 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(38-48) to (90-100)"
        }
      ],
      EquipmentType: 1,
      Name: "Scythe",
      RequiredStrength: 41,
      RequiredDexterity: 41,
      Durability: 250,
      ItemLevel: 15,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Wand",
    Name: "Child's Laughter",
    Index: "Child's Laughter",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 26,
    Code: "bwn",
    Properties: [
      {
        PropertyString: "100% Chance to cast level 40 nova when you Level-Up",
        Index: 3
      },
      {
        PropertyString: "25 to Poison Skill Damage",
        Index: 6
      },
      {
        PropertyString: "+3-5 to Weaken (Necromancer Only)",
        Index: 0
      },
      {
        PropertyString: "+3-5 to Terror (Necromancer Only)",
        Index: 1
      },
      {
        PropertyString: "+3-5 to Confuse (Necromancer Only)",
        Index: 2
      },
      {
        PropertyString: "4 to Experience Gained",
        Index: 5
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "3 to 7"
        }
      ],
      EquipmentType: 1,
      Name: "Bone Wand",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 18,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Target Practice",
    Index: "Target's",
    Enabled: true,
    ItemLevel: 25,
    RequiredLevel: 26,
    Code: "hbw",
    Properties: [
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 1
      },
      {
        PropertyString: "Adds 23-45 to Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 1-100 to Lightning Damage",
        Index: 2
      },
      {
        PropertyString: "Adds 4-6 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+1-3 to Magic Arrow",
        Index: 5
      },
      {
        PropertyString: "15 to Vitality",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "26 to 52"
        }
      ],
      EquipmentType: 1,
      Name: "Hunter's Bow",
      RequiredStrength: 0,
      RequiredDexterity: 28,
      Durability: 0,
      ItemLevel: 5,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Beeswarm",
    Index: "Beeswarm",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 26,
    Code: "lbb",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 4
      },
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+140-190% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 10-20 to Damage",
        Index: 1
      },
      {
        PropertyString: "+6 to Multiple Shot",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(17-18) to (63-72)"
        }
      ],
      EquipmentType: 1,
      Name: "Long Battle Bow",
      RequiredStrength: 40,
      RequiredDexterity: 50,
      Durability: 0,
      ItemLevel: 23,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Thor's Bolt",
    Index: "Thor's Bolt",
    Enabled: true,
    ItemLevel: 26,
    RequiredLevel: 26,
    Code: "6rx",
    Properties: [
      {
        PropertyString: "8% Chance to cast level 17 lightning when struck",
        Index: 3
      },
      {
        PropertyString: "+50-75 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+150-200 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 1-555 to Lightning Damage",
        Index: 2
      },
      {
        PropertyString: "35 to Enemy Lightning Resistance",
        Index: 5
      },
      {
        PropertyString: "Magic Resist +15%",
        Index: 6
      },
      {
        PropertyString: "Lightning Resist +40-50%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(76-101) to (190-240)"
        }
      ],
      EquipmentType: 1,
      Name: "Demon Crossbow",
      RequiredStrength: 141,
      RequiredDexterity: 98,
      Durability: 0,
      ItemLevel: 84,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Starsong",
    Index: "Starsong",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 26,
    Code: "spl",
    Properties: [
      {
        PropertyString: "+205-220 Defense",
        Index: 0
      },
      {
        PropertyString: "25-50 to Life",
        Index: 1
      },
      {
        PropertyString: "+25-55 to Mana",
        Index: 2
      },
      {
        PropertyString: "Poison Resist +30-50%",
        Index: 5
      },
      {
        PropertyString: "+3-5 to Mana after each Kill",
        Index: 3
      },
      {
        PropertyString: "+8-12 Life after each Kill",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "295-310",
      EquipmentType: 0,
      Name: "Splint Mail",
      RequiredStrength: 51,
      RequiredDexterity: 0,
      Durability: 30,
      ItemLevel: 20,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Ion Storm",
    Index: "Ion Storm",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 26,
    Code: "fld",
    Properties: [
      {
        PropertyString: "Adds 1-65 to Fire Damage",
        Index: 0
      },
      {
        PropertyString: "+150-190 Defense",
        Index: 1
      },
      {
        PropertyString: "4-7 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "Socketed (3-4)",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "251-291",
      EquipmentType: 0,
      Name: "Field Plate",
      RequiredStrength: 55,
      RequiredDexterity: 0,
      Durability: 48,
      ItemLevel: 28,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Golem's Gain",
    Index: "Golem's Gain ",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 26,
    Code: "gth",
    Properties: [
      {
        PropertyString: "+8 to Golem Mastery",
        Index: 2
      },
      {
        PropertyString: "+2-5 to BloodGolem",
        Index: 3
      },
      {
        PropertyString: "+120-200 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "25 to Strength",
        Index: 1
      },
      {
        PropertyString: "All Resistances +25",
        Index: 5
      },
      {
        PropertyString: "Level 30 Clay Golem (5 Charges)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "283-387",
      EquipmentType: 0,
      Name: "Gothic Plate",
      RequiredStrength: 70,
      RequiredDexterity: 0,
      Durability: 55,
      ItemLevel: 32,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Adamantine Mail",
    Index: "Adamantine Mail",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 26,
    Code: "xng",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 4
      },
      {
        PropertyString: "+ Defense",
        Index: 0
      },
      {
        PropertyString: "+150-200 Defense",
        Index: 1
      },
      {
        PropertyString: "+25-35 Damage Reduced by 25-35%%",
        Index: 2
      },
      {
        PropertyString: "Socketed (3)",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "308-358",
      EquipmentType: 0,
      Name: "Linked Mail",
      RequiredStrength: 74,
      RequiredDexterity: 0,
      Durability: 26,
      ItemLevel: 42,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Boots",
    Name: "Lilith's Heels",
    Index: "Lilith's Heels",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 26,
    Code: "tbt",
    Properties: [
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 5
      },
      {
        PropertyString: "+1-2 to Teleport (Sorceress Only)",
        Index: 2
      },
      {
        PropertyString: "+1 to Warmth (Sorceress Only)",
        Index: 3
      },
      {
        PropertyString: "+115-140 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+25 to Mana",
        Index: 4
      },
      {
        PropertyString: "Cold Resist +25-40%",
        Index: 6
      },
      {
        PropertyString: "5-10% Damage Taken Goes To Mana",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "8 to 16",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "21-24",
      EquipmentType: 0,
      Name: "Light Plated Boots",
      RequiredStrength: 50,
      RequiredDexterity: 0,
      Durability: 18,
      ItemLevel: 20,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Amazon Bow",
    Name: "Damsel of Destruction",
    Index: "Damsel of Destruction",
    Enabled: true,
    ItemLevel: 26,
    RequiredLevel: 26,
    Code: "am1",
    Properties: [
      {
        PropertyString: "+1-3 to Bow and Crossbow Skills (Amazon only)",
        Index: 2
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+80-120% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 6
      },
      {
        PropertyString: "Adds 20-40 to Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 10-25 to Fire Damage",
        Index: 4
      },
      {
        PropertyString: "+5 to Mana after each Kill",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(32-35) to (61-66)"
        }
      ],
      EquipmentType: 1,
      Name: "Stag Bow",
      RequiredStrength: 30,
      RequiredDexterity: 45,
      Durability: 0,
      ItemLevel: 18,
      Type: {
        Name: "Amazon Bow",
        Index: "Amazon Bow",
        Class: "ama"
      },
      RequiredClass: "Amazon"
    }
  },
  {
    Type: "Orb",
    Name: "Unseeing Eye",
    Index: "Unseeing Eye",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 26,
    Code: "ob5",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 2
      },
      {
        PropertyString: "+70-100 Defense",
        Index: 4
      },
      {
        PropertyString: "+45 to Mana",
        Index: 3
      },
      {
        PropertyString: "+4-6 to Mana after each Kill",
        Index: 6
      },
      {
        PropertyString: "10 to Experience Gained",
        Index: 1
      },
      {
        PropertyString: "10-15% Damage Taken Goes To Mana",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "8 to 18"
        }
      ],
      EquipmentType: 1,
      Name: "          ",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 24,
      Type: {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      },
      RequiredClass: "Sorceress"
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "Chiaroscuro Visage",
    Index: "Chiaroscuro Visage",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 26,
    Code: "ne5",
    Properties: [
      {
        PropertyString: "+1-3 to Poison and Bone Skills (Necromancer only)",
        Index: 3
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+25 Faster Cast Rate",
        Index: 7
      },
      {
        PropertyString: "25-35% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "Adds 10-20 to Damage",
        Index: 4
      },
      {
        PropertyString: "+100 to Minimum Poison Damage",
        Index: 6
      },
      {
        PropertyString: "+35 Chance of Crushing Blow",
        Index: 5
      },
      {
        PropertyString: "+60-80 Enhanced Defense",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "25-28",
      EquipmentType: 0,
      Name: "         ",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 24,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Primal Helm",
    Name: "Chimera's Chaos",
    Index: "Chimera's Chaos",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 26,
    Code: "ba5",
    Properties: [
      {
        PropertyString: "+25% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "+6-10 to Inferno",
        Index: 4
      },
      {
        PropertyString: "+100-140 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "20 to Strength",
        Index: 5
      },
      {
        PropertyString: "All Resistances +15",
        Index: 3
      },
      {
        PropertyString: "+10 Damage Reduced by 10%%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "72-86",
      EquipmentType: 0,
      Name: "Avenger Guard",
      RequiredStrength: 65,
      RequiredDexterity: 0,
      Durability: 55,
      ItemLevel: 24,
      Type: {
        Name: "Primal Helm",
        Index: "Primal Helm",
        Class: "bar"
      },
      RequiredClass: "Barbarian"
    }
  },
  {
    Type: "Axe",
    Name: "Rakescar",
    Index: "Rakescar",
    Enabled: true,
    ItemLevel: 36,
    RequiredLevel: 27,
    Code: "wax",
    Properties: [
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 6
      },
      {
        PropertyString: "+75-150% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "50 to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "Adds 128 Poison damage",
        Index: 0
      },
      {
        PropertyString: "Poison Resist +50%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(17-25) to (31-45)"
        }
      ],
      EquipmentType: 1,
      Name: "War Axe",
      RequiredStrength: 67,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 25,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Hammer",
    Name: "Ironstone",
    Index: "Ironstone",
    Enabled: true,
    ItemLevel: 36,
    RequiredLevel: 27,
    Code: "whm",
    Properties: [
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "100-150 to Attack Rating",
        Index: 0
      },
      {
        PropertyString: "Adds 1-10 Lightning damage",
        Index: 2
      },
      {
        PropertyString: "10 to Strength",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(38-47) to (58-72)"
        }
      ],
      EquipmentType: 1,
      Name: "War Hammer",
      RequiredStrength: 53,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 25,
      Type: {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "The Tannr Gorerod",
    Index: "The Tannr Gorerod",
    Enabled: true,
    ItemLevel: 36,
    RequiredLevel: 27,
    Code: "pik",
    Properties: [
      {
        PropertyString: "+80-100% Enhanced Damage",
        Index: 7
      },
      {
        PropertyString: "60 to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "Adds 23-54 Fire damage",
        Index: 0
      },
      {
        PropertyString: "30 to Life",
        Index: 3
      },
      {
        PropertyString: "+15 to Maximum Fire Resist",
        Index: 2
      },
      {
        PropertyString: "Fire Resist +15%",
        Index: 6
      },
      {
        PropertyString: "3 to Light Radius",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(25-28) to (113-126)"
        }
      ],
      EquipmentType: 1,
      Name: "Pike",
      RequiredStrength: 60,
      RequiredDexterity: 45,
      Durability: 250,
      ItemLevel: 24,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Hellclap",
    Index: "Hellclap",
    Enabled: true,
    ItemLevel: 36,
    RequiredLevel: 27,
    Code: "swb",
    Properties: [
      {
        PropertyString: "+1 to Fire Skills",
        Index: 7
      },
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 0
      },
      {
        PropertyString: "+70-90% Enhanced Damage",
        Index: 6
      },
      {
        PropertyString: "50-75 to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "Adds 15-50 Fire damage",
        Index: 1
      },
      {
        PropertyString: "12 to Dexterity",
        Index: 5
      },
      {
        PropertyString: "Fire Resist +40%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(10-11) to (23-26)"
        }
      ],
      EquipmentType: 1,
      Name: "Short War Bow",
      RequiredStrength: 35,
      RequiredDexterity: 55,
      Durability: 0,
      ItemLevel: 27,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Hellcast",
    Index: "Hellcast",
    Enabled: true,
    ItemLevel: 36,
    RequiredLevel: 27,
    Code: "hxb",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+70-80% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+5 Fires Explosive Arrows or Bolts",
        Index: 0
      },
      {
        PropertyString: "70 to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "Adds 15-35 to Fire Damage",
        Index: 6
      },
      {
        PropertyString: "+15 to Maximum Fire Resist",
        Index: 1
      },
      {
        PropertyString: "Fire Resist +15%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(23-25) to (44-46)"
        }
      ],
      EquipmentType: 1,
      Name: "Heavy Crossbow",
      RequiredStrength: 60,
      RequiredDexterity: 40,
      Durability: 0,
      ItemLevel: 24,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Belt",
    Name: "Goldwrap",
    Index: "Goldwrap",
    Enabled: true,
    ItemLevel: 36,
    RequiredLevel: 27,
    Code: "tbl",
    Properties: [
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+40-60 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "+25 Defense",
        Index: 2
      },
      {
        PropertyString: "+50-80 extra gold from monsters",
        Index: 5
      },
      {
        PropertyString: "+30 better chance of getting magic item",
        Index: 0
      },
      {
        PropertyString: "2 to Light Radius",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "34-36",
      EquipmentType: 0,
      Name: "Heavy Belt",
      RequiredStrength: 45,
      RequiredDexterity: 0,
      Durability: 18,
      ItemLevel: 20,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Axe",
    Name: "Tendriculos",
    Index: "Tendriculos",
    Enabled: true,
    ItemLevel: 27,
    RequiredLevel: 27,
    Code: "btx",
    Properties: [
      {
        PropertyString: "+70-100% Enhanced Damage",
        Index: 6
      },
      {
        PropertyString: "+15-25 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+50-65 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "-10-15% Target Defense",
        Index: 5
      },
      {
        PropertyString: "25-35 bonus to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "+15-25 Chance of Crushing Blow",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(35-49) to (104-129)"
        }
      ],
      EquipmentType: 1,
      Name: "Battle Axe",
      RequiredStrength: 54,
      RequiredDexterity: 0,
      Durability: 290,
      ItemLevel: 17,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Elder Curse",
    Index: "Oldfather",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 27,
    Code: "bsw",
    Properties: [
      {
        PropertyString: "+125-175% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "5 to Strength",
        Index: 2
      },
      {
        PropertyString: "25 to Life",
        Index: 3
      },
      {
        PropertyString: "+20 Increase Maximum Durability",
        Index: 5
      },
      {
        PropertyString: "Repairs 0.02 durability per second",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(15-19) to (42-52)"
        },
        {
          Type: 1,
          DamageString: "(45-55) to (63-77)"
        }
      ],
      EquipmentType: 1,
      Name: "Bastard Sword",
      RequiredStrength: 62,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 24,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Elven Bow of Duadon",
    Index: "Elven Bow of Duadon",
    Enabled: true,
    ItemLevel: 26,
    RequiredLevel: 27,
    Code: "lbw",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 2
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 5
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 4-6 Mana stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+1-2 Replenish Life",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "29 to 62"
        }
      ],
      EquipmentType: 1,
      Name: "Long Bow",
      RequiredStrength: 22,
      RequiredDexterity: 19,
      Durability: 0,
      ItemLevel: 8,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Chaos Flight",
    Index: "Chaoskiller",
    Enabled: true,
    ItemLevel: 26,
    RequiredLevel: 27,
    Code: "ssp",
    Properties: [
      {
        PropertyString: "+75-100% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 1
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 6
      },
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 4
      },
      {
        PropertyString: "2-5 to Experience Gained",
        Index: 5
      },
      {
        PropertyString: "+50 Increased Stack Size",
        Index: 3
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(28-29) to (72-76)"
        },
        {
          Type: 2,
          DamageString: "(42-45) to (88-94)"
        }
      ],
      EquipmentType: 1,
      Name: "Short Spear",
      RequiredStrength: 40,
      RequiredDexterity: 40,
      Durability: 250,
      ItemLevel: 15,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Throwing Axe",
    Name: "Timbersplitter",
    Index: "Timbersplitter",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 27,
    Code: "bal",
    Properties: [
      {
        PropertyString: "+175-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+25 Piercing Attack",
        Index: 3
      },
      {
        PropertyString: "35% Chance of Open Wounds",
        Index: 5
      },
      {
        PropertyString: "+1 to Critical Strike",
        Index: 4
      },
      {
        PropertyString: "Lightning Resist +15%",
        Index: 6
      },
      {
        PropertyString: "+5 Lightning Absorb",
        Index: 7
      },
      {
        PropertyString: "+75 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(13-15) to (27-30)"
        },
        {
          Type: 2,
          DamageString: "(33-36) to (41-45)"
        }
      ],
      EquipmentType: 1,
      Name: "Balanced Axe",
      RequiredStrength: 0,
      RequiredDexterity: 57,
      Durability: 250,
      ItemLevel: 16,
      Type: {
        Name: "Throwing Axe",
        Index: "Throwing Axe",
        Class: ""
      },
      RequiredClass: "Axe"
    }
  },
  {
    Type: "Merc Equip",
    Name: "Satyr's Speech",
    Index: "Satyr's Speech",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 27,
    Code: "bhm",
    Properties: [
      {
        PropertyString: "+1 to Offensive Auras (Paladin only)",
        Index: 1
      },
      {
        PropertyString: "125 to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "60%",
        Index: 5
      },
      {
        PropertyString: "Freezes target +1-2",
        Index: 4
      },
      {
        PropertyString: "+40-50 Defense",
        Index: 0
      },
      {
        PropertyString: "All Resistances +15",
        Index: 6
      },
      {
        PropertyString: "Repairs 0.2 durability per second",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "73-83",
      EquipmentType: 0,
      Name: "Bone Helm",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 22,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Gloves",
    Name: "Skein of Pain",
    Index: "Skein of Pain",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 27,
    Code: "tgl",
    Properties: [
      {
        PropertyString: "+1-3 to Combat Skills (Barbarian only)",
        Index: 6
      },
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "Adds 3-12 to Damage",
        Index: 1
      },
      {
        PropertyString: "+120-140 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+20 to Mana",
        Index: 3
      },
      {
        PropertyString: "Lightning Resist +20-40%",
        Index: 5
      },
      {
        PropertyString: "Fire Resist +15-25%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "22-24",
      EquipmentType: 0,
      Name: "Light Gauntlets",
      RequiredStrength: 45,
      RequiredDexterity: 0,
      Durability: 18,
      ItemLevel: 20,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Amazon Javelin",
    Name: "Hastemaster",
    Index: "Hastemaster",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 27,
    Code: "am5",
    Properties: [
      {
        PropertyString: "+40 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+120-160% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+30 Faster Block Rate",
        Index: 5
      },
      {
        PropertyString: "+55 Increased Stack Size",
        Index: 3
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 2
      },
      {
        PropertyString: "15",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(17-20) to (30-36)"
        },
        {
          Type: 2,
          DamageString: "(13-15) to (48-57)"
        }
      ],
      EquipmentType: 1,
      Name: "Maiden Javelin",
      RequiredStrength: 33,
      RequiredDexterity: 47,
      Durability: 250,
      ItemLevel: 23,
      Type: {
        Name: "Amazon Javelin",
        Index: "Amazon Javelin",
        Class: "ama"
      },
      RequiredClass: "Amazon"
    }
  },
  {
    Type: "Orb",
    Name: "Zapcaster",
    Index: "Zapcaster",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 27,
    Code: "ob4",
    Properties: [
      {
        PropertyString: "6% Chance to cast level 5 lightning on striking",
        Index: 3
      },
      {
        PropertyString: "+2 to Lightning Skills (Sorceress only)",
        Index: 0
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 6
      },
      {
        PropertyString: "+10 to Minimum Damage",
        Index: 4
      },
      {
        PropertyString: "+25-35 to Maximum Damage",
        Index: 5
      },
      {
        PropertyString: "10-15 to Enemy Lightning Resistance",
        Index: 1
      },
      {
        PropertyString: "+8-12 Lightning Absorb",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "15 to 37"
        }
      ],
      EquipmentType: 1,
      Name: "      ",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 17,
      Type: {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      },
      RequiredClass: "Sorceress"
    }
  },
  {
    Type: "Auric Shields",
    Name: "Hellchatter",
    Index: "Hellchatter",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 27,
    Code: "pa4",
    Properties: [
      {
        PropertyString: "10% Chance to cast level 7 iron maiden on striking",
        Index: 4
      },
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "Adds 16-24 to Fire Damage",
        Index: 3
      },
      {
        PropertyString: "+40-50 Defense",
        Index: 0
      },
      {
        PropertyString: "All Resistances +60-70",
        Index: 2
      },
      {
        PropertyString: "Repairs 0.07 durability per second",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "4 to 10",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "66-76",
      EquipmentType: 0,
      Name: "Aerin Shield",
      RequiredStrength: 50,
      RequiredDexterity: 0,
      Durability: 95,
      ItemLevel: 20,
      Type: {
        Name: "Auric Shields",
        Index: "Auric Shields",
        Class: "pal"
      },
      RequiredClass: "Paladin"
    }
  },
  {
    Type: "Primal Helm",
    Name: "Invader's Glee",
    Index: "Invader's Glee",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 27,
    Code: "ba4",
    Properties: [
      {
        PropertyString: "+1-3 to Combat Skills (Barbarian only)",
        Index: 7
      },
      {
        PropertyString: "Adds 3-5 Life stolen per hit",
        Index: 1
      },
      {
        PropertyString: "44% Chance of Open Wounds",
        Index: 6
      },
      {
        PropertyString: "+100-125 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+75 extra gold from monsters",
        Index: 2
      },
      {
        PropertyString: "+25 better chance of getting magic item",
        Index: 3
      },
      {
        PropertyString: "Repairs 0.15 durability per second",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "62-69",
      EquipmentType: 0,
      Name: "Assault Helmet",
      RequiredStrength: 55,
      RequiredDexterity: 0,
      Durability: 75,
      ItemLevel: 20,
      Type: {
        Name: "Primal Helm",
        Index: "Primal Helm",
        Class: "bar"
      },
      RequiredClass: "Barbarian"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Troll's Touch",
    Index: "Troll's Touch",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 27,
    Code: "skr",
    Properties: [
      {
        PropertyString: "+2",
        Index: 5
      },
      {
        PropertyString: "+80-120% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 15-30 to Damage",
        Index: 6
      },
      {
        PropertyString: "Adds 6-8 Mana stolen per hit",
        Index: 3
      },
      {
        PropertyString: "Adds 6-8 Life stolen per hit",
        Index: 2
      },
      {
        PropertyString: "+25 Replenish Life",
        Index: 1
      },
      {
        PropertyString: "Regenerate Mana 75%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(31-34) to (60-67)"
        }
      ],
      EquipmentType: 1,
      Name: "Scissors Katar",
      RequiredStrength: 55,
      RequiredDexterity: 55,
      Durability: 250,
      ItemLevel: 24,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Amulet",
    Name: "Cryptking",
    Index: "Cryptking",
    Enabled: true,
    ItemLevel: 27,
    RequiredLevel: 27,
    Code: "amu",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 3
      },
      {
        PropertyString: "+200% Damage to Undead Damage to Undead",
        Index: 2
      },
      {
        PropertyString: "+5-10 to Skeleton Mastery",
        Index: 0
      },
      {
        PropertyString: "+3-5 to Raise Skeletal Mage",
        Index: 1
      },
      {
        PropertyString: "+6-8 Replenish Life",
        Index: 4
      },
      {
        PropertyString: "Regenerate Mana 25%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Amulet",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Amulet",
        Index: "Amulet",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Jewel",
    Name: "Topaz Facet",
    Index: "Topaz Facet",
    Enabled: true,
    ItemLevel: 27,
    RequiredLevel: 27,
    Code: "jew",
    Properties: [
      {
        PropertyString: "+25-50 Defense",
        Index: 2
      },
      {
        PropertyString: "+25 extra gold from monsters",
        Index: 0
      },
      {
        PropertyString: "+10-15 better chance of getting magic item",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Jewel",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Jewel",
        Index: "Jewel",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Wand",
    Name: "Ume's Lament",
    Index: "Umes Lament",
    Enabled: true,
    ItemLevel: 38,
    RequiredLevel: 28,
    Code: "gwn",
    Properties: [
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 2
      },
      {
        PropertyString: "+3 to Terror (Necromancer Only)",
        Index: 4
      },
      {
        PropertyString: "+2 to Decrepify (Necromancer Only)",
        Index: 5
      },
      {
        PropertyString: "50%",
        Index: 3
      },
      {
        PropertyString: "+40 to Mana",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "5 to 11"
        }
      ],
      EquipmentType: 1,
      Name: "Grim Wand",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 26,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Woestave",
    Index: "Woestave",
    Enabled: true,
    ItemLevel: 38,
    RequiredLevel: 28,
    Code: "hal",
    Properties: [
      {
        PropertyString: "+20-40% Enhanced Damage",
        Index: 7
      },
      {
        PropertyString: "50% Chance of Open Wounds",
        Index: 1
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 6
      },
      {
        PropertyString: "Hit blinds target +3",
        Index: 2
      },
      {
        PropertyString: "Freezes target +1",
        Index: 4
      },
      {
        PropertyString: "+50 Slows target by",
        Index: 0
      },
      {
        PropertyString: "-50 to Monster Defense Per Hit",
        Index: 3
      },
      {
        PropertyString: "-3 to Light Radius",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(14-16) to (54-63)"
        }
      ],
      EquipmentType: 1,
      Name: "Halberd",
      RequiredStrength: 75,
      RequiredDexterity: 47,
      Durability: 250,
      ItemLevel: 29,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "The Iron Jang Bong",
    Index: "The Iron Jang Bong",
    Enabled: true,
    ItemLevel: 38,
    RequiredLevel: 28,
    Code: "wst",
    Properties: [
      {
        PropertyString: "+2",
        Index: 7
      },
      {
        PropertyString: "+100% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 1
      },
      {
        PropertyString: "50 bonus to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "+2 to Nova (Sorceress Only)",
        Index: 4
      },
      {
        PropertyString: "+2 to Blaze (Sorceress Only)",
        Index: 5
      },
      {
        PropertyString: "+3 to Frost Nova (Sorceress Only)",
        Index: 6
      },
      {
        PropertyString: "+30 Defense",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "24 to 56"
        }
      ],
      EquipmentType: 1,
      Name: "War Staff",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 24,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Blastbark",
    Index: "Blastbark",
    Enabled: true,
    ItemLevel: 38,
    RequiredLevel: 28,
    Code: "lwb",
    Properties: [
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+70-130% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+3 Mana stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+2 to Exploding Arrow (Amazon Only)",
        Index: 4
      },
      {
        PropertyString: "5 to Strength",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(5-6) to (39-52)"
        }
      ],
      EquipmentType: 1,
      Name: "Long War Bow",
      RequiredStrength: 50,
      RequiredDexterity: 65,
      Durability: 0,
      ItemLevel: 31,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Doomslinger",
    Index: "Doomspittle",
    Enabled: true,
    ItemLevel: 38,
    RequiredLevel: 28,
    Code: "rxb",
    Properties: [
      {
        PropertyString: "+1",
        Index: 0
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+60-100% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "+35 Piercing Attack",
        Index: 1
      },
      {
        PropertyString: "15 to Life",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(9-12) to (19-24)"
        }
      ],
      EquipmentType: 1,
      Name: "Repeating Crossbow",
      RequiredStrength: 40,
      RequiredDexterity: 50,
      Durability: 0,
      ItemLevel: 33,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Rockfleece",
    Index: "Rockfleece",
    Enabled: true,
    ItemLevel: 38,
    RequiredLevel: 28,
    Code: "fld",
    Properties: [
      {
        PropertyString: "+100-130 Enhanced Defense",
        Index: 1
      },
      {
        PropertyString: "5 to Strength",
        Index: 4
      },
      {
        PropertyString: "+10 Damage Reduced by 10%%",
        Index: 2
      },
      {
        PropertyString: "+5 Damage Reduced by",
        Index: 3
      },
      {
        PropertyString: "Requirements -10%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "204-234",
      EquipmentType: 0,
      Name: "Field Plate",
      RequiredStrength: 55,
      RequiredDexterity: 0,
      Durability: 48,
      ItemLevel: 28,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Goldskin",
    Index: "Goldskin",
    Enabled: true,
    ItemLevel: 38,
    RequiredLevel: 28,
    Code: "ful",
    Properties: [
      {
        PropertyString: "+120-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "All Resistances +35",
        Index: 1
      },
      {
        PropertyString: "+10 Attacker Takes Damage of",
        Index: 2
      },
      {
        PropertyString: "+100 extra gold from monsters",
        Index: 4
      },
      {
        PropertyString: "2 to Light Radius",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "332-377",
      EquipmentType: 0,
      Name: "Full Plate Mail",
      RequiredStrength: 80,
      RequiredDexterity: 0,
      Durability: 70,
      ItemLevel: 37,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Silks of the Victor",
    Index: "Victors Silk",
    Enabled: true,
    ItemLevel: 38,
    RequiredLevel: 28,
    Code: "aar",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 1
      },
      {
        PropertyString: "+5 Mana stolen per hit",
        Index: 0
      },
      {
        PropertyString: "+100-120 Enhanced Defense",
        Index: 3
      },
      {
        PropertyString: "2 to Light Radius",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "438-481",
      EquipmentType: 0,
      Name: "Ancient Armor",
      RequiredStrength: 100,
      RequiredDexterity: 0,
      Durability: 60,
      ItemLevel: 40,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Razorswitch",
    Index: "Razorswitch",
    Enabled: true,
    ItemLevel: 36,
    RequiredLevel: 28,
    Code: "8ss",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 6
      },
      {
        PropertyString: "+30 Faster Cast Rate",
        Index: 0
      },
      {
        PropertyString: "80 to Life",
        Index: 3
      },
      {
        PropertyString: "+175 to Mana",
        Index: 2
      },
      {
        PropertyString: "All Resistances +50",
        Index: 5
      },
      {
        PropertyString: "+15 Magic Damage Reduced by",
        Index: 4
      },
      {
        PropertyString: "+15 Attacker Takes Damage of",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "6 to 21"
        }
      ],
      EquipmentType: 1,
      Name: "Jo Staff",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 30,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Skystrike",
    Index: "Skystrike",
    Enabled: true,
    ItemLevel: 36,
    RequiredLevel: 28,
    Code: "8sb",
    Properties: [
      {
        PropertyString: "2% Chance to cast level 6 meteor on striking",
        Index: 5
      },
      {
        PropertyString: "+1",
        Index: 6
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "100 to Attack Rating",
        Index: 1
      },
      {
        PropertyString: "Adds 1-250 to Lightning Damage",
        Index: 0
      },
      {
        PropertyString: "10 to Energy",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(15-18) to (47-57)"
        }
      ],
      EquipmentType: 1,
      Name: "Edge Bow",
      RequiredStrength: 25,
      RequiredDexterity: 43,
      Durability: 0,
      ItemLevel: 30,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Peasant Crown",
    Index: "Peasent Crown",
    Enabled: true,
    ItemLevel: 36,
    RequiredLevel: 28,
    Code: "xap",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 2
      },
      {
        PropertyString: "+15 Faster Run/Walk",
        Index: 3
      },
      {
        PropertyString: "+100 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "20 to Vitality",
        Index: 1
      },
      {
        PropertyString: "20 to Energy",
        Index: 0
      },
      {
        PropertyString: "+6-12 Replenish Life",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "92",
      EquipmentType: 0,
      Name: "War Hat",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 34,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Armor",
    Name: "The Spirit Shroud",
    Index: "The Spirit Shroud",
    Enabled: true,
    ItemLevel: 36,
    RequiredLevel: 28,
    Code: "xui",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 1
      },
      {
        PropertyString: "+150 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "+10 Replenish Life",
        Index: 3
      },
      {
        PropertyString: "+7-11 Magic Damage Reduced by",
        Index: 2
      },
      {
        PropertyString: "+1 Cannot Be Frozen",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "257",
      EquipmentType: 0,
      Name: "Ghost Armor",
      RequiredStrength: 38,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 34,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Visceratuant",
    Index: "Visceratuant",
    Enabled: true,
    ItemLevel: 36,
    RequiredLevel: 28,
    Code: "xuc",
    Properties: [
      {
        PropertyString: "+1",
        Index: 0
      },
      {
        PropertyString: "+30 Faster Block Rate",
        Index: 1
      },
      {
        PropertyString: "30% Increased Chance of Blocking",
        Index: 2
      },
      {
        PropertyString: "+100-150 Enhanced Defense",
        Index: 3
      },
      {
        PropertyString: "+10 Attacker Takes Lightning Damage of",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "8 to 12",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "84-105",
      EquipmentType: 0,
      Name: "Defender",
      RequiredStrength: 38,
      RequiredDexterity: 0,
      Durability: 68,
      ItemLevel: 34,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Nova Spine",
    Index: "Nova Spine",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 28,
    Code: "gax",
    Properties: [
      {
        PropertyString: "100% Chance to cast level 9 frost nova on striking",
        Index: 1
      },
      {
        PropertyString: "+140-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 1-30 to Lightning Damage",
        Index: 4
      },
      {
        PropertyString: "+5 to Maximum Cold Resist",
        Index: 3
      },
      {
        PropertyString: "Cold Resist +25-30%",
        Index: 2
      },
      {
        PropertyString: "Socketed (1-2)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(21-27) to (72-90)"
        }
      ],
      EquipmentType: 1,
      Name: "Great Axe",
      RequiredStrength: 63,
      RequiredDexterity: 39,
      Durability: 250,
      ItemLevel: 23,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Sajorn Jinx",
    Index: "Sajorn Jinx",
    Enabled: true,
    ItemLevel: 25,
    RequiredLevel: 28,
    Code: "sbr",
    Properties: [
      {
        PropertyString: "4% Chance to cast level 3 iron maiden on striking",
        Index: 1
      },
      {
        PropertyString: "Adds 25-55 to Damage",
        Index: 0
      },
      {
        PropertyString: "150 to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "Adds 4-6 Life stolen per hit",
        Index: 4
      },
      {
        PropertyString: "35-50 to Life",
        Index: 2
      },
      {
        PropertyString: "Regenerate Mana 3%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "28 to 63"
        }
      ],
      EquipmentType: 1,
      Name: "Sabre",
      RequiredStrength: 25,
      RequiredDexterity: 25,
      Durability: 250,
      ItemLevel: 8,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Ripskin",
    Index: "Ripskin",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 28,
    Code: "hal",
    Properties: [
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+7 Mana stolen per hit",
        Index: 2
      },
      {
        PropertyString: "+7 Life stolen per hit",
        Index: 1
      },
      {
        PropertyString: "+5 Replenish Life",
        Index: 3
      },
      {
        PropertyString: "Regenerate Mana 25%",
        Index: 4
      },
      {
        PropertyString: "Cold Resist +15-25%",
        Index: 5
      },
      {
        PropertyString: "Lightning Resist +15-25%",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(30-36) to (112-135)"
        }
      ],
      EquipmentType: 1,
      Name: "Halberd",
      RequiredStrength: 75,
      RequiredDexterity: 47,
      Durability: 250,
      ItemLevel: 29,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Silver Oak Bow",
    Index: "Silver Oak Bow",
    Enabled: true,
    ItemLevel: 27,
    RequiredLevel: 28,
    Code: "cbw",
    Properties: [
      {
        PropertyString: "Adds 32-55 to Damage",
        Index: 0
      },
      {
        PropertyString: "200 to Attack Rating",
        Index: 1
      },
      {
        PropertyString: "+100% Damage to Demons Damage to Demons",
        Index: 3
      },
      {
        PropertyString: "+200% Damage to Undead Damage to Undead",
        Index: 2
      },
      {
        PropertyString: "15 to Strength",
        Index: 5
      },
      {
        PropertyString: "Regenerate Mana 50%",
        Index: 4
      },
      {
        PropertyString: "Requirements -15%",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "36 to 63"
        }
      ],
      EquipmentType: 1,
      Name: "Composite Bow",
      RequiredStrength: 25,
      RequiredDexterity: 35,
      Durability: 0,
      ItemLevel: 12,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Piercing Bolt",
    Index: "Piercing Bolt",
    Enabled: true,
    ItemLevel: 28,
    RequiredLevel: 28,
    Code: "mxb",
    Properties: [
      {
        PropertyString: "+100 Piercing Attack",
        Index: 1
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 0
      },
      {
        PropertyString: "20 bonus to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "+5 Life stolen per hit",
        Index: 5
      },
      {
        PropertyString: "+1 Knockback",
        Index: 3
      },
      {
        PropertyString: "All Resistances +20-30",
        Index: 2
      },
      {
        PropertyString: "2-3 to Experience Gained",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "34 to 66"
        }
      ],
      EquipmentType: 1,
      Name: "Crossbow",
      RequiredStrength: 40,
      RequiredDexterity: 33,
      Durability: 0,
      ItemLevel: 15,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Sting of Humiliation",
    Index: "Sting of Humiliation",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 28,
    Code: "glv",
    Properties: [
      {
        PropertyString: "+1",
        Index: 3
      },
      {
        PropertyString: "+160-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+5 to Double Throw (Barbarian Only)",
        Index: 4
      },
      {
        PropertyString: "112%",
        Index: 5
      },
      {
        PropertyString: "All Resistances +35",
        Index: 6
      },
      {
        PropertyString: "+100 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(13-15) to (44-51)"
        },
        {
          Type: 2,
          DamageString: "(41-48) to (57-66)"
        }
      ],
      EquipmentType: 1,
      Name: "Glaive",
      RequiredStrength: 52,
      RequiredDexterity: 35,
      Durability: 250,
      ItemLevel: 23,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Armor",
    Name: "Armor of Warmth",
    Index: "Armor of Warmth",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 28,
    Code: "plt",
    Properties: [
      {
        PropertyString: "75 to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "+3-5 to Warmth",
        Index: 1
      },
      {
        PropertyString: "+225-250 Defense",
        Index: 0
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 3
      },
      {
        PropertyString: "15 to Energy",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "333-358",
      EquipmentType: 0,
      Name: "Plate Mail",
      RequiredStrength: 65,
      RequiredDexterity: 0,
      Durability: 60,
      ItemLevel: 24,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Halcyon Shroud",
    Index: "Halcyon Shroud",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 28,
    Code: "ful",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+100-200 Enhanced Defense",
        Index: 6
      },
      {
        PropertyString: "+8-12 Replenish Life",
        Index: 5
      },
      {
        PropertyString: "Cold Resist +25-40%",
        Index: 2
      },
      {
        PropertyString: "Lightning Resist +25-40%",
        Index: 3
      },
      {
        PropertyString: "Fire Resist +25-40%",
        Index: 1
      },
      {
        PropertyString: "+10-20 Damage Reduced by",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "302-453",
      EquipmentType: 0,
      Name: "Full Plate Mail",
      RequiredStrength: 80,
      RequiredDexterity: 0,
      Durability: 70,
      ItemLevel: 37,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Morning's Tears",
    Index: "Morning's Tears",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 28,
    Code: "ghm",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 4
      },
      {
        PropertyString: "+32-40 Defense",
        Index: 0
      },
      {
        PropertyString: "+10 Increase Maximum Life",
        Index: 2
      },
      {
        PropertyString: "+5 Replenish Life",
        Index: 1
      },
      {
        PropertyString: "+10 Increase Maximum Mana",
        Index: 3
      },
      {
        PropertyString: "+75 to Maximum Poison Resist",
        Index: 6
      },
      {
        PropertyString: "Poison Resist +40-60%",
        Index: 7
      },
      {
        PropertyString: "+50 extra gold from monsters",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "62-70",
      EquipmentType: 0,
      Name: "Great Helm",
      RequiredStrength: 63,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 23,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Merc Equip",
    Name: "Blindman's Bluff",
    Index: "Blindman's Bluff",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 28,
    Code: "msk",
    Properties: [
      {
        PropertyString: "+1 to Shadow Disciplines (Assassin only)",
        Index: 1
      },
      {
        PropertyString: "+50-65 Defense",
        Index: 0
      },
      {
        PropertyString: "15 to Strength",
        Index: 5
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 4
      },
      {
        PropertyString: "All Resistances +20",
        Index: 3
      },
      {
        PropertyString: "Repairs 0.25 durability per second",
        Index: 6
      },
      {
        PropertyString: "Fade",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "59-74",
      EquipmentType: 0,
      Name: "Mask",
      RequiredStrength: 23,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 19,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Shield",
    Name: "Doom Hedge",
    Index: "Doomhedge",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 28,
    Code: "bsh",
    Properties: [
      {
        PropertyString: "13% Chance to cast level 1 amplify damage when struck",
        Index: 4
      },
      {
        PropertyString: "+15 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "+30 Faster Block Rate",
        Index: 1
      },
      {
        PropertyString: "+8 to Maximum Damage",
        Index: 3
      },
      {
        PropertyString: "+10 Deadly Strike",
        Index: 5
      },
      {
        PropertyString: "+25-50 Defense",
        Index: 0
      },
      {
        PropertyString: "All Resistances +15",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "3 to 6",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "35-60",
      EquipmentType: 0,
      Name: "Bone Shield",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 19,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Belt",
    Name: "Pirate's Faith",
    Index: "Pirate's Faith",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 28,
    Code: "tbl",
    Properties: [
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 2
      },
      {
        PropertyString: "+120-145 Enhanced Defense",
        Index: 3
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 4
      },
      {
        PropertyString: "+5-10 Damage Reduced by 5-10%%",
        Index: 5
      },
      {
        PropertyString: "+100 extra gold from monsters",
        Index: 1
      },
      {
        PropertyString: "+25 better chance of getting magic item",
        Index: 0
      },
      {
        PropertyString: "Fade",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "15-17",
      EquipmentType: 0,
      Name: "Heavy Belt",
      RequiredStrength: 45,
      RequiredDexterity: 0,
      Durability: 18,
      ItemLevel: 20,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Samantha's Fist",
    Index: "Samantha's Fist",
    Enabled: true,
    ItemLevel: 28,
    RequiredLevel: 28,
    Code: "ces",
    Properties: [
      {
        PropertyString: "+1-3 to Shadow Disciplines (Assassin only)",
        Index: 2
      },
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+16-27 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+36-46 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Socketed (2)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(23-34) to (51-61)"
        }
      ],
      EquipmentType: 1,
      Name: "Cestus",
      RequiredStrength: 42,
      RequiredDexterity: 42,
      Durability: 250,
      ItemLevel: 15,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Key to the Madhouse",
    Index: "Key to the Madhouse",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 28,
    Code: "btl",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 4
      },
      {
        PropertyString: "+1-3 to Traps (Assassin only)",
        Index: 5
      },
      {
        PropertyString: "+125-175% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 15-30 to Damage",
        Index: 1
      },
      {
        PropertyString: "15 to Energy",
        Index: 2
      },
      {
        PropertyString: "+25-35 better chance of getting magic item",
        Index: 3
      },
      {
        PropertyString: "Socketed (2)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(37-42) to (61-68)"
        }
      ],
      EquipmentType: 1,
      Name: "Blade Talons",
      RequiredStrength: 50,
      RequiredDexterity: 50,
      Durability: 250,
      ItemLevel: 21,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Ring",
    Name: "Vampiric Regeneration",
    Index: "Vampiric Regeneration",
    Enabled: true,
    ItemLevel: 28,
    RequiredLevel: 28,
    Code: "rin",
    Properties: [
      {
        PropertyString: "Adds 3-5 Mana stolen per hit",
        Index: 4
      },
      {
        PropertyString: "Adds 5-7 Life stolen per hit",
        Index: 5
      },
      {
        PropertyString: "35 to Life",
        Index: 0
      },
      {
        PropertyString: "+8-12 Replenish Life",
        Index: 1
      },
      {
        PropertyString: "Regenerate Mana 35%",
        Index: 2
      },
      {
        PropertyString: "+20 Heal Stamina Plus",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Ring",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Ring",
        Index: "Ring",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Axe",
    Name: "Humongous",
    Index: "The Humongous",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 29,
    Code: "gix",
    Properties: [
      {
        PropertyString: "+80-120% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+8 to Minimum Damage",
        Index: 1
      },
      {
        PropertyString: "+15-25 to Maximum Damage",
        Index: 2
      },
      {
        PropertyString: "+33 Chance of Crushing Blow",
        Index: 3
      },
      {
        PropertyString: "20-30 to Strength",
        Index: 0
      },
      {
        PropertyString: "Requirements +20%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(47-56) to (96-124)"
        }
      ],
      EquipmentType: 1,
      Name: "Giant Axe",
      RequiredStrength: 70,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 27,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Hammer",
    Name: "Steeldriver",
    Index: "Steeldriver",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 29,
    Code: "gma",
    Properties: [
      {
        PropertyString: "+40 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+150-250% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "+25 Heal Stamina Plus",
        Index: 2
      },
      {
        PropertyString: "Requirements -50%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(95-133) to (145-203)"
        }
      ],
      EquipmentType: 1,
      Name: "Great Maul",
      RequiredStrength: 99,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 32,
      Type: {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Culwen's Point",
    Index: "Culwens Point",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 29,
    Code: "wsd",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+70-80% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "60 to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "+50 Poison Length Reduced by",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(13-14) to (34-36)"
        }
      ],
      EquipmentType: 1,
      Name: "War Sword",
      RequiredStrength: 71,
      RequiredDexterity: 45,
      Durability: 250,
      ItemLevel: 27,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "The Patriarch",
    Index: "The Patriarch",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 29,
    Code: "gsd",
    Properties: [
      {
        PropertyString: "+100-120% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "Hit blinds target +1",
        Index: 2
      },
      {
        PropertyString: "10 to Strength",
        Index: 5
      },
      {
        PropertyString: "+3 Damage Reduced by",
        Index: 0
      },
      {
        PropertyString: "+3 Magic Damage Reduced by",
        Index: 1
      },
      {
        PropertyString: "+100 extra gold from monsters",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(24-26) to (40-44)"
        },
        {
          Type: 1,
          DamageString: "(50-55) to (84-92)"
        }
      ],
      EquipmentType: 1,
      Name: "Great Sword",
      RequiredStrength: 100,
      RequiredDexterity: 60,
      Durability: 250,
      ItemLevel: 33,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "The Grim Reaper",
    Index: "The Grim Reaper",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 29,
    Code: "wsc",
    Properties: [
      {
        PropertyString: "+20% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "+15 to Minimum Damage",
        Index: 4
      },
      {
        PropertyString: "+5 Mana stolen per hit",
        Index: 2
      },
      {
        PropertyString: "+100 Deadly Strike",
        Index: 0
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "33 to 43"
        }
      ],
      EquipmentType: 1,
      Name: "War Scythe",
      RequiredStrength: 80,
      RequiredDexterity: 80,
      Durability: 250,
      ItemLevel: 34,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Undead Crown",
    Index: "Undead Crown",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 29,
    Code: "crn",
    Properties: [
      {
        PropertyString: "+50% Damage to Undead Damage to Undead",
        Index: 5
      },
      {
        PropertyString: "50-100 to Attack Rating against Undead",
        Index: 6
      },
      {
        PropertyString: "+5 Life stolen per hit",
        Index: 0
      },
      {
        PropertyString: "+3 to Skeleton Mastery (Necromancer Only)",
        Index: 7
      },
      {
        PropertyString: "+30-60 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "+40 Defense",
        Index: 1
      },
      {
        PropertyString: "Poison Resist +50%",
        Index: 2
      },
      {
        PropertyString: "+1 Half Freeze Duration",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "73-81",
      EquipmentType: 0,
      Name: "Crown",
      RequiredStrength: 55,
      RequiredDexterity: 0,
      Durability: 50,
      ItemLevel: 29,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Armor",
    Name: "Rattlecage",
    Index: "Rattlecage",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 29,
    Code: "gth",
    Properties: [
      {
        PropertyString: "45 to Attack Rating",
        Index: 1
      },
      {
        PropertyString: "+25 Chance of Crushing Blow",
        Index: 2
      },
      {
        PropertyString: "40%",
        Index: 0
      },
      {
        PropertyString: "+200 Defense",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "328",
      EquipmentType: 0,
      Name: "Gothic Plate",
      RequiredStrength: 70,
      RequiredDexterity: 0,
      Durability: 55,
      ItemLevel: 32,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Heavenly Garb",
    Index: "Heavenly Garb",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 29,
    Code: "ltp",
    Properties: [
      {
        PropertyString: "+50% Damage to Undead Damage to Undead",
        Index: 4
      },
      {
        PropertyString: "100 to Attack Rating against Undead",
        Index: 5
      },
      {
        PropertyString: "+100 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "15 to Energy",
        Index: 3
      },
      {
        PropertyString: "Regenerate Mana 25%",
        Index: 2
      },
      {
        PropertyString: "All Resistances +10",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "182",
      EquipmentType: 0,
      Name: "Light Plate",
      RequiredStrength: 41,
      RequiredDexterity: 0,
      Durability: 60,
      ItemLevel: 35,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Frostburn",
    Index: "Frostburn",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 29,
    Code: "hgl",
    Properties: [
      {
        PropertyString: "+5% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 1-6 to Cold Damage",
        Index: 3
      },
      {
        PropertyString: "+10-20 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "+30 Defense",
        Index: 0
      },
      {
        PropertyString: "+40 Increase Maximum Mana",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "44-45",
      EquipmentType: 0,
      Name: "Gauntlets",
      RequiredStrength: 60,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 27,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "Tearhaunch",
    Index: "Tearhaunch",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 29,
    Code: "hbt",
    Properties: [
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 3
      },
      {
        PropertyString: "+2 to Vigor (Paladin Only)",
        Index: 6
      },
      {
        PropertyString: "+60-80 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "+35 Defense",
        Index: 0
      },
      {
        PropertyString: "5 to Strength",
        Index: 1
      },
      {
        PropertyString: "5 to Dexterity",
        Index: 2
      },
      {
        PropertyString: "All Resistances +10",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "10 to 20",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "55-58",
      EquipmentType: 0,
      Name: "Greaves",
      RequiredStrength: 70,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 27,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Belt",
    Name: "Bladebuckle",
    Index: "Bladebuckle",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 29,
    Code: "hbl",
    Properties: [
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 6
      },
      {
        PropertyString: "+80-100 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "+30 Defense",
        Index: 1
      },
      {
        PropertyString: "5 to Strength",
        Index: 3
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 4
      },
      {
        PropertyString: "+3 Damage Reduced by",
        Index: 2
      },
      {
        PropertyString: "+8 Attacker Takes Damage of",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "46-48",
      EquipmentType: 0,
      Name: "Plated Belt",
      RequiredStrength: 60,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 27,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Ring",
    Name: "The Stone of Jordan",
    Index: "The Stone of Jordan",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 29,
    Code: "rin",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 3
      },
      {
        PropertyString: "Adds 25-50 Lightning damage",
        Index: 2
      },
      {
        PropertyString: "+20 to Mana",
        Index: 0
      },
      {
        PropertyString: "+25 Increase Maximum Mana",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Ring",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Ring",
        Index: "Ring",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Armor",
    Name: "Skin of the Vipermagi",
    Index: "Skin of the Vipermagi",
    Enabled: true,
    ItemLevel: 37,
    RequiredLevel: 29,
    Code: "xea",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 4
      },
      {
        PropertyString: "+30 Faster Cast Rate",
        Index: 2
      },
      {
        PropertyString: "+120 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "All Resistances +20-35",
        Index: 1
      },
      {
        PropertyString: "+9-13 Magic Damage Reduced by",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "246",
      EquipmentType: 0,
      Name: "Serpentskin Armor",
      RequiredStrength: 43,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 36,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Venom Grip",
    Index: "Venom Grip",
    Enabled: true,
    ItemLevel: 37,
    RequiredLevel: 29,
    Code: "xlg",
    Properties: [
      {
        PropertyString: "+153 to Minimum Poison Damage",
        Index: 2
      },
      {
        PropertyString: "+5 Life stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+5 Chance of Crushing Blow",
        Index: 3
      },
      {
        PropertyString: "+130-160 Enhanced Defense",
        Index: 6
      },
      {
        PropertyString: "+15-25 Defense",
        Index: 5
      },
      {
        PropertyString: "+5 to Maximum Poison Resist",
        Index: 1
      },
      {
        PropertyString: "Poison Resist +30%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "81-100",
      EquipmentType: 0,
      Name: "Demonhide Gloves",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 33,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "Infernostride",
    Index: "Infernostride",
    Enabled: true,
    ItemLevel: 37,
    RequiredLevel: 29,
    Code: "xlb",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 8 blaze when struck",
        Index: 8
      },
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 1
      },
      {
        PropertyString: "Adds 12-33 to Fire Damage",
        Index: 0
      },
      {
        PropertyString: "+120-150 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "+15 Defense",
        Index: 7
      },
      {
        PropertyString: "+10 to Maximum Fire Resist",
        Index: 2
      },
      {
        PropertyString: "Fire Resist +30%",
        Index: 3
      },
      {
        PropertyString: "+40-70 extra gold from monsters",
        Index: 6
      },
      {
        PropertyString: "2 to Light Radius",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "26 to 46",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "78-87",
      EquipmentType: 0,
      Name: "Demonhide Boots",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 36,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Belt",
    Name: "String of Ears",
    Index: "String of Ears",
    Enabled: true,
    ItemLevel: 37,
    RequiredLevel: 29,
    Code: "zlb",
    Properties: [
      {
        PropertyString: "Adds 6-8 Life stolen per hit",
        Index: 2
      },
      {
        PropertyString: "+150-180 Enhanced Defense",
        Index: 3
      },
      {
        PropertyString: "+15 Defense",
        Index: 4
      },
      {
        PropertyString: "+10-15 Damage Reduced by 10-15%%",
        Index: 1
      },
      {
        PropertyString: "+10-15 Magic Damage Reduced by",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "90-99",
      EquipmentType: 0,
      Name: "Demonhide Sash",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 22,
      ItemLevel: 36,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Sword",
    Name: "Ettercap",
    Index: "Ettercap",
    Enabled: true,
    ItemLevel: 27,
    RequiredLevel: 29,
    Code: "gis",
    Properties: [
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 2
      },
      {
        PropertyString: "+35-45 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+70-90 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "75 to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "Poison Resist +40-50%",
        Index: 3
      },
      {
        PropertyString: "+8-10 Life after each Kill",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(38-48) to (86-106)"
        },
        {
          Type: 1,
          DamageString: "(44-54) to (98-118)"
        }
      ],
      EquipmentType: 1,
      Name: "Giant Sword",
      RequiredStrength: 56,
      RequiredDexterity: 34,
      Durability: 250,
      ItemLevel: 21,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Warrior's Challenge",
    Index: "Warrior's Challenge",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 29,
    Code: "flb",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+135-190% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+5 Mana stolen per hit",
        Index: 4
      },
      {
        PropertyString: "Adds 5-7 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+5 to Taunt (Barbarian Only)",
        Index: 1
      },
      {
        PropertyString: "+5 to Battle Cry (Barbarian Only)",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(21-26) to (35-43)"
        },
        {
          Type: 1,
          DamageString: "(30-37) to (61-75)"
        }
      ],
      EquipmentType: 1,
      Name: "Flamberge",
      RequiredStrength: 70,
      RequiredDexterity: 49,
      Durability: 250,
      ItemLevel: 27,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Mace",
    Name: "Dawn's Mist",
    Index: "Dawn's Mist",
    Enabled: true,
    ItemLevel: 30,
    RequiredLevel: 29,
    Code: "mst",
    Properties: [
      {
        PropertyString: "+1 Indestructible",
        Index: 2
      },
      {
        PropertyString: "+1 Indestructible",
        Index: 3
      },
      {
        PropertyString: "+1",
        Index: 4
      },
      {
        PropertyString: "+10-15 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+50-60 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Socketed (2)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(17-22) to (66-76)"
        }
      ],
      EquipmentType: 1,
      Name: "Morning Star",
      RequiredStrength: 36,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 13,
      Type: {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Mace",
    Name: "The Quickening",
    Index: "Quickening",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 29,
    Code: "fla",
    Properties: [
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 4
      },
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 5
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 6
      },
      {
        PropertyString: "+30-40 to Minimum Damage",
        Index: 1
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(32-43) to (60-72)"
        }
      ],
      EquipmentType: 1,
      Name: "Flail",
      RequiredStrength: 41,
      RequiredDexterity: 35,
      Durability: 250,
      ItemLevel: 19,
      Type: {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Scepter",
    Name: "Dawnskein",
    Index: "Dawnskein",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 29,
    Code: "wsp",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 2
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 10-20 to Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 5-8 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "to Life",
        Index: 6
      },
      {
        PropertyString: "+ to Mana",
        Index: 5
      },
      {
        PropertyString: "3-7 to Light Radius",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(35-40) to (62-71)"
        }
      ],
      EquipmentType: 1,
      Name: "War Scepter",
      RequiredStrength: 55,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 21,
      Type: {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Knife",
    Name: "Dragon Talon",
    Index: "Dragon Talon",
    Enabled: true,
    ItemLevel: 25,
    RequiredLevel: 29,
    Code: "kri",
    Properties: [
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 3
      },
      {
        PropertyString: "Adds 30-55 to Damage",
        Index: 0
      },
      {
        PropertyString: "+5 Mana stolen per hit",
        Index: 2
      },
      {
        PropertyString: "+15-20 Chance of Crushing Blow",
        Index: 1
      },
      {
        PropertyString: "+1-5 to Poison Dagger",
        Index: 5
      },
      {
        PropertyString: "Socketed (1)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "32 to 66"
        }
      ],
      EquipmentType: 1,
      Name: "Kris",
      RequiredStrength: 0,
      RequiredDexterity: 45,
      Durability: 250,
      ItemLevel: 17,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Knife",
    Name: "Deathprick",
    Index: "Deathprick",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 29,
    Code: "bld",
    Properties: [
      {
        PropertyString: "+15 Faster Run/Walk",
        Index: 6
      },
      {
        PropertyString: "+15 Faster Block Rate",
        Index: 5
      },
      {
        PropertyString: "10-15% Increased Chance of Blocking",
        Index: 4
      },
      {
        PropertyString: "Adds 15-30 to Damage",
        Index: 0
      },
      {
        PropertyString: "+145 to Minimum Poison Damage",
        Index: 1
      },
      {
        PropertyString: "+15-25 Chance of Crushing Blow",
        Index: 3
      },
      {
        PropertyString: "+15-25 Deadly Strike",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "19 to 45"
        }
      ],
      EquipmentType: 1,
      Name: "Blade",
      RequiredStrength: 35,
      RequiredDexterity: 51,
      Durability: 250,
      ItemLevel: 23,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Axe of Sytherdan",
    Index: "Axe of Sytherdan",
    Enabled: true,
    ItemLevel: 31,
    RequiredLevel: 29,
    Code: "pax",
    Properties: [
      {
        PropertyString: "+35-45 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+80-90 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "100 to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "Lightning Resist +25%",
        Index: 3
      },
      {
        PropertyString: "Fire Resist +%",
        Index: 2
      },
      {
        PropertyString: "Repairs 0.2 durability per second",
        Index: 5
      },
      {
        PropertyString: "Socketed (1-2)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(53-63) to (119-129)"
        }
      ],
      EquipmentType: 1,
      Name: "Poleaxe",
      RequiredStrength: 62,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 21,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Touch of Evil",
    Index: "Touch of Evil",
    Enabled: true,
    ItemLevel: 29,
    RequiredLevel: 29,
    Code: "lst",
    Properties: [
      {
        PropertyString: "8% Chance to cast level 2 weaken on striking",
        Index: 2
      },
      {
        PropertyString: "+1",
        Index: 3
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 4
      },
      {
        PropertyString: "+20-30 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+60-90 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+221-250 to Left Hand Throw",
        Index: 6
      },
      {
        PropertyString: "+45 to Mana",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(22-32) to (68-98)"
        }
      ],
      EquipmentType: 1,
      Name: "Long Staff",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 8,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Riddlesolver",
    Index: "Riddlesolver",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 29,
    Code: "wst",
    Properties: [
      {
        PropertyString: "+1",
        Index: 4
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+25 Faster Cast Rate",
        Index: 5
      },
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 6
      },
      {
        PropertyString: "+36-65 to Throw",
        Index: 1
      },
      {
        PropertyString: "+36-65 to Unsummon",
        Index: 2
      },
      {
        PropertyString: "+36-65 to Unsummon",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(30-36) to (70-84)"
        }
      ],
      EquipmentType: 1,
      Name: "War Staff",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 24,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Shayira's Flight",
    Index: "Shayira's Flight",
    Enabled: true,
    ItemLevel: 28,
    RequiredLevel: 29,
    Code: "sbb",
    Properties: [
      {
        PropertyString: "+100-130% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "Adds 10-20 to Damage",
        Index: 4
      },
      {
        PropertyString: "Adds 80-100 to Fire Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 10-200 to Lightning Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 40-50 to Cold Damage",
        Index: 2
      },
      {
        PropertyString: "5 to Strength",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(20-21) to (42-45)"
        }
      ],
      EquipmentType: 1,
      Name: "Short Battle Bow",
      RequiredStrength: 30,
      RequiredDexterity: 40,
      Durability: 0,
      ItemLevel: 18,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Ranger's Sting",
    Index: "Ranger's Sting",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 29,
    Code: "swb",
    Properties: [
      {
        PropertyString: "+2",
        Index: 2
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+5-15 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+30-45 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+6 Mana stolen per hit",
        Index: 6
      },
      {
        PropertyString: "+6 to Strafe",
        Index: 4
      },
      {
        PropertyString: "35 to Dexterity",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(11-21) to (44-59)"
        }
      ],
      EquipmentType: 1,
      Name: "Short War Bow",
      RequiredStrength: 35,
      RequiredDexterity: 55,
      Durability: 0,
      ItemLevel: 27,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Baba Yaga's Needle",
    Index: "Baba Yaga's Needle",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 29,
    Code: "tsp",
    Properties: [
      {
        PropertyString: "+25 Faster Run/Walk",
        Index: 4
      },
      {
        PropertyString: "+100-145% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 6-8 Life stolen per hit",
        Index: 2
      },
      {
        PropertyString: "Poison Resist +25-40%",
        Index: 3
      },
      {
        PropertyString: "+3-7 Magic Absorb",
        Index: 6
      },
      {
        PropertyString: "+40 Increased Stack Size",
        Index: 5
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(10-12) to (30-36)"
        },
        {
          Type: 2,
          DamageString: "(24-29) to (60-73)"
        }
      ],
      EquipmentType: 1,
      Name: "Throwing Spear",
      RequiredStrength: 0,
      RequiredDexterity: 65,
      Durability: 250,
      ItemLevel: 29,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Armor",
    Name: "Dreamscape",
    Index: "Dreamscape",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 29,
    Code: "fld",
    Properties: [
      {
        PropertyString: "+30 Faster Block Rate",
        Index: 4
      },
      {
        PropertyString: "15% Increased Chance of Blocking",
        Index: 3
      },
      {
        PropertyString: "Hit blinds target +2",
        Index: 1
      },
      {
        PropertyString: "+260-300 Defense",
        Index: 0
      },
      {
        PropertyString: "20 to Vitality",
        Index: 2
      },
      {
        PropertyString: "Socketed (1-2)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "361-401",
      EquipmentType: 0,
      Name: "Field Plate",
      RequiredStrength: 55,
      RequiredDexterity: 0,
      Durability: 48,
      ItemLevel: 28,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Knight's Dawn",
    Index: "Knight's Dawn",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 29,
    Code: "tow",
    Properties: [
      {
        PropertyString: "+1",
        Index: 3
      },
      {
        PropertyString: "+30 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "25-35% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "+1 to Holy Shield",
        Index: 4
      },
      {
        PropertyString: "+1-3 to Vengeance",
        Index: 5
      },
      {
        PropertyString: "+1-2 to Concentration",
        Index: 6
      },
      {
        PropertyString: "+120-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "Socketed (2-3)",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "1 to 5",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "50-57",
      EquipmentType: 0,
      Name: "Tower Shield",
      RequiredStrength: 75,
      RequiredDexterity: 0,
      Durability: 60,
      ItemLevel: 22,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Shield of Osirus",
    Index: "Shield of Osirus",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 29,
    Code: "gts",
    Properties: [
      {
        PropertyString: "Level 6 Cleansing Aura When Equipped",
        Index: 6
      },
      {
        PropertyString: "1 to All Skills",
        Index: 3
      },
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 5
      },
      {
        PropertyString: "+40 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "30-40% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "+125-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+2-5 Replenish Life",
        Index: 8
      },
      {
        PropertyString: "Regenerate Mana 35%",
        Index: 7
      },
      {
        PropertyString: "All Resistances +25",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "2 to 6",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "69-77",
      EquipmentType: 0,
      Name: "Gothic Shield",
      RequiredStrength: 60,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 30,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Orb",
    Name: "Dreamsplitter",
    Index: "Dreamsplitter",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 29,
    Code: "ob6",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+36-60 to Fire Arrow (Amazon Only)",
        Index: 1
      },
      {
        PropertyString: "15-25 to Strength",
        Index: 2
      },
      {
        PropertyString: "+10-15 Replenish Life",
        Index: 6
      },
      {
        PropertyString: "+50-100 extra gold from monsters",
        Index: 4
      },
      {
        PropertyString: "+15-25 better chance of getting magic item",
        Index: 3
      },
      {
        PropertyString: "Socketed (2)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "8 to 21"
        }
      ],
      EquipmentType: 1,
      Name: "Glowing Orb",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 32,
      Type: {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      },
      RequiredClass: "Sorceress"
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "Janus' Face",
    Index: "Janus' Face",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 29,
    Code: "ne6",
    Properties: [
      {
        PropertyString: "+1-3 to Summoning Skills (Necromancer only)",
        Index: 3
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 7
      },
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 1
      },
      {
        PropertyString: "+20 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "25 to Enemy Poison Resistance",
        Index: 5
      },
      {
        PropertyString: "+90-110 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+3-5 to Mana after each Kill",
        Index: 4
      },
      {
        PropertyString: "10-15% Damage Taken Goes To Mana",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "74-81",
      EquipmentType: 0,
      Name: "Mummified Trophy",
      RequiredStrength: 38,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 33,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Pelt",
    Name: "Moon Shadow",
    Index: "Moonshadow",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 29,
    Code: "dr6",
    Properties: [
      {
        PropertyString: "+150-180 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+ Defense",
        Index: 5
      },
      {
        PropertyString: "20-40 to Life",
        Index: 3
      },
      {
        PropertyString: "Lightning Resist +15-30%",
        Index: 2
      },
      {
        PropertyString: "+10 Life after each Kill",
        Index: 4
      },
      {
        PropertyString: "Level 3 Fade (15 Charges)",
        Index: 6
      },
      {
        PropertyString: "Fade",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "132-148",
      EquipmentType: 0,
      Name: "Alpha Helm",
      RequiredStrength: 44,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 35,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Corpseflayer",
    Index: "Corpseflayer",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 29,
    Code: "9ar",
    Properties: [
      {
        PropertyString: "+1-3 to Shadow Disciplines (Assassin only)",
        Index: 4
      },
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+135-190% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "100-250 to Attack Rating",
        Index: 5
      },
      {
        PropertyString: "+250% Damage to Undead Damage to Undead",
        Index: 2
      },
      {
        PropertyString: "+15-25 Deadly Strike",
        Index: 3
      },
      {
        PropertyString: "10% Reanimate as: Ghoul",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(25-31) to (56-69)"
        }
      ],
      EquipmentType: 1,
      Name: "Quhab",
      RequiredStrength: 57,
      RequiredDexterity: 57,
      Durability: 250,
      ItemLevel: 28,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Small Charm",
    Name: "Tier 5 Splash Charm",
    Index: "t5 Splash Charm",
    Enabled: false,
    ItemLevel: 1,
    RequiredLevel: 29,
    Code: "cm4",
    Properties: [
      {
        PropertyString: "42 Percent Melee Splash Damage",
        Index: 0
      },
      {
        PropertyString: "-25 to -28 Enhanced Damage",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Splash Charm",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Small Charm",
        Index: "Small Charm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Bloodletter",
    Index: "Bloodletter",
    Enabled: true,
    ItemLevel: 38,
    RequiredLevel: 30,
    Code: "9ss",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+140% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "Adds 12-45 to Damage",
        Index: 0
      },
      {
        PropertyString: "90 to Attack Rating",
        Index: 1
      },
      {
        PropertyString: "+8 Life stolen per hit",
        Index: 2
      },
      {
        PropertyString: "+2-4 to Sword Mastery (Barbarian Only)",
        Index: 6
      },
      {
        PropertyString: "+1-3 to Whirlwind (Barbarian Only)",
        Index: 7
      },
      {
        PropertyString: "10% Stamina Drain",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "31 to 97"
        }
      ],
      EquipmentType: 1,
      Name: "Gladius",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 280,
      ItemLevel: 30,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Broken Earth",
    Index: "Broken Earth",
    Enabled: true,
    ItemLevel: 29,
    RequiredLevel: 30,
    Code: "mpi",
    Properties: [
      {
        PropertyString: "6% Chance to cast level 3 eruption on striking",
        Index: 2
      },
      {
        PropertyString: "+1",
        Index: 3
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+15-20 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+30-60 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Cold Resist +33%",
        Index: 5
      },
      {
        PropertyString: "Poison Resist +33%",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(22-27) to (41-71)"
        }
      ],
      EquipmentType: 1,
      Name: "Military Pick",
      RequiredStrength: 49,
      RequiredDexterity: 33,
      Durability: 250,
      ItemLevel: 19,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Deathflake",
    Index: "Deathflake",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 30,
    Code: "wax",
    Properties: [
      {
        PropertyString: "Level 2-4 Sanctuary Aura When Equipped",
        Index: 5
      },
      {
        PropertyString: "+175-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+20-30 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+200% Damage to Undead Damage to Undead",
        Index: 4
      },
      {
        PropertyString: "+5-8 Life after each Kill",
        Index: 3
      },
      {
        PropertyString: "Level 40 Raise Skeleton (2 Charges)",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(27-30) to (69-84)"
        }
      ],
      EquipmentType: 1,
      Name: "War Axe",
      RequiredStrength: 67,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 25,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Qikadar's Laughter",
    Index: "Qikadar's Laughter",
    Enabled: true,
    ItemLevel: 26,
    RequiredLevel: 30,
    Code: "flc",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 4
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+20-25 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+50-65 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "25%",
        Index: 2
      },
      {
        PropertyString: "All Resistances +20",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(29-34) to (67-82)"
        }
      ],
      EquipmentType: 1,
      Name: "Falchion",
      RequiredStrength: 33,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 11,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Club",
    Name: "Troll's Nail",
    Index: "Troll's Nail",
    Enabled: true,
    ItemLevel: 28,
    RequiredLevel: 30,
    Code: "spc",
    Properties: [
      {
        PropertyString: "+15-20 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+55-65 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+344 to Minimum Poison Damage",
        Index: 4
      },
      {
        PropertyString: "+6-9 Replenish Life",
        Index: 2
      },
      {
        PropertyString: "Regenerate Mana 60%",
        Index: 3
      },
      {
        PropertyString: "All Resistances +20",
        Index: 5
      },
      {
        PropertyString: "+10-15 Damage Reduced by",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(20-25) to (63-73)"
        }
      ],
      EquipmentType: 1,
      Name: "Spiked Club",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 4,
      Type: {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Woodclaw",
    Index: "Woodclaw",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 30,
    Code: "pik",
    Properties: [
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+180-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 10-40 to Damage",
        Index: 1
      },
      {
        PropertyString: "3-8 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "Socketed (1-6)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(49-52) to (216-229)"
        }
      ],
      EquipmentType: 1,
      Name: "Pike",
      RequiredStrength: 60,
      RequiredDexterity: 45,
      Durability: 250,
      ItemLevel: 24,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Wand",
    Name: "Ladrina's Enchantment",
    Index: "Ladrina's Enchantment",
    Enabled: true,
    ItemLevel: 30,
    RequiredLevel: 30,
    Code: "ywn",
    Properties: [
      {
        PropertyString: "Level 12 Amplify Damage (200 Charges)",
        Index: 0
      },
      {
        PropertyString: "Level 7 Life Tap (33 Charges)",
        Index: 1
      },
      {
        PropertyString: "Level 20 Static Field (19 Charges)",
        Index: 2
      },
      {
        PropertyString: "Level 27 Thunder Storm (7 Charges)",
        Index: 3
      },
      {
        PropertyString: "Level 29 Slow Missiles (112 Charges)",
        Index: 4
      },
      {
        PropertyString: "Level 15 War Cry (61 Charges)",
        Index: 5
      },
      {
        PropertyString: "Level 20 Cyclone Armor (17 Charges)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "2 to 8"
        }
      ],
      EquipmentType: 1,
      Name: "Yew Wand",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 12,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "King's Nail",
    Index: "King's Nail",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 30,
    Code: "rxb",
    Properties: [
      {
        PropertyString: "15% Chance to cast level 3 decrepify on striking",
        Index: 6
      },
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+100-125% Enhanced Damage",
        Index: 9
      },
      {
        PropertyString: "+10-20 to Minimum Damage",
        Index: 7
      },
      {
        PropertyString: "+30-50 to Maximum Damage",
        Index: 8
      },
      {
        PropertyString: "+3 Mana stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+5 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+3-5 to Guided Arrow",
        Index: 1
      },
      {
        PropertyString: "+50 extra gold from monsters",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(22-33) to (54-77)"
        }
      ],
      EquipmentType: 1,
      Name: "Repeating Crossbow",
      RequiredStrength: 40,
      RequiredDexterity: 50,
      Durability: 0,
      ItemLevel: 33,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "A Knight's Tale",
    Index: "A Knight's Tale",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 30,
    Code: "gth",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 1
      },
      {
        PropertyString: "+300-350 Defense",
        Index: 0
      },
      {
        PropertyString: "Socketed (4)",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "428-478",
      EquipmentType: 0,
      Name: "Gothic Plate",
      RequiredStrength: 70,
      RequiredDexterity: 0,
      Durability: 55,
      ItemLevel: 32,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Killing Blow",
    Index: "Killing Blow",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 30,
    Code: "aar",
    Properties: [
      {
        PropertyString: "+25 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+33 Deadly Strike",
        Index: 4
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 2
      },
      {
        PropertyString: "+2-4 to Attract",
        Index: 5
      },
      {
        PropertyString: "+1 Knockback",
        Index: 6
      },
      {
        PropertyString: "+150-200 Enhanced Defense",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "547-657",
      EquipmentType: 0,
      Name: "Ancient Armor",
      RequiredStrength: 100,
      RequiredDexterity: 0,
      Durability: 60,
      ItemLevel: 40,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Madness of Chthulu",
    Index: "Madness of Chthulu",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 30,
    Code: "ltp",
    Properties: [
      {
        PropertyString: "100% Chance to cast level 15 poison nova when you Die",
        Index: 5
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 4
      },
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 3
      },
      {
        PropertyString: "+200-250 Defense",
        Index: 0
      },
      {
        PropertyString: "20 to Strength",
        Index: 2
      },
      {
        PropertyString: "Requirements +25%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "290-340",
      EquipmentType: 0,
      Name: "Light Plate",
      RequiredStrength: 41,
      RequiredDexterity: 0,
      Durability: 60,
      ItemLevel: 35,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Fool's Crest",
    Index: "Fool's Crest",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 30,
    Code: "ghm",
    Properties: [
      {
        PropertyString: "+1 to Masteries (Barbarian only)",
        Index: 1
      },
      {
        PropertyString: "+25% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "Adds 4-6 Life stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+40-50 Defense",
        Index: 0
      },
      {
        PropertyString: "50 to Life",
        Index: 3
      },
      {
        PropertyString: "Cold Resist +25%",
        Index: 6
      },
      {
        PropertyString: "+30-40 better chance of getting magic item",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "70-80",
      EquipmentType: 0,
      Name: "Great Helm",
      RequiredStrength: 63,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 23,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Merc Equip",
    Name: "Gaiden's Loss",
    Index: "Gaiden's Loss",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 30,
    Code: "crn",
    Properties: [
      {
        PropertyString: "+1 to Shape Shifting Skills (Druid only)",
        Index: 1
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 4
      },
      {
        PropertyString: "+100% Damage to Undead Damage to Undead",
        Index: 6
      },
      {
        PropertyString: "Adds 3-5 Mana stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+45-55 Defense",
        Index: 0
      },
      {
        PropertyString: "+25 to Mana",
        Index: 2
      },
      {
        PropertyString: "+50 extra gold from monsters",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "70-80",
      EquipmentType: 0,
      Name: "Crown",
      RequiredStrength: 55,
      RequiredDexterity: 0,
      Durability: 50,
      ItemLevel: 29,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Circlet",
    Name: "Gillian's Tiara",
    Index: "Gillian's Hairpin",
    Enabled: true,
    ItemLevel: 30,
    RequiredLevel: 30,
    Code: "ci2",
    Properties: [
      {
        PropertyString: "+20 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "15-25% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "+2-4 to Teleport",
        Index: 4
      },
      {
        PropertyString: "+25 Slows target by",
        Index: 3
      },
      {
        PropertyString: "+75-150 Defense",
        Index: 0
      },
      {
        PropertyString: "+8 Replenish Life",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "115-190",
      EquipmentType: 0,
      Name: "Tiara",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 25,
      ItemLevel: 70,
      Type: {
        Name: "Circlet",
        Index: "Circlet",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Prismatic Gauntlets",
    Index: "Prismatic Gauntlets",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 30,
    Code: "tgl",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+3-5 to Minimum Damage",
        Index: 4
      },
      {
        PropertyString: "Adds 15-30 to Fire Damage",
        Index: 2
      },
      {
        PropertyString: "+45-55 Defense",
        Index: 0
      },
      {
        PropertyString: "5 to Strength",
        Index: 5
      },
      {
        PropertyString: "All Resistances +20-30",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "54-64",
      EquipmentType: 0,
      Name: "Light Gauntlets",
      RequiredStrength: 45,
      RequiredDexterity: 0,
      Durability: 18,
      ItemLevel: 20,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "Dawn Scion",
    Index: "Dawn Scion",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 30,
    Code: "tbt",
    Properties: [
      {
        PropertyString: "+1-2 to Defensive Auras (Paladin only)",
        Index: 1
      },
      {
        PropertyString: "+15 Faster Hit Recovery",
        Index: 4
      },
      {
        PropertyString: "+35-45 Defense",
        Index: 0
      },
      {
        PropertyString: "5-15 to Strength",
        Index: 2
      },
      {
        PropertyString: "1-2 to Experience Gained",
        Index: 3
      },
      {
        PropertyString: "+20-30 better chance of getting magic item",
        Index: 5
      },
      {
        PropertyString: "1-3 to Light Radius",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "8 to 16",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "44-54",
      EquipmentType: 0,
      Name: "Light Plated Boots",
      RequiredStrength: 50,
      RequiredDexterity: 0,
      Durability: 18,
      ItemLevel: 20,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Belt",
    Name: "Crocodile Wrap",
    Index: "Crocodile Wrap",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 30,
    Code: "tbl",
    Properties: [
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 2
      },
      {
        PropertyString: "+75-100 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "10 to Strength",
        Index: 5
      },
      {
        PropertyString: "10 to Vitality",
        Index: 6
      },
      {
        PropertyString: "All Resistances +10",
        Index: 4
      },
      {
        PropertyString: "+10 Damage Reduced by 10%%",
        Index: 1
      },
      {
        PropertyString: "+3-5 Magic Damage Reduced by",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "12-14",
      EquipmentType: 0,
      Name: "Heavy Belt",
      RequiredStrength: 45,
      RequiredDexterity: 0,
      Durability: 18,
      ItemLevel: 20,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Belt",
    Name: "Leash of Cerebus",
    Index: "Leash of Cerebus",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 30,
    Code: "hbl",
    Properties: [
      {
        PropertyString: "+1-3 to Summoning Skills (Druid only)",
        Index: 3
      },
      {
        PropertyString: "+15 Faster Hit Recovery",
        Index: 6
      },
      {
        PropertyString: "+1-3 to Summon Spirit Wolf (Druid Only)",
        Index: 4
      },
      {
        PropertyString: "+1-3 to Summon Fenris (Druid Only)",
        Index: 5
      },
      {
        PropertyString: "+125-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "10 to Strength",
        Index: 1
      },
      {
        PropertyString: "+3 Replenish Life",
        Index: 2
      },
      {
        PropertyString: "Lightning Resist +35-45%",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "20-22",
      EquipmentType: 0,
      Name: "Plated Belt",
      RequiredStrength: 60,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 27,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "Undead Beholder",
    Index: "Undead Beholder",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 30,
    Code: "ne5",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 1
      },
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 4
      },
      {
        PropertyString: "+15 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "25% Increased Chance of Blocking",
        Index: 2
      },
      {
        PropertyString: "+45-60 Defense",
        Index: 0
      },
      {
        PropertyString: "+8-10 Life after each Kill",
        Index: 6
      },
      {
        PropertyString: "+5-7 to Mana after each Kill",
        Index: 7
      },
      {
        PropertyString: "Repairs 0.2 durability per second",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "60-75",
      EquipmentType: 0,
      Name: "         ",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 24,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Auric Shields",
    Name: "Twilight Presence",
    Index: "Twilight Presence",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 30,
    Code: "pa6",
    Properties: [
      {
        PropertyString: "+30 Faster Run/Walk",
        Index: 4
      },
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 6
      },
      {
        PropertyString: "25% Increased Chance of Blocking",
        Index: 5
      },
      {
        PropertyString: "25 bonus to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "+100% Damage to Demons Damage to Demons",
        Index: 3
      },
      {
        PropertyString: "Hit blinds target +3",
        Index: 1
      },
      {
        PropertyString: "+100-140 Enhanced Defense",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "12 to 16",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "204-244",
      EquipmentType: 0,
      Name: "Akaran Targe",
      RequiredStrength: 44,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 35,
      Type: {
        Name: "Auric Shields",
        Index: "Auric Shields",
        Class: "pal"
      },
      RequiredClass: "Paladin"
    }
  },
  {
    Type: "Primal Helm",
    Name: "Deadgaze",
    Index: "Deadgaze",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 30,
    Code: "ba6",
    Properties: [
      {
        PropertyString: "15% Increased Chance of Blocking",
        Index: 6
      },
      {
        PropertyString: "+8 Mana stolen per hit",
        Index: 3
      },
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 1
      },
      {
        PropertyString: "77%",
        Index: 2
      },
      {
        PropertyString: "+100-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+35-50 to Mana",
        Index: 4
      },
      {
        PropertyString: "Lightning Resist +25%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "112-140",
      EquipmentType: 0,
      Name: "Jawbone Visor",
      RequiredStrength: 58,
      RequiredDexterity: 0,
      Durability: 25,
      ItemLevel: 33,
      Type: {
        Name: "Primal Helm",
        Index: "Primal Helm",
        Class: "bar"
      },
      RequiredClass: "Barbarian"
    }
  },
  {
    Type: "Pelt",
    Name: "Lion's Pride",
    Index: "Lion's Pride",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 30,
    Code: "dr5",
    Properties: [
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 4
      },
      {
        PropertyString: "+5 to Minimum Damage",
        Index: 3
      },
      {
        PropertyString: "+20 Deadly Strike",
        Index: 2
      },
      {
        PropertyString: "+120-140 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "20 to Strength",
        Index: 1
      },
      {
        PropertyString: "to Strength",
        Index: 5
      },
      {
        PropertyString: "+30 better chance of getting magic item",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "50-55",
      EquipmentType: 0,
      Name: "         ",
      RequiredStrength: 30,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 24,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Frostshiver",
    Index: "Frostshiver",
    Enabled: true,
    ItemLevel: 30,
    RequiredLevel: 30,
    Code: "clw",
    Properties: [
      {
        PropertyString: "4% Chance to cast level 6 frozen armor when struck",
        Index: 5
      },
      {
        PropertyString: "+1-3 to Traps (Assassin only)",
        Index: 2
      },
      {
        PropertyString: "+22-35 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+45-70 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 25-35 to Cold Damage",
        Index: 3
      },
      {
        PropertyString: "Freezes target +3",
        Index: 4
      },
      {
        PropertyString: "Cold Resist +25-35%",
        Index: 7
      },
      {
        PropertyString: "Level 6 Glacial Spike (81 Charges)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(30-43) to (60-85)"
        }
      ],
      EquipmentType: 1,
      Name: "Claws",
      RequiredStrength: 46,
      RequiredDexterity: 46,
      Durability: 250,
      ItemLevel: 18,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Amulet",
    Name: "Sequence of Seasons",
    Index: "Sequence of Seasons",
    Enabled: true,
    ItemLevel: 30,
    RequiredLevel: 30,
    Code: "amu",
    Properties: [
      {
        PropertyString: "Level 1 Thorns Aura When Equipped",
        Index: 4
      },
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "Adds 30-50 to Fire Damage",
        Index: 3
      },
      {
        PropertyString: "Adds 1-70 to Lightning Damage",
        Index: 2
      },
      {
        PropertyString: "Adds 15-25 to Cold Damage",
        Index: 1
      },
      {
        PropertyString: "+6-8 Replenish Life",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Amulet",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Amulet",
        Index: "Amulet",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Sword",
    Name: "Coldsteel Eye",
    Index: "Coldsteel Eye",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 31,
    Code: "9sm",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+200-250% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "+6 Mana stolen per hit",
        Index: 6
      },
      {
        PropertyString: "+50 Deadly Strike",
        Index: 2
      },
      {
        PropertyString: "Hit blinds target +1",
        Index: 0
      },
      {
        PropertyString: "+30 Slows target by",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(24-28) to (63-73)"
        }
      ],
      EquipmentType: 1,
      Name: "Cutlass",
      RequiredStrength: 25,
      RequiredDexterity: 52,
      Durability: 300,
      ItemLevel: 43,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "The Impaler",
    Index: "The Impaler",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 31,
    Code: "9sr",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+140-170% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 0
      },
      {
        PropertyString: "150 to Attack Rating",
        Index: 1
      },
      {
        PropertyString: "40% Chance of Open Wounds",
        Index: 3
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 4
      },
      {
        PropertyString: "+5 to Impale (Amazon Only)",
        Index: 6
      },
      {
        PropertyString: "+3 to Power Strike (Amazon Only)",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(24-27) to (88-99)"
        }
      ],
      EquipmentType: 1,
      Name: "War Spear",
      RequiredStrength: 25,
      RequiredDexterity: 25,
      Durability: 250,
      ItemLevel: 33,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Ribcracker",
    Index: "Ribcracker",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 31,
    Code: "8ls",
    Properties: [
      {
        PropertyString: "+50 Increased Attack Speed",
        Index: 7
      },
      {
        PropertyString: "+200-300% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "+50 Faster Hit Recovery",
        Index: 6
      },
      {
        PropertyString: "Adds 30-65 to Damage",
        Index: 0
      },
      {
        PropertyString: "+50 Chance of Crushing Blow",
        Index: 2
      },
      {
        PropertyString: "+100 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "+100 Defense",
        Index: 4
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(54-62) to (143-169)"
        }
      ],
      EquipmentType: 1,
      Name: "Quarterstaff",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 350,
      ItemLevel: 35,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Riphook",
    Index: "Riphook",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 31,
    Code: "8hb",
    Properties: [
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+180-220% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 7-10 Life stolen per hit",
        Index: 5
      },
      {
        PropertyString: "30% Chance of Open Wounds",
        Index: 0
      },
      {
        PropertyString: "+30 Slows target by",
        Index: 2
      },
      {
        PropertyString: "+35 to Mana",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(22-25) to (61-70)"
        }
      ],
      EquipmentType: 1,
      Name: "Razor Bow",
      RequiredStrength: 25,
      RequiredDexterity: 62,
      Durability: 0,
      ItemLevel: 33,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Rockstopper",
    Index: "Rockstopper",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 31,
    Code: "xkp",
    Properties: [
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "+160-220 Enhanced Defense",
        Index: 3
      },
      {
        PropertyString: "15 to Vitality",
        Index: 6
      },
      {
        PropertyString: "Cold Resist +20-40%",
        Index: 5
      },
      {
        PropertyString: "Lightning Resist +20-40%",
        Index: 0
      },
      {
        PropertyString: "Fire Resist +20-50%",
        Index: 4
      },
      {
        PropertyString: "+10 Damage Reduced by 10%%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "137-169",
      EquipmentType: 0,
      Name: "Sallet",
      RequiredStrength: 43,
      RequiredDexterity: 0,
      Durability: 18,
      ItemLevel: 37,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Armor",
    Name: "Skin of the Flayed One",
    Index: "Skin of the Flayerd One",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 31,
    Code: "xla",
    Properties: [
      {
        PropertyString: "Adds 5-7 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+150-190 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "+15-25 Replenish Life",
        Index: 1
      },
      {
        PropertyString: "+15 Attacker Takes Damage of",
        Index: 5
      },
      {
        PropertyString: "Repairs 0.1 durability per second",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "307-356",
      EquipmentType: 0,
      Name: "Demonhide Armor",
      RequiredStrength: 50,
      RequiredDexterity: 0,
      Durability: 58,
      ItemLevel: 37,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Moser's Blessed Circle",
    Index: "Mosers Blessed Circle",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 31,
    Code: "xml",
    Properties: [
      {
        PropertyString: "+30 Faster Block Rate",
        Index: 4
      },
      {
        PropertyString: "25% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "+180-220 Enhanced Defense",
        Index: 3
      },
      {
        PropertyString: "All Resistances +25",
        Index: 0
      },
      {
        PropertyString: "Socketed (2)",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "7 to 14",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "134-153",
      EquipmentType: 0,
      Name: "Round Shield",
      RequiredStrength: 53,
      RequiredDexterity: 0,
      Durability: 64,
      ItemLevel: 37,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Quartz Star",
    Index: "Quartz Star",
    Enabled: true,
    ItemLevel: 27,
    RequiredLevel: 31,
    Code: "crs",
    Properties: [
      {
        PropertyString: "+15 Faster Block Rate",
        Index: 3
      },
      {
        PropertyString: "Adds 30-65 to Damage",
        Index: 0
      },
      {
        PropertyString: "+6 Mana stolen per hit",
        Index: 1
      },
      {
        PropertyString: "20 to Dexterity",
        Index: 4
      },
      {
        PropertyString: "Fire Resist +25%",
        Index: 2
      },
      {
        PropertyString: "+35 better chance of getting magic item",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "35 to 80"
        }
      ],
      EquipmentType: 1,
      Name: "Crystal Sword",
      RequiredStrength: 43,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 11,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Orc Slayer",
    Index: "Orc Slayer",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 31,
    Code: "wsd",
    Properties: [
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 10-20 to Damage",
        Index: 1
      },
      {
        PropertyString: "100 to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "+100% Damage to Demons Damage to Demons",
        Index: 2
      },
      {
        PropertyString: "35-50% Chance of Open Wounds",
        Index: 5
      },
      {
        PropertyString: "+15 to Maximum Poison Resist",
        Index: 6
      },
      {
        PropertyString: "+20 Life after each Demon Kill",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(26-30) to (60-70)"
        }
      ],
      EquipmentType: 1,
      Name: "War Sword",
      RequiredStrength: 71,
      RequiredDexterity: 45,
      Durability: 250,
      ItemLevel: 27,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Snowy Sky",
    Index: "Snowy Sky",
    Enabled: true,
    ItemLevel: 32,
    RequiredLevel: 31,
    Code: "hal",
    Properties: [
      {
        PropertyString: "+40-50 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+80-100 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 25-50 to Cold Damage",
        Index: 4
      },
      {
        PropertyString: "+2 Knockback",
        Index: 3
      },
      {
        PropertyString: "Poison Resist +30%",
        Index: 6
      },
      {
        PropertyString: "+3-5 to Mana after each Kill",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(52-62) to (125-145)"
        }
      ],
      EquipmentType: 1,
      Name: "Halberd",
      RequiredStrength: 75,
      RequiredDexterity: 47,
      Durability: 290,
      ItemLevel: 29,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Final Flight",
    Index: "Finalflight",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 31,
    Code: "lwb",
    Properties: [
      {
        PropertyString: "10% Chance to cast level 1 teleport when struck",
        Index: 5
      },
      {
        PropertyString: "+100-125% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "+10-20 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+40-60 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 3
      },
      {
        PropertyString: "+100 Defense",
        Index: 6
      },
      {
        PropertyString: "5 to Experience Gained",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(16-26) to (86-111)"
        }
      ],
      EquipmentType: 1,
      Name: "Long War Bow",
      RequiredStrength: 50,
      RequiredDexterity: 65,
      Durability: 0,
      ItemLevel: 31,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Several Kill",
    Index: "Severalkill",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 31,
    Code: "9ja",
    Properties: [
      {
        PropertyString: "+165-210% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+25 Chance of Crushing Blow",
        Index: 6
      },
      {
        PropertyString: "Cold Resist +20-30%",
        Index: 3
      },
      {
        PropertyString: "Fire Resist +20-30%",
        Index: 4
      },
      {
        PropertyString: "+12 Life after each Kill",
        Index: 5
      },
      {
        PropertyString: "+25 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(15-18) to (50-58)"
        },
        {
          Type: 2,
          DamageString: "(37-43) to (84-99)"
        }
      ],
      EquipmentType: 1,
      Name: "War Javelin",
      RequiredStrength: 25,
      RequiredDexterity: 25,
      Durability: 250,
      ItemLevel: 30,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Shield",
    Name: "Pathfinder",
    Index: "Pathfinder",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 31,
    Code: "gts",
    Properties: [
      {
        PropertyString: "+30 Faster Run/Walk",
        Index: 6
      },
      {
        PropertyString: "+100-125 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+ Defense",
        Index: 1
      },
      {
        PropertyString: "to Strength",
        Index: 2
      },
      {
        PropertyString: "to Dexterity",
        Index: 3
      },
      {
        PropertyString: "to Vitality",
        Index: 4
      },
      {
        PropertyString: "to Energy",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "2 to 6",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "62-69",
      EquipmentType: 0,
      Name: "Gothic Shield",
      RequiredStrength: 60,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 30,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Firesign",
    Index: "Firesign",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 31,
    Code: "hgl",
    Properties: [
      {
        PropertyString: "+1 to Fire Skills",
        Index: 7
      },
      {
        PropertyString: "Adds 20-35 to Fire Damage",
        Index: 1
      },
      {
        PropertyString: "+125-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+5 to Maximum Fire Resist",
        Index: 3
      },
      {
        PropertyString: "Fire Resist +35-45%",
        Index: 2
      },
      {
        PropertyString: "+5 Fire Absorb",
        Index: 4
      },
      {
        PropertyString: "+1 Half Freeze Duration",
        Index: 5
      },
      {
        PropertyString: "2-4 to Light Radius",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "29-32",
      EquipmentType: 0,
      Name: "Gauntlets",
      RequiredStrength: 60,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 27,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Primal Helm",
    Name: "Warsummoner",
    Index: "Warsummoner",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 31,
    Code: "ba5",
    Properties: [
      {
        PropertyString: "+1-3 to Warcries (Barbarian only)",
        Index: 1
      },
      {
        PropertyString: "+2 to Revive",
        Index: 2
      },
      {
        PropertyString: "+100-125 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "15-20 to Strength",
        Index: 7
      },
      {
        PropertyString: "Poison Resist +35%",
        Index: 4
      },
      {
        PropertyString: "+8-10 Lightning Absorb",
        Index: 6
      },
      {
        PropertyString: "+8-10 Fire Absorb",
        Index: 5
      },
      {
        PropertyString: "3-5 to Experience Gained",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "72-81",
      EquipmentType: 0,
      Name: "Avenger Guard",
      RequiredStrength: 65,
      RequiredDexterity: 0,
      Durability: 55,
      ItemLevel: 24,
      Type: {
        Name: "Primal Helm",
        Index: "Primal Helm",
        Class: "bar"
      },
      RequiredClass: "Barbarian"
    }
  },
  {
    Type: "Knife",
    Name: "Spineripper",
    Index: "Spineripper",
    Enabled: true,
    ItemLevel: 40,
    RequiredLevel: 32,
    Code: "9dg",
    Properties: [
      {
        PropertyString: "+1",
        Index: 7
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+200-240% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "Adds 15-27 to Damage",
        Index: 6
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 0
      },
      {
        PropertyString: "+8 Life stolen per hit",
        Index: 1
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 2
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(33-35) to (81-88)"
        }
      ],
      EquipmentType: 1,
      Name: "Poignard",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 31,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Langer Briser",
    Index: "Langer Briser",
    Enabled: true,
    ItemLevel: 40,
    RequiredLevel: 32,
    Code: "8lx",
    Properties: [
      {
        PropertyString: "+170-200% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "+10-30 to Maximum Damage",
        Index: 4
      },
      {
        PropertyString: "Adds 1-212 to Lightning Damage",
        Index: 6
      },
      {
        PropertyString: "33% Chance of Open Wounds",
        Index: 5
      },
      {
        PropertyString: "+1 Knockback",
        Index: 0
      },
      {
        PropertyString: "30 to Life",
        Index: 3
      },
      {
        PropertyString: "+30-60 better chance of getting magic item",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(37-42) to (82-111)"
        }
      ],
      EquipmentType: 1,
      Name: "Arbalest",
      RequiredStrength: 52,
      RequiredDexterity: 61,
      Durability: 0,
      ItemLevel: 34,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Gravepalm",
    Index: "Gravepalm",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 32,
    Code: "xvg",
    Properties: [
      {
        PropertyString: "+100-200% Damage to Undead Damage to Undead",
        Index: 2
      },
      {
        PropertyString: "100-200 to Attack Rating against Undead",
        Index: 3
      },
      {
        PropertyString: "+140-180 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "10 to Strength",
        Index: 1
      },
      {
        PropertyString: "10 to Energy",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "81-95",
      EquipmentType: 0,
      Name: "Sharkskin Gloves",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 39,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "Waterwalk",
    Index: "Waterwalk",
    Enabled: true,
    ItemLevel: 40,
    RequiredLevel: 32,
    Code: "xvb",
    Properties: [
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 1
      },
      {
        PropertyString: "+180-210 Enhanced Defense",
        Index: 3
      },
      {
        PropertyString: "+100 Defense vs. Missile",
        Index: 0
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 2
      },
      {
        PropertyString: "45-65 to Life",
        Index: 4
      },
      {
        PropertyString: "+50 Heal Stamina Plus",
        Index: 7
      },
      {
        PropertyString: "+5 to Maximum Fire Resist",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "28 to 50",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "95-105",
      EquipmentType: 0,
      Name: "Sharkskin Boots",
      RequiredStrength: 47,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 39,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Belt",
    Name: "Razortail",
    Index: "Razortail",
    Enabled: true,
    ItemLevel: 39,
    RequiredLevel: 32,
    Code: "zvb",
    Properties: [
      {
        PropertyString: "+33 Piercing Attack",
        Index: 2
      },
      {
        PropertyString: "+10 to Maximum Damage",
        Index: 5
      },
      {
        PropertyString: "+120-150 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "+15 Defense",
        Index: 3
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 1
      },
      {
        PropertyString: "+ Attacker Takes Damage of",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "85-95",
      EquipmentType: 0,
      Name: "Sharkskin Belt",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 39,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Axe",
    Name: "Curseweaver",
    Index: "Curseweaver",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 32,
    Code: "gix",
    Properties: [
      {
        PropertyString: "12% Chance to cast level 5 decrepify on striking",
        Index: 1
      },
      {
        PropertyString: "+1",
        Index: 4
      },
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+165-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 5-7 Mana stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+1-3 to Sword Mastery",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(58-66) to (119-135)"
        }
      ],
      EquipmentType: 1,
      Name: "Giant Axe",
      RequiredStrength: 70,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 27,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Omni-Slash",
    Index: "Omni-Slash",
    Enabled: true,
    ItemLevel: 28,
    RequiredLevel: 32,
    Code: "bsd",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+100-140% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 15-35 to Damage",
        Index: 1
      },
      {
        PropertyString: "+20 Deadly Strike",
        Index: 4
      },
      {
        PropertyString: "+20 Attacker Takes Damage of",
        Index: 5
      },
      {
        PropertyString: "Socketed (2)",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(29-31) to (63-68)"
        }
      ],
      EquipmentType: 1,
      Name: "Broad Sword",
      RequiredStrength: 48,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 15,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Arctic Edge",
    Index: "Arctic Edge",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 32,
    Code: "gsd",
    Properties: [
      {
        PropertyString: "19% Chance to cast level 7 ice blast on striking",
        Index: 2
      },
      {
        PropertyString: "+165-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 6-10 to Cold Damage",
        Index: 1
      },
      {
        PropertyString: "15 to Enemy Cold Resistance",
        Index: 4
      },
      {
        PropertyString: "Cold Resist +65%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(31-36) to (53-60)"
        },
        {
          Type: 1,
          DamageString: "(66-75) to (111-126)"
        }
      ],
      EquipmentType: 1,
      Name: "Great Sword",
      RequiredStrength: 100,
      RequiredDexterity: 60,
      Durability: 250,
      ItemLevel: 33,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Hammer",
    Name: "Stunhummer",
    Index: "Stunhummer",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 32,
    Code: "whm",
    Properties: [
      {
        PropertyString: "+1",
        Index: 4
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+125-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 6
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+1-4 to Sword Mastery",
        Index: 5
      },
      {
        PropertyString: "+50 Slows target by",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(42-57) to (65-87)"
        }
      ],
      EquipmentType: 1,
      Name: "War Hammer",
      RequiredStrength: 53,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 25,
      Type: {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Dragon Turtle",
    Index: "Dragon Turtle",
    Enabled: true,
    ItemLevel: 29,
    RequiredLevel: 32,
    Code: "spt",
    Properties: [
      {
        PropertyString: "+1",
        Index: 4
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 6
      },
      {
        PropertyString: "Adds 50-100 to Damage",
        Index: 0
      },
      {
        PropertyString: "All Resistances +20-30",
        Index: 2
      },
      {
        PropertyString: "+15 Damage Reduced by 15%%",
        Index: 3
      },
      {
        PropertyString: "+30-50 better chance of getting magic item",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "65 to 123"
        }
      ],
      EquipmentType: 1,
      Name: "Spetum",
      RequiredStrength: 54,
      RequiredDexterity: 35,
      Durability: 310,
      ItemLevel: 20,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Slayer's Debt",
    Index: "Slayer's Debt",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 32,
    Code: "wsc",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 2
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+175-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 15-30 to Damage",
        Index: 1
      },
      {
        PropertyString: "+1-4 to Corpse Explosion",
        Index: 6
      },
      {
        PropertyString: "-5 Drain Life",
        Index: 3
      },
      {
        PropertyString: "Requirements +20%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(56-60) to (129-138)"
        }
      ],
      EquipmentType: 1,
      Name: "War Scythe",
      RequiredStrength: 80,
      RequiredDexterity: 80,
      Durability: 250,
      ItemLevel: 34,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Wizard's Rule",
    Index: "Wizard's Rule",
    Enabled: true,
    ItemLevel: 30,
    RequiredLevel: 32,
    Code: "cst",
    Properties: [
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 5
      },
      {
        PropertyString: "+36-65 to Unsummon",
        Index: 0
      },
      {
        PropertyString: "+36-65 to Unsummon",
        Index: 1
      },
      {
        PropertyString: "+36-65 to Throw",
        Index: 2
      },
      {
        PropertyString: "+36-65 to Throw",
        Index: 3
      },
      {
        PropertyString: "All Resistances +20-30",
        Index: 6
      },
      {
        PropertyString: "+3-6 to Mana after each Kill",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "4 to 12"
        }
      ],
      EquipmentType: 1,
      Name: "Gnarled Staff",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 12,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Wand",
    Name: "Scream of Despair",
    Index: "Scream of Despair",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 32,
    Code: "gwn",
    Properties: [
      {
        PropertyString: "25% Chance to cast level 8 terror when struck",
        Index: 3
      },
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "+66-95 to Unsummon",
        Index: 1
      },
      {
        PropertyString: "+66-95 to Left Hand Swing",
        Index: 2
      },
      {
        PropertyString: "20 to Strength",
        Index: 6
      },
      {
        PropertyString: "50 to Life",
        Index: 5
      },
      {
        PropertyString: "+20 to Mana",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "5 to 11"
        }
      ],
      EquipmentType: 1,
      Name: "Grim Wand",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 26,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Kirre Strike",
    Index: "Kirre Strike",
    Enabled: true,
    ItemLevel: 29,
    RequiredLevel: 32,
    Code: "lbb",
    Properties: [
      {
        PropertyString: "+20 Piercing Attack",
        Index: 5
      },
      {
        PropertyString: "Adds 35-60 to Damage",
        Index: 0
      },
      {
        PropertyString: "+3 to Strafe",
        Index: 1
      },
      {
        PropertyString: "+1 Knockback",
        Index: 4
      },
      {
        PropertyString: "Fire Resist +15-20%",
        Index: 2
      },
      {
        PropertyString: "Poison Resist +40-50%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "38 to 78"
        }
      ],
      EquipmentType: 1,
      Name: "Long Battle Bow",
      RequiredStrength: 40,
      RequiredDexterity: 50,
      Durability: 0,
      ItemLevel: 23,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Harpo Bogglinn",
    Index: "Harpo Bogglinn",
    Enabled: true,
    ItemLevel: 32,
    RequiredLevel: 32,
    Code: "hxb",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 5
      },
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 0
      },
      {
        PropertyString: "10 to Enemy Fire Resistance",
        Index: 3
      },
      {
        PropertyString: "10 to Fire Skill Damage",
        Index: 4
      },
      {
        PropertyString: "+15 Slows target by",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "39 to 76"
        }
      ],
      EquipmentType: 1,
      Name: "Heavy Crossbow",
      RequiredStrength: 60,
      RequiredDexterity: 40,
      Durability: 0,
      ItemLevel: 24,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Splinterfreeze",
    Index: "Splinterfreeze",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 32,
    Code: "tsp",
    Properties: [
      {
        PropertyString: "100% Chance to cast level 6 frost nova on striking",
        Index: 3
      },
      {
        PropertyString: "Level 1-3 Holy Freeze Aura When Equipped",
        Index: 4
      },
      {
        PropertyString: "+180-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+1 to Frozen Orb",
        Index: 5
      },
      {
        PropertyString: "+1 to Cold Mastery",
        Index: 6
      },
      {
        PropertyString: "+75 to Mana",
        Index: 7
      },
      {
        PropertyString: "+125 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(14-15) to (42-45)"
        },
        {
          Type: 2,
          DamageString: "(33-36) to (84-90)"
        }
      ],
      EquipmentType: 1,
      Name: "Throwing Spear",
      RequiredStrength: 0,
      RequiredDexterity: 65,
      Durability: 250,
      ItemLevel: 29,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Armor",
    Name: "Kaz's Battle Armor",
    Index: "Kaz's Battle Armor",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 32,
    Code: "ful",
    Properties: [
      {
        PropertyString: "6% Chance to cast level 3 energy shield when struck",
        Index: 4
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "Adds 5-10 to Damage",
        Index: 1
      },
      {
        PropertyString: "+355-400 Defense",
        Index: 0
      },
      {
        PropertyString: "+35 to Mana",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "505-550",
      EquipmentType: 0,
      Name: "Full Plate Mail",
      RequiredStrength: 80,
      RequiredDexterity: 0,
      Durability: 70,
      ItemLevel: 37,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Rainbow Cloak",
    Index: "Rainbow Cloak",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 32,
    Code: "xui",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 2
      },
      {
        PropertyString: "+100-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+5 to Maximum Fire Resist",
        Index: 3
      },
      {
        PropertyString: "All Resistances +15-25",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "206-257",
      EquipmentType: 0,
      Name: "Ghost Armor",
      RequiredStrength: 38,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 34,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Crown of Thorns",
    Index: "Crown of Thorns",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 32,
    Code: "crn",
    Properties: [
      {
        PropertyString: "15% Chance to cast level 5 cyclone armor when struck",
        Index: 1
      },
      {
        PropertyString: "10% Chance to cast level 3 frozen armor when struck",
        Index: 2
      },
      {
        PropertyString: "Level 1-2 Thorns Aura When Equipped",
        Index: 8
      },
      {
        PropertyString: "+1",
        Index: 4
      },
      {
        PropertyString: "+37-50 Defense",
        Index: 0
      },
      {
        PropertyString: "+20-30 to Mana",
        Index: 3
      },
      {
        PropertyString: "Cold Resist +30%",
        Index: 6
      },
      {
        PropertyString: "Fire Resist +30%",
        Index: 5
      },
      {
        PropertyString: "+8-10 Damage Reduced by",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "62-75",
      EquipmentType: 0,
      Name: "Crown",
      RequiredStrength: 55,
      RequiredDexterity: 0,
      Durability: 50,
      ItemLevel: 29,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Circlet",
    Name: "Fair Weather",
    Index: "Fairweather",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 32,
    Code: "ci0",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 7
      },
      {
        PropertyString: "+140-175 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+10-15 Cold Absorb",
        Index: 3
      },
      {
        PropertyString: "+10-15 Lightning Absorb",
        Index: 2
      },
      {
        PropertyString: "+10-15 Fire Absorb",
        Index: 1
      },
      {
        PropertyString: "+1 Half Freeze Duration",
        Index: 5
      },
      {
        PropertyString: "+65-90 Poison Length Reduced by",
        Index: 4
      },
      {
        PropertyString: "Socketed (1)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "50-57",
      EquipmentType: 0,
      Name: "Circlet",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 35,
      ItemLevel: 24,
      Type: {
        Name: "Circlet",
        Index: "Circlet",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Belt",
    Name: "Pandemonium",
    Index: "Pandemonium",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 32,
    Code: "hbl",
    Properties: [
      {
        PropertyString: "+ to Maximum Damage",
        Index: 3
      },
      {
        PropertyString: "+ Defense",
        Index: 0
      },
      {
        PropertyString: "to Strength",
        Index: 1
      },
      {
        PropertyString: "to Life",
        Index: 2
      },
      {
        PropertyString: "Cold Resist +%",
        Index: 4
      },
      {
        PropertyString: "Fire Resist +%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "8",
      EquipmentType: 0,
      Name: "Plated Belt",
      RequiredStrength: 60,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 27,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Amazon Bow",
    Name: "Elvenbrand",
    Index: "Elvenbrand",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 32,
    Code: "am2",
    Properties: [
      {
        PropertyString: "+1-3 to Bow and Crossbow Skills (Amazon only)",
        Index: 2
      },
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+125-175% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+20 Piercing Attack",
        Index: 6
      },
      {
        PropertyString: "Adds 10-20 to Damage",
        Index: 7
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 5
      },
      {
        PropertyString: "20 to Dexterity",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(30-34) to (62-72)"
        }
      ],
      EquipmentType: 1,
      Name: "Reflex Bow",
      RequiredStrength: 35,
      RequiredDexterity: 60,
      Durability: 0,
      ItemLevel: 27,
      Type: {
        Name: "Amazon Bow",
        Index: "Amazon Bow",
        Class: "ama"
      },
      RequiredClass: "Amazon"
    }
  },
  {
    Type: "Orb",
    Name: "Eternity Cable",
    Index: "Eternity Cable",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 32,
    Code: "ob5",
    Properties: [
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "+36-60 to Unsummon",
        Index: 1
      },
      {
        PropertyString: "+36-60 to Unsummon",
        Index: 2
      },
      {
        PropertyString: "+36-60 to Unsummon",
        Index: 3
      },
      {
        PropertyString: "25 to Strength",
        Index: 5
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 6
      },
      {
        PropertyString: "All Resistances +25-40",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "8 to 18"
        }
      ],
      EquipmentType: 1,
      Name: "          ",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 24,
      Type: {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      },
      RequiredClass: "Sorceress"
    }
  },
  {
    Type: "Auric Shields",
    Name: "Devourer of Worlds",
    Index: "Devourer of Worlds",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 32,
    Code: "pa5",
    Properties: [
      {
        PropertyString: "+1-2",
        Index: 3
      },
      {
        PropertyString: "+25-50% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "+75-100 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "Socketed (2-4)",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "4 to 12",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "54-62",
      EquipmentType: 0,
      Name: "Crown Shield",
      RequiredStrength: 65,
      RequiredDexterity: 0,
      Durability: 60,
      ItemLevel: 24,
      Type: {
        Name: "Auric Shields",
        Index: "Auric Shields",
        Class: "pal"
      },
      RequiredClass: "Paladin"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Nightmare Razors",
    Index: "Nightmare Glove",
    Enabled: true,
    ItemLevel: 31,
    RequiredLevel: 32,
    Code: "btl",
    Properties: [
      {
        PropertyString: "+1-3 to Shadow Disciplines (Assassin only)",
        Index: 2
      },
      {
        PropertyString: "+25-35 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+60-80 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "20 bonus to Attack Rating",
        Index: 7
      },
      {
        PropertyString: "10 to Fire Skill Damage",
        Index: 3
      },
      {
        PropertyString: "10 to Lightning Skill Damage",
        Index: 4
      },
      {
        PropertyString: "Adds 4-7 Life stolen per hit",
        Index: 6
      },
      {
        PropertyString: "All Resistances +15",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(35-45) to (74-94)"
        }
      ],
      EquipmentType: 1,
      Name: "Blade Talons",
      RequiredStrength: 50,
      RequiredDexterity: 50,
      Durability: 250,
      ItemLevel: 21,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Dusk Ray",
    Index: "Dusk Ray",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 32,
    Code: "9wb",
    Properties: [
      {
        PropertyString: "Level 4-9 Cleansing Aura When Equipped",
        Index: 5
      },
      {
        PropertyString: "1 to All Skills",
        Index: 2
      },
      {
        PropertyString: "+1 to Martial Arts (Assassin only)",
        Index: 3
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 6
      },
      {
        PropertyString: "+140-180% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 20-40 to Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 40-90 to Fire Damage",
        Index: 4
      },
      {
        PropertyString: "+35 to Mana",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(51-56) to (104-115)"
        }
      ],
      EquipmentType: 1,
      Name: "Wrist Spike",
      RequiredStrength: 66,
      RequiredDexterity: 66,
      Durability: 250,
      ItemLevel: 32,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Wand",
    Name: "Suicide Branch",
    Index: "Suicide Branch",
    Enabled: true,
    ItemLevel: 41,
    RequiredLevel: 33,
    Code: "9wn",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 5
      },
      {
        PropertyString: "+50 Faster Cast Rate",
        Index: 1
      },
      {
        PropertyString: "40 to Life",
        Index: 4
      },
      {
        PropertyString: "+10 Increase Maximum Mana",
        Index: 3
      },
      {
        PropertyString: "All Resistances +10",
        Index: 2
      },
      {
        PropertyString: "+25 Attacker Takes Damage of",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "8 to 18"
        }
      ],
      EquipmentType: 1,
      Name: "Burnt Wand",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 31,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Hexfire",
    Index: "Hexfire",
    Enabled: true,
    ItemLevel: 41,
    RequiredLevel: 33,
    Code: "9sb",
    Properties: [
      {
        PropertyString: "+3 to Fire Skills",
        Index: 6
      },
      {
        PropertyString: "+140-160% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "Adds 35-40 to Damage",
        Index: 4
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 1
      },
      {
        PropertyString: "+10 to Maximum Fire Resist",
        Index: 3
      },
      {
        PropertyString: "Fire Resist +25%",
        Index: 2
      },
      {
        PropertyString: "Level 6 Hydra (36 Charges)",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(59-61) to (97-102)"
        }
      ],
      EquipmentType: 1,
      Name: "Shamshir",
      RequiredStrength: 58,
      RequiredDexterity: 58,
      Durability: 250,
      ItemLevel: 35,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Kelpie Snare",
    Index: "Kelpie Snare",
    Enabled: true,
    ItemLevel: 41,
    RequiredLevel: 33,
    Code: "9tr",
    Properties: [
      {
        PropertyString: "+140-180% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "Adds 30-50 to Damage",
        Index: 3
      },
      {
        PropertyString: "+75 Slows target by",
        Index: 0
      },
      {
        PropertyString: "10 to Strength",
        Index: 4
      },
      {
        PropertyString: "to Life",
        Index: 2
      },
      {
        PropertyString: "Fire Resist +50%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(75-83) to (138-153)"
        }
      ],
      EquipmentType: 1,
      Name: "Fuscina",
      RequiredStrength: 77,
      RequiredDexterity: 25,
      Durability: 250,
      ItemLevel: 36,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Kuko Shakaku",
    Index: "Kuko Shakaku",
    Enabled: true,
    ItemLevel: 41,
    RequiredLevel: 33,
    Code: "8lb",
    Properties: [
      {
        PropertyString: "+3 to Bow and Crossbow Skills (Amazon only)",
        Index: 5
      },
      {
        PropertyString: "+150-180% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "+7 Fires Explosive Arrows or Bolts",
        Index: 1
      },
      {
        PropertyString: "+50 Piercing Attack",
        Index: 3
      },
      {
        PropertyString: "Adds 40-180 to Fire Damage",
        Index: 4
      },
      {
        PropertyString: "+3 to Immolation Arrow (Amazon Only)",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(25-28) to (72-81)"
        }
      ],
      EquipmentType: 1,
      Name: "Cedar Bow",
      RequiredStrength: 53,
      RequiredDexterity: 49,
      Durability: 0,
      ItemLevel: 35,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Iron Pelt",
    Index: "Ironpelt",
    Enabled: true,
    ItemLevel: 41,
    RequiredLevel: 33,
    Code: "xtu",
    Properties: [
      {
        PropertyString: "+50-100 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "+ Defense",
        Index: 4
      },
      {
        PropertyString: "25 to Life",
        Index: 1
      },
      {
        PropertyString: "+15-20 Damage Reduced by",
        Index: 3
      },
      {
        PropertyString: "+10-16 Magic Damage Reduced by",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "208-278",
      EquipmentType: 0,
      Name: "Trellised Armor",
      RequiredStrength: 61,
      RequiredDexterity: 0,
      Durability: 157,
      ItemLevel: 40,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Winter Wolf",
    Index: "Winter Wolf",
    Enabled: true,
    ItemLevel: 30,
    RequiredLevel: 33,
    Code: "gax",
    Properties: [
      {
        PropertyString: "6% Chance to cast level 4 shiver armor when struck",
        Index: 4
      },
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+70-100% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "+70-80% Enhanced Damage",
        Index: 7
      },
      {
        PropertyString: "+20-30 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+55-75 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Level 8 Summon Spirit Wolf (15 Charges)",
        Index: 5
      },
      {
        PropertyString: "Socketed (1-2)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(35-46) to (106-129)"
        }
      ],
      EquipmentType: 1,
      Name: "Great Axe",
      RequiredStrength: 63,
      RequiredDexterity: 39,
      Durability: 250,
      ItemLevel: 23,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Hammer",
    Name: "Vilifier",
    Index: "Vilifier",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 33,
    Code: "gma",
    Properties: [
      {
        PropertyString: "+175-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+1 to Find Item",
        Index: 1
      },
      {
        PropertyString: "Lightning Resist +25%",
        Index: 4
      },
      {
        PropertyString: "Fire Resist +25%",
        Index: 3
      },
      {
        PropertyString: "+ better chance of getting magic item",
        Index: 5
      },
      {
        PropertyString: "Repairs 0.04 durability per second",
        Index: 2
      },
      {
        PropertyString: "Socketed (1-2)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(104-114) to (159-174)"
        }
      ],
      EquipmentType: 1,
      Name: "Great Maul",
      RequiredStrength: 99,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 32,
      Type: {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Wand",
    Name: "Skeleton's Claw",
    Index: "Skeleton's Claw",
    Enabled: true,
    ItemLevel: 34,
    RequiredLevel: 33,
    Code: "bwn",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 7
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+10-20 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+40-60 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 10-15 Life stolen per hit",
        Index: 2
      },
      {
        PropertyString: "+3-5 to Skeleton Mastery (Necromancer Only)",
        Index: 4
      },
      {
        PropertyString: "50-75 to Life",
        Index: 5
      },
      {
        PropertyString: "+25-30 better chance of getting magic item",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(13-23) to (47-67)"
        }
      ],
      EquipmentType: 1,
      Name: "Bone Wand",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 18,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Cadin'Sor",
    Index: "Cadin'Sor",
    Enabled: true,
    ItemLevel: 28,
    RequiredLevel: 33,
    Code: "glv",
    Properties: [
      {
        PropertyString: "+80-100% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 30-55 to Damage",
        Index: 1
      },
      {
        PropertyString: "+1 to Sword Mastery",
        Index: 5
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 4
      },
      {
        PropertyString: "Lightning Resist +20-30%",
        Index: 3
      },
      {
        PropertyString: "Poison Resist +15-25%",
        Index: 6
      },
      {
        PropertyString: "+60 Increased Stack Size",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(39-40) to (85-89)"
        },
        {
          Type: 2,
          DamageString: "(58-62) to (94-99)"
        }
      ],
      EquipmentType: 1,
      Name: "Glaive",
      RequiredStrength: 52,
      RequiredDexterity: 35,
      Durability: 250,
      ItemLevel: 23,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Merc Equip",
    Name: "Hushmaker",
    Index: "Hushmaker",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 33,
    Code: "xap",
    Properties: [
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "+1 to Resist Lightning",
        Index: 6
      },
      {
        PropertyString: "+10-15 Slows target by",
        Index: 4
      },
      {
        PropertyString: "+80-120 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+8-12 Damage Reduced by",
        Index: 1
      },
      {
        PropertyString: "+6-8 Magic Damage Reduced by",
        Index: 2
      },
      {
        PropertyString: "Socketed (1)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "82-101",
      EquipmentType: 0,
      Name: "War Hat",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 34,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Gloves",
    Name: "Viridian Gloves",
    Index: "Viridian Gloves",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 33,
    Code: "hgl",
    Properties: [
      {
        PropertyString: "+10 Faster Cast Rate",
        Index: 6
      },
      {
        PropertyString: "75 to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "+15 Slows target by",
        Index: 4
      },
      {
        PropertyString: "+50-60 Defense",
        Index: 0
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 2
      },
      {
        PropertyString: "Fire Resist +25%",
        Index: 5
      },
      {
        PropertyString: "Requirements -25%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "62-72",
      EquipmentType: 0,
      Name: "Gauntlets",
      RequiredStrength: 60,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 27,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Amazon Bow",
    Name: "Adamantine Leaf",
    Index: "Adamantine Leaf",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 33,
    Code: "am6",
    Properties: [
      {
        PropertyString: "+1-3 to Bow and Crossbow Skills (Amazon only)",
        Index: 1
      },
      {
        PropertyString: "+25 Faster Run/Walk",
        Index: 5
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+125-190% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+25 Piercing Attack",
        Index: 4
      },
      {
        PropertyString: "+1 Fires Magic Arrows",
        Index: 6
      },
      {
        PropertyString: "Adds 20-40 to Damage",
        Index: 9
      },
      {
        PropertyString: "25 bonus to Attack Rating",
        Index: 7
      },
      {
        PropertyString: "+7 to Valkyrie (Amazon Only)",
        Index: 8
      },
      {
        PropertyString: "All Resistances +35-50",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(56-66) to (105-124)"
        }
      ],
      EquipmentType: 1,
      Name: "Ashwood Bow",
      RequiredStrength: 56,
      RequiredDexterity: 77,
      Durability: 0,
      ItemLevel: 39,
      Type: {
        Name: "Amazon Bow",
        Index: "Amazon Bow",
        Class: "ama"
      },
      RequiredClass: "Amazon"
    }
  },
  {
    Type: "Amazon Spear",
    Name: "Silverdawn",
    Index: "Silverdawn",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 33,
    Code: "am8",
    Properties: [
      {
        PropertyString: "+2-4 to Passive and Magic Skills (Amazon only)",
        Index: 2
      },
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+140-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 20-60 to Damage",
        Index: 8
      },
      {
        PropertyString: "+100-200% Damage to Demons Damage to Demons",
        Index: 6
      },
      {
        PropertyString: "Adds 1-200 to Lightning Damage",
        Index: 3
      },
      {
        PropertyString: "to Life",
        Index: 7
      },
      {
        PropertyString: "Lightning Resist +50-65%",
        Index: 4
      },
      {
        PropertyString: "4-7 to Light Radius",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(101-122) to (182-213)"
        }
      ],
      EquipmentType: 1,
      Name: "Ceremonial Spear",
      RequiredStrength: 101,
      RequiredDexterity: 80,
      Durability: 250,
      ItemLevel: 43,
      Type: {
        Name: "Amazon Spear",
        Index: "Amazon Spear",
        Class: "ama"
      },
      RequiredClass: "Amazon"
    }
  },
  {
    Type: "Orb",
    Name: "Murdering Shard",
    Index: "Murdering Shard",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 33,
    Code: "ob7",
    Properties: [
      {
        PropertyString: "+2",
        Index: 5
      },
      {
        PropertyString: "+40 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 15-30 to Damage",
        Index: 0
      },
      {
        PropertyString: "+100 Mana stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+35 Slows target by",
        Index: 4
      },
      {
        PropertyString: "+10-15 Life after each Kill",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(35-40) to (82-95)"
        }
      ],
      EquipmentType: 1,
      Name: "Crystalline Globe",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 37,
      Type: {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      },
      RequiredClass: "Sorceress"
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "Carrion Comfort",
    Index: "Carrion Comfort",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 33,
    Code: "ne7",
    Properties: [
      {
        PropertyString: "+25 Faster Cast Rate",
        Index: 7
      },
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "15-40% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "+66-95 to Unsummon",
        Index: 3
      },
      {
        PropertyString: "+76-95 to Throw",
        Index: 4
      },
      {
        PropertyString: "+88-95 to Kick",
        Index: 5
      },
      {
        PropertyString: "+100-140 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+8-12 Magic Absorb",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "84-100",
      EquipmentType: 0,
      Name: "Fetish Trophy",
      RequiredStrength: 41,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 39,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Primal Helm",
    Name: "Gambler's Glory",
    Index: "Gambler's Glory",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 33,
    Code: "ba7",
    Properties: [
      {
        PropertyString: "+1-3 to Masteries (Barbarian only)",
        Index: 4
      },
      {
        PropertyString: "+1",
        Index: 3
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 6
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 5
      },
      {
        PropertyString: "+50-100 Defense",
        Index: 0
      },
      {
        PropertyString: "+100 extra gold from monsters",
        Index: 1
      },
      {
        PropertyString: "+ better chance of getting magic item",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "113-163",
      EquipmentType: 0,
      Name: "Lion Helm",
      RequiredStrength: 73,
      RequiredDexterity: 0,
      Durability: 35,
      ItemLevel: 38,
      Type: {
        Name: "Primal Helm",
        Index: "Primal Helm",
        Class: "bar"
      },
      RequiredClass: "Barbarian"
    }
  },
  {
    Type: "Pelt",
    Name: "Creeper's Canopy",
    Index: "Creeper's Canopy",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 33,
    Code: "dr7",
    Properties: [
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 5
      },
      {
        PropertyString: "+5-7 to Wearwolf (Druid Only)",
        Index: 1
      },
      {
        PropertyString: "+5-7 to Feral Rage (Druid Only)",
        Index: 2
      },
      {
        PropertyString: "+5-7 to Hunger (Druid Only)",
        Index: 3
      },
      {
        PropertyString: "58%",
        Index: 4
      },
      {
        PropertyString: "+100-135 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "Regenerate Mana 50%",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "94-110",
      EquipmentType: 0,
      Name: "Griffon Headdress",
      RequiredStrength: 50,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 40,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Martial Law",
    Index: "Martial Law",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 33,
    Code: "skr",
    Properties: [
      {
        PropertyString: "+3-5 to Martial Arts (Assassin only)",
        Index: 1
      },
      {
        PropertyString: "+130-180% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+20 Chance of Crushing Blow",
        Index: 6
      },
      {
        PropertyString: "+ Deadly Strike",
        Index: 7
      },
      {
        PropertyString: "15 to Strength",
        Index: 2
      },
      {
        PropertyString: "20 to Dexterity",
        Index: 3
      },
      {
        PropertyString: "25 to Vitality",
        Index: 4
      },
      {
        PropertyString: "+10-15 Damage Reduced by 10-15%%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(20-25) to (39-47)"
        }
      ],
      EquipmentType: 1,
      Name: "Scissors Katar",
      RequiredStrength: 55,
      RequiredDexterity: 55,
      Durability: 250,
      ItemLevel: 24,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Club",
    Name: "Dark Clan Crusher",
    Index: "Dark Clan Crusher",
    Enabled: true,
    ItemLevel: 42,
    RequiredLevel: 34,
    Code: "9cl",
    Properties: [
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "+195% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "20-25 bonus to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "+200% Damage to Demons Damage to Demons",
        Index: 1
      },
      {
        PropertyString: "200 to Attack Rating against Demons",
        Index: 2
      },
      {
        PropertyString: "+15 Life after each Demon Kill",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "17 to 61"
        }
      ],
      EquipmentType: 1,
      Name: "Cudgel",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 30,
      Type: {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Honor Guard",
    Index: "Honor Guard",
    Enabled: true,
    ItemLevel: 29,
    RequiredLevel: 34,
    Code: "lsd",
    Properties: [
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "+30 Faster Block Rate",
        Index: 1
      },
      {
        PropertyString: "10-20% Increased Chance of Blocking",
        Index: 4
      },
      {
        PropertyString: "Adds 40-70 to Damage",
        Index: 0
      },
      {
        PropertyString: "+1 Knockback",
        Index: 6
      },
      {
        PropertyString: "+15 Increase Maximum Life",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "43 to 89"
        }
      ],
      EquipmentType: 1,
      Name: "Long Sword",
      RequiredStrength: 55,
      RequiredDexterity: 39,
      Durability: 250,
      ItemLevel: 20,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Cursebreaker",
    Index: "Cursebreaker",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 34,
    Code: "9ss",
    Properties: [
      {
        PropertyString: "8% Chance to cast level 3 amplify damage when struck",
        Index: 2
      },
      {
        PropertyString: "Level 12-15 Cleansing Aura When Equipped",
        Index: 3
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+180-230% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "15 to Strength",
        Index: 4
      },
      {
        PropertyString: "50 to Life",
        Index: 6
      },
      {
        PropertyString: "Fire Resist +20-40%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(22-26) to (61-72)"
        }
      ],
      EquipmentType: 1,
      Name: "Gladius",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 30,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Yuan-Ti's Venom",
    Index: "Yuan-Ti's Venom",
    Enabled: true,
    ItemLevel: 30,
    RequiredLevel: 34,
    Code: "bsw",
    Properties: [
      {
        PropertyString: "+100-120% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 1
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 4
      },
      {
        PropertyString: "+50 Slows target by",
        Index: 2
      },
      {
        PropertyString: "All Resistances +15-20",
        Index: 5
      },
      {
        PropertyString: "+5-10 Damage Reduced by 5-10%%",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(39-40) to (88-91)"
        },
        {
          Type: 1,
          DamageString: "(65-69) to (106-111)"
        }
      ],
      EquipmentType: 1,
      Name: "Bastard Sword",
      RequiredStrength: 62,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 24,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Mace",
    Name: "Lashfire",
    Index: "Lashfire",
    Enabled: true,
    ItemLevel: 32,
    RequiredLevel: 34,
    Code: "fla",
    Properties: [
      {
        PropertyString: "Level 5-7 Holy Fire Aura When Equipped",
        Index: 4
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 6
      },
      {
        PropertyString: "+35-45 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+50-80 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 50-60 to Fire Damage",
        Index: 2
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 7
      },
      {
        PropertyString: "Fire Resist +35-45%",
        Index: 3
      },
      {
        PropertyString: "+10-15 Fire Absorb",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(36-46) to (74-104)"
        }
      ],
      EquipmentType: 1,
      Name: "Flail",
      RequiredStrength: 41,
      RequiredDexterity: 35,
      Durability: 250,
      ItemLevel: 19,
      Type: {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Greyhawk Dragon",
    Index: "Greyhawk Dragon",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 34,
    Code: "aar",
    Properties: [
      {
        PropertyString: "+40 Faster Hit Recovery",
        Index: 1
      },
      {
        PropertyString: "+400-500 Defense",
        Index: 0
      },
      {
        PropertyString: "All Resistances +35",
        Index: 5
      },
      {
        PropertyString: "+5 Life after each Kill",
        Index: 2
      },
      {
        PropertyString: "2-3 to Experience Gained",
        Index: 3
      },
      {
        PropertyString: "Socketed (2)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "618-718",
      EquipmentType: 0,
      Name: "Ancient Armor",
      RequiredStrength: 100,
      RequiredDexterity: 0,
      Durability: 60,
      ItemLevel: 40,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Scavanger's Carapace",
    Index: "Scavanger's Carapace",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 34,
    Code: "xea",
    Properties: [
      {
        PropertyString: "+% Damage to Undead Damage to Undead",
        Index: 6
      },
      {
        PropertyString: "+95-130 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+ Defense",
        Index: 5
      },
      {
        PropertyString: "+10 to Maximum Cold Resist",
        Index: 4
      },
      {
        PropertyString: "Cold Resist +35-50%",
        Index: 3
      },
      {
        PropertyString: "+10-20 Damage Reduced by 10-20%%",
        Index: 2
      },
      {
        PropertyString: "Repairs 0.2 durability per second",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "218-257",
      EquipmentType: 0,
      Name: "Serpentskin Armor",
      RequiredStrength: 43,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 36,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Mongolian Trust",
    Index: "Mongolian Trust",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 34,
    Code: "xuc",
    Properties: [
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "15-30% Increased Chance of Blocking",
        Index: 4
      },
      {
        PropertyString: "-10% Target Defense",
        Index: 7
      },
      {
        PropertyString: "Adds 3-5 Life stolen per hit",
        Index: 5
      },
      {
        PropertyString: "+251-280 to Throw",
        Index: 2
      },
      {
        PropertyString: "+251-280 to Throw",
        Index: 3
      },
      {
        PropertyString: "Hit blinds target +1",
        Index: 6
      },
      {
        PropertyString: "+80-130 Enhanced Defense",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "8 to 12",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "75-96",
      EquipmentType: 0,
      Name: "Defender",
      RequiredStrength: 38,
      RequiredDexterity: 0,
      Durability: 68,
      ItemLevel: 34,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Marauder's Claw",
    Index: "Marauder's Claw",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 34,
    Code: "xlg",
    Properties: [
      {
        PropertyString: "+6-10 to Minimum Damage",
        Index: 1
      },
      {
        PropertyString: "-5% Target Defense",
        Index: 2
      },
      {
        PropertyString: "+5 Chance of Crushing Blow",
        Index: 3
      },
      {
        PropertyString: "+100-125 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "Cold Resist +20-30%",
        Index: 5
      },
      {
        PropertyString: "Fire Resist +20-30%",
        Index: 6
      },
      {
        PropertyString: "+100 extra gold from monsters",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "58-65",
      EquipmentType: 0,
      Name: "Demonhide Gloves",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 33,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Gloves",
    Name: "Hellhunger",
    Index: "Hellhunger",
    Enabled: true,
    ItemLevel: 34,
    RequiredLevel: 34,
    Code: "utg",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 1
      },
      {
        PropertyString: "+10 Faster Cast Rate",
        Index: 3
      },
      {
        PropertyString: "+1-5 to Lower Resist",
        Index: 2
      },
      {
        PropertyString: "+75-125 Defense",
        Index: 0
      },
      {
        PropertyString: "+20-25 better chance of getting magic item",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "134-184",
      EquipmentType: 0,
      Name: "Crusader Gauntlets",
      RequiredStrength: 151,
      RequiredDexterity: 0,
      Durability: 18,
      ItemLevel: 76,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "Dark Familiar",
    Index: "Dark Familiar",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 34,
    Code: "hbt",
    Properties: [
      {
        PropertyString: "+1 to Curses (Necromancer only)",
        Index: 2
      },
      {
        PropertyString: "+3-5 Kick Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 3-4 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+40-50 Defense",
        Index: 0
      },
      {
        PropertyString: "+25-35 to Mana",
        Index: 4
      },
      {
        PropertyString: "+10-15 Magic Damage Reduced by",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "10 to 20",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "52-62",
      EquipmentType: 0,
      Name: "Greaves",
      RequiredStrength: 70,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 27,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "Wild Horses",
    Index: "Wild Horses",
    Enabled: true,
    ItemLevel: 34,
    RequiredLevel: 34,
    Code: "uhb",
    Properties: [
      {
        PropertyString: "+40 Faster Run/Walk",
        Index: 2
      },
      {
        PropertyString: "+40 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "+10-15 Kick Damage",
        Index: 1
      },
      {
        PropertyString: "+10-20 Deadly Strike",
        Index: 6
      },
      {
        PropertyString: "+125-200 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "25 to Strength",
        Index: 4
      },
      {
        PropertyString: "25 to Dexterity",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "83 to 149",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "141-189",
      EquipmentType: 0,
      Name: "Myrmidon Greaves",
      RequiredStrength: 208,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 85,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Auric Shields",
    Name: "Voice of the Prophet",
    Index: "Voice of the Prophet",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 34,
    Code: "pa7",
    Properties: [
      {
        PropertyString: "2 to All Skills",
        Index: 4
      },
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 6
      },
      {
        PropertyString: "+15 Increase Maximum Life",
        Index: 5
      },
      {
        PropertyString: "All Resistances +40",
        Index: 3
      },
      {
        PropertyString: "Level 30 Shout (1 Charges)",
        Index: 0
      },
      {
        PropertyString: "Level 30 Battle Orders (1 Charges)",
        Index: 1
      },
      {
        PropertyString: "Level 30 Battle Command (1 Charges)",
        Index: 2
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageString: "15 to 20",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "113",
      EquipmentType: 0,
      Name: "Akaran Rondache",
      RequiredStrength: 59,
      RequiredDexterity: 0,
      Durability: 30,
      ItemLevel: 40,
      Type: {
        Name: "Auric Shields",
        Index: "Auric Shields",
        Class: "pal"
      },
      RequiredClass: "Paladin"
    }
  },
  {
    Type: "Pelt",
    Name: "The King's Heart",
    Index: "The King's Heart",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 34,
    Code: "dr6",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 1
      },
      {
        PropertyString: "+25% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "+7 to Rabies (Druid Only)",
        Index: 4
      },
      {
        PropertyString: "+100-125 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+20-25 Increase Maximum Life",
        Index: 5
      },
      {
        PropertyString: "All Resistances +25",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "106-119",
      EquipmentType: 0,
      Name: "Alpha Helm",
      RequiredStrength: 44,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 35,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Axe",
    Name: "Warlord's Trust",
    Index: "Warlord's Trust",
    Enabled: true,
    ItemLevel: 43,
    RequiredLevel: 35,
    Code: "9la",
    Properties: [
      {
        PropertyString: "+175% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+75 Defense",
        Index: 0
      },
      {
        PropertyString: "to Vitality",
        Index: 2
      },
      {
        PropertyString: "+20 Replenish Life",
        Index: 1
      },
      {
        PropertyString: "All Resistances +10",
        Index: 3
      },
      {
        PropertyString: "Repairs 0.25 durability per second",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "38 to 93"
        }
      ],
      EquipmentType: 1,
      Name: "Military Axe",
      RequiredStrength: 73,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 34,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Wand",
    Name: "Carin Shard",
    Index: "Carin Shard",
    Enabled: true,
    ItemLevel: 43,
    RequiredLevel: 35,
    Code: "9yw",
    Properties: [
      {
        PropertyString: "+2 to Summoning Skills (Necromancer only)",
        Index: 6
      },
      {
        PropertyString: "+1",
        Index: 5
      },
      {
        PropertyString: "+10 Faster Cast Rate",
        Index: 1
      },
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "to Life",
        Index: 0
      },
      {
        PropertyString: "+5 Replenish Life",
        Index: 4
      },
      {
        PropertyString: "+ to Mana",
        Index: 2
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "8 to 24"
        }
      ],
      EquipmentType: 1,
      Name: "Petrified Wand",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 38,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Blade of Ali Baba",
    Index: "Blade of Ali Baba",
    Enabled: true,
    ItemLevel: 43,
    RequiredLevel: 35,
    Code: "9fc",
    Properties: [
      {
        PropertyString: "+60-120% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "5-15 to Dexterity",
        Index: 5
      },
      {
        PropertyString: "+15 to Mana",
        Index: 3
      },
      {
        PropertyString: "+ extra gold from monsters",
        Index: 1
      },
      {
        PropertyString: "+ better chance of getting magic item",
        Index: 2
      },
      {
        PropertyString: "Socketed (3)",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(25-35) to (56-77)"
        }
      ],
      EquipmentType: 1,
      Name: "Tulwar",
      RequiredStrength: 70,
      RequiredDexterity: 42,
      Durability: 250,
      ItemLevel: 37,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Soulfeast Tine",
    Index: "Soulfeast Tine",
    Enabled: true,
    ItemLevel: 43,
    RequiredLevel: 35,
    Code: "9br",
    Properties: [
      {
        PropertyString: "+150-190% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "150-250 to Attack Rating",
        Index: 5
      },
      {
        PropertyString: "+7 Mana stolen per hit",
        Index: 2
      },
      {
        PropertyString: "+7 Life stolen per hit",
        Index: 1
      },
      {
        PropertyString: "20% Stamina Drain",
        Index: 3
      },
      {
        PropertyString: "Requirements -20%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(40-46) to (100-116)"
        }
      ],
      EquipmentType: 1,
      Name: "War Fork",
      RequiredStrength: 80,
      RequiredDexterity: 95,
      Durability: 265,
      ItemLevel: 41,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Chromatic Ire",
    Index: "Chromatic Ire",
    Enabled: true,
    ItemLevel: 43,
    RequiredLevel: 35,
    Code: "8cs",
    Properties: [
      {
        PropertyString: "+3",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 2
      },
      {
        PropertyString: "+1 to Fire Mastery (Sorceress Only)",
        Index: 5
      },
      {
        PropertyString: "+1 to Lightning Mastery (Sorceress Only)",
        Index: 6
      },
      {
        PropertyString: "+1 to Cold Mastery (Sorceress Only)",
        Index: 7
      },
      {
        PropertyString: "+20-25 Increase Maximum Life",
        Index: 4
      },
      {
        PropertyString: "All Resistances +20-40",
        Index: 1
      },
      {
        PropertyString: "+20 Attacker Takes Lightning Damage of",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "11 to 32"
        }
      ],
      EquipmentType: 1,
      Name: "Cedar Staff",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 38,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Stealskull",
    Index: "Stealskull",
    Enabled: true,
    ItemLevel: 43,
    RequiredLevel: 35,
    Code: "xlm",
    Properties: [
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+10 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "+5 Mana stolen per hit",
        Index: 0
      },
      {
        PropertyString: "+5 Life stolen per hit",
        Index: 1
      },
      {
        PropertyString: "+200-240 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "+30-50 better chance of getting magic item",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "192-217",
      EquipmentType: 0,
      Name: "Casque",
      RequiredStrength: 59,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 42,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Armor",
    Name: "Spirit Forge",
    Index: "Spiritforge",
    Enabled: true,
    ItemLevel: 43,
    RequiredLevel: 35,
    Code: "xng",
    Properties: [
      {
        PropertyString: "Adds 20-65 to Fire Damage",
        Index: 2
      },
      {
        PropertyString: "+120-160 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "15 to Strength",
        Index: 5
      },
      {
        PropertyString: "to Life",
        Index: 1
      },
      {
        PropertyString: "Fire Resist +5%",
        Index: 3
      },
      {
        PropertyString: "4 to Light Radius",
        Index: 0
      },
      {
        PropertyString: "Socketed (2)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "349-413",
      EquipmentType: 0,
      Name: "Linked Mail",
      RequiredStrength: 74,
      RequiredDexterity: 0,
      Durability: 26,
      ItemLevel: 42,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Stormchaser",
    Index: "Stormchaser",
    Enabled: true,
    ItemLevel: 43,
    RequiredLevel: 35,
    Code: "xrg",
    Properties: [
      {
        PropertyString: "4% Chance to cast level 6 blizzard when struck",
        Index: 7
      },
      {
        PropertyString: "4% Chance to cast level 5 tornado when struck",
        Index: 8
      },
      {
        PropertyString: "+10 Faster Block Rate",
        Index: 6
      },
      {
        PropertyString: "20% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "150 to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "Adds 1-60 to Lightning Damage",
        Index: 0
      },
      {
        PropertyString: "+160-220 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "Lightning Resist +50%",
        Index: 3
      },
      {
        PropertyString: "+1 Half Freeze Duration",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "11 to 15",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "140-172",
      EquipmentType: 0,
      Name: "Scutum",
      RequiredStrength: 71,
      RequiredDexterity: 0,
      Durability: 62,
      ItemLevel: 42,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Lance Guard",
    Index: "Lance Guard",
    Enabled: true,
    ItemLevel: 43,
    RequiredLevel: 35,
    Code: "xpk",
    Properties: [
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 1
      },
      {
        PropertyString: "+20 Deadly Strike",
        Index: 5
      },
      {
        PropertyString: "+70-120 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "50 to Life",
        Index: 0
      },
      {
        PropertyString: "+47 Attacker Takes Damage of",
        Index: 3
      },
      {
        PropertyString: "15% Damage Taken Goes To Mana",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "18 to 35",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "100-129",
      EquipmentType: 0,
      Name: "Barbed Shield",
      RequiredStrength: 65,
      RequiredDexterity: 0,
      Durability: 55,
      ItemLevel: 42,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Shadazar's Answer",
    Index: "Shadazar's Answer",
    Enabled: true,
    ItemLevel: 30,
    RequiredLevel: 35,
    Code: "wax",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 1
      },
      {
        PropertyString: "Adds 20-70 to Damage",
        Index: 0
      },
      {
        PropertyString: "+5 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+2 Knockback",
        Index: 2
      },
      {
        PropertyString: "+8-10 Damage Reduced by",
        Index: 5
      },
      {
        PropertyString: "+3-5 to Mana after each Kill",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "30 to 88"
        }
      ],
      EquipmentType: 1,
      Name: "War Axe",
      RequiredStrength: 67,
      RequiredDexterity: 0,
      Durability: 290,
      ItemLevel: 25,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Hammer",
    Name: "Gnat Sting",
    Index: "Gnat Sting",
    Enabled: true,
    ItemLevel: 35,
    RequiredLevel: 35,
    Code: "whm",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+20-40 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+75-100 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Hit blinds target +1",
        Index: 3
      },
      {
        PropertyString: "+35 Slows target by",
        Index: 5
      },
      {
        PropertyString: "15 to Strength",
        Index: 6
      },
      {
        PropertyString: "Socketed (2-4)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(39-59) to (104-129)"
        }
      ],
      EquipmentType: 1,
      Name: "War Hammer",
      RequiredStrength: 53,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 25,
      Type: {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Scepter",
    Name: "Avenger's Honor",
    Index: "Avenger's Honor",
    Enabled: true,
    ItemLevel: 28,
    RequiredLevel: 35,
    Code: "gsc",
    Properties: [
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+15-25 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+40-55 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+6 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+96-125 to Unsummon",
        Index: 4
      },
      {
        PropertyString: "3-5 to Experience Gained",
        Index: 5
      },
      {
        PropertyString: "Socketed (1)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(23-33) to (58-73)"
        }
      ],
      EquipmentType: 1,
      Name: "Grand Scepter",
      RequiredStrength: 37,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 15,
      Type: {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Knife",
    Name: "Moonsea Razor",
    Index: "Moonsea Razor",
    Enabled: true,
    ItemLevel: 35,
    RequiredLevel: 35,
    Code: "bld",
    Properties: [
      {
        PropertyString: "Adds 35-70 to Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 25-50 to Cold Damage",
        Index: 1
      },
      {
        PropertyString: "+20-30 Deadly Strike",
        Index: 2
      },
      {
        PropertyString: "25 to Strength",
        Index: 3
      },
      {
        PropertyString: "+40 to Mana",
        Index: 6
      },
      {
        PropertyString: "All Resistances +20-30",
        Index: 4
      },
      {
        PropertyString: "Level 7 Static Field (22 Charges)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "39 to 85"
        }
      ],
      EquipmentType: 1,
      Name: "Blade",
      RequiredStrength: 35,
      RequiredDexterity: 51,
      Durability: 250,
      ItemLevel: 23,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Mandrake",
    Index: "Mandrake",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 35,
    Code: "9sr",
    Properties: [
      {
        PropertyString: "9% Chance to cast level 5 lightning on striking",
        Index: 6
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+180-230% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 6-8 Life stolen per hit",
        Index: 2
      },
      {
        PropertyString: "65 to Life",
        Index: 3
      },
      {
        PropertyString: "+8 Life after each Kill",
        Index: 1
      },
      {
        PropertyString: "3-5 to Experience Gained",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(28-33) to (103-122)"
        }
      ],
      EquipmentType: 1,
      Name: "War Spear",
      RequiredStrength: 25,
      RequiredDexterity: 25,
      Durability: 250,
      ItemLevel: 33,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Sommerstrike Edge",
    Index: "Sommerstrike Edge",
    Enabled: true,
    ItemLevel: 33,
    RequiredLevel: 35,
    Code: "wsc",
    Properties: [
      {
        PropertyString: "+50 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+110-125 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 100-150 to Fire Damage",
        Index: 2
      },
      {
        PropertyString: "30-50 to Life",
        Index: 6
      },
      {
        PropertyString: "Cold Resist +45%",
        Index: 3
      },
      {
        PropertyString: "Fire Resist +50-70%",
        Index: 4
      },
      {
        PropertyString: "+40 better chance of getting magic item",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "65 to 146"
        }
      ],
      EquipmentType: 1,
      Name: "War Scythe",
      RequiredStrength: 80,
      RequiredDexterity: 80,
      Durability: 250,
      ItemLevel: 34,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Sylvan Battle Bow",
    Index: "Sylvan Battle Bow",
    Enabled: true,
    ItemLevel: 30,
    RequiredLevel: 35,
    Code: "swb",
    Properties: [
      {
        PropertyString: "+1-2 to Bow and Crossbow Skills (Amazon only)",
        Index: 6
      },
      {
        PropertyString: "+1",
        Index: 5
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "Adds 35-70 to Damage",
        Index: 0
      },
      {
        PropertyString: "+2 to Ice Arrow",
        Index: 4
      },
      {
        PropertyString: "+10 Increase Maximum Life",
        Index: 2
      },
      {
        PropertyString: "+20 Increase Maximum Mana",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "41 to 84"
        }
      ],
      EquipmentType: 1,
      Name: "Short War Bow",
      RequiredStrength: 35,
      RequiredDexterity: 55,
      Durability: 0,
      ItemLevel: 27,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Dead World",
    Index: "Dead to the World",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 35,
    Code: "8sb",
    Properties: [
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+175-225% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+25 Piercing Attack",
        Index: 5
      },
      {
        PropertyString: "+6 Life stolen per hit",
        Index: 6
      },
      {
        PropertyString: "+4 to Guided Arrow",
        Index: 3
      },
      {
        PropertyString: "+5 Replenish Life",
        Index: 2
      },
      {
        PropertyString: "Level 35 Revive (8 Charges)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(16-19) to (52-61)"
        }
      ],
      EquipmentType: 1,
      Name: "Edge Bow",
      RequiredStrength: 25,
      RequiredDexterity: 43,
      Durability: 0,
      ItemLevel: 30,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Magic Bow Quiv",
    Name: "Arrows of Piercing",
    Index: "Quiver of Piercing",
    Enabled: true,
    ItemLevel: 35,
    RequiredLevel: 35,
    Code: "z01",
    Properties: [
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+15 Piercing Attack",
        Index: 2
      },
      {
        PropertyString: "Adds 4-12 to Damage",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Magic Arrows",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Magic Bow Quiv",
        Index: "Magic Bow Quiv",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Synthalus",
    Index: "Synthalus",
    Enabled: true,
    ItemLevel: 33,
    RequiredLevel: 35,
    Code: "rxb",
    Properties: [
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "+1 Fires Magic Arrows",
        Index: 6
      },
      {
        PropertyString: "+35-70 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 5
      },
      {
        PropertyString: "200 to Attack Rating",
        Index: 1
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 3
      },
      {
        PropertyString: "+35 to Mana",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "41 to 82"
        }
      ],
      EquipmentType: 1,
      Name: "Repeating Crossbow",
      RequiredStrength: 40,
      RequiredDexterity: 50,
      Durability: 0,
      ItemLevel: 33,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Magic Xbow Quiv",
    Name: "Bolts of Piercing",
    Index: "Bolt Case of Piercing",
    Enabled: true,
    ItemLevel: 35,
    RequiredLevel: 35,
    Code: "z02",
    Properties: [
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+15 Piercing Attack",
        Index: 2
      },
      {
        PropertyString: "Adds 4-12 to Damage",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Magic Bolts",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Magic Xbow Quiv",
        Index: "Magic Xbow Quiv",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Trump of Jericho",
    Index: "Trump of Jericho",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 35,
    Code: "9pi",
    Properties: [
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+ Defense",
        Index: 3
      },
      {
        PropertyString: "25 to Strength",
        Index: 5
      },
      {
        PropertyString: "25 to Dexterity",
        Index: 6
      },
      {
        PropertyString: "+35-50 better chance of getting magic item",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(27-33) to (65-78)"
        },
        {
          Type: 2,
          DamageString: "(40-48) to (105-126)"
        }
      ],
      EquipmentType: 1,
      Name: "Great Pilum",
      RequiredStrength: 25,
      RequiredDexterity: 88,
      Durability: 250,
      ItemLevel: 37,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Throwing Axe",
    Name: "Oakplume",
    Index: "Oakplume",
    Enabled: true,
    ItemLevel: 28,
    RequiredLevel: 35,
    Code: "bal",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+80-120% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 6
      },
      {
        PropertyString: "Adds 30-60 to Damage",
        Index: 1
      },
      {
        PropertyString: "+6 Life stolen per hit",
        Index: 8
      },
      {
        PropertyString: "+3 to Double Throw (Barbarian Only)",
        Index: 4
      },
      {
        PropertyString: "Poison Resist +35%",
        Index: 7
      },
      {
        PropertyString: "+75 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(39-41) to (78-82)"
        },
        {
          Type: 2,
          DamageString: "(51-56) to (87-93)"
        }
      ],
      EquipmentType: 1,
      Name: "Balanced Axe",
      RequiredStrength: 0,
      RequiredDexterity: 57,
      Durability: 250,
      ItemLevel: 16,
      Type: {
        Name: "Throwing Axe",
        Index: "Throwing Axe",
        Class: ""
      },
      RequiredClass: "Axe"
    }
  },
  {
    Type: "Shield",
    Name: "Undead Buckler",
    Index: "Undead Buckler",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 35,
    Code: "xml",
    Properties: [
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "15-30% Increased Chance of Blocking",
        Index: 4
      },
      {
        PropertyString: "+221-250 to Throw",
        Index: 2
      },
      {
        PropertyString: "+221-250 to Throw",
        Index: 3
      },
      {
        PropertyString: "+5 to Skeleton Mastery",
        Index: 5
      },
      {
        PropertyString: "+1 to Revive",
        Index: 6
      },
      {
        PropertyString: "+80-130 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "10% Damage Taken Goes To Mana",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "7 to 14",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "86-110",
      EquipmentType: 0,
      Name: "Round Shield",
      RequiredStrength: 53,
      RequiredDexterity: 0,
      Durability: 64,
      ItemLevel: 37,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Boots",
    Name: "Deepwander",
    Index: "Deepwander",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 35,
    Code: "xlb",
    Properties: [
      {
        PropertyString: "+25 Faster Run/Walk",
        Index: 1
      },
      {
        PropertyString: "+50-80 Defense",
        Index: 0
      },
      {
        PropertyString: "25 to Life",
        Index: 5
      },
      {
        PropertyString: "+25 to Mana",
        Index: 6
      },
      {
        PropertyString: "+1 Cannot Be Frozen",
        Index: 4
      },
      {
        PropertyString: "1-7 to Light Radius",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "26 to 46",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "78-108",
      EquipmentType: 0,
      Name: "Demonhide Boots",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 36,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Orb",
    Name: "Dawn Shadow",
    Index: "Dawn Shadow",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 35,
    Code: "ob8",
    Properties: [
      {
        PropertyString: "2 to All Skills",
        Index: 2
      },
      {
        PropertyString: "+25 Faster Cast Rate",
        Index: 3
      },
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 5
      },
      {
        PropertyString: "25% Increased Chance of Blocking",
        Index: 6
      },
      {
        PropertyString: "+20 Increase Maximum Life",
        Index: 1
      },
      {
        PropertyString: "+25 Increase Maximum Mana",
        Index: 0
      },
      {
        PropertyString: "Regenerate Mana 200%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "11 to 29"
        }
      ],
      EquipmentType: 1,
      Name: "Cloudy Sphere",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 41,
      Type: {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      },
      RequiredClass: "Sorceress"
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "King Tut",
    Index: "King Tut",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 35,
    Code: "ne6",
    Properties: [
      {
        PropertyString: "+1-2",
        Index: 1
      },
      {
        PropertyString: "+25 Faster Block Rate",
        Index: 5
      },
      {
        PropertyString: "20-40% Increased Chance of Blocking",
        Index: 4
      },
      {
        PropertyString: "+66-95 to Throw",
        Index: 6
      },
      {
        PropertyString: "+66-95 to Unsummon",
        Index: 7
      },
      {
        PropertyString: "+110-140 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+100 extra gold from monsters",
        Index: 2
      },
      {
        PropertyString: "+ better chance of getting magic item",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "81-93",
      EquipmentType: 0,
      Name: "Mummified Trophy",
      RequiredStrength: 38,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 33,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Primal Helm",
    Name: "Helms Deep",
    Index: "Helms Deep",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 35,
    Code: "ba6",
    Properties: [
      {
        PropertyString: "+1 Indestructible",
        Index: 4
      },
      {
        PropertyString: "+30-50% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "+100-120 Defense",
        Index: 0
      },
      {
        PropertyString: "10-15 to Strength",
        Index: 5
      },
      {
        PropertyString: "50-75 to Life",
        Index: 6
      },
      {
        PropertyString: "Magic Resist +15%",
        Index: 3
      },
      {
        PropertyString: "+15 Damage Reduced by 15%%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "155-175",
      EquipmentType: 0,
      Name: "Jawbone Visor",
      RequiredStrength: 58,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 33,
      Type: {
        Name: "Primal Helm",
        Index: "Primal Helm",
        Class: "bar"
      },
      RequiredClass: "Barbarian"
    }
  },
  {
    Type: "Hand to Hand 2",
    Name: "Avalanche Strike",
    Index: "Avalanche Strike",
    Enabled: true,
    ItemLevel: 35,
    RequiredLevel: 35,
    Code: "7qr",
    Properties: [
      {
        PropertyString: "50% Chance to cast level 4 glacial spike on striking",
        Index: 2
      },
      {
        PropertyString: "+300-400% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 200-250 to Cold Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 6-8 Mana stolen per hit",
        Index: 6
      },
      {
        PropertyString: "Adds 6-8 Life stolen per hit",
        Index: 5
      },
      {
        PropertyString: "Cold Resist +45%",
        Index: 3
      },
      {
        PropertyString: "Repairs 0.15 durability per second",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(160-200) to (204-255)"
        }
      ],
      EquipmentType: 1,
      Name: "Scissors Suwayyah",
      RequiredStrength: 118,
      RequiredDexterity: 118,
      Durability: 250,
      ItemLevel: 85,
      Type: {
        Name: "Hand to Hand 2",
        Index: "Hand to Hand 2",
        Class: "ass"
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Small Charm",
    Name: "Tier 6 Splash Charm",
    Index: "t6 Splash Charm",
    Enabled: false,
    ItemLevel: 1,
    RequiredLevel: 35,
    Code: "cm4",
    Properties: [
      {
        PropertyString: "50 Percent Melee Splash Damage",
        Index: 0
      },
      {
        PropertyString: "-20 to -26 Enhanced Damage",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Splash Charm",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Small Charm",
        Index: "Small Charm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Coldkill",
    Index: "Coldkill",
    Enabled: true,
    ItemLevel: 44,
    RequiredLevel: 36,
    Code: "9ha",
    Properties: [
      {
        PropertyString: "10% Chance to cast level 10 ice blast on striking",
        Index: 4
      },
      {
        PropertyString: "10% Chance to cast level 5 frost nova when struck",
        Index: 5
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+150-190% Enhanced Damage",
        Index: 6
      },
      {
        PropertyString: "+40 to Minimum Cold Damage",
        Index: 0
      },
      {
        PropertyString: "+15 to Maximum Cold Resist",
        Index: 2
      },
      {
        PropertyString: "Cold Resist +15%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(25-29) to (52-60)"
        }
      ],
      EquipmentType: 1,
      Name: "Hatchet",
      RequiredStrength: 25,
      RequiredDexterity: 25,
      Durability: 250,
      ItemLevel: 31,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Wand",
    Name: "Arm of King Leoric",
    Index: "Arm of King Leoric",
    Enabled: true,
    ItemLevel: 44,
    RequiredLevel: 36,
    Code: "9bw",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 10 bone spirit when struck",
        Index: 1
      },
      {
        PropertyString: "10% Chance to cast level 2 bone prison when struck",
        Index: 3
      },
      {
        PropertyString: "+2 to Summoning Skills (Necromancer only)",
        Index: 0
      },
      {
        PropertyString: "+2 to Poison and Bone Skills (Necromancer only)",
        Index: 5
      },
      {
        PropertyString: "+10 Faster Cast Rate",
        Index: 4
      },
      {
        PropertyString: "+2 to Terror (Necromancer Only)",
        Index: 6
      },
      {
        PropertyString: "+2 to Raise Skeletal Mage (Necromancer Only)",
        Index: 7
      },
      {
        PropertyString: "+3 to Skeleton Mastery (Necromancer Only)",
        Index: 8
      },
      {
        PropertyString: "+3 to Raise Skeleton (Necromancer Only)",
        Index: 9
      },
      {
        PropertyString: "+ to Mana",
        Index: 2
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "10 to 22"
        }
      ],
      EquipmentType: 1,
      Name: "Tomb Wand",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 43,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Knife",
    Name: "Heart Carver",
    Index: "Heart Carver",
    Enabled: true,
    ItemLevel: 44,
    RequiredLevel: 36,
    Code: "9di",
    Properties: [
      {
        PropertyString: "+190-240% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "Adds 15-35 to Damage",
        Index: 2
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 1
      },
      {
        PropertyString: "+35 Deadly Strike",
        Index: 0
      },
      {
        PropertyString: "+4 to Find Potion (Barbarian Only)",
        Index: 4
      },
      {
        PropertyString: "+4 to Find Item (Barbarian Only)",
        Index: 5
      },
      {
        PropertyString: "+4 to Deadly Treasures (Barbarian Only)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(44-49) to (110-123)"
        }
      ],
      EquipmentType: 1,
      Name: "Rondel",
      RequiredStrength: 25,
      RequiredDexterity: 58,
      Durability: 250,
      ItemLevel: 36,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Endlesshail",
    Index: "Endlesshail",
    Enabled: true,
    ItemLevel: 44,
    RequiredLevel: 36,
    Code: "8cb",
    Properties: [
      {
        PropertyString: "+180-220% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "Adds 15-30 to Cold Damage",
        Index: 5
      },
      {
        PropertyString: "+3-5 to Strafe (Amazon Only)",
        Index: 3
      },
      {
        PropertyString: "+50 Defense vs. Missile",
        Index: 2
      },
      {
        PropertyString: "+40 to Mana",
        Index: 1
      },
      {
        PropertyString: "Cold Resist +35%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(30-35) to (72-83)"
        }
      ],
      EquipmentType: 1,
      Name: "Double Bow",
      RequiredStrength: 58,
      RequiredDexterity: 73,
      Durability: 0,
      ItemLevel: 39,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Pus Spitter",
    Index: "Pus Spiter",
    Enabled: true,
    ItemLevel: 44,
    RequiredLevel: 36,
    Code: "8mx",
    Properties: [
      {
        PropertyString: "4% Chance to cast level 1 lower resist on striking",
        Index: 1
      },
      {
        PropertyString: "9% Chance to cast level 6 poison nova when struck",
        Index: 4
      },
      {
        PropertyString: "+2",
        Index: 2
      },
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+150-220% Enhanced Damage",
        Index: 6
      },
      {
        PropertyString: "to Attack Rating",
        Index: 7
      },
      {
        PropertyString: "+192 to Minimum Poison Damage",
        Index: 0
      },
      {
        PropertyString: "Requirements -60%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(50-64) to (105-134)"
        }
      ],
      EquipmentType: 1,
      Name: "Siege Crossbow",
      RequiredStrength: 80,
      RequiredDexterity: 70,
      Durability: 0,
      ItemLevel: 40,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Ghoulhide",
    Index: "Ghoulhide",
    Enabled: true,
    ItemLevel: 44,
    RequiredLevel: 36,
    Code: "xmg",
    Properties: [
      {
        PropertyString: "+% Damage to Undead Damage to Undead",
        Index: 1
      },
      {
        PropertyString: "to Attack Rating against Undead",
        Index: 0
      },
      {
        PropertyString: "Adds 4-5 Mana stolen per hit",
        Index: 2
      },
      {
        PropertyString: "+150-190 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "20 to Life",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "95-110",
      EquipmentType: 0,
      Name: "Heavy Bracers",
      RequiredStrength: 58,
      RequiredDexterity: 0,
      Durability: 16,
      ItemLevel: 43,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "Silkweave",
    Index: "Silkweave",
    Enabled: true,
    ItemLevel: 44,
    RequiredLevel: 36,
    Code: "xmb",
    Properties: [
      {
        PropertyString: "+30 Faster Run/Walk",
        Index: 4
      },
      {
        PropertyString: "+150-190 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+200 Defense vs. Missile",
        Index: 2
      },
      {
        PropertyString: "+10 Increase Maximum Mana",
        Index: 3
      },
      {
        PropertyString: "+5 to Mana after each Kill",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "23 to 52",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "95-110",
      EquipmentType: 0,
      Name: "Mesh Boots",
      RequiredStrength: 65,
      RequiredDexterity: 0,
      Durability: 66,
      ItemLevel: 43,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Belt",
    Name: "Gloom's Trap",
    Index: "Gloomstrap",
    Enabled: true,
    ItemLevel: 45,
    RequiredLevel: 36,
    Code: "zmb",
    Properties: [
      {
        PropertyString: "+5 Mana stolen per hit",
        Index: 2
      },
      {
        PropertyString: "+120-150 Enhanced Defense",
        Index: 3
      },
      {
        PropertyString: "15 to Vitality",
        Index: 4
      },
      {
        PropertyString: "+15 Increase Maximum Mana",
        Index: 1
      },
      {
        PropertyString: "Regenerate Mana 15%",
        Index: 5
      },
      {
        PropertyString: "-3 to Light Radius",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "79-90",
      EquipmentType: 0,
      Name: "Mesh Belt",
      RequiredStrength: 58,
      RequiredDexterity: 0,
      Durability: 16,
      ItemLevel: 43,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Sword",
    Name: "Warrior Untamed",
    Index: "Warrior Untamed",
    Enabled: true,
    ItemLevel: 30,
    RequiredLevel: 36,
    Code: "wsd",
    Properties: [
      {
        PropertyString: "+40 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "Adds 40-100 to Damage",
        Index: 0
      },
      {
        PropertyString: "+1 to Shout",
        Index: 1
      },
      {
        PropertyString: "+1 to Battle Orders",
        Index: 2
      },
      {
        PropertyString: "+1 to Battle Command",
        Index: 3
      },
      {
        PropertyString: "Requirements +50%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "48 to 120"
        }
      ],
      EquipmentType: 1,
      Name: "War Sword",
      RequiredStrength: 71,
      RequiredDexterity: 45,
      Durability: 250,
      ItemLevel: 27,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Deathfoe",
    Index: "Deathfoe",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 36,
    Code: "9sm",
    Properties: [
      {
        PropertyString: "+185-235% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 15-30 to Damage",
        Index: 4
      },
      {
        PropertyString: "+250% Damage to Undead Damage to Undead",
        Index: 3
      },
      {
        PropertyString: "Adds 55-75 to Cold Damage",
        Index: 5
      },
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 1
      },
      {
        PropertyString: "Cold Resist +35%",
        Index: 6
      },
      {
        PropertyString: "+1 Half Freeze Duration",
        Index: 7
      },
      {
        PropertyString: "5 to Experience Gained",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(37-41) to (89-100)"
        }
      ],
      EquipmentType: 1,
      Name: "Cutlass",
      RequiredStrength: 25,
      RequiredDexterity: 52,
      Durability: 250,
      ItemLevel: 43,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Gharbad's Cry",
    Index: "Gharbad's Cry",
    Enabled: true,
    ItemLevel: 32,
    RequiredLevel: 36,
    Code: "flb",
    Properties: [
      {
        PropertyString: "11% Chance to cast level 6 confuse on striking",
        Index: 3
      },
      {
        PropertyString: "+70-100% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+25-35 to Minimum Damage",
        Index: 2
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+6-8 Mana stolen per hit",
        Index: 5
      },
      {
        PropertyString: "+2-4 Replenish Life",
        Index: 6
      },
      {
        PropertyString: "Level 15 Dopplezon (15 Charges)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(40-53) to (25-30)"
        },
        {
          Type: 1,
          DamageString: "(47-61) to (44-52)"
        }
      ],
      EquipmentType: 1,
      Name: "Flamberge",
      RequiredStrength: 70,
      RequiredDexterity: 49,
      Durability: 250,
      ItemLevel: 27,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Staff of the Arch-Magus",
    Index: "Staff of the Arch-Magus",
    Enabled: true,
    ItemLevel: 31,
    RequiredLevel: 36,
    Code: "bst",
    Properties: [
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+2 to Lightning Skills (Sorceress only)",
        Index: 5
      },
      {
        PropertyString: "+30 Faster Cast Rate",
        Index: 4
      },
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 6
      },
      {
        PropertyString: "25 to Strength",
        Index: 2
      },
      {
        PropertyString: "25 to Dexterity",
        Index: 3
      },
      {
        PropertyString: "+ to Mana",
        Index: 1
      },
      {
        PropertyString: "3-5 to Experience Gained",
        Index: 7
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "6 to 13"
        }
      ],
      EquipmentType: 1,
      Name: "Battle Staff",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 17,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Staff of Shadows",
    Index: "Staff of Shadows",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 36,
    Code: "8ss",
    Properties: [
      {
        PropertyString: "11% Chance to cast level 2 dim vision when struck",
        Index: 4
      },
      {
        PropertyString: "1 to All Skills",
        Index: 7
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 3
      },
      {
        PropertyString: "+36-65 to Unsummon",
        Index: 0
      },
      {
        PropertyString: "+36-65 to Unsummon",
        Index: 1
      },
      {
        PropertyString: "+36-65 to Unsummon",
        Index: 2
      },
      {
        PropertyString: "+8-12 Damage Reduced by",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "6 to 21"
        }
      ],
      EquipmentType: 1,
      Name: "Jo Staff",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 30,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Weightless Grace",
    Index: "Weightless Grace",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 36,
    Code: "ltp",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 3
      },
      {
        PropertyString: "+300-400 Defense",
        Index: 0
      },
      {
        PropertyString: "25 to Dexterity",
        Index: 2
      },
      {
        PropertyString: "50-60 to Life",
        Index: 6
      },
      {
        PropertyString: "+50 extra gold from monsters",
        Index: 4
      },
      {
        PropertyString: "+35-50 better chance of getting magic item",
        Index: 5
      },
      {
        PropertyString: "Requirements -50%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "390-490",
      EquipmentType: 0,
      Name: "Light Plate",
      RequiredStrength: 41,
      RequiredDexterity: 0,
      Durability: 60,
      ItemLevel: 35,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "The Defiler's Flesh",
    Index: "The Defiler's Flesh",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 36,
    Code: "xla",
    Properties: [
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "Adds 4-6 Life stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+1-3 to Poison Explosion (Necromancer Only)",
        Index: 6
      },
      {
        PropertyString: "+1-3 to Summon Resist (Necromancer Only)",
        Index: 7
      },
      {
        PropertyString: "+100-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "40 to Life",
        Index: 5
      },
      {
        PropertyString: "+5-8 Life after each Kill",
        Index: 1
      },
      {
        PropertyString: "+40 better chance of getting magic item",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "246-307",
      EquipmentType: 0,
      Name: "Demonhide Armor",
      RequiredStrength: 50,
      RequiredDexterity: 0,
      Durability: 28,
      ItemLevel: 37,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Pepin's Blessing",
    Index: "Pepin's Blessing",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 36,
    Code: "xap",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 4
      },
      {
        PropertyString: "+5 Mana stolen per hit",
        Index: 6
      },
      {
        PropertyString: "+100-125 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+5-8 Replenish Life",
        Index: 1
      },
      {
        PropertyString: "Regenerate Mana 75%",
        Index: 2
      },
      {
        PropertyString: "+4 to Mana after each Kill",
        Index: 5
      },
      {
        PropertyString: "3 to Experience Gained",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "92-103",
      EquipmentType: 0,
      Name: "War Hat",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 34,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Merc Equip",
    Name: "Drunken Fury",
    Index: "Drunken Fury",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 36,
    Code: "xkp",
    Properties: [
      {
        PropertyString: "-10 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+25% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "-10 Faster Hit Recovery",
        Index: 6
      },
      {
        PropertyString: "+20-30 to Maximum Damage",
        Index: 4
      },
      {
        PropertyString: "+14 to Lightning Fury",
        Index: 1
      },
      {
        PropertyString: "+100-125 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "-10 to Dexterity",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "106-119",
      EquipmentType: 0,
      Name: "Sallet",
      RequiredStrength: 43,
      RequiredDexterity: 0,
      Durability: 18,
      ItemLevel: 37,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Gloves",
    Name: "Bloodyearn",
    Index: "Bloodyearn",
    Enabled: true,
    ItemLevel: 36,
    RequiredLevel: 36,
    Code: "uvg",
    Properties: [
      {
        PropertyString: "+1-3 to Combat Skills (Barbarian only)",
        Index: 5
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+6 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+120-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+25 Increase Maximum Life",
        Index: 1
      },
      {
        PropertyString: "to Life",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "125-142",
      EquipmentType: 0,
      Name: "Vampirebone Gloves",
      RequiredStrength: 50,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 63,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Belt",
    Name: "Xenophobe",
    Index: "Xenophobe",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 36,
    Code: "zlb",
    Properties: [
      {
        PropertyString: "10% Chance to cast level 3 terror on striking",
        Index: 2
      },
      {
        PropertyString: "+1 to Curses (Necromancer only)",
        Index: 3
      },
      {
        PropertyString: "+15-20% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+3 to Terror (Necromancer Only)",
        Index: 4
      },
      {
        PropertyString: "+100-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+ Defense",
        Index: 1
      },
      {
        PropertyString: "5-10% Damage Taken Goes To Mana",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "60-75",
      EquipmentType: 0,
      Name: "Demonhide Sash",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 36,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Orb",
    Name: "Terminus Rod",
    Index: "Terminus Rod",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 36,
    Code: "ob6",
    Properties: [
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "10-15 to Fire Skill Damage",
        Index: 1
      },
      {
        PropertyString: "10-15 to Enemy Fire Resistance",
        Index: 2
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 5
      },
      {
        PropertyString: "15 to Energy",
        Index: 6
      },
      {
        PropertyString: "Fire Resist +75%",
        Index: 4
      },
      {
        PropertyString: "+15-20 Fire Absorb",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "8 to 21"
        }
      ],
      EquipmentType: 1,
      Name: "Glowing Orb",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 32,
      Type: {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      },
      RequiredClass: "Sorceress"
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "Rictus of the Joker",
    Index: "Rictus of the Joker",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 36,
    Code: "ne8",
    Properties: [
      {
        PropertyString: "+1-3 to Curses (Necromancer only)",
        Index: 3
      },
      {
        PropertyString: "+2",
        Index: 4
      },
      {
        PropertyString: "+30 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "25-50% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "+100-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "Socketed (2)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "90-112",
      EquipmentType: 0,
      Name: "Sexton Trophy",
      RequiredStrength: 47,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 45,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Primal Helm",
    Name: "Slayer's Glee",
    Index: "Slayer's Glee",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 36,
    Code: "ba8",
    Properties: [
      {
        PropertyString: "50% Chance to cast level 1 decrepify when you Kill an Enemy",
        Index: 4
      },
      {
        PropertyString: "25% Chance to cast level 2 terror when struck",
        Index: 5
      },
      {
        PropertyString: "+1",
        Index: 3
      },
      {
        PropertyString: "+5 to Frenzy (Barbarian Only)",
        Index: 1
      },
      {
        PropertyString: "+2 to Berserk (Barbarian Only)",
        Index: 2
      },
      {
        PropertyString: "+125-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+10 Replenish Life",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "177-197",
      EquipmentType: 0,
      Name: "Rage Mask",
      RequiredStrength: 88,
      RequiredDexterity: 0,
      Durability: 45,
      ItemLevel: 44,
      Type: {
        Name: "Primal Helm",
        Index: "Primal Helm",
        Class: "bar"
      },
      RequiredClass: "Barbarian"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Scarab Cleaver",
    Index: "Scarab Cleaver",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 36,
    Code: "9xf",
    Properties: [
      {
        PropertyString: "+2",
        Index: 2
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+10 to Maximum Damage",
        Index: 7
      },
      {
        PropertyString: "+150-250% Damage to Demons Damage to Demons",
        Index: 6
      },
      {
        PropertyString: "Lightning Resist +75%",
        Index: 4
      },
      {
        PropertyString: "+20-25 Lightning Absorb",
        Index: 5
      },
      {
        PropertyString: "Socketed (1-2)",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(20-24) to (102-121)"
        }
      ],
      EquipmentType: 1,
      Name: "Fascia",
      RequiredStrength: 69,
      RequiredDexterity: 69,
      Durability: 250,
      ItemLevel: 36,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Scepter",
    Name: "Zakarum's Hand",
    Index: "Zakarum's Hand",
    Enabled: true,
    ItemLevel: 45,
    RequiredLevel: 37,
    Code: "9sc",
    Properties: [
      {
        PropertyString: "6% Chance to cast level 5 blizzard on striking",
        Index: 4
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 6
      },
      {
        PropertyString: "+180-220% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 1
      },
      {
        PropertyString: "+8 Mana stolen per hit",
        Index: 0
      },
      {
        PropertyString: "+2 to Holy Freeze (Paladin Only)",
        Index: 7
      },
      {
        PropertyString: "+2 to Holy Shock (Paladin Only)",
        Index: 8
      },
      {
        PropertyString: "Regenerate Mana 10%",
        Index: 2
      },
      {
        PropertyString: "+15 Heal Stamina Plus",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(36-41) to (67-76)"
        }
      ],
      EquipmentType: 1,
      Name: "Rune Scepter",
      RequiredStrength: 58,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 31,
      Type: {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Ginther's Rift",
    Index: "Ginther's Rift",
    Enabled: true,
    ItemLevel: 45,
    RequiredLevel: 37,
    Code: "9cr",
    Properties: [
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "Adds 50-120 Adds 50-120 magic damage",
        Index: 4
      },
      {
        PropertyString: "+7-12 Magic Damage Reduced by",
        Index: 0
      },
      {
        PropertyString: "Repairs 0.2 durability per second",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(26-32) to (70-87)"
        }
      ],
      EquipmentType: 1,
      Name: "Dimensional Blade",
      RequiredStrength: 85,
      RequiredDexterity: 60,
      Durability: 290,
      ItemLevel: 37,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Hone Sundan",
    Index: "Hone Sundan",
    Enabled: true,
    ItemLevel: 45,
    RequiredLevel: 37,
    Code: "9st",
    Properties: [
      {
        PropertyString: "+160-200% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "Adds 20-40 to Damage",
        Index: 1
      },
      {
        PropertyString: "+45 Chance of Crushing Blow",
        Index: 2
      },
      {
        PropertyString: "Socketed (3)",
        Index: 0
      },
      {
        PropertyString: "Repairs 0.1 durability per second",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(95-107) to (193-217)"
        }
      ],
      EquipmentType: 1,
      Name: "Yari",
      RequiredStrength: 101,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 44,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Crow Caw",
    Index: "Crow Caw",
    Enabled: true,
    ItemLevel: 45,
    RequiredLevel: 37,
    Code: "xcl",
    Properties: [
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+15 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "35% Chance of Open Wounds",
        Index: 0
      },
      {
        PropertyString: "+150-180 Enhanced Defense",
        Index: 1
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 2
      },
      {
        PropertyString: "Level 5 Raven (3 Charges)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "442-495",
      EquipmentType: 0,
      Name: "Tigulated Mail",
      RequiredStrength: 86,
      RequiredDexterity: 0,
      Durability: 36,
      ItemLevel: 43,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Taskmaster's Curse",
    Index: "Taskmaster's Curse",
    Enabled: true,
    ItemLevel: 31,
    RequiredLevel: 37,
    Code: "gix",
    Properties: [
      {
        PropertyString: "4% Chance to cast level 2 confuse on striking",
        Index: 2
      },
      {
        PropertyString: "+70-100% Enhanced Damage",
        Index: 8
      },
      {
        PropertyString: "+30-40 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+60-80 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+6 Mana stolen per hit",
        Index: 3
      },
      {
        PropertyString: "45 to Strength",
        Index: 4
      },
      {
        PropertyString: "20 to Dexterity",
        Index: 6
      },
      {
        PropertyString: "30-50 to Life",
        Index: 7
      },
      {
        PropertyString: "Requirements +35%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(67-84) to (136-170)"
        }
      ],
      EquipmentType: 1,
      Name: "Giant Axe",
      RequiredStrength: 70,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 27,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Knife",
    Name: "Chimera's Claw",
    Index: "Chimera's Claw",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 37,
    Code: "9dg",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 9 lightning on striking",
        Index: 5
      },
      {
        PropertyString: "+170-220% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "20-25% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "Adds 4-7 Life stolen per hit",
        Index: 6
      },
      {
        PropertyString: "+25 Deadly Strike",
        Index: 3
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 4
      },
      {
        PropertyString: "Fire Resist +25-30%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(16-19) to (48-57)"
        }
      ],
      EquipmentType: 1,
      Name: "Poignard",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 31,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Wand",
    Name: "Dracolich Fang",
    Index: "Dracolich Fang",
    Enabled: true,
    ItemLevel: 37,
    RequiredLevel: 37,
    Code: "gwn",
    Properties: [
      {
        PropertyString: "+1",
        Index: 0
      },
      {
        PropertyString: "+100 Mana stolen per hit",
        Index: 2
      },
      {
        PropertyString: "+100 Life stolen per hit",
        Index: 1
      },
      {
        PropertyString: "+6-10 Replenish Life",
        Index: 3
      },
      {
        PropertyString: "Regenerate Mana 35%",
        Index: 4
      },
      {
        PropertyString: "+10 Damage Reduced by 10%%",
        Index: 5
      },
      {
        PropertyString: "+1 Cannot Be Frozen",
        Index: 6
      },
      {
        PropertyString: "+80-90 Poison Length Reduced by",
        Index: 7
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "5 to 11"
        }
      ],
      EquipmentType: 1,
      Name: "Grim Wand",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 26,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Telena's War Bow",
    Index: "Telena's War Bow",
    Enabled: true,
    ItemLevel: 31,
    RequiredLevel: 37,
    Code: "lwb",
    Properties: [
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "Adds 40-80 to Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 5-7 Life stolen per hit",
        Index: 2
      },
      {
        PropertyString: "+10-15 Chance of Crushing Blow",
        Index: 6
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 5
      },
      {
        PropertyString: "+7 to Mana after each Kill",
        Index: 3
      },
      {
        PropertyString: "2 to Experience Gained",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "43 to 103"
        }
      ],
      EquipmentType: 1,
      Name: "Long War Bow",
      RequiredStrength: 50,
      RequiredDexterity: 65,
      Durability: 0,
      ItemLevel: 31,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Iceweaver",
    Index: "Iceweaver",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 37,
    Code: "8hb",
    Properties: [
      {
        PropertyString: "8% Chance to cast level 4 frost nova when struck",
        Index: 3
      },
      {
        PropertyString: "+185-235% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 20-40 to Damage",
        Index: 6
      },
      {
        PropertyString: "Adds 40-80 to Cold Damage",
        Index: 4
      },
      {
        PropertyString: "15 to Cold Skill Damage",
        Index: 5
      },
      {
        PropertyString: "+5 to Ice Arrow",
        Index: 1
      },
      {
        PropertyString: "Level 10 Chilling Armor (3 Charges)",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(42-46) to (102-113)"
        }
      ],
      EquipmentType: 1,
      Name: "Razor Bow",
      RequiredStrength: 25,
      RequiredDexterity: 62,
      Durability: 0,
      ItemLevel: 33,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Dancing Scarecrow",
    Index: "Dancing Scarecrow",
    Enabled: true,
    ItemLevel: 31,
    RequiredLevel: 37,
    Code: "tsp",
    Properties: [
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+15 Faster Cast Rate",
        Index: 3
      },
      {
        PropertyString: "+15 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "+15 Faster Block Rate",
        Index: 4
      },
      {
        PropertyString: "+33 Piercing Attack",
        Index: 7
      },
      {
        PropertyString: "Adds 40-70 to Damage",
        Index: 0
      },
      {
        PropertyString: "200 to Attack Rating",
        Index: 5
      },
      {
        PropertyString: "+1 Knockback",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "45 to 85"
        },
        {
          Type: 2,
          DamageString: "52 to 100"
        }
      ],
      EquipmentType: 1,
      Name: "Throwing Spear",
      RequiredStrength: 0,
      RequiredDexterity: 65,
      Durability: 250,
      ItemLevel: 29,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Javelin",
    Name: "Rhyme of the Bard",
    Index: "Rhyme of the Bard",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 37,
    Code: "9ja",
    Properties: [
      {
        PropertyString: "+35 Increased Attack Speed",
        Index: 6
      },
      {
        PropertyString: "+200-250% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+60 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      },
      {
        PropertyString: "Level 3 Battle Orders (200 Charges)",
        Index: 3
      },
      {
        PropertyString: "Level 3 Shout (200 Charges)",
        Index: 4
      },
      {
        PropertyString: "Level 2 War Cry (200 Charges)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(18-21) to (57-66)"
        },
        {
          Type: 2,
          DamageString: "(42-49) to (96-112)"
        }
      ],
      EquipmentType: 1,
      Name: "War Javelin",
      RequiredStrength: 25,
      RequiredDexterity: 25,
      Durability: 250,
      ItemLevel: 30,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Shield",
    Name: "Yemista's Defender",
    Index: "Yemista's Defender",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 37,
    Code: "xuc",
    Properties: [
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+15 Faster Cast Rate",
        Index: 2
      },
      {
        PropertyString: "+70-100 Defense",
        Index: 0
      },
      {
        PropertyString: "100 to Life",
        Index: 3
      },
      {
        PropertyString: "+3-5 Replenish Life",
        Index: 4
      },
      {
        PropertyString: "+3-5 to Mana after each Kill",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "8 to 12",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "111-141",
      EquipmentType: 0,
      Name: "Defender",
      RequiredStrength: 38,
      RequiredDexterity: 0,
      Durability: 68,
      ItemLevel: 34,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Devil's Invocation",
    Index: "Devil's Invocation",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 37,
    Code: "xlg",
    Properties: [
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 1
      },
      {
        PropertyString: "+5 Mana stolen per hit",
        Index: 6
      },
      {
        PropertyString: "+100-125 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+30-50 to Mana",
        Index: 2
      },
      {
        PropertyString: "Regenerate Mana 50%",
        Index: 4
      },
      {
        PropertyString: "+3-5 to Mana after each Kill",
        Index: 5
      },
      {
        PropertyString: "10-15% Damage Taken Goes To Mana",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "58-65",
      EquipmentType: 0,
      Name: "Demonhide Gloves",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 33,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "Hollowed Ground",
    Index: "Hollowed Ground",
    Enabled: true,
    ItemLevel: 37,
    RequiredLevel: 37,
    Code: "umb",
    Properties: [
      {
        PropertyString: "Level 2-5 Sanctuary Aura When Equipped",
        Index: 5
      },
      {
        PropertyString: "+1",
        Index: 0
      },
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "+125% Damage to Undead Damage to Undead",
        Index: 3
      },
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 4
      },
      {
        PropertyString: "+150-200 Enhanced Defense",
        Index: 1
      },
      {
        PropertyString: "15-25 to Dexterity",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "69 to 118",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "150-180",
      EquipmentType: 0,
      Name: "Boneweave Boots",
      RequiredStrength: 118,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 72,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Belt",
    Name: "Wave Whipper",
    Index: "Wave Whipper",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 37,
    Code: "zvb",
    Properties: [
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 5
      },
      {
        PropertyString: "+5-10 Chance of Crushing Blow",
        Index: 2
      },
      {
        PropertyString: "+5-10 Deadly Strike",
        Index: 3
      },
      {
        PropertyString: "+1 to Increased Stamina",
        Index: 4
      },
      {
        PropertyString: "+110-160 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "Cold Resist +25-35%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "67-83",
      EquipmentType: 0,
      Name: "Sharkskin Belt",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 39,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Auric Shields",
    Name: "Death to the Soul",
    Index: "Death to the Soul",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 37,
    Code: "pa6",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 3
      },
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "30-45% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 5
      },
      {
        PropertyString: "+120-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "All Resistances +40-60",
        Index: 4
      },
      {
        PropertyString: "Socketed (1)",
        Index: 6
      },
      {
        PropertyString: "Level 12 Quickness (5 Charges)",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "12 to 16",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "224-255",
      EquipmentType: 0,
      Name: "Akaran Targe",
      RequiredStrength: 44,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 35,
      Type: {
        Name: "Auric Shields",
        Index: "Auric Shields",
        Class: "pal"
      },
      RequiredClass: "Paladin"
    }
  },
  {
    Type: "Pelt",
    Name: "Centaur's Sight",
    Index: "Centaur's Sight",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 37,
    Code: "dr8",
    Properties: [
      {
        PropertyString: "+2 to Elemental Skills (Druid only)",
        Index: 3
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 4
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 5
      },
      {
        PropertyString: "+75% Damage to Undead Damage to Undead",
        Index: 7
      },
      {
        PropertyString: "+221-250 to Throw",
        Index: 1
      },
      {
        PropertyString: "+221-250 to Unsummon",
        Index: 2
      },
      {
        PropertyString: "+155-185 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "35% Stamina Drain",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "173-193",
      EquipmentType: 0,
      Name: "Hunter's Guise",
      RequiredStrength: 56,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 46,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Storm Demon's Glair",
    Index: "Storm Demon's Glair",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 37,
    Code: "9ar",
    Properties: [
      {
        PropertyString: "6% Chance to cast level 9 nova on striking",
        Index: 2
      },
      {
        PropertyString: "+1-3 to Shadow Disciplines (Assassin only)",
        Index: 1
      },
      {
        PropertyString: "+180-230% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+15 Faster Cast Rate",
        Index: 6
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 3
      },
      {
        PropertyString: "+2-4 to Vengeance",
        Index: 4
      },
      {
        PropertyString: "Regenerate Mana 25%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(30-36) to (67-79)"
        }
      ],
      EquipmentType: 1,
      Name: "Quhab",
      RequiredStrength: 57,
      RequiredDexterity: 57,
      Durability: 250,
      ItemLevel: 28,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Scepter",
    Name: "The Fetid Sprinkler",
    Index: "The Fetid Sprinkler",
    Enabled: true,
    ItemLevel: 46,
    RequiredLevel: 38,
    Code: "9qs",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 1 decrepify on striking",
        Index: 1
      },
      {
        PropertyString: "10% Chance to cast level 1 confuse on striking",
        Index: 2
      },
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "+160-190% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "Adds 15-25 to Damage",
        Index: 6
      },
      {
        PropertyString: "150-200 to Attack Rating",
        Index: 5
      },
      {
        PropertyString: "+409 to Minimum Poison Damage",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(51-55) to (118-129)"
        }
      ],
      EquipmentType: 1,
      Name: "Holy Water Sprinkler",
      RequiredStrength: 76,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 40,
      Type: {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Club",
    Name: "Fleshrender",
    Index: "Fleshrender",
    Enabled: true,
    ItemLevel: 46,
    RequiredLevel: 38,
    Code: "9sp",
    Properties: [
      {
        PropertyString: "+2 to Shape Shifting Skills (Druid only)",
        Index: 7
      },
      {
        PropertyString: "+1",
        Index: 6
      },
      {
        PropertyString: "+130-200% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "Adds 35-50 to Damage",
        Index: 4
      },
      {
        PropertyString: "+20 Chance of Crushing Blow",
        Index: 2
      },
      {
        PropertyString: "+20 Deadly Strike",
        Index: 3
      },
      {
        PropertyString: "25% Chance of Open Wounds",
        Index: 0
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(64-74) to (107-125)"
        }
      ],
      EquipmentType: 1,
      Name: "Barbed Club",
      RequiredStrength: 30,
      RequiredDexterity: 0,
      Durability: 270,
      ItemLevel: 32,
      Type: {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Knife",
    Name: "Blackbog's Sharp",
    Index: "Blackbog's Sharp",
    Enabled: true,
    ItemLevel: 46,
    RequiredLevel: 38,
    Code: "9kr",
    Properties: [
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "Adds 15-45 to Damage",
        Index: 2
      },
      {
        PropertyString: "+500 to Minimum Poison Damage",
        Index: 4
      },
      {
        PropertyString: "+5 to Poison Dagger (Necromancer Only)",
        Index: 5
      },
      {
        PropertyString: "+4 to Poison Explosion (Necromancer Only)",
        Index: 6
      },
      {
        PropertyString: "+4 to Poison Nova (Necromancer Only)",
        Index: 7
      },
      {
        PropertyString: "+50 Slows target by",
        Index: 0
      },
      {
        PropertyString: "+50 Defense",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "30 to 76"
        }
      ],
      EquipmentType: 1,
      Name: "Cinquedeas",
      RequiredStrength: 25,
      RequiredDexterity: 88,
      Durability: 250,
      ItemLevel: 42,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Darksight Helm",
    Index: "Darksight Helm",
    Enabled: true,
    ItemLevel: 46,
    RequiredLevel: 38,
    Code: "xhl",
    Properties: [
      {
        PropertyString: "6% Chance to cast level 3 dim vision when struck",
        Index: 4
      },
      {
        PropertyString: "+5 Mana stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+ Defense",
        Index: 1
      },
      {
        PropertyString: "Fire Resist +20-40%",
        Index: 6
      },
      {
        PropertyString: "+1 Cannot Be Frozen",
        Index: 2
      },
      {
        PropertyString: "-4 to Light Radius",
        Index: 0
      },
      {
        PropertyString: "Level 5 Cloak of Shadows (30 Charges)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "75",
      EquipmentType: 0,
      Name: "Basinet",
      RequiredStrength: 82,
      RequiredDexterity: 0,
      Durability: 30,
      ItemLevel: 45,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Armor",
    Name: "Shaftstop",
    Index: "Shaftstop",
    Enabled: true,
    ItemLevel: 46,
    RequiredLevel: 38,
    Code: "xhn",
    Properties: [
      {
        PropertyString: "+180-220 Enhanced Defense",
        Index: 3
      },
      {
        PropertyString: "+250 Defense vs. Missile",
        Index: 0
      },
      {
        PropertyString: "60 to Life",
        Index: 2
      },
      {
        PropertyString: "+30 Damage Reduced by 30%%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "557-636",
      EquipmentType: 0,
      Name: "Mesh Armor",
      RequiredStrength: 92,
      RequiredDexterity: 0,
      Durability: 45,
      ItemLevel: 45,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Tiamat's Rebuke",
    Index: "Tiamat's Rebuke",
    Enabled: true,
    ItemLevel: 46,
    RequiredLevel: 38,
    Code: "xit",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 9 frost nova when struck",
        Index: 5
      },
      {
        PropertyString: "5% Chance to cast level 7 nova when struck",
        Index: 6
      },
      {
        PropertyString: "3% Chance to cast level 6 hydra when struck",
        Index: 7
      },
      {
        PropertyString: "Adds 35-95 to Fire Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 1-120 to Lightning Damage",
        Index: 2
      },
      {
        PropertyString: "Adds 27-53 to Cold Damage",
        Index: 0
      },
      {
        PropertyString: "+140-200 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "All Resistances +25-35",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "15 to 24",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "144-180",
      EquipmentType: 0,
      Name: "Dragon Shield",
      RequiredStrength: 91,
      RequiredDexterity: 0,
      Durability: 116,
      ItemLevel: 45,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Pure Rancor",
    Index: "Pure Rancor",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 38,
    Code: "9ha",
    Properties: [
      {
        PropertyString: "+2",
        Index: 1
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+175-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+466 to Minimum Poison Damage",
        Index: 4
      },
      {
        PropertyString: "+1-3 to Decrepify",
        Index: 5
      },
      {
        PropertyString: "Poison Resist +25%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(27-30) to (57-63)"
        }
      ],
      EquipmentType: 1,
      Name: "Hatchet",
      RequiredStrength: 25,
      RequiredDexterity: 25,
      Durability: 295,
      ItemLevel: 31,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Death of a Thousand Cuts",
    Index: "Death of a Thousand Cuts",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 38,
    Code: "9sb",
    Properties: [
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+190-240% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 6-9 Life stolen per hit",
        Index: 5
      },
      {
        PropertyString: "8-12 to Enemy Lightning Resistance",
        Index: 6
      },
      {
        PropertyString: "+ Chance of Crushing Blow",
        Index: 2
      },
      {
        PropertyString: "% Chance of Open Wounds",
        Index: 1
      },
      {
        PropertyString: "+6 to Blade Shield",
        Index: 4
      },
      {
        PropertyString: "Lightning Resist +35%",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(29-34) to (69-81)"
        }
      ],
      EquipmentType: 1,
      Name: "Shamshir",
      RequiredStrength: 58,
      RequiredDexterity: 58,
      Durability: 250,
      ItemLevel: 35,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Demolisher",
    Index: "Demolisher",
    Enabled: true,
    ItemLevel: 33,
    RequiredLevel: 38,
    Code: "gsd",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 4
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "Adds 60-120 to Damage",
        Index: 0
      },
      {
        PropertyString: "+50 Chance of Crushing Blow",
        Index: 1
      },
      {
        PropertyString: "+1 Knockback",
        Index: 3
      },
      {
        PropertyString: "Socketed (2)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "72 to 140"
        },
        {
          Type: 1,
          DamageString: "85 to 162"
        }
      ],
      EquipmentType: 1,
      Name: "Great Sword",
      RequiredStrength: 100,
      RequiredDexterity: 60,
      Durability: 250,
      ItemLevel: 33,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Sweet Agony",
    Index: "Sweet Agony",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 38,
    Code: "92h",
    Properties: [
      {
        PropertyString: "7% Chance to cast level 7 static field when struck",
        Index: 4
      },
      {
        PropertyString: "+190-240% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "35 bonus to Attack Rating",
        Index: 5
      },
      {
        PropertyString: "-2 Drain Life",
        Index: 1
      },
      {
        PropertyString: "Regenerate Mana 50%",
        Index: 3
      },
      {
        PropertyString: "+5 Life after each Kill",
        Index: 2
      },
      {
        PropertyString: "Socketed (2)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(23-27) to (75-88)"
        },
        {
          Type: 1,
          DamageString: "(52-61) to (116-136)"
        }
      ],
      EquipmentType: 1,
      Name: "Espandon",
      RequiredStrength: 73,
      RequiredDexterity: 61,
      Durability: 250,
      ItemLevel: 37,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Footman's Picket",
    Index: "Footman's Picket",
    Enabled: true,
    ItemLevel: 30,
    RequiredLevel: 38,
    Code: "pik",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 6
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 7
      },
      {
        PropertyString: "Adds 60-120 to Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 5-7 Mana stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+7 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "Ethereal (Cannot Be Repaired)",
        Index: 1
      },
      {
        PropertyString: "Repairs 0.25 durability per second",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "74 to 183"
        }
      ],
      EquipmentType: 1,
      Name: "Pike",
      RequiredStrength: 60,
      RequiredDexterity: 45,
      Durability: 250,
      ItemLevel: 24,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Fire Mephit",
    Index: "Fire Mephit",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 38,
    Code: "9b7",
    Properties: [
      {
        PropertyString: "12% Chance to cast level 13 blaze when struck",
        Index: 3
      },
      {
        PropertyString: "1 to All Skills",
        Index: 6
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+180-230% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+ Enhanced Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+1-200 to Minimum Fire Damage",
        Index: 2
      },
      {
        PropertyString: "Fire Resist +35-45%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(16-19) to (162-191)"
        }
      ],
      EquipmentType: 1,
      Name: "Lochaber Axe",
      RequiredStrength: 80,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 33,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Garlana Firebolt",
    Index: "Garlana Firebolt",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 38,
    Code: "8lx",
    Properties: [
      {
        PropertyString: "+2 to Fire Skills",
        Index: 6
      },
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+180-240% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 15-30 to Damage",
        Index: 5
      },
      {
        PropertyString: "+6 to Exploding Arrow",
        Index: 3
      },
      {
        PropertyString: "Cold Resist +25-40%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(54-62) to (105-121)"
        }
      ],
      EquipmentType: 1,
      Name: "Arbalest",
      RequiredStrength: 52,
      RequiredDexterity: 61,
      Durability: 0,
      ItemLevel: 34,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Hatemonger",
    Index: "Hatemonger",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 38,
    Code: "9s9",
    Properties: [
      {
        PropertyString: "+140-225% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+7 Mana stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+7 Life stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+5 to Attract",
        Index: 6
      },
      {
        PropertyString: "+200-300 Defense vs. Melee",
        Index: 1
      },
      {
        PropertyString: "+10-15 Replenish Life",
        Index: 2
      },
      {
        PropertyString: "20-40",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(19-26) to (76-104)"
        },
        {
          Type: 2,
          DamageString: "(64-87) to (120-162)"
        }
      ],
      EquipmentType: 1,
      Name: "Simbilan",
      RequiredStrength: 80,
      RequiredDexterity: 80,
      Durability: 250,
      ItemLevel: 40,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Throwing Knife",
    Name: "Deadly Needle",
    Index: "Deadly Needle",
    Enabled: true,
    ItemLevel: 32,
    RequiredLevel: 38,
    Code: "bkf",
    Properties: [
      {
        PropertyString: "+85-105% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 1
      },
      {
        PropertyString: "+ Deadly Strike",
        Index: 5
      },
      {
        PropertyString: "15 to Strength",
        Index: 4
      },
      {
        PropertyString: "Lightning Resist +20-30%",
        Index: 7
      },
      {
        PropertyString: "Fire Resist +20-30%",
        Index: 6
      },
      {
        PropertyString: "+90 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(26-27) to (64-66)"
        },
        {
          Type: 2,
          DamageString: "(36-37) to (70-72)"
        }
      ],
      EquipmentType: 1,
      Name: "Balanced Knife",
      RequiredStrength: 0,
      RequiredDexterity: 51,
      Durability: 250,
      ItemLevel: 13,
      Type: {
        Name: "Throwing Knife",
        Index: "Throwing Knife",
        Class: ""
      },
      RequiredClass: "Knife"
    }
  },
  {
    Type: "Armor",
    Name: "Cold Comfort",
    Index: "Cold Comfort",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 38,
    Code: "xtu",
    Properties: [
      {
        PropertyString: "15% Chance to cast level 8 chilling armor when struck",
        Index: 2
      },
      {
        PropertyString: "15 to Enemy Cold Resistance",
        Index: 4
      },
      {
        PropertyString: "5-10 to Cold Skill Damage",
        Index: 6
      },
      {
        PropertyString: "+110-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+200-250 Defense",
        Index: 1
      },
      {
        PropertyString: "Cold Resist +50%",
        Index: 3
      },
      {
        PropertyString: "+10 Cold Absorb",
        Index: 5
      },
      {
        PropertyString: "+1 Cannot Be Frozen",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "491-597",
      EquipmentType: 0,
      Name: "Trellised Armor",
      RequiredStrength: 61,
      RequiredDexterity: 0,
      Durability: 32,
      ItemLevel: 40,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Boots",
    Name: "Road to Perdition",
    Index: "Road to Perdition1",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 38,
    Code: "xvb",
    Properties: [
      {
        PropertyString: "+15 Faster Run/Walk",
        Index: 1
      },
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "+120-160 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "20 to Dexterity",
        Index: 3
      },
      {
        PropertyString: "4-7 to Experience Gained",
        Index: 5
      },
      {
        PropertyString: "Repairs 0.08 durability per second",
        Index: 4
      },
      {
        PropertyString: "Level 20 Sacrifice (250 Charges)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "28 to 50",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "74-88",
      EquipmentType: 0,
      Name: "Sharkskin Boots",
      RequiredStrength: 47,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 39,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Pelt",
    Name: "Gathering of Hawks",
    Index: "Gathering of Hawks",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 38,
    Code: "dr7",
    Properties: [
      {
        PropertyString: "+4 to Raven (Druid Only)",
        Index: 1
      },
      {
        PropertyString: "+221-250 to Kick",
        Index: 2
      },
      {
        PropertyString: "+221-250 to Throw",
        Index: 3
      },
      {
        PropertyString: "+221-250 to Unsummon",
        Index: 4
      },
      {
        PropertyString: "+75-100 Defense",
        Index: 0
      },
      {
        PropertyString: "to Life",
        Index: 6
      },
      {
        PropertyString: "Cold Resist +%",
        Index: 5
      },
      {
        PropertyString: "Fire Resist +%",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "121-146",
      EquipmentType: 0,
      Name: "Griffon Headdress",
      RequiredStrength: 50,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 40,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Dark Demense",
    Index: "Dark Demense",
    Enabled: true,
    ItemLevel: 32,
    RequiredLevel: 38,
    Code: "skr",
    Properties: [
      {
        PropertyString: "11% Chance to cast level 4 dim vision when struck",
        Index: 6
      },
      {
        PropertyString: "1 to All Skills",
        Index: 4
      },
      {
        PropertyString: "+1-3 to Martial Arts (Assassin only)",
        Index: 2
      },
      {
        PropertyString: "+1",
        Index: 3
      },
      {
        PropertyString: "+35-45 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+80-100 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "Hit blinds target +2",
        Index: 5
      },
      {
        PropertyString: "Repairs 0.17 durability per second",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(44-54) to (97-117)"
        }
      ],
      EquipmentType: 1,
      Name: "Scissors Katar",
      RequiredStrength: 55,
      RequiredDexterity: 55,
      Durability: 250,
      ItemLevel: 24,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Hand to Hand 2",
    Name: "Slithertongue",
    Index: "Slithertongue",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 38,
    Code: "9cs",
    Properties: [
      {
        PropertyString: "+1-3 to Martial Arts (Assassin only)",
        Index: 5
      },
      {
        PropertyString: "+175-220% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+15-20 to Maximum Damage",
        Index: 8
      },
      {
        PropertyString: "+1000 to Minimum Poison Damage",
        Index: 4
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 6
      },
      {
        PropertyString: "20 to Energy",
        Index: 7
      },
      {
        PropertyString: "+10-20 to Maximum Poison Resist",
        Index: 2
      },
      {
        PropertyString: "Poison Resist +45%",
        Index: 1
      },
      {
        PropertyString: "+75 Poison Length Reduced by",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(44-51) to (116-138)"
        }
      ],
      EquipmentType: 1,
      Name: "Hand Scythe",
      RequiredStrength: 73,
      RequiredDexterity: 73,
      Durability: 250,
      ItemLevel: 41,
      Type: {
        Name: "Hand to Hand 2",
        Index: "Hand to Hand 2",
        Class: "ass"
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Hand to Hand 2",
    Name: "Silent Shank",
    Index: "Silent Shank",
    Enabled: true,
    ItemLevel: 38,
    RequiredLevel: 38,
    Code: "7xf",
    Properties: [
      {
        PropertyString: "+35 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+200-260% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+25 Faster Cast Rate",
        Index: 2
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 7
      },
      {
        PropertyString: "+10-15 Replenish Life",
        Index: 3
      },
      {
        PropertyString: "+1 Cannot Be Frozen",
        Index: 4
      },
      {
        PropertyString: "+20 Reduces all Vendor Prices",
        Index: 5
      },
      {
        PropertyString: "Fade",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(132-158) to (159-190)"
        }
      ],
      EquipmentType: 1,
      Name: "War Fist",
      RequiredStrength: 108,
      RequiredDexterity: 108,
      Durability: 250,
      ItemLevel: 68,
      Type: {
        Name: "Hand to Hand 2",
        Index: "Hand to Hand 2",
        Class: "ass"
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Amulet",
    Name: "Rat Lord's Curse",
    Index: "Rat Lord's Gate",
    Enabled: true,
    ItemLevel: 38,
    RequiredLevel: 38,
    Code: "amu",
    Properties: [
      {
        PropertyString: "+100% Damage to Demons Damage to Demons",
        Index: 0
      },
      {
        PropertyString: "15-25 to Strength",
        Index: 2
      },
      {
        PropertyString: "15-25 to Dexterity",
        Index: 3
      },
      {
        PropertyString: "35-50 to Life",
        Index: 1
      },
      {
        PropertyString: "+10 Damage Reduced by 10%%",
        Index: 4
      },
      {
        PropertyString: "+6-9 Magic Damage Reduced by",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Amulet",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Amulet",
        Index: "Amulet",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Jewel",
    Name: "Emerald Facet",
    Index: "Emerald Facet",
    Enabled: true,
    ItemLevel: 38,
    RequiredLevel: 38,
    Code: "jew",
    Properties: [
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+27-34% Enhanced Damage",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Jewel",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Jewel",
        Index: "Jewel",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Butcher's Pupil",
    Index: "Butcher's Pupil",
    Enabled: true,
    ItemLevel: 47,
    RequiredLevel: 39,
    Code: "9ax",
    Properties: [
      {
        PropertyString: "+1 Indestructible",
        Index: 3
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "Adds 30-50 to Damage",
        Index: 5
      },
      {
        PropertyString: "+35 Deadly Strike",
        Index: 0
      },
      {
        PropertyString: "25% Chance of Open Wounds",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(55-60) to (132-149)"
        }
      ],
      EquipmentType: 1,
      Name: "Cleaver",
      RequiredStrength: 68,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 34,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Spellsteel",
    Index: "Spellsteel",
    Enabled: true,
    ItemLevel: 47,
    RequiredLevel: 39,
    Code: "9ba",
    Properties: [
      {
        PropertyString: "+165% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "+10 Faster Cast Rate",
        Index: 3
      },
      {
        PropertyString: "+100 to Mana",
        Index: 1
      },
      {
        PropertyString: "Regenerate Mana 25%",
        Index: 5
      },
      {
        PropertyString: "+12-15 Magic Damage Reduced by",
        Index: 2
      },
      {
        PropertyString: "Level 1 Teleport (20 Charges)",
        Index: 6
      },
      {
        PropertyString: "Level 3 Decrepify (30 Charges)",
        Index: 7
      },
      {
        PropertyString: "Level 10 Holy Bolt (100 Charges)",
        Index: 8
      },
      {
        PropertyString: "Level 12 Firestorm (60 Charges)",
        Index: 9
      },
      {
        PropertyString: "Requirements -60%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "55 to 129"
        }
      ],
      EquipmentType: 1,
      Name: "Bearded Axe",
      RequiredStrength: 92,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 38,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Mace",
    Name: "Sureshrill Frost",
    Index: "Sureshrill Frost",
    Enabled: true,
    ItemLevel: 47,
    RequiredLevel: 39,
    Code: "9ma",
    Properties: [
      {
        PropertyString: "+150-180% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "Adds 5-10 to Damage",
        Index: 3
      },
      {
        PropertyString: "Adds 63-112 to Cold Damage",
        Index: 0
      },
      {
        PropertyString: "Freezes target +3",
        Index: 4
      },
      {
        PropertyString: "+1 Cannot Be Frozen",
        Index: 1
      },
      {
        PropertyString: "Level 9 Frozen Orb (50 Charges)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(42-47) to (67-74)"
        }
      ],
      EquipmentType: 1,
      Name: "Flanged Mace",
      RequiredStrength: 61,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 35,
      Type: {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Headstriker",
    Index: "Headstriker",
    Enabled: true,
    ItemLevel: 47,
    RequiredLevel: 39,
    Code: "9bs",
    Properties: [
      {
        PropertyString: "+150% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 3
      },
      {
        PropertyString: "+ Deadly Strike",
        Index: 2
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 0
      },
      {
        PropertyString: "15 to Strength",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "40 to 85"
        }
      ],
      EquipmentType: 1,
      Name: "Battle Sword",
      RequiredStrength: 92,
      RequiredDexterity: 43,
      Durability: 250,
      ItemLevel: 40,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Spire of Honor",
    Index: "Spire of Honor",
    Enabled: true,
    ItemLevel: 47,
    RequiredLevel: 39,
    Code: "9p9",
    Properties: [
      {
        PropertyString: "+3 to Combat Skills (Paladin only)",
        Index: 7
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 6
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "Adds 20-40 to Damage",
        Index: 4
      },
      {
        PropertyString: "25 bonus to Attack Rating",
        Index: 0
      },
      {
        PropertyString: "+% Damage to Demons Damage to Demons",
        Index: 5
      },
      {
        PropertyString: "+25 Enhanced Defense",
        Index: 8
      },
      {
        PropertyString: "+20 Replenish Life",
        Index: 2
      },
      {
        PropertyString: "3 to Light Radius",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(87-101) to (325-382)"
        }
      ],
      EquipmentType: 1,
      Name: "Lance",
      RequiredStrength: 110,
      RequiredDexterity: 88,
      Durability: 250,
      ItemLevel: 47,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Warpspear",
    Index: "Warpspear",
    Enabled: true,
    ItemLevel: 47,
    RequiredLevel: 39,
    Code: "8bs",
    Properties: [
      {
        PropertyString: "+3",
        Index: 0
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 1
      },
      {
        PropertyString: "+3 to Teleport (Sorceress Only)",
        Index: 2
      },
      {
        PropertyString: "+3 to Telekinesis (Sorceress Only)",
        Index: 3
      },
      {
        PropertyString: "+3 to Energy Shield (Sorceress Only)",
        Index: 4
      },
      {
        PropertyString: "+250 Defense vs. Missile",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "14 to 34"
        }
      ],
      EquipmentType: 1,
      Name: "Gothic Staff",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 42,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Witchwild String",
    Index: "Whichwild String",
    Enabled: true,
    ItemLevel: 47,
    RequiredLevel: 39,
    Code: "8s8",
    Properties: [
      {
        PropertyString: "2% Chance to cast level 5 amplify damage on striking",
        Index: 0
      },
      {
        PropertyString: "+150-170% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "+20 Fires Magic Arrows",
        Index: 4
      },
      {
        PropertyString: "+ Deadly Strike",
        Index: 2
      },
      {
        PropertyString: "All Resistances +40",
        Index: 1
      },
      {
        PropertyString: "Socketed (2)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(32-35) to (75-81)"
        }
      ],
      EquipmentType: 1,
      Name: "Short Siege Bow",
      RequiredStrength: 65,
      RequiredDexterity: 80,
      Durability: 0,
      ItemLevel: 43,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Bridge of Pain",
    Index: "Bridge of Pain",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 39,
    Code: "9ss",
    Properties: [
      {
        PropertyString: "+150-220% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 20-40 to Damage",
        Index: 1
      },
      {
        PropertyString: "+10-15 Chance of Crushing Blow",
        Index: 3
      },
      {
        PropertyString: "+15 Deadly Strike",
        Index: 2
      },
      {
        PropertyString: "33% Chance of Open Wounds",
        Index: 5
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 4
      },
      {
        PropertyString: "Socketed (1)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(40-45) to (95-110)"
        }
      ],
      EquipmentType: 1,
      Name: "Gladius",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 30,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Hammer",
    Name: "Famorian's Club",
    Index: "Famorian's Club",
    Enabled: true,
    ItemLevel: 31,
    RequiredLevel: 39,
    Code: "mau",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 7 shock wave on striking",
        Index: 4
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+60-90 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+200-240 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+50 Chance of Crushing Blow",
        Index: 3
      },
      {
        PropertyString: "Socketed (1)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(90-120) to (243-283)"
        }
      ],
      EquipmentType: 1,
      Name: "Maul",
      RequiredStrength: 69,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 21,
      Type: {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Scepter",
    Name: "Heavenly Wrath",
    Index: "Heavenly Wrath",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 39,
    Code: "9sc",
    Properties: [
      {
        PropertyString: "+190-240% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 4
      },
      {
        PropertyString: "+96-125 to Unsummon",
        Index: 1
      },
      {
        PropertyString: "+96-125 to Throw",
        Index: 2
      },
      {
        PropertyString: "+96-125 to Throw",
        Index: 3
      },
      {
        PropertyString: "Cold Resist +35-50%",
        Index: 6
      },
      {
        PropertyString: "Fire Resist +75%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(37-44) to (69-81)"
        }
      ],
      EquipmentType: 1,
      Name: "Rune Scepter",
      RequiredStrength: 58,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 31,
      Type: {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Frostband Tine",
    Index: "Frostband",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 39,
    Code: "9tr",
    Properties: [
      {
        PropertyString: "4% Chance to cast level 17 frost nova on striking",
        Index: 1
      },
      {
        PropertyString: "1 to All Skills",
        Index: 3
      },
      {
        PropertyString: "+185-235% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 200-250 to Cold Damage",
        Index: 2
      },
      {
        PropertyString: "15 to Strength",
        Index: 4
      },
      {
        PropertyString: "25 to Energy",
        Index: 5
      },
      {
        PropertyString: "Cold Resist +25%",
        Index: 6
      },
      {
        PropertyString: "Fire Resist +30-50%",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(54-63) to (105-123)"
        }
      ],
      EquipmentType: 1,
      Name: "Fuscina",
      RequiredStrength: 77,
      RequiredDexterity: 25,
      Durability: 250,
      ItemLevel: 36,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Silence of the Sphinx",
    Index: "Silence of the Sphinx",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 39,
    Code: "8ls",
    Properties: [
      {
        PropertyString: "+2",
        Index: 3
      },
      {
        PropertyString: "+36-65 to Throw",
        Index: 0
      },
      {
        PropertyString: "+36-65 to Throw",
        Index: 1
      },
      {
        PropertyString: "+36-65 to Throw",
        Index: 2
      },
      {
        PropertyString: "15% Damage Taken Goes To Mana",
        Index: 4
      },
      {
        PropertyString: "3-5 to Experience Gained",
        Index: 5
      },
      {
        PropertyString: "+10-15 Reduces all Vendor Prices",
        Index: 6
      },
      {
        PropertyString: "+60 better chance of getting magic item",
        Index: 7
      },
      {
        PropertyString: "Socketed (2)",
        Index: 8
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "8 to 26"
        }
      ],
      EquipmentType: 1,
      Name: "Quarterstaff",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 35,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Wand",
    Name: "Apoclypse Fire",
    Index: "Apoclypse Fire",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 39,
    Code: "9wn",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 7
      },
      {
        PropertyString: "+25 Faster Cast Rate",
        Index: 6
      },
      {
        PropertyString: "All Resistances +65",
        Index: 5
      },
      {
        PropertyString: "10 to Experience Gained",
        Index: 4
      },
      {
        PropertyString: "Level 30 Hydra (100 Charges)",
        Index: 0
      },
      {
        PropertyString: "Level 30 Fire Wall (100 Charges)",
        Index: 1
      },
      {
        PropertyString: "Level 30 Firestorm (100 Charges)",
        Index: 2
      },
      {
        PropertyString: "Level 30 Volcano (100 Charges)",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "8 to 18"
        }
      ],
      EquipmentType: 1,
      Name: "Burnt Wand",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 31,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Helm of Ra",
    Index: "Helm of Ra",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 39,
    Code: "xlm",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 1
      },
      {
        PropertyString: "+10 Faster Run/Walk",
        Index: 6
      },
      {
        PropertyString: "15 to Fire Skill Damage",
        Index: 3
      },
      {
        PropertyString: "+110-135 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "15 to Strength",
        Index: 2
      },
      {
        PropertyString: "+10 to Maximum Fire Resist",
        Index: 5
      },
      {
        PropertyString: "Fire Resist +25%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "134-150",
      EquipmentType: 0,
      Name: "Casque",
      RequiredStrength: 59,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 42,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Circlet",
    Name: "Sorcerer's Cache",
    Index: "Sorcerer's Cache",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 39,
    Code: "ci1",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 1
      },
      {
        PropertyString: "+30 Faster Cast Rate",
        Index: 2
      },
      {
        PropertyString: "10-15 to Fire Skill Damage",
        Index: 4
      },
      {
        PropertyString: "10-15 to Cold Skill Damage",
        Index: 5
      },
      {
        PropertyString: "10-15 to Lightning Skill Damage",
        Index: 6
      },
      {
        PropertyString: "+100-135 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+50 to Mana",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "62-72",
      EquipmentType: 0,
      Name: "Coronet",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 30,
      ItemLevel: 52,
      Type: {
        Name: "Circlet",
        Index: "Circlet",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Doom's Mirror",
    Index: "Doom's Mirror",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 39,
    Code: "xml",
    Properties: [
      {
        PropertyString: "+25 Faster Block Rate",
        Index: 1
      },
      {
        PropertyString: "30-40% Increased Chance of Blocking",
        Index: 0
      },
      {
        PropertyString: "Hit blinds target +2",
        Index: 6
      },
      {
        PropertyString: "+ Defense",
        Index: 2
      },
      {
        PropertyString: "+15 Cold Absorb",
        Index: 5
      },
      {
        PropertyString: "+15 Lightning Absorb",
        Index: 4
      },
      {
        PropertyString: "+15 Fire Absorb",
        Index: 3
      },
      {
        PropertyString: "Socketed (2)",
        Index: 7
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageString: "7 to 14",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "47",
      EquipmentType: 0,
      Name: "Round Shield",
      RequiredStrength: 53,
      RequiredDexterity: 0,
      Durability: 64,
      ItemLevel: 37,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Spellbreaker",
    Index: "Spellbreaker",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 39,
    Code: "xrg",
    Properties: [
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+15 Faster Cast Rate",
        Index: 5
      },
      {
        PropertyString: "15-30% Increased Chance of Blocking",
        Index: 4
      },
      {
        PropertyString: "+36-65 to Throw",
        Index: 2
      },
      {
        PropertyString: "+36-65 to Throw",
        Index: 3
      },
      {
        PropertyString: "+80-130 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+10 Increase Maximum Mana",
        Index: 7
      },
      {
        PropertyString: "+4-7 to Mana after each Kill",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "11 to 15",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "97-124",
      EquipmentType: 0,
      Name: "Scutum",
      RequiredStrength: 71,
      RequiredDexterity: 0,
      Durability: 62,
      ItemLevel: 42,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Conspiracy of Thieves",
    Index: "Conspiracy of Thieves",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 39,
    Code: "xvg",
    Properties: [
      {
        PropertyString: "+125-160 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+20-40 Defense",
        Index: 6
      },
      {
        PropertyString: "25 to Dexterity",
        Index: 1
      },
      {
        PropertyString: "+10-15 Cold Absorb",
        Index: 4
      },
      {
        PropertyString: "+10-15 Lightning Absorb",
        Index: 5
      },
      {
        PropertyString: "+10-15 Fire Absorb",
        Index: 3
      },
      {
        PropertyString: "+20-30 better chance of getting magic item",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "96-128",
      EquipmentType: 0,
      Name: "Sharkskin Gloves",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 39,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Belt",
    Name: "Warriv's Snakeskin",
    Index: "Warriv's Coin",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 39,
    Code: "zlb",
    Properties: [
      {
        PropertyString: "+5 Mana stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+100-120 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+ to Mana",
        Index: 5
      },
      {
        PropertyString: "+200 extra gold from monsters",
        Index: 1
      },
      {
        PropertyString: "+5-15 Reduces all Vendor Prices",
        Index: 2
      },
      {
        PropertyString: "+25 better chance of getting magic item",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "60-66",
      EquipmentType: 0,
      Name: "Demonhide Sash",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 36,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Amazon Bow",
    Name: "Kashya's Retort",
    Index: "Kashya's Retort",
    Enabled: true,
    ItemLevel: 33,
    RequiredLevel: 39,
    Code: "am2",
    Properties: [
      {
        PropertyString: "17% Chance to cast level 4 fire ball when struck",
        Index: 4
      },
      {
        PropertyString: "+1-3 to Bow and Crossbow Skills (Amazon only)",
        Index: 2
      },
      {
        PropertyString: "+1",
        Index: 3
      },
      {
        PropertyString: "+80-120% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 1
      },
      {
        PropertyString: "+5 Mana stolen per hit",
        Index: 7
      },
      {
        PropertyString: "+35 to Mana",
        Index: 6
      },
      {
        PropertyString: "2-4 to Light Radius",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(41-44) to (84-91)"
        }
      ],
      EquipmentType: 1,
      Name: "Reflex Bow",
      RequiredStrength: 35,
      RequiredDexterity: 60,
      Durability: 0,
      ItemLevel: 27,
      Type: {
        Name: "Amazon Bow",
        Index: "Amazon Bow",
        Class: "ama"
      },
      RequiredClass: "Amazon"
    }
  },
  {
    Type: "Orb",
    Name: "Quandry of the Queen",
    Index: "Quandry of the Queen",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 39,
    Code: "oba",
    Properties: [
      {
        PropertyString: "1-2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+30 Faster Cast Rate",
        Index: 5
      },
      {
        PropertyString: "to Strength",
        Index: 3
      },
      {
        PropertyString: "to Dexterity",
        Index: 4
      },
      {
        PropertyString: "to Vitality",
        Index: 1
      },
      {
        PropertyString: "to Energy",
        Index: 2
      },
      {
        PropertyString: "+8-10 Replenish Life",
        Index: 7
      },
      {
        PropertyString: "Regenerate Mana 75%",
        Index: 8
      },
      {
        PropertyString: "+10-15 Damage Reduced by 10-15%%",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "18 to 42"
        }
      ],
      EquipmentType: 1,
      Name: "Swirling Crystal",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 50,
      Type: {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      },
      RequiredClass: "Sorceress"
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "Mystery of Life",
    Index: "Mystery of Life",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 39,
    Code: "ne7",
    Properties: [
      {
        PropertyString: "+4-6 to Skeleton Mastery (Necromancer Only)",
        Index: 1
      },
      {
        PropertyString: "+3-5 to Raise Skeleton (Necromancer Only)",
        Index: 2
      },
      {
        PropertyString: "+2-4 to Raise Skeletal Mage (Necromancer Only)",
        Index: 3
      },
      {
        PropertyString: "+1-3 to Revive (Necromancer Only)",
        Index: 4
      },
      {
        PropertyString: "+75-125 Defense",
        Index: 0
      },
      {
        PropertyString: "+20 Increase Maximum Life",
        Index: 5
      },
      {
        PropertyString: "to Life",
        Index: 6
      },
      {
        PropertyString: "+10 Life after each Kill",
        Index: 7
      },
      {
        PropertyString: "3-5 to Experience Gained",
        Index: 8
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "116-166",
      EquipmentType: 0,
      Name: "Fetish Trophy",
      RequiredStrength: 41,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 39,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Auric Shields",
    Name: "Black Rain",
    Index: "Black Rain",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 39,
    Code: "pa8",
    Properties: [
      {
        PropertyString: "100% Chance to cast level 3 static field when you Kill an Enemy",
        Index: 5
      },
      {
        PropertyString: "Level 5-8 Holy Shock Aura When Equipped",
        Index: 6
      },
      {
        PropertyString: "Adds 10-100 to Lightning Damage",
        Index: 3
      },
      {
        PropertyString: "Hit blinds target +2",
        Index: 4
      },
      {
        PropertyString: "+100-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "Cold Resist +35%",
        Index: 2
      },
      {
        PropertyString: "Fire Resist +50%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "18 to 24",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "260-325",
      EquipmentType: 0,
      Name: "Protector Shield",
      RequiredStrength: 69,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 46,
      Type: {
        Name: "Auric Shields",
        Index: "Auric Shields",
        Class: "pal"
      },
      RequiredClass: "Paladin"
    }
  },
  {
    Type: "Primal Helm",
    Name: "Hellraiser's Casque",
    Index: "Hellraiser's Casque",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 39,
    Code: "ba9",
    Properties: [
      {
        PropertyString: "+2",
        Index: 2
      },
      {
        PropertyString: "+ Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+10 Life after each Kill",
        Index: 3
      },
      {
        PropertyString: "5 to Experience Gained",
        Index: 4
      },
      {
        PropertyString: "Repairs 0.09 durability per second",
        Index: 1
      },
      {
        PropertyString: "Socketed (2-3)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "85",
      EquipmentType: 0,
      Name: "Savage Helmet",
      RequiredStrength: 103,
      RequiredDexterity: 0,
      Durability: 50,
      ItemLevel: 49,
      Type: {
        Name: "Primal Helm",
        Index: "Primal Helm",
        Class: "bar"
      },
      RequiredClass: "Barbarian"
    }
  },
  {
    Type: "Axe",
    Name: "Threat of Storms",
    Index: "Threat of Storms",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 40,
    Code: "9la",
    Properties: [
      {
        PropertyString: "Level 5-10 Holy Shock Aura When Equipped",
        Index: 5
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 6
      },
      {
        PropertyString: "+175-225% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 40-100 to Fire Damage",
        Index: 3
      },
      {
        PropertyString: "Adds 1-150 to Lightning Damage",
        Index: 2
      },
      {
        PropertyString: "Adds 25-40 to Cold Damage",
        Index: 1
      },
      {
        PropertyString: "All Resistances +25",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(38-45) to (93-110)"
        }
      ],
      EquipmentType: 1,
      Name: "Military Axe",
      RequiredStrength: 73,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 34,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Fleshbleeder",
    Index: "Fleshbleeder",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 40,
    Code: "9fc",
    Properties: [
      {
        PropertyString: "+160-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 20-40 to Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 6-8 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "100% Chance of Open Wounds",
        Index: 2
      },
      {
        PropertyString: "+8 Replenish Life",
        Index: 5
      },
      {
        PropertyString: "Cold Resist +30-35%",
        Index: 6
      },
      {
        PropertyString: "+6-8 Life after each Kill",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(61-68) to (131-145)"
        }
      ],
      EquipmentType: 1,
      Name: "Tulwar",
      RequiredStrength: 70,
      RequiredDexterity: 42,
      Durability: 250,
      ItemLevel: 37,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Club",
    Name: "Gladiator's Strike",
    Index: "Gladiator's Strike",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 40,
    Code: "9cl",
    Properties: [
      {
        PropertyString: "15% Chance to cast level 9 nova on striking",
        Index: 3
      },
      {
        PropertyString: "+2",
        Index: 5
      },
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+175-230% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 1-225 to Lightning Damage",
        Index: 4
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 6
      },
      {
        PropertyString: "Lightning Resist +45-55%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(16-19) to (57-69)"
        }
      ],
      EquipmentType: 1,
      Name: "Cudgel",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 30,
      Type: {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Warmth of Ash",
    Index: "Warmth of Ash",
    Enabled: true,
    ItemLevel: 32,
    RequiredLevel: 40,
    Code: "wst",
    Properties: [
      {
        PropertyString: "+5 to Fire Skills",
        Index: 0
      },
      {
        PropertyString: "+15-25 to Minimum Damage",
        Index: 1
      },
      {
        PropertyString: "+60-80 to Maximum Damage",
        Index: 2
      },
      {
        PropertyString: "Adds 75-100 to Fire Damage",
        Index: 3
      },
      {
        PropertyString: "+36-65 to Throw",
        Index: 6
      },
      {
        PropertyString: "Fire Resist +65%",
        Index: 4
      },
      {
        PropertyString: "+10-20 Cold Absorb",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(27-37) to (88-108)"
        }
      ],
      EquipmentType: 1,
      Name: "War Staff",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 24,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Bow of the Dead",
    Index: "Bow of the Dead",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 40,
    Code: "8lb",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 6
      },
      {
        PropertyString: "+190-240% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+150% Damage to Undead Damage to Undead",
        Index: 3
      },
      {
        PropertyString: "Adds 5-7 Mana stolen per hit",
        Index: 4
      },
      {
        PropertyString: "20 to Dexterity",
        Index: 5
      },
      {
        PropertyString: "Cold Resist +35%",
        Index: 2
      },
      {
        PropertyString: "10% Reanimate as: Returned",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(29-34) to (84-98)"
        }
      ],
      EquipmentType: 1,
      Name: "Cedar Bow",
      RequiredStrength: 53,
      RequiredDexterity: 49,
      Durability: 0,
      ItemLevel: 35,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Neonate's Sallet",
    Index: "Neonate's Sallet",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 40,
    Code: "xkp",
    Properties: [
      {
        PropertyString: "+1-2",
        Index: 1
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 5
      },
      {
        PropertyString: "+36-65 to Throw",
        Index: 2
      },
      {
        PropertyString: "+36-65 to Throw",
        Index: 3
      },
      {
        PropertyString: "+80-120 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+75 to Mana",
        Index: 4
      },
      {
        PropertyString: "Magic Resist +15%",
        Index: 6
      },
      {
        PropertyString: "15-20% Damage Taken Goes To Mana",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "95-116",
      EquipmentType: 0,
      Name: "Sallet",
      RequiredStrength: 43,
      RequiredDexterity: 0,
      Durability: 18,
      ItemLevel: 37,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "Hooves of Satan",
    Index: "Hooves of Satan",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 40,
    Code: "xlb",
    Properties: [
      {
        PropertyString: "+30 Faster Cast Rate",
        Index: 1
      },
      {
        PropertyString: "+3-5 Kick Damage",
        Index: 7
      },
      {
        PropertyString: "10 to Fire Skill Damage",
        Index: 6
      },
      {
        PropertyString: "+10-15 Slows target by",
        Index: 3
      },
      {
        PropertyString: "+90-140 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "-5 to Dexterity",
        Index: 4
      },
      {
        PropertyString: "Fire Resist +45-60%",
        Index: 5
      },
      {
        PropertyString: "Repairs 0.15 durability per second",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "26 to 46",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "55-69",
      EquipmentType: 0,
      Name: "Demonhide Boots",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 12,
      ItemLevel: 36,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Belt",
    Name: "Weakling's Whimper",
    Index: "Weakling's Whimper",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 40,
    Code: "zmb",
    Properties: [
      {
        PropertyString: "20% Chance to cast level 1 weaken when struck",
        Index: 1
      },
      {
        PropertyString: "+125-165 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "20 to Strength",
        Index: 3
      },
      {
        PropertyString: "Fire Resist +35%",
        Index: 5
      },
      {
        PropertyString: "Poison Resist +10-25%",
        Index: 4
      },
      {
        PropertyString: "Level 25 Weaken (15 Charges)",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "81-95",
      EquipmentType: 0,
      Name: "Mesh Belt",
      RequiredStrength: 58,
      RequiredDexterity: 0,
      Durability: 16,
      ItemLevel: 43,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Amazon Spear",
    Name: "Vile Temptress",
    Index: "Vile Temptress",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 40,
    Code: "am8",
    Properties: [
      {
        PropertyString: "8% Chance to cast level 3 chain lightning on striking",
        Index: 4
      },
      {
        PropertyString: "+2 to Passive and Magic Skills (Amazon only)",
        Index: 3
      },
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+175-225% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "25 to Dexterity",
        Index: 6
      },
      {
        PropertyString: "3-5 to Experience Gained",
        Index: 5
      },
      {
        PropertyString: "Requirements -20%",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(93-110) to (140-165)"
        }
      ],
      EquipmentType: 1,
      Name: "Ceremonial Spear",
      RequiredStrength: 101,
      RequiredDexterity: 80,
      Durability: 250,
      ItemLevel: 43,
      Type: {
        Name: "Amazon Spear",
        Index: "Amazon Spear",
        Class: "ama"
      },
      RequiredClass: "Amazon"
    }
  },
  {
    Type: "Orb",
    Name: "Drehya's Globe",
    Index: "Drehya's Globe",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 40,
    Code: "ob7",
    Properties: [
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "10-15 to Cold Skill Damage",
        Index: 1
      },
      {
        PropertyString: "10-15 to Enemy Cold Resistance",
        Index: 2
      },
      {
        PropertyString: "15 to Strength",
        Index: 5
      },
      {
        PropertyString: "15 to Vitality",
        Index: 6
      },
      {
        PropertyString: "Cold Resist +75%",
        Index: 4
      },
      {
        PropertyString: "+15-20 Cold Absorb",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "10 to 26"
        }
      ],
      EquipmentType: 1,
      Name: "Crystalline Globe",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 37,
      Type: {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      },
      RequiredClass: "Sorceress"
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "Dreamweaver",
    Index: "Dreamsender",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 40,
    Code: "ne9",
    Properties: [
      {
        PropertyString: "+2",
        Index: 3
      },
      {
        PropertyString: "+25 Faster Run/Walk",
        Index: 2
      },
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 1
      },
      {
        PropertyString: "+120-170 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "20 to Strength",
        Index: 5
      },
      {
        PropertyString: "20 to Dexterity",
        Index: 6
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 4
      },
      {
        PropertyString: "Repairs 0.1 durability per second",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "112-137",
      EquipmentType: 0,
      Name: "Cantor Trophy",
      RequiredStrength: 50,
      RequiredDexterity: 0,
      Durability: 120,
      ItemLevel: 49,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Primal Helm",
    Name: "Malefactor's Reward",
    Index: "Malefactor's Reward",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 40,
    Code: "ba7",
    Properties: [
      {
        PropertyString: "+2",
        Index: 1
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 7
      },
      {
        PropertyString: "+3 to Bone Armor",
        Index: 2
      },
      {
        PropertyString: "+1 to Life Tap",
        Index: 3
      },
      {
        PropertyString: "+110-135 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+3-5 Replenish Life",
        Index: 4
      },
      {
        PropertyString: "+1 Half Freeze Duration",
        Index: 6
      },
      {
        PropertyString: "+50 Poison Length Reduced by",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "134-150",
      EquipmentType: 0,
      Name: "Lion Helm",
      RequiredStrength: 73,
      RequiredDexterity: 0,
      Durability: 35,
      ItemLevel: 38,
      Type: {
        Name: "Primal Helm",
        Index: "Primal Helm",
        Class: "bar"
      },
      RequiredClass: "Barbarian"
    }
  },
  {
    Type: "Pelt",
    Name: "Falcon Sharp",
    Index: "Falcon Sharp",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 40,
    Code: "dr9",
    Properties: [
      {
        PropertyString: "+1-2 to Shape Shifting Skills (Druid only)",
        Index: 7
      },
      {
        PropertyString: "+50% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 25-60 to Fire Damage",
        Index: 4
      },
      {
        PropertyString: "Adds 15-250 to Lightning Damage",
        Index: 3
      },
      {
        PropertyString: "+2-4 to Inner Sight",
        Index: 5
      },
      {
        PropertyString: "+125-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "15 to Strength",
        Index: 6
      },
      {
        PropertyString: "All Resistances +20",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "132-147",
      EquipmentType: 0,
      Name: "Sacred Feathers",
      RequiredStrength: 62,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 50,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Hand to Hand 2",
    Name: "Werewolf Talons",
    Index: "Werewolf Talons",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 40,
    Code: "9lw",
    Properties: [
      {
        PropertyString: "2 to All Skills",
        Index: 2
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+175-240% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "25 bonus to Attack Rating",
        Index: 6
      },
      {
        PropertyString: "+5-8 to Shape Shifting",
        Index: 3
      },
      {
        PropertyString: "+5-8 to Wearwolf",
        Index: 4
      },
      {
        PropertyString: "+1-3 to Fury",
        Index: 5
      },
      {
        PropertyString: "Socketed (1-2)",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(49-61) to (101-125)"
        }
      ],
      EquipmentType: 1,
      Name: "Greater Claws",
      RequiredStrength: 76,
      RequiredDexterity: 76,
      Durability: 250,
      ItemLevel: 45,
      Type: {
        Name: "Hand to Hand 2",
        Index: "Hand to Hand 2",
        Class: "ass"
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Stormrider",
    Index: "Stormrider",
    Enabled: true,
    ItemLevel: 49,
    RequiredLevel: 41,
    Code: "9bt",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 10 chain lightning on striking",
        Index: 0
      },
      {
        PropertyString: "10% Chance to cast level 13-20 charged bolt on striking",
        Index: 1
      },
      {
        PropertyString: "15% Chance to cast level 5 charged bolt when struck",
        Index: 7
      },
      {
        PropertyString: "+100% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "Adds 35-75 to Damage",
        Index: 3
      },
      {
        PropertyString: "Adds 1-200 to Lightning Damage",
        Index: 2
      },
      {
        PropertyString: "+15 Attacker Takes Lightning Damage of",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "83 to 229"
        }
      ],
      EquipmentType: 1,
      Name: "Tabar",
      RequiredStrength: 101,
      RequiredDexterity: 0,
      Durability: 300,
      ItemLevel: 42,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Wand",
    Name: "Blackhand Key",
    Index: "Blackhand Key",
    Enabled: true,
    ItemLevel: 49,
    RequiredLevel: 41,
    Code: "9gw",
    Properties: [
      {
        PropertyString: "+1 to Curses (Necromancer only)",
        Index: 0
      },
      {
        PropertyString: "+2",
        Index: 6
      },
      {
        PropertyString: "+30 Faster Cast Rate",
        Index: 4
      },
      {
        PropertyString: "50 to Life",
        Index: 2
      },
      {
        PropertyString: "Fire Resist +37%",
        Index: 5
      },
      {
        PropertyString: "20% Damage Taken Goes To Mana",
        Index: 1
      },
      {
        PropertyString: "-2 to Light Radius",
        Index: 3
      },
      {
        PropertyString: "Level 13 Find Item (30 Charges)",
        Index: 7
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "13 to 29"
        }
      ],
      EquipmentType: 1,
      Name: "Grave Wand",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 49,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Plague Bearer",
    Index: "Plague Bearer",
    Enabled: true,
    ItemLevel: 49,
    RequiredLevel: 41,
    Code: "9ls",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 4 poison nova on striking",
        Index: 0
      },
      {
        PropertyString: "+150% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "Adds 10-45 to Damage",
        Index: 2
      },
      {
        PropertyString: "+384 to Minimum Poison Damage",
        Index: 1
      },
      {
        PropertyString: "+5 to Rabies (Druid Only)",
        Index: 5
      },
      {
        PropertyString: "Poison Resist +45%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "35 to 150"
        }
      ],
      EquipmentType: 1,
      Name: "Rune Sword",
      RequiredStrength: 103,
      RequiredDexterity: 79,
      Durability: 250,
      ItemLevel: 44,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Knife",
    Name: "Stormspike",
    Index: "Stormspike",
    Enabled: true,
    ItemLevel: 49,
    RequiredLevel: 41,
    Code: "9bl",
    Properties: [
      {
        PropertyString: "25% Chance to cast level 3 charged bolt when struck",
        Index: 2
      },
      {
        PropertyString: "+150% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "Adds 1-120 to Lightning Damage",
        Index: 0
      },
      {
        PropertyString: "Lightning Resist +%",
        Index: 4
      },
      {
        PropertyString: "+20 Attacker Takes Lightning Damage of",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "47 to 90"
        }
      ],
      EquipmentType: 1,
      Name: "Stilleto",
      RequiredStrength: 47,
      RequiredDexterity: 97,
      Durability: 250,
      ItemLevel: 46,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "The Meat Scraper",
    Index: "The Meat Scraper",
    Enabled: true,
    ItemLevel: 49,
    RequiredLevel: 41,
    Code: "9b7",
    Properties: [
      {
        PropertyString: "+3 to Combat Skills (Barbarian only)",
        Index: 5
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+10 Life stolen per hit",
        Index: 2
      },
      {
        PropertyString: "50% Chance of Open Wounds",
        Index: 3
      },
      {
        PropertyString: "+25 better chance of getting magic item",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(15-18) to (145-174)"
        }
      ],
      EquipmentType: 1,
      Name: "Lochaber Axe",
      RequiredStrength: 80,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 33,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Skull Collector",
    Index: "Skullcollector",
    Enabled: true,
    ItemLevel: 49,
    RequiredLevel: 41,
    Code: "8ws",
    Properties: [
      {
        PropertyString: "2 to All Skills",
        Index: 2
      },
      {
        PropertyString: "+20 Increase Maximum Mana",
        Index: 0
      },
      {
        PropertyString: "+20 to Mana after each Kill",
        Index: 1
      },
      {
        PropertyString: "+ better chance of getting magic item",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "24 to 58"
        }
      ],
      EquipmentType: 1,
      Name: "Rune Staff",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 47,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Cliffkiller",
    Index: "Cliffkiller",
    Enabled: true,
    ItemLevel: 49,
    RequiredLevel: 41,
    Code: "8l8",
    Properties: [
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "+190-230% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "+5-10 to Minimum Damage",
        Index: 5
      },
      {
        PropertyString: "+20-30 to Maximum Damage",
        Index: 6
      },
      {
        PropertyString: "+1 Knockback",
        Index: 3
      },
      {
        PropertyString: "+80 Defense vs. Missile",
        Index: 2
      },
      {
        PropertyString: "50 to Life",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(34-43) to (141-168)"
        }
      ],
      EquipmentType: 1,
      Name: "Large Siege Bow",
      RequiredStrength: 80,
      RequiredDexterity: 95,
      Durability: 0,
      ItemLevel: 46,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Buriza-Do Kyanon",
    Index: "Buriza-Do Kyanon",
    Enabled: true,
    ItemLevel: 59,
    RequiredLevel: 41,
    Code: "8hx",
    Properties: [
      {
        PropertyString: "+80 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+100 Piercing Attack",
        Index: 0
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 3
      },
      {
        PropertyString: "+32-196 to Minimum Cold Damage",
        Index: 7
      },
      {
        PropertyString: "Freezes target +3",
        Index: 6
      },
      {
        PropertyString: "+75-150 Defense",
        Index: 2
      },
      {
        PropertyString: "35 to Dexterity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(82-99) to (137-165)"
        }
      ],
      EquipmentType: 1,
      Name: "Ballista",
      RequiredStrength: 110,
      RequiredDexterity: 80,
      Durability: 0,
      ItemLevel: 47,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Blackhorn's Face",
    Index: "Blackhorn's Face",
    Enabled: true,
    ItemLevel: 49,
    RequiredLevel: 41,
    Code: "xsk",
    Properties: [
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 2
      },
      {
        PropertyString: "+20 Slows target by",
        Index: 1
      },
      {
        PropertyString: "+180-220 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "Lightning Resist +15%",
        Index: 4
      },
      {
        PropertyString: "+20 Lightning Absorb",
        Index: 3
      },
      {
        PropertyString: "+25 Attacker Takes Lightning Damage of",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "154-176",
      EquipmentType: 0,
      Name: "Death Mask",
      RequiredStrength: 55,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 48,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Merc Equip",
    Name: "Vampire Gaze",
    Index: "Vampiregaze",
    Enabled: true,
    ItemLevel: 49,
    RequiredLevel: 41,
    Code: "xh9",
    Properties: [
      {
        PropertyString: "Adds 6-22 to Cold Damage",
        Index: 6
      },
      {
        PropertyString: "Adds 6-8 Mana stolen per hit",
        Index: 0
      },
      {
        PropertyString: "Adds 6-8 Life stolen per hit",
        Index: 1
      },
      {
        PropertyString: "+100 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "15% Stamina Drain",
        Index: 2
      },
      {
        PropertyString: "+15-20 Damage Reduced by 15-20%%",
        Index: 3
      },
      {
        PropertyString: "+10-15 Magic Damage Reduced by",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "122",
      EquipmentType: 0,
      Name: "Grim Helm",
      RequiredStrength: 58,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 50,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Armor",
    Name: "Duriel's Shell",
    Index: "Duriel's Shell",
    Enabled: true,
    ItemLevel: 49,
    RequiredLevel: 41,
    Code: "xrs",
    Properties: [
      {
        PropertyString: "+160-200 Enhanced Defense",
        Index: 3
      },
      {
        PropertyString: "+ Defense",
        Index: 1
      },
      {
        PropertyString: "15 to Strength",
        Index: 0
      },
      {
        PropertyString: "to Life",
        Index: 2
      },
      {
        PropertyString: "Cold Resist +50%",
        Index: 7
      },
      {
        PropertyString: "Lightning Resist +20%",
        Index: 5
      },
      {
        PropertyString: "Fire Resist +20%",
        Index: 4
      },
      {
        PropertyString: "Poison Resist +20%",
        Index: 6
      },
      {
        PropertyString: "+1 Cannot Be Frozen",
        Index: 8
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "491-567",
      EquipmentType: 0,
      Name: "Cuirass",
      RequiredStrength: 65,
      RequiredDexterity: 0,
      Durability: 150,
      ItemLevel: 47,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Lidless Wall",
    Index: "Lidless Wall",
    Enabled: true,
    ItemLevel: 49,
    RequiredLevel: 41,
    Code: "xsh",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 1
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 2
      },
      {
        PropertyString: "+80-130 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "10 to Energy",
        Index: 5
      },
      {
        PropertyString: "+10 Increase Maximum Mana",
        Index: 6
      },
      {
        PropertyString: "+3-5 to Mana after each Kill",
        Index: 3
      },
      {
        PropertyString: "1 to Light Radius",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "14 to 20",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "91-117",
      EquipmentType: 0,
      Name: "Grim Shield",
      RequiredStrength: 58,
      RequiredDexterity: 0,
      Durability: 70,
      ItemLevel: 48,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Darkkon",
    Index: "Darkkon",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 41,
    Code: "9sm",
    Properties: [
      {
        PropertyString: "+150-190% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 20-40 to Damage",
        Index: 1
      },
      {
        PropertyString: "Hit blinds target +3",
        Index: 2
      },
      {
        PropertyString: "20 to Strength",
        Index: 5
      },
      {
        PropertyString: "Lightning Resist +25-35%",
        Index: 6
      },
      {
        PropertyString: "-3 to Light Radius",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(40-43) to (92-100)"
        }
      ],
      EquipmentType: 1,
      Name: "Cutlass",
      RequiredStrength: 25,
      RequiredDexterity: 52,
      Durability: 305,
      ItemLevel: 43,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Old Wolf",
    Index: "Old Wolf",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 41,
    Code: "9sr",
    Properties: [
      {
        PropertyString: "+40 Increased Attack Speed",
        Index: 6
      },
      {
        PropertyString: "+120-160% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 50-100 to Damage",
        Index: 1
      },
      {
        PropertyString: "+5 Life stolen per hit",
        Index: 7
      },
      {
        PropertyString: "+5 to Wearwolf",
        Index: 4
      },
      {
        PropertyString: "+3-5 to Shape Shifting",
        Index: 5
      },
      {
        PropertyString: "+3-5 to Fury",
        Index: 8
      },
      {
        PropertyString: "3 to Experience Gained",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(72-76) to (181-196)"
        }
      ],
      EquipmentType: 1,
      Name: "War Spear",
      RequiredStrength: 25,
      RequiredDexterity: 25,
      Durability: 310,
      ItemLevel: 33,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Warbreeder",
    Index: "Warbreeder",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 41,
    Code: "9gl",
    Properties: [
      {
        PropertyString: "+175-235% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 1-250 to Lightning Damage",
        Index: 7
      },
      {
        PropertyString: "35 to Enemy Lightning Resistance",
        Index: 5
      },
      {
        PropertyString: "+6 to Charged Strike",
        Index: 4
      },
      {
        PropertyString: "+15 Slows target by",
        Index: 6
      },
      {
        PropertyString: "75 to Life",
        Index: 3
      },
      {
        PropertyString: "All Resistances +40-50",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(35-43) to (104-127)"
        },
        {
          Type: 2,
          DamageString: "(88-107) to (165-201)"
        }
      ],
      EquipmentType: 1,
      Name: "Spiculum",
      RequiredStrength: 98,
      RequiredDexterity: 73,
      Durability: 250,
      ItemLevel: 46,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Armor",
    Name: "Gillian's Brazier",
    Index: "Gillian's Brazier",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 41,
    Code: "xui",
    Properties: [
      {
        PropertyString: "+1-2",
        Index: 1
      },
      {
        PropertyString: "+1-2",
        Index: 2
      },
      {
        PropertyString: "+1-2",
        Index: 3
      },
      {
        PropertyString: "+25 Faster Cast Rate",
        Index: 6
      },
      {
        PropertyString: "+90-125 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "25 to Strength",
        Index: 5
      },
      {
        PropertyString: "35 to Dexterity",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "195-231",
      EquipmentType: 0,
      Name: "Ghost Armor",
      RequiredStrength: 38,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 34,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Heartbane",
    Index: "Heartbane",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 41,
    Code: "xng",
    Properties: [
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 7
      },
      {
        PropertyString: "+135-185 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 1
      },
      {
        PropertyString: "15 to Energy",
        Index: 2
      },
      {
        PropertyString: "+10-15 Damage Reduced by 10-15%%",
        Index: 6
      },
      {
        PropertyString: "+10-15 Magic Damage Reduced by",
        Index: 5
      },
      {
        PropertyString: "+5-9 Life after each Kill",
        Index: 3
      },
      {
        PropertyString: "1-3 to Experience Gained",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "373-453",
      EquipmentType: 0,
      Name: "Linked Mail",
      RequiredStrength: 74,
      RequiredDexterity: 0,
      Durability: 26,
      ItemLevel: 42,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Razorbite Deflecter",
    Index: "Razorbite Deflecter",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 41,
    Code: "xpk",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 1
      },
      {
        PropertyString: "+25-40% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "25-45% Increased Chance of Blocking",
        Index: 7
      },
      {
        PropertyString: "Adds 5-15 to Damage",
        Index: 3
      },
      {
        PropertyString: "33% Chance of Open Wounds",
        Index: 2
      },
      {
        PropertyString: "+80-130 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+10-15 Damage Reduced by",
        Index: 5
      },
      {
        PropertyString: "+10-15 Magic Damage Reduced by",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "18 to 35",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "106-135",
      EquipmentType: 0,
      Name: "Barbed Shield",
      RequiredStrength: 65,
      RequiredDexterity: 0,
      Durability: 55,
      ItemLevel: 42,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Belt",
    Name: "Megladon Wrap",
    Index: "Megladon Wrap",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 41,
    Code: "zvb",
    Properties: [
      {
        PropertyString: "+10-15 to Maximum Damage",
        Index: 4
      },
      {
        PropertyString: "Adds 4-7 Life stolen per hit",
        Index: 2
      },
      {
        PropertyString: "+15 Chance of Crushing Blow",
        Index: 3
      },
      {
        PropertyString: "+ Defense",
        Index: 0
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 6
      },
      {
        PropertyString: "Lightning Resist +%",
        Index: 5
      },
      {
        PropertyString: "+6-10 Life after each Kill",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "31",
      EquipmentType: 0,
      Name: "Sharkskin Belt",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 39,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Amazon Bow",
    Name: "Abyssal Torment",
    Index: "Abyssal Torment",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 41,
    Code: "am6",
    Properties: [
      {
        PropertyString: "+3 to Bow and Crossbow Skills (Amazon only)",
        Index: 1
      },
      {
        PropertyString: "+200-250% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 2
      },
      {
        PropertyString: "15 to Fire Skill Damage",
        Index: 4
      },
      {
        PropertyString: "+1 to Amplify Damage",
        Index: 5
      },
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 6
      },
      {
        PropertyString: "Fire Resist +35-50%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(48-56) to (87-101)"
        }
      ],
      EquipmentType: 1,
      Name: "Ashwood Bow",
      RequiredStrength: 56,
      RequiredDexterity: 77,
      Durability: 0,
      ItemLevel: 39,
      Type: {
        Name: "Amazon Bow",
        Index: "Amazon Bow",
        Class: "ama"
      },
      RequiredClass: "Amazon"
    }
  },
  {
    Type: "Auric Shields",
    Name: "Knight's Holy Sigil",
    Index: "Knight's Holy Sigil",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 41,
    Code: "pa7",
    Properties: [
      {
        PropertyString: "+1-2",
        Index: 7
      },
      {
        PropertyString: "+30-40% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+30 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "35-45% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "25 bonus to Attack Rating",
        Index: 6
      },
      {
        PropertyString: "+200% Damage to Demons Damage to Demons",
        Index: 3
      },
      {
        PropertyString: "+200% Damage to Undead Damage to Undead",
        Index: 4
      },
      {
        PropertyString: "+2-3 to Holy Shield (Paladin Only)",
        Index: 8
      },
      {
        PropertyString: "+ Defense",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageString: "15 to 20",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "113",
      EquipmentType: 0,
      Name: "Akaran Rondache",
      RequiredStrength: 59,
      RequiredDexterity: 0,
      Durability: 30,
      ItemLevel: 40,
      Type: {
        Name: "Auric Shields",
        Index: "Auric Shields",
        Class: "pal"
      },
      RequiredClass: "Paladin"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Pleasures of the Perverse",
    Index: "Pleasures of the Perverse",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 41,
    Code: "9wb",
    Properties: [
      {
        PropertyString: "+2",
        Index: 2
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+190-240% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+ Kick Damage",
        Index: 6
      },
      {
        PropertyString: "+1-3 to Dragon Claw (Assassin Only)",
        Index: 3
      },
      {
        PropertyString: "+1-3 to Weapon Block (Assassin Only)",
        Index: 4
      },
      {
        PropertyString: "Level 20 Bone Armor (25 Charges)",
        Index: 5
      },
      {
        PropertyString: "Socketed (1)",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(37-44) to (78-91)"
        }
      ],
      EquipmentType: 1,
      Name: "Wrist Spike",
      RequiredStrength: 66,
      RequiredDexterity: 66,
      Durability: 250,
      ItemLevel: 32,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Small Charm",
    Name: "t7 Splash Charm",
    Index: "t7 Splash Charm",
    Enabled: false,
    ItemLevel: 1,
    RequiredLevel: 41,
    Code: "cm4",
    Properties: [
      {
        PropertyString: "50 Percent Melee Splash Damage",
        Index: 0
      },
      {
        PropertyString: "-15 to -24 Enhanced Damage",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Splash Charm",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Small Charm",
        Index: "Small Charm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Boneslayer Blade",
    Index: "Boneslayer Blade",
    Enabled: true,
    ItemLevel: 50,
    RequiredLevel: 42,
    Code: "9ga",
    Properties: [
      {
        PropertyString: "50% Chance to cast level 12-20 holy bolt when struck",
        Index: 7
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+180-220% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "35 bonus to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "+% Damage to Undead Damage to Undead",
        Index: 1
      },
      {
        PropertyString: "to Attack Rating against Undead",
        Index: 0
      },
      {
        PropertyString: "8 to Strength",
        Index: 2
      },
      {
        PropertyString: "Level 20 Holy Bolt (200 Charges)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(50-57) to (196-224)"
        }
      ],
      EquipmentType: 1,
      Name: "Gothic Axe",
      RequiredStrength: 115,
      RequiredDexterity: 79,
      Durability: 250,
      ItemLevel: 46,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Scepter",
    Name: "Hand of Blessed Light",
    Index: "Hand of Blessed Light",
    Enabled: true,
    ItemLevel: 50,
    RequiredLevel: 42,
    Code: "9ws",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 4 fist of the heavens on striking",
        Index: 9
      },
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "+130-160% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 20-45 to Damage",
        Index: 6
      },
      {
        PropertyString: "100 bonus to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "+4 to Holy Bolt (Paladin Only)",
        Index: 7
      },
      {
        PropertyString: "+2 to Fist of the Heavens (Paladin Only)",
        Index: 8
      },
      {
        PropertyString: "+50 Defense",
        Index: 3
      },
      {
        PropertyString: "Regenerate Mana 15%",
        Index: 4
      },
      {
        PropertyString: "4 to Light Radius",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(56-61) to (132-143)"
        }
      ],
      EquipmentType: 1,
      Name: "Divine Scepter",
      RequiredStrength: 103,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 45,
      Type: {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Mace",
    Name: "Moonfall",
    Index: "Moonfall",
    Enabled: true,
    ItemLevel: 50,
    RequiredLevel: 42,
    Code: "9mt",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 6 meteor on striking",
        Index: 0
      },
      {
        PropertyString: "+120-150% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "Adds 10-15 to Damage",
        Index: 6
      },
      {
        PropertyString: "Adds 55-115 to Fire Damage",
        Index: 1
      },
      {
        PropertyString: "+9-12 Magic Damage Reduced by",
        Index: 2
      },
      {
        PropertyString: "2 to Light Radius",
        Index: 4
      },
      {
        PropertyString: "Level 11 Meteor (60 Charges)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(54-60) to (83-92)"
        }
      ],
      EquipmentType: 1,
      Name: "Jagged Star",
      RequiredStrength: 74,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 39,
      Type: {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "The Atlantean",
    Index: "The Atlantian",
    Enabled: true,
    ItemLevel: 50,
    RequiredLevel: 42,
    Code: "9wd",
    Properties: [
      {
        PropertyString: "+2",
        Index: 6
      },
      {
        PropertyString: "+200-250% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "50 bonus to Attack Rating",
        Index: 7
      },
      {
        PropertyString: "+75 Defense",
        Index: 1
      },
      {
        PropertyString: "16 to Strength",
        Index: 2
      },
      {
        PropertyString: "12 to Dexterity",
        Index: 3
      },
      {
        PropertyString: "8 to Vitality",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(54-63) to (129-150)"
        }
      ],
      EquipmentType: 1,
      Name: "Ancient Sword",
      RequiredStrength: 127,
      RequiredDexterity: 88,
      Durability: 350,
      ItemLevel: 49,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Crainte Vomir",
    Index: "Crainte Vomir",
    Enabled: true,
    ItemLevel: 50,
    RequiredLevel: 42,
    Code: "92h",
    Properties: [
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 2
      },
      {
        PropertyString: "+50 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+160-200% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "+35 Slows target by",
        Index: 0
      },
      {
        PropertyString: "-70 to Monster Defense Per Hit",
        Index: 1
      },
      {
        PropertyString: "+10 Damage Reduced by 10%%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(20-24) to (67-78)"
        },
        {
          Type: 1,
          DamageString: "(46-54) to (104-120)"
        }
      ],
      EquipmentType: 1,
      Name: "Espandon",
      RequiredStrength: 73,
      RequiredDexterity: 61,
      Durability: 250,
      ItemLevel: 37,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Blackleach Blade",
    Index: "Blackleach Blade",
    Enabled: true,
    ItemLevel: 50,
    RequiredLevel: 42,
    Code: "9vo",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 5 weaken on striking",
        Index: 1
      },
      {
        PropertyString: "+100-140% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 4
      },
      {
        PropertyString: "+8 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "-2 to Light Radius",
        Index: 2
      },
      {
        PropertyString: "Requirements -25%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(28-33) to (106-127)"
        }
      ],
      EquipmentType: 1,
      Name: "Bill",
      RequiredStrength: 95,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 37,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Athena's Wrath",
    Index: "Athena's Wrath",
    Enabled: true,
    ItemLevel: 50,
    RequiredLevel: 42,
    Code: "9s8",
    Properties: [
      {
        PropertyString: "+1-3",
        Index: 0
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+150-180% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 4
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 1
      },
      {
        PropertyString: "to Life",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(45-50) to (112-126)"
        }
      ],
      EquipmentType: 1,
      Name: "Battle Scythe",
      RequiredStrength: 82,
      RequiredDexterity: 82,
      Durability: 250,
      ItemLevel: 40,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Skullder's Ire",
    Index: "Skullder's Ire",
    Enabled: true,
    ItemLevel: 50,
    RequiredLevel: 42,
    Code: "xpl",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+160-200 Enhanced Defense",
        Index: 2
      },
      {
        PropertyString: "+10 Magic Damage Reduced by",
        Index: 4
      },
      {
        PropertyString: "+ better chance of getting magic item",
        Index: 1
      },
      {
        PropertyString: "Repairs 0.2 durability per second",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "587-678",
      EquipmentType: 0,
      Name: "Russet Armor",
      RequiredStrength: 97,
      RequiredDexterity: 0,
      Durability: 150,
      ItemLevel: 49,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Lava Gout",
    Index: "Lavagout",
    Enabled: true,
    ItemLevel: 50,
    RequiredLevel: 42,
    Code: "xtg",
    Properties: [
      {
        PropertyString: "2% Chance to cast level 10 enchant on striking",
        Index: 2
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "Adds 13-46 to Fire Damage",
        Index: 5
      },
      {
        PropertyString: "+150-200 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "Fire Resist +24%",
        Index: 0
      },
      {
        PropertyString: "+1 Half Freeze Duration",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "100-120",
      EquipmentType: 0,
      Name: "Battle Gauntlets",
      RequiredStrength: 88,
      RequiredDexterity: 0,
      Durability: 38,
      ItemLevel: 49,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "War Traveler",
    Index: "Wartraveler",
    Enabled: true,
    ItemLevel: 50,
    RequiredLevel: 42,
    Code: "xtb",
    Properties: [
      {
        PropertyString: "+25 Faster Run/Walk",
        Index: 4
      },
      {
        PropertyString: "Adds 15-25 to Damage",
        Index: 6
      },
      {
        PropertyString: "+150-190 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "10 to Strength",
        Index: 1
      },
      {
        PropertyString: "10 to Vitality",
        Index: 0
      },
      {
        PropertyString: "40% Stamina Drain",
        Index: 8
      },
      {
        PropertyString: "+5-10 Attacker Takes Damage of",
        Index: 7
      },
      {
        PropertyString: "+30-50 better chance of getting magic item",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "37 to 64",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "100-116",
      EquipmentType: 0,
      Name: "Battle Boots",
      RequiredStrength: 95,
      RequiredDexterity: 0,
      Durability: 60,
      ItemLevel: 49,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Belt",
    Name: "Snowclash",
    Index: "Snowclash",
    Enabled: true,
    ItemLevel: 49,
    RequiredLevel: 42,
    Code: "ztb",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 7-19 blizzard when struck",
        Index: 0
      },
      {
        PropertyString: "Adds 13-21 to Cold Damage",
        Index: 3
      },
      {
        PropertyString: "+2 to Blizzard (Sorceress Only)",
        Index: 5
      },
      {
        PropertyString: "+3 to Glacial Spike (Sorceress Only)",
        Index: 6
      },
      {
        PropertyString: "+2 to Chilling Armor (Sorceress Only)",
        Index: 7
      },
      {
        PropertyString: "+130-170 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "+15 to Maximum Cold Resist",
        Index: 2
      },
      {
        PropertyString: "+15 Cold Absorb",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "87-102",
      EquipmentType: 0,
      Name: "Battle Belt",
      RequiredStrength: 88,
      RequiredDexterity: 0,
      Durability: 18,
      ItemLevel: 49,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Primal Helm",
    Name: "Arreat's Face",
    Index: "Arreat's Face",
    Enabled: true,
    ItemLevel: 50,
    RequiredLevel: 42,
    Code: "baa",
    Properties: [
      {
        PropertyString: "+2 to Masteries (Barbarian only)",
        Index: 1
      },
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "20 bonus to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "Adds 3-6 Life stolen per hit",
        Index: 7
      },
      {
        PropertyString: "+150-200 Enhanced Defense",
        Index: 2
      },
      {
        PropertyString: "20 to Strength",
        Index: 5
      },
      {
        PropertyString: "20 to Dexterity",
        Index: 6
      },
      {
        PropertyString: "All Resistances +30",
        Index: 8
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "235-282",
      EquipmentType: 0,
      Name: "Slayer Guard",
      RequiredStrength: 118,
      RequiredDexterity: 0,
      Durability: 55,
      ItemLevel: 54,
      Type: {
        Name: "Primal Helm",
        Index: "Primal Helm",
        Class: "bar"
      },
      RequiredClass: "Barbarian"
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "Homunculus",
    Index: "Homunculus",
    Enabled: true,
    ItemLevel: 50,
    RequiredLevel: 42,
    Code: "nea",
    Properties: [
      {
        PropertyString: "+2 to Curses (Necromancer only)",
        Index: 1
      },
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "+30 Faster Block Rate",
        Index: 3
      },
      {
        PropertyString: "40% Increased Chance of Blocking",
        Index: 4
      },
      {
        PropertyString: "+150-200 Enhanced Defense",
        Index: 2
      },
      {
        PropertyString: "20 to Energy",
        Index: 5
      },
      {
        PropertyString: "Regenerate Mana 33%",
        Index: 6
      },
      {
        PropertyString: "All Resistances +40",
        Index: 8
      },
      {
        PropertyString: "+5 to Mana after each Kill",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "147-177",
      EquipmentType: 0,
      Name: "Hierophant Trophy",
      RequiredStrength: 58,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 54,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Amazon Javelin",
    Name: "Titan's Revenge",
    Index: "Titan's Revenge",
    Enabled: true,
    ItemLevel: 50,
    RequiredLevel: 42,
    Code: "ama",
    Properties: [
      {
        PropertyString: "+2 to Javelin and Spear Skills (Amazon only)",
        Index: 1
      },
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "+30 Faster Run/Walk",
        Index: 3
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 8
      },
      {
        PropertyString: "Adds 5-9 Life stolen per hit",
        Index: 7
      },
      {
        PropertyString: "20 to Strength",
        Index: 5
      },
      {
        PropertyString: "20 to Dexterity",
        Index: 6
      },
      {
        PropertyString: "+60 Increased Stack Size",
        Index: 9
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(70-79) to (137-155)"
        },
        {
          Type: 2,
          DamageString: "(70-79) to (185-212)"
        }
      ],
      EquipmentType: 1,
      Name: "Ceremonial Javelin",
      RequiredStrength: 25,
      RequiredDexterity: 109,
      Durability: 250,
      ItemLevel: 35,
      Type: {
        Name: "Amazon Javelin",
        Index: "Amazon Javelin",
        Class: "ama"
      },
      RequiredClass: "Amazon"
    }
  },
  {
    Type: "Amazon Bow",
    Name: "Lycander's Aim",
    Index: "Lycander's Aim",
    Enabled: true,
    ItemLevel: 50,
    RequiredLevel: 42,
    Code: "am7",
    Properties: [
      {
        PropertyString: "+2 to Bow and Crossbow Skills (Amazon only)",
        Index: 1
      },
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 8
      },
      {
        PropertyString: "Adds 5-8 Mana stolen per hit",
        Index: 7
      },
      {
        PropertyString: "+20 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "20 to Dexterity",
        Index: 5
      },
      {
        PropertyString: "20 to Energy",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(72-82) to (152-173)"
        }
      ],
      EquipmentType: 1,
      Name: "Ceremonial Bow",
      RequiredStrength: 73,
      RequiredDexterity: 110,
      Durability: 0,
      ItemLevel: 47,
      Type: {
        Name: "Amazon Bow",
        Index: "Amazon Bow",
        Class: "ama"
      },
      RequiredClass: "Amazon"
    }
  },
  {
    Type: "Amazon Spear",
    Name: "Lycander's Flank",
    Index: "Lycander's Flank",
    Enabled: true,
    ItemLevel: 50,
    RequiredLevel: 42,
    Code: "am9",
    Properties: [
      {
        PropertyString: "+2 to Javelin and Spear Skills (Amazon only)",
        Index: 1
      },
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 8
      },
      {
        PropertyString: "Adds 5-9 Life stolen per hit",
        Index: 7
      },
      {
        PropertyString: "+20 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "20 to Strength",
        Index: 5
      },
      {
        PropertyString: "20 to Vitality",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(130-151) to (302-353)"
        }
      ],
      EquipmentType: 1,
      Name: "Ceremonial Pike",
      RequiredStrength: 115,
      RequiredDexterity: 98,
      Durability: 250,
      ItemLevel: 51,
      Type: {
        Name: "Amazon Spear",
        Index: "Amazon Spear",
        Class: "ama"
      },
      RequiredClass: "Amazon"
    }
  },
  {
    Type: "Orb",
    Name: "The Oculus",
    Index: "The Oculus",
    Enabled: true,
    ItemLevel: 50,
    RequiredLevel: 42,
    Code: "oba",
    Properties: [
      {
        PropertyString: "25% Chance to cast level 1 teleport when struck",
        Index: 1
      },
      {
        PropertyString: "+3",
        Index: 0
      },
      {
        PropertyString: "+30 Faster Cast Rate",
        Index: 3
      },
      {
        PropertyString: "+20 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "20 to Vitality",
        Index: 5
      },
      {
        PropertyString: "20 to Energy",
        Index: 6
      },
      {
        PropertyString: "All Resistances +20",
        Index: 2
      },
      {
        PropertyString: "+5 to Mana after each Kill",
        Index: 7
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 8
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "18 to 42"
        }
      ],
      EquipmentType: 1,
      Name: "Swirling Crystal",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 50,
      Type: {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      },
      RequiredClass: "Sorceress"
    }
  },
  {
    Type: "Auric Shields",
    Name: "Herald of Zakarum",
    Index: "Herald of Zakarum",
    Enabled: true,
    ItemLevel: 50,
    RequiredLevel: 42,
    Code: "pa9",
    Properties: [
      {
        PropertyString: "+2 to Combat Skills (Paladin only)",
        Index: 1
      },
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "+30 Faster Block Rate",
        Index: 3
      },
      {
        PropertyString: "30% Increased Chance of Blocking",
        Index: 4
      },
      {
        PropertyString: "20 bonus to Attack Rating",
        Index: 7
      },
      {
        PropertyString: "+150-200 Enhanced Defense",
        Index: 2
      },
      {
        PropertyString: "20 to Strength",
        Index: 5
      },
      {
        PropertyString: "20 to Vitality",
        Index: 6
      },
      {
        PropertyString: "All Resistances +50",
        Index: 8
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "20 to 28",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "362-435",
      EquipmentType: 0,
      Name: "Gilded Shield",
      RequiredStrength: 89,
      RequiredDexterity: 0,
      Durability: 50,
      ItemLevel: 51,
      Type: {
        Name: "Auric Shields",
        Index: "Auric Shields",
        Class: "pal"
      },
      RequiredClass: "Paladin"
    }
  },
  {
    Type: "Hand to Hand 2",
    Name: "Bartuc's Cut-Throat",
    Index: "Cutthroat1",
    Enabled: true,
    ItemLevel: 50,
    RequiredLevel: 42,
    Code: "9tw",
    Properties: [
      {
        PropertyString: "+1 to Martial Arts (Assassin only)",
        Index: 1
      },
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 8
      },
      {
        PropertyString: "20 bonus to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "Adds 5-9 Life stolen per hit",
        Index: 7
      },
      {
        PropertyString: "20 to Strength",
        Index: 5
      },
      {
        PropertyString: "20 to Dexterity",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(77-88) to (137-155)"
        }
      ],
      EquipmentType: 1,
      Name: "Greater Talons",
      RequiredStrength: 79,
      RequiredDexterity: 79,
      Durability: 250,
      ItemLevel: 50,
      Type: {
        Name: "Hand to Hand 2",
        Index: "Hand to Hand 2",
        Class: "ass"
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Pelt",
    Name: "Jalal's Mane",
    Index: "Jalal's Mane",
    Enabled: true,
    ItemLevel: 50,
    RequiredLevel: 42,
    Code: "dra",
    Properties: [
      {
        PropertyString: "+2 to Shape Shifting Skills (Druid only)",
        Index: 1
      },
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "20 bonus to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "+150-200 Enhanced Defense",
        Index: 2
      },
      {
        PropertyString: "20 to Strength",
        Index: 5
      },
      {
        PropertyString: "20 to Energy",
        Index: 6
      },
      {
        PropertyString: "All Resistances +30",
        Index: 8
      },
      {
        PropertyString: "+5 to Mana after each Kill",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "185-222",
      EquipmentType: 0,
      Name: "Totemic Mask",
      RequiredStrength: 65,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 55,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Sword",
    Name: "Serpent's Sharp",
    Index: "Serpent's Sharp",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 42,
    Code: "9cr",
    Properties: [
      {
        PropertyString: "+195-245% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+1677 to Minimum Poison Damage",
        Index: 5
      },
      {
        PropertyString: "25 to Enemy Poison Resistance",
        Index: 6
      },
      {
        PropertyString: "75 to Life",
        Index: 4
      },
      {
        PropertyString: "All Resistances +25-35",
        Index: 3
      },
      {
        PropertyString: "+12-15 Life after each Kill",
        Index: 2
      },
      {
        PropertyString: "Repairs 0.15 durability per second",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(38-44) to (103-120)"
        }
      ],
      EquipmentType: 1,
      Name: "Dimensional Blade",
      RequiredStrength: 85,
      RequiredDexterity: 60,
      Durability: 250,
      ItemLevel: 37,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Scepter",
    Name: "Crusader's Wrath",
    Index: "Crusader's Wrath",
    Enabled: true,
    ItemLevel: 30,
    RequiredLevel: 42,
    Code: "wsp",
    Properties: [
      {
        PropertyString: "+60-100% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 30-60 to Damage",
        Index: 1
      },
      {
        PropertyString: "+6 Mana stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+22 Chance of Crushing Blow",
        Index: 2
      },
      {
        PropertyString: "+3-5 to Blessed Hammer (Paladin Only)",
        Index: 5
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 6
      },
      {
        PropertyString: "10 to Strength",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(46-50) to (87-94)"
        }
      ],
      EquipmentType: 1,
      Name: "War Scepter",
      RequiredStrength: 55,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 21,
      Type: {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Knife",
    Name: "Sweet Whisper",
    Index: "Sweetwhisper",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 42,
    Code: "9di",
    Properties: [
      {
        PropertyString: "+1",
        Index: 0
      },
      {
        PropertyString: "+175-225% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "+5-7 Life after each Kill",
        Index: 2
      },
      {
        PropertyString: "5 to Experience Gained",
        Index: 3
      },
      {
        PropertyString: "+15 Reduces all Vendor Prices",
        Index: 4
      },
      {
        PropertyString: "+25 better chance of getting magic item",
        Index: 6
      },
      {
        PropertyString: "Level 10 Valkyrie (10 Charges)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(27-32) to (71-84)"
        }
      ],
      EquipmentType: 1,
      Name: "Rondel",
      RequiredStrength: 25,
      RequiredDexterity: 58,
      Durability: 250,
      ItemLevel: 36,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Sunderblight",
    Index: "Sunderblight",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 42,
    Code: "9vo",
    Properties: [
      {
        PropertyString: "7% Chance to cast level 3 decrepify when struck",
        Index: 6
      },
      {
        PropertyString: "+185-235% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+% Damage to Demons Damage to Demons",
        Index: 1
      },
      {
        PropertyString: "200 to Attack Rating against Demons",
        Index: 2
      },
      {
        PropertyString: "50 to Life",
        Index: 4
      },
      {
        PropertyString: "All Resistances +25-35",
        Index: 5
      },
      {
        PropertyString: "+20-25 Life after each Demon Kill",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(39-46) to (151-177)"
        }
      ],
      EquipmentType: 1,
      Name: "Bill",
      RequiredStrength: 95,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 37,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Ruby Dawn",
    Index: "Rubydawn",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 42,
    Code: "8cs",
    Properties: [
      {
        PropertyString: "+2",
        Index: 3
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 4
      },
      {
        PropertyString: "+66-95 to Left Hand Throw",
        Index: 0
      },
      {
        PropertyString: "+66-95 to Unsummon",
        Index: 1
      },
      {
        PropertyString: "+66-95 to Throw",
        Index: 2
      },
      {
        PropertyString: "+3-6 to Fire Mastery",
        Index: 6
      },
      {
        PropertyString: "+6-8 to Fire Ball",
        Index: 7
      },
      {
        PropertyString: "+15 Increase Maximum Mana",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "11 to 32"
        }
      ],
      EquipmentType: 1,
      Name: "Cedar Staff",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 38,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Wand",
    Name: "Huclavee's Flinch",
    Index: "Huclavee's Flinch",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 42,
    Code: "9yw",
    Properties: [
      {
        PropertyString: "+35 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+175-200% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 40-80 to Damage",
        Index: 0
      },
      {
        PropertyString: "+8 Life stolen per hit",
        Index: 6
      },
      {
        PropertyString: "+8 to Zeal",
        Index: 5
      },
      {
        PropertyString: "+25 Slows target by",
        Index: 4
      },
      {
        PropertyString: "+3 Knockback",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(62-64) to (146-152)"
        }
      ],
      EquipmentType: 1,
      Name: "Petrified Wand",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 38,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Ranger's Path",
    Index: "Ranger's Path",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 42,
    Code: "8cb",
    Properties: [
      {
        PropertyString: "2 to All Skills",
        Index: 1
      },
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+195-250% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+30-40 to Maximum Damage",
        Index: 3
      },
      {
        PropertyString: "+ Deadly Strike",
        Index: 5
      },
      {
        PropertyString: "+40-70 better chance of getting magic item",
        Index: 6
      },
      {
        PropertyString: "Level 10 Summon Grizzly (5 Charges)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(32-38) to (106-131)"
        }
      ],
      EquipmentType: 1,
      Name: "Double Bow",
      RequiredStrength: 58,
      RequiredDexterity: 73,
      Durability: 0,
      ItemLevel: 39,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Throwing Knife",
    Name: "Silt Runner",
    Index: "Silt Runner",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 42,
    Code: "9tk",
    Properties: [
      {
        PropertyString: "+35 Faster Run/Walk",
        Index: 5
      },
      {
        PropertyString: "+200-250% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+8 Life stolen per hit",
        Index: 4
      },
      {
        PropertyString: "Hit blinds target +2",
        Index: 3
      },
      {
        PropertyString: "20 to Strength",
        Index: 6
      },
      {
        PropertyString: "50-65 to Life",
        Index: 7
      },
      {
        PropertyString: "+55 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(24-28) to (48-56)"
        },
        {
          Type: 2,
          DamageString: "(33-38) to (72-84)"
        }
      ],
      EquipmentType: 1,
      Name: "Battle Dart",
      RequiredStrength: 25,
      RequiredDexterity: 52,
      Durability: 250,
      ItemLevel: 31,
      Type: {
        Name: "Throwing Knife",
        Index: "Throwing Knife",
        Class: ""
      },
      RequiredClass: "Knife"
    }
  },
  {
    Type: "Armor",
    Name: "Anaconda Skin",
    Index: "Anaconda Skin",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 42,
    Code: "xea",
    Properties: [
      {
        PropertyString: "+25 Faster Run/Walk",
        Index: 2
      },
      {
        PropertyString: "+20-40 Chance of Crushing Blow",
        Index: 1
      },
      {
        PropertyString: "+110-160 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "15 to Strength",
        Index: 4
      },
      {
        PropertyString: "Poison Resist +25-35%",
        Index: 3
      },
      {
        PropertyString: "+10-20 Damage Reduced by",
        Index: 5
      },
      {
        PropertyString: "+10-15 Magic Damage Reduced by",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "235-291",
      EquipmentType: 0,
      Name: "Serpentskin Armor",
      RequiredStrength: 43,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 36,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Savant Sin",
    Index: "Savant Sin",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 42,
    Code: "xrg",
    Properties: [
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "Adds 5-15 to Damage",
        Index: 4
      },
      {
        PropertyString: "+1 to Holy Shield",
        Index: 2
      },
      {
        PropertyString: "+120-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "Lightning Resist +35%",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "11 to 15",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "118-135",
      EquipmentType: 0,
      Name: "Scutum",
      RequiredStrength: 71,
      RequiredDexterity: 0,
      Durability: 62,
      ItemLevel: 42,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Islestrike",
    Index: "Islestrike",
    Enabled: true,
    ItemLevel: 51,
    RequiredLevel: 43,
    Code: "92a",
    Properties: [
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "+170-190% Enhanced Damage",
        Index: 7
      },
      {
        PropertyString: "+25 Chance of Crushing Blow",
        Index: 6
      },
      {
        PropertyString: "+1 to Maul (Druid Only)",
        Index: 8
      },
      {
        PropertyString: "+1 to Fury (Druid Only)",
        Index: 9
      },
      {
        PropertyString: "+50 Defense vs. Missile",
        Index: 5
      },
      {
        PropertyString: "10 to Strength",
        Index: 1
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 2
      },
      {
        PropertyString: "10 to Vitality",
        Index: 3
      },
      {
        PropertyString: "10 to Energy",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(35-37) to (102-110)"
        }
      ],
      EquipmentType: 1,
      Name: "Twin Axe",
      RequiredStrength: 85,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 39,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Hammer",
    Name: "Earthshaker",
    Index: "Earthshaker",
    Enabled: true,
    ItemLevel: 51,
    RequiredLevel: 43,
    Code: "9wh",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 7 eruption on striking",
        Index: 0
      },
      {
        PropertyString: "+3 to Elemental Skills (Druid only)",
        Index: 5
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+180% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "Hit blinds target +1",
        Index: 4
      },
      {
        PropertyString: "+1 Knockback",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "98 to 162"
        }
      ],
      EquipmentType: 1,
      Name: "Battle Hammer",
      RequiredStrength: 100,
      RequiredDexterity: 0,
      Durability: 300,
      ItemLevel: 48,
      Type: {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Bing Sz Wang",
    Index: "Bing Sz Wang",
    Enabled: true,
    ItemLevel: 51,
    RequiredLevel: 43,
    Code: "9cm",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 3 frozen orb on striking",
        Index: 4
      },
      {
        PropertyString: "+130-160% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "Adds 50-140 to Cold Damage",
        Index: 1
      },
      {
        PropertyString: "Freezes target +2",
        Index: 3
      },
      {
        PropertyString: "20 to Strength",
        Index: 2
      },
      {
        PropertyString: "Requirements -30%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(29-33) to (69-78)"
        },
        {
          Type: 1,
          DamageString: "(59-67) to (140-158)"
        }
      ],
      EquipmentType: 1,
      Name: "Dacian Falx",
      RequiredStrength: 91,
      RequiredDexterity: 20,
      Durability: 250,
      ItemLevel: 42,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Pierre Tombale Couant",
    Index: "Pierre Tombale Couant",
    Enabled: true,
    ItemLevel: 51,
    RequiredLevel: 43,
    Code: "9pa",
    Properties: [
      {
        PropertyString: "+3",
        Index: 1
      },
      {
        PropertyString: "+160-220% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "Adds 12-20 to Damage",
        Index: 4
      },
      {
        PropertyString: "100-200 to Attack Rating",
        Index: 6
      },
      {
        PropertyString: "+6 Mana stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+55 Deadly Strike",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(100-120) to (215-260)"
        }
      ],
      EquipmentType: 1,
      Name: "Partizan",
      RequiredStrength: 113,
      RequiredDexterity: 67,
      Durability: 250,
      ItemLevel: 35,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Magewrath",
    Index: "Magewrath",
    Enabled: true,
    ItemLevel: 51,
    RequiredLevel: 43,
    Code: "8sw",
    Properties: [
      {
        PropertyString: "+1",
        Index: 8
      },
      {
        PropertyString: "+120-150% Enhanced Damage",
        Index: 7
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 6
      },
      {
        PropertyString: "200-250 to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "+15 Mana stolen per hit",
        Index: 0
      },
      {
        PropertyString: "+3 to Guided Arrow (Amazon Only)",
        Index: 2
      },
      {
        PropertyString: "Hit blinds target +1",
        Index: 5
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 4
      },
      {
        PropertyString: "+9-13 Magic Damage Reduced by",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(55-60) to (127-137)"
        }
      ],
      EquipmentType: 1,
      Name: "Rune Bow",
      RequiredStrength: 73,
      RequiredDexterity: 103,
      Durability: 0,
      ItemLevel: 49,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Locathah",
    Index: "Locathah",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 43,
    Code: "9sb",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 6
      },
      {
        PropertyString: "+40 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+150-180% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 4
      },
      {
        PropertyString: "+20 Faster Block Rate",
        Index: 3
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+50-60 to Mana",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(25-28) to (60-67)"
        }
      ],
      EquipmentType: 1,
      Name: "Shamshir",
      RequiredStrength: 58,
      RequiredDexterity: 58,
      Durability: 250,
      ItemLevel: 35,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Wand",
    Name: "Epoch's End",
    Index: "Epoch's End",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 43,
    Code: "9wn",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "20-30 to Poison Skill Damage",
        Index: 3
      },
      {
        PropertyString: "+3-5 to FireGolem",
        Index: 6
      },
      {
        PropertyString: "to Life",
        Index: 2
      },
      {
        PropertyString: "+ to Mana",
        Index: 1
      },
      {
        PropertyString: "Poison Resist +45-65%",
        Index: 4
      },
      {
        PropertyString: "+50 Poison Length Reduced by",
        Index: 5
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "8 to 18"
        }
      ],
      EquipmentType: 1,
      Name: "Burnt Wand",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 31,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Raven Myst",
    Index: "Raven Myst",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 43,
    Code: "8mx",
    Properties: [
      {
        PropertyString: "Level 3-6 Meditation Aura When Equipped",
        Index: 4
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+5 to Raven",
        Index: 3
      },
      {
        PropertyString: "+1 Knockback",
        Index: 6
      },
      {
        PropertyString: "Socketed (2)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "50 to 105"
        }
      ],
      EquipmentType: 1,
      Name: "Siege Crossbow",
      RequiredStrength: 80,
      RequiredDexterity: 70,
      Durability: 0,
      ItemLevel: 40,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Weeping at the Gate",
    Index: "Weeping at the Gate",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 43,
    Code: "9pi",
    Properties: [
      {
        PropertyString: "+200-250% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+65 to Mana",
        Index: 3
      },
      {
        PropertyString: "Regenerate Mana 150%",
        Index: 5
      },
      {
        PropertyString: "+10-15 Damage Reduced by 10-15%%",
        Index: 6
      },
      {
        PropertyString: "25% Damage Taken Goes To Mana",
        Index: 4
      },
      {
        PropertyString: "+65 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(33-38) to (78-91)"
        },
        {
          Type: 2,
          DamageString: "(48-56) to (126-147)"
        }
      ],
      EquipmentType: 1,
      Name: "Great Pilum",
      RequiredStrength: 25,
      RequiredDexterity: 88,
      Durability: 250,
      ItemLevel: 37,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Throwing Axe",
    Name: "Despicable Behavior",
    Index: "Despicable Behavior",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 43,
    Code: "9ta",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 7 blizzard on striking",
        Index: 7
      },
      {
        PropertyString: "+2",
        Index: 3
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+200-250% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+30 Faster Block Rate",
        Index: 6
      },
      {
        PropertyString: "25 bonus to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "+60 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(33-38) to (66-77)"
        },
        {
          Type: 2,
          DamageString: "(54-63) to (99-115)"
        }
      ],
      EquipmentType: 1,
      Name: "Francisca",
      RequiredStrength: 25,
      RequiredDexterity: 80,
      Durability: 250,
      ItemLevel: 34,
      Type: {
        Name: "Throwing Axe",
        Index: "Throwing Axe",
        Class: ""
      },
      RequiredClass: "Axe"
    }
  },
  {
    Type: "Armor",
    Name: "Torn Flesh of Souls",
    Index: "Torn Flesh of Souls",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 43,
    Code: "xla",
    Properties: [
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 5
      },
      {
        PropertyString: "+75% Damage to Demons Damage to Demons",
        Index: 1
      },
      {
        PropertyString: "+66-95 to Unsummon",
        Index: 3
      },
      {
        PropertyString: "+66-95 to Unsummon",
        Index: 4
      },
      {
        PropertyString: "+120-170 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+ to Mana",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "270-332",
      EquipmentType: 0,
      Name: "Demonhide Armor",
      RequiredStrength: 50,
      RequiredDexterity: 0,
      Durability: 28,
      ItemLevel: 37,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Panic of Thousands",
    Index: "Panic of Thousands",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 43,
    Code: "xcl",
    Properties: [
      {
        PropertyString: "33% Chance to cast level 3 terror when struck",
        Index: 1
      },
      {
        PropertyString: "+4 to Enchant",
        Index: 2
      },
      {
        PropertyString: "+125-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "to Dexterity",
        Index: 5
      },
      {
        PropertyString: "Lightning Resist +35-50%",
        Index: 4
      },
      {
        PropertyString: "Fire Resist +35-50%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "398-442",
      EquipmentType: 0,
      Name: "Tigulated Mail",
      RequiredStrength: 86,
      RequiredDexterity: 0,
      Durability: 136,
      ItemLevel: 43,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Troubled Thoughts",
    Index: "Troubled Thoughts",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 43,
    Code: "xlm",
    Properties: [
      {
        PropertyString: "+1-2",
        Index: 1
      },
      {
        PropertyString: "+66-95 to Throw",
        Index: 2
      },
      {
        PropertyString: "+66-95 to Throw",
        Index: 3
      },
      {
        PropertyString: "+80-120 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "15 to Strength",
        Index: 7
      },
      {
        PropertyString: "+15-20 Life after each Kill",
        Index: 5
      },
      {
        PropertyString: "+8-12 to Mana after each Kill",
        Index: 6
      },
      {
        PropertyString: "Repairs 0.1 durability per second",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "115-140",
      EquipmentType: 0,
      Name: "Casque",
      RequiredStrength: 59,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 42,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Merc Equip",
    Name: "Knight's Crest",
    Index: "Knight's Crest",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 43,
    Code: "xhl",
    Properties: [
      {
        PropertyString: "+1-2",
        Index: 1
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 5
      },
      {
        PropertyString: "10% Increased Chance of Blocking",
        Index: 2
      },
      {
        PropertyString: "+96-125 to Throw",
        Index: 3
      },
      {
        PropertyString: "+15 Slows target by",
        Index: 6
      },
      {
        PropertyString: "+120-140 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+10-15 Life after each Kill",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "167-182",
      EquipmentType: 0,
      Name: "Basinet",
      RequiredStrength: 82,
      RequiredDexterity: 0,
      Durability: 30,
      ItemLevel: 45,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Gloves",
    Name: "Lady of the Lake",
    Index: "Lady of the Lake",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 43,
    Code: "xvg",
    Properties: [
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+1",
        Index: 3
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 6
      },
      {
        PropertyString: "+15 Faster Cast Rate",
        Index: 5
      },
      {
        PropertyString: "+120-140 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+40-50 to Mana",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "74-81",
      EquipmentType: 0,
      Name: "Sharkskin Gloves",
      RequiredStrength: 20,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 39,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "Gillian's Boots",
    Index: "Gillian's Boots",
    Enabled: true,
    ItemLevel: 43,
    RequiredLevel: 43,
    Code: "vbt",
    Properties: [
      {
        PropertyString: "+1 to Shadow Disciplines (Assassin only)",
        Index: 4
      },
      {
        PropertyString: "+15 Faster Run/Walk",
        Index: 1
      },
      {
        PropertyString: "+3 Kick Damage",
        Index: 2
      },
      {
        PropertyString: "+25-35 Defense",
        Index: 0
      },
      {
        PropertyString: "10 to Strength",
        Index: 5
      },
      {
        PropertyString: "+50 extra gold from monsters",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "4 to 10",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "30-40",
      EquipmentType: 0,
      Name: "Heavy Boots",
      RequiredStrength: 18,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 7,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "Zebrastride",
    Index: "Zebrastride",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 43,
    Code: "xmb",
    Properties: [
      {
        PropertyString: "+40 Faster Run/Walk",
        Index: 1
      },
      {
        PropertyString: "+5-10 Kick Damage",
        Index: 4
      },
      {
        PropertyString: "+10 Chance of Crushing Blow",
        Index: 3
      },
      {
        PropertyString: "+125-165 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "to Dexterity",
        Index: 2
      },
      {
        PropertyString: "Regenerate Mana 25%",
        Index: 6
      },
      {
        PropertyString: "All Resistances +15",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "23 to 52",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "85-100",
      EquipmentType: 0,
      Name: "Mesh Boots",
      RequiredStrength: 65,
      RequiredDexterity: 0,
      Durability: 66,
      ItemLevel: 43,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Orb",
    Name: "Starbreaker",
    Index: "Starbreaker",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 43,
    Code: "ob8",
    Properties: [
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "10-15 to Lightning Skill Damage",
        Index: 1
      },
      {
        PropertyString: "10-15 to Enemy Lightning Resistance",
        Index: 2
      },
      {
        PropertyString: "15 to Strength",
        Index: 5
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 6
      },
      {
        PropertyString: "Lightning Resist +75%",
        Index: 4
      },
      {
        PropertyString: "+15-20 Lightning Absorb",
        Index: 3
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "11 to 29"
        }
      ],
      EquipmentType: 1,
      Name: "Cloudy Sphere",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 41,
      Type: {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      },
      RequiredClass: "Sorceress"
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "Fallen Hero's Disgrace",
    Index: "Fallen Hero's Disgrace",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 43,
    Code: "ne8",
    Properties: [
      {
        PropertyString: "100% Chance to cast level 37 blizzard when you Die",
        Index: 7
      },
      {
        PropertyString: "+2",
        Index: 1
      },
      {
        PropertyString: "25-50% Increased Chance of Blocking",
        Index: 4
      },
      {
        PropertyString: "+140 Defense",
        Index: 0
      },
      {
        PropertyString: "30 to Strength",
        Index: 3
      },
      {
        PropertyString: "30 to Dexterity",
        Index: 2
      },
      {
        PropertyString: "+10-15 Damage Reduced by",
        Index: 5
      },
      {
        PropertyString: "+10-15 Magic Damage Reduced by",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "44",
      EquipmentType: 0,
      Name: "Sexton Trophy",
      RequiredStrength: 47,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 45,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Primal Helm",
    Name: "Primal Lust",
    Index: "Primal Lust",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 43,
    Code: "ba8",
    Properties: [
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "+20 Faster Block Rate",
        Index: 5
      },
      {
        PropertyString: "+3-5 to Minimum Damage",
        Index: 2
      },
      {
        PropertyString: "+15-20 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+150-170 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "10 to Strength",
        Index: 7
      },
      {
        PropertyString: "15 to Vitality",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "197-213",
      EquipmentType: 0,
      Name: "Rage Mask",
      RequiredStrength: 88,
      RequiredDexterity: 0,
      Durability: 45,
      ItemLevel: 44,
      Type: {
        Name: "Primal Helm",
        Index: "Primal Helm",
        Class: "bar"
      },
      RequiredClass: "Barbarian"
    }
  },
  {
    Type: "Pelt",
    Name: "Night Prowler",
    Index: "Night Prowler",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 43,
    Code: "dr8",
    Properties: [
      {
        PropertyString: "+1-2 to Summoning Skills (Druid only)",
        Index: 2
      },
      {
        PropertyString: "+2",
        Index: 1
      },
      {
        PropertyString: "+50 Faster Run/Walk",
        Index: 3
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 4
      },
      {
        PropertyString: "+40 Faster Block Rate",
        Index: 6
      },
      {
        PropertyString: "+120-150 Enhanced Defense",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "149-170",
      EquipmentType: 0,
      Name: "Hunter's Guise",
      RequiredStrength: 56,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 46,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Pelt",
    Name: "Stone Feather",
    Index: "Stone Feather",
    Enabled: true,
    ItemLevel: 43,
    RequiredLevel: 43,
    Code: "drf",
    Properties: [
      {
        PropertyString: "2 to All Skills",
        Index: 4
      },
      {
        PropertyString: "+200-300 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+25-50 Damage Reduced by 25-50%%",
        Index: 1
      },
      {
        PropertyString: "Socketed (3)",
        Index: 3
      },
      {
        PropertyString: "Requirements -65%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "330-440",
      EquipmentType: 0,
      Name: "Dream Spirit",
      RequiredStrength: 118,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 85,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Hand to Hand",
    Name: "Heat of Summer",
    Index: "Heat of Summer",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 43,
    Code: "9xf",
    Properties: [
      {
        PropertyString: "+5 to Fire Skills",
        Index: 4
      },
      {
        PropertyString: "+200-250% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 15-30 to Damage",
        Index: 7
      },
      {
        PropertyString: "Adds 75-150 to Fire Damage",
        Index: 1
      },
      {
        PropertyString: "+251-280 to Unsummon",
        Index: 6
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 5
      },
      {
        PropertyString: "Cold Resist +25-50%",
        Index: 2
      },
      {
        PropertyString: "+10 Fire Absorb",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(39-43) to (141-159)"
        }
      ],
      EquipmentType: 1,
      Name: "Fascia",
      RequiredStrength: 69,
      RequiredDexterity: 69,
      Durability: 250,
      ItemLevel: 36,
      Type: {
        Name: "Hand to Hand",
        Index: "Hand to Hand",
        Class: "ass"
      },
      RequiredClass: "Assassin"
    }
  },
  {
    Type: "Jewel",
    Name: "Quartz Facet",
    Index: "Quartz Facet",
    Enabled: true,
    ItemLevel: 43,
    RequiredLevel: 43,
    Code: "jew",
    Properties: [
      {
        PropertyString: "+10 Faster Cast Rate",
        Index: 2
      },
      {
        PropertyString: "30-40 to Life",
        Index: 0
      },
      {
        PropertyString: "+25-35 to Mana",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Jewel",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Jewel",
        Index: "Jewel",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "The Vile Husk",
    Index: "The Vile Husk",
    Enabled: true,
    ItemLevel: 52,
    RequiredLevel: 44,
    Code: "9gs",
    Properties: [
      {
        PropertyString: "6% Chance to cast level 1 amplify damage on striking",
        Index: 0
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "+% Damage to Undead Damage to Undead",
        Index: 1
      },
      {
        PropertyString: "to Attack Rating against Undead",
        Index: 5
      },
      {
        PropertyString: "+426 to Minimum Poison Damage",
        Index: 3
      },
      {
        PropertyString: "Poison Resist +50%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(25-30) to (92-111)"
        },
        {
          Type: 1,
          DamageString: "(47-57) to (145-174)"
        }
      ],
      EquipmentType: 1,
      Name: "Tusk Sword",
      RequiredStrength: 104,
      RequiredDexterity: 71,
      Durability: 250,
      ItemLevel: 45,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Husoldal Evo",
    Index: "Husoldal Evo",
    Enabled: true,
    ItemLevel: 52,
    RequiredLevel: 44,
    Code: "9h9",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+160-200% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "Adds 20-32 to Damage",
        Index: 3
      },
      {
        PropertyString: "200-250 to Attack Rating",
        Index: 1
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 2
      },
      {
        PropertyString: "+20 Replenish Life",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(53-59) to (253-287)"
        }
      ],
      EquipmentType: 1,
      Name: "Bec-de-Corbin",
      RequiredStrength: 133,
      RequiredDexterity: 91,
      Durability: 250,
      ItemLevel: 51,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Valkyrie Wing",
    Index: "Valkiry Wing",
    Enabled: true,
    ItemLevel: 52,
    RequiredLevel: 44,
    Code: "xhm",
    Properties: [
      {
        PropertyString: "+1-2",
        Index: 3
      },
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 1
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "+150-200 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+2-4 to Mana after each Kill",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "215-258",
      EquipmentType: 0,
      Name: "Winged helm",
      RequiredStrength: 115,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 51,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Shield",
    Name: "Gerke's Sanctuary",
    Index: "Kerke's Sanctuary",
    Enabled: true,
    ItemLevel: 52,
    RequiredLevel: 44,
    Code: "xow",
    Properties: [
      {
        PropertyString: "30% Increased Chance of Blocking",
        Index: 5
      },
      {
        PropertyString: "+180-240 Enhanced Defense",
        Index: 3
      },
      {
        PropertyString: "+15 Replenish Life",
        Index: 2
      },
      {
        PropertyString: "All Resistances +20-30",
        Index: 6
      },
      {
        PropertyString: "+11-16 Damage Reduced by",
        Index: 0
      },
      {
        PropertyString: "+14-18 Magic Damage Reduced by",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "10 to 17",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "193-234",
      EquipmentType: 0,
      Name: "Pavise",
      RequiredStrength: 133,
      RequiredDexterity: 0,
      Durability: 172,
      ItemLevel: 50,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Throwing Knife",
    Name: "Deathbit",
    Index: "Deathbit",
    Enabled: true,
    ItemLevel: 52,
    RequiredLevel: 44,
    Code: "9tk",
    Properties: [
      {
        PropertyString: "+130-180% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "200-450 to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "Adds 4-6 Mana stolen per hit",
        Index: 4
      },
      {
        PropertyString: "Adds 7-9 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+40 Deadly Strike",
        Index: 0
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(18-22) to (36-44)"
        },
        {
          Type: 2,
          DamageString: "(25-30) to (55-67)"
        }
      ],
      EquipmentType: 1,
      Name: "Battle Dart",
      RequiredStrength: 25,
      RequiredDexterity: 52,
      Durability: 250,
      ItemLevel: 31,
      Type: {
        Name: "Throwing Knife",
        Index: "Throwing Knife",
        Class: ""
      },
      RequiredClass: "Knife"
    }
  },
  {
    Type: "Axe",
    Name: "Bloody Scalp",
    Index: "Bloody Scalp",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 44,
    Code: "9ha",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+100-135% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "20 bonus to Attack Rating",
        Index: 6
      },
      {
        PropertyString: "+17 Deadly Strike",
        Index: 4
      },
      {
        PropertyString: "77% Chance of Open Wounds",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(20-23) to (42-49)"
        }
      ],
      EquipmentType: 1,
      Name: "Hatchet",
      RequiredStrength: 25,
      RequiredDexterity: 25,
      Durability: 250,
      ItemLevel: 31,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Grandiose Dreams",
    Index: "Grandiose Dreams",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 44,
    Code: "9ba",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 3
      },
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 6
      },
      {
        PropertyString: "+180-230% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+40-60 to Maximum Damage",
        Index: 2
      },
      {
        PropertyString: "+40 Chance of Crushing Blow",
        Index: 4
      },
      {
        PropertyString: "60 to Life",
        Index: 5
      },
      {
        PropertyString: "+40 better chance of getting magic item",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(58-69) to (177-221)"
        }
      ],
      EquipmentType: 1,
      Name: "Bearded Axe",
      RequiredStrength: 92,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 38,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Dread Blade",
    Index: "Dread of the Blade",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 44,
    Code: "9bs",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 3
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+200-250% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+40 Faster Block Rate",
        Index: 6
      },
      {
        PropertyString: "+40-60 to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+7 Mana stolen per hit",
        Index: 7
      },
      {
        PropertyString: "+3 to Sword Mastery",
        Index: 5
      },
      {
        PropertyString: "112%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(48-56) to (142-179)"
        }
      ],
      EquipmentType: 1,
      Name: "Battle Sword",
      RequiredStrength: 92,
      RequiredDexterity: 43,
      Durability: 250,
      ItemLevel: 40,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Fear and Loathing",
    Index: "Fear and Loathing",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 44,
    Code: "9br",
    Properties: [
      {
        PropertyString: "6% Chance to cast level 4 terror when struck",
        Index: 2
      },
      {
        PropertyString: "10% Chance to cast level 3 attract on striking",
        Index: 3
      },
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 6
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+190-240% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 40-80 to Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 5-8 Mana stolen per hit",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(86-94) to (196-216)"
        }
      ],
      EquipmentType: 1,
      Name: "War Fork",
      RequiredStrength: 80,
      RequiredDexterity: 95,
      Durability: 250,
      ItemLevel: 41,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Count Kidran's Axe",
    Index: "Count Kidran's Scythe",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 44,
    Code: "9b7",
    Properties: [
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 4
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 1
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 6
      },
      {
        PropertyString: "+25 to Mana",
        Index: 5
      },
      {
        PropertyString: "All Resistances +20-40",
        Index: 3
      },
      {
        PropertyString: "3 to Experience Gained",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(37-40) to (166-195)"
        }
      ],
      EquipmentType: 1,
      Name: "Lochaber Axe",
      RequiredStrength: 80,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 33,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Teldicia's Sting",
    Index: "Teldicia's Sting",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 44,
    Code: "8sb",
    Properties: [
      {
        PropertyString: "7% Chance to cast level 1 guided arrow when struck",
        Index: 6
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+80-125% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 1
      },
      {
        PropertyString: "+333 to Minimum Poison Damage",
        Index: 3
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 4
      },
      {
        PropertyString: "50 to Life",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(35-38) to (84-92)"
        }
      ],
      EquipmentType: 1,
      Name: "Edge Bow",
      RequiredStrength: 25,
      RequiredDexterity: 43,
      Durability: 0,
      ItemLevel: 30,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Lilt of the Dryad",
    Index: "Lilt of the Dryad",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 44,
    Code: "xtu",
    Properties: [
      {
        PropertyString: "+1-2 to Passive and Magic Skills (Amazon only)",
        Index: 3
      },
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+15 Slows target by",
        Index: 6
      },
      {
        PropertyString: "+130-180 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "Lightning Resist +20-40%",
        Index: 5
      },
      {
        PropertyString: "Fire Resist +20-40%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "319-389",
      EquipmentType: 0,
      Name: "Trellised Armor",
      RequiredStrength: 61,
      RequiredDexterity: 0,
      Durability: 32,
      ItemLevel: 40,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Drow Mesh",
    Index: "Drow Chainmail",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 44,
    Code: "xhn",
    Properties: [
      {
        PropertyString: "10-15 to Fire Skill Damage",
        Index: 2
      },
      {
        PropertyString: "+150-200 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "10 to Strength",
        Index: 4
      },
      {
        PropertyString: "to Life",
        Index: 5
      },
      {
        PropertyString: "+40-60 to Mana",
        Index: 6
      },
      {
        PropertyString: "All Resistances +20-30",
        Index: 3
      },
      {
        PropertyString: "Requirements -25%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "497-597",
      EquipmentType: 0,
      Name: "Mesh Armor",
      RequiredStrength: 92,
      RequiredDexterity: 0,
      Durability: 45,
      ItemLevel: 45,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Wraithshadow",
    Index: "Wraithshadow",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 44,
    Code: "xsk",
    Properties: [
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 2
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+135-155 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "20 to Vitality",
        Index: 6
      },
      {
        PropertyString: "+35 extra gold from monsters",
        Index: 4
      },
      {
        PropertyString: "+20 better chance of getting magic item",
        Index: 5
      },
      {
        PropertyString: "Fade",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "129-140",
      EquipmentType: 0,
      Name: "Death Mask",
      RequiredStrength: 55,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 48,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Shield",
    Name: "Wishgranter",
    Index: "Wishgranter",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 44,
    Code: "xit",
    Properties: [
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "15-30% Increased Chance of Blocking",
        Index: 4
      },
      {
        PropertyString: "+10-15 to Maximum Damage",
        Index: 5
      },
      {
        PropertyString: "200 to Attack Rating",
        Index: 7
      },
      {
        PropertyString: "+126-155 to Throw",
        Index: 2
      },
      {
        PropertyString: "+126-155 to Throw",
        Index: 3
      },
      {
        PropertyString: "+80-130 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+10 Increase Maximum Life",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "15 to 24",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "108-138",
      EquipmentType: 0,
      Name: "Dragon Shield",
      RequiredStrength: 91,
      RequiredDexterity: 0,
      Durability: 76,
      ItemLevel: 45,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Rapturous Blessings",
    Index: "Rapturous Blessings",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 44,
    Code: "xmg",
    Properties: [
      {
        PropertyString: "+10 Faster Cast Rate",
        Index: 2
      },
      {
        PropertyString: "+1 to Salvation",
        Index: 1
      },
      {
        PropertyString: "+75-125 Defense",
        Index: 0
      },
      {
        PropertyString: "15 to Vitality",
        Index: 6
      },
      {
        PropertyString: "15 to Energy",
        Index: 5
      },
      {
        PropertyString: "+5 to Maximum Fire Resist",
        Index: 3
      },
      {
        PropertyString: "All Resistances +10-15",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "112-162",
      EquipmentType: 0,
      Name: "Heavy Bracers",
      RequiredStrength: 58,
      RequiredDexterity: 0,
      Durability: 16,
      ItemLevel: 43,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Axe",
    Name: "Pompeii's Wrath",
    Index: "Pompe's Wrath",
    Enabled: true,
    ItemLevel: 53,
    RequiredLevel: 45,
    Code: "9mp",
    Properties: [
      {
        PropertyString: "4% Chance to cast level 8 volcano on striking",
        Index: 0
      },
      {
        PropertyString: "+140-170% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "Adds 35-150 to Fire Damage",
        Index: 2
      },
      {
        PropertyString: "+50 Slows target by",
        Index: 1
      },
      {
        PropertyString: "+1 Knockback",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(33-37) to (81-91)"
        }
      ],
      EquipmentType: 1,
      Name: "Crowbill",
      RequiredStrength: 94,
      RequiredDexterity: 70,
      Durability: 250,
      ItemLevel: 43,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "The Minotaur",
    Index: "The Minataur",
    Enabled: true,
    ItemLevel: 53,
    RequiredLevel: 45,
    Code: "9gi",
    Properties: [
      {
        PropertyString: "+140-200% Enhanced Damage",
        Index: 6
      },
      {
        PropertyString: "Adds 20-30 to Damage",
        Index: 5
      },
      {
        PropertyString: "+30 Chance of Crushing Blow",
        Index: 4
      },
      {
        PropertyString: "Hit blinds target +2",
        Index: 0
      },
      {
        PropertyString: "+50 Slows target by",
        Index: 3
      },
      {
        PropertyString: "15-20 to Strength",
        Index: 2
      },
      {
        PropertyString: "+1 Half Freeze Duration",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(123-149) to (234-285)"
        }
      ],
      EquipmentType: 1,
      Name: "Ancient Axe",
      RequiredStrength: 125,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 51,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Mace",
    Name: "Baezil's Vortex",
    Index: "Baezil's Vortex",
    Enabled: true,
    ItemLevel: 53,
    RequiredLevel: 45,
    Code: "9fl",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 8 nova on striking",
        Index: 0
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+160-200% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "Adds 1-150 to Lightning Damage",
        Index: 1
      },
      {
        PropertyString: "+100 to Mana",
        Index: 2
      },
      {
        PropertyString: "Lightning Resist +25%",
        Index: 3
      },
      {
        PropertyString: "Level 15 Nova (80 Charges)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(33-39) to (91-105)"
        }
      ],
      EquipmentType: 1,
      Name: "Knout",
      RequiredStrength: 82,
      RequiredDexterity: 73,
      Durability: 250,
      ItemLevel: 43,
      Type: {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Hammer",
    Name: "The Gavel of Pain",
    Index: "The Gavel of Pain",
    Enabled: true,
    ItemLevel: 53,
    RequiredLevel: 45,
    Code: "9gm",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 1 amplify damage on striking",
        Index: 0
      },
      {
        PropertyString: "5% Chance to cast level 1 iron maiden when struck",
        Index: 1
      },
      {
        PropertyString: "+1 Indestructible",
        Index: 3
      },
      {
        PropertyString: "+130-160% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "Adds 12-30 to Damage",
        Index: 4
      },
      {
        PropertyString: "+26 Attacker Takes Damage of",
        Index: 2
      },
      {
        PropertyString: "Level 8 Amplify Damage (3 Charges)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(152-170) to (257-287)"
        }
      ],
      EquipmentType: 1,
      Name: "Martel de Fer",
      RequiredStrength: 169,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 53,
      Type: {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Cloudcrack",
    Index: "Cloudcrack",
    Enabled: true,
    ItemLevel: 53,
    RequiredLevel: 45,
    Code: "9b9",
    Properties: [
      {
        PropertyString: "6% Chance to cast level 7 fist of the heavens on striking",
        Index: 0
      },
      {
        PropertyString: "+2 to Offensive Auras (Paladin only)",
        Index: 7
      },
      {
        PropertyString: "+2 to Defensive Auras (Paladin only)",
        Index: 8
      },
      {
        PropertyString: "+150-200% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "Adds 1-240 to Lightning Damage",
        Index: 1
      },
      {
        PropertyString: "+30 Defense",
        Index: 2
      },
      {
        PropertyString: "+10 to Maximum Lightning Resist",
        Index: 4
      },
      {
        PropertyString: "+15 Attacker Takes Lightning Damage of",
        Index: 6
      },
      {
        PropertyString: "2 to Light Radius",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(35-42) to (100-120)"
        },
        {
          Type: 1,
          DamageString: "(97-117) to (150-180)"
        }
      ],
      EquipmentType: 1,
      Name: "Gothic Sword",
      RequiredStrength: 113,
      RequiredDexterity: 20,
      Durability: 250,
      ItemLevel: 48,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Grim's Burning Dead",
    Index: "Grim's Burning Dead",
    Enabled: true,
    ItemLevel: 52,
    RequiredLevel: 45,
    Code: "9wc",
    Properties: [
      {
        PropertyString: "+3",
        Index: 5
      },
      {
        PropertyString: "+140-180% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "-50% Target Defense",
        Index: 6
      },
      {
        PropertyString: "200-250 to Attack Rating",
        Index: 8
      },
      {
        PropertyString: "Adds 131-232 to Fire Damage",
        Index: 0
      },
      {
        PropertyString: "+20 Enhanced Defense",
        Index: 7
      },
      {
        PropertyString: "Fire Resist +45%",
        Index: 1
      },
      {
        PropertyString: "+8 Attacker Takes Damage of",
        Index: 3
      },
      {
        PropertyString: "Requirements -50%",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(72-84) to (168-196)"
        }
      ],
      EquipmentType: 1,
      Name: "Grim Scythe",
      RequiredStrength: 140,
      RequiredDexterity: 140,
      Durability: 250,
      ItemLevel: 55,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Guardian Angel",
    Index: "Guardian Angel",
    Enabled: true,
    ItemLevel: 53,
    RequiredLevel: 45,
    Code: "xlt",
    Properties: [
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+30 Faster Block Rate",
        Index: 3
      },
      {
        PropertyString: "20% Increased Chance of Blocking",
        Index: 6
      },
      {
        PropertyString: "to Attack Rating against Demons",
        Index: 5
      },
      {
        PropertyString: "+180-200 Enhanced Defense",
        Index: 2
      },
      {
        PropertyString: "+15 to Maximum Fire Resist",
        Index: 4
      },
      {
        PropertyString: "4 to Light Radius",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "708-759",
      EquipmentType: 0,
      Name: "Templar Coat",
      RequiredStrength: 118,
      RequiredDexterity: 0,
      Durability: 60,
      ItemLevel: 52,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Ring",
    Name: "Dwarf Star",
    Index: "Dwarf Star",
    Enabled: true,
    ItemLevel: 53,
    RequiredLevel: 45,
    Code: "rin",
    Properties: [
      {
        PropertyString: "40 to Life",
        Index: 3
      },
      {
        PropertyString: "+15 Heal Stamina Plus",
        Index: 2
      },
      {
        PropertyString: "+15 Fire Absorb",
        Index: 5
      },
      {
        PropertyString: "+12-15 Magic Damage Reduced by",
        Index: 4
      },
      {
        PropertyString: "+100 extra gold from monsters",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Ring",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Ring",
        Index: "Ring",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Ring",
    Name: "Raven Frost",
    Index: "Raven Frost",
    Enabled: true,
    ItemLevel: 53,
    RequiredLevel: 45,
    Code: "rin",
    Properties: [
      {
        PropertyString: "150-250 to Attack Rating",
        Index: 5
      },
      {
        PropertyString: "Adds 15-45 to Cold Damage",
        Index: 1
      },
      {
        PropertyString: "15-20 to Dexterity",
        Index: 4
      },
      {
        PropertyString: "+40 to Mana",
        Index: 3
      },
      {
        PropertyString: "+20 Cold Absorb",
        Index: 2
      },
      {
        PropertyString: "+1 Cannot Be Frozen",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Ring",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Ring",
        Index: "Ring",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Axe",
    Name: "Slayer of Trents",
    Index: "Slayer of Trents",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 45,
    Code: "9ax",
    Properties: [
      {
        PropertyString: "+170-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 15-30 to Damage",
        Index: 1
      },
      {
        PropertyString: "-15% Target Defense",
        Index: 3
      },
      {
        PropertyString: "+100% Damage to Demons Damage to Demons",
        Index: 2
      },
      {
        PropertyString: "Poison Resist +25-35%",
        Index: 6
      },
      {
        PropertyString: "Repairs 0.1 durability per second",
        Index: 4
      },
      {
        PropertyString: "Level 10 Howl (15 Charges)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(42-45) to (119-129)"
        }
      ],
      EquipmentType: 1,
      Name: "Cleaver",
      RequiredStrength: 68,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 34,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Axe",
    Name: "Sunblighter",
    Index: "Sunblighter",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 45,
    Code: "9la",
    Properties: [
      {
        PropertyString: "+180-230% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 100-300 to Fire Damage",
        Index: 1
      },
      {
        PropertyString: "15 to Fire Skill Damage",
        Index: 4
      },
      {
        PropertyString: "+44 Deadly Strike",
        Index: 3
      },
      {
        PropertyString: "Hit blinds target +2",
        Index: 5
      },
      {
        PropertyString: "Fire Resist +40-50%",
        Index: 6
      },
      {
        PropertyString: "All Resistances +25",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(39-46) to (95-112)"
        }
      ],
      EquipmentType: 1,
      Name: "Military Axe",
      RequiredStrength: 73,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 34,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Song of the Damned",
    Index: "Song of the Damned",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 45,
    Code: "9fc",
    Properties: [
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 7
      },
      {
        PropertyString: "+190-240% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+% Damage to Undead Damage to Undead",
        Index: 5
      },
      {
        PropertyString: "+1 to Battle Orders",
        Index: 2
      },
      {
        PropertyString: "+1 to Revive",
        Index: 3
      },
      {
        PropertyString: "+5-8 to Skeleton Mastery",
        Index: 4
      },
      {
        PropertyString: "25 to Dexterity",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(46-54) to (101-119)"
        }
      ],
      EquipmentType: 1,
      Name: "Tulwar",
      RequiredStrength: 70,
      RequiredDexterity: 42,
      Durability: 250,
      ItemLevel: 37,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Mace",
    Name: "Demise of the Weak",
    Index: "Demise of the Weak",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 45,
    Code: "9ma",
    Properties: [
      {
        PropertyString: "+180-230% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+50 Faster Hit Recovery",
        Index: 4
      },
      {
        PropertyString: "+20 Faster Block Rate",
        Index: 3
      },
      {
        PropertyString: "15-25% Increased Chance of Blocking",
        Index: 2
      },
      {
        PropertyString: "225 to Attack Rating",
        Index: 5
      },
      {
        PropertyString: "+10-15 Replenish Life",
        Index: 1
      },
      {
        PropertyString: "2-5 to Experience Gained",
        Index: 6
      },
      {
        PropertyString: "Level 15 Thunder Storm (35 Charges)",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(42-49) to (64-75)"
        }
      ],
      EquipmentType: 1,
      Name: "Flanged Mace",
      RequiredStrength: 61,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 35,
      Type: {
        Name: "Mace",
        Index: "Mace",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Survival Instinct",
    Index: "Survival Instinct",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 45,
    Code: "9s8",
    Properties: [
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 4
      },
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+190-240% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "Adds 50-80 to Cold Damage",
        Index: 6
      },
      {
        PropertyString: "Magic Resist +20-25%",
        Index: 2
      },
      {
        PropertyString: "+15-25 Damage Reduced by 15-25%%",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(52-61) to (130-153)"
        }
      ],
      EquipmentType: 1,
      Name: "Battle Scythe",
      RequiredStrength: 82,
      RequiredDexterity: 82,
      Durability: 250,
      ItemLevel: 40,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Arctic Frost",
    Index: "Arctic Frost",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 45,
    Code: "8ss",
    Properties: [
      {
        PropertyString: "+4 to Cold Skills (Sorceress only)",
        Index: 0
      },
      {
        PropertyString: "25 to Cold Skill Damage",
        Index: 1
      },
      {
        PropertyString: "35 to Enemy Cold Resistance",
        Index: 3
      },
      {
        PropertyString: "Fire Resist +80-100%",
        Index: 4
      },
      {
        PropertyString: "+25 Cold Absorb",
        Index: 2
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "6 to 21"
        }
      ],
      EquipmentType: 1,
      Name: "Jo Staff",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 30,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Wand",
    Name: "Wand of Fireballs",
    Index: "Wand of Fireballs",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 45,
    Code: "9bw",
    Properties: [
      {
        PropertyString: "100% Chance to cast level 15 fire ball when struck",
        Index: 0
      },
      {
        PropertyString: "1 to All Skills",
        Index: 4
      },
      {
        PropertyString: "+25 Faster Cast Rate",
        Index: 5
      },
      {
        PropertyString: "+66-95 to Unsummon",
        Index: 2
      },
      {
        PropertyString: "+66-95 to Unsummon",
        Index: 3
      },
      {
        PropertyString: "20 to Strength",
        Index: 1
      },
      {
        PropertyString: "Socketed (1)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "10 to 22"
        }
      ],
      EquipmentType: 1,
      Name: "Tomb Wand",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 43,
      Type: {
        Name: "Wand",
        Index: "Wand",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Pride's Paradox",
    Index: "Pride's Paradox",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 45,
    Code: "8s8",
    Properties: [
      {
        PropertyString: "+200-255% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+30 Piercing Attack",
        Index: 4
      },
      {
        PropertyString: "+1 to Minimum Cold Damage",
        Index: 2
      },
      {
        PropertyString: "Freezes target +3",
        Index: 3
      },
      {
        PropertyString: "+2 Knockback",
        Index: 1
      },
      {
        PropertyString: "Socketed (2-3)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(39-46) to (90-106)"
        }
      ],
      EquipmentType: 1,
      Name: "Short Siege Bow",
      RequiredStrength: 65,
      RequiredDexterity: 80,
      Durability: 0,
      ItemLevel: 43,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Bowel Twister",
    Index: "Bowel Twister",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 45,
    Code: "9ts",
    Properties: [
      {
        PropertyString: "Level 9-15 Holy Shock Aura When Equipped",
        Index: 3
      },
      {
        PropertyString: "+180-240% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 6
      },
      {
        PropertyString: "Lightning Resist +65%",
        Index: 4
      },
      {
        PropertyString: "+35 Lightning Absorb",
        Index: 5
      },
      {
        PropertyString: "+100 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(36-44) to (98-119)"
        },
        {
          Type: 2,
          DamageString: "(50-61) to (151-183)"
        }
      ],
      EquipmentType: 1,
      Name: "Harpoon",
      RequiredStrength: 25,
      RequiredDexterity: 118,
      Durability: 250,
      ItemLevel: 51,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Throwing Knife",
    Name: "Pain Harvester",
    Index: "Pain Harvester",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 45,
    Code: "9bk",
    Properties: [
      {
        PropertyString: "+2",
        Index: 5
      },
      {
        PropertyString: "+160-200% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "50 bonus to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "20 to Strength",
        Index: 4
      },
      {
        PropertyString: "20 to Dexterity",
        Index: 3
      },
      {
        PropertyString: "+1 Cannot Be Frozen",
        Index: 6
      },
      {
        PropertyString: "+75 Increased Stack Size",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(15-18) to (62-72)"
        },
        {
          Type: 2,
          DamageString: "(36-42) to (70-81)"
        }
      ],
      EquipmentType: 1,
      Name: "War Dart",
      RequiredStrength: 25,
      RequiredDexterity: 97,
      Durability: 250,
      ItemLevel: 39,
      Type: {
        Name: "Throwing Knife",
        Index: "Throwing Knife",
        Class: ""
      },
      RequiredClass: "Knife"
    }
  },
  {
    Type: "Shield",
    Name: "Lichward",
    Index: "Lichward",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 45,
    Code: "xsh",
    Properties: [
      {
        PropertyString: "Level 1-4 Sanctuary Aura When Equipped",
        Index: 6
      },
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "15-30% Increased Chance of Blocking",
        Index: 4
      },
      {
        PropertyString: "15 to Enemy Poison Resistance",
        Index: 7
      },
      {
        PropertyString: "+66-95 to Throw",
        Index: 2
      },
      {
        PropertyString: "+66-95 to Throw",
        Index: 3
      },
      {
        PropertyString: "+80-130 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+35 to Mana",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "14 to 20",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "91-117",
      EquipmentType: 0,
      Name: "Grim Shield",
      RequiredStrength: 58,
      RequiredDexterity: 0,
      Durability: 70,
      ItemLevel: 48,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Boots",
    Name: "Asheara's Slippers",
    Index: "Asheara's Slippers",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 45,
    Code: "xvb",
    Properties: [
      {
        PropertyString: "+25 Faster Run/Walk",
        Index: 4
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 5
      },
      {
        PropertyString: "10-15 to Cold Skill Damage",
        Index: 6
      },
      {
        PropertyString: "+110-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+25-40 Defense",
        Index: 1
      },
      {
        PropertyString: "Cold Resist +30-40%",
        Index: 3
      },
      {
        PropertyString: "Poison Resist +25-35%",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "28 to 50",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "96-125",
      EquipmentType: 0,
      Name: "Sharkskin Boots",
      RequiredStrength: 47,
      RequiredDexterity: 0,
      Durability: 14,
      ItemLevel: 39,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Belt",
    Name: "Meshif's Coil",
    Index: "Meshif's Coil",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 45,
    Code: "zmb",
    Properties: [
      {
        PropertyString: "4% Chance to cast level 14 iron maiden when struck",
        Index: 3
      },
      {
        PropertyString: "+30 Faster Run/Walk",
        Index: 1
      },
      {
        PropertyString: "+15 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "+130-160 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "Regenerate Mana 30%",
        Index: 4
      },
      {
        PropertyString: "+10 to Maximum Cold Resist",
        Index: 5
      },
      {
        PropertyString: "Cold Resist +%",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "82-93",
      EquipmentType: 0,
      Name: "Mesh Belt",
      RequiredStrength: 58,
      RequiredDexterity: 0,
      Durability: 16,
      ItemLevel: 43,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Auric Shields",
    Name: "Defender of Innocence",
    Index: "Defender of Innocence",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 45,
    Code: "pa8",
    Properties: [
      {
        PropertyString: "17% Chance to cast level 1 frozen armor when struck",
        Index: 5
      },
      {
        PropertyString: "Level 5-8 Defiance Aura When Equipped",
        Index: 4
      },
      {
        PropertyString: "+35 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "25-30% Increased Chance of Blocking",
        Index: 2
      },
      {
        PropertyString: "+120-160 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+35-50 Defense",
        Index: 1
      },
      {
        PropertyString: "Magic Resist +15%",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "18 to 24",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "321-388",
      EquipmentType: 0,
      Name: "Protector Shield",
      RequiredStrength: 69,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 46,
      Type: {
        Name: "Auric Shields",
        Index: "Auric Shields",
        Class: "pal"
      },
      RequiredClass: "Paladin"
    }
  },
  {
    Type: "Hand to Hand 2",
    Name: "Sin Sister",
    Index: "Sin Sister",
    Enabled: true,
    ItemLevel: 45,
    RequiredLevel: 45,
    Code: "7tw",
    Properties: [
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+200-300% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 3
      },
      {
        PropertyString: "Socketed (3)",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(72-96) to (132-176)"
        }
      ],
      EquipmentType: 1,
      Name: "Runic Talons",
      RequiredStrength: 115,
      RequiredDexterity: 115,
      Durability: 250,
      ItemLevel: 81,
      Type: {
        Name: "Hand to Hand 2",
        Index: "Hand to Hand 2",
        Class: "ass"
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Amulet",
    Name: "Luck Sigil",
    Index: "Luck Sigil",
    Enabled: true,
    ItemLevel: 45,
    RequiredLevel: 45,
    Code: "amu",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "10 bonus to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "+ extra gold from monsters",
        Index: 2
      },
      {
        PropertyString: "+ better chance of getting magic item",
        Index: 1
      },
      {
        PropertyString: "Fade",
        Index: 4
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Amulet",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Amulet",
        Index: "Amulet",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Small Charm",
    Name: "t8 Splash Charm",
    Index: "t8 Splash Charm",
    Enabled: false,
    ItemLevel: 1,
    RequiredLevel: 45,
    Code: "cm4",
    Properties: [
      {
        PropertyString: "50 Percent Melee Splash Damage",
        Index: 0
      },
      {
        PropertyString: "-10 to -22 Enhanced Damage",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Splash Charm",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Small Charm",
        Index: "Small Charm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Todesfaelle Flamme",
    Index: "Todesfaelle Flamme",
    Enabled: true,
    ItemLevel: 54,
    RequiredLevel: 46,
    Code: "9fb",
    Properties: [
      {
        PropertyString: "10% Chance to cast level 6 fire ball on attack",
        Index: 3
      },
      {
        PropertyString: "+120-160% Enhanced Damage",
        Index: 4
      },
      {
        PropertyString: "Adds 50-200 to Fire Damage",
        Index: 0
      },
      {
        PropertyString: "Fire Resist +40%",
        Index: 1
      },
      {
        PropertyString: "+10 Fire Absorb",
        Index: 2
      },
      {
        PropertyString: "Level 10 Enchant (45 Charges)",
        Index: 5
      },
      {
        PropertyString: "Level 10 Fire Wall (20 Charges)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(41-49) to (77-91)"
        },
        {
          Type: 1,
          DamageString: "(63-75) to (118-140)"
        }
      ],
      EquipmentType: 1,
      Name: "Zweihander",
      RequiredStrength: 125,
      RequiredDexterity: 94,
      Durability: 250,
      ItemLevel: 49,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Goldstrike Arch",
    Index: "Godstrike Arch",
    Enabled: true,
    ItemLevel: 54,
    RequiredLevel: 46,
    Code: "8lw",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 7 fist of the heavens on striking",
        Index: 4
      },
      {
        PropertyString: "+50 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+200-250% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "100-150 bonus to Attack Rating",
        Index: 1
      },
      {
        PropertyString: "+100-200% Damage to Demons Damage to Demons",
        Index: 3
      },
      {
        PropertyString: "+100-200% Damage to Undead Damage to Undead",
        Index: 2
      },
      {
        PropertyString: "+12 Replenish Life",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(30-35) to (150-175)"
        }
      ],
      EquipmentType: 1,
      Name: "Gothic Bow",
      RequiredStrength: 95,
      RequiredDexterity: 118,
      Durability: 0,
      ItemLevel: 52,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Sudden Epiphany",
    Index: "Sudden Epiphany",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 46,
    Code: "9cm",
    Properties: [
      {
        PropertyString: "+1-3 to Warcries (Barbarian only)",
        Index: 6
      },
      {
        PropertyString: "+2",
        Index: 5
      },
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+195-245% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 6-8 Mana stolen per hit",
        Index: 4
      },
      {
        PropertyString: "Adds 6-8 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "25 to Energy",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(38-44) to (88-103)"
        },
        {
          Type: 1,
          DamageString: "(76-89) to (179-210)"
        }
      ],
      EquipmentType: 1,
      Name: "Dacian Falx",
      RequiredStrength: 91,
      RequiredDexterity: 20,
      Durability: 250,
      ItemLevel: 42,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Club",
    Name: "Eater of Souls",
    Index: "Eater of Souls",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 46,
    Code: "9sp",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+200-265% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "15-25% Increased Chance of Blocking",
        Index: 7
      },
      {
        PropertyString: "Adds 20-45 to Damage",
        Index: 5
      },
      {
        PropertyString: "Adds 5-9 Life stolen per hit",
        Index: 4
      },
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 2
      },
      {
        PropertyString: "+3-5 to Sword Mastery",
        Index: 3
      },
      {
        PropertyString: "Socketed (1)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(59-67) to (120-136)"
        }
      ],
      EquipmentType: 1,
      Name: "Barbed Club",
      RequiredStrength: 30,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 32,
      Type: {
        Name: "Club",
        Index: "Club",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Hammer",
    Name: "Konnan's Maul",
    Index: "Konnan's Maul",
    Enabled: true,
    ItemLevel: 40,
    RequiredLevel: 46,
    Code: "gma",
    Properties: [
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "Adds 75-300 to Damage",
        Index: 0
      },
      {
        PropertyString: "Socketed (5)",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "113 to 358"
        }
      ],
      EquipmentType: 1,
      Name: "Great Maul",
      RequiredStrength: 99,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 32,
      Type: {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Knife",
    Name: "Basalisk's Touch",
    Index: "Basalisk's Touch",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 46,
    Code: "9kr",
    Properties: [
      {
        PropertyString: "+180-230% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 6
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 5
      },
      {
        PropertyString: "+657 to Minimum Poison Damage",
        Index: 2
      },
      {
        PropertyString: "+5-7 to Dim Vision",
        Index: 3
      },
      {
        PropertyString: "+25 Slows target by",
        Index: 1
      },
      {
        PropertyString: "+100 Defense",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(42-49) to (86-102)"
        }
      ],
      EquipmentType: 1,
      Name: "Cinquedeas",
      RequiredStrength: 25,
      RequiredDexterity: 88,
      Durability: 250,
      ItemLevel: 42,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Flametongue",
    Index: "Flametongue",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 46,
    Code: "9tr",
    Properties: [
      {
        PropertyString: "+120-160% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 50-100 to Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 200-300 to Fire Damage",
        Index: 5
      },
      {
        PropertyString: "15-20 to Fire Skill Damage",
        Index: 3
      },
      {
        PropertyString: "15-20 to Enemy Fire Resistance",
        Index: 4
      },
      {
        PropertyString: "+5 to Inferno",
        Index: 2
      },
      {
        PropertyString: "Fire Resist +65%",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(91-99) to (181-196)"
        }
      ],
      EquipmentType: 1,
      Name: "Fuscina",
      RequiredStrength: 77,
      RequiredDexterity: 25,
      Durability: 310,
      ItemLevel: 36,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Sadira",
    Index: "Sadira",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 46,
    Code: "8hb",
    Properties: [
      {
        PropertyString: "+80-125% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 25-100 to Lightning Damage",
        Index: 2
      },
      {
        PropertyString: "Regenerate Mana 75%",
        Index: 5
      },
      {
        PropertyString: "All Resistances +20",
        Index: 3
      },
      {
        PropertyString: "+5 to Mana after each Kill",
        Index: 4
      },
      {
        PropertyString: "Socketed (1)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(39-43) to (89-99)"
        }
      ],
      EquipmentType: 1,
      Name: "Razor Bow",
      RequiredStrength: 25,
      RequiredDexterity: 62,
      Durability: 0,
      ItemLevel: 33,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Wraithwatch",
    Index: "Wraithwatch",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 46,
    Code: "xhl",
    Properties: [
      {
        PropertyString: "+1-2",
        Index: 1
      },
      {
        PropertyString: "+25 Faster Run/Walk",
        Index: 4
      },
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "+251-280 to Throw",
        Index: 2
      },
      {
        PropertyString: "+251-280 to Throw",
        Index: 3
      },
      {
        PropertyString: "+80-120 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "Socketed (2)",
        Index: 6
      },
      {
        PropertyString: "Requirements -30%",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "136-167",
      EquipmentType: 0,
      Name: "Basinet",
      RequiredStrength: 82,
      RequiredDexterity: 0,
      Durability: 30,
      ItemLevel: 45,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Merc Equip",
    Name: "Ghoulslayer",
    Index: "Ghoulslayer",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 46,
    Code: "xh9",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 2
      },
      {
        PropertyString: "+100% Damage to Undead Damage to Undead",
        Index: 3
      },
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 1
      },
      {
        PropertyString: "+140-165 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "15-25 to Strength",
        Index: 4
      },
      {
        PropertyString: "15-25 to Vitality",
        Index: 5
      },
      {
        PropertyString: "+5-10 Damage Reduced by 5-10%%",
        Index: 6
      },
      {
        PropertyString: "Socketed (1)",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "146-161",
      EquipmentType: 0,
      Name: "Grim Helm",
      RequiredStrength: 58,
      RequiredDexterity: 0,
      Durability: 40,
      ItemLevel: 50,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Shield",
    Name: "Raptar Fang",
    Index: "Raptarfang",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 46,
    Code: "xpk",
    Properties: [
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 1
      },
      {
        PropertyString: "20-40% Increased Chance of Blocking",
        Index: 2
      },
      {
        PropertyString: "+15-30 to Maximum Damage",
        Index: 4
      },
      {
        PropertyString: "+ Defense",
        Index: 0
      },
      {
        PropertyString: "+15-20 Damage Reduced by",
        Index: 5
      },
      {
        PropertyString: "+100 extra gold from monsters",
        Index: 3
      },
      {
        PropertyString: "Socketed (1)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageString: "18 to 35",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "58",
      EquipmentType: 0,
      Name: "Barbed Shield",
      RequiredStrength: 65,
      RequiredDexterity: 0,
      Durability: 55,
      ItemLevel: 42,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Boots",
    Name: "Grimleaper",
    Index: "Grimleaper",
    Enabled: true,
    ItemLevel: 46,
    RequiredLevel: 46,
    Code: "hbt",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 8 bone armor when struck",
        Index: 5
      },
      {
        PropertyString: "Level 1-6 Prayer Aura When Equipped",
        Index: 4
      },
      {
        PropertyString: "+20-30% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "+1-2 to Leap Attack (Barbarian Only)",
        Index: 2
      },
      {
        PropertyString: "+125-150 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+5 Increase Maximum Life",
        Index: 7
      },
      {
        PropertyString: "Poison Resist +25-35%",
        Index: 6
      },
      {
        PropertyString: "+2-3 Life after each Kill",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "10 to 20",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "29-32",
      EquipmentType: 0,
      Name: "Greaves",
      RequiredStrength: 70,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 27,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Belt",
    Name: "Fortune's Fool",
    Index: "Fortune's Fool",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 46,
    Code: "ztb",
    Properties: [
      {
        PropertyString: "+1 to Find Item",
        Index: 6
      },
      {
        PropertyString: "+75-100 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+50-75 Defense",
        Index: 1
      },
      {
        PropertyString: "-5 to Vitality",
        Index: 5
      },
      {
        PropertyString: "-5 to Energy",
        Index: 4
      },
      {
        PropertyString: "+ extra gold from monsters",
        Index: 2
      },
      {
        PropertyString: "+ better chance of getting magic item",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "116-151",
      EquipmentType: 0,
      Name: "Battle Belt",
      RequiredStrength: 88,
      RequiredDexterity: 0,
      Durability: 18,
      ItemLevel: 49,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Auric Shields",
    Name: "Wisdom of Thoth",
    Index: "Wisdom of Thoth",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 46,
    Code: "paa",
    Properties: [
      {
        PropertyString: "2 to All Skills",
        Index: 1
      },
      {
        PropertyString: "+1-3 to Offensive Auras (Paladin only)",
        Index: 2
      },
      {
        PropertyString: "+100-150 Defense",
        Index: 0
      },
      {
        PropertyString: "25 to Energy",
        Index: 3
      },
      {
        PropertyString: "All Resistances +30-60",
        Index: 5
      },
      {
        PropertyString: "3-5 to Experience Gained",
        Index: 4
      },
      {
        PropertyString: "Socketed (2)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "24 to 32",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "256-306",
      EquipmentType: 0,
      Name: "Royal Shield",
      RequiredStrength: 114,
      RequiredDexterity: 0,
      Durability: 60,
      ItemLevel: 55,
      Type: {
        Name: "Auric Shields",
        Index: "Auric Shields",
        Class: "pal"
      },
      RequiredClass: "Paladin"
    }
  },
  {
    Type: "Primal Helm",
    Name: "Hanabal's Crown",
    Index: "Hanabal's Crown",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 46,
    Code: "ba9",
    Properties: [
      {
        PropertyString: "2 to All Skills",
        Index: 2
      },
      {
        PropertyString: "+1 to Combat Skills (Barbarian only)",
        Index: 3
      },
      {
        PropertyString: "+126-155 to Unsummon",
        Index: 6
      },
      {
        PropertyString: "+126-155 to Throw",
        Index: 7
      },
      {
        PropertyString: "+150-200 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+10 Increase Maximum Life",
        Index: 5
      },
      {
        PropertyString: "+15 Reduces all Vendor Prices",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "215-258",
      EquipmentType: 0,
      Name: "Savage Helmet",
      RequiredStrength: 103,
      RequiredDexterity: 0,
      Durability: 125,
      ItemLevel: 49,
      Type: {
        Name: "Primal Helm",
        Index: "Primal Helm",
        Class: "bar"
      },
      RequiredClass: "Barbarian"
    }
  },
  {
    Type: "Pelt",
    Name: "Phoenix Fall",
    Index: "Phoenix Fall",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 46,
    Code: "dr9",
    Properties: [
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "Adds 35-100 to Fire Damage",
        Index: 1
      },
      {
        PropertyString: "10-15 to Fire Skill Damage",
        Index: 3
      },
      {
        PropertyString: "+160-190 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "All Resistances +25",
        Index: 4
      },
      {
        PropertyString: "1-3 to Light Radius",
        Index: 5
      },
      {
        PropertyString: "Socketed (1)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "153-171",
      EquipmentType: 0,
      Name: "Sacred Feathers",
      RequiredStrength: 62,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 50,
      Type: {
        Name: "Pelt",
        Index: "Pelt",
        Class: "dru"
      },
      RequiredClass: "Druid"
    }
  },
  {
    Type: "Hand to Hand 2",
    Name: "Chi Strike",
    Index: "Chi Strike",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 46,
    Code: "9cs",
    Properties: [
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+205-255% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+33 Deadly Strike",
        Index: 3
      },
      {
        PropertyString: "+5-7 to Psychic Hammer (Assassin Only)",
        Index: 1
      },
      {
        PropertyString: "15-25 to Energy",
        Index: 5
      },
      {
        PropertyString: "All Resistances +20-40",
        Index: 4
      },
      {
        PropertyString: "+10-15 Damage Reduced by",
        Index: 6
      },
      {
        PropertyString: "+8 Life after each Kill",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(48-56) to (112-131)"
        }
      ],
      EquipmentType: 1,
      Name: "Hand Scythe",
      RequiredStrength: 73,
      RequiredDexterity: 73,
      Durability: 250,
      ItemLevel: 41,
      Type: {
        Name: "Hand to Hand 2",
        Index: "Hand to Hand 2",
        Class: "ass"
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Hellmouth",
    Index: "Hellmouth",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 47,
    Code: "xhg",
    Properties: [
      {
        PropertyString: "2% Chance to cast level 4 meteor on striking",
        Index: 4
      },
      {
        PropertyString: "4% Chance to cast level 12 firestorm on striking",
        Index: 5
      },
      {
        PropertyString: "Adds 15-72 to Fire Damage",
        Index: 0
      },
      {
        PropertyString: "+150-200 Enhanced Defense",
        Index: 2
      },
      {
        PropertyString: "+15 Fire Absorb",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "110-132",
      EquipmentType: 0,
      Name: "War Gaunlets",
      RequiredStrength: 110,
      RequiredDexterity: 0,
      Durability: 39,
      ItemLevel: 54,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "Gore Rider",
    Index: "Gorerider",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 47,
    Code: "xhb",
    Properties: [
      {
        PropertyString: "+30 Faster Run/Walk",
        Index: 2
      },
      {
        PropertyString: "+15 Chance of Crushing Blow",
        Index: 3
      },
      {
        PropertyString: "+15 Deadly Strike",
        Index: 1
      },
      {
        PropertyString: "10% Chance of Open Wounds",
        Index: 4
      },
      {
        PropertyString: "+160-200 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "Requirements -25%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "39 to 80",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "114-132",
      EquipmentType: 0,
      Name: "War Boots",
      RequiredStrength: 125,
      RequiredDexterity: 0,
      Durability: 34,
      ItemLevel: 54,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Belt",
    Name: "Thundergod's Vigor",
    Index: "Thudergod's Vigor",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 47,
    Code: "zhb",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 7 fist of the heavens when struck",
        Index: 0
      },
      {
        PropertyString: "Adds 1-50 to Lightning Damage",
        Index: 1
      },
      {
        PropertyString: "+3 to Lightning Strike (Amazon Only)",
        Index: 7
      },
      {
        PropertyString: "+3 to Lightning Fury (Amazon Only)",
        Index: 8
      },
      {
        PropertyString: "+160-200 Enhanced Defense",
        Index: 4
      },
      {
        PropertyString: "20 to Strength",
        Index: 6
      },
      {
        PropertyString: "20 to Vitality",
        Index: 5
      },
      {
        PropertyString: "+10 to Maximum Lightning Resist",
        Index: 2
      },
      {
        PropertyString: "+20 Lightning Absorb",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "109-126",
      EquipmentType: 0,
      Name: "War Belt",
      RequiredStrength: 110,
      RequiredDexterity: 0,
      Durability: 24,
      ItemLevel: 54,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Amulet",
    Name: "Saracen's Chance",
    Index: "Saracen's Chance",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 47,
    Code: "amu",
    Properties: [
      {
        PropertyString: "10% Chance to cast level 2 iron maiden when struck",
        Index: 1
      },
      {
        PropertyString: "12 to Strength",
        Index: 2
      },
      {
        PropertyString: "12 to Dexterity",
        Index: 3
      },
      {
        PropertyString: "12 to Vitality",
        Index: 5
      },
      {
        PropertyString: "12 to Energy",
        Index: 4
      },
      {
        PropertyString: "All Resistances +15-25",
        Index: 0
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Amulet",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Amulet",
        Index: "Amulet",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Axe",
    Name: "Ravid's Bite",
    Index: "Ravid's Bite",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 47,
    Code: "9bt",
    Properties: [
      {
        PropertyString: "12% Chance to cast level 2 rabies on striking",
        Index: 1
      },
      {
        PropertyString: "1 to All Skills",
        Index: 7
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+200-250% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+10-20 Slows target by",
        Index: 5
      },
      {
        PropertyString: "20 to Strength",
        Index: 3
      },
      {
        PropertyString: "+15 Increase Maximum Life",
        Index: 4
      },
      {
        PropertyString: "Socketed (2)",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(72-84) to (231-269)"
        }
      ],
      EquipmentType: 1,
      Name: "Tabar",
      RequiredStrength: 101,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 42,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Pseudodragon",
    Index: "Pseudodragon",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 47,
    Code: "9cr",
    Properties: [
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 3
      },
      {
        PropertyString: "+120-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 30-60 to Damage",
        Index: 1
      },
      {
        PropertyString: "20 to Vitality",
        Index: 4
      },
      {
        PropertyString: "20 to Energy",
        Index: 5
      },
      {
        PropertyString: "All Resistances +20-30",
        Index: 6
      },
      {
        PropertyString: "+10-15 Damage Reduced by 10-15%%",
        Index: 7
      },
      {
        PropertyString: "Level 12 Vengeance (250 Charges)",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(58-62) to (137-147)"
        }
      ],
      EquipmentType: 1,
      Name: "Dimensional Blade",
      RequiredStrength: 85,
      RequiredDexterity: 60,
      Durability: 250,
      ItemLevel: 37,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Bane of All Gods",
    Index: "Bane of All Gods",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 47,
    Code: "9ls",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 2
      },
      {
        PropertyString: "+215-250% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 15-30 to Damage",
        Index: 1
      },
      {
        PropertyString: "25 bonus to Attack Rating",
        Index: 6
      },
      {
        PropertyString: "+100% Damage to Demons Damage to Demons",
        Index: 5
      },
      {
        PropertyString: "10-20 to Strength",
        Index: 3
      },
      {
        PropertyString: "3-5 to Experience Gained",
        Index: 4
      },
      {
        PropertyString: "Socketed (1-3)",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(46-50) to (162-177)"
        }
      ],
      EquipmentType: 1,
      Name: "Rune Sword",
      RequiredStrength: 103,
      RequiredDexterity: 79,
      Durability: 250,
      ItemLevel: 44,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Knife",
    Name: "Cyan Bloodbane",
    Index: "Cyan Bloodbane",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 47,
    Code: "9dg",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 4
      },
      {
        PropertyString: "+25-50 to Minimum Damage",
        Index: 0
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "+10 Enhanced Defense",
        Index: 6
      },
      {
        PropertyString: "+15 Life after each Kill",
        Index: 2
      },
      {
        PropertyString: "+15 to Mana after each Kill",
        Index: 3
      },
      {
        PropertyString: "Level 15 Life Tap (17 Charges)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "31 to 68"
        }
      ],
      EquipmentType: 1,
      Name: "Poignard",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 31,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Spear",
    Name: "Dreams of Empire",
    Index: "Dreams of Empire",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 47,
    Code: "9st",
    Properties: [
      {
        PropertyString: "+205-255% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+40 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "+25 Chance of Crushing Blow",
        Index: 1
      },
      {
        PropertyString: "+1-3 to Valkyrie",
        Index: 5
      },
      {
        PropertyString: "+5-15 Increase Maximum Life",
        Index: 4
      },
      {
        PropertyString: "10 to Experience Gained",
        Index: 3
      },
      {
        PropertyString: "+ extra gold from monsters",
        Index: 7
      },
      {
        PropertyString: "+40-50 better chance of getting magic item",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(88-102) to (179-209)"
        }
      ],
      EquipmentType: 1,
      Name: "Yari",
      RequiredStrength: 101,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 44,
      Type: {
        Name: "Spear",
        Index: "Spear",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Polearm",
    Name: "Griefspawn Touch",
    Index: "Griefspawn Touch",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 47,
    Code: "9vo",
    Properties: [
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "+100-150% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 50-125 to Damage",
        Index: 1
      },
      {
        PropertyString: "Adds 6-8 Life stolen per hit",
        Index: 4
      },
      {
        PropertyString: "103%",
        Index: 3
      },
      {
        PropertyString: "Regenerate Mana 25%",
        Index: 5
      },
      {
        PropertyString: "Lightning Resist +35%",
        Index: 6
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(78-85) to (231-257)"
        }
      ],
      EquipmentType: 1,
      Name: "Bill",
      RequiredStrength: 95,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 37,
      Type: {
        Name: "Polearm",
        Index: "Polearm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Staff",
    Name: "Grace of Isis",
    Index: "Grace of Isis",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 47,
    Code: "8bs",
    Properties: [
      {
        PropertyString: "+1-2",
        Index: 1
      },
      {
        PropertyString: "+40 Increased Attack Speed",
        Index: 6
      },
      {
        PropertyString: "+200-265% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 30-60 to Damage",
        Index: 5
      },
      {
        PropertyString: "+1 Ignore Target's Defense",
        Index: 7
      },
      {
        PropertyString: "+20 Chance of Crushing Blow",
        Index: 8
      },
      {
        PropertyString: "+221-250 to Unsummon",
        Index: 2
      },
      {
        PropertyString: "+221-250 to Throw",
        Index: 3
      },
      {
        PropertyString: "+221-250 to Unsummon",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(72-81) to (162-184)"
        }
      ],
      EquipmentType: 1,
      Name: "Gothic Staff",
      RequiredStrength: 25,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 42,
      Type: {
        Name: "Staff",
        Index: "Staff",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Senmet's Boltcaster",
    Index: "Senmet's Boltcaster",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 47,
    Code: "8hx",
    Properties: [
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+200-250% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 5
      },
      {
        PropertyString: "+1 Fires Magic Arrows",
        Index: 6
      },
      {
        PropertyString: "+15 Life after each Kill",
        Index: 2
      },
      {
        PropertyString: "5 to Experience Gained",
        Index: 3
      },
      {
        PropertyString: "Level 10 Battle Orders (10 Charges)",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(99-115) to (165-192)"
        }
      ],
      EquipmentType: 1,
      Name: "Ballista",
      RequiredStrength: 110,
      RequiredDexterity: 80,
      Durability: 0,
      ItemLevel: 47,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Javelin",
    Name: "Cursed One",
    Index: "Cursed One",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 47,
    Code: "9s9",
    Properties: [
      {
        PropertyString: "12% Chance to cast level 7 confuse when struck",
        Index: 3
      },
      {
        PropertyString: "+200-250% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 5
      },
      {
        PropertyString: "15-25 to Strength",
        Index: 6
      },
      {
        PropertyString: "-1 Drain Life",
        Index: 4
      },
      {
        PropertyString: "+70 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(24-28) to (96-112)"
        },
        {
          Type: 2,
          DamageString: "(81-94) to (150-175)"
        }
      ],
      EquipmentType: 1,
      Name: "Simbilan",
      RequiredStrength: 80,
      RequiredDexterity: 80,
      Durability: 250,
      ItemLevel: 40,
      Type: {
        Name: "Javelin",
        Index: "Javelin",
        Class: ""
      },
      RequiredClass: "Spear"
    }
  },
  {
    Type: "Throwing Axe",
    Name: "Brainraver",
    Index: "Brainraver",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 47,
    Code: "9b8",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 4
      },
      {
        PropertyString: "+40 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+165-225% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Hit blinds target +2",
        Index: 5
      },
      {
        PropertyString: "+50 Slows target by",
        Index: 6
      },
      {
        PropertyString: "+45 Increased Stack Size",
        Index: 2
      },
      {
        PropertyString: "+ Replenishes quantity",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(34-42) to (71-87)"
        },
        {
          Type: 2,
          DamageString: "(63-78) to (90-110)"
        }
      ],
      EquipmentType: 1,
      Name: "Hurlbat",
      RequiredStrength: 25,
      RequiredDexterity: 106,
      Durability: 250,
      ItemLevel: 41,
      Type: {
        Name: "Throwing Axe",
        Index: "Throwing Axe",
        Class: ""
      },
      RequiredClass: "Axe"
    }
  },
  {
    Type: "Armor",
    Name: "The Strongest Link",
    Index: "Weakest Link",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 47,
    Code: "xcl",
    Properties: [
      {
        PropertyString: "1 to All Skills",
        Index: 6
      },
      {
        PropertyString: "+20-30% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "Adds 6-8 Mana stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+140-190 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "8% Damage Taken Goes To Mana",
        Index: 5
      },
      {
        PropertyString: "Repairs 0.15 durability per second",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "424-513",
      EquipmentType: 0,
      Name: "Tigulated Mail",
      RequiredStrength: 86,
      RequiredDexterity: 0,
      Durability: 36,
      ItemLevel: 43,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Tesla's Cuirass",
    Index: "Tesla's Cuirass",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 47,
    Code: "xrs",
    Properties: [
      {
        PropertyString: "+15 Faster Run/Walk",
        Index: 3
      },
      {
        PropertyString: "+ to Maximum Damage",
        Index: 1
      },
      {
        PropertyString: "-10-15% Target Defense",
        Index: 2
      },
      {
        PropertyString: "+4 Life stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+160-210 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "Socketed (2)",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "491-585",
      EquipmentType: 0,
      Name: "Cuirass",
      RequiredStrength: 65,
      RequiredDexterity: 0,
      Durability: 50,
      ItemLevel: 47,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Voodoo Heads",
    Name: "Vow of Revenge",
    Index: "Vow of Revenge",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 47,
    Code: "ne9",
    Properties: [
      {
        PropertyString: "100% Chance to cast level 51 chain lightning when you Die",
        Index: 4
      },
      {
        PropertyString: "+ to Poison and Bone Skills (Necromancer only)",
        Index: 1
      },
      {
        PropertyString: "+2",
        Index: 2
      },
      {
        PropertyString: "25-50% Increased Chance of Blocking",
        Index: 3
      },
      {
        PropertyString: "+120-170 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "20 to Dexterity",
        Index: 5
      },
      {
        PropertyString: "Lightning Resist +50%",
        Index: 7
      },
      {
        PropertyString: "Fire Resist +50%",
        Index: 6
      },
      {
        PropertyString: "+50-95 Poison Length Reduced by",
        Index: 8
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "112-137",
      EquipmentType: 0,
      Name: "Cantor Trophy",
      RequiredStrength: 50,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 49,
      Type: {
        Name: "Voodoo Heads",
        Index: "Voodoo Heads",
        Class: "nec"
      },
      RequiredClass: "Necromancer"
    }
  },
  {
    Type: "Axe",
    Name: "Guardian Naga",
    Index: "Guardian Naga",
    Enabled: true,
    ItemLevel: 56,
    RequiredLevel: 48,
    Code: "9wa",
    Properties: [
      {
        PropertyString: "5% Chance to cast level 8 poison nova on striking",
        Index: 0
      },
      {
        PropertyString: "+150-180% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "+20 to Maximum Damage",
        Index: 5
      },
      {
        PropertyString: "+256 to Minimum Poison Damage",
        Index: 4
      },
      {
        PropertyString: "Poison Resist +30%",
        Index: 2
      },
      {
        PropertyString: "+15 Attacker Takes Damage of",
        Index: 1
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(40-44) to (132-146)"
        }
      ],
      EquipmentType: 1,
      Name: "Naga",
      RequiredStrength: 121,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 48,
      Type: {
        Name: "Axe",
        Index: "Axe",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Hammer",
    Name: "Bloodtree Stump",
    Index: "Bloodtree Stump",
    Enabled: true,
    ItemLevel: 56,
    RequiredLevel: 48,
    Code: "9m9",
    Properties: [
      {
        PropertyString: "+2 to Combat Skills (Barbarian only)",
        Index: 4
      },
      {
        PropertyString: "+180-220% Enhanced Damage",
        Index: 1
      },
      {
        PropertyString: "+50 Chance of Crushing Blow",
        Index: 0
      },
      {
        PropertyString: "+3 to Deadly Treasures (Barbarian Only)",
        Index: 5
      },
      {
        PropertyString: "25 to Strength",
        Index: 3
      },
      {
        PropertyString: "All Resistances +20",
        Index: 2
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(148-169) to (218-249)"
        }
      ],
      EquipmentType: 1,
      Name: "War Club",
      RequiredStrength: 124,
      RequiredDexterity: 0,
      Durability: 290,
      ItemLevel: 45,
      Type: {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Swordguard",
    Index: "Swordguard",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 48,
    Code: "9gd",
    Properties: [
      {
        PropertyString: "+170-180% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 7
      },
      {
        PropertyString: "20% Increased Chance of Blocking",
        Index: 8
      },
      {
        PropertyString: "+ Defense",
        Index: 1
      },
      {
        PropertyString: "+200 Defense vs. Melee",
        Index: 6
      },
      {
        PropertyString: "+100 Defense vs. Missile",
        Index: 3
      },
      {
        PropertyString: "All Resistances +10-20",
        Index: 2
      },
      {
        PropertyString: "30% Damage Taken Goes To Mana",
        Index: 4
      },
      {
        PropertyString: "Requirements -50%",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(64-67) to (108-112)"
        },
        {
          Type: 1,
          DamageString: "(126-131) to (216-224)"
        }
      ],
      EquipmentType: 1,
      Name: "Executioner Sword",
      RequiredStrength: 170,
      RequiredDexterity: 110,
      Durability: 0,
      ItemLevel: 54,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Armor",
    Name: "Toothrow",
    Index: "Toothrow",
    Enabled: true,
    ItemLevel: 56,
    RequiredLevel: 48,
    Code: "xld",
    Properties: [
      {
        PropertyString: "40% Chance of Open Wounds",
        Index: 3
      },
      {
        PropertyString: "+160-220 Enhanced Defense",
        Index: 5
      },
      {
        PropertyString: "+40-60 Defense",
        Index: 1
      },
      {
        PropertyString: "10 to Strength",
        Index: 2
      },
      {
        PropertyString: "Fire Resist +15%",
        Index: 4
      },
      {
        PropertyString: "+20-40 Attacker Takes Damage of",
        Index: 0
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "671-837",
      EquipmentType: 0,
      Name: "Sharktooth Armor",
      RequiredStrength: 103,
      RequiredDexterity: 0,
      Durability: 63,
      ItemLevel: 55,
      Type: {
        Name: "Armor",
        Index: "Armor",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Sword",
    Name: "Celestial Tiger",
    Index: "Celestial Tiger",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 48,
    Code: "92h",
    Properties: [
      {
        PropertyString: "+175-220% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+40 Faster Block Rate",
        Index: 5
      },
      {
        PropertyString: "25-35% Increased Chance of Blocking",
        Index: 4
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 1
      },
      {
        PropertyString: "20 to Strength",
        Index: 6
      },
      {
        PropertyString: "All Resistances +20-30",
        Index: 2
      },
      {
        PropertyString: "2-4 to Experience Gained",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 0,
          DamageString: "(47-50) to (121-133)"
        },
        {
          Type: 1,
          DamageString: "(74-82) to (160-178)"
        }
      ],
      EquipmentType: 1,
      Name: "Espandon",
      RequiredStrength: 73,
      RequiredDexterity: 61,
      Durability: 250,
      ItemLevel: 37,
      Type: {
        Name: "Sword",
        Index: "Sword",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Hammer",
    Name: "Readiness for War",
    Index: "Readiness for War",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 48,
    Code: "9m9",
    Properties: [
      {
        PropertyString: "2 to All Skills",
        Index: 3
      },
      {
        PropertyString: "+30 Faster Run/Walk",
        Index: 6
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+200-300% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+ Chance of Crushing Blow",
        Index: 4
      },
      {
        PropertyString: "+10 to Sword Mastery",
        Index: 2
      },
      {
        PropertyString: "3-5 to Experience Gained",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(159-212) to (234-312)"
        }
      ],
      EquipmentType: 1,
      Name: "War Club",
      RequiredStrength: 124,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 45,
      Type: {
        Name: "Hammer",
        Index: "Hammer",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Scepter",
    Name: "Dragon Mephit",
    Index: "Dragon Mephit",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 48,
    Code: "9qs",
    Properties: [
      {
        PropertyString: "+25 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+200-250% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+15 Faster Cast Rate",
        Index: 4
      },
      {
        PropertyString: "Adds 100-200 to Fire Damage",
        Index: 1
      },
      {
        PropertyString: "15 to Enemy Fire Resistance",
        Index: 2
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 6
      },
      {
        PropertyString: "+50 to Mana",
        Index: 5
      },
      {
        PropertyString: "+35 better chance of getting magic item",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(42-49) to (108-126)"
        }
      ],
      EquipmentType: 1,
      Name: "Holy Water Sprinkler",
      RequiredStrength: 76,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 40,
      Type: {
        Name: "Scepter",
        Index: "Scepter",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Knife",
    Name: "Falcon Talon",
    Index: "Falcon Talon",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 48,
    Code: "9bl",
    Properties: [
      {
        PropertyString: "+30 Faster Run/Walk",
        Index: 2
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+190-240% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+ Deadly Strike",
        Index: 5
      },
      {
        PropertyString: "+6 to Raven",
        Index: 4
      },
      {
        PropertyString: "40-70 to Life",
        Index: 6
      },
      {
        PropertyString: "Cold Resist +25-50%",
        Index: 7
      },
      {
        PropertyString: "Level 1 Teleport (250 Charges)",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(55-64) to (104-122)"
        }
      ],
      EquipmentType: 1,
      Name: "Stilleto",
      RequiredStrength: 47,
      RequiredDexterity: 97,
      Durability: 250,
      ItemLevel: 46,
      Type: {
        Name: "Knife",
        Index: "Knife",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Bow",
    Name: "Crimson Crusade",
    Index: "Crimson Crusade",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 48,
    Code: "8l8",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+210-265% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "Adds 20-40 to Damage",
        Index: 7
      },
      {
        PropertyString: "100% Chance of Open Wounds",
        Index: 6
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 5
      },
      {
        PropertyString: "45 to Life",
        Index: 2
      },
      {
        PropertyString: "+65 to Mana",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(51-56) to (170-193)"
        }
      ],
      EquipmentType: 1,
      Name: "Large Siege Bow",
      RequiredStrength: 80,
      RequiredDexterity: 95,
      Durability: 0,
      ItemLevel: 46,
      Type: {
        Name: "Bow",
        Index: "Bow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Kyuss' Crossbow",
    Index: "Kyuss' Crossbow",
    Enabled: true,
    ItemLevel: 55,
    RequiredLevel: 48,
    Code: "8lx",
    Properties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 1
      },
      {
        PropertyString: "+175-220% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+1 to Freezing Arrow",
        Index: 2
      },
      {
        PropertyString: "Regenerate Mana 60%",
        Index: 4
      },
      {
        PropertyString: "+10-15 Life after each Kill",
        Index: 3
      },
      {
        PropertyString: "+75 extra gold from monsters",
        Index: 6
      },
      {
        PropertyString: "+30-50 better chance of getting magic item",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 1,
          DamageString: "(38-44) to (74-86)"
        }
      ],
      EquipmentType: 1,
      Name: "Arbalest",
      RequiredStrength: 52,
      RequiredDexterity: 61,
      Durability: 0,
      ItemLevel: 34,
      Type: {
        Name: "Crossbow",
        Index: "Crossbow",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Merc Equip",
    Name: "Arch-Nemesis",
    Index: "Archnemesis",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 48,
    Code: "xsk",
    Properties: [
      {
        PropertyString: "+1-2",
        Index: 1
      },
      {
        PropertyString: "+15 Faster Run/Walk",
        Index: 5
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "Adds 25-50 to Cold Damage",
        Index: 6
      },
      {
        PropertyString: "+6-35 to Throw",
        Index: 2
      },
      {
        PropertyString: "+6-35 to Throw",
        Index: 3
      },
      {
        PropertyString: "+80-120 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "+20-30 better chance of getting magic item",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "99-121",
      EquipmentType: 0,
      Name: "Death Mask",
      RequiredStrength: 55,
      RequiredDexterity: 0,
      Durability: 20,
      ItemLevel: 48,
      Type: {
        Name: "Merc Equip",
        Index: "Merc Equip",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Shield",
    Name: "Under Dragon's Wing",
    Index: "Under Dragon's Wing",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 48,
    Code: "xit",
    Properties: [
      {
        PropertyString: "+50% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+50 Faster Block Rate",
        Index: 2
      },
      {
        PropertyString: "Adds 10-77 to Fire Damage",
        Index: 6
      },
      {
        PropertyString: "+75-100 Defense",
        Index: 1
      },
      {
        PropertyString: "Magic Resist +10-15%",
        Index: 4
      },
      {
        PropertyString: "All Resistances +35",
        Index: 5
      },
      {
        PropertyString: "+10-15 Damage Reduced by 10-15%%",
        Index: 3
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "15 to 24",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "134-159",
      EquipmentType: 0,
      Name: "Dragon Shield",
      RequiredStrength: 91,
      RequiredDexterity: 0,
      Durability: 76,
      ItemLevel: 45,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Shield",
    Name: "Ghoul Spawner",
    Index: "Ghoulspawner",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 48,
    Code: "xsh",
    Properties: [
      {
        PropertyString: "20 bonus to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "+75% Damage to Undead Damage to Undead",
        Index: 3
      },
      {
        PropertyString: "+6 Life stolen per hit",
        Index: 5
      },
      {
        PropertyString: "+100-125 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "All Resistances +30-40",
        Index: 6
      },
      {
        PropertyString: "10-15% Reanimate as: Afflicted",
        Index: 1
      },
      {
        PropertyString: "Level 10 Revive (10 Charges)",
        Index: 2
      },
      {
        PropertyString: "Repairs 0.12 durability per second",
        Index: 7
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "14 to 20",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "102-114",
      EquipmentType: 0,
      Name: "Grim Shield",
      RequiredStrength: 58,
      RequiredDexterity: 0,
      Durability: 70,
      ItemLevel: 48,
      Type: {
        Name: "Shield",
        Index: "Shield",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Gloves",
    Name: "Spikefiend Bracers",
    Index: "Spikefiend Bracers",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 48,
    Code: "xmg",
    Properties: [
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+20% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "+5 Life stolen per hit",
        Index: 5
      },
      {
        PropertyString: "+140-160 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "25-35 to Life",
        Index: 4
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "91-98",
      EquipmentType: 0,
      Name: "Heavy Bracers",
      RequiredStrength: 58,
      RequiredDexterity: 0,
      Durability: 16,
      ItemLevel: 43,
      Type: {
        Name: "Gloves",
        Index: "Gloves",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Boots",
    Name: "Whirling Dervish",
    Index: "Whirling Dervish",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 48,
    Code: "xmb",
    Properties: [
      {
        PropertyString: "+1 to Masteries (Barbarian only)",
        Index: 2
      },
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 6
      },
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+10-15% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "+7-12 to Whirlwind",
        Index: 1
      },
      {
        PropertyString: "+130-170 Enhanced Defense",
        Index: 0
      },
      {
        PropertyString: "Requirements +25%",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageString: "23 to 52",
      DamageStringPrefix: "Unhandled Damage Prefix",
      ArmorString: "87-102",
      EquipmentType: 0,
      Name: "Mesh Boots",
      RequiredStrength: 65,
      RequiredDexterity: 0,
      Durability: 66,
      ItemLevel: 43,
      Type: {
        Name: "Boots",
        Index: "Boots",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Belt",
    Name: "Assassin Vine",
    Index: "Assassin Vine",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 48,
    Code: "ztb",
    Properties: [
      {
        PropertyString: "+1",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "+5 Kick Damage",
        Index: 4
      },
      {
        PropertyString: "+2 Knockback",
        Index: 5
      },
      {
        PropertyString: "20-30 to Strength",
        Index: 2
      },
      {
        PropertyString: "20-30 to Dexterity",
        Index: 1
      },
      {
        PropertyString: "Lightning Resist +20-40%",
        Index: 6
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageString: null,
      DamageStringPrefix: null,
      ArmorString: "37",
      EquipmentType: 0,
      Name: "Battle Belt",
      RequiredStrength: 88,
      RequiredDexterity: 0,
      Durability: 18,
      ItemLevel: 49,
      Type: {
        Name: "Belt",
        Index: "Belt",
        Class: ""
      },
      RequiredClass: "Helm"
    }
  },
  {
    Type: "Orb",
    Name: "Manna from Heaven",
    Index: "Manna from Heaven",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 48,
    Code: "ob9",
    Properties: [
      {
        PropertyString: "10% Chance to cast level 12 energy shield when struck",
        Index: 4
      },
      {
        PropertyString: "+1-2",
        Index: 0
      },
      {
        PropertyString: "+15 Faster Hit Recovery",
        Index: 5
      },
      {
        PropertyString: "+ to Mana",
        Index: 3
      },
      {
        PropertyString: "+5-15 to Maximum Fire Resist",
        Index: 1
      },
      {
        PropertyString: "All Resistances +50",
        Index: 2
      },
      {
        PropertyString: "+10-20 Magic Absorb",
        Index: 6
      },
      {
        PropertyString: "+50-90 Poison Length Reduced by",
        Index: 7
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "13 to 32"
        }
      ],
      EquipmentType: 1,
      Name: "Sparkling Ball",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 250,
      ItemLevel: 46,
      Type: {
        Name: "Orb",
        Index: "Orb",
        Class: "sor"
      },
      RequiredClass: "Sorceress"
    }
  },
  {
    Type: "Hand to Hand 2",
    Name: "Shadowy Places",
    Index: "Shadowy Places",
    Enabled: true,
    ItemLevel: 1,
    RequiredLevel: 48,
    Code: "9lw",
    Properties: [
      {
        PropertyString: "+1",
        Index: 6
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 7
      },
      {
        PropertyString: "+215-265% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+251-280 to Left Hand Throw",
        Index: 1
      },
      {
        PropertyString: "+251-280 to Unsummon",
        Index: 2
      },
      {
        PropertyString: "+251-280 to Unsummon",
        Index: 3
      },
      {
        PropertyString: "+251-280 to Throw",
        Index: 4
      },
      {
        PropertyString: "+251-280 to Throw",
        Index: 5
      }
    ],
    DamageArmorEnhanced: true,
    Equipment: {
      DamageTypes: [
        {
          Type: 3,
          DamageString: "(56-65) to (116-135)"
        }
      ],
      EquipmentType: 1,
      Name: "Greater Claws",
      RequiredStrength: 76,
      RequiredDexterity: 76,
      Durability: 250,
      ItemLevel: 45,
      Type: {
        Name: "Hand to Hand 2",
        Index: "Hand to Hand 2",
        Class: "ass"
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Small Charm",
    Name: "Argo's Anchor",
    Index: "Argo's Anchor",
    Enabled: true,
    ItemLevel: 48,
    RequiredLevel: 48,
    Code: "cm1",
    Properties: [
      {
        PropertyString: "5-10% Increased Chance of Blocking",
        Index: 2
      },
      {
        PropertyString: "+5 to Maximum Damage",
        Index: 0
      },
      {
        PropertyString: "50-75 to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "+7 better chance of getting magic item",
        Index: 1
      }
    ],
    DamageArmorEnhanced: false,
    Equipment: {
      EquipmentType: 2,
      Name: "Small Charm",
      RequiredStrength: 0,
      RequiredDexterity: 0,
      Durability: 0,
      ItemLevel: 0,
      Type: {
        Name: "Small Charm",
        Index: "Small Charm",
        Class: ""
      },
      RequiredClass: ""
    }
  },
  {
    Type: "Crossbow",
    Name: "Demon Machine",
    Index: "Demon Machine",
    Enabled: true,
    ItemLevel: 57,
}