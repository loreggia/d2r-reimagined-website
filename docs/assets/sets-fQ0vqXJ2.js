import { C as CustomElement, c as customElement, b as bindable } from "./index-BkcAZCDb.js";
const name = "sets";
const template = '<template>\n    <h3 class="text-center my-4">\n        ${sets.length} Sets Found\n    </h3>\n    <div class="container">\n        <div class="row align-content-center justify-content-center text-center mb-5">\n            <div class="col">\n                <div class="au-select">\n                    <moo-select\n                            class="w-100"\n                            label="Select Class"\n                            options.bind="classes"\n                            class="standard-betsy-select"\n                            value.bind="class"\n                    ></moo-select>\n                </div>\n            </div>\n            <div class="col">\n                <moo-text-field\n                        class="w-100"\n                        label="Search Sets"\n                        type="text"\n                        value.bind="search"\n                ></moo-text-field>\n            </div>\n        </div>\n    </div>\n\n    <div class="row gy-5 px-5 text-center">\n        <div class="col-6" repeat.for="set of sets">\n            <div class="card bg-dark p-2">\n                <div class="set-text fs-5 mb-1">\n                    ${set.Name}\n                </div>\n                <div class="partial-sets set-text" repeat.for="partial of set.PartialProperties">\n                    ${partial.PropertyString} (${$index + 2} Items)\n                </div>\n                <div class="partial-sets set-text" repeat.for="full of set.FullProperties">\n                    ${full.PropertyString} (Full Set)\n                </div>\n                <div class="my-3" repeat.for="setItem of set.SetItems">\n                    <div class="set-text mb-1">\n                        ${setItem.Name}\n                    </div>\n\n                    <div class="armor mt-1" if.bind="setItem.Equipment.ArmorString">\n                        Armor: ${setItem.Equipment.ArmorString}\n                    </div>\n                    <div class="damage" if.bind="setItem.Equipment.DamageTypes" repeat.for="damage of setItem.Equipment.DamageTypes">\n                        ${getDamageTypeString(damage.Type)} ${damage.DamageString}\n                    </div>\n                    <div class="requirement" if.bind="setItem.RequiredLevel > 0">\n                        Level ${setItem.RequiredLevel} Required\n                    </div>\n                    <div class="requirement" if.bind="setItem.Equipment.RequiredStrength > 0">\n                        ${setItem.Equipment.RequiredStrength} Strength Required\n                    </div>\n                    <div class="requirement" if.bind="setItem.Equipment.RequiredDexterity > 0">\n                        ${setItem.Equipment.RequiredDexterity} Dexterity Required\n                    </div>\n                    <div class="durability mt-1" if.bind="setItem.Equipment.Durability > 0">\n                        ${setItem.Equipment.Durability} Durability\n                    </div>\n                    <div class="enhanced" repeat.for="property of setItem.Properties">\n                        ${property.PropertyString}\n                    </div>\n                    <div class="set-text" repeat.for="setProperty of setItem.SetPropertiesString">\n                        ${setProperty}\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n';
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
    Index: "Civerb's Vestments",
    Name: "Civerb's Vestments",
    SetItems: [
      {
        Type: "Shield",
        "Set": "Civerb's Vestments",
        SetPropertiesString: [
          "+21-22 to Mana (Civerb's Icon)",
          "Poison Resist +25-26% (Civerb's Cudgel)"
        ],
        Name: "Civerb's Ward",
        Index: "Civerb's Ward",
        Enabled: true,
        ItemLevel: 13,
        RequiredLevel: 9,
        Code: "lrg",
        Properties: [
          {
            PropertyString: "15% Increased Chance of Blocking",
            Index: 1
          },
          {
            PropertyString: "+15 Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "2 to 4",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "32-42",
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
        Type: "Amulet",
        "Set": "Civerb's Vestments",
        SetPropertiesString: [
          "+25 Defense (3 Items)",
          "Cold Resist +25% (2 Items)"
        ],
        Name: "Civerb's Icon",
        Index: "Civerb's Icon",
        Enabled: true,
        ItemLevel: 13,
        RequiredLevel: 9,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+4 Replenish Life",
            Index: 1
          },
          {
            PropertyString: "Regenerate Mana 40%",
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
        Type: "Scepter",
        "Set": "Civerb's Vestments",
        SetPropertiesString: [],
        Name: "Civerb's Cudgel",
        Index: "Civerb's Cudgel",
        Enabled: true,
        ItemLevel: 13,
        RequiredLevel: 9,
        Code: "gsc",
        Properties: [
          {
            PropertyString: "+17-23 to Maximum Damage",
            Index: 1
          },
          {
            PropertyString: "75 to Attack Rating",
            Index: 0
          },
          {
            PropertyString: "+ to Maximum Damage",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "8 to 35"
            }
          ],
          EquipmentType: 1,
          Name: "Grand Scepter",
          RequiredStrength: 37,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 15,
          Type: {
            Name: "Scepter",
            Index: "Scepter",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "Fire Resist +15%",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "+200% Damage to Undead Damage to Undead",
        Index: 1
      },
      {
        PropertyString: "15 to Strength",
        Index: 0
      },
      {
        PropertyString: "Lightning Resist +25%",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Hsarus' Defense",
    Name: "Hsarus' Defense",
    SetItems: [
      {
        Type: "Boots",
        "Set": "Hsarus' Defense",
        SetPropertiesString: [
          "to Attack Rating (2 Items)"
        ],
        Name: "Hsarus' Iron Heel",
        Index: "Hsarus' Iron Heel",
        Enabled: true,
        ItemLevel: 4,
        RequiredLevel: 3,
        Code: "mbt",
        Properties: [
          {
            PropertyString: "+20 Faster Run/Walk",
            Index: 1
          },
          {
            PropertyString: "Fire Resist +25%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "6 to 12",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "8",
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
        Type: "Shield",
        "Set": "Hsarus' Defense",
        SetPropertiesString: [
          "+ Defense (2 Items)"
        ],
        Name: "Hsarus' Iron Fist",
        Index: "Hsarus' Iron Fist",
        Enabled: true,
        ItemLevel: 4,
        RequiredLevel: 3,
        Code: "buc",
        Properties: [
          {
            PropertyString: "10 to Strength",
            Index: 1
          },
          {
            PropertyString: "+2 Damage Reduced by",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "1 to 3",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "4",
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
        "Set": "Hsarus' Defense",
        SetPropertiesString: [
          "+ Defense (2 Items)"
        ],
        Name: "Hsarus' Iron Stay",
        Index: "Hsarus' Iron Stay",
        Enabled: true,
        ItemLevel: 4,
        RequiredLevel: 3,
        Code: "mbl",
        Properties: [
          {
            PropertyString: "20 to Life",
            Index: 1
          },
          {
            PropertyString: "Cold Resist +20%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "5",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+5 Attacker Takes Damage of",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "+5 to Maximum Damage",
        Index: 0
      },
      {
        PropertyString: "Lightning Resist +25%",
        Index: 2
      },
      {
        PropertyString: "+1 Cannot Be Frozen",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Cleglaw's Brace",
    Name: "Cleglaw's Brace",
    SetItems: [
      {
        Type: "Sword",
        "Set": "Cleglaw's Brace",
        SetPropertiesString: [
          "+ to Maximum Damage (2 Items)"
        ],
        Name: "Cleglaw's Tooth",
        Index: "Cleglaw's Tooth",
        Enabled: true,
        ItemLevel: 6,
        RequiredLevel: 4,
        Code: "lsd",
        Properties: [
          {
            PropertyString: "30 bonus to Attack Rating",
            Index: 0
          },
          {
            PropertyString: "+50 Deadly Strike",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "3 to 19"
            }
          ],
          EquipmentType: 1,
          Name: "Long Sword",
          RequiredStrength: 55,
          RequiredDexterity: 39,
          Durability: 44,
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
        Type: "Shield",
        "Set": "Cleglaw's Brace",
        SetPropertiesString: [
          "All Resistances +15 (2 Items)"
        ],
        Name: "Cleglaw's Claw",
        Index: "Cleglaw's Claw",
        Enabled: true,
        ItemLevel: 6,
        RequiredLevel: 4,
        Code: "sml",
        Properties: [
          {
            PropertyString: "+17 Defense",
            Index: 0
          },
          {
            PropertyString: "+75 Poison Length Reduced by",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "2 to 3",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "25",
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
        "Set": "Cleglaw's Brace",
        SetPropertiesString: [
          "to Attack Rating (2 Items)"
        ],
        Name: "Cleglaw's Pincers",
        Index: "Cleglaw's Pincers",
        Enabled: true,
        ItemLevel: 6,
        RequiredLevel: 4,
        Code: "mgl",
        Properties: [
          {
            PropertyString: "+25 Slows target by",
            Index: 1
          },
          {
            PropertyString: "+1 Knockback",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "15",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+50 Defense",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+6 Mana stolen per hit",
        Index: 1
      },
      {
        PropertyString: "+35 Chance of Crushing Blow",
        Index: 2
      },
      {
        PropertyString: "+50 Defense",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Iratha's Finery",
    Name: "Iratha's Finery",
    SetItems: [
      {
        Type: "Amulet",
        "Set": "Iratha's Finery",
        SetPropertiesString: [
          "All Resistances +15 (2 Items)"
        ],
        Name: "Iratha's Collar",
        Index: "Iratha's Collar",
        Enabled: true,
        ItemLevel: 21,
        RequiredLevel: 15,
        Code: "amu",
        Properties: [
          {
            PropertyString: "Poison Resist +30%",
            Index: 0
          },
          {
            PropertyString: "+75 Poison Length Reduced by",
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
        Type: "Gloves",
        "Set": "Iratha's Finery",
        SetPropertiesString: [
          "+20 Increased Attack Speed (2 Items)"
        ],
        Name: "Iratha's Cuff",
        Index: "Iratha's Cuff",
        Enabled: true,
        ItemLevel: 21,
        RequiredLevel: 15,
        Code: "tgl",
        Properties: [
          {
            PropertyString: "Cold Resist +30%",
            Index: 0
          },
          {
            PropertyString: "+1 Half Freeze Duration",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "9",
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
        Type: "Merc Equip",
        "Set": "Iratha's Finery",
        SetPropertiesString: [
          "+ Defense (2 Items)"
        ],
        Name: "Iratha's Coil",
        Index: "Iratha's Coil",
        Enabled: true,
        ItemLevel: 21,
        RequiredLevel: 15,
        Code: "crn",
        Properties: [
          {
            PropertyString: "Lightning Resist +30%",
            Index: 1
          },
          {
            PropertyString: "Fire Resist +30%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "25",
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
        Type: "Belt",
        "Set": "Iratha's Finery",
        SetPropertiesString: [
          "10 to Dexterity (2 Items)"
        ],
        Name: "Iratha's Cord",
        Index: "Iratha's Cord",
        Enabled: true,
        ItemLevel: 21,
        RequiredLevel: 15,
        Code: "tbl",
        Properties: [
          {
            PropertyString: "+5 to Minimum Damage",
            Index: 1
          },
          {
            PropertyString: "+25 Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "26-36",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+50 Defense",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "15 to Dexterity",
        Index: 5
      },
      {
        PropertyString: "+10 to Maximum Poison Resist",
        Index: 4
      },
      {
        PropertyString: "+10 to Maximum Cold Resist",
        Index: 2
      },
      {
        PropertyString: "+10 to Maximum Lightning Resist",
        Index: 3
      },
      {
        PropertyString: "+10 to Maximum Fire Resist",
        Index: 1
      },
      {
        PropertyString: "All Resistances +20",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Isenhart's Armory",
    Name: "Isenhart's Armory",
    SetItems: [
      {
        Type: "Sword",
        "Set": "Isenhart's Armory",
        SetPropertiesString: [
          "to Attack Rating (2 Items)"
        ],
        Name: "Isenhart's Lightbrand",
        Index: "Isenhart's Lightbrand",
        Enabled: true,
        ItemLevel: 11,
        RequiredLevel: 8,
        Code: "bsd",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+10 to Minimum Damage",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "17 to 14"
            }
          ],
          EquipmentType: 1,
          Name: "Broad Sword",
          RequiredStrength: 48,
          RequiredDexterity: 0,
          Durability: 32,
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
        Type: "Shield",
        "Set": "Isenhart's Armory",
        SetPropertiesString: [
          "All Resistances +8 (2 Items)"
        ],
        Name: "Isenhart's Parry",
        Index: "Isenhart's Parry",
        Enabled: true,
        ItemLevel: 11,
        RequiredLevel: 8,
        Code: "gts",
        Properties: [
          {
            PropertyString: "+40 Defense",
            Index: 0
          },
          {
            PropertyString: "+4 Attacker Takes Lightning Damage of",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "2 to 6",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "70",
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
        Type: "Armor",
        "Set": "Isenhart's Armory",
        SetPropertiesString: [
          "+ Defense (2 Items)"
        ],
        Name: "Isenhart's Case",
        Index: "Isenhart's Case",
        Enabled: true,
        ItemLevel: 11,
        RequiredLevel: 8,
        Code: "brs",
        Properties: [
          {
            PropertyString: "+40 Defense",
            Index: 0
          },
          {
            PropertyString: "+2 Magic Damage Reduced by",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "115-145",
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
        Type: "Merc Equip",
        "Set": "Isenhart's Armory",
        SetPropertiesString: [
          "All Resistances +8 (2 Items)"
        ],
        Name: "Isenhart's Horns",
        Index: "Isenhart's Horns",
        Enabled: true,
        ItemLevel: 11,
        RequiredLevel: 8,
        Code: "fhl",
        Properties: [
          {
            PropertyString: "6 to Dexterity",
            Index: 0
          },
          {
            PropertyString: "+2 Damage Reduced by",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "43-53",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "10 to Strength",
        Index: 0
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 4
      },
      {
        PropertyString: "30% Increased Chance of Blocking",
        Index: 3
      },
      {
        PropertyString: "35 bonus to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "+5 Life stolen per hit",
        Index: 0
      },
      {
        PropertyString: "All Resistances +10",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Vidala's Rig",
    Name: "Vidala's Rig",
    SetItems: [
      {
        Type: "Bow",
        "Set": "Vidala's Rig",
        SetPropertiesString: [
          "to Attack Rating (2 Items)"
        ],
        Name: "Vidala's Barb",
        Index: "Vidala's Barb",
        Enabled: true,
        ItemLevel: 19,
        RequiredLevel: 14,
        Code: "lbb",
        Properties: [
          {
            PropertyString: "Adds 1-20 Lightning damage",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "3 to 18"
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
        Type: "Boots",
        "Set": "Vidala's Rig",
        SetPropertiesString: [
          "All Resistances +8 (2 Items)"
        ],
        Name: "Vidala's Fetlock",
        Index: "Vidala's Fetlock",
        Enabled: true,
        ItemLevel: 19,
        RequiredLevel: 14,
        Code: "tbt",
        Properties: [
          {
            PropertyString: "+30 Faster Run/Walk",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "8 to 16",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "18-21",
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
        Type: "Armor",
        "Set": "Vidala's Rig",
        SetPropertiesString: [
          "+ Defense (3 Items)",
          "Fire Resist +24% (2 Items)"
        ],
        Name: "Vidala's Ambush",
        Index: "Vidala's Ambush",
        Enabled: true,
        ItemLevel: 19,
        RequiredLevel: 14,
        Code: "lea",
        Properties: [
          {
            PropertyString: "+50 Defense",
            Index: 0
          },
          {
            PropertyString: "11 to Dexterity",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "64",
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
        Type: "Amulet",
        "Set": "Vidala's Rig",
        SetPropertiesString: [
          "+50 better chance of getting magic item (2 Items)"
        ],
        Name: "Vidala's Snare",
        Index: "Vidala's Snare",
        Enabled: true,
        ItemLevel: 19,
        RequiredLevel: 14,
        Code: "amu",
        Properties: [
          {
            PropertyString: "15 to Life",
            Index: 0
          },
          {
            PropertyString: "Cold Resist +20%",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "75 to Attack Rating",
        Index: 0
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+50 Piercing Attack",
        Index: 2
      },
      {
        PropertyString: "Adds 15-20 to Cold Damage",
        Index: 0
      },
      {
        PropertyString: "Freezes target +1",
        Index: 1
      },
      {
        PropertyString: "10 to Strength",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Milabrega's Regalia",
    Name: "Milabrega's Regalia",
    SetItems: [
      {
        Type: "Shield",
        "Set": "Milabrega's Regalia",
        SetPropertiesString: [
          "+50 Enhanced Defense (3 Items)",
          "50 to Life (2 Items)"
        ],
        Name: "Milabrega's Orb",
        Index: "Milabrega's Orb",
        Enabled: true,
        ItemLevel: 23,
        RequiredLevel: 17,
        Code: "kit",
        Properties: [
          {
            PropertyString: "+25 Defense",
            Index: 1
          },
          {
            PropertyString: "+20 better chance of getting magic item",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "2 to 5",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "41",
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
        Type: "Scepter",
        "Set": "Milabrega's Regalia",
        SetPropertiesString: [],
        Name: "Milabrega's Rod",
        Index: "Milabrega's Rod",
        Enabled: true,
        ItemLevel: 23,
        RequiredLevel: 17,
        Code: "wsp",
        Properties: [
          {
            PropertyString: "+1",
            Index: 0
          },
          {
            PropertyString: "+50% Enhanced Damage",
            Index: 1
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
              DamageString: "15 to 25"
            }
          ],
          EquipmentType: 1,
          Name: "War Scepter",
          RequiredStrength: 55,
          RequiredDexterity: 0,
          Durability: 70,
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
        Type: "Merc Equip",
        "Set": "Milabrega's Regalia",
        SetPropertiesString: [
          "Cold Resist +40% (2 Items)"
        ],
        Name: "Milabrega's Diadem",
        Index: "Milabrega's Diadem",
        Enabled: true,
        ItemLevel: 23,
        RequiredLevel: 17,
        Code: "crn",
        Properties: [
          {
            PropertyString: "15 to Life",
            Index: 0
          },
          {
            PropertyString: "+15 to Mana",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "25",
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
        "Set": "Milabrega's Regalia",
        SetPropertiesString: [
          "+100 Enhanced Defense (2 Items)"
        ],
        Name: "Milabrega's Robe",
        Index: "Milabrega's Robe",
        Enabled: true,
        ItemLevel: 23,
        RequiredLevel: 17,
        Code: "aar",
        Properties: [
          {
            PropertyString: "+2 Damage Reduced by",
            Index: 1
          },
          {
            PropertyString: "+3 Attacker Takes Damage of",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "218",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "75 to Attack Rating",
        Index: 0
      },
      {
        PropertyString: "125 to Attack Rating",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2",
        Index: 1
      },
      {
        PropertyString: "+10 Mana stolen per hit",
        Index: 2
      },
      {
        PropertyString: "+8 Life stolen per hit",
        Index: 0
      },
      {
        PropertyString: "Poison Resist +15%",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Cathan's Traps",
    Name: "Cathan's Traps",
    SetItems: [
      {
        Type: "Staff",
        "Set": "Cathan's Traps",
        SetPropertiesString: [
          "+50 to Mana (2 Items)",
          "All Resistances +10 (3 Items)"
        ],
        Name: "Cathan's Rule",
        Index: "Cathan's Rule",
        Enabled: true,
        ItemLevel: 15,
        RequiredLevel: 11,
        Code: "bst",
        Properties: [
          {
            PropertyString: "+1 to Fire Skills",
            Index: 0
          },
          {
            PropertyString: "+10 to Maximum Fire Damage",
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
          Durability: 40,
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
        Type: "Armor",
        "Set": "Cathan's Traps",
        SetPropertiesString: [
          "Fire Resist +30% (3 Items)",
          "+5 Attacker Takes Damage of (2 Items)"
        ],
        Name: "Cathan's Mesh",
        Index: "Cathan's Mesh",
        Enabled: true,
        ItemLevel: 15,
        RequiredLevel: 11,
        Code: "chn",
        Properties: [
          {
            PropertyString: "+15 Defense",
            Index: 0
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
          ArmorString: "87",
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
        "Set": "Cathan's Traps",
        SetPropertiesString: [
          "+ Defense (2 Items)"
        ],
        Name: "Cathan's Visage",
        Index: "Cathan's Visage",
        Enabled: true,
        ItemLevel: 15,
        RequiredLevel: 11,
        Code: "msk",
        Properties: [
          {
            PropertyString: "+20 to Mana",
            Index: 0
          },
          {
            PropertyString: "Cold Resist +25%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "16-20",
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
        Type: "Amulet",
        "Set": "Cathan's Traps",
        SetPropertiesString: [
          "50 to Attack Rating (2 Items)",
          "+25 better chance of getting magic item (3 Items)"
        ],
        Name: "Cathan's Sigil",
        Index: "Cathan's Sigil",
        Enabled: true,
        ItemLevel: 15,
        RequiredLevel: 11,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+10 Faster Hit Recovery",
            Index: 0
          },
          {
            PropertyString: "+5 Attacker Takes Lightning Damage of",
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
        "Set": "Cathan's Traps",
        SetPropertiesString: [
          "10 to Strength (2 Items)"
        ],
        Name: "Cathan's Seal",
        Index: "Cathan's Seal",
        Enabled: true,
        ItemLevel: 15,
        RequiredLevel: 11,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+6 Life stolen per hit",
            Index: 0
          },
          {
            PropertyString: "+2 Damage Reduced by",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "Adds 15-20 to Fire Damage",
        Index: 0
      },
      {
        PropertyString: "Lightning Resist +25%",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+10 Faster Cast Rate",
        Index: 3
      },
      {
        PropertyString: "60 to Attack Rating",
        Index: 0
      },
      {
        PropertyString: "+20 to Mana",
        Index: 4
      },
      {
        PropertyString: "All Resistances +25",
        Index: 2
      },
      {
        PropertyString: "+3 Magic Damage Reduced by",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Tancred's Battlegear",
    Name: "Tancred's Battlegear",
    SetItems: [
      {
        Type: "Axe",
        "Set": "Tancred's Battlegear",
        SetPropertiesString: [
          "+20 Increased Attack Speed (3 Items)",
          "+20 to Mana (2 Items)"
        ],
        Name: "Tancred's Crowbill",
        Index: "Tancred's Crowbill",
        Enabled: true,
        ItemLevel: 27,
        RequiredLevel: 20,
        Code: "mpi",
        Properties: [
          {
            PropertyString: "+80% Enhanced Damage",
            Index: 1
          },
          {
            PropertyString: "75 to Attack Rating",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "12 to 19"
            }
          ],
          EquipmentType: 1,
          Name: "Military Pick",
          RequiredStrength: 49,
          RequiredDexterity: 33,
          Durability: 26,
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
        Type: "Armor",
        "Set": "Tancred's Battlegear",
        SetPropertiesString: [
          "+ Defense (2 Items)"
        ],
        Name: "Tancred's Spine",
        Index: "Tancred's Spine",
        Enabled: true,
        ItemLevel: 27,
        RequiredLevel: 20,
        Code: "ful",
        Properties: [
          {
            PropertyString: "15 to Strength",
            Index: 1
          },
          {
            PropertyString: "40 to Life",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "286-347",
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
        Type: "Boots",
        "Set": "Tancred's Battlegear",
        SetPropertiesString: [
          "+30 Faster Run/Walk (2 Items)",
          "10 to Strength (3 Items)"
        ],
        Name: "Tancred's Hobnails",
        Index: "Tancred's Hobnails",
        Enabled: true,
        ItemLevel: 27,
        RequiredLevel: 20,
        Code: "lbt",
        Properties: [
          {
            PropertyString: "10 to Dexterity",
            Index: 1
          },
          {
            PropertyString: "+25 Heal Stamina Plus",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "3 to 8",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "2",
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
        Type: "Amulet",
        "Set": "Tancred's Battlegear",
        SetPropertiesString: [
          "60 to Attack Rating (3 Items)",
          "+78 better chance of getting magic item (2 Items)"
        ],
        Name: "Tancred's Weird",
        Index: "Tancred's Weird",
        Enabled: true,
        ItemLevel: 27,
        RequiredLevel: 20,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+2 Damage Reduced by",
            Index: 0
          },
          {
            PropertyString: "+1 Magic Damage Reduced by",
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
        Type: "Merc Equip",
        "Set": "Tancred's Battlegear",
        SetPropertiesString: [
          "All Resistances +10 (2 Items)"
        ],
        Name: "Tancred's Skull",
        Index: "Tancred's Skull",
        Enabled: true,
        ItemLevel: 27,
        RequiredLevel: 20,
        Code: "bhm",
        Properties: [
          {
            PropertyString: "+10% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "40 to Attack Rating",
            Index: 1
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+15 to Minimum Lightning Damage",
        Index: 0
      },
      {
        PropertyString: "+5 Life stolen per hit",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+5 Mana stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+35 Slows target by",
        Index: 2
      },
      {
        PropertyString: "All Resistances +10",
        Index: 1
      },
      {
        PropertyString: "+75 extra gold from monsters",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Sigon's Complete Steel",
    Name: "Sigon's Complete Steel",
    SetItems: [
      {
        Type: "Gloves",
        "Set": "Sigon's Complete Steel",
        SetPropertiesString: [
          "+30 Increased Attack Speed (2 Items)"
        ],
        Name: "Sigon's Gage",
        Index: "Sigon's Gage",
        Enabled: true,
        ItemLevel: 9,
        RequiredLevel: 6,
        Code: "hgl",
        Properties: [
          {
            PropertyString: "20 to Attack Rating",
            Index: 1
          },
          {
            PropertyString: "10 to Strength",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "12",
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
        Type: "Merc Equip",
        "Set": "Sigon's Complete Steel",
        SetPropertiesString: [
          "to Attack Rating (2 Items)"
        ],
        Name: "Sigon's Visor",
        Index: "Sigon's Visor",
        Enabled: true,
        ItemLevel: 9,
        RequiredLevel: 6,
        Code: "ghm",
        Properties: [
          {
            PropertyString: "+25 Defense",
            Index: 1
          },
          {
            PropertyString: "+30 to Mana",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "30",
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
        Type: "Armor",
        "Set": "Sigon's Complete Steel",
        SetPropertiesString: [
          "+20 Attacker Takes Damage of (2 Items)"
        ],
        Name: "Sigon's Shelter",
        Index: "Sigon's Shelter",
        Enabled: true,
        ItemLevel: 9,
        RequiredLevel: 6,
        Code: "gth",
        Properties: [
          {
            PropertyString: "+25 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Lightning Resist +30%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "161",
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
        Type: "Boots",
        "Set": "Sigon's Complete Steel",
        SetPropertiesString: [
          "50 to Attack Rating (2 Items)",
          "+50 better chance of getting magic item (3 Items)"
        ],
        Name: "Sigon's Sabot",
        Index: "Sigon's Sabot",
        Enabled: true,
        ItemLevel: 9,
        RequiredLevel: 6,
        Code: "hbt",
        Properties: [
          {
            PropertyString: "+20 Faster Run/Walk",
            Index: 0
          },
          {
            PropertyString: "Cold Resist +40%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "10 to 20",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "12",
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
        "Set": "Sigon's Complete Steel",
        SetPropertiesString: [
          "+ Defense (2 Items)"
        ],
        Name: "Sigon's Wrap",
        Index: "Sigon's Wrap",
        Enabled: true,
        ItemLevel: 9,
        RequiredLevel: 6,
        Code: "hbl",
        Properties: [
          {
            PropertyString: "20 to Life",
            Index: 1
          },
          {
            PropertyString: "Fire Resist +20%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "18-19",
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
        Type: "Shield",
        "Set": "Sigon's Complete Steel",
        SetPropertiesString: [],
        Name: "Sigon's Guard",
        Index: "Sigon's Guard",
        Enabled: true,
        ItemLevel: 9,
        RequiredLevel: 6,
        Code: "tow",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 0
          },
          {
            PropertyString: "20% Increased Chance of Blocking",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "1 to 5",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "22",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+10 Life stolen per hit",
        Index: 0
      },
      {
        PropertyString: "+100 Defense",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+24 to Maximum Fire Damage",
        Index: 3
      },
      {
        PropertyString: "+20 to Mana",
        Index: 4
      },
      {
        PropertyString: "Fire Resist +12%",
        Index: 0
      },
      {
        PropertyString: "+7 Damage Reduced by",
        Index: 2
      },
      {
        PropertyString: "+12 Attacker Takes Damage of",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Infernal Tools",
    Name: "Infernal Tools",
    SetItems: [
      {
        Type: "Merc Equip",
        "Set": "Infernal Tools",
        SetPropertiesString: [
          "+ Defense (2 Items)"
        ],
        Name: "Infernal Cranium",
        Index: "Infernal Cranium",
        Enabled: true,
        ItemLevel: 7,
        RequiredLevel: 5,
        Code: "cap",
        Properties: [
          {
            PropertyString: "All Resistances +10",
            Index: 0
          },
          {
            PropertyString: "20% Damage Taken Goes To Mana",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
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
        Type: "Wand",
        "Set": "Infernal Tools",
        SetPropertiesString: [
          "to Attack Rating (2 Items)"
        ],
        Name: "Infernal Torch",
        Index: "Infernal Torch",
        Enabled: true,
        ItemLevel: 7,
        RequiredLevel: 5,
        Code: "gwn",
        Properties: [
          {
            PropertyString: "+1",
            Index: 1
          },
          {
            PropertyString: "+8 to Minimum Damage",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "13 to 11"
            }
          ],
          EquipmentType: 1,
          Name: "Grim Wand",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 15,
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
        Type: "Belt",
        "Set": "Infernal Tools",
        SetPropertiesString: [
          "Poison Resist +25% (2 Items)",
          "+1 Half Freeze Duration (3 Items)"
        ],
        Name: "Infernal Sign",
        Index: "Infernal Sign",
        Enabled: true,
        ItemLevel: 7,
        RequiredLevel: 5,
        Code: "tbl",
        Properties: [
          {
            PropertyString: "+25 Defense",
            Index: 0
          },
          {
            PropertyString: "20 to Life",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "26-36",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+25 to Minimum Poison Damage",
        Index: 0
      },
      {
        PropertyString: "+10 to Mana",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1",
        Index: 1
      },
      {
        PropertyString: "20 bonus to Attack Rating",
        Index: 0
      },
      {
        PropertyString: "+6 Mana stolen per hit",
        Index: 3
      },
      {
        PropertyString: "20% Chance of Open Wounds",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Berserker's Garb",
    Name: "Berserker's Garb",
    SetItems: [
      {
        Type: "Merc Equip",
        "Set": "Berserker's Garb",
        SetPropertiesString: [
          "to Attack Rating (2 Items)"
        ],
        Name: "Berserker's Headgear",
        Index: "Berserker's Headgear",
        Enabled: true,
        ItemLevel: 5,
        RequiredLevel: 3,
        Code: "hlm",
        Properties: [
          {
            PropertyString: "+15 Defense",
            Index: 0
          },
          {
            PropertyString: "Fire Resist +25%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "30",
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
        "Set": "Berserker's Garb",
        SetPropertiesString: [
          "+ Defense (2 Items)"
        ],
        Name: "Berserker's Hauberk",
        Index: "Berserker's Hauberk",
        Enabled: true,
        ItemLevel: 5,
        RequiredLevel: 3,
        Code: "spl",
        Properties: [
          {
            PropertyString: "+1",
            Index: 1
          },
          {
            PropertyString: "+2 Magic Damage Reduced by",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "90",
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
        Type: "Axe",
        "Set": "Berserker's Garb",
        SetPropertiesString: [
          "+50% Enhanced Damage (2 Items)"
        ],
        Name: "Berserker's Hatchet",
        Index: "Berserker's Hatchet",
        Enabled: true,
        ItemLevel: 5,
        RequiredLevel: 3,
        Code: "2ax",
        Properties: [
          {
            PropertyString: "30 bonus to Attack Rating",
            Index: 0
          },
          {
            PropertyString: "+5 Mana stolen per hit",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "5 to 13"
            }
          ],
          EquipmentType: 1,
          Name: "Double Axe",
          RequiredStrength: 43,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 13,
          Type: {
            Name: "Axe",
            Index: "Axe",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "50 to Life",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "Adds 16-32 Poison damage",
        Index: 1
      },
      {
        PropertyString: "+75 Defense",
        Index: 4
      },
      {
        PropertyString: "+75 Poison Length Reduced by",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Death's Disguise",
    Name: "Death's Disguise",
    SetItems: [
      {
        Type: "Gloves",
        "Set": "Death's Disguise",
        SetPropertiesString: [
          "+30 Increased Attack Speed (2 Items)"
        ],
        Name: "Death's Hand",
        Index: "Death's Hand",
        Enabled: true,
        ItemLevel: 8,
        RequiredLevel: 6,
        Code: "lgl",
        Properties: [
          {
            PropertyString: "Poison Resist +50%",
            Index: 0
          },
          {
            PropertyString: "+75 Poison Length Reduced by",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "2",
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
        "Set": "Death's Disguise",
        SetPropertiesString: [
          "All Resistances +15 (2 Items)"
        ],
        Name: "Death's Guard",
        Index: "Death's Guard",
        Enabled: true,
        ItemLevel: 8,
        RequiredLevel: 6,
        Code: "lbl",
        Properties: [
          {
            PropertyString: "+20 Defense",
            Index: 0
          },
          {
            PropertyString: "+1 Cannot Be Frozen",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "22",
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
        Type: "Sword",
        "Set": "Death's Disguise",
        SetPropertiesString: [
          "Adds 25-75 to Cold Damage (2 Items)"
        ],
        Name: "Death's Touch",
        Index: "Death's Touch",
        Enabled: true,
        ItemLevel: 8,
        RequiredLevel: 6,
        Code: "wsd",
        Properties: [
          {
            PropertyString: "+25% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+4 Life stolen per hit",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "10 to 25"
            }
          ],
          EquipmentType: 1,
          Name: "War Sword",
          RequiredStrength: 71,
          RequiredDexterity: 45,
          Durability: 44,
          ItemLevel: 27,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+8 Life stolen per hit",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "+10 to Minimum Damage",
        Index: 1
      },
      {
        PropertyString: "40 bonus to Attack Rating",
        Index: 0
      },
      {
        PropertyString: "All Resistances +25",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Angelical Raiment",
    Name: "Angelical Raiment",
    SetItems: [
      {
        Type: "Sword",
        "Set": "Angelical Raiment",
        SetPropertiesString: [
          "+30 Increased Attack Speed (3 Items)",
          "+75% Enhanced Damage (2 Items)"
        ],
        Name: "Angelic Sickle",
        Index: "Angelic Sickle",
        Enabled: true,
        ItemLevel: 17,
        RequiredLevel: 12,
        Code: "sbr",
        Properties: [
          {
            PropertyString: "75 to Attack Rating",
            Index: 0
          },
          {
            PropertyString: "+250% Damage to Undead Damage to Undead",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "3 to 8"
            }
          ],
          EquipmentType: 1,
          Name: "Sabre",
          RequiredStrength: 25,
          RequiredDexterity: 25,
          Durability: 32,
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
        Type: "Armor",
        "Set": "Angelical Raiment",
        SetPropertiesString: [
          "+150 Defense (2 Items)",
          "Fire Resist +50% (3 Items)"
        ],
        Name: "Angelic Mantle",
        Index: "Angelic Mantle",
        Enabled: true,
        ItemLevel: 17,
        RequiredLevel: 12,
        Code: "rng",
        Properties: [
          {
            PropertyString: "+40 Enhanced Defense",
            Index: 1
          },
          {
            PropertyString: "+3 Damage Reduced by",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "64",
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
        Type: "Ring",
        "Set": "Angelical Raiment",
        SetPropertiesString: [
          "to Attack Rating (2 Items)",
          "+50 better chance of getting magic item (3 Items)"
        ],
        Name: "Angelic Halo",
        Index: "Angelic Halo",
        Enabled: true,
        ItemLevel: 17,
        RequiredLevel: 12,
        Code: "rin",
        Properties: [
          {
            PropertyString: "20 to Life",
            Index: 1
          },
          {
            PropertyString: "+6 Replenish Life",
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
        Type: "Amulet",
        "Set": "Angelical Raiment",
        SetPropertiesString: [
          "1 to All Skills (3 Items)",
          "75 to Life (2 Items)"
        ],
        Name: "Angelic Wings",
        Index: "Angelic Wings",
        Enabled: true,
        ItemLevel: 17,
        RequiredLevel: 12,
        Code: "amu",
        Properties: [
          {
            PropertyString: "20% Damage Taken Goes To Mana",
            Index: 1
          },
          {
            PropertyString: "3 to Light Radius",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "10 to Dexterity",
        Index: 0
      },
      {
        PropertyString: "+50 to Mana",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "Regenerate Mana 8%",
        Index: 3
      },
      {
        PropertyString: "All Resistances +25",
        Index: 0
      },
      {
        PropertyString: "+1 Half Freeze Duration",
        Index: 1
      },
      {
        PropertyString: "+40 better chance of getting magic item",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Arctic Gear",
    Name: "Arctic Gear",
    SetItems: [
      {
        Type: "Bow",
        "Set": "Arctic Gear",
        SetPropertiesString: [
          "to Attack Rating (2 Items)",
          "Adds 20-30 to Cold Damage (3 Items)"
        ],
        Name: "Arctic Horn",
        Index: "Arctic Horn",
        Enabled: true,
        ItemLevel: 3,
        RequiredLevel: 2,
        Code: "swb",
        Properties: [
          {
            PropertyString: "+50% Enhanced Damage",
            Index: 1
          },
          {
            PropertyString: "20 bonus to Attack Rating",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "9 to 21"
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
        Type: "Armor",
        "Set": "Arctic Gear",
        SetPropertiesString: [
          "+ Defense (2 Items)",
          "Cold Resist +15% (3 Items)"
        ],
        Name: "Arctic Furs",
        Index: "Arctic Furs",
        Enabled: true,
        ItemLevel: 3,
        RequiredLevel: 2,
        Code: "qui",
        Properties: [
          {
            PropertyString: "+275-325 Enhanced Defense",
            Index: 0
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
          ArmorString: "8",
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
        "Set": "Arctic Gear",
        SetPropertiesString: [
          "Cold Resist +10% (3 Items)",
          "+40 better chance of getting magic item (2 Items)"
        ],
        Name: "Arctic Binding",
        Index: "Arctic Binding",
        Enabled: true,
        ItemLevel: 3,
        RequiredLevel: 2,
        Code: "vbl",
        Properties: [
          {
            PropertyString: "+30 Defense",
            Index: 1
          },
          {
            PropertyString: "Cold Resist +40%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "3",
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
        Type: "Gloves",
        "Set": "Arctic Gear",
        SetPropertiesString: [
          "50 to Attack Rating (2 Items)",
          "10 to Dexterity (3 Items)"
        ],
        Name: "Arctic Mitts",
        Index: "Arctic Mitts",
        Enabled: true,
        ItemLevel: 3,
        RequiredLevel: 2,
        Code: "tgl",
        Properties: [
          {
            PropertyString: "+10 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "20 to Life",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "9",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "5 to Strength",
        Index: 0
      },
      {
        PropertyString: "50 to Life",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "Adds 6-14 Cold damage",
        Index: 0
      },
      {
        PropertyString: "+1 Cannot Be Frozen",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Arcanna's Tricks",
    Name: "Arcanna's Tricks",
    SetItems: [
      {
        Type: "Amulet",
        "Set": "Arcanna's Tricks",
        SetPropertiesString: [
          "Fire Resist +20% (3 Items)",
          "+50 better chance of getting magic item (2 Items)"
        ],
        Name: "Arcanna's Sign",
        Index: "Arcanna's Sign",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 15,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+15 to Mana",
            Index: 0
          },
          {
            PropertyString: "Regenerate Mana 20%",
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
        Type: "Staff",
        "Set": "Arcanna's Tricks",
        SetPropertiesString: [
          "+50 to Mana (2 Items)",
          "Regenerate Mana 5% (3 Items)"
        ],
        Name: "Arcanna's Deathwand",
        Index: "Arcanna's Deathwand",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 15,
        Code: "wst",
        Properties: [
          {
            PropertyString: "+1",
            Index: 0
          },
          {
            PropertyString: "+25 Deadly Strike",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "12 to 28"
            }
          ],
          EquipmentType: 1,
          Name: "War Staff",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 50,
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
        Type: "Merc Equip",
        "Set": "Arcanna's Tricks",
        SetPropertiesString: [
          "+ Defense (2 Items)",
          "Lightning Resist +15% (3 Items)"
        ],
        Name: "Arcanna's Head",
        Index: "Arcanna's Head",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 15,
        Code: "skp",
        Properties: [
          {
            PropertyString: "+4 Replenish Life",
            Index: 0
          },
          {
            PropertyString: "+2 Attacker Takes Damage of",
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
        "Set": "Arcanna's Tricks",
        SetPropertiesString: [
          "+100 Defense (2 Items)",
          "10 to Energy (3 Items)"
        ],
        Name: "Arcanna's Flesh",
        Index: "Arcanna's Flesh",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 15,
        Code: "ltp",
        Properties: [
          {
            PropertyString: "+3 Damage Reduced by",
            Index: 1
          },
          {
            PropertyString: "2 to Light Radius",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "159-186",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+25 to Mana",
        Index: 0
      },
      {
        PropertyString: "50 to Life",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 0
      },
      {
        PropertyString: "+5 Mana stolen per hit",
        Index: 1
      },
      {
        PropertyString: "+25 to Mana",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Natalya's Odium",
    Name: "Natalya's Odium",
    SetItems: [
      {
        Type: "Merc Equip",
        "Set": "Natalya's Odium",
        SetPropertiesString: [],
        Name: "Natalya's Totem",
        Index: "Natalya's Totem",
        Enabled: true,
        ItemLevel: 22,
        RequiredLevel: 59,
        Code: "xh9",
        Properties: [
          {
            PropertyString: "+135-175 Defense",
            Index: 0
          },
          {
            PropertyString: "10-20 to Strength",
            Index: 2
          },
          {
            PropertyString: "20-30 to Dexterity",
            Index: 1
          },
          {
            PropertyString: "All Resistances +10-20",
            Index: 3
          },
          {
            PropertyString: "+3 Magic Damage Reduced by",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "129",
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
        Type: "Hand to Hand 2",
        "Set": "Natalya's Odium",
        SetPropertiesString: [],
        Name: "Natalya's Mark",
        Index: "Natalya's Mark",
        Enabled: true,
        ItemLevel: 22,
        RequiredLevel: 79,
        Code: "7qr",
        Properties: [
          {
            PropertyString: "+40 Increased Attack Speed",
            Index: 0
          },
          {
            PropertyString: "+200% Enhanced Damage",
            Index: 1
          },
          {
            PropertyString: "+1 Ignore Target's Defense",
            Index: 2
          },
          {
            PropertyString: "+200% Damage to Demons Damage to Demons",
            Index: 6
          },
          {
            PropertyString: "+200% Damage to Undead Damage to Undead",
            Index: 5
          },
          {
            PropertyString: "Adds 12-17 to Fire Damage",
            Index: 4
          },
          {
            PropertyString: "+50 to Minimum Cold Damage",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "120 to 153"
            }
          ],
          EquipmentType: 1,
          Name: "Scissors Suwayyah",
          RequiredStrength: 118,
          RequiredDexterity: 118,
          Durability: 68,
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
        Type: "Armor",
        "Set": "Natalya's Odium",
        SetPropertiesString: [],
        Name: "Natalya's Shadow",
        Index: "Natalya's Shadow",
        Enabled: true,
        ItemLevel: 22,
        RequiredLevel: 73,
        Code: "ucl",
        Properties: [
          {
            PropertyString: "+2 to Shadow Disciplines (Assassin only)",
            Index: 2
          },
          {
            PropertyString: "+150-225 Defense",
            Index: 0
          },
          {
            PropertyString: "to Life",
            Index: 1
          },
          {
            PropertyString: "Poison Resist +25%",
            Index: 4
          },
          {
            PropertyString: "+75 Poison Length Reduced by",
            Index: 3
          },
          {
            PropertyString: "Socketed (1-3)",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1075-1173",
          EquipmentType: 0,
          Name: "Loricated Mail",
          RequiredStrength: 149,
          RequiredDexterity: 0,
          Durability: 36,
          ItemLevel: 73,
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
        "Set": "Natalya's Odium",
        SetPropertiesString: [],
        Name: "Natalya's Soul",
        Index: "Natalya's Soul",
        Enabled: true,
        ItemLevel: 22,
        RequiredLevel: 25,
        Code: "xmb",
        Properties: [
          {
            PropertyString: "+40 Faster Run/Walk",
            Index: 1
          },
          {
            PropertyString: "+75-125 Defense",
            Index: 0
          },
          {
            PropertyString: "+ Heal Stamina Plus",
            Index: 2
          },
          {
            PropertyString: "Cold Resist +15-25%",
            Index: 4
          },
          {
            PropertyString: "Lightning Resist +15-25%",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "23 to 52",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "37",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+15 Magic Damage Reduced by",
        Index: 0
      },
      {
        PropertyString: "+200 Defense",
        Index: 2
      },
      {
        PropertyString: "Poison Resist +20%",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+3",
        Index: 1
      },
      {
        PropertyString: "+14 Mana stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+14 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+150 Defense",
        Index: 2
      },
      {
        PropertyString: "All Resistances +50",
        Index: 0
      },
      {
        PropertyString: "+30 Damage Reduced by 30%%",
        Index: 5
      },
      {
        PropertyString: "Fade",
        Index: 6
      }
    ],
    Level: 1
  },
  {
    Index: "Aldur's Watchtower",
    Name: "Aldur's Watchtower",
    SetItems: [
      {
        Type: "Pelt",
        "Set": "Aldur's Watchtower",
        SetPropertiesString: [
          "15 to Energy (2 Items)",
          "15 to Energy (3 Items)",
          "15 to Energy (4 Items)"
        ],
        Name: "Aldur's Stony Gaze",
        Index: "Aldur's Stony Gaze",
        Enabled: true,
        ItemLevel: 29,
        RequiredLevel: 36,
        Code: "dr8",
        Properties: [
          {
            PropertyString: "+25 Faster Hit Recovery",
            Index: 3
          },
          {
            PropertyString: "+90 Defense",
            Index: 0
          },
          {
            PropertyString: "Regenerate Mana 17%",
            Index: 1
          },
          {
            PropertyString: "Cold Resist +40-50%",
            Index: 4
          },
          {
            PropertyString: "5 to Light Radius",
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
          ArmorString: "157",
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
        Type: "Armor",
        "Set": "Aldur's Watchtower",
        SetPropertiesString: [
          "15 to Vitality (2 Items)",
          "15 to Vitality (3 Items)",
          "15 to Vitality (4 Items)"
        ],
        Name: "Aldur's Deception",
        Index: "Aldur's Deception",
        Enabled: true,
        ItemLevel: 29,
        RequiredLevel: 76,
        Code: "uul",
        Properties: [
          {
            PropertyString: "+1 to Shape Shifting Skills (Druid only)",
            Index: 1
          },
          {
            PropertyString: "+1 to Elemental Skills (Druid only)",
            Index: 6
          },
          {
            PropertyString: "+300 Defense",
            Index: 0
          },
          {
            PropertyString: "20 to Strength",
            Index: 2
          },
          {
            PropertyString: "15 to Dexterity",
            Index: 3
          },
          {
            PropertyString: "Lightning Resist +40-50%",
            Index: 4
          },
          {
            PropertyString: "Requirements -50%",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1072-1162",
          EquipmentType: 0,
          Name: "Shadow Plate",
          RequiredStrength: 230,
          RequiredDexterity: 0,
          Durability: 70,
          ItemLevel: 83,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Mace",
        "Set": "Aldur's Watchtower",
        SetPropertiesString: [
          "15 to Strength (2 Items)",
          "15 to Strength (3 Items)",
          "15 to Strength (4 Items)"
        ],
        Name: "Aldur's Rhythm",
        Index: "Aldur's Gauntlet",
        Enabled: true,
        ItemLevel: 29,
        RequiredLevel: 42,
        Code: "9mt",
        Properties: [
          {
            PropertyString: "+30 Increased Attack Speed",
            Index: 3
          },
          {
            PropertyString: "Adds 40-62 to Damage",
            Index: 0
          },
          {
            PropertyString: "+200% Damage to Demons Damage to Demons",
            Index: 4
          },
          {
            PropertyString: "Adds 50-75 to Lightning Damage",
            Index: 1
          },
          {
            PropertyString: "+5 Mana stolen per hit",
            Index: 5
          },
          {
            PropertyString: "+10 Life stolen per hit",
            Index: 2
          },
          {
            PropertyString: "Socketed (2-5)",
            Index: 6
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "60 to 93"
            }
          ],
          EquipmentType: 1,
          Name: "Jagged Star",
          RequiredStrength: 74,
          RequiredDexterity: 0,
          Durability: 72,
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
        Type: "Boots",
        "Set": "Aldur's Watchtower",
        SetPropertiesString: [
          "15 to Dexterity (2 Items)",
          "15 to Dexterity (3 Items)",
          "15 to Dexterity (4 Items)"
        ],
        Name: "Aldur's Advance",
        Index: "Aldur's Advance",
        Enabled: true,
        ItemLevel: 29,
        RequiredLevel: 45,
        Code: "xtb",
        Properties: [
          {
            PropertyString: "+1 Indestructible",
            Index: 0
          },
          {
            PropertyString: "+40 Faster Run/Walk",
            Index: 4
          },
          {
            PropertyString: "50 to Life",
            Index: 2
          },
          {
            PropertyString: "+32 Heal Stamina Plus",
            Index: 1
          },
          {
            PropertyString: "Fire Resist +40-50%",
            Index: 6
          },
          {
            PropertyString: "10% Damage Taken Goes To Mana",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "37 to 64",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "90-100",
          EquipmentType: 0,
          Name: "Battle Boots",
          RequiredStrength: 95,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 49,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "150 bonus to Attack Rating",
        Index: 0
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 2
      },
      {
        PropertyString: "+10 Life stolen per hit",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+3",
        Index: 1
      },
      {
        PropertyString: "+350% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "+10 Mana stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+150 Defense",
        Index: 2
      },
      {
        PropertyString: "+150 to Mana",
        Index: 4
      },
      {
        PropertyString: "All Resistances +50",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Immortal King",
    Name: "Immortal King",
    SetItems: [
      {
        Type: "Primal Helm",
        "Set": "Immortal King",
        SetPropertiesString: [],
        Name: "Immortal King's Will",
        Index: "Immortal King's Will",
        Enabled: true,
        ItemLevel: 37,
        RequiredLevel: 47,
        Code: "ba5",
        Properties: [
          {
            PropertyString: "+2 to Warcries (Barbarian only)",
            Index: 2
          },
          {
            PropertyString: "+125 Defense",
            Index: 0
          },
          {
            PropertyString: "+37 extra gold from monsters",
            Index: 1
          },
          {
            PropertyString: "+25-40 better chance of getting magic item",
            Index: 4
          },
          {
            PropertyString: "4 to Light Radius",
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
          ArmorString: "160",
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
        Type: "Armor",
        "Set": "Immortal King",
        SetPropertiesString: [
          "+25 Faster Hit Recovery (2 Items)",
          "+50 Enhanced Defense (6 Items)",
          "Cold Resist +40% (3 Items)",
          "Lightning Resist +40% (5 Items)",
          "Fire Resist +40% (4 Items)"
        ],
        Name: "Immortal King's Soul Cage",
        Index: "Immortal King's Soul Cage",
        Enabled: true,
        ItemLevel: 37,
        RequiredLevel: 76,
        Code: "uar",
        Properties: [
          {
            PropertyString: "5% Chance to cast level 5 enchant when struck",
            Index: 1
          },
          {
            PropertyString: "+2 to Masteries (Barbarian only)",
            Index: 2
          },
          {
            PropertyString: "+400 Defense",
            Index: 0
          },
          {
            PropertyString: "Poison Resist +50%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1171-1415",
          EquipmentType: 0,
          Name: "Sacred Armor",
          RequiredStrength: 232,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 85,
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
        "Set": "Immortal King",
        SetPropertiesString: [
          "+2 to Combat Skills (Barbarian only) (6 Items)",
          "+25 Faster Hit Recovery (3 Items)",
          "+100 Enhanced Defense (4 Items)",
          "+105 Defense (2 Items)",
          "+20 Damage Reduced by 20%% (5 Items)"
        ],
        Name: "Immortal King's Detail",
        Index: "Immortal King's Detail",
        Enabled: true,
        ItemLevel: 37,
        RequiredLevel: 29,
        Code: "zhb",
        Properties: [
          {
            PropertyString: "+36 Defense",
            Index: 0
          },
          {
            PropertyString: "25 to Strength",
            Index: 3
          },
          {
            PropertyString: "Lightning Resist +31%",
            Index: 2
          },
          {
            PropertyString: "Fire Resist +28%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "41",
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
        Type: "Gloves",
        "Set": "Immortal King",
        SetPropertiesString: [
          "+25 Increased Attack Speed (2 Items)",
          "+10 Mana stolen per hit (5 Items)",
          "+10 Life stolen per hit (4 Items)",
          "Freezes target +2 (6 Items)",
          "+120 Defense (3 Items)"
        ],
        Name: "Immortal King's Forge",
        Index: "Immortal King's Forge",
        Enabled: true,
        ItemLevel: 37,
        RequiredLevel: 30,
        Code: "xhg",
        Properties: [
          {
            PropertyString: "12% Chance to cast level 4 charged bolt when struck",
            Index: 3
          },
          {
            PropertyString: "+65 Defense",
            Index: 0
          },
          {
            PropertyString: "20 to Strength",
            Index: 1
          },
          {
            PropertyString: "20 to Dexterity",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "121-132",
          EquipmentType: 0,
          Name: "War Gaunlets",
          RequiredStrength: 110,
          RequiredDexterity: 0,
          Durability: 24,
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
        "Set": "Immortal King",
        SetPropertiesString: [
          "+2 to Masteries (Barbarian only) (3 Items)",
          "+160 Defense (4 Items)",
          "+1 Half Freeze Duration (5 Items)",
          "+25 better chance of getting magic item (2 Items)"
        ],
        Name: "Immortal King's Pillar",
        Index: "Immortal King's Pillar",
        Enabled: true,
        ItemLevel: 37,
        RequiredLevel: 31,
        Code: "xhb",
        Properties: [
          {
            PropertyString: "+40 Faster Run/Walk",
            Index: 1
          },
          {
            PropertyString: "110 to Attack Rating",
            Index: 2
          },
          {
            PropertyString: "+75 Defense",
            Index: 0
          },
          {
            PropertyString: "44 to Life",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "39 to 80",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "88-99",
          EquipmentType: 0,
          Name: "War Boots",
          RequiredStrength: 125,
          RequiredDexterity: 0,
          Durability: 24,
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
        Type: "Hammer",
        "Set": "Immortal King",
        SetPropertiesString: [
          "Adds 250-361 Adds 250-361 magic damage (6 Items)",
          "Adds 211-397 to Fire Damage (2 Items)",
          "Adds 7-477 to Lightning Damage (3 Items)",
          "Adds 127-364 to Cold Damage (4 Items)",
          "+349 to Minimum Poison Damage (5 Items)"
        ],
        Name: "Immortal King's Stone Crusher",
        Index: "Immortal King's Stone Crusher",
        Enabled: true,
        ItemLevel: 37,
        RequiredLevel: 76,
        Code: "7m7",
        Properties: [
          {
            PropertyString: "+1 Indestructible",
            Index: 0
          },
          {
            PropertyString: "+40 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+200% Enhanced Damage",
            Index: 5
          },
          {
            PropertyString: "+200% Damage to Demons Damage to Demons",
            Index: 2
          },
          {
            PropertyString: "+200% Damage to Undead Damage to Undead",
            Index: 3
          },
          {
            PropertyString: "+35-40 Chance of Crushing Blow",
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
              DamageString: "231 to 318"
            }
          ],
          EquipmentType: 1,
          Name: "Ogre Maul",
          RequiredStrength: 225,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 69,
          Type: {
            Name: "Hammer",
            Index: "Hammer",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "50 to Attack Rating",
        Index: 0
      },
      {
        PropertyString: "75 to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "125 to Attack Rating",
        Index: 4
      },
      {
        PropertyString: "200 to Attack Rating",
        Index: 6
      }
    ],
    FullProperties: [
      {
        PropertyString: "+3",
        Index: 1
      },
      {
        PropertyString: "150 to Life",
        Index: 2
      },
      {
        PropertyString: "All Resistances +50",
        Index: 0
      },
      {
        PropertyString: "+10 Magic Damage Reduced by",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Tal Rasha's Wrappings",
    Name: "Tal Rasha's Wrappings",
    SetItems: [
      {
        Type: "Belt",
        "Set": "Tal Rasha's Wrappings",
        SetPropertiesString: [
          "+10 Faster Cast Rate (3 Items)",
          "+60 Defense (2 Items)"
        ],
        Name: "Tal Rasha's Fine-Spun Cloth",
        Index: "Tal Rasha's Fire-Spun Cloth",
        Enabled: true,
        ItemLevel: 26,
        RequiredLevel: 53,
        Code: "zmb",
        Properties: [
          {
            PropertyString: "20 to Dexterity",
            Index: 2
          },
          {
            PropertyString: "+30 to Mana",
            Index: 1
          },
          {
            PropertyString: "37% Damage Taken Goes To Mana",
            Index: 3
          },
          {
            PropertyString: "+10-15 better chance of getting magic item",
            Index: 4
          },
          {
            PropertyString: "Requirements -20%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "35",
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
        Type: "Amulet",
        "Set": "Tal Rasha's Wrappings",
        SetPropertiesString: [
          "+10 Faster Cast Rate (4 Items)"
        ],
        Name: "Tal Rasha's Adjudication",
        Index: "Tal Rasha's Adjudication",
        Enabled: true,
        ItemLevel: 26,
        RequiredLevel: 67,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+2",
            Index: 1
          },
          {
            PropertyString: "Adds 3-32 to Lightning Damage",
            Index: 3
          },
          {
            PropertyString: "50 to Life",
            Index: 2
          },
          {
            PropertyString: "+42 to Mana",
            Index: 4
          },
          {
            PropertyString: "Lightning Resist +33%",
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
        Type: "Orb",
        "Set": "Tal Rasha's Wrappings",
        SetPropertiesString: [
          "+1 (2 Items)",
          "15 to Enemy Fire Resistance (3 Items)",
          "15 to Enemy Lightning Resistance (4 Items)",
          "15 to Cold Skill Damage (5 Items)"
        ],
        Name: "Tal Rasha's Lidless Eye",
        Index: "Tal Rasha's Lidless Eye",
        Enabled: true,
        ItemLevel: 26,
        RequiredLevel: 65,
        Code: "oba",
        Properties: [
          {
            PropertyString: "+20 Faster Cast Rate",
            Index: 3
          },
          {
            PropertyString: "+1-2 to Fire Mastery (Sorceress Only)",
            Index: 4
          },
          {
            PropertyString: "+1-2 to Lightning Mastery (Sorceress Only)",
            Index: 5
          },
          {
            PropertyString: "+1-2 to Cold Mastery (Sorceress Only)",
            Index: 6
          },
          {
            PropertyString: "10 to Energy",
            Index: 2
          },
          {
            PropertyString: "57 to Life",
            Index: 0
          },
          {
            PropertyString: "+77 to Mana",
            Index: 1
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
          Durability: 50,
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
        Type: "Armor",
        "Set": "Tal Rasha's Wrappings",
        SetPropertiesString: [
          "+10 Faster Cast Rate (2 Items)"
        ],
        Name: "Tal Rasha's Guardianship",
        Index: "Tal Rasha's Howling Wind",
        Enabled: true,
        ItemLevel: 26,
        RequiredLevel: 71,
        Code: "uth",
        Properties: [
          {
            PropertyString: "+400 Defense",
            Index: 6
          },
          {
            PropertyString: "Cold Resist +40%",
            Index: 3
          },
          {
            PropertyString: "Lightning Resist +40%",
            Index: 5
          },
          {
            PropertyString: "Fire Resist +40%",
            Index: 4
          },
          {
            PropertyString: "+15 Magic Damage Reduced by",
            Index: 1
          },
          {
            PropertyString: "+88 better chance of getting magic item",
            Index: 2
          },
          {
            PropertyString: "Requirements -60%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "433",
          EquipmentType: 0,
          Name: "Lacquered Plate",
          RequiredStrength: 208,
          RequiredDexterity: 0,
          Durability: 55,
          ItemLevel: 82,
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
        "Set": "Tal Rasha's Wrappings",
        SetPropertiesString: [],
        Name: "Tal Rasha's Horadric Crest",
        Index: "Tal Rasha's Horadric Crest",
        Enabled: true,
        ItemLevel: 26,
        RequiredLevel: 66,
        Code: "xsk",
        Properties: [
          {
            PropertyString: "+10 Mana stolen per hit",
            Index: 5
          },
          {
            PropertyString: "+10 Life stolen per hit",
            Index: 4
          },
          {
            PropertyString: "+45 Defense",
            Index: 2
          },
          {
            PropertyString: "60 to Life",
            Index: 1
          },
          {
            PropertyString: "+30 to Mana",
            Index: 0
          },
          {
            PropertyString: "All Resistances +15",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "129-154",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+10 Replenish Life",
        Index: 0
      },
      {
        PropertyString: "+65 better chance of getting magic item",
        Index: 2
      },
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+3",
        Index: 1
      },
      {
        PropertyString: "+150 Defense",
        Index: 2
      },
      {
        PropertyString: "+50 Defense vs. Missile",
        Index: 4
      },
      {
        PropertyString: "150 to Life",
        Index: 3
      },
      {
        PropertyString: "All Resistances +50",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Griswold's Legacy",
    Name: "Griswold's Legacy",
    SetItems: [
      {
        Type: "Merc Equip",
        "Set": "Griswold's Legacy",
        SetPropertiesString: [
          "+2 to Offensive Auras (Paladin only) (2 Items)"
        ],
        Name: "Griswold's Valor",
        Index: "Griswold's Valor",
        Enabled: true,
        ItemLevel: 44,
        RequiredLevel: 69,
        Code: "urn",
        Properties: [
          {
            PropertyString: "+50-75 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "All Resistances +5",
            Index: 5
          },
          {
            PropertyString: "+2 Absorbs Cold Damage",
            Index: 1
          },
          {
            PropertyString: "+20-30 better chance of getting magic item",
            Index: 4
          },
          {
            PropertyString: "Socketed (2)",
            Index: 2
          },
          {
            PropertyString: "Requirements -40%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "263-308",
          EquipmentType: 0,
          Name: "Corona",
          RequiredStrength: 174,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 85,
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
        "Set": "Griswold's Legacy",
        SetPropertiesString: [],
        Name: "Griswold's Heart",
        Index: "Griswold's Heart",
        Enabled: true,
        ItemLevel: 44,
        RequiredLevel: 45,
        Code: "xar",
        Properties: [
          {
            PropertyString: "+2 to Defensive Auras (Paladin only)",
            Index: 1
          },
          {
            PropertyString: "+500 Defense",
            Index: 0
          },
          {
            PropertyString: "20 to Strength",
            Index: 3
          },
          {
            PropertyString: "Socketed (3)",
            Index: 2
          },
          {
            PropertyString: "Requirements -40%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1045-1170",
          EquipmentType: 0,
          Name: "Ornate Plate",
          RequiredStrength: 170,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 64,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Scepter",
        "Set": "Griswold's Legacy",
        SetPropertiesString: [
          "+2 to Combat Skills (Paladin only) (2 Items)",
          "Adds 10-20 to Damage (3 Items)",
          "Adds 10-20 to Damage (4 Items)"
        ],
        Name: "Griswold's Redemption",
        Index: "Griswolds's Redemption",
        Enabled: true,
        ItemLevel: 44,
        RequiredLevel: 53,
        Code: "7ws",
        Properties: [
          {
            PropertyString: "+40 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+200-240% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+200% Damage to Undead Damage to Undead",
            Index: 2
          },
          {
            PropertyString: "Socketed (3-4)",
            Index: 4
          },
          {
            PropertyString: "Requirements -20%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(111-125) to (129-146)"
            }
          ],
          EquipmentType: 1,
          Name: "Caduceus",
          RequiredStrength: 97,
          RequiredDexterity: 70,
          Durability: 70,
          ItemLevel: 85,
          Type: {
            Name: "Scepter",
            Index: "Scepter",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Auric Shields",
        "Set": "Griswold's Legacy",
        SetPropertiesString: [],
        Name: "Griswold's Honor",
        Index: "Griswold's Honor",
        Enabled: true,
        ItemLevel: 44,
        RequiredLevel: 68,
        Code: "paf",
        Properties: [
          {
            PropertyString: "+65 Faster Block Rate",
            Index: 2
          },
          {
            PropertyString: "20% Increased Chance of Blocking",
            Index: 3
          },
          {
            PropertyString: "+108 Defense",
            Index: 0
          },
          {
            PropertyString: "All Resistances +45",
            Index: 4
          },
          {
            PropertyString: "Socketed (3)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "5 to 87",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "290",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "20 to Strength",
        Index: 0
      },
      {
        PropertyString: "30 to Dexterity",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+3",
        Index: 1
      },
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 5
      },
      {
        PropertyString: "200 to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "150 to Life",
        Index: 3
      },
      {
        PropertyString: "All Resistances +50",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Trang-Oul's Avatar",
    Name: "Trang-Oul's Avatar",
    SetItems: [
      {
        Type: "Merc Equip",
        "Set": "Trang-Oul's Avatar",
        SetPropertiesString: [],
        Name: "Trang-Oul's Guise",
        Index: "Trang-Oul's Guise",
        Enabled: true,
        ItemLevel: 32,
        RequiredLevel: 65,
        Code: "uh9",
        Properties: [
          {
            PropertyString: "+25 Faster Hit Recovery",
            Index: 1
          },
          {
            PropertyString: "+80-100 Defense",
            Index: 0
          },
          {
            PropertyString: "+5 Replenish Life",
            Index: 4
          },
          {
            PropertyString: "+150 to Mana",
            Index: 3
          },
          {
            PropertyString: "+20 Attacker Takes Damage of",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "300-400",
          EquipmentType: 0,
          Name: "Bone Visage",
          RequiredStrength: 106,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 84,
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
        "Set": "Trang-Oul's Avatar",
        SetPropertiesString: [
          "Lightning Resist +50% (3 Items)",
          "+25 Damage Reduced by 25%% (5 Items)"
        ],
        Name: "Trang-Oul's Scales",
        Index: "Trang-Oul's Scales",
        Enabled: true,
        ItemLevel: 32,
        RequiredLevel: 49,
        Code: "xul",
        Properties: [
          {
            PropertyString: "+2 to Summoning Skills (Necromancer only)",
            Index: 3
          },
          {
            PropertyString: "+40 Faster Run/Walk",
            Index: 4
          },
          {
            PropertyString: "+150 Enhanced Defense",
            Index: 5
          },
          {
            PropertyString: "+100 Defense vs. Missile",
            Index: 1
          },
          {
            PropertyString: "Poison Resist +40%",
            Index: 2
          },
          {
            PropertyString: "Requirements -40%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "615-715",
          EquipmentType: 0,
          Name: "Chaos Armor",
          RequiredStrength: 140,
          RequiredDexterity: 0,
          Durability: 70,
          ItemLevel: 61,
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
        "Set": "Trang-Oul's Avatar",
        SetPropertiesString: [
          "25 to Enemy Poison Resistance (3 Items)",
          "+15 Replenish Life (4 Items)"
        ],
        Name: "Trang-Oul's Wing",
        Index: "Trang-Oul's Wing",
        Enabled: true,
        ItemLevel: 32,
        RequiredLevel: 54,
        Code: "ne9",
        Properties: [
          {
            PropertyString: "+2 to Poison and Bone Skills (Necromancer only)",
            Index: 6
          },
          {
            PropertyString: "30% Increased Chance of Blocking",
            Index: 4
          },
          {
            PropertyString: "+125 Defense",
            Index: 0
          },
          {
            PropertyString: "25 to Strength",
            Index: 1
          },
          {
            PropertyString: "15 to Dexterity",
            Index: 2
          },
          {
            PropertyString: "Fire Resist +38-45%",
            Index: 3
          },
          {
            PropertyString: "Poison Resist +40%",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "175",
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
        Type: "Gloves",
        "Set": "Trang-Oul's Avatar",
        SetPropertiesString: [],
        Name: "Trang-Oul's Claws",
        Index: "Trang-Oul's Claws",
        Enabled: true,
        ItemLevel: 32,
        RequiredLevel: 45,
        Code: "xmg",
        Properties: [
          {
            PropertyString: "+2 to Curses (Necromancer only)",
            Index: 3
          },
          {
            PropertyString: "+20 Faster Cast Rate",
            Index: 1
          },
          {
            PropertyString: "+30 Defense",
            Index: 0
          },
          {
            PropertyString: "Cold Resist +30%",
            Index: 2
          },
          {
            PropertyString: "25 to Poison Skill Damage",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "37",
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
        Type: "Belt",
        "Set": "Trang-Oul's Avatar",
        SetPropertiesString: [
          "Cold Resist +40% (3 Items)"
        ],
        Name: "Trang-Oul's Girth",
        Index: "Trang-Oul's Girth",
        Enabled: true,
        ItemLevel: 32,
        RequiredLevel: 47,
        Code: "utc",
        Properties: [
          {
            PropertyString: "+75-100 Defense",
            Index: 0
          },
          {
            PropertyString: "66 to Life",
            Index: 3
          },
          {
            PropertyString: "+5 Replenish Life",
            Index: 2
          },
          {
            PropertyString: "+25-50 to Mana",
            Index: 6
          },
          {
            PropertyString: "+1 Cannot Be Frozen",
            Index: 4
          },
          {
            PropertyString: "Requirements -40%",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "126-138",
          EquipmentType: 0,
          Name: "Troll Belt",
          RequiredStrength: 151,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 82,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "Regenerate Mana 15%",
        Index: 0
      },
      {
        PropertyString: "+18 to Fire Ball",
        Index: 1
      },
      {
        PropertyString: "Regenerate Mana 15%",
        Index: 2
      },
      {
        PropertyString: "+13 to Fire Wall",
        Index: 3
      },
      {
        PropertyString: "Regenerate Mana 15%",
        Index: 4
      },
      {
        PropertyString: "+10 to Meteor",
        Index: 5
      }
    ],
    FullProperties: [
      {
        PropertyString: "+3",
        Index: 1
      },
      {
        PropertyString: "+20 Life stolen per hit",
        Index: 7
      },
      {
        PropertyString: "+3 to Fire Mastery",
        Index: 6
      },
      {
        PropertyString: "+200 Defense",
        Index: 3
      },
      {
        PropertyString: "+100 to Mana",
        Index: 2
      },
      {
        PropertyString: "Regenerate Mana 15%",
        Index: 5
      },
      {
        PropertyString: "All Resistances +50",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "M'avina's Battle Hymn",
    Name: "M'avina's Battle Hymn",
    SetItems: [
      {
        Type: "Circlet",
        "Set": "M'avina's Battle Hymn",
        SetPropertiesString: [
          "1 to All Skills (2 Items)",
          "50 bonus to Attack Rating (3 Items)",
          "All Resistances +25 (4 Items)"
        ],
        Name: "M'avina's True Sight",
        Index: "M'avina's True Sight",
        Enabled: true,
        ItemLevel: 21,
        RequiredLevel: 59,
        Code: "ci3",
        Properties: [
          {
            PropertyString: "+30 Increased Attack Speed",
            Index: 2
          },
          {
            PropertyString: "+150 Defense",
            Index: 0
          },
          {
            PropertyString: "+10 Replenish Life",
            Index: 1
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
          ArmorString: "200",
          EquipmentType: 0,
          Name: "Diadem",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 85,
          Type: {
            Name: "Circlet",
            Index: "Circlet",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "M'avina's Battle Hymn",
        SetPropertiesString: [
          "+30 Faster Hit Recovery (3 Items)"
        ],
        Name: "M'avina's Embrace",
        Index: "M'avina's Embrace",
        Enabled: true,
        ItemLevel: 21,
        RequiredLevel: 70,
        Code: "uld",
        Properties: [
          {
            PropertyString: "10% Chance to cast level 3 glacial spike when struck",
            Index: 0
          },
          {
            PropertyString: "+2 to Passive and Magic Skills (Amazon only)",
            Index: 3
          },
          {
            PropertyString: "+ Defense",
            Index: 4
          },
          {
            PropertyString: "+350 Defense",
            Index: 5
          },
          {
            PropertyString: "+5-12 Magic Damage Reduced by",
            Index: 2
          },
          {
            PropertyString: "Requirements -30%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "417",
          EquipmentType: 0,
          Name: "Kraken Shell",
          RequiredStrength: 174,
          RequiredDexterity: 0,
          Durability: 48,
          ItemLevel: 81,
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
        "Set": "M'avina's Battle Hymn",
        SetPropertiesString: [
          "Adds 131-252 to Cold Damage (4 Items)",
          "20 to Cold Skill Damage (5 Items)"
        ],
        Name: "M'avina's Icy Clutch",
        Index: "M'avina's Icy Clutch",
        Enabled: true,
        ItemLevel: 21,
        RequiredLevel: 32,
        Code: "xtg",
        Properties: [
          {
            PropertyString: "Adds 6-18 to Cold Damage",
            Index: 1
          },
          {
            PropertyString: "+45-50 Defense",
            Index: 0
          },
          {
            PropertyString: "10 to Strength",
            Index: 4
          },
          {
            PropertyString: "15 to Dexterity",
            Index: 5
          },
          {
            PropertyString: "+1 Half Freeze Duration",
            Index: 2
          },
          {
            PropertyString: "+56 extra gold from monsters",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "140",
          EquipmentType: 0,
          Name: "Battle Gauntlets",
          RequiredStrength: 88,
          RequiredDexterity: 0,
          Durability: 18,
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
        Type: "Belt",
        "Set": "M'avina's Battle Hymn",
        SetPropertiesString: [
          "All Resistances +25 (4 Items)"
        ],
        Name: "M'avina's Tenet",
        Index: "M'avina's Tenet",
        Enabled: true,
        ItemLevel: 21,
        RequiredLevel: 45,
        Code: "zvb",
        Properties: [
          {
            PropertyString: "+20 Faster Run/Walk",
            Index: 1
          },
          {
            PropertyString: "+5 Mana stolen per hit",
            Index: 2
          },
          {
            PropertyString: "+50 Defense",
            Index: 0
          },
          {
            PropertyString: "5 to Light Radius",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "73-83",
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
        "Set": "M'avina's Battle Hymn",
        SetPropertiesString: [
          "10% Chance to cast level 15 nova on striking (3 Items)",
          "+2 to Bow and Crossbow Skills (Amazon only) (4 Items)",
          "Adds 114-377 Adds 114-377 magic damage (2 Items)"
        ],
        Name: "M'avina's Caster",
        Index: "M'avina's Caster",
        Enabled: true,
        ItemLevel: 21,
        RequiredLevel: 70,
        Code: "amc",
        Properties: [
          {
            PropertyString: "+40 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+188% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+1 Fires Magic Arrows",
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
              DamageString: "40 to 207"
            }
          ],
          EquipmentType: 1,
          Name: "Grand Matron Bow",
          RequiredStrength: 108,
          RequiredDexterity: 152,
          Durability: 0,
          ItemLevel: 78,
          Type: {
            Name: "Amazon Bow",
            Index: "Amazon Bow",
            Class: "ama"
          },
          RequiredClass: "Amazon"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "20 to Strength",
        Index: 0
      },
      {
        PropertyString: "30 to Dexterity",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+3",
        Index: 1
      },
      {
        PropertyString: "100 to Attack Rating",
        Index: 3
      },
      {
        PropertyString: "+100 Defense",
        Index: 2
      },
      {
        PropertyString: "All Resistances +50",
        Index: 0
      },
      {
        PropertyString: "+100 better chance of getting magic item",
        Index: 4
      }
    ],
    Level: 1
  },
  {
    Index: "The Disciple",
    Name: "The Disciple",
    SetItems: [
      {
        Type: "Amulet",
        "Set": "The Disciple",
        SetPropertiesString: [],
        Name: "Telling of Beads",
        Index: "Telling of Beads",
        Enabled: true,
        ItemLevel: 39,
        RequiredLevel: 30,
        Code: "amu",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 1
          },
          {
            PropertyString: "Cold Resist +18%",
            Index: 2
          },
          {
            PropertyString: "Poison Resist +35-50%",
            Index: 0
          },
          {
            PropertyString: "+8-10 Attacker Takes Damage of",
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
        Type: "Gloves",
        "Set": "The Disciple",
        SetPropertiesString: [],
        Name: "Laying of Hands",
        Index: "Laying of Hands",
        Enabled: true,
        ItemLevel: 39,
        RequiredLevel: 63,
        Code: "ulg",
        Properties: [
          {
            PropertyString: "10% Chance to cast level 3 holy bolt on striking",
            Index: 4
          },
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+350% Damage to Demons Damage to Demons",
            Index: 3
          },
          {
            PropertyString: "+25 Defense",
            Index: 0
          },
          {
            PropertyString: "Fire Resist +50%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "204-254",
          EquipmentType: 0,
          Name: "Bramble Mitts",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 57,
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
        "Set": "The Disciple",
        SetPropertiesString: [],
        Name: "Rite of Passage",
        Index: "Rite of Passage",
        Enabled: true,
        ItemLevel: 39,
        RequiredLevel: 29,
        Code: "xlb",
        Properties: [
          {
            PropertyString: "+30 Faster Run/Walk",
            Index: 1
          },
          {
            PropertyString: "+25 Defense",
            Index: 0
          },
          {
            PropertyString: "+1 Half Freeze Duration",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "26 to 46",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "28",
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
        Type: "Armor",
        "Set": "The Disciple",
        SetPropertiesString: [],
        Name: "Dark Adherent",
        Index: "Spiritual Custodian",
        Enabled: true,
        ItemLevel: 39,
        RequiredLevel: 43,
        Code: "uui",
        Properties: [
          {
            PropertyString: "25% Chance to cast level 3 nova when struck",
            Index: 2
          },
          {
            PropertyString: "Adds 125-175 to Poison Damage",
            Index: 3
          },
          {
            PropertyString: "+305-415 Defense",
            Index: 0
          },
          {
            PropertyString: "Fire Resist +24%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "941-1086",
          EquipmentType: 0,
          Name: "Dusk Shroud",
          RequiredStrength: 77,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 65,
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
        "Set": "The Disciple",
        SetPropertiesString: [],
        Name: "Credendum",
        Index: "Credendum",
        Enabled: true,
        ItemLevel: 39,
        RequiredLevel: 65,
        Code: "umc",
        Properties: [
          {
            PropertyString: "+50 Defense",
            Index: 0
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
            PropertyString: "All Resistances +15",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "58",
          EquipmentType: 0,
          Name: "Mithril Coil",
          RequiredStrength: 106,
          RequiredDexterity: 0,
          Durability: 16,
          ItemLevel: 75,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+150 Defense",
        Index: 0
      },
      {
        PropertyString: "+75 to Minimum Poison Damage",
        Index: 2
      },
      {
        PropertyString: "10 to Strength",
        Index: 4
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 6
      }
    ],
    FullProperties: [
      {
        PropertyString: "2 to All Skills",
        Index: 1
      },
      {
        PropertyString: "+100 to Mana",
        Index: 2
      },
      {
        PropertyString: "All Resistances +50",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Heaven's Brethren",
    Name: "Heaven's Brethren",
    SetItems: [
      {
        Type: "Mace",
        "Set": "Heaven's Brethren",
        SetPropertiesString: [],
        Name: "Dangoon's Teaching",
        Index: "Dangoon's Teaching",
        Enabled: true,
        ItemLevel: 55,
        RequiredLevel: 68,
        Code: "7ma",
        Properties: [
          {
            PropertyString: "10% Chance to cast level 3 frost nova on striking",
            Index: 2
          },
          {
            PropertyString: "+40 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+ to Maximum Damage",
            Index: 0
          },
          {
            PropertyString: "+20-30 to Minimum Fire Damage",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "41 to 49"
            }
          ],
          EquipmentType: 1,
          Name: "Reinforced Mace",
          RequiredStrength: 145,
          RequiredDexterity: 46,
          Durability: 60,
          ItemLevel: 63,
          Type: {
            Name: "Mace",
            Index: "Mace",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Heaven's Brethren",
        SetPropertiesString: [],
        Name: "Taebaek's Glory",
        Index: "Heaven's Taebaek",
        Enabled: true,
        ItemLevel: 55,
        RequiredLevel: 81,
        Code: "uts",
        Properties: [
          {
            PropertyString: "+1 Indestructible",
            Index: 4
          },
          {
            PropertyString: "+30 Faster Block Rate",
            Index: 6
          },
          {
            PropertyString: "25% Increased Chance of Blocking",
            Index: 5
          },
          {
            PropertyString: "+50 Defense",
            Index: 0
          },
          {
            PropertyString: "+100 to Mana",
            Index: 1
          },
          {
            PropertyString: "Lightning Resist +30%",
            Index: 2
          },
          {
            PropertyString: "+30 Attacker Takes Damage of",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "11 to 35",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "203",
          EquipmentType: 0,
          Name: "Ward",
          RequiredStrength: 185,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 84,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Heaven's Brethren",
        SetPropertiesString: [],
        Name: "Haemosu's Adamant",
        Index: "Haemosu's Adament",
        Enabled: true,
        ItemLevel: 55,
        RequiredLevel: 44,
        Code: "xrs",
        Properties: [
          {
            PropertyString: "+500 Defense",
            Index: 0
          },
          {
            PropertyString: "+40 Defense vs. Melee",
            Index: 3
          },
          {
            PropertyString: "+35 Defense vs. Missile",
            Index: 1
          },
          {
            PropertyString: "75 to Life",
            Index: 2
          },
          {
            PropertyString: "Requirements -20%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "688",
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
        Type: "Merc Equip",
        "Set": "Heaven's Brethren",
        SetPropertiesString: [],
        Name: "Ondal's Almighty",
        Index: "Ondal's Almighty",
        Enabled: true,
        ItemLevel: 55,
        RequiredLevel: 69,
        Code: "uhm",
        Properties: [
          {
            PropertyString: "10% Chance to cast level 3 weaken on striking",
            Index: 2
          },
          {
            PropertyString: "+24 Faster Hit Recovery",
            Index: 5
          },
          {
            PropertyString: "+50 Defense",
            Index: 0
          },
          {
            PropertyString: "10 to Strength",
            Index: 3
          },
          {
            PropertyString: "15 to Dexterity",
            Index: 4
          },
          {
            PropertyString: "Requirements -40%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "293-327",
          EquipmentType: 0,
          Name: "Spired Helm",
          RequiredStrength: 192,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 79,
          Type: {
            Name: "Merc Equip",
            Index: "Merc Equip",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+50 Heal Stamina Plus",
        Index: 0
      },
      {
        PropertyString: "+20 Replenish Life",
        Index: 2
      },
      {
        PropertyString: "+30 to Minimum Fire Damage",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "2 to All Skills",
        Index: 1
      },
      {
        PropertyString: "All Resistances +50",
        Index: 0
      },
      {
        PropertyString: "+1 Cannot Be Frozen",
        Index: 2
      },
      {
        PropertyString: "5 to Light Radius",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Orphan's Call",
    Name: "Orphan's Call",
    SetItems: [
      {
        Type: "Merc Equip",
        "Set": "Orphan's Call",
        SetPropertiesString: [],
        Name: "Guillaume's Face",
        Index: "Guillaume's Face",
        Enabled: true,
        ItemLevel: 41,
        RequiredLevel: 34,
        Code: "xhm",
        Properties: [
          {
            PropertyString: "+30 Faster Hit Recovery",
            Index: 1
          },
          {
            PropertyString: "+35 Chance of Crushing Blow",
            Index: 2
          },
          {
            PropertyString: "+15 Deadly Strike",
            Index: 3
          },
          {
            PropertyString: "+120 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "15 to Strength",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "189-232",
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
        Type: "Belt",
        "Set": "Orphan's Call",
        SetPropertiesString: [],
        Name: "Wilhelm's Pride",
        Index: "Wilhelm's Pride",
        Enabled: true,
        ItemLevel: 41,
        RequiredLevel: 42,
        Code: "ztb",
        Properties: [
          {
            PropertyString: "+5 Mana stolen per hit",
            Index: 1
          },
          {
            PropertyString: "+5 Life stolen per hit",
            Index: 3
          },
          {
            PropertyString: "+75 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Cold Resist +10%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "66-83",
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
        Type: "Gloves",
        "Set": "Orphan's Call",
        SetPropertiesString: [],
        Name: "Magnus' Skin",
        Index: "Magnus' Skin",
        Enabled: true,
        ItemLevel: 41,
        RequiredLevel: 37,
        Code: "xvg",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 2
          },
          {
            PropertyString: "100 to Attack Rating",
            Index: 4
          },
          {
            PropertyString: "+50 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Fire Resist +15%",
            Index: 1
          },
          {
            PropertyString: "3 to Light Radius",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "51",
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
        Type: "Shield",
        "Set": "Orphan's Call",
        SetPropertiesString: [],
        Name: "Whitstan's Guard",
        Index: "Wihtstan's Guard",
        Enabled: true,
        ItemLevel: 41,
        RequiredLevel: 29,
        Code: "xml",
        Properties: [
          {
            PropertyString: "+40 Faster Block Rate",
            Index: 1
          },
          {
            PropertyString: "55% Increased Chance of Blocking",
            Index: 2
          },
          {
            PropertyString: "+175 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+1 Half Freeze Duration",
            Index: 3
          },
          {
            PropertyString: "5 to Light Radius",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "7 to 14",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "132",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "35 to Life",
        Index: 0
      },
      {
        PropertyString: "+5 Attacker Takes Damage of",
        Index: 2
      },
      {
        PropertyString: "+100 Defense",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+100 Defense",
        Index: 3
      },
      {
        PropertyString: "20 to Strength",
        Index: 2
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 1
      },
      {
        PropertyString: "50 to Life",
        Index: 0
      },
      {
        PropertyString: "All Resistances +15",
        Index: 4
      },
      {
        PropertyString: "+80 better chance of getting magic item",
        Index: 5
      }
    ],
    Level: 1
  },
  {
    Index: "Hwanin's Majesty",
    Name: "Hwanin's Majesty",
    SetItems: [
      {
        Type: "Merc Equip",
        "Set": "Hwanin's Majesty",
        SetPropertiesString: [],
        Name: "Hwanin's Splendor",
        Index: "Hwanin's Splendor",
        Enabled: true,
        ItemLevel: 28,
        RequiredLevel: 45,
        Code: "xrn",
        Properties: [
          {
            PropertyString: "+100 Enhanced Defense",
            Index: 3
          },
          {
            PropertyString: "+20 Replenish Life",
            Index: 0
          },
          {
            PropertyString: "Cold Resist +37%",
            Index: 2
          },
          {
            PropertyString: "+10 Magic Damage Reduced by",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "158",
          EquipmentType: 0,
          Name: "Grand Crown",
          RequiredStrength: 103,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 55,
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
        "Set": "Hwanin's Majesty",
        SetPropertiesString: [],
        Name: "Hwanin's Refuge",
        Index: "Hwanin's Refuge",
        Enabled: true,
        ItemLevel: 28,
        RequiredLevel: 30,
        Code: "xcl",
        Properties: [
          {
            PropertyString: "10% Chance to cast level 3 static field when struck",
            Index: 3
          },
          {
            PropertyString: "+200 Defense",
            Index: 0
          },
          {
            PropertyString: "100 to Life",
            Index: 2
          },
          {
            PropertyString: "Poison Resist +27%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "477-548",
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
        Type: "Belt",
        "Set": "Hwanin's Majesty",
        SetPropertiesString: [],
        Name: "Hwanin's Blessing",
        Index: "Hwanin's Seal",
        Enabled: true,
        ItemLevel: 28,
        RequiredLevel: 35,
        Code: "mbl",
        Properties: [
          {
            PropertyString: "Adds 3-33 to Lightning Damage",
            Index: 0
          },
          {
            PropertyString: "+1 Prevent Monster Heal",
            Index: 1
          },
          {
            PropertyString: "+ Defense",
            Index: 2
          },
          {
            PropertyString: "12% Damage Taken Goes To Mana",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "5",
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
        Type: "Polearm",
        "Set": "Hwanin's Majesty",
        SetPropertiesString: [],
        Name: "Hwanin's Justice",
        Index: "Hwanin's Justice",
        Enabled: true,
        ItemLevel: 28,
        RequiredLevel: 28,
        Code: "9vo",
        Properties: [
          {
            PropertyString: "+1 Indestructible",
            Index: 1
          },
          {
            PropertyString: "10% Chance to cast level 3 ice blast on striking",
            Index: 2
          },
          {
            PropertyString: "+40 Increased Attack Speed",
            Index: 3
          },
          {
            PropertyString: "+200% Enhanced Damage",
            Index: 4
          },
          {
            PropertyString: "330 to Attack Rating",
            Index: 0
          },
          {
            PropertyString: "Adds 5-25 to Lightning Damage",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "42 to 159"
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+100 Defense",
        Index: 0
      },
      {
        PropertyString: "+200 Defense",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+30 Faster Run/Walk",
        Index: 2
      },
      {
        PropertyString: "+20 Life stolen per hit",
        Index: 1
      },
      {
        PropertyString: "All Resistances +30",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Sazabi's Grand Tribute",
    Name: "Sazabi's Grand Tribute",
    SetItems: [
      {
        Type: "Sword",
        "Set": "Sazabi's Grand Tribute",
        SetPropertiesString: [],
        Name: "Sazabi's Cobalt Redeemer",
        Index: "Sazabi's Cobalt Redeemer",
        Enabled: true,
        ItemLevel: 34,
        RequiredLevel: 73,
        Code: "7ls",
        Properties: [
          {
            PropertyString: "+1 Indestructible",
            Index: 4
          },
          {
            PropertyString: "+40 Increased Attack Speed",
            Index: 2
          },
          {
            PropertyString: "+150% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+318% Damage to Demons Damage to Demons",
            Index: 3
          },
          {
            PropertyString: "Adds 25-35 to Cold Damage",
            Index: 1
          },
          {
            PropertyString: "5 to Strength",
            Index: 6
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
              Type: 3,
              DamageString: "12 to 192"
            }
          ],
          EquipmentType: 1,
          Name: "Cryptic Sword",
          RequiredStrength: 99,
          RequiredDexterity: 109,
          Durability: 0,
          ItemLevel: 82,
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
        "Set": "Sazabi's Grand Tribute",
        SetPropertiesString: [],
        Name: "Sazabi's Ghost Liberator",
        Index: "Sazabi's Ghost Liberator",
        Enabled: true,
        ItemLevel: 34,
        RequiredLevel: 67,
        Code: "upl",
        Properties: [
          {
            PropertyString: "+30 Faster Hit Recovery",
            Index: 1
          },
          {
            PropertyString: "300 to Attack Rating against Demons",
            Index: 3
          },
          {
            PropertyString: "+400 Defense",
            Index: 0
          },
          {
            PropertyString: "25 to Strength",
            Index: 2
          },
          {
            PropertyString: "50-75 to Life",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1068-1233",
          EquipmentType: 0,
          Name: "Balrog Skin",
          RequiredStrength: 165,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 76,
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
        "Set": "Sazabi's Grand Tribute",
        SetPropertiesString: [],
        Name: "Sazabi's Mental Sheath",
        Index: "Sazabi's Mental Sheath",
        Enabled: true,
        ItemLevel: 34,
        RequiredLevel: 43,
        Code: "xhl",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 1
          },
          {
            PropertyString: "+100 Defense",
            Index: 0
          },
          {
            PropertyString: "Lightning Resist +15-20%",
            Index: 3
          },
          {
            PropertyString: "Fire Resist +15-20%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "205-228",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+40 Faster Run/Walk",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "+15 Life stolen per hit",
        Index: 1
      },
      {
        PropertyString: "+27 Increase Maximum Life",
        Index: 2
      },
      {
        PropertyString: "All Resistances +30",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Bul-Kathos' Children",
    Name: "Bul-Kathos' Children",
    SetItems: [
      {
        Type: "Sword",
        "Set": "Bul-Kathos' Children",
        SetPropertiesString: [],
        Name: "Bul-Kathos' Sacred Charge",
        Index: "Bul-Kathos' Sacred Charge",
        Enabled: true,
        ItemLevel: 50,
        RequiredLevel: 61,
        Code: "7gd",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 2
          },
          {
            PropertyString: "+200% Enhanced Damage",
            Index: 4
          },
          {
            PropertyString: "+35 Chance of Crushing Blow",
            Index: 0
          },
          {
            PropertyString: "+1 Knockback",
            Index: 3
          },
          {
            PropertyString: "All Resistances +20",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 0,
              DamageString: "75 to 195"
            },
            {
              Type: 1,
              DamageString: "174 to 345"
            }
          ],
          EquipmentType: 1,
          Name: "Colossus Blade",
          RequiredStrength: 189,
          RequiredDexterity: 110,
          Durability: 50,
          ItemLevel: 85,
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
        "Set": "Bul-Kathos' Children",
        SetPropertiesString: [],
        Name: "Bul-Kathos' Tribal Guardian",
        Index: "Bul-Kathos' Tribal Guardian",
        Enabled: true,
        ItemLevel: 50,
        RequiredLevel: 54,
        Code: "7wd",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 2
          },
          {
            PropertyString: "+200% Enhanced Damage",
            Index: 4
          },
          {
            PropertyString: "+255 to Minimum Poison Damage",
            Index: 1
          },
          {
            PropertyString: "20 to Strength",
            Index: 3
          },
          {
            PropertyString: "Fire Resist +50%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "120 to 150"
            }
          ],
          EquipmentType: 1,
          Name: "Mythical Sword",
          RequiredStrength: 147,
          RequiredDexterity: 124,
          Durability: 44,
          ItemLevel: 85,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [],
    FullProperties: [
      {
        PropertyString: "2 to All Skills",
        Index: 1
      },
      {
        PropertyString: "200 to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "+200% Damage to Demons Damage to Demons",
        Index: 5
      },
      {
        PropertyString: "+200% Damage to Undead Damage to Undead",
        Index: 4
      },
      {
        PropertyString: "+20 to Minimum Fire Damage",
        Index: 0
      },
      {
        PropertyString: "+25 Defense",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Cow King's Leathers",
    Name: "Cow King's Leathers",
    SetItems: [
      {
        Type: "Merc Equip",
        "Set": "Cow King's Leathers",
        SetPropertiesString: [],
        Name: "Cow King's Horns",
        Index: "Cow King's Horns",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 25,
        Code: "xap",
        Properties: [
          {
            PropertyString: "+75 Defense",
            Index: 0
          },
          {
            PropertyString: "+1 Half Freeze Duration",
            Index: 1
          },
          {
            PropertyString: "+10 Attacker Takes Damage of",
            Index: 3
          },
          {
            PropertyString: "35% Damage Taken Goes To Mana",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "80-92",
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
        "Set": "Cow King's Leathers",
        SetPropertiesString: [],
        Name: "Cow King's Hide",
        Index: "Cow King's Hide",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 18,
        Code: "stu",
        Properties: [
          {
            PropertyString: "18% Chance to cast level 5 chain lightning when struck",
            Index: 3
          },
          {
            PropertyString: "+60 Enhanced Defense",
            Index: 1
          },
          {
            PropertyString: "30 to Life",
            Index: 2
          },
          {
            PropertyString: "All Resistances +18",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "67-82",
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
        Type: "Boots",
        "Set": "Cow King's Leathers",
        SetPropertiesString: [],
        Name: "Cow King's Hooves",
        Index: "Cow King's Hoofs",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 13,
        Code: "vbt",
        Properties: [
          {
            PropertyString: "+30 Faster Run/Walk",
            Index: 1
          },
          {
            PropertyString: "Adds 25-35 to Fire Damage",
            Index: 4
          },
          {
            PropertyString: "+25-35 Defense",
            Index: 0
          },
          {
            PropertyString: "20 to Dexterity",
            Index: 3
          },
          {
            PropertyString: "+25 better chance of getting magic item",
            Index: 2
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "Poison Resist +25%",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "25% Chance to cast level 5 static field when struck",
        Index: 4
      },
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 5
      },
      {
        PropertyString: "20 to Strength",
        Index: 1
      },
      {
        PropertyString: "+100 extra gold from monsters",
        Index: 2
      },
      {
        PropertyString: "+100 better chance of getting magic item",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Naj's Ancient Set",
    Name: "Naj's Ancient Set",
    SetItems: [
      {
        Type: "Staff",
        "Set": "Naj's Ancient Set",
        SetPropertiesString: [],
        Name: "Naj's Puzzler",
        Index: "Naj's Puzzler",
        Enabled: true,
        ItemLevel: 43,
        RequiredLevel: 78,
        Code: "6cs",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 6
          },
          {
            PropertyString: "+150% Enhanced Damage",
            Index: 1
          },
          {
            PropertyString: "+30 Faster Cast Rate",
            Index: 3
          },
          {
            PropertyString: "Adds 6-45 to Lightning Damage",
            Index: 4
          },
          {
            PropertyString: "35 to Energy",
            Index: 0
          },
          {
            PropertyString: "+70 to Mana",
            Index: 5
          },
          {
            PropertyString: "Level 11 Teleport (69 Charges)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "200 to 232"
            }
          ],
          EquipmentType: 1,
          Name: "Elder Staff",
          RequiredStrength: 44,
          RequiredDexterity: 37,
          Durability: 35,
          ItemLevel: 74,
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
        "Set": "Naj's Ancient Set",
        SetPropertiesString: [],
        Name: "Naj's Light Plate",
        Index: "Naj's Light Plate",
        Enabled: true,
        ItemLevel: 43,
        RequiredLevel: 71,
        Code: "ult",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 4
          },
          {
            PropertyString: "+300 Defense",
            Index: 5
          },
          {
            PropertyString: "65 to Life",
            Index: 1
          },
          {
            PropertyString: "All Resistances +25",
            Index: 2
          },
          {
            PropertyString: "45% Damage Taken Goes To Mana",
            Index: 3
          },
          {
            PropertyString: "Requirements -60%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "844-949",
          EquipmentType: 0,
          Name: "Hellforge Plate",
          RequiredStrength: 196,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 78,
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
        "Set": "Naj's Ancient Set",
        SetPropertiesString: [],
        Name: "Naj's Circlet",
        Index: "Naj's Circlet",
        Enabled: true,
        ItemLevel: 43,
        RequiredLevel: 28,
        Code: "ci0",
        Properties: [
          {
            PropertyString: "12% Chance to cast level 5 chain lightning when struck",
            Index: 4
          },
          {
            PropertyString: "Adds 25-35 to Fire Damage",
            Index: 1
          },
          {
            PropertyString: "+75 Defense",
            Index: 0
          },
          {
            PropertyString: "15 to Strength",
            Index: 3
          },
          {
            PropertyString: "5 to Light Radius",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "20",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+175 Defense",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "20 to Strength",
        Index: 4
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 2
      },
      {
        PropertyString: "+10 Replenish Life",
        Index: 1
      },
      {
        PropertyString: "+100 to Mana",
        Index: 5
      },
      {
        PropertyString: "All Resistances +50",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "McAuley's Folly",
    Name: "McAuley's Folly",
    SetItems: [
      {
        Type: "Merc Equip",
        "Set": "McAuley's Folly",
        SetPropertiesString: [],
        Name: "Sander's Paragon",
        Index: "McAuley's Paragon",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 25,
        Code: "cap",
        Properties: [
          {
            PropertyString: "+ Defense",
            Index: 2
          },
          {
            PropertyString: "+8 Attacker Takes Damage of",
            Index: 1
          },
          {
            PropertyString: "+35 better chance of getting magic item",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
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
        Type: "Boots",
        "Set": "McAuley's Folly",
        SetPropertiesString: [],
        Name: "Sander's Riprap",
        Index: "McAuley's Riprap",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 20,
        Code: "vbt",
        Properties: [
          {
            PropertyString: "+40 Faster Run/Walk",
            Index: 0
          },
          {
            PropertyString: "100 to Attack Rating",
            Index: 1
          },
          {
            PropertyString: "5 to Strength",
            Index: 2
          },
          {
            PropertyString: "10 to Dexterity",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
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
        Type: "Gloves",
        "Set": "McAuley's Folly",
        SetPropertiesString: [],
        Name: "Sander's Taboo",
        Index: "McAuley's Taboo",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 28,
        Code: "vgl",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "Adds 30-36 to Poison Damage",
            Index: 3
          },
          {
            PropertyString: "+20-25 Defense",
            Index: 0
          },
          {
            PropertyString: "40 to Life",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "25-35",
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
        Type: "Wand",
        "Set": "McAuley's Folly",
        SetPropertiesString: [],
        Name: "Sander's Superstition",
        Index: "McAuley's Superstition",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 25,
        Code: "bwn",
        Properties: [
          {
            PropertyString: "+75% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+20 Faster Cast Rate",
            Index: 3
          },
          {
            PropertyString: "Adds 25-75 to Cold Damage",
            Index: 4
          },
          {
            PropertyString: "+8 Mana stolen per hit",
            Index: 2
          },
          {
            PropertyString: "+25 to Mana",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
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
          Durability: 15,
          ItemLevel: 18,
          Type: {
            Name: "Wand",
            Index: "Wand",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+50 Defense",
        Index: 0
      },
      {
        PropertyString: "75 to Attack Rating",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+4 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "+50 to Mana",
        Index: 2
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Midnight Calling",
    Name: "Midnight Calling",
    SetItems: [
      {
        Type: "Hand to Hand",
        "Set": "Midnight Calling",
        SetPropertiesString: [
          "+15 to Minimum Damage (2 Items)"
        ],
        Name: "Jakira's Strike",
        Index: "Jakira's Strike",
        Enabled: true,
        ItemLevel: 10,
        RequiredLevel: 12,
        Code: "axf",
        Properties: [
          {
            PropertyString: "+120% Enhanced Damage",
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
              DamageString: "4 to 33"
            }
          ],
          EquipmentType: 1,
          Name: "Hatchet Hands",
          RequiredStrength: 37,
          RequiredDexterity: 37,
          Durability: 56,
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
        Type: "Gloves",
        "Set": "Midnight Calling",
        SetPropertiesString: [
          "+2 to Traps (Assassin only) (3 Items)"
        ],
        Name: "Jakira's Braces",
        Index: "Jakira's Braces",
        Enabled: true,
        ItemLevel: 10,
        RequiredLevel: 10,
        Code: "mgl",
        Properties: [
          {
            PropertyString: "+10 Increased Attack Speed",
            Index: 0
          },
          {
            PropertyString: "+75 Enhanced Defense",
            Index: 1
          },
          {
            PropertyString: "25-35 to Life",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "15",
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
        Type: "Merc Equip",
        "Set": "Midnight Calling",
        SetPropertiesString: [
          "+6 Magic Damage Reduced by (2 Items)"
        ],
        Name: "Jakira's Hood",
        Index: "Jakira's Hood",
        Enabled: true,
        ItemLevel: 10,
        RequiredLevel: 5,
        Code: "cap",
        Properties: [
          {
            PropertyString: "+1",
            Index: 0
          },
          {
            PropertyString: "+15-25 Defense",
            Index: 1
          },
          {
            PropertyString: "+20-30 to Mana",
            Index: 2
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
        Type: "Armor",
        "Set": "Midnight Calling",
        SetPropertiesString: [
          "+8 Damage Reduced by (3 Items)"
        ],
        Name: "Jakira's Leather Jerkin",
        Index: "Jakira's Leather Jerkin",
        Enabled: true,
        ItemLevel: 10,
        RequiredLevel: 9,
        Code: "stu",
        Properties: [
          {
            PropertyString: "+35-50 Defense",
            Index: 0
          },
          {
            PropertyString: "15 to Strength",
            Index: 2
          },
          {
            PropertyString: "15 to Dexterity",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "67-82",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "10 to Dexterity",
        Index: 0
      },
      {
        PropertyString: "10 to Strength",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1",
        Index: 0
      },
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 2
      },
      {
        PropertyString: "All Resistances +20",
        Index: 3
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Nature's Grove",
    Name: "Nature's Grove",
    SetItems: [
      {
        Type: "Ring",
        "Set": "Nature's Grove",
        SetPropertiesString: [],
        Name: "Peace Ring",
        Index: "Peace Ring",
        Enabled: true,
        ItemLevel: 12,
        RequiredLevel: 12,
        Code: "rin",
        Properties: [
          {
            PropertyString: "40-50 to Life",
            Index: 1
          },
          {
            PropertyString: "+40-50 to Mana",
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
        Type: "Hammer",
        "Set": "Nature's Grove",
        SetPropertiesString: [
          "Adds 10-30 to Cold Damage (2 Items)"
        ],
        Name: "Balance of Power",
        Index: "Balance of Power",
        Enabled: true,
        ItemLevel: 12,
        RequiredLevel: 18,
        Code: "mau",
        Properties: [
          {
            PropertyString: "+15 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+140-200% Enhanced Damage",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(72-90) to (103-129)"
            }
          ],
          EquipmentType: 1,
          Name: "Maul",
          RequiredStrength: 69,
          RequiredDexterity: 0,
          Durability: 60,
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
        Type: "Armor",
        "Set": "Nature's Grove",
        SetPropertiesString: [
          "+3 Replenish Life (3 Items)",
          "Regenerate Mana 75% (4 Items)"
        ],
        Name: "Calming Embrace",
        Index: "Calming Embrace",
        Enabled: true,
        ItemLevel: 12,
        RequiredLevel: 7,
        Code: "hla",
        Properties: [
          {
            PropertyString: "+1-3 to Summoning Skills (Druid only)",
            Index: 1
          },
          {
            PropertyString: "+80-120 Enhanced Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "39-48",
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
        Type: "Pelt",
        "Set": "Nature's Grove",
        SetPropertiesString: [
          "+4 to Shape Shifting (Druid Only) (4 Items)"
        ],
        Name: "Animal Kinship",
        Index: "Animal Kinship",
        Enabled: true,
        ItemLevel: 12,
        RequiredLevel: 15,
        Code: "dr3",
        Properties: [
          {
            PropertyString: "+1",
            Index: 1
          },
          {
            PropertyString: "+30-40 Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "48-58",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "10 to Vitality",
        Index: 0
      },
      {
        PropertyString: "10 to Energy",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1 to Elemental Skills (Druid only)",
        Index: 2
      },
      {
        PropertyString: "+1",
        Index: 0
      },
      {
        PropertyString: "All Resistances +30",
        Index: 3
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Grimlock's Grave",
    Name: "Grimlock's Grave",
    SetItems: [
      {
        Type: "Voodoo Heads",
        "Set": "Grimlock's Grave",
        SetPropertiesString: [
          "+100 Enhanced Defense (2 Items)"
        ],
        Name: "Grimlock's Skull",
        Index: "Grimlock's Skull",
        Enabled: true,
        ItemLevel: 11,
        RequiredLevel: 16,
        Code: "ne2",
        Properties: [
          {
            PropertyString: "+20 Faster Block Rate",
            Index: 1
          },
          {
            PropertyString: "25-30% Increased Chance of Blocking",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "4",
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
        Type: "Wand",
        "Set": "Grimlock's Grave",
        SetPropertiesString: [
          "Adds 8-20 to Damage (3 Items)"
        ],
        Name: "Grimlock's Wand",
        Index: "Grimlock's Wand",
        Enabled: true,
        ItemLevel: 11,
        RequiredLevel: 15,
        Code: "bwn",
        Properties: [
          {
            PropertyString: "+1",
            Index: 0
          },
          {
            PropertyString: "+33 to Mana",
            Index: 1
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
          Durability: 15,
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
        Type: "Armor",
        "Set": "Grimlock's Grave",
        SetPropertiesString: [
          "+77 Defense (2 Items)",
          "Regenerate Mana 40% (3 Items)"
        ],
        Name: "Grimlock's Shroud",
        Index: "Grimlock's Shroud",
        Enabled: true,
        ItemLevel: 11,
        RequiredLevel: 11,
        Code: "qui",
        Properties: [
          {
            PropertyString: "15% Chance to cast level 2 frost nova when struck",
            Index: 1
          },
          {
            PropertyString: "+10 Damage Reduced by 10%%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "8",
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
        "Set": "Grimlock's Grave",
        SetPropertiesString: [
          "+20 Defense (2 Items)"
        ],
        Name: "Grimlock's Belt",
        Index: "Grimlock's Belt",
        Enabled: true,
        ItemLevel: 11,
        RequiredLevel: 9,
        Code: "mbl",
        Properties: [
          {
            PropertyString: "+15 Faster Hit Recovery",
            Index: 1
          },
          {
            PropertyString: "20-25 to Life",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "5",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "10 to Energy",
        Index: 0
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1",
        Index: 0
      },
      {
        PropertyString: "10 to Enemy Poison Resistance",
        Index: 2
      },
      {
        PropertyString: "All Resistances +25",
        Index: 3
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Corgina's Element",
    Name: "Corgina's Element",
    SetItems: [
      {
        Type: "Orb",
        "Set": "Corgina's Element",
        SetPropertiesString: [
          "+1 to Cold Skills (Sorceress only) (2 Items)",
          "+1 to Lightning Skills (Sorceress only) (3 Items)",
          "+1 to Fire Skills (Sorceress only) (4 Items)"
        ],
        Name: "Corgina's Orb",
        Index: "Corgina's Orb",
        Enabled: true,
        ItemLevel: 15,
        RequiredLevel: 15,
        Code: "ob2",
        Properties: [
          {
            PropertyString: "+1",
            Index: 0
          },
          {
            PropertyString: "+2-4 to Mana after each Kill",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "3 to 8"
            }
          ],
          EquipmentType: 1,
          Name: "       ",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 30,
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
        Type: "Armor",
        "Set": "Corgina's Element",
        SetPropertiesString: [
          "+ to Mana (3 Items)",
          "10% Damage Taken Goes To Mana (2 Items)"
        ],
        Name: "Corgina's Plate",
        Index: "Corgina's Plate",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 21,
        Code: "ltp",
        Properties: [
          {
            PropertyString: "+75-105 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "All Resistances +20",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "159-186",
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
        Type: "Shield",
        "Set": "Corgina's Element",
        SetPropertiesString: [
          "+15 Faster Block Rate (2 Items)",
          "Cold Resist +20% (3 Items)",
          "Lightning Resist +20% (4 Items)"
        ],
        Name: "Corgina's Ward",
        Index: "Corgina's Ward",
        Enabled: true,
        ItemLevel: 12,
        RequiredLevel: 14,
        Code: "lrg",
        Properties: [
          {
            PropertyString: "15-25% Increased Chance of Blocking",
            Index: 1
          },
          {
            PropertyString: "+20-30 Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "2 to 4",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "32-42",
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
        "Set": "Corgina's Element",
        SetPropertiesString: [
          "Fire Resist +20% (2 Items)",
          "Poison Resist +20% (3 Items)"
        ],
        Name: "Corgina's Slippers",
        Index: "Corgina's Slippers",
        Enabled: true,
        ItemLevel: 9,
        RequiredLevel: 9,
        Code: "lbt",
        Properties: [
          {
            PropertyString: "+20 Faster Run/Walk",
            Index: 0
          },
          {
            PropertyString: "+20 Faster Hit Recovery",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "3 to 8",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "2",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+60 to Mana",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Cast Rate",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1",
        Index: 0
      },
      {
        PropertyString: "10 to Fire Skill Damage",
        Index: 2
      },
      {
        PropertyString: "10 to Cold Skill Damage",
        Index: 3
      },
      {
        PropertyString: "10 to Lightning Skill Damage",
        Index: 4
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Sheena's Grace",
    Name: "Sheena's Grace",
    SetItems: [
      {
        Type: "Amazon Bow",
        "Set": "Sheena's Grace",
        SetPropertiesString: [
          "+25 Increased Attack Speed (4 Items)"
        ],
        Name: "Sheena's Heartseeker",
        Index: "Sheena's Heartwood",
        Enabled: true,
        ItemLevel: 15,
        RequiredLevel: 15,
        Code: "am1",
        Properties: [
          {
            PropertyString: "Adds 15-30 to Damage",
            Index: 0
          },
          {
            PropertyString: "35-55% Chance of Open Wounds",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "22 to 42"
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
        Type: "Amulet",
        "Set": "Sheena's Grace",
        SetPropertiesString: [
          "All Resistances +12 (3 Items)"
        ],
        Name: "Sheena's Choker",
        Index: "Sheena's Choker",
        Enabled: true,
        ItemLevel: 12,
        RequiredLevel: 12,
        Code: "amu",
        Properties: [
          {
            PropertyString: "1 to All Skills",
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
        Type: "Armor",
        "Set": "Sheena's Grace",
        SetPropertiesString: [
          "+5 Life stolen per hit (4 Items)",
          "+12 Damage Reduced by (2 Items)",
          "+8 Magic Damage Reduced by (3 Items)"
        ],
        Name: "Sheena's Elven Scales",
        Index: "Sheena's Elven Mail",
        Enabled: true,
        ItemLevel: 16,
        RequiredLevel: 14,
        Code: "scl",
        Properties: [
          {
            PropertyString: "+100-150 Defense",
            Index: 0
          },
          {
            PropertyString: "15 to Dexterity",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "157-207",
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
        Type: "Belt",
        "Set": "Sheena's Grace",
        SetPropertiesString: [
          "10 to Vitality (2 Items)"
        ],
        Name: "Sheena's Band",
        Index: "Sheena's Band",
        Enabled: true,
        ItemLevel: 8,
        RequiredLevel: 10,
        Code: "vbl",
        Properties: [
          {
            PropertyString: "+5-10 Increase Maximum Life",
            Index: 0
          },
          {
            PropertyString: "+5-10 to Mana",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "3",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+15 Increased Attack Speed",
        Index: 0
      },
      {
        PropertyString: "30 to Life",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1",
        Index: 0
      },
      {
        PropertyString: "+20 to Maximum Damage",
        Index: 2
      },
      {
        PropertyString: "All Resistances +35",
        Index: 3
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Talonrage's Fury",
    Name: "Talonrage's Fury",
    SetItems: [
      {
        Type: "Primal Helm",
        "Set": "Talonrage's Fury",
        SetPropertiesString: [
          "+1 to Masteries (Barbarian only) (3 Items)"
        ],
        Name: "Berserker's Howl",
        Index: "Berserker's Howl",
        Enabled: true,
        ItemLevel: 18,
        RequiredLevel: 18,
        Code: "ba4",
        Properties: [
          {
            PropertyString: "+1",
            Index: 0
          },
          {
            PropertyString: "+1 to Terror",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "30",
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
        Type: "Armor",
        "Set": "Talonrage's Fury",
        SetPropertiesString: [
          "40 to Life (2 Items)",
          "+10 Damage Reduced by 10%% (4 Items)"
        ],
        Name: "Chaos Heart",
        Index: "Chaos Heart",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 22,
        Code: "fld",
        Properties: [
          {
            PropertyString: "+90-120 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Socketed (2)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "193-224",
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
        Type: "Spear",
        "Set": "Talonrage's Fury",
        SetPropertiesString: [
          "+30 Increased Attack Speed (2 Items)"
        ],
        Name: "Warlord's Pike",
        Index: "Warlord's Pike",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 20,
        Code: "pik",
        Properties: [
          {
            PropertyString: "+110-140% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "Repairs 0.05 durability per second",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(29-33) to (132-151)"
            }
          ],
          EquipmentType: 1,
          Name: "Pike",
          RequiredStrength: 60,
          RequiredDexterity: 45,
          Durability: 25,
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
        Type: "Gloves",
        "Set": "Talonrage's Fury",
        SetPropertiesString: [
          "20 to Strength (3 Items)"
        ],
        Name: "Shattering Fist",
        Index: "Shattering Fist",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 21,
        Code: "hgl",
        Properties: [
          {
            PropertyString: "+10 Chance of Crushing Blow",
            Index: 1
          },
          {
            PropertyString: "+20-30 Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "12",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+5 Replenish Life",
        Index: 0
      },
      {
        PropertyString: "+35% Enhanced Damage",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1",
        Index: 0
      },
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "All Resistances +25",
        Index: 3
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Greyhawk's Mantle",
    Name: "Greyhawk's Mantle",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Greyhawk's Mantle",
        SetPropertiesString: [
          "+3 Replenish Life (4 Items)"
        ],
        Name: "Greyhawk's Wing",
        Index: "Greyhawk's Wing",
        Enabled: true,
        ItemLevel: 17,
        RequiredLevel: 19,
        Code: "plt",
        Properties: [
          {
            PropertyString: "+75-100 Defense",
            Index: 0
          },
          {
            PropertyString: "Lightning Resist +15-20%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "183-208",
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
        Type: "Scepter",
        "Set": "Greyhawk's Mantle",
        SetPropertiesString: [
          "15% Chance to cast level 3 frozen armor when struck (3 Items)"
        ],
        Name: "Greyhawk's Icebrand",
        Index: "Greyhawk's Icebrand",
        Enabled: true,
        ItemLevel: 17,
        RequiredLevel: 14,
        Code: "scp",
        Properties: [
          {
            PropertyString: "+80-120% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "Adds 10-20 to Cold Damage",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(10-13) to (19-24)"
            }
          ],
          EquipmentType: 1,
          Name: "Scepter",
          RequiredStrength: 25,
          RequiredDexterity: 0,
          Durability: 50,
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
        Type: "Auric Shields",
        "Set": "Greyhawk's Mantle",
        SetPropertiesString: [
          "+25 Faster Block Rate (3 Items)"
        ],
        Name: "Greyhawk's Deflector",
        Index: "Greyhawk's Deflector",
        Enabled: true,
        ItemLevel: 17,
        RequiredLevel: 15,
        Code: "pa3",
        Properties: [
          {
            PropertyString: "15% Increased Chance of Blocking",
            Index: 1
          },
          {
            PropertyString: "Socketed (1-4)",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "3 to 9",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "16",
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
        Type: "Merc Equip",
        "Set": "Greyhawk's Mantle",
        SetPropertiesString: [
          "20 to Life (3 Items)"
        ],
        Name: "Greyhawk's Visor",
        Index: "Greyhawk's Viser",
        Enabled: true,
        ItemLevel: 17,
        RequiredLevel: 13,
        Code: "fhl",
        Properties: [
          {
            PropertyString: "Adds 3-5 Mana stolen per hit",
            Index: 1
          },
          {
            PropertyString: "+20-30 Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "43-53",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+8 Life after each Kill",
        Index: 0
      },
      {
        PropertyString: "+4 to Mana after each Kill",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+1",
        Index: 0
      },
      {
        PropertyString: "All Resistances +30",
        Index: 3
      },
      {
        PropertyString: "+60 Poison Length Reduced by",
        Index: 2
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Silent Runnings",
    Name: "Silent Runnings",
    SetItems: [
      {
        Type: "Shield",
        "Set": "Silent Runnings",
        SetPropertiesString: [
          "20% Increased Chance of Blocking (2 Items)"
        ],
        Name: "Dragon's Scale Shield",
        Index: "Dragon Flanks",
        Enabled: true,
        ItemLevel: 14,
        RequiredLevel: 18,
        Code: "bsh",
        Properties: [
          {
            PropertyString: "+65-90 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+5-10 Damage Reduced by 5-10%%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "3 to 6",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "10",
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
        Type: "Gloves",
        "Set": "Silent Runnings",
        SetPropertiesString: [
          "+25 better chance of getting magic item (3 Items)"
        ],
        Name: "Ferrit's Paw",
        Index: "Ferrit's Paw",
        Enabled: true,
        ItemLevel: 12,
        RequiredLevel: 14,
        Code: "vgl",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 0
          },
          {
            PropertyString: "Adds 4-6 Life stolen per hit",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "25-35",
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
        Type: "Armor",
        "Set": "Silent Runnings",
        SetPropertiesString: [
          "+8 Damage Reduced by 8%% (3 Items)"
        ],
        Name: "Turtle's Shell",
        Index: "Turtle's Shell",
        Enabled: true,
        ItemLevel: 22,
        RequiredLevel: 23,
        Code: "ful",
        Properties: [
          {
            PropertyString: "+20 Faster Hit Recovery",
            Index: 1
          },
          {
            PropertyString: "+90-130 Enhanced Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "286-347",
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
        Type: "Belt",
        "Set": "Silent Runnings",
        SetPropertiesString: [
          "+20 Defense (3 Items)"
        ],
        Name: "Wolf Pelt",
        Index: "Wolf Pelt",
        Enabled: true,
        ItemLevel: 14,
        RequiredLevel: 14,
        Code: "tbl",
        Properties: [
          {
            PropertyString: "35-50 to Life",
            Index: 0
          },
          {
            PropertyString: "All Resistances +10-15",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "26-36",
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
        Type: "Merc Equip",
        "Set": "Silent Runnings",
        SetPropertiesString: [],
        Name: "Sabertooth Skull",
        Index: "Beast Collar",
        Enabled: true,
        ItemLevel: 15,
        RequiredLevel: 15,
        Code: "bhm",
        Properties: [
          {
            PropertyString: "+20-30% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "Adds 20-30 Adds 20-30 magic damage",
            Index: 1
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "+20 Faster Block Rate",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "All Resistances +30",
        Index: 1
      },
      {
        PropertyString: "3 to Experience Gained",
        Index: 3
      },
      {
        PropertyString: "+150 extra gold from monsters",
        Index: 4
      },
      {
        PropertyString: "+75 better chance of getting magic item",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Snowmane's Jewelry",
    Name: "Snowmane's Jewelry",
    SetItems: [
      {
        Type: "Circlet",
        "Set": "Snowmane's Jewelry",
        SetPropertiesString: [
          "+15 Faster Hit Recovery (3 Items)",
          "20 to Life (2 Items)"
        ],
        Name: "Jeweled Circlet",
        Index: "Jeweled Circlet",
        Enabled: true,
        ItemLevel: 22,
        RequiredLevel: 22,
        Code: "ci0",
        Properties: [
          {
            PropertyString: "15 to Strength",
            Index: 0
          },
          {
            PropertyString: "15 to Vitality",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "20",
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
        "Set": "Snowmane's Jewelry",
        SetPropertiesString: [
          "+10 Damage Reduced by 10%% (4 Items)"
        ],
        Name: "Jeweled Belt",
        Index: "Jeweled Belt",
        Enabled: true,
        ItemLevel: 22,
        RequiredLevel: 22,
        Code: "hbl",
        Properties: [
          {
            PropertyString: "+100-125 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "All Resistances +10-15",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "18-19",
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
        "Set": "Snowmane's Jewelry",
        SetPropertiesString: [
          "30 to Life (3 Items)",
          "+15 better chance of getting magic item (4 Items)"
        ],
        Name: "Ruby Ring",
        Index: "Ruby Ring",
        Enabled: true,
        ItemLevel: 22,
        RequiredLevel: 22,
        Code: "rin",
        Properties: [
          {
            PropertyString: "All Resistances +10-15",
            Index: 0
          },
          {
            PropertyString: "+6-8 Magic Damage Reduced by",
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
        "Set": "Snowmane's Jewelry",
        SetPropertiesString: [
          "1 to All Skills (3 Items)"
        ],
        Name: "Diamond Necklace",
        Index: "Diamond Necklace",
        Enabled: true,
        ItemLevel: 22,
        RequiredLevel: 22,
        Code: "amu",
        Properties: [
          {
            PropertyString: "All Resistances +15-20",
            Index: 0
          },
          {
            PropertyString: "+20-30 better chance of getting magic item",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+30 better chance of getting magic item",
        Index: 0
      },
      {
        PropertyString: "All Resistances +15",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Run/Walk",
        Index: 3
      },
      {
        PropertyString: "+5 Mana stolen per hit",
        Index: 1
      },
      {
        PropertyString: "+5 Life stolen per hit",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Four Seasons",
    Name: "Four Seasons",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Four Seasons",
        SetPropertiesString: [
          "+10 to Maximum Cold Resist (3 Items)",
          "+10 Cold Absorb (2 Items)",
          "+1 Cannot Be Frozen (4 Items)"
        ],
        Name: "Winter's Heart",
        Index: "Winter's Heart",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 25,
        Code: "aar",
        Properties: [
          {
            PropertyString: "10-15 to Enemy Cold Resistance",
            Index: 0
          },
          {
            PropertyString: "10-15 to Cold Skill Damage",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "218",
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
        Type: "Merc Equip",
        "Set": "Four Seasons",
        SetPropertiesString: [
          "+10 to Maximum Lightning Resist (3 Items)",
          "+10 Lightning Absorb (2 Items)"
        ],
        Name: "Spring Dawning",
        Index: "Spring Dawning",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 22,
        Code: "ghm",
        Properties: [
          {
            PropertyString: "10-15 to Enemy Lightning Resistance",
            Index: 0
          },
          {
            PropertyString: "10-15 to Lightning Skill Damage",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "30",
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
        Type: "Boots",
        "Set": "Four Seasons",
        SetPropertiesString: [
          "+10 to Maximum Fire Resist (3 Items)",
          "+10 Fire Absorb (2 Items)"
        ],
        Name: "Summer Flame",
        Index: "Summer Flame",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 21,
        Code: "hbt",
        Properties: [
          {
            PropertyString: "10-15 to Enemy Fire Resistance",
            Index: 0
          },
          {
            PropertyString: "10-15 to Fire Skill Damage",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "10 to 20",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "12",
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
        Type: "Gloves",
        "Set": "Four Seasons",
        SetPropertiesString: [
          "+10 to Maximum Poison Resist (3 Items)",
          "Magic Resist +10% (2 Items)",
          "+75 Poison Length Reduced by (4 Items)"
        ],
        Name: "Autumn's Decay",
        Index: "Autumn's Decay",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 19,
        Code: "tgl",
        Properties: [
          {
            PropertyString: "10-15 to Enemy Poison Resistance",
            Index: 0
          },
          {
            PropertyString: "10-15 to Poison Skill Damage",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "9",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "10 to Strength",
        Index: 0
      },
      {
        PropertyString: "All Resistances +25",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "15% Chance to cast level 6 charged bolt when struck",
        Index: 2
      },
      {
        PropertyString: "15% Chance to cast level 6 frost nova when struck",
        Index: 3
      },
      {
        PropertyString: "10% Chance to cast level 1 meteor when struck",
        Index: 4
      },
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "All Resistances +30",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Forgotten Treasures",
    Name: "Forgotten Treasures",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Forgotten Treasures",
        SetPropertiesString: [
          "Magic Resist +10% (4 Items)",
          "+15 Damage Reduced by 15%% (6 Items)"
        ],
        Name: "Fernandez' Plate",
        Index: "Fernandez' Plate",
        Enabled: true,
        ItemLevel: 15,
        RequiredLevel: 15,
        Code: "brs",
        Properties: [
          {
            PropertyString: "+75-120 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Socketed (3)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "115-145",
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
        Type: "Merc Equip",
        "Set": "Forgotten Treasures",
        SetPropertiesString: [
          "+30 to Mana (2 Items)",
          "Regenerate Mana 50% (5 Items)"
        ],
        Name: "Katriana's Mask",
        Index: "Katriana's Mask",
        Enabled: true,
        ItemLevel: 15,
        RequiredLevel: 15,
        Code: "msk",
        Properties: [
          {
            PropertyString: "+60-100 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Socketed (3)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "16-20",
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
        Type: "Belt",
        "Set": "Forgotten Treasures",
        SetPropertiesString: [
          "+5 Mana stolen per hit (4 Items)",
          "50 to Life (3 Items)"
        ],
        Name: "Luther's Cord",
        Index: "Luther's Cord",
        Enabled: true,
        ItemLevel: 10,
        RequiredLevel: 10,
        Code: "tbl",
        Properties: [
          {
            PropertyString: "+20-30 Defense",
            Index: 0
          },
          {
            PropertyString: "+2-5 Replenish Life",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "26-36",
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
        Type: "Gloves",
        "Set": "Forgotten Treasures",
        SetPropertiesString: [
          "+5 Life stolen per hit (4 Items)",
          "10 to Strength (6 Items)"
        ],
        Name: "Janis' Gloves",
        Index: "Janis' Gloves",
        Enabled: true,
        ItemLevel: 10,
        RequiredLevel: 10,
        Code: "vgl",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+20-30 Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "25-35",
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
        "Set": "Forgotten Treasures",
        SetPropertiesString: [
          "+20 Faster Hit Recovery (3 Items)",
          "10 to Dexterity (5 Items)"
        ],
        Name: "Xavier's Greaves",
        Index: "Xavier's Greaves",
        Enabled: true,
        ItemLevel: 15,
        RequiredLevel: 15,
        Code: "tbt",
        Properties: [
          {
            PropertyString: "+30 Faster Run/Walk",
            Index: 1
          },
          {
            PropertyString: "+80-110 Enhanced Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "8 to 16",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "18-21",
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
        Type: "Shield",
        "Set": "Forgotten Treasures",
        SetPropertiesString: [
          "+25 Faster Block Rate (2 Items)",
          "20% Increased Chance of Blocking (4 Items)"
        ],
        Name: "Quincy's Shield",
        Index: "Quincy's Shield",
        Enabled: true,
        ItemLevel: 10,
        RequiredLevel: 10,
        Code: "spk",
        Properties: [
          {
            PropertyString: "+100-135 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Socketed (3)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "5 to 9",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "32-37",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "15 to Strength",
        Index: 0
      },
      {
        PropertyString: "15 to Dexterity",
        Index: 2
      },
      {
        PropertyString: "15 to Energy",
        Index: 4
      },
      {
        PropertyString: "15 to Vitality",
        Index: 6
      }
    ],
    FullProperties: [
      {
        PropertyString: "Level 4 Prayer Aura When Equipped",
        Index: 5
      },
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "All Resistances +40",
        Index: 1
      },
      {
        PropertyString: "4 to Experience Gained",
        Index: 3
      },
      {
        PropertyString: "+200 extra gold from monsters",
        Index: 4
      },
      {
        PropertyString: "+100 better chance of getting magic item",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Insight of Brother Laz",
    Name: "Insight of Brother Laz",
    SetItems: [
      {
        Type: "Gloves",
        "Set": "Insight of Brother Laz",
        SetPropertiesString: [
          "15 to Strength (3 Items)"
        ],
        Name: "Mishy's Power",
        Index: "Power of Brother Laz",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 33,
        Code: "xtg",
        Properties: [
          {
            PropertyString: "+10 Increased Attack Speed",
            Index: 0
          },
          {
            PropertyString: "Adds 4-6 Mana stolen per hit",
            Index: 1
          },
          {
            PropertyString: "+80-100 Enhanced Defense",
            Index: 3
          },
          {
            PropertyString: "Fire Resist +15-20%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "140",
          EquipmentType: 0,
          Name: "Battle Gauntlets",
          RequiredStrength: 88,
          RequiredDexterity: 0,
          Durability: 18,
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
        Type: "Auric Shields",
        "Set": "Insight of Brother Laz",
        SetPropertiesString: [
          "7% Chance to cast level 1 frozen orb when struck (5 Items)"
        ],
        Name: "Mishy's Prayer",
        Index: "Prayer of Brother Laz",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 38,
        Code: "pa8",
        Properties: [
          {
            PropertyString: "+20 Faster Hit Recovery",
            Index: 2
          },
          {
            PropertyString: "+20 Faster Block Rate",
            Index: 1
          },
          {
            PropertyString: "20-30% Increased Chance of Blocking",
            Index: 0
          },
          {
            PropertyString: "+ Defense",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "18 to 24",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "129",
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
        Type: "Amulet",
        "Set": "Insight of Brother Laz",
        SetPropertiesString: [
          "9% Chance to cast level 2 mind blast when struck (3 Items)",
          "+25 to Mana (2 Items)"
        ],
        Name: "Mishy's Holy Symbol",
        Index: "Brother Laz' Holy Symbol",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 40,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+1",
            Index: 0
          },
          {
            PropertyString: "25-50 to Life",
            Index: 1
          },
          {
            PropertyString: "Lightning Resist +25-50%",
            Index: 2
          },
          {
            PropertyString: "+60-80 Poison Length Reduced by",
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
        Type: "Scepter",
        "Set": "Insight of Brother Laz",
        SetPropertiesString: [
          "12% Chance to cast level 1 fire wall on striking (3 Items)",
          "+ to Maximum Damage (4 Items)"
        ],
        Name: "Mishy's Holy Pillars",
        Index: "Wrath of Brother Laz",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 29,
        Code: "9sc",
        Properties: [
          {
            PropertyString: "+1",
            Index: 2
          },
          {
            PropertyString: "+160-190% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "Adds 20-40 to Damage",
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
              DamageString: "(53-57) to (102-109)"
            }
          ],
          EquipmentType: 1,
          Name: "Rune Scepter",
          RequiredStrength: 58,
          RequiredDexterity: 0,
          Durability: 50,
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
        Type: "Armor",
        "Set": "Insight of Brother Laz",
        SetPropertiesString: [
          "6% Chance to cast level 2 war cry when struck (4 Items)",
          "+3 Replenish Life (5 Items)"
        ],
        Name: "Mishy's Faith",
        Index: "Brother Laz' Faith",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 36,
        Code: "xld",
        Properties: [
          {
            PropertyString: "+100-200 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Regenerate Mana 50%",
            Index: 3
          },
          {
            PropertyString: "Magic Resist +15-20%",
            Index: 2
          },
          {
            PropertyString: "+15 Damage Reduced by 15%%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "558-631",
          EquipmentType: 0,
          Name: "Sharktooth Armor",
          RequiredStrength: 103,
          RequiredDexterity: 0,
          Durability: 48,
          ItemLevel: 55,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 0
      },
      {
        PropertyString: "20 to Strength",
        Index: 2
      },
      {
        PropertyString: "20 to Dexterity",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "100 to Life",
        Index: 3
      },
      {
        PropertyString: "+50 to Mana",
        Index: 4
      },
      {
        PropertyString: "All Resistances +60",
        Index: 1
      },
      {
        PropertyString: "+ Half Freeze Duration",
        Index: 5
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Hades' Underworld",
    Name: "Hades' Underworld",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Hades' Underworld",
        SetPropertiesString: [
          "+50 to Mana (4 Items)"
        ],
        Name: "Afterlife",
        Index: "Afterlife",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 34,
        Code: "xla",
        Properties: [
          {
            PropertyString: "+1-3 to Summoning Skills (Necromancer only)",
            Index: 1
          },
          {
            PropertyString: "+ Defense",
            Index: 0
          },
          {
            PropertyString: "Lightning Resist +25-40%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "270-369",
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
        Type: "Voodoo Heads",
        "Set": "Hades' Underworld",
        SetPropertiesString: [
          "+20 Damage Reduced by 20%% (4 Items)"
        ],
        Name: "Dracolich",
        Index: "Dracolich",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 36,
        Code: "ne8",
        Properties: [
          {
            PropertyString: "20-30% Increased Chance of Blocking",
            Index: 0
          },
          {
            PropertyString: "+ Defense",
            Index: 1
          },
          {
            PropertyString: "Fire Resist +25-40%",
            Index: 2
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
        Type: "Ring",
        "Set": "Hades' Underworld",
        SetPropertiesString: [],
        Name: "Vampire's Crusade",
        Index: "Vampire's Crusade",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 39,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+10 Faster Cast Rate",
            Index: 1
          },
          {
            PropertyString: "+ to Mana",
            Index: 2
          },
          {
            PropertyString: "Regenerate Mana 50%",
            Index: 0
          },
          {
            PropertyString: "All Resistances +8-15",
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
        Type: "Boots",
        "Set": "Hades' Underworld",
        SetPropertiesString: [
          "+1 Cannot Be Frozen (5 Items)"
        ],
        Name: "The River Stix",
        Index: "The River Stix",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 32,
        Code: "xlb",
        Properties: [
          {
            PropertyString: "+30 Faster Run/Walk",
            Index: 1
          },
          {
            PropertyString: "+ Defense",
            Index: 0
          },
          {
            PropertyString: "Cold Resist +25-40%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "26 to 46",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "28",
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
        Type: "Merc Equip",
        "Set": "Hades' Underworld",
        SetPropertiesString: [
          "+100 extra gold from monsters (3 Items)",
          "+35 better chance of getting magic item (4 Items)"
        ],
        Name: "Throne of Hades'",
        Index: "Lord Hades' Throne",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 41,
        Code: "xrn",
        Properties: [
          {
            PropertyString: "+20 Faster Hit Recovery",
            Index: 1
          },
          {
            PropertyString: "+100 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Poison Resist +25-40%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "158",
          EquipmentType: 0,
          Name: "Grand Crown",
          RequiredStrength: 103,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 55,
          Type: {
            Name: "Merc Equip",
            Index: "Merc Equip",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+2 to Revive",
        Index: 0
      },
      {
        PropertyString: "+7 to Skeleton Mastery",
        Index: 2
      },
      {
        PropertyString: "+4 to Shout",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "+20 Cold Absorb",
        Index: 2
      },
      {
        PropertyString: "+20 Lightning Absorb",
        Index: 3
      },
      {
        PropertyString: "+20 Fire Absorb",
        Index: 1
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 4
      }
    ],
    Level: 1
  },
  {
    Index: "Darque's Cabal",
    Name: "Darque's Cabal",
    SetItems: [
      {
        Type: "Primal Helm",
        "Set": "Darque's Cabal",
        SetPropertiesString: [
          "+15 Increased Attack Speed (4 Items)",
          "+15 to Maximum Damage (2 Items)"
        ],
        Name: "Secret Sociaty",
        Index: "Secret Sociaty",
        Enabled: true,
        ItemLevel: 35,
        RequiredLevel: 40,
        Code: "ba9",
        Properties: [
          {
            PropertyString: "12% Chance to cast level 6 static field when struck",
            Index: 1
          },
          {
            PropertyString: "+1",
            Index: 0
          },
          {
            PropertyString: "+100 Enhanced Defense",
            Index: 3
          },
          {
            PropertyString: "50-70 to Life",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "172",
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
        Type: "Armor",
        "Set": "Darque's Cabal",
        SetPropertiesString: [
          "+100% Damage to Demons Damage to Demons (2 Items)"
        ],
        Name: "Fallen Angels",
        Index: "Fallen Angels",
        Enabled: true,
        ItemLevel: 35,
        RequiredLevel: 43,
        Code: "xth",
        Properties: [
          {
            PropertyString: "+180-220 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "All Resistances +20-30",
            Index: 1
          },
          {
            PropertyString: "Socketed (1)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "792-905",
          EquipmentType: 0,
          Name: "Embossed Plate",
          RequiredStrength: 125,
          RequiredDexterity: 0,
          Durability: 55,
          ItemLevel: 58,
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
        "Set": "Darque's Cabal",
        SetPropertiesString: [
          "+40 Increased Attack Speed (2 Items)",
          "Adds 50-125 to Damage (3 Items)",
          "+1 Prevent Monster Heal (4 Items)"
        ],
        Name: "Savant Fury",
        Index: "Savant Fury",
        Enabled: true,
        ItemLevel: 35,
        RequiredLevel: 42,
        Code: "9gd",
        Properties: [
          {
            PropertyString: "+1 Indestructible",
            Index: 1
          },
          {
            PropertyString: "+220-300% Enhanced Damage",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 0,
              DamageString: "(76-96) to (128-160)"
            },
            {
              Type: 1,
              DamageString: "(150-188) to (256-320)"
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
        Type: "Shield",
        "Set": "Darque's Cabal",
        SetPropertiesString: [
          "+20 Faster Block Rate (3 Items)"
        ],
        Name: "Dawn's Blessing",
        Index: "Dawn's Blessing",
        Enabled: true,
        ItemLevel: 35,
        RequiredLevel: 41,
        Code: "xts",
        Properties: [
          {
            PropertyString: "+35-50% Enhanced Damage",
            Index: 2
          },
          {
            PropertyString: "+25 Faster Hit Recovery",
            Index: 1
          },
          {
            PropertyString: "25-35% Increased Chance of Blocking",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "12 to 16",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "178-194",
          EquipmentType: 0,
          Name: "Ancient Shield",
          RequiredStrength: 110,
          RequiredDexterity: 0,
          Durability: 80,
          ItemLevel: 56,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+200% Damage to Undead Damage to Undead",
        Index: 0
      },
      {
        PropertyString: "+200% Damage to Demons Damage to Demons",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "25 to Strength",
        Index: 2
      },
      {
        PropertyString: "All Resistances +40",
        Index: 1
      },
      {
        PropertyString: "3 to Experience Gained",
        Index: 3
      },
      {
        PropertyString: "+125 better chance of getting magic item",
        Index: 4
      }
    ],
    Level: 1
  },
  {
    Index: "Red Havoc's Challenge",
    Name: "Red Havoc's Challenge",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Red Havoc's Challenge",
        SetPropertiesString: [
          "+ to Maximum Damage (3 Items)"
        ],
        Name: "Werewolf Visage",
        Index: "Cry of the Wolf",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 35,
        Code: "xcl",
        Properties: [
          {
            PropertyString: "+20 Faster Run/Walk",
            Index: 2
          },
          {
            PropertyString: "+ Enhanced Defense",
            Index: 1
          },
          {
            PropertyString: "Level 35 Summon Fenris (8 Charges)",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "477-548",
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
        Type: "Pelt",
        "Set": "Red Havoc's Challenge",
        SetPropertiesString: [
          "+25 better chance of getting magic item (2 Items)"
        ],
        Name: "Full Moon Frenzy",
        Index: "Full Moon Frenzy",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 33,
        Code: "dr6",
        Properties: [
          {
            PropertyString: "+2-3 to Shape Shifting Skills (Druid only)",
            Index: 1
          },
          {
            PropertyString: "+180 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+10 Increase Maximum Life",
            Index: 3
          },
          {
            PropertyString: "Socketed (2)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "148",
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
        Type: "Hammer",
        "Set": "Red Havoc's Challenge",
        SetPropertiesString: [
          "All Resistances +35 (3 Items)"
        ],
        Name: "Torment of Innocence",
        Index: "Torment of Innocence",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 39,
        Code: "9m9",
        Properties: [
          {
            PropertyString: "+50 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+160-200% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "20 bonus to Attack Rating",
            Index: 3
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
              Type: 1,
              DamageString: "(137-159) to (202-234)"
            }
          ],
          EquipmentType: 1,
          Name: "War Club",
          RequiredStrength: 124,
          RequiredDexterity: 0,
          Durability: 60,
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
        Type: "Belt",
        "Set": "Red Havoc's Challenge",
        SetPropertiesString: [
          "+50 to Mana (4 Items)"
        ],
        Name: "Drawing Out the Beast",
        Index: "Drawing Out the Beast",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 32,
        Code: "zlb",
        Properties: [
          {
            PropertyString: "+20 Faster Cast Rate",
            Index: 3
          },
          {
            PropertyString: "+90-110 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "30-40 to Life",
            Index: 1
          },
          {
            PropertyString: "All Resistances +10-15",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "54-63",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+8 to Wearwolf",
        Index: 0
      },
      {
        PropertyString: "+6 to Shape Shifting",
        Index: 1
      },
      {
        PropertyString: "+5 to Fury",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "30 bonus to Attack Rating",
        Index: 2
      },
      {
        PropertyString: "All Resistances +50",
        Index: 1
      },
      {
        PropertyString: "3 to Experience Gained",
        Index: 3
      },
      {
        PropertyString: "+60 better chance of getting magic item",
        Index: 4
      }
    ],
    Level: 1
  },
  {
    Index: "Mishy's Avatar",
    Name: "Mishy's Avatar",
    SetItems: [
      {
        Type: "Boots",
        "Set": "Mishy's Avatar",
        SetPropertiesString: [
          "+20 Faster Hit Recovery (2 Items)"
        ],
        Name: "Elven Grace",
        Index: "Elven Grace",
        Enabled: true,
        ItemLevel: 35,
        RequiredLevel: 32,
        Code: "xvb",
        Properties: [
          {
            PropertyString: "+5-10 to Maximum Damage",
            Index: 3
          },
          {
            PropertyString: "+120-150 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "15 to Dexterity",
            Index: 1
          },
          {
            PropertyString: "Cold Resist +20-30%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "28 to 50",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "68",
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
        Type: "Armor",
        "Set": "Mishy's Avatar",
        SetPropertiesString: [
          "+15 Increased Attack Speed (3 Items)",
          "25 to Life (4 Items)"
        ],
        Name: "Woodland Protector",
        Index: "Woodland Protector",
        Enabled: true,
        ItemLevel: 35,
        RequiredLevel: 35,
        Code: "xhn",
        Properties: [
          {
            PropertyString: "+100-120 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "to Life",
            Index: 2
          },
          {
            PropertyString: "+80 Poison Length Reduced by",
            Index: 3
          },
          {
            PropertyString: "Socketed (2)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "547-646",
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
        Type: "Circlet",
        "Set": "Mishy's Avatar",
        SetPropertiesString: [],
        Name: "Silent Whisper",
        Index: "Silent Whisper",
        Enabled: true,
        ItemLevel: 35,
        RequiredLevel: 40,
        Code: "ci1",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 0
          },
          {
            PropertyString: "+20 Faster Cast Rate",
            Index: 1
          },
          {
            PropertyString: "+5 Mana stolen per hit",
            Index: 3
          },
          {
            PropertyString: "22% Damage Taken Goes To Mana",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "30",
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
        Type: "Ring",
        "Set": "Mishy's Avatar",
        SetPropertiesString: [],
        Name: "Warder's Bond",
        Index: "Warder's Bond",
        Enabled: true,
        ItemLevel: 35,
        RequiredLevel: 38,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+6 Life stolen per hit",
            Index: 1
          },
          {
            PropertyString: "+2 Knockback",
            Index: 3
          },
          {
            PropertyString: "10 to Strength",
            Index: 0
          },
          {
            PropertyString: "+40-50 to Mana",
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
        Type: "Gloves",
        "Set": "Mishy's Avatar",
        SetPropertiesString: [
          "+20 Increased Attack Speed (5 Items)"
        ],
        Name: "Maiden's Touch",
        Index: "Maiden's Kiss",
        Enabled: true,
        ItemLevel: 35,
        RequiredLevel: 33,
        Code: "xmg",
        Properties: [
          {
            PropertyString: "Cold Resist +30-40%",
            Index: 3
          },
          {
            PropertyString: "Lightning Resist +30-40%",
            Index: 1
          },
          {
            PropertyString: "Fire Resist +30-40%",
            Index: 0
          },
          {
            PropertyString: "Poison Resist +30-40%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "37",
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
        Type: "Amazon Bow",
        "Set": "Mishy's Avatar",
        SetPropertiesString: [
          "Adds 25-100 to Fire Damage (6 Items)"
        ],
        Name: "Centaur's Gift",
        Index: "Trent's Caster",
        Enabled: true,
        ItemLevel: 35,
        RequiredLevel: 40,
        Code: "am7",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+170-210% Enhanced Damage",
            Index: 0
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
              Type: 1,
              DamageString: "(51-58) to (110-127)"
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "150 to Attack Rating",
        Index: 0
      },
      {
        PropertyString: "+40% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 4
      },
      {
        PropertyString: "10 to Dexterity",
        Index: 6
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "75 to Life",
        Index: 3
      },
      {
        PropertyString: "All Resistances +50",
        Index: 1
      },
      {
        PropertyString: "3 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 4
      }
    ],
    Level: 1
  },
  {
    Index: "Joel's Sanctuary",
    Name: "Joel's Sanctuary",
    SetItems: [
      {
        Type: "Orb",
        "Set": "Joel's Sanctuary",
        SetPropertiesString: [],
        Name: "Elemental Tempest",
        Index: "Eye of the Trent",
        Enabled: true,
        ItemLevel: 32,
        RequiredLevel: 33,
        Code: "ob8",
        Properties: [
          {
            PropertyString: "Level 4 Cleansing Aura When Equipped",
            Index: 2
          },
          {
            PropertyString: "1 to All Skills",
            Index: 0
          },
          {
            PropertyString: "+20 Faster Cast Rate",
            Index: 1
          },
          {
            PropertyString: "+20 Increase Maximum Mana",
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
          Durability: 35,
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
        Type: "Armor",
        "Set": "Joel's Sanctuary",
        SetPropertiesString: [
          "+5 Replenish Life (4 Items)"
        ],
        Name: "Creeping Lava",
        Index: "Power of Fire",
        Enabled: true,
        ItemLevel: 32,
        RequiredLevel: 33,
        Code: "xui",
        Properties: [
          {
            PropertyString: "10-20 to Fire Skill Damage",
            Index: 1
          },
          {
            PropertyString: "10-20 to Enemy Fire Resistance",
            Index: 2
          },
          {
            PropertyString: "+100-120 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Fire Resist +35-50%",
            Index: 4
          },
          {
            PropertyString: "+10-20 Fire Absorb",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "206-226",
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
        "Set": "Joel's Sanctuary",
        SetPropertiesString: [
          "+1 Half Freeze Duration (3 Items)"
        ],
        Name: "Winter's Blast",
        Index: "Power of Ice",
        Enabled: true,
        ItemLevel: 32,
        RequiredLevel: 33,
        Code: "xap",
        Properties: [
          {
            PropertyString: "10-20 to Cold Skill Damage",
            Index: 1
          },
          {
            PropertyString: "10-20 to Enemy Cold Resistance",
            Index: 2
          },
          {
            PropertyString: "+100-120 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Cold Resist +35-50%",
            Index: 4
          },
          {
            PropertyString: "+10-20 Cold Absorb",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "80-92",
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
        Type: "Shield",
        "Set": "Joel's Sanctuary",
        SetPropertiesString: [
          "20% Increased Chance of Blocking (2 Items)"
        ],
        Name: "Thunder's Calling",
        Index: "Power of Lightning",
        Enabled: true,
        ItemLevel: 32,
        RequiredLevel: 33,
        Code: "xuc",
        Properties: [
          {
            PropertyString: "10-20 to Lightning Skill Damage",
            Index: 1
          },
          {
            PropertyString: "10-20 to Enemy Lightning Resistance",
            Index: 2
          },
          {
            PropertyString: "+100-120 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Lightning Resist +35-50%",
            Index: 4
          },
          {
            PropertyString: "+10-20 Lightning Absorb",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "8 to 12",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "84-92",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+50 to Mana",
        Index: 0
      },
      {
        PropertyString: "Regenerate Mana 50%",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "All Resistances +50",
        Index: 1
      },
      {
        PropertyString: "+7 to Mana after each Kill",
        Index: 4
      },
      {
        PropertyString: "3 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "JBouley's Scion",
    Name: "JBouley's Scion",
    SetItems: [
      {
        Type: "Armor",
        "Set": "JBouley's Scion",
        SetPropertiesString: [],
        Name: "Shadow Ninja",
        Index: "Shadow Ninja",
        Enabled: true,
        ItemLevel: 35,
        RequiredLevel: 35,
        Code: "xtu",
        Properties: [
          {
            PropertyString: "+1 to Dodge",
            Index: 1
          },
          {
            PropertyString: "+1 to Evade",
            Index: 2
          },
          {
            PropertyString: "+1 to Avoid",
            Index: 3
          },
          {
            PropertyString: "+300-400 Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "361-417",
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
        Type: "Gloves",
        "Set": "JBouley's Scion",
        SetPropertiesString: [
          "All Resistances +15 (3 Items)"
        ],
        Name: "Night's Caress",
        Index: "Night's Caress",
        Enabled: true,
        ItemLevel: 35,
        RequiredLevel: 32,
        Code: "xlg",
        Properties: [
          {
            PropertyString: "+2 to Martial Arts (Assassin only)",
            Index: 2
          },
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+ Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "28",
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
        Type: "Hand to Hand 2",
        "Set": "JBouley's Scion",
        SetPropertiesString: [
          "+8 Mana stolen per hit (4 Items)",
          "+8 Life stolen per hit (3 Items)"
        ],
        Name: "Mystic Blades",
        Index: "Mystic Blades",
        Enabled: true,
        ItemLevel: 35,
        RequiredLevel: 39,
        Code: "9qr",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+160-190% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "Socketed (1)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(49-55) to (104-116)"
            }
          ],
          EquipmentType: 1,
          Name: "Scissors Quhab",
          RequiredStrength: 82,
          RequiredDexterity: 82,
          Durability: 68,
          ItemLevel: 54,
          Type: {
            Name: "Hand to Hand 2",
            Index: "Hand to Hand 2",
            Class: "ass"
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "JBouley's Scion",
        SetPropertiesString: [
          "+15 Slows target by (2 Items)"
        ],
        Name: "Fade to Black",
        Index: "Fade to Black",
        Enabled: true,
        ItemLevel: 35,
        RequiredLevel: 38,
        Code: "ztb",
        Properties: [
          {
            PropertyString: "+80 Enhanced Defense",
            Index: 4
          },
          {
            PropertyString: "25 to Life",
            Index: 2
          },
          {
            PropertyString: "+25 to Mana",
            Index: 3
          },
          {
            PropertyString: "All Resistances +15",
            Index: 1
          },
          {
            PropertyString: "Fade",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "66-83",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+33 Deadly Strike",
        Index: 0
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "+2",
        Index: 0
      },
      {
        PropertyString: "100% Chance of Open Wounds",
        Index: 3
      },
      {
        PropertyString: "All Resistances +40",
        Index: 1
      },
      {
        PropertyString: "3 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 4
      }
    ],
    Level: 1
  },
  {
    Index: "Heaven DeClineD",
    Name: "Heaven DeClineD",
    SetItems: [
      {
        Type: "Ring",
        "Set": "Heaven DeClineD",
        SetPropertiesString: [],
        Name: "Fall From Grace",
        Index: "Fall From Grace",
        Enabled: true,
        ItemLevel: 45,
        RequiredLevel: 45,
        Code: "rin",
        Properties: [
          {
            PropertyString: "Adds 4-7 Mana stolen per hit",
            Index: 1
          },
          {
            PropertyString: "Adds 6-9 Life stolen per hit",
            Index: 0
          },
          {
            PropertyString: "35-50 to Life",
            Index: 2
          },
          {
            PropertyString: "+60-80 to Mana",
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
        Type: "Ring",
        "Set": "Heaven DeClineD",
        SetPropertiesString: [],
        Name: "Tyrial's Grief",
        Index: "Tyrial's Grief",
        Enabled: true,
        ItemLevel: 45,
        RequiredLevel: 45,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+20 Faster Cast Rate",
            Index: 2
          },
          {
            PropertyString: "+3-5 Replenish Life",
            Index: 0
          },
          {
            PropertyString: "Regenerate Mana 45%",
            Index: 1
          },
          {
            PropertyString: "+25-35 better chance of getting magic item",
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
        Type: "Amulet",
        "Set": "Heaven DeClineD",
        SetPropertiesString: [],
        Name: "Redemption Denied",
        Index: "Redemption Denied",
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
            PropertyString: "10 to Strength",
            Index: 2
          },
          {
            PropertyString: "All Resistances +15-25",
            Index: 3
          },
          {
            PropertyString: "+40-50 better chance of getting magic item",
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
        Type: "Armor",
        "Set": "Heaven DeClineD",
        SetPropertiesString: [
          "1 to All Skills (4 Items)",
          "+100 extra gold from monsters (2 Items)",
          "+50 better chance of getting magic item (3 Items)"
        ],
        Name: "Hell's Embrace",
        Index: "Hell's Embrace",
        Enabled: true,
        ItemLevel: 45,
        RequiredLevel: 45,
        Code: "xtp",
        Properties: [
          {
            PropertyString: "+160-200 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Socketed (4)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "525-725",
          EquipmentType: 0,
          Name: "Mage Plate",
          RequiredStrength: 55,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 60,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "-3 to Experience Gained",
        Index: 0
      },
      {
        PropertyString: "-5 to Experience Gained",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+50 Increased Attack Speed",
        Index: 4
      },
      {
        PropertyString: "+200% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "All Resistances +25",
        Index: 1
      },
      {
        PropertyString: "-7 to Experience Gained",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Volf's Undead Legion",
    Name: "Volf's Undead Legion",
    SetItems: [
      {
        Type: "Shield",
        "Set": "Volf's Undead Legion",
        SetPropertiesString: [
          "35% Increased Chance of Blocking (2 Items)"
        ],
        Name: "Spectral Knight's Unholy Shield",
        Index: "Spectral Knight's Unholy Shield",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 38,
        Code: "xsh",
        Properties: [
          {
            PropertyString: "+125-155 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "-10 to Life",
            Index: 3
          },
          {
            PropertyString: "All Resistances +20-30",
            Index: 2
          },
          {
            PropertyString: "+15 Damage Reduced by 15%%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "14 to 20",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "89-102",
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
        "Set": "Volf's Undead Legion",
        SetPropertiesString: [
          "+20 Increased Attack Speed (2 Items)",
          "+100% Damage to Demons Damage to Demons (4 Items)"
        ],
        Name: "Death Knight's Demon Blade",
        Index: "Death Knight's Demon Blade",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 37,
        Code: "9bs",
        Properties: [
          {
            PropertyString: "+160-220% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "Adds 20-55 to Damage",
            Index: 1
          },
          {
            PropertyString: "+15 Life stolen per hit",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(61-71) to (143-163)"
            }
          ],
          EquipmentType: 1,
          Name: "Battle Sword",
          RequiredStrength: 92,
          RequiredDexterity: 43,
          Durability: 32,
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
        Type: "Merc Equip",
        "Set": "Volf's Undead Legion",
        SetPropertiesString: [
          "+1 (4 Items)",
          "15 to Strength (3 Items)"
        ],
        Name: "Lich's Evil Grin",
        Index: "Lich's Cranium",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 39,
        Code: "xh9",
        Properties: [
          {
            PropertyString: "+25 Faster Cast Rate",
            Index: 1
          },
          {
            PropertyString: "+60-80 to Mana",
            Index: 0
          },
          {
            PropertyString: "Socketed (1)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "129",
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
        "Set": "Volf's Undead Legion",
        SetPropertiesString: [
          "+ Cannot Be Frozen (4 Items)"
        ],
        Name: "Skeleton Warrior's Corpse Plate",
        Index: "Skeleton Warrior's Corpse Plate",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 42,
        Code: "xlt",
        Properties: [
          {
            PropertyString: "+25 Faster Hit Recovery",
            Index: 2
          },
          {
            PropertyString: "+80-120 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+ Defense",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "632-733",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "-1 Drain Life",
        Index: 0
      },
      {
        PropertyString: "-2 Drain Life",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+300% Damage to Undead Damage to Undead",
        Index: 3
      },
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 4
      },
      {
        PropertyString: "-2 Drain Life",
        Index: 2
      },
      {
        PropertyString: "All Resistances +35",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Legacy of Vashna",
    Name: "Legacy of Vashna",
    SetItems: [
      {
        Type: "Knife",
        "Set": "Legacy of Vashna",
        SetPropertiesString: [
          "+8 Life after each Kill (2 Items)",
          "+5 to Mana after each Kill (3 Items)"
        ],
        Name: "Dagger of Vashna",
        Index: "Dagger of Vashna",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 30,
        Code: "9dg",
        Properties: [
          {
            PropertyString: "+75 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+10 Faster Cast Rate",
            Index: 2
          },
          {
            PropertyString: "Adds 35-70 to Damage",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "41 to 88"
            }
          ],
          EquipmentType: 1,
          Name: "Poignard",
          RequiredStrength: 25,
          RequiredDexterity: 0,
          Durability: 16,
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
        Type: "Merc Equip",
        "Set": "Legacy of Vashna",
        SetPropertiesString: [
          "+5 to Raise Skeleton (2 Items)",
          "+3 to Skeleton Mastery (3 Items)"
        ],
        Name: "Mask of Vashna",
        Index: "Mask of Vashna",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 37,
        Code: "xsk",
        Properties: [
          {
            PropertyString: "+15 Faster Run/Walk",
            Index: 1
          },
          {
            PropertyString: "+10 Faster Cast Rate",
            Index: 2
          },
          {
            PropertyString: "+100-115 Enhanced Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "129-154",
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
        Type: "Armor",
        "Set": "Legacy of Vashna",
        SetPropertiesString: [
          "+1 Prevent Monster Heal (3 Items)"
        ],
        Name: "Robes of Vashna",
        Index: "Robes of Vashna",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 33,
        Code: "xea",
        Properties: [
          {
            PropertyString: "+1",
            Index: 2
          },
          {
            PropertyString: "+50% Damage to Undead Damage to Undead",
            Index: 3
          },
          {
            PropertyString: "+300-400 Defense",
            Index: 1
          },
          {
            PropertyString: "+1 Half Freeze Duration",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "361-461",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+25 better chance of getting magic item",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+15 Mana stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+15 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "All Resistances +50",
        Index: 1
      },
      {
        PropertyString: "-10 Reduces all Vendor Prices",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Salander's Tirade",
    Name: "Salander's Tirade",
    SetItems: [
      {
        Type: "Polearm",
        "Set": "Salander's Tirade",
        SetPropertiesString: [
          "Adds 75-120 to Fire Damage (2 Items)"
        ],
        Name: "Salander's Lance",
        Index: "Lancer's Reach",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 37,
        Code: "9pa",
        Properties: [
          {
            PropertyString: "+30 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+180-240% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+12 Knockback",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(95-115) to (210-255)"
            }
          ],
          EquipmentType: 1,
          Name: "Partizan",
          RequiredStrength: 113,
          RequiredDexterity: 67,
          Durability: 65,
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
        Type: "Armor",
        "Set": "Salander's Tirade",
        SetPropertiesString: [
          "35 to Life (2 Items)"
        ],
        Name: "Salander's Mail",
        Index: "Salander's Mail",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 35,
        Code: "xng",
        Properties: [
          {
            PropertyString: "+25 Faster Hit Recovery",
            Index: 2
          },
          {
            PropertyString: "+120-150 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "All Resistances +15",
            Index: 3
          },
          {
            PropertyString: "Socketed (1)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "365-429",
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
        Type: "Merc Equip",
        "Set": "Salander's Tirade",
        SetPropertiesString: [
          "+35 to Mana (2 Items)"
        ],
        Name: "Salander's Visor",
        Index: "Salander's Visor",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 34,
        Code: "xlm",
        Properties: [
          {
            PropertyString: "+75-120 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+3 to Mana after each Kill",
            Index: 2
          },
          {
            PropertyString: "10% Damage Taken Goes To Mana",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "140-160",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 3
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 1
      },
      {
        PropertyString: "All Resistances +25",
        Index: 2
      },
      {
        PropertyString: "+20 Life after each Kill",
        Index: 4
      }
    ],
    Level: 1
  },
  {
    Index: "Jerik's Dragon Armor",
    Name: "Jerik's Dragon Armor",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Jerik's Dragon Armor",
        SetPropertiesString: [
          "40 to Fire Skill Damage (2 Items)"
        ],
        Name: "Red Dragon Scale Mail",
        Index: "Red Dragon Scale Mail",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 37,
        Code: "xcl",
        Properties: [
          {
            PropertyString: "+ Defense",
            Index: 0
          },
          {
            PropertyString: "+35 Fire Absorb",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "477-548",
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
        Type: "Shield",
        "Set": "Jerik's Dragon Armor",
        SetPropertiesString: [
          "+30 Faster Block Rate (3 Items)",
          "20% Increased Chance of Blocking (2 Items)"
        ],
        Name: "Black Dragon Hide Shield",
        Index: "Black Dragon Hide Shield",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 37,
        Code: "xit",
        Properties: [
          {
            PropertyString: "+100 Enhanced Defense",
            Index: 1
          },
          {
            PropertyString: "All Resistances +60",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "15 to 24",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "135",
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
        Type: "Merc Equip",
        "Set": "Jerik's Dragon Armor",
        SetPropertiesString: [
          "+20 Magic Damage Reduced by (3 Items)"
        ],
        Name: "Green Dragon Mask",
        Index: "Green Dragon Mask",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 40,
        Code: "xhm",
        Properties: [
          {
            PropertyString: "+100-125 Enhanced Defense",
            Index: 2
          },
          {
            PropertyString: "Poison Resist +50%",
            Index: 0
          },
          {
            PropertyString: "+20-25 Damage Reduced by",
            Index: 3
          },
          {
            PropertyString: "+60-90 Poison Length Reduced by",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "189-232",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "All Resistances +15",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "-15 Faster Run/Walk",
        Index: 3
      },
      {
        PropertyString: "+5 to Maximum Fire Resist",
        Index: 4
      },
      {
        PropertyString: "All Resistances +25",
        Index: 1
      },
      {
        PropertyString: "2 to Experience Gained",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Onyx's Primal Rage",
    Name: "Onyx's Primal Rage",
    SetItems: [
      {
        Type: "Boots",
        "Set": "Onyx's Primal Rage",
        SetPropertiesString: [
          "30 to Strength (4 Items)",
          "+15 Damage Reduced by (2 Items)",
          "+15 Magic Damage Reduced by (3 Items)"
        ],
        Name: "Onyx' Demonic Stride",
        Index: "Onyx' Fallen Star",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "uhb",
        Properties: [
          {
            PropertyString: "+25 Faster Run/Walk",
            Index: 2
          },
          {
            PropertyString: "+20 Faster Hit Recovery",
            Index: 3
          },
          {
            PropertyString: "+170-200 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Lightning Resist +25-35%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "83 to 149",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "138-151",
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
        Type: "Sword",
        "Set": "Onyx's Primal Rage",
        SetPropertiesString: [
          "+40 Increased Attack Speed (4 Items)",
          "+7 Mana stolen per hit (2 Items)",
          "+12 Life stolen per hit (3 Items)"
        ],
        Name: "Onyx' Lamant of Innocence",
        Index: "Onyx' Solar Flair",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 69,
        Code: "7b7",
        Properties: [
          {
            PropertyString: "+200-300% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "Adds 75-200 to Damage",
            Index: 1
          },
          {
            PropertyString: "+ Attacker Takes Damage of",
            Index: 2
          },
          {
            PropertyString: "10% Damage Taken Goes To Mana",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 0,
              DamageString: "(147-171) to (362-416)"
            },
            {
              Type: 1,
              DamageString: "(288-359) to (449-532)"
            }
          ],
          EquipmentType: 1,
          Name: "Champion Sword",
          RequiredStrength: 163,
          RequiredDexterity: 103,
          Durability: 40,
          ItemLevel: 77,
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
        "Set": "Onyx's Primal Rage",
        SetPropertiesString: [
          "12% Chance to cast level 19 nova on striking (2 Items)",
          "50 to Life (3 Items)"
        ],
        Name: "Onyx' Shattered Children",
        Index: "Onyx' Super Nova",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 75,
        Code: "7gs",
        Properties: [
          {
            PropertyString: "+30 Increased Attack Speed",
            Index: 2
          },
          {
            PropertyString: "+200-300% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+ to Maximum Damage",
            Index: 1
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
              Type: 0,
              DamageString: "(45-60) to (225-300)"
            },
            {
              Type: 1,
              DamageString: "(165-220) to (354-472)"
            }
          ],
          EquipmentType: 1,
          Name: "Balrog Blade",
          RequiredStrength: 185,
          RequiredDexterity: 87,
          Durability: 50,
          ItemLevel: 71,
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
        "Set": "Onyx's Primal Rage",
        SetPropertiesString: [
          "15% Chance to cast level 7 meteor when struck (3 Items)",
          "+1 (2 Items)"
        ],
        Name: "Onyx' Soul Reaper",
        Index: "Onyx' Meteor Shower",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 80,
        Code: "upl",
        Properties: [
          {
            PropertyString: "+40 Faster Hit Recovery",
            Index: 1
          },
          {
            PropertyString: "+160-200 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+10-15 Increase Maximum Life",
            Index: 2
          },
          {
            PropertyString: "+10-15 Increase Maximum Mana",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1068-1233",
          EquipmentType: 0,
          Name: "Balrog Skin",
          RequiredStrength: 165,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 76,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Primal Helm",
        "Set": "Onyx's Primal Rage",
        SetPropertiesString: [
          "+20 Increased Attack Speed (3 Items)",
          "to Attack Rating (4 Items)",
          "3 to Experience Gained (2 Items)"
        ],
        Name: "Onyx' Visage of Decay",
        Index: "Onyx' Celestial Rage",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 79,
        Code: "baf",
        Properties: [
          {
            PropertyString: "+2",
            Index: 0
          },
          {
            PropertyString: "15-25 to Strength",
            Index: 2
          },
          {
            PropertyString: "+15-20 Damage Reduced by 15-20%%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "117",
          EquipmentType: 0,
          Name: "Guardian Crown",
          RequiredStrength: 196,
          RequiredDexterity: 0,
          Durability: 55,
          ItemLevel: 85,
          Type: {
            Name: "Primal Helm",
            Index: "Primal Helm",
            Class: "bar"
          },
          RequiredClass: "Barbarian"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "All Resistances +25",
        Index: 0
      },
      {
        PropertyString: "2 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "1 to All Skills",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "3 to All Skills",
        Index: 0
      },
      {
        PropertyString: "All Resistances +50",
        Index: 1
      },
      {
        PropertyString: "3 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "+100 better chance of getting magic item",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Brother Laz' Calling",
    Name: "Brother Laz' Calling",
    SetItems: [
      {
        Type: "Merc Equip",
        "Set": "Brother Laz' Calling",
        SetPropertiesString: [
          "+1 (2 Items)",
          "+20 Faster Hit Recovery (3 Items)",
          "3 to Experience Gained (4 Items)"
        ],
        Name: "Spiritual Teachings",
        Index: "Teachings of Brother Laz",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 81,
        Code: "urn",
        Properties: [
          {
            PropertyString: "+100-150 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "All Resistances +20-30",
            Index: 1
          },
          {
            PropertyString: "Socketed (2)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "263-308",
          EquipmentType: 0,
          Name: "Corona",
          RequiredStrength: 174,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 85,
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
        "Set": "Brother Laz' Calling",
        SetPropertiesString: [
          "1 to All Skills (2 Items)",
          "Slain Monsters Rest in Peace (3 Items)",
          "+15 Damage Reduced by 15%% (4 Items)"
        ],
        Name: "Holy Aura",
        Index: "Holy Aura",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 83,
        Code: "uar",
        Properties: [
          {
            PropertyString: "Level 3-5 Salvation Aura When Equipped",
            Index: 1
          },
          {
            PropertyString: "+140-190 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+1 Cannot Be Frozen",
            Index: 2
          },
          {
            PropertyString: "+60-80 Poison Length Reduced by",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1171-1415",
          EquipmentType: 0,
          Name: "Sacred Armor",
          RequiredStrength: 232,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 85,
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
        "Set": "Brother Laz' Calling",
        SetPropertiesString: [
          "+15 to Minimum Damage (3 Items)",
          "+33 to Maximum Damage (2 Items)",
          "Magic Resist +25% (4 Items)"
        ],
        Name: "Retribution",
        Index: "Retribution",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 69,
        Code: "pae",
        Properties: [
          {
            PropertyString: "+60-80% Enhanced Damage",
            Index: 3
          },
          {
            PropertyString: "+40 Faster Block Rate",
            Index: 2
          },
          {
            PropertyString: "33% Increased Chance of Blocking",
            Index: 1
          },
          {
            PropertyString: "+ Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "46",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "169",
          EquipmentType: 0,
          Name: "Zakarum Shield",
          RequiredStrength: 142,
          RequiredDexterity: 0,
          Durability: 65,
          ItemLevel: 82,
          Type: {
            Name: "Auric Shields",
            Index: "Auric Shields",
            Class: "pal"
          },
          RequiredClass: "Paladin"
        }
      },
      {
        Type: "Gloves",
        "Set": "Brother Laz' Calling",
        SetPropertiesString: [
          "10% Chance to cast level 3 amplify damage when struck (2 Items)",
          "All Resistances +15 (3 Items)",
          "+50 better chance of getting magic item (4 Items)"
        ],
        Name: "Salvation and Glory",
        Index: "Glory of Salvation",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "utg",
        Properties: [
          {
            PropertyString: "+20 Faster Cast Rate",
            Index: 0
          },
          {
            PropertyString: "+3 to Salvation",
            Index: 3
          },
          {
            PropertyString: "+75-125 Enhanced Defense",
            Index: 2
          },
          {
            PropertyString: "+60 to Mana",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "168-192",
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
        Type: "Scepter",
        "Set": "Brother Laz' Calling",
        SetPropertiesString: [
          "20% Chance to cast level 8 frost nova on striking (3 Items)",
          "25 to Dexterity (2 Items)"
        ],
        Name: "Angel's Touch",
        Index: "Angel's Touch",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 71,
        Code: "7qs",
        Properties: [
          {
            PropertyString: "+30 Increased Attack Speed",
            Index: 3
          },
          {
            PropertyString: "+220-300% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "Adds 40-120 to Damage",
            Index: 2
          },
          {
            PropertyString: "+300% Damage to Demons Damage to Demons",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(184-220) to (292-336)"
            }
          ],
          EquipmentType: 1,
          Name: "Seraph Rod",
          RequiredStrength: 108,
          RequiredDexterity: 69,
          Durability: 60,
          ItemLevel: 76,
          Type: {
            Name: "Scepter",
            Index: "Scepter",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "15 to Strength",
        Index: 0
      },
      {
        PropertyString: "+33 Chance of Crushing Blow",
        Index: 2
      },
      {
        PropertyString: "1 to All Skills",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "3 to All Skills",
        Index: 0
      },
      {
        PropertyString: "All Resistances +50",
        Index: 1
      },
      {
        PropertyString: "4 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "+75 better chance of getting magic item",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "The Mysterious Spin",
    Name: "The Mysterious Spin",
    SetItems: [
      {
        Type: "Circlet",
        "Set": "The Mysterious Spin",
        SetPropertiesString: [
          "+ Defense (3 Items)",
          "to Life (5 Items)",
          "+ to Mana (5 Items)",
          "All Resistances +15 (2 Items)",
          "All Resistances +15 (3 Items)",
          "+100 extra gold from monsters (4 Items)",
          "+25 better chance of getting magic item (4 Items)"
        ],
        Name: "Spin's Enigma",
        Index: "Spin's Enigma",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 59,
        Code: "ci2",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "40",
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
        Type: "Armor",
        "Set": "The Mysterious Spin",
        SetPropertiesString: [
          "+20 Faster Cast Rate (5 Items)",
          "+20 Faster Hit Recovery (5 Items)",
          "+120 Enhanced Defense (3 Items)",
          "Magic Resist +15% (4 Items)",
          "All Resistances +15 (4 Items)",
          "+15 Damage Reduced by 15%% (2 Items)"
        ],
        Name: "Spin's Paradox",
        Index: "Spin's Paradox",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 68,
        Code: "ula",
        Properties: [
          {
            PropertyString: "2 to All Skills",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "814-925",
          EquipmentType: 0,
          Name: "Scarab Husk",
          RequiredStrength: 95,
          RequiredDexterity: 0,
          Durability: 28,
          ItemLevel: 68,
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
        "Set": "The Mysterious Spin",
        SetPropertiesString: [
          "All Resistances +10 (5 Items)",
          "+10 Cold Absorb (2 Items)",
          "+10 Lightning Absorb (3 Items)",
          "+10 Fire Absorb (4 Items)",
          "+50 Poison Length Reduced by (5 Items)",
          "+25 better chance of getting magic item (4 Items)"
        ],
        Name: "Spin's Mystery",
        Index: "Spin's Mystery",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 63,
        Code: "ulc",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "180-230",
          EquipmentType: 0,
          Name: "Spiderweb Sash",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 61,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      },
      {
        Type: "Shield",
        "Set": "The Mysterious Spin",
        SetPropertiesString: [
          "+40 Faster Block Rate (3 Items)",
          "40% Increased Chance of Blocking (2 Items)",
          "+110 Enhanced Defense (5 Items)",
          "+15 Replenish Life (4 Items)",
          "Regenerate Mana 75% (4 Items)",
          "+15 Damage Reduced by 15%% (5 Items)"
        ],
        Name: "Spin's Conundrum",
        Index: "Spin's Conundrum",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 84,
        Code: "uow",
        Properties: [
          {
            PropertyString: "Requirements -80%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "18 to 28",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "475-529",
          EquipmentType: 0,
          Name: "Aegis",
          RequiredStrength: 219,
          RequiredDexterity: 0,
          Durability: 92,
          ItemLevel: 79,
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
        "Set": "The Mysterious Spin",
        SetPropertiesString: [
          "10 to Fire Skill Damage (2 Items)",
          "10 to Cold Skill Damage (3 Items)",
          "10 to Lightning Skill Damage (4 Items)",
          "Cold Resist +25% (3 Items)",
          "Lightning Resist +25% (4 Items)",
          "Fire Resist +25% (2 Items)"
        ],
        Name: "Spin's Mystification",
        Index: "Spin's Perplexing Puzzle",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "obc",
        Properties: [
          {
            PropertyString: "2 to All Skills",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "18 to 50"
            }
          ],
          EquipmentType: 1,
          Name: "Eldritch Orb",
          RequiredStrength: 0,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 67,
          Type: {
            Name: "Orb",
            Index: "Orb",
            Class: "sor"
          },
          RequiredClass: "Sorceress"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+25 better chance of getting magic item",
        Index: 0
      },
      {
        PropertyString: "+25 better chance of getting magic item",
        Index: 2
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "4 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+15 to Slow Missiles",
        Index: 3
      },
      {
        PropertyString: "All Resistances +50",
        Index: 1
      },
      {
        PropertyString: "5 to Experience Gained",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Darkmage's Astral Projection",
    Name: "Darkmage's Astral Projection",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Darkmage's Astral Projection",
        SetPropertiesString: [
          "All Resistances +15 (4 Items)",
          "+15 Damage Reduced by 15%% (2 Items)"
        ],
        Name: "Darkmage's Falling Star",
        Index: "Dark1",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 73,
        Code: "uhn",
        Properties: [
          {
            PropertyString: "+1 Indestructible",
            Index: 3
          },
          {
            PropertyString: "+150-180 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Socketed (1)",
            Index: 1
          },
          {
            PropertyString: "Ethereal (Cannot Be Repaired)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1000-1160",
          EquipmentType: 0,
          Name: "Boneweave",
          RequiredStrength: 158,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 62,
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
        "Set": "Darkmage's Astral Projection",
        SetPropertiesString: [
          "4% Chance to cast level 20 shock wave when struck (4 Items)",
          "25 to Strength (4 Items)",
          "25 to Dexterity (3 Items)"
        ],
        Name: "Darkmage's Solar Flair",
        Index: "Dark2",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "umg",
        Properties: [
          {
            PropertyString: "+1 Indestructible",
            Index: 3
          },
          {
            PropertyString: "+30 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+125-150 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Ethereal (Cannot Be Repaired)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "59",
          EquipmentType: 0,
          Name: "Vambraces",
          RequiredStrength: 106,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 69,
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
        "Set": "Darkmage's Astral Projection",
        SetPropertiesString: [
          "20% Chance to cast level 14 nova when struck (5 Items)",
          "+6 Mana stolen per hit (4 Items)",
          "+6 Life stolen per hit (2 Items)"
        ],
        Name: "Darkmage's Super Nova",
        Index: "Dark3",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "umb",
        Properties: [
          {
            PropertyString: "+1 Indestructible",
            Index: 3
          },
          {
            PropertyString: "+30 Faster Run/Walk",
            Index: 1
          },
          {
            PropertyString: "+140-170 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Ethereal (Cannot Be Repaired)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "69 to 118",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "108-132",
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
        Type: "Mace",
        "Set": "Darkmage's Astral Projection",
        SetPropertiesString: [
          "8% Chance to cast level 12 meteor on striking (4 Items)",
          "1 to All Skills (3 Items)",
          "+25 Chance of Crushing Blow (5 Items)"
        ],
        Name: "Darkmage's Meteor Shower",
        Index: "Dark4",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 69,
        Code: "7mt",
        Properties: [
          {
            PropertyString: "+1 Indestructible",
            Index: 3
          },
          {
            PropertyString: "+25 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+220-280% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "Ethereal (Cannot Be Repaired)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(137-163) to (169-201)"
            }
          ],
          EquipmentType: 1,
          Name: "Devil Star",
          RequiredStrength: 153,
          RequiredDexterity: 44,
          Durability: 0,
          ItemLevel: 70,
          Type: {
            Name: "Mace",
            Index: "Mace",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Pelt",
        "Set": "Darkmage's Astral Projection",
        SetPropertiesString: [
          "+2 (3 Items)",
          "135 to Life (4 Items)",
          "+75 to Mana (5 Items)"
        ],
        Name: "Darkmage's Celestial Fury",
        Index: "Dark5",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 80,
        Code: "dre",
        Properties: [
          {
            PropertyString: "+1 Indestructible",
            Index: 3
          },
          {
            PropertyString: "+20 Faster Hit Recovery",
            Index: 1
          },
          {
            PropertyString: "+190-220 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Ethereal (Cannot Be Repaired)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "301-332",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "10 to Strength",
        Index: 0
      },
      {
        PropertyString: "20 to Strength",
        Index: 2
      },
      {
        PropertyString: "20 to Strength",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "4 to All Skills",
        Index: 0
      },
      {
        PropertyString: "All Resistances +50",
        Index: 1
      },
      {
        PropertyString: "4 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "+100 better chance of getting magic item",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Phrozen Heart's Mysticism",
    Name: "Phrozen Heart's Mysticism",
    SetItems: [
      {
        Type: "Hand to Hand 2",
        "Set": "Phrozen Heart's Mysticism",
        SetPropertiesString: [
          "+20 Chance of Crushing Blow (3 Items)",
          "+20 Deadly Strike (2 Items)",
          "2 to Experience Gained (4 Items)"
        ],
        Name: "Cryptic Claws",
        Index: "Cryptic Claws",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "7tw",
        Properties: [
          {
            PropertyString: "+200-300% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+11 Life stolen per hit",
            Index: 1
          },
          {
            PropertyString: "+6 Replenish Life",
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
          Durability: 69,
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
        Type: "Armor",
        "Set": "Phrozen Heart's Mysticism",
        SetPropertiesString: [
          "+20 Damage Reduced by 20%% (2 Items)",
          "+1 Cannot Be Frozen (4 Items)",
          "+50 Poison Length Reduced by (3 Items)"
        ],
        Name: "Way of the Shadow",
        Index: "Way of the Shadow",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 71,
        Code: "ung",
        Properties: [
          {
            PropertyString: "+30 Faster Hit Recovery",
            Index: 0
          },
          {
            PropertyString: "+160-200 Enhanced Defense",
            Index: 1
          },
          {
            PropertyString: "75-100 to Life",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1267-1536",
          EquipmentType: 0,
          Name: "Diamond Mail",
          RequiredStrength: 131,
          RequiredDexterity: 0,
          Durability: 26,
          ItemLevel: 72,
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
        "Set": "Phrozen Heart's Mysticism",
        SetPropertiesString: [
          "+20 Increased Attack Speed (2 Items)",
          "+50% Enhanced Damage (3 Items)",
          "15 to Strength (5 Items)",
          "15 to Dexterity (4 Items)"
        ],
        Name: "Dawns Mist",
        Index: "Dawns Mist",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "uvg",
        Properties: [
          {
            PropertyString: "+100-140 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+40-50 to Mana",
            Index: 1
          },
          {
            PropertyString: "All Resistances +10-15",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "108-131",
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
        Type: "Boots",
        "Set": "Phrozen Heart's Mysticism",
        SetPropertiesString: [
          "+15 Kick Damage (5 Items)",
          "+3 to Dodge (2 Items)",
          "+3 to Evade (3 Items)",
          "+3 to Teleport (4 Items)"
        ],
        Name: "Featherfoot",
        Index: "Featherfoot",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 73,
        Code: "ulb",
        Properties: [
          {
            PropertyString: "+40 Faster Run/Walk",
            Index: 2
          },
          {
            PropertyString: "+125-150 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+100-200 Defense",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "65 to 100",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "143-165",
          EquipmentType: 0,
          Name: "Wyrmhide Boots",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 60,
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
        "Set": "Phrozen Heart's Mysticism",
        SetPropertiesString: [
          "+10 Kick Damage (3 Items)",
          "+15 Damage Reduced by 15%% (4 Items)",
          "+50 better chance of getting magic item (2 Items)"
        ],
        Name: "Winter's Discourd",
        Index: "Winter's Discourd",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 75,
        Code: "uvc",
        Properties: [
          {
            PropertyString: "10% Chance to cast level 6 frost nova when struck",
            Index: 1
          },
          {
            PropertyString: "20 bonus to Attack Rating",
            Index: 2
          },
          {
            PropertyString: "+100-120 Enhanced Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "114-125",
          EquipmentType: 0,
          Name: "Vampirefang Belt",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 14,
          ItemLevel: 68,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "1 to All Skills",
        Index: 2
      },
      {
        PropertyString: "1 to All Skills",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "12% Chance to cast level 8 frozen orb when struck",
        Index: 5
      },
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "All Resistances +50",
        Index: 1
      },
      {
        PropertyString: "5 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "+100 better chance of getting magic item",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Chaos Energy",
    Name: "Chaos Energy",
    SetItems: [
      {
        Type: "Amulet",
        "Set": "Chaos Energy",
        SetPropertiesString: [
          "All Resistances +23 (3 Items)",
          "+35 better chance of getting magic item (4 Items)"
        ],
        Name: "Soulstone of Power",
        Index: "Soulstone of Power",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 72,
        Code: "amu",
        Properties: [
          {
            PropertyString: "2 to All Skills",
            Index: 0
          },
          {
            PropertyString: "+35 Faster Cast Rate",
            Index: 1
          },
          {
            PropertyString: "Regenerate Mana 75%",
            Index: 2
          },
          {
            PropertyString: "+10 Damage Reduced by 10%%",
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
        Type: "Merc Equip",
        "Set": "Chaos Energy",
        SetPropertiesString: [
          "+50 to Mana (2 Items)",
          "22% Damage Taken Goes To Mana (5 Items)"
        ],
        Name: "Guiding Focus",
        Index: "Guiding Focus",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 69,
        Code: "ukp",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 2
          },
          {
            PropertyString: "+20 Faster Hit Recovery",
            Index: 1
          },
          {
            PropertyString: "+120-165 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+4-8 to Mana after each Kill",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "224-244",
          EquipmentType: 0,
          Name: "Hydraskull",
          RequiredStrength: 84,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 63,
          Type: {
            Name: "Merc Equip",
            Index: "Merc Equip",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      },
      {
        Type: "Voodoo Heads",
        "Set": "Chaos Energy",
        SetPropertiesString: [
          "+55 to Mana (5 Items)",
          "All Resistances +22 (3 Items)"
        ],
        Name: "Chaotic Shield",
        Index: "Chaotic Shield",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 83,
        Code: "nef",
        Properties: [
          {
            PropertyString: "44% Chance to cast level 17 charged bolt when struck",
            Index: 1
          },
          {
            PropertyString: "+3",
            Index: 0
          },
          {
            PropertyString: "+30 Faster Block Rate",
            Index: 3
          },
          {
            PropertyString: "20-40% Increased Chance of Blocking",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "103",
          EquipmentType: 0,
          Name: "Bloodlord Skull",
          RequiredStrength: 106,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 85,
          Type: {
            Name: "Voodoo Heads",
            Index: "Voodoo Heads",
            Class: "nec"
          },
          RequiredClass: "Necromancer"
        }
      },
      {
        Type: "Boots",
        "Set": "Chaos Energy",
        SetPropertiesString: [
          "+30 Faster Run/Walk (2 Items)",
          "+20 Increased Attack Speed (4 Items)",
          "+25 better chance of getting magic item (3 Items)"
        ],
        Name: "Treads of Energy",
        Index: "Treads of Energy",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "uvb",
        Properties: [
          {
            PropertyString: "+122 +122 magic damage",
            Index: 3
          },
          {
            PropertyString: "Adds 3-6 Mana stolen per hit",
            Index: 2
          },
          {
            PropertyString: "+100 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "to Energy",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "60 to 110",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "131-142",
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
        Type: "Armor",
        "Set": "Chaos Energy",
        SetPropertiesString: [
          "85 to Life (2 Items)",
          "+77 to Mana (4 Items)",
          "Magic Resist +20% (5 Items)"
        ],
        Name: "Secrets of Mysticism",
        Index: "Band of Mysticism",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "urs",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 1
          },
          {
            PropertyString: "+40 Faster Cast Rate",
            Index: 0
          },
          {
            PropertyString: "+20 Increase Maximum Life",
            Index: 3
          },
          {
            PropertyString: "+7-9 Replenish Life",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "995-1195",
          EquipmentType: 0,
          Name: "Great Hauberk",
          RequiredStrength: 118,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 75,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "25 to Energy",
        Index: 0
      },
      {
        PropertyString: "25 to Vitality",
        Index: 2
      },
      {
        PropertyString: "25 to Dexterity",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "4 to All Skills",
        Index: 0
      },
      {
        PropertyString: "25 to Strength",
        Index: 5
      },
      {
        PropertyString: "All Resistances +50",
        Index: 1
      },
      {
        PropertyString: "5 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "+100 better chance of getting magic item",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Aiel Shieldmaiden",
    Name: "Aiel Shieldmaiden",
    SetItems: [
      {
        Type: "Amazon Javelin",
        "Set": "Aiel Shieldmaiden",
        SetPropertiesString: [
          "+2 (3 Items)",
          "+20 Increased Attack Speed (2 Items)"
        ],
        Name: "Chiad's Lances",
        Index: "Chiad's Lances",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 80,
        Code: "amf",
        Properties: [
          {
            PropertyString: "+1-3 to Javelin and Spear Skills (Amazon only)",
            Index: 2
          },
          {
            PropertyString: "+220-250% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+33 Piercing Attack",
            Index: 3
          },
          {
            PropertyString: "Adds 35-70 to Damage",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(131-140) to (242-259)"
            },
            {
              Type: 2,
              DamageString: "(147-157) to (281-301)"
            }
          ],
          EquipmentType: 1,
          Name: "Matriarchal Javelin",
          RequiredStrength: 107,
          RequiredDexterity: 151,
          Durability: 6,
          ItemLevel: 65,
          Type: {
            Name: "Amazon Javelin",
            Index: "Amazon Javelin",
            Class: "ama"
          },
          RequiredClass: "Amazon"
        }
      },
      {
        Type: "Shield",
        "Set": "Aiel Shieldmaiden",
        SetPropertiesString: [
          "All Resistances +25 (4 Items)",
          "+20 Damage Reduced by 20%% (3 Items)"
        ],
        Name: "Chiad's Wall",
        Index: "Chiad's Wall",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 73,
        Code: "uit",
        Properties: [
          {
            PropertyString: "+30 Faster Block Rate",
            Index: 3
          },
          {
            PropertyString: "33% Increased Chance of Blocking",
            Index: 2
          },
          {
            PropertyString: "+180-220 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Requirements -40%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "12 to 34",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "375-428",
          EquipmentType: 0,
          Name: "Monarch",
          RequiredStrength: 156,
          RequiredDexterity: 0,
          Durability: 86,
          ItemLevel: 72,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Aiel Shieldmaiden",
        SetPropertiesString: [
          "75 to Life (4 Items)",
          "+75 to Mana (5 Items)"
        ],
        Name: "Chiad's Heartbane",
        Index: "Chiad's Heartbane",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 75,
        Code: "ucl",
        Properties: [
          {
            PropertyString: "+175-200 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "35 to Dexterity",
            Index: 2
          },
          {
            PropertyString: "Requirements -35%",
            Index: 1
          },
          {
            PropertyString: "20-50",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1075-1173",
          EquipmentType: 0,
          Name: "Loricated Mail",
          RequiredStrength: 149,
          RequiredDexterity: 0,
          Durability: 36,
          ItemLevel: 73,
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
        "Set": "Aiel Shieldmaiden",
        SetPropertiesString: [
          "35 to Life (3 Items)",
          "+20 better chance of getting magic item (2 Items)"
        ],
        Name: "Chiad's Halo",
        Index: "Chiad's Halo",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 71,
        Code: "rin",
        Properties: [
          {
            PropertyString: "Level 4 Holy Freeze Aura When Equipped",
            Index: 3
          },
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 0
          },
          {
            PropertyString: "Adds 6-8 Mana stolen per hit",
            Index: 2
          },
          {
            PropertyString: "Adds 8-12 Life stolen per hit",
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
        Type: "Belt",
        "Set": "Aiel Shieldmaiden",
        SetPropertiesString: [
          "25 to Lightning Skill Damage (3 Items)",
          "+15 Life after each Kill (4 Items)"
        ],
        Name: "Chiad's Valor",
        Index: "Chiad's Valor",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "ulc",
        Properties: [
          {
            PropertyString: "15 to Enemy Lightning Resistance",
            Index: 3
          },
          {
            PropertyString: "+160-200 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "15 to Strength",
            Index: 2
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
          ArmorString: "180-230",
          EquipmentType: 0,
          Name: "Spiderweb Sash",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 61,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+50% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "1 to All Skills",
        Index: 2
      },
      {
        PropertyString: "2 to Experience Gained",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "3 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+100% Enhanced Damage",
        Index: 5
      },
      {
        PropertyString: "All Resistances +50",
        Index: 1
      },
      {
        PropertyString: "4 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "+100 better chance of getting magic item",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Myhrginoc's Warbreeder",
    Name: "Myhrginoc's Warbreeder",
    SetItems: [
      {
        Type: "Axe",
        "Set": "Myhrginoc's Warbreeder",
        SetPropertiesString: [],
        Name: "Myhrginoc's Headhunter",
        Index: "Myhrginoc's Headhunter",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 80,
        Code: "7ga",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 2
          },
          {
            PropertyString: "+280-320% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+ to Maximum Damage",
            Index: 1
          },
          {
            PropertyString: "+1 Prevent Monster Heal",
            Index: 4
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
              Type: 1,
              DamageString: "(224-247) to (357-394)"
            }
          ],
          EquipmentType: 1,
          Name: "Champion Axe",
          RequiredStrength: 167,
          RequiredDexterity: 59,
          Durability: 50,
          ItemLevel: 82,
          Type: {
            Name: "Axe",
            Index: "Axe",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Myhrginoc's Warbreeder",
        SetPropertiesString: [],
        Name: "Myhrginoc's Black Rain",
        Index: "Myhrginoc's Black Rain",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "uul",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 2
          },
          {
            PropertyString: "+170-200 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "All Resistances +20-30",
            Index: 3
          },
          {
            PropertyString: "+15-25 Damage Reduced by 15-25%%",
            Index: 1
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
          ArmorString: "1072-1162",
          EquipmentType: 0,
          Name: "Shadow Plate",
          RequiredStrength: 230,
          RequiredDexterity: 0,
          Durability: 70,
          ItemLevel: 83,
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
        "Set": "Myhrginoc's Warbreeder",
        SetPropertiesString: [],
        Name: "Myhrginoc's Crimson Crusader",
        Index: "Myhrginoc's Crimson Crusader",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "ulm",
        Properties: [
          {
            PropertyString: "12% Chance to cast level 4 war cry when struck",
            Index: 3
          },
          {
            PropertyString: "+ Defense",
            Index: 0
          },
          {
            PropertyString: "+10 Increase Maximum Life",
            Index: 1
          },
          {
            PropertyString: "+10 Increase Maximum Mana",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "255-305",
          EquipmentType: 0,
          Name: "Armet",
          RequiredStrength: 109,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 68,
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
        "Set": "Myhrginoc's Warbreeder",
        SetPropertiesString: [
          "+22 Chance of Crushing Blow (2 Items)",
          "+16 Deadly Strike (3 Items)"
        ],
        Name: "Myhrginoc's Deathmonger",
        Index: "Myhrginoc's Deathmonger",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 79,
        Code: "uhg",
        Properties: [
          {
            PropertyString: "+15 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+30-40% Enhanced Damage",
            Index: 3
          },
          {
            PropertyString: "+10 to Shield Mastery",
            Index: 2
          },
          {
            PropertyString: "+100-130 Enhanced Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "138-157",
          EquipmentType: 0,
          Name: "Ogre Gauntlets",
          RequiredStrength: 185,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 85,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 0
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+10 Mana stolen per hit",
        Index: 4
      },
      {
        PropertyString: "+10 Life stolen per hit",
        Index: 3
      },
      {
        PropertyString: "15 to Strength",
        Index: 2
      },
      {
        PropertyString: "All Resistances +50",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Nefarius Ways",
    Name: "Nefarius Ways",
    SetItems: [
      {
        Type: "Polearm",
        "Set": "Nefarius Ways",
        SetPropertiesString: [
          "+ extra gold from monsters (3 Items)",
          "+ better chance of getting magic item (2 Items)"
        ],
        Name: "Sin and Greed",
        Index: "Sin and Greed",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 80,
        Code: "7s8",
        Properties: [
          {
            PropertyString: "15% Chance to cast level 15 dim vision on striking",
            Index: 3
          },
          {
            PropertyString: "+40 Increased Attack Speed",
            Index: 2
          },
          {
            PropertyString: "+400-500% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "Requirements +20%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(60-72) to (705-846)"
            }
          ],
          EquipmentType: 1,
          Name: "Thresher",
          RequiredStrength: 152,
          RequiredDexterity: 118,
          Durability: 65,
          ItemLevel: 71,
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
        "Set": "Nefarius Ways",
        SetPropertiesString: [],
        Name: "Wicked Impulse",
        Index: "wicked Impulse",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 75,
        Code: "ult",
        Properties: [
          {
            PropertyString: "+30 Increased Attack Speed",
            Index: 3
          },
          {
            PropertyString: "+100-160% Enhanced Damage",
            Index: 2
          },
          {
            PropertyString: "+40 Faster Hit Recovery",
            Index: 1
          },
          {
            PropertyString: "+125-175 Enhanced Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "844-949",
          EquipmentType: 0,
          Name: "Hellforge Plate",
          RequiredStrength: 196,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 78,
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
        "Set": "Nefarius Ways",
        SetPropertiesString: [
          "+30 better chance of getting magic item (3 Items)"
        ],
        Name: "Evil Reputation",
        Index: "Evil Reputation",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 76,
        Code: "utb",
        Properties: [
          {
            PropertyString: "+50 Faster Run/Walk",
            Index: 1
          },
          {
            PropertyString: "+7 Life stolen per hit",
            Index: 2
          },
          {
            PropertyString: "+200-250 Defense",
            Index: 0
          },
          {
            PropertyString: "15-25 to Dexterity",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "50 to 145",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "168-186",
          EquipmentType: 0,
          Name: "Mirrored Boots",
          RequiredStrength: 163,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 81,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      },
      {
        Type: "Merc Equip",
        "Set": "Nefarius Ways",
        SetPropertiesString: [
          "+7 to Mana after each Kill (2 Items)"
        ],
        Name: "Noxious Wispers",
        Index: "Noxious Wispers",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "usk",
        Properties: [
          {
            PropertyString: "1-2 to All Skills",
            Index: 2
          },
          {
            PropertyString: "150-200 to Life",
            Index: 0
          },
          {
            PropertyString: "+75-100 to Mana",
            Index: 1
          },
          {
            PropertyString: "+15-25 Life after each Kill",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "101",
          EquipmentType: 0,
          Name: "Demonhead",
          RequiredStrength: 102,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 74,
          Type: {
            Name: "Merc Equip",
            Index: "Merc Equip",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "-3 Drain Life",
        Index: 0
      },
      {
        PropertyString: "-10 to Experience Gained",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "5 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+50 Chance of Crushing Blow",
        Index: 3
      },
      {
        PropertyString: "+50 Deadly Strike",
        Index: 2
      },
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 4
      },
      {
        PropertyString: "All Resistances +100",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Kraj's Memorial",
    Name: "Kraj's Memorial",
    SetItems: [
      {
        Type: "Amulet",
        "Set": "Kraj's Memorial",
        SetPropertiesString: [
          "All Resistances +18 (2 Items)",
          "+1 Half Freeze Duration (3 Items)"
        ],
        Name: "Eternal Sleep",
        Index: "Eternal Sleep",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 80,
        Code: "amu",
        Properties: [
          {
            PropertyString: "2 to All Skills",
            Index: 0
          },
          {
            PropertyString: "Slain Monsters Rest in Peace",
            Index: 1
          },
          {
            PropertyString: "+10 Increase Maximum Life",
            Index: 2
          },
          {
            PropertyString: "+10 Increase Maximum Mana",
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
        Type: "Shield",
        "Set": "Kraj's Memorial",
        SetPropertiesString: [
          "Level 4 Cleansing Aura When Equipped (4 Items)",
          "+25 Faster Hit Recovery (3 Items)",
          "35% Increased Chance of Blocking (2 Items)"
        ],
        Name: "Calming Peace",
        Index: "Calming Peace",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 83,
        Code: "uow",
        Properties: [
          {
            PropertyString: "+140-160 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+ Defense",
            Index: 1
          },
          {
            PropertyString: "+125-150 Defense",
            Index: 2
          },
          {
            PropertyString: "+25-35 Damage Reduced by 25-35%%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "18 to 28",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "475-529",
          EquipmentType: 0,
          Name: "Aegis",
          RequiredStrength: 219,
          RequiredDexterity: 0,
          Durability: 92,
          ItemLevel: 79,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Kraj's Memorial",
        SetPropertiesString: [
          "70 to Life (3 Items)"
        ],
        Name: "Burial Shroud",
        Index: "Silk Shroud",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 79,
        Code: "uld",
        Properties: [
          {
            PropertyString: "+25 Faster Hit Recovery",
            Index: 1
          },
          {
            PropertyString: "+100-130 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Lightning Resist +25-50%",
            Index: 3
          },
          {
            PropertyString: "Fire Resist +25-50%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "417",
          EquipmentType: 0,
          Name: "Kraken Shell",
          RequiredStrength: 174,
          RequiredDexterity: 0,
          Durability: 48,
          ItemLevel: 81,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Mace",
        "Set": "Kraj's Memorial",
        SetPropertiesString: [
          "+25 Increased Attack Speed (2 Items)",
          "+18 Life after each Kill (3 Items)",
          "+3 to Mana after each Kill (4 Items)"
        ],
        Name: "Temple Guardian",
        Index: "Temple Guardian",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "7fl",
        Properties: [
          {
            PropertyString: "+220-250% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+75 to Minimum Damage",
            Index: 1
          },
          {
            PropertyString: "75 bonus to Attack Rating",
            Index: 2
          },
          {
            PropertyString: "+8 to Zeal",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(84-85) to (256-280)"
            }
          ],
          EquipmentType: 1,
          Name: "Scourge",
          RequiredStrength: 125,
          RequiredDexterity: 77,
          Durability: 65,
          ItemLevel: 76,
          Type: {
            Name: "Mace",
            Index: "Mace",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "2 to Experience Gained",
        Index: 0
      },
      {
        PropertyString: "+75 better chance of getting magic item",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "Adds 150-250 to Cold Damage",
        Index: 4
      },
      {
        PropertyString: "100% Chance of Open Wounds",
        Index: 2
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 3
      },
      {
        PropertyString: "All Resistances +50",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "The Darkest Weaves",
    Name: "The Darkest Weaves",
    SetItems: [
      {
        Type: "Armor",
        "Set": "The Darkest Weaves",
        SetPropertiesString: [
          "+50 Faster Hit Recovery (2 Items)"
        ],
        Name: "Sundered Heart",
        Index: "Sundered Heart",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 76,
        Code: "uth",
        Properties: [
          {
            PropertyString: "+170-200 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Socketed (4)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "433",
          EquipmentType: 0,
          Name: "Lacquered Plate",
          RequiredStrength: 208,
          RequiredDexterity: 0,
          Durability: 55,
          ItemLevel: 82,
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
        "Set": "The Darkest Weaves",
        SetPropertiesString: [
          "+ to Maximum Damage (2 Items)"
        ],
        Name: "Soul Reaver",
        Index: "Soulreaver",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "7cr",
        Properties: [
          {
            PropertyString: "+220-300% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "Socketed (6)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "81 to 185"
            }
          ],
          EquipmentType: 1,
          Name: "Phase Blade",
          RequiredStrength: 25,
          RequiredDexterity: 136,
          Durability: 0,
          ItemLevel: 73,
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
        "Set": "The Darkest Weaves",
        SetPropertiesString: [
          "+50 Faster Block Rate (2 Items)"
        ],
        Name: "Throws of Hatred",
        Index: "Throws of Hatred",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 78,
        Code: "ush",
        Properties: [
          {
            PropertyString: "30-50% Increased Chance of Blocking",
            Index: 1
          },
          {
            PropertyString: "+170-210 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Socketed (3)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "24 to 38",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "429-492",
          EquipmentType: 0,
          Name: "Troll Nest",
          RequiredStrength: 106,
          RequiredDexterity: 0,
          Durability: 74,
          ItemLevel: 76,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "20 to Strength",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+50 Faster Run/Walk",
        Index: 2
      },
      {
        PropertyString: "Adds 300-500 to Fire Damage",
        Index: 4
      },
      {
        PropertyString: "Regenerate Mana 75%",
        Index: 3
      },
      {
        PropertyString: "All Resistances +25",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Blood Raven's Dispair",
    Name: "Blood Raven's Dispair",
    SetItems: [
      {
        Type: "Merc Equip",
        "Set": "Blood Raven's Dispair",
        SetPropertiesString: [
          "10 to Strength (2 Items)"
        ],
        Name: "Blood Raven's Pain",
        Index: "Blood Raven's Pain",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 73,
        Code: "uh9",
        Properties: [
          {
            PropertyString: "+160-220 Defense",
            Index: 0
          },
          {
            PropertyString: "80-100 to Life",
            Index: 1
          },
          {
            PropertyString: "+75-100 to Mana",
            Index: 2
          },
          {
            PropertyString: "15% Damage Taken Goes To Mana",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "300-400",
          EquipmentType: 0,
          Name: "Bone Visage",
          RequiredStrength: 106,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 84,
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
        "Set": "Blood Raven's Dispair",
        SetPropertiesString: [
          "+6 Mana stolen per hit (2 Items)"
        ],
        Name: "Blood Raven's Curse",
        Index: "Blood Raven's Curse",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "utu",
        Properties: [
          {
            PropertyString: "+25 Faster Hit Recovery",
            Index: 1
          },
          {
            PropertyString: "+9 Life stolen per hit",
            Index: 3
          },
          {
            PropertyString: "+675-900 Defense",
            Index: 0
          },
          {
            PropertyString: "20-30 to Strength",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1050-1275",
          EquipmentType: 0,
          Name: "Wire Fleece",
          RequiredStrength: 111,
          RequiredDexterity: 0,
          Durability: 32,
          ItemLevel: 70,
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
        "Set": "Blood Raven's Dispair",
        SetPropertiesString: [
          "+10 to Immolation Arrow (2 Items)"
        ],
        Name: "Blood Raven's Redemption",
        Index: "Blood Raven's Redemption",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "6lb",
        Properties: [
          {
            PropertyString: "+200-300% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+35-70 to Minimum Damage",
            Index: 1
          },
          {
            PropertyString: "+100-150 to Maximum Damage",
            Index: 2
          },
          {
            PropertyString: "+10-12 to Ice Arrow",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(80-130) to (277-386)"
            }
          ],
          EquipmentType: 1,
          Name: "Shadow Bow",
          RequiredStrength: 52,
          RequiredDexterity: 188,
          Durability: 0,
          ItemLevel: 63,
          Type: {
            Name: "Bow",
            Index: "Bow",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+100 Piercing Attack",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "Level 5 Concentration Aura When Equipped",
        Index: 4
      },
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+25 Slows target by",
        Index: 2
      },
      {
        PropertyString: "+5 Knockback",
        Index: 1
      },
      {
        PropertyString: "8-12% Reanimate as: PlagueBearer",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Narrow Path Between Light and Darkness",
    Name: "Narrow Path Between Light and Darkness",
    SetItems: [
      {
        Type: "Merc Equip",
        "Set": "Narrow Path Between Light and Darkness",
        SetPropertiesString: [
          "25% Chance to cast level 1 frost nova when struck (3 Items)",
          "+15 Increased Attack Speed (2 Items)"
        ],
        Name: "Char's Grimace of Death",
        Index: "Char's Grimace of Death",
        Enabled: true,
        ItemLevel: 35,
        RequiredLevel: 62,
        Code: "xh9",
        Properties: [
          {
            PropertyString: "+113 Enhanced Defense",
            Index: 3
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
            PropertyString: "-2 to Light Radius",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "129",
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
        Type: "Ring",
        "Set": "Narrow Path Between Light and Darkness",
        SetPropertiesString: [
          "+45 to Mana (2 Items)",
          "Regenerate Mana 10% (4 Items)",
          "+10 Magic Damage Reduced by (3 Items)"
        ],
        Name: "Char's Annulus of Obscurity",
        Index: "Char's Annulus of Obscurity",
        Enabled: true,
        ItemLevel: 40,
        RequiredLevel: 51,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+1",
            Index: 1
          },
          {
            PropertyString: "+12-15 to Sanctuary",
            Index: 2
          },
          {
            PropertyString: "-1 to Light Radius",
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
        "Set": "Narrow Path Between Light and Darkness",
        SetPropertiesString: [
          "45 to Life (2 Items)",
          "+10 Damage Reduced by (3 Items)"
        ],
        Name: "Char's Blessed Reflection",
        Index: "Char's Blessed Reflection",
        Enabled: true,
        ItemLevel: 40,
        RequiredLevel: 51,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+1",
            Index: 1
          },
          {
            PropertyString: "+8-12 to Decrepify",
            Index: 2
          },
          {
            PropertyString: "1 to Light Radius",
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
        Type: "Scepter",
        "Set": "Narrow Path Between Light and Darkness",
        SetPropertiesString: [
          "Adds 1-50 to Lightning Damage (2 Items)",
          "+13-16 to Static Field (3 Items)",
          "Fire Resist +15% (4 Items)"
        ],
        Name: "Char's Blessed Light",
        Index: "Char's Hand of Blessed Light",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 67,
        Code: "7sc",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 3
          },
          {
            PropertyString: "+1 to Offensive Auras (Paladin only)",
            Index: 4
          },
          {
            PropertyString: "+75-110% Enhanced Damage",
            Index: 1
          },
          {
            PropertyString: "+15 Faster Cast Rate",
            Index: 2
          },
          {
            PropertyString: "Socketed (2)",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(70-84) to (91-109)"
            }
          ],
          EquipmentType: 1,
          Name: "Mighty Scepter",
          RequiredStrength: 125,
          RequiredDexterity: 65,
          Durability: 50,
          ItemLevel: 62,
          Type: {
            Name: "Scepter",
            Index: "Scepter",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Narrow Path Between Light and Darkness",
        SetPropertiesString: [
          "1 to All Skills (3 Items)"
        ],
        Name: "Char's Carapice",
        Index: "Char's Carapice",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 65,
        Code: "uui",
        Properties: [
          {
            PropertyString: "+65-110 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "All Resistances +15-25",
            Index: 2
          },
          {
            PropertyString: "+10-15 Damage Reduced by 10-15%%",
            Index: 3
          },
          {
            PropertyString: "Socketed (1)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "941-1086",
          EquipmentType: 0,
          Name: "Dusk Shroud",
          RequiredStrength: 77,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 65,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "50 to Life",
        Index: 0
      },
      {
        PropertyString: "+50 to Mana",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 2
      },
      {
        PropertyString: "+10 to Maximum Fire Resist",
        Index: 0
      },
      {
        PropertyString: "All Resistances +25",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Kingpin's Set",
    Name: "Kingpin's Set",
    SetItems: [
      {
        Type: "Belt",
        "Set": "Kingpin's Set",
        SetPropertiesString: [],
        Name: "Kingpin's Upgraded Goldwrap",
        Index: "King1",
        Enabled: true,
        ItemLevel: 35,
        RequiredLevel: 25,
        Code: "ztb",
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
            PropertyString: "+25-35 Defense",
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
          ArmorString: "66-83",
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
        Type: "Boots",
        "Set": "Kingpin's Set",
        SetPropertiesString: [],
        Name: "Kingpin's War Traveler",
        Index: "King2",
        Enabled: true,
        ItemLevel: 35,
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
          ArmorString: "90-100",
          EquipmentType: 0,
          Name: "Battle Boots",
          RequiredStrength: 95,
          RequiredDexterity: 0,
          Durability: 30,
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
        Type: "Armor",
        "Set": "Kingpin's Set",
        SetPropertiesString: [
          "10 to Vitality (2 Items)",
          "10 to Energy (3 Items)"
        ],
        Name: "Kingpin' Skullder's Ire",
        Index: "King3",
        Enabled: true,
        ItemLevel: 35,
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
          ArmorString: "531-632",
          EquipmentType: 0,
          Name: "Russet Armor",
          RequiredStrength: 97,
          RequiredDexterity: 0,
          Durability: 90,
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
        Type: "Ring",
        "Set": "Kingpin's Set",
        SetPropertiesString: [
          "44 to Life (5 Items)",
          "+15 better chance of getting magic item (4 Items)"
        ],
        Name: "Kingpin's Nagelring",
        Index: "King4",
        Enabled: true,
        ItemLevel: 7,
        RequiredLevel: 7,
        Code: "rin",
        Properties: [
          {
            PropertyString: "50-80 to Attack Rating",
            Index: 2
          },
          {
            PropertyString: "+3 Magic Damage Reduced by",
            Index: 0
          },
          {
            PropertyString: "+3-7 Attacker Takes Damage of",
            Index: 1
          },
          {
            PropertyString: "+10-15 better chance of getting magic item",
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
        Type: "Merc Equip",
        "Set": "Kingpin's Set",
        SetPropertiesString: [],
        Name: "Kingpin's Harlequin Crest",
        Index: "King5",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 61,
        Code: "uap",
        Properties: [
          {
            PropertyString: "2 to All Skills",
            Index: 3
          },
          {
            PropertyString: "2 to Strength",
            Index: 0
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
            PropertyString: "+10 Damage Reduced by 10%%",
            Index: 5
          },
          {
            PropertyString: "+50 better chance of getting magic item",
            Index: 4
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "98",
          EquipmentType: 0,
          Name: "Shako",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 58,
          Type: {
            Name: "Merc Equip",
            Index: "Merc Equip",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      },
      {
        Type: "Sword",
        "Set": "Kingpin's Set",
        SetPropertiesString: [
          "Adds 50-120 to Damage (6 Items)"
        ],
        Name: "Kingpin's Blade of Ali Baba",
        Index: "King6",
        Enabled: true,
        ItemLevel: 35,
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
            PropertyString: "Socketed (2)",
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
          Durability: 32,
          ItemLevel: 37,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+25 better chance of getting magic item",
        Index: 0
      },
      {
        PropertyString: "+25 better chance of getting magic item",
        Index: 2
      },
      {
        PropertyString: "+25 better chance of getting magic item",
        Index: 4
      },
      {
        PropertyString: "+25 better chance of getting magic item",
        Index: 6
      }
    ],
    FullProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 1
      },
      {
        PropertyString: "All Resistances +35",
        Index: 2
      },
      {
        PropertyString: "+200 better chance of getting magic item",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Yohann's Savant",
    Name: "Yohann's Savant",
    SetItems: [
      {
        Type: "Merc Equip",
        "Set": "Yohann's Savant",
        SetPropertiesString: [],
        Name: "Wiseman's Crown",
        Index: "Wiseman's Cap",
        Enabled: true,
        ItemLevel: 25,
        RequiredLevel: 28,
        Code: "crn",
        Properties: [
          {
            PropertyString: "+1",
            Index: 0
          },
          {
            PropertyString: "10-15 to Enemy Lightning Resistance",
            Index: 3
          },
          {
            PropertyString: "Lightning Resist +15-25%",
            Index: 2
          },
          {
            PropertyString: "+2-3 to Mana after each Kill",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "25",
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
        "Set": "Yohann's Savant",
        SetPropertiesString: [
          "+5 Replenish Life (4 Items)"
        ],
        Name: "Sage's Demonspike Leather",
        Index: "Sage's Leather",
        Enabled: true,
        ItemLevel: 32,
        RequiredLevel: 33,
        Code: "xla",
        Properties: [
          {
            PropertyString: "15 to Strength",
            Index: 0
          },
          {
            PropertyString: "55-75 to Life",
            Index: 3
          },
          {
            PropertyString: "+15-25 Damage Reduced by",
            Index: 1
          },
          {
            PropertyString: "+15-25 Magic Damage Reduced by",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "270-369",
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
        Type: "Gloves",
        "Set": "Yohann's Savant",
        SetPropertiesString: [
          "+35 better chance of getting magic item (3 Items)"
        ],
        Name: "Bracers of Lore",
        Index: "Gloves of Knowledge",
        Enabled: true,
        ItemLevel: 35,
        RequiredLevel: 38,
        Code: "xmg",
        Properties: [
          {
            PropertyString: "+20 Faster Cast Rate",
            Index: 1
          },
          {
            PropertyString: "+35-45 to Mana",
            Index: 0
          },
          {
            PropertyString: "+10-15 Life after each Kill",
            Index: 2
          },
          {
            PropertyString: "+1-3 to Mana after each Kill",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "37",
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
        Type: "Staff",
        "Set": "Yohann's Savant",
        SetPropertiesString: [
          "+5 Mana stolen per hit (3 Items)",
          "+1 to Whirlwind (4 Items)"
        ],
        Name: "Arcane Battlestaff",
        Index: "Arcane Battlestaff",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 23,
        Code: "8bs",
        Properties: [
          {
            PropertyString: "+30 Increased Attack Speed",
            Index: 2
          },
          {
            PropertyString: "+110-140% Enhanced Damage",
            Index: 1
          },
          {
            PropertyString: "Adds 35-80 to Damage",
            Index: 0
          },
          {
            PropertyString: "Adds 6-8 Life stolen per hit",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(64-68) to (151-161)"
            }
          ],
          EquipmentType: 1,
          Name: "Gothic Staff",
          RequiredStrength: 25,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 42,
          Type: {
            Name: "Staff",
            Index: "Staff",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "3 to Experience Gained",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+125 to Mana",
        Index: 1
      },
      {
        PropertyString: "Regenerate Mana 75%",
        Index: 4
      },
      {
        PropertyString: "All Resistances +35",
        Index: 2
      },
      {
        PropertyString: "+75 better chance of getting magic item",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Zhoulomcrist's Dread",
    Name: "Zhoulomcrist's Dread",
    SetItems: [
      {
        Type: "Merc Equip",
        "Set": "Zhoulomcrist's Dread",
        SetPropertiesString: [
          "Adds 25-35 to Cold Damage (3 Items)",
          "+1 to Warmth (4 Items)",
          "+1 to Warmth (5 Items)"
        ],
        Name: "Unholy Desires",
        Index: "Unholy Desires",
        Enabled: true,
        ItemLevel: 25,
        RequiredLevel: 31,
        Code: "xap",
        Properties: [
          {
            PropertyString: "+15 Faster Cast Rate",
            Index: 1
          },
          {
            PropertyString: "+35-50 to Mana",
            Index: 0
          },
          {
            PropertyString: "12-15% Damage Taken Goes To Mana",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "80-92",
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
        Type: "Axe",
        "Set": "Zhoulomcrist's Dread",
        SetPropertiesString: [
          "20% Chance to cast level 15 life tap when you Kill an Enemy (4 Items)"
        ],
        Name: "Deadly Wishes",
        Index: "Darkest Wishes",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "72a",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+220-260% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+8 to Zeal",
            Index: 3
          },
          {
            PropertyString: "+1 Knockback",
            Index: 2
          },
          {
            PropertyString: "Level 15 Golem Mastery (65 Charges)",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(105-118) to (211-237)"
            }
          ],
          EquipmentType: 1,
          Name: "Ettin Axe",
          RequiredStrength: 145,
          RequiredDexterity: 45,
          Durability: 24,
          ItemLevel: 70,
          Type: {
            Name: "Axe",
            Index: "Axe",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "Zhoulomcrist's Dread",
        SetPropertiesString: [
          "+20 Damage Reduced by (3 Items)",
          "+25 Magic Damage Reduced by (4 Items)"
        ],
        Name: "Shadowed Plate",
        Index: "Shadowed Plate",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "utp",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 2
          },
          {
            PropertyString: "+30 Faster Hit Recovery",
            Index: 0
          },
          {
            PropertyString: "+175-195 Enhanced Defense",
            Index: 3
          },
          {
            PropertyString: "1-5 to Experience Gained",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1150-1315",
          EquipmentType: 0,
          Name: "Archon Plate",
          RequiredStrength: 103,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 84,
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
        "Set": "Zhoulomcrist's Dread",
        SetPropertiesString: [
          "Freezes target +2 (4 Items)"
        ],
        Name: "Draven Coil",
        Index: "Draven Coil",
        Enabled: true,
        ItemLevel: 40,
        RequiredLevel: 50,
        Code: "rin",
        Properties: [
          {
            PropertyString: "+10 Faster Cast Rate",
            Index: 1
          },
          {
            PropertyString: "10-20 bonus to Attack Rating",
            Index: 3
          },
          {
            PropertyString: "+80-120 Defense",
            Index: 2
          },
          {
            PropertyString: "35-50 to Life",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+5 Replenish Life",
        Index: 0
      },
      {
        PropertyString: "Regenerate Mana 50%",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "3 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+3 to Lower Resist",
        Index: 4
      },
      {
        PropertyString: "Magic Resist +25%",
        Index: 2
      },
      {
        PropertyString: "All Resistances +50",
        Index: 3
      },
      {
        PropertyString: "+30 Damage Reduced by 30%%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "The Warlord of Blood",
    Name: "The Warlord of Blood",
    SetItems: [
      {
        Type: "Gloves",
        "Set": "The Warlord of Blood",
        SetPropertiesString: [
          "20 bonus to Attack Rating (4 Items)",
          "+15 Chance of Crushing Blow (3 Items)",
          "+15 Deadly Strike (2 Items)",
          "+250 Defense (6 Items)",
          "+10 Damage Reduced by 10%% (5 Items)"
        ],
        Name: "Tortured Soul",
        Index: "Tortured Soul Gauntlets",
        Enabled: true,
        ItemLevel: 28,
        RequiredLevel: 29,
        Code: "hgl",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 0
          },
          {
            PropertyString: "+30-50% Enhanced Damage",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "12",
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
        "Set": "The Warlord of Blood",
        SetPropertiesString: [
          "Adds 10-20 to Damage (3 Items)",
          "+313 Defense (6 Items)",
          "Magic Resist +10% (4 Items)",
          "All Resistances +10 (2 Items)",
          "+ Attacker Takes Damage of (5 Items)"
        ],
        Name: "Hell's Torment",
        Index: "Hell's Torment Greaves",
        Enabled: true,
        ItemLevel: 28,
        RequiredLevel: 31,
        Code: "hbt",
        Properties: [
          {
            PropertyString: "18% Chance to cast level 1 life tap on striking",
            Index: 1
          },
          {
            PropertyString: "+30 Faster Run/Walk",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "10 to 20",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "12",
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
        Type: "Merc Equip",
        "Set": "The Warlord of Blood",
        SetPropertiesString: [
          "Adds 25-200 to Lightning Damage (6 Items)",
          "15 to Enemy Lightning Resistance (4 Items)",
          "Lightning Resist +33% (3 Items)"
        ],
        Name: "Bloody Visage",
        Index: "Bloody Visage Helm",
        Enabled: true,
        ItemLevel: 45,
        RequiredLevel: 45,
        Code: "xhm",
        Properties: [
          {
            PropertyString: "+2 Knockback",
            Index: 3
          },
          {
            PropertyString: "+120-170 Enhanced Defense",
            Index: 4
          },
          {
            PropertyString: "70-100 to Life",
            Index: 0
          },
          {
            PropertyString: "+33-45 to Mana",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "189-232",
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
        Type: "Belt",
        "Set": "The Warlord of Blood",
        SetPropertiesString: [
          "Adds 100-150 to Fire Damage (6 Items)",
          "15 to Enemy Fire Resistance (4 Items)",
          "Fire Resist +33% (3 Items)"
        ],
        Name: "Vengeance Unleashed",
        Index: "Vengeance Unleashed",
        Enabled: true,
        ItemLevel: 45,
        RequiredLevel: 47,
        Code: "zhb",
        Properties: [
          {
            PropertyString: "+180-200 Enhanced Defense",
            Index: 1
          },
          {
            PropertyString: "50-75 to Life",
            Index: 2
          },
          {
            PropertyString: "+22-40 Damage Reduced by",
            Index: 3
          },
          {
            PropertyString: "+20-40 Magic Damage Reduced by",
            Index: 4
          },
          {
            PropertyString: "Socketed (2)",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "41",
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
        Type: "Shield",
        "Set": "The Warlord of Blood",
        SetPropertiesString: [],
        Name: "Elysian Fields",
        Index: "Elysian Fields",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 68,
        Code: "upk",
        Properties: [
          {
            PropertyString: "+40 Faster Block Rate",
            Index: 1
          },
          {
            PropertyString: "20-40% Increased Chance of Blocking",
            Index: 0
          },
          {
            PropertyString: "Adds 100-150 to Cold Damage",
            Index: 6
          },
          {
            PropertyString: "15 to Enemy Cold Resistance",
            Index: 5
          },
          {
            PropertyString: "+160-200 Enhanced Defense",
            Index: 4
          },
          {
            PropertyString: "All Resistances +35-50",
            Index: 3
          },
          {
            PropertyString: "+15-20 Damage Reduced by 15-20%%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "26 to 40",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "384-444",
          EquipmentType: 0,
          Name: "Blade Barrier",
          RequiredStrength: 118,
          RequiredDexterity: 0,
          Durability: 83,
          ItemLevel: 68,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Armor",
        "Set": "The Warlord of Blood",
        SetPropertiesString: [
          "2 to All Skills (6 Items)",
          "+1 Prevent Monster Heal (6 Items)"
        ],
        Name: "Death and Decay",
        Index: "Death and Decay",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "utp",
        Properties: [
          {
            PropertyString: "+180-220 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "15-25 to Strength",
            Index: 4
          },
          {
            PropertyString: "15-20 to Dexterity",
            Index: 3
          },
          {
            PropertyString: "75-100 to Life",
            Index: 1
          },
          {
            PropertyString: "+35-50 to Mana",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1150-1315",
          EquipmentType: 0,
          Name: "Archon Plate",
          RequiredStrength: 103,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 84,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "2 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "All Resistances +20",
        Index: 4
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 6
      }
    ],
    FullProperties: [
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 2
      },
      {
        PropertyString: "+200 extra gold from monsters",
        Index: 3
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Darque Necromancy",
    Name: "Darque Necromancy",
    SetItems: [
      {
        Type: "Belt",
        "Set": "Darque Necromancy",
        SetPropertiesString: [
          "+ to Mana (5 Items)"
        ],
        Name: "Dying Curses",
        Index: "Dying Curses",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 30,
        Code: "zlb",
        Properties: [
          {
            PropertyString: "100% Chance to cast level 40 weaken when you Level-Up",
            Index: 2
          },
          {
            PropertyString: "+1 to Curses (Necromancer only)",
            Index: 1
          },
          {
            PropertyString: "+100-120 Enhanced Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "54-63",
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
        Type: "Shield",
        "Set": "Darque Necromancy",
        SetPropertiesString: [
          "25% Increased Chance of Blocking (4 Items)"
        ],
        Name: "Lich's Rites",
        Index: "Lich's Rites",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 63,
        Code: "uuc",
        Properties: [
          {
            PropertyString: "100% Chance to cast level 33 bone armor when you Level-Up",
            Index: 2
          },
          {
            PropertyString: "+30 Faster Block Rate",
            Index: 1
          },
          {
            PropertyString: "+80-140 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Socketed (1)",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "16 to 30",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "220-240",
          EquipmentType: 0,
          Name: "Heater",
          RequiredStrength: 77,
          RequiredDexterity: 0,
          Durability: 88,
          ItemLevel: 58,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Wand",
        "Set": "Darque Necromancy",
        SetPropertiesString: [],
        Name: "Twilight Fading",
        Index: "Twilight of Evil",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 29,
        Code: "9yw",
        Properties: [
          {
            PropertyString: "Level 1-7 Thorns Aura When Equipped",
            Index: 3
          },
          {
            PropertyString: "1 to All Skills",
            Index: 0
          },
          {
            PropertyString: "+25 Faster Cast Rate",
            Index: 1
          },
          {
            PropertyString: "+1-5 Replenish Life",
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
          Durability: 15,
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
        Type: "Armor",
        "Set": "Darque Necromancy",
        SetPropertiesString: [
          "Cold Resist +20% (3 Items)",
          "Lightning Resist +10% (4 Items)",
          "Fire Resist +15% (2 Items)",
          "Poison Resist +25% (5 Items)"
        ],
        Name: "Dark Rituals",
        Index: "Dark Rituals",
        Enabled: true,
        ItemLevel: 40,
        RequiredLevel: 50,
        Code: "xtp",
        Properties: [
          {
            PropertyString: "+30 Faster Hit Recovery",
            Index: 2
          },
          {
            PropertyString: "+300-400 Defense",
            Index: 0
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
          ArmorString: "525-725",
          EquipmentType: 0,
          Name: "Mage Plate",
          RequiredStrength: 55,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 60,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Amulet",
        "Set": "Darque Necromancy",
        SetPropertiesString: [
          "+100 extra gold from monsters (5 Items)"
        ],
        Name: "Legacy in Blood",
        Index: "Legacy in Blood",
        Enabled: true,
        ItemLevel: 33,
        RequiredLevel: 35,
        Code: "amu",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 0
          },
          {
            PropertyString: "+10 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+50-75 better chance of getting magic item",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+1",
        Index: 0
      },
      {
        PropertyString: "+1",
        Index: 2
      },
      {
        PropertyString: "+1",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "5% Chance to cast level 10 iron maiden when struck",
        Index: 1
      },
      {
        PropertyString: "+300% Damage to Undead Damage to Undead",
        Index: 3
      },
      {
        PropertyString: "+3 to Revive",
        Index: 4
      },
      {
        PropertyString: "All Resistances +30",
        Index: 0
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Marhawkman's Disquise",
    Name: "Marhawkman's Disquise",
    SetItems: [
      {
        Type: "Gloves",
        "Set": "Marhawkman's Disquise",
        SetPropertiesString: [],
        Name: "Andariel's Claws",
        Index: "Andariel's Claw",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 69,
        Code: "uvg",
        Properties: [
          {
            PropertyString: "+15 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+15 Faster Cast Rate",
            Index: 2
          },
          {
            PropertyString: "+90-130 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+40-70 to Mana",
            Index: 5
          },
          {
            PropertyString: "Poison Resist +60-80%",
            Index: 3
          },
          {
            PropertyString: "+60-90 Poison Length Reduced by",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "108-131",
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
        Type: "Boots",
        "Set": "Marhawkman's Disquise",
        SetPropertiesString: [],
        Name: "Andariel's Hooves",
        Index: "Andariel's Hooves",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 72,
        Code: "umb",
        Properties: [
          {
            PropertyString: "+25 Faster Run/Walk",
            Index: 1
          },
          {
            PropertyString: "+1222 to Minimum Poison Damage",
            Index: 4
          },
          {
            PropertyString: "+80-120 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "20-30 to Dexterity",
            Index: 2
          },
          {
            PropertyString: "All Resistances +10-20",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "69 to 118",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "108-132",
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
        Type: "Merc Equip",
        "Set": "Marhawkman's Disquise",
        SetPropertiesString: [],
        Name: "Andariel's Mask",
        Index: "Andariel's Mask",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 36,
        Code: "xsk",
        Properties: [
          {
            PropertyString: "+75-100 Defense",
            Index: 0
          },
          {
            PropertyString: "20-30 to Vitality",
            Index: 4
          },
          {
            PropertyString: "20-30 to Energy",
            Index: 3
          },
          {
            PropertyString: "+15-20 Life after each Kill",
            Index: 1
          },
          {
            PropertyString: "+3-6 to Mana after each Kill",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "129-154",
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
        Type: "Armor",
        "Set": "Marhawkman's Disquise",
        SetPropertiesString: [
          "4 to Experience Gained (4 Items)"
        ],
        Name: "Andariel's Breastbone",
        Index: "Andariel's Breastbone",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 60,
        Code: "ula",
        Properties: [
          {
            PropertyString: "25 to Poison Skill Damage",
            Index: 4
          },
          {
            PropertyString: "25 to Enemy Poison Resistance",
            Index: 5
          },
          {
            PropertyString: "+1 Prevent Monster Heal",
            Index: 1
          },
          {
            PropertyString: "+120-150 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+20-30 Damage Reduced by",
            Index: 2
          },
          {
            PropertyString: "+20-30 Magic Damage Reduced by",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "814-925",
          EquipmentType: 0,
          Name: "Scarab Husk",
          RequiredStrength: 95,
          RequiredDexterity: 0,
          Durability: 28,
          ItemLevel: 68,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "1 to All Skills",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "100% Chance to cast level 2 poison nova when struck",
        Index: 1
      },
      {
        PropertyString: "8% Chance to cast level 12 poison nova on striking",
        Index: 2
      },
      {
        PropertyString: "+8 Mana stolen per hit",
        Index: 5
      },
      {
        PropertyString: "+8 Life stolen per hit",
        Index: 4
      },
      {
        PropertyString: "All Resistances +30",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Set1",
    Name: "Set1",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set1",
        SetPropertiesString: [],
        Name: "Aragorn's Contempt",
        Index: "Set1.1",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 33,
        Code: "xui",
        Properties: [
          {
            PropertyString: "+100-120 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Magic Resist +10%",
            Index: 3
          },
          {
            PropertyString: "Fire Resist +25-35%",
            Index: 1
          },
          {
            PropertyString: "+15-25 Damage Reduced by",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "206-226",
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
        Type: "Axe",
        "Set": "Set1",
        SetPropertiesString: [
          "Adds 45-135 to Damage (4 Items)",
          "+8-12 Life after each Kill (2 Items)"
        ],
        Name: "Aragorn's Derision",
        Index: "Set1.2",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 40,
        Code: "9wa",
        Properties: [
          {
            PropertyString: "+120-200% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "Adds 150-250 to Fire Damage",
            Index: 1
          },
          {
            PropertyString: "15-20 to Enemy Fire Resistance",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(35-48) to (99-135)"
            }
          ],
          EquipmentType: 1,
          Name: "Naga",
          RequiredStrength: 121,
          RequiredDexterity: 0,
          Durability: 26,
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
        Type: "Shield",
        "Set": "Set1",
        SetPropertiesString: [],
        Name: "Aragorn's Indignation",
        Index: "Set1.3",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 62,
        Code: "uml",
        Properties: [
          {
            PropertyString: "+20 Faster Block Rate",
            Index: 2
          },
          {
            PropertyString: "20-30% Increased Chance of Blocking",
            Index: 1
          },
          {
            PropertyString: "+1 Prevent Monster Heal",
            Index: 3
          },
          {
            PropertyString: "+ Defense",
            Index: 0
          },
          {
            PropertyString: "Cold Resist +25-35%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "17 to 29",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "239-283",
          EquipmentType: 0,
          Name: "Luna",
          RequiredStrength: 100,
          RequiredDexterity: 0,
          Durability: 84,
          ItemLevel: 61,
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
        "Set": "Set1",
        SetPropertiesString: [
          "25 to Dexterity (3 Items)"
        ],
        Name: "Aragorn's Disdain",
        Index: "Set1.4",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 43,
        Code: "xhb",
        Properties: [
          {
            PropertyString: "+20 Faster Run/Walk",
            Index: 1
          },
          {
            PropertyString: "+8-15 Kick Damage",
            Index: 2
          },
          {
            PropertyString: "Adds 3-6 Mana stolen per hit",
            Index: 3
          },
          {
            PropertyString: "+100-125 Enhanced Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "39 to 80",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "88-99",
          EquipmentType: 0,
          Name: "War Boots",
          RequiredStrength: 125,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 54,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "25% Chance to cast level 2 static field when struck",
        Index: 2
      },
      {
        PropertyString: "+100% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+1 to Howl",
        Index: 3
      },
      {
        PropertyString: "+15 Slows target by",
        Index: 4
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Set2",
    Name: "Set2",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set2",
        SetPropertiesString: [],
        Name: "Winter's Embrace",
        Index: "Set2.1",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 34,
        Code: "xea",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 0
          },
          {
            PropertyString: "10-20 to Enemy Cold Resistance",
            Index: 3
          },
          {
            PropertyString: "+250-350 Defense",
            Index: 2
          },
          {
            PropertyString: "+1 Cannot Be Frozen",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "361-461",
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
        Type: "Mace",
        "Set": "Set2",
        SetPropertiesString: [
          "Regenerate Mana 50% (3 Items)"
        ],
        Name: "Baptism by Fire",
        Index: "Set2.2",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 31,
        Code: "9ma",
        Properties: [
          {
            PropertyString: "Level 3-5 Holy Fire Aura When Equipped",
            Index: 3
          },
          {
            PropertyString: "2 to All Skills",
            Index: 0
          },
          {
            PropertyString: "+20 Faster Cast Rate",
            Index: 1
          },
          {
            PropertyString: "+35-50 to Mana",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "15 to 23"
            }
          ],
          EquipmentType: 1,
          Name: "Flanged Mace",
          RequiredStrength: 61,
          RequiredDexterity: 0,
          Durability: 60,
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
        Type: "Shield",
        "Set": "Set2",
        SetPropertiesString: [],
        Name: "Between Fire and Ice",
        Index: "Set2.3",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 64,
        Code: "urg",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 0
          },
          {
            PropertyString: "+30 Faster Hit Recovery",
            Index: 3
          },
          {
            PropertyString: "+35 Faster Block Rate",
            Index: 2
          },
          {
            PropertyString: "15-25 to Strength",
            Index: 4
          },
          {
            PropertyString: "+40-75 better chance of getting magic item",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "14 to 32",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "119",
          EquipmentType: 0,
          Name: "Hyperion",
          RequiredStrength: 127,
          RequiredDexterity: 0,
          Durability: 82,
          ItemLevel: 64,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "20 to Dexterity",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "15% Increased Chance of Blocking",
        Index: 5
      },
      {
        PropertyString: "+350 Defense",
        Index: 4
      },
      {
        PropertyString: "75 to Life",
        Index: 3
      },
      {
        PropertyString: "3 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "+200 extra gold from monsters",
        Index: 0
      },
      {
        PropertyString: "+100 better chance of getting magic item",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Set3",
    Name: "Set3",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set3",
        SetPropertiesString: [
          "+ Defense (3 Items)"
        ],
        Name: "Call of Gylandra",
        Index: "Set3.1",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 36,
        Code: "xla",
        Properties: [
          {
            PropertyString: "+120-200 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "All Resistances +15-25",
            Index: 2
          },
          {
            PropertyString: "+15-25 Damage Reduced by 15-25%%",
            Index: 1
          },
          {
            PropertyString: "1-2 to Experience Gained",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "270-369",
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
        Type: "Hammer",
        "Set": "Set3",
        SetPropertiesString: [
          "+6 Mana stolen per hit (2 Items)",
          "+6 Life stolen per hit (3 Items)"
        ],
        Name: "Return to Hydrakal",
        Index: "Set3.2",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 75,
        Code: "7wh",
        Properties: [
          {
            PropertyString: "+60 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+175-225% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "Socketed (2)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(137-162) to (167-198)"
            }
          ],
          EquipmentType: 1,
          Name: "Legendary Mallet",
          RequiredStrength: 189,
          RequiredDexterity: 0,
          Durability: 65,
          ItemLevel: 82,
          Type: {
            Name: "Hammer",
            Index: "Hammer",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Set3",
        SetPropertiesString: [],
        Name: "Neprida's Kiss",
        Index: "Set3.3",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 43,
        Code: "xrg",
        Properties: [
          {
            PropertyString: "+35-50% Enhanced Damage",
            Index: 3
          },
          {
            PropertyString: "10-20% Increased Chance of Blocking",
            Index: 1
          },
          {
            PropertyString: "+1 Ignore Target's Defense",
            Index: 2
          },
          {
            PropertyString: "+ Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "11 to 15",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "53",
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
      }
    ],
    PartialProperties: [],
    FullProperties: [
      {
        PropertyString: "25% Chance to cast level 9 battle orders when struck",
        Index: 2
      },
      {
        PropertyString: "25% Chance to cast level 12 bone armor when struck",
        Index: 3
      },
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "Adds 200-250 to Cold Damage",
        Index: 4
      },
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Set4",
    Name: "Set4",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set4",
        SetPropertiesString: [
          "+10 Life after each Kill (2 Items)",
          "+3 to Mana after each Kill (4 Items)"
        ],
        Name: "Warder's Vest",
        Index: "Set4.1",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 41,
        Code: "xtu",
        Properties: [
          {
            PropertyString: "+160-200 Enhanced Defense",
            Index: 2
          },
          {
            PropertyString: "+75 extra gold from monsters",
            Index: 1
          },
          {
            PropertyString: "+25-30 better chance of getting magic item",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "361-417",
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
        Type: "Sword",
        "Set": "Set4",
        SetPropertiesString: [],
        Name: "Heron-Branded Blade",
        Index: "Set4.2",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 44,
        Code: "9cr",
        Properties: [
          {
            PropertyString: "4% Chance to cast level 20 weaken on striking",
            Index: 2
          },
          {
            PropertyString: "+35-50 to Minimum Damage",
            Index: 0
          },
          {
            PropertyString: "+100-140 to Maximum Damage",
            Index: 1
          },
          {
            PropertyString: "+200% Damage to Demons Damage to Demons",
            Index: 3
          },
          {
            PropertyString: "+10-15 Cold Absorb",
            Index: 5
          },
          {
            PropertyString: "+10-15 Fire Absorb",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(48-63) to (135-175)"
            }
          ],
          EquipmentType: 1,
          Name: "Dimensional Blade",
          RequiredStrength: 85,
          RequiredDexterity: 60,
          Durability: 20,
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
        Type: "Ring",
        "Set": "Set4",
        SetPropertiesString: [
          "40 to Life (5 Items)"
        ],
        Name: "Ter'Angreal Ring",
        Index: "Set4.3",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 67,
        Code: "rin",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 3
          },
          {
            PropertyString: "+5 Increased Attack Speed",
            Index: 0
          },
          {
            PropertyString: "+10 Faster Cast Rate",
            Index: 1
          },
          {
            PropertyString: "8-15 to Strength",
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
        Type: "Amulet",
        "Set": "Set4",
        SetPropertiesString: [
          "35% Chance to cast level 1 decrepify when struck (5 Items)",
          "1 to All Skills (6 Items)"
        ],
        Name: "Ser'Angreal Necklace",
        Index: "Set4.4",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 67,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+10 Faster Hit Recovery",
            Index: 0
          },
          {
            PropertyString: "5-10% Increased Chance of Blocking",
            Index: 1
          },
          {
            PropertyString: "4-7 to Experience Gained",
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
        Type: "Shield",
        "Set": "Set4",
        SetPropertiesString: [],
        Name: "Taint of Saidin",
        Index: "Set4.5",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 67,
        Code: "uuc",
        Properties: [
          {
            PropertyString: "+20 Faster Hit Recovery",
            Index: 4
          },
          {
            PropertyString: "+20 Faster Block Rate",
            Index: 3
          },
          {
            PropertyString: "10-25% Increased Chance of Blocking",
            Index: 2
          },
          {
            PropertyString: "+130-150 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+5-8 Replenish Life",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "16 to 30",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "220-240",
          EquipmentType: 0,
          Name: "Heater",
          RequiredStrength: 77,
          RequiredDexterity: 0,
          Durability: 88,
          ItemLevel: 58,
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
        "Set": "Set4",
        SetPropertiesString: [
          "+30 Faster Run/Walk (3 Items)",
          "to Life (6 Items)",
          "+ to Mana (5 Items)",
          "All Resistances +15 (4 Items)",
          "+25 better chance of getting magic item (2 Items)"
        ],
        Name: "Aviendha's Gift",
        Index: "Set4.6",
        Enabled: true,
        ItemLevel: 10,
        RequiredLevel: 21,
        Code: "vbt",
        Properties: [
          {
            PropertyString: "+25-35 Defense",
            Index: 0
          },
          {
            PropertyString: "10 to Dexterity",
            Index: 1
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+35 better chance of getting magic item",
        Index: 2
      },
      {
        PropertyString: "+65 better chance of getting magic item",
        Index: 4
      },
      {
        PropertyString: "1 to All Skills",
        Index: 6
      }
    ],
    FullProperties: [
      {
        PropertyString: "+30 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+40 to Maximum Damage",
        Index: 4
      },
      {
        PropertyString: "+7 to Sacrifice",
        Index: 2
      },
      {
        PropertyString: "All Resistances +40",
        Index: 1
      },
      {
        PropertyString: "+ extra gold from monsters",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Set5",
    Name: "Set5",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set5",
        SetPropertiesString: [],
        Name: "Heroes Stand",
        Index: "Set5.1",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 35,
        Code: "xng",
        Properties: [
          {
            PropertyString: "+50-75% Enhanced Damage",
            Index: 1
          },
          {
            PropertyString: "+30 Faster Hit Recovery",
            Index: 2
          },
          {
            PropertyString: "+130-170 Enhanced Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "365-429",
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
        Type: "Sword",
        "Set": "Set5",
        SetPropertiesString: [
          "Adds 100-150 to Damage (3 Items)",
          "+8 Life stolen per hit (2 Items)",
          "+3 to Sword Mastery (2 Items)"
        ],
        Name: "Warrior's Heroism",
        Index: "Set5.2",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 55,
        Code: "9cm",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+200-300% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "Socketed (1-4)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 0,
              DamageString: "(39-52) to (90-120)"
            },
            {
              Type: 1,
              DamageString: "(78-104) to (183-244)"
            }
          ],
          EquipmentType: 1,
          Name: "Dacian Falx",
          RequiredStrength: 91,
          RequiredDexterity: 20,
          Durability: 50,
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
        Type: "Gloves",
        "Set": "Set5",
        SetPropertiesString: [
          "1 to All Skills (2 Items)"
        ],
        Name: "Martyr's Principle",
        Index: "Set5.3",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 73,
        Code: "utg",
        Properties: [
          {
            PropertyString: "+25 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+7-15 Deadly Strike",
            Index: 2
          },
          {
            PropertyString: "+100-160 Defense",
            Index: 0
          },
          {
            PropertyString: "1-2 to Experience Gained",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "168-192",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "65% Chance of Open Wounds",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+150 to Maximum Damage",
        Index: 2
      },
      {
        PropertyString: "All Resistances +20",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Set6",
    Name: "Set6",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set6",
        SetPropertiesString: [],
        Name: "Judicial Decree",
        Index: "Set6.1",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 40,
        Code: "xcl",
        Properties: [
          {
            PropertyString: "+30 Faster Hit Recovery",
            Index: 1
          },
          {
            PropertyString: "+170-210 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "to Life",
            Index: 2
          },
          {
            PropertyString: "+ to Mana",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "477-548",
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
        Type: "Sword",
        "Set": "Set6",
        SetPropertiesString: [],
        Name: "Regime of Regulation",
        Index: "Set6.2",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 69,
        Code: "7sm",
        Properties: [
          {
            PropertyString: "+15 Increased Attack Speed",
            Index: 2
          },
          {
            PropertyString: "+240-290% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "Adds 30-80 to Damage",
            Index: 1
          },
          {
            PropertyString: "25 to Lightning Skill Damage",
            Index: 3
          },
          {
            PropertyString: "+8-15 Lightning Absorb",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(118-131) to (236-259)"
            }
          ],
          EquipmentType: 1,
          Name: "Ataghan",
          RequiredStrength: 138,
          RequiredDexterity: 95,
          Durability: 22,
          ItemLevel: 61,
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
        "Set": "Set6",
        SetPropertiesString: [
          "+20 Faster Block Rate (4 Items)",
          "20% Increased Chance of Blocking (3 Items)"
        ],
        Name: "King's Prescript",
        Index: "Set6.3",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 46,
        Code: "xit",
        Properties: [
          {
            PropertyString: "+125 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "All Resistances +15-20",
            Index: 2
          },
          {
            PropertyString: "+15 Damage Reduced by 15%%",
            Index: 1
          },
          {
            PropertyString: "Socketed (1)",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "15 to 24",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "135",
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
        Type: "Belt",
        "Set": "Set6",
        SetPropertiesString: [
          "+10 Faster Cast Rate (2 Items)",
          "+30 to Mana (3 Items)",
          "Regenerate Mana 50% (4 Items)"
        ],
        Name: "Born Supremacy",
        Index: "Set6.4",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "umc",
        Properties: [
          {
            PropertyString: "+ Defense",
            Index: 0
          },
          {
            PropertyString: "+25 Increase Maximum Life",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "58",
          EquipmentType: 0,
          Name: "Mithril Coil",
          RequiredStrength: 106,
          RequiredDexterity: 0,
          Durability: 16,
          ItemLevel: 75,
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
        "Set": "Set6",
        SetPropertiesString: [],
        Name: "Dominion's Thesis",
        Index: "Set6.5",
        Enabled: true,
        ItemLevel: 50,
        RequiredLevel: 50,
        Code: "amu",
        Properties: [
          {
            PropertyString: "+1-2",
            Index: 0
          },
          {
            PropertyString: "+10 Increased Attack Speed",
            Index: 3
          },
          {
            PropertyString: "+20-30% Enhanced Damage",
            Index: 1
          },
          {
            PropertyString: "+10-15 to Minimum Damage",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+20% Enhanced Damage",
        Index: 0
      },
      {
        PropertyString: "+30% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "+50% Enhanced Damage",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "10% Chance to cast level 10 nova on striking",
        Index: 2
      },
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+800 to Minimum Poison Damage",
        Index: 4
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 3
      },
      {
        PropertyString: "All Resistances +35",
        Index: 5
      },
      {
        PropertyString: "+ better chance of getting magic item",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Set7",
    Name: "Set7",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set7",
        SetPropertiesString: [
          "+200 Defense (4 Items)",
          "+50 better chance of getting magic item (5 Items)"
        ],
        Name: "Astral Body",
        Index: "Set7.1",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 44,
        Code: "xhn",
        Properties: [
          {
            PropertyString: "+15 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+15 Faster Hit Recovery",
            Index: 2
          },
          {
            PropertyString: "+15 Faster Block Rate",
            Index: 3
          },
          {
            PropertyString: "+175-225 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Fade",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "547-646",
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
        Type: "Sword",
        "Set": "Set7",
        SetPropertiesString: [
          "Adds 25-75 to Damage (4 Items)"
        ],
        Name: "Apparition of Malice",
        Index: "Set7.2",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 42,
        Code: "9ls",
        Properties: [
          {
            PropertyString: "+200-250% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "10-15 to Cold Skill Damage",
            Index: 2
          },
          {
            PropertyString: "15-20 to Enemy Cold Resistance",
            Index: 3
          },
          {
            PropertyString: "+225-250 Defense",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(30-35) to (126-147)"
            }
          ],
          EquipmentType: 1,
          Name: "Rune Sword",
          RequiredStrength: 103,
          RequiredDexterity: 79,
          Durability: 44,
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
        Type: "Shield",
        "Set": "Set7",
        SetPropertiesString: [
          "All Resistances +25 (5 Items)"
        ],
        Name: "Phantasm of Horror",
        Index: "Set7.3",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 47,
        Code: "xsh",
        Properties: [
          {
            PropertyString: "+15 Faster Block Rate",
            Index: 2
          },
          {
            PropertyString: "40% Increased Chance of Blocking",
            Index: 1
          },
          {
            PropertyString: "+100% Damage to Demons Damage to Demons",
            Index: 3
          },
          {
            PropertyString: "+75-100 Enhanced Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "14 to 20",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "89-102",
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
        Type: "Merc Equip",
        "Set": "Set7",
        SetPropertiesString: [],
        Name: "Haunted Wisdom",
        Index: "Set7.4",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 65,
        Code: "uhl",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 2
          },
          {
            PropertyString: "+30 Faster Cast Rate",
            Index: 3
          },
          {
            PropertyString: "+75-100 Enhanced Defense",
            Index: 1
          },
          {
            PropertyString: "+ Defense",
            Index: 0
          },
          {
            PropertyString: "Regenerate Mana 75%",
            Index: 4
          },
          {
            PropertyString: "+20-50 better chance of getting magic item",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "194-222",
          EquipmentType: 0,
          Name: "Giant Conch",
          RequiredStrength: 142,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 54,
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
        "Set": "Set7",
        SetPropertiesString: [],
        Name: "Revenant's Claw",
        Index: "Set7.5",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 72,
        Code: "utg",
        Properties: [
          {
            PropertyString: "+1-3 to Masteries (Barbarian only)",
            Index: 1
          },
          {
            PropertyString: "+5 Life stolen per hit",
            Index: 3
          },
          {
            PropertyString: "+180-220 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "30-50 to Life",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "168-192",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "1 to All Skills",
        Index: 2
      },
      {
        PropertyString: "Adds 1-300 to Lightning Damage",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "25 to Experience Gained",
        Index: 0
      },
      {
        PropertyString: "+ extra gold from monsters",
        Index: 2
      },
      {
        PropertyString: "+ better chance of getting magic item",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Set8",
    Name: "Set8",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set8",
        SetPropertiesString: [],
        Name: "Alyssa's Essence",
        Index: "Set8.1",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 47,
        Code: "xpl",
        Properties: [
          {
            PropertyString: "Adds 4-8 Mana stolen per hit",
            Index: 2
          },
          {
            PropertyString: "+8 Life stolen per hit",
            Index: 3
          },
          {
            PropertyString: "+3 Knockback",
            Index: 1
          },
          {
            PropertyString: "+135-180 Enhanced Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "531-632",
          EquipmentType: 0,
          Name: "Russet Armor",
          RequiredStrength: 97,
          RequiredDexterity: 0,
          Durability: 90,
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
        Type: "Bow",
        "Set": "Set8",
        SetPropertiesString: [
          "+50 to Minimum Damage (3 Items)",
          "+ to Maximum Damage (2 Items)"
        ],
        Name: "Alyssa's Leafblighter",
        Index: "Set8.2",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 44,
        Code: "8l8",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+180-220% Enhanced Damage",
            Index: 0
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
              Type: 1,
              DamageString: "(28-32) to (117-134)"
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
        Type: "Boots",
        "Set": "Set8",
        SetPropertiesString: [
          "+30 Faster Run/Walk (3 Items)"
        ],
        Name: "Alyssa's Sandals",
        Index: "Set8.3",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 60,
        Code: "ulb",
        Properties: [
          {
            PropertyString: "+20-30% Enhanced Damage",
            Index: 2
          },
          {
            PropertyString: "Adds 5-10 to Damage",
            Index: 1
          },
          {
            PropertyString: "+160-200 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "15 to Strength",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "65 to 100",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "143-165",
          EquipmentType: 0,
          Name: "Wyrmhide Boots",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 60,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "2 to All Skills",
        Index: 2
      },
      {
        PropertyString: "+30 Piercing Attack",
        Index: 3
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 1
      },
      {
        PropertyString: "+300 better chance of getting magic item",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Set9",
    Name: "Set9",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set9",
        SetPropertiesString: [],
        Name: "Unholy Vows",
        Index: "Set9.1",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 46,
        Code: "xlt",
        Properties: [
          {
            PropertyString: "+150-190 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "75-100 to Life",
            Index: 1
          },
          {
            PropertyString: "+20-30 Replenish Life",
            Index: 2
          },
          {
            PropertyString: "Regenerate Mana 100%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "632-733",
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
        Type: "Knife",
        "Set": "Set9",
        SetPropertiesString: [],
        Name: "Vampirebone Dagger",
        Index: "Set9.2",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 63,
        Code: "7dg",
        Properties: [
          {
            PropertyString: "+1-2",
            Index: 5
          },
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+220-250% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+20 Faster Cast Rate",
            Index: 4
          },
          {
            PropertyString: "10-20 to Poison Skill Damage",
            Index: 2
          },
          {
            PropertyString: "10-20 to Enemy Poison Resistance",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(73-80) to (156-171)"
            }
          ],
          EquipmentType: 1,
          Name: "Bone Knife",
          RequiredStrength: 38,
          RequiredDexterity: 75,
          Durability: 26,
          ItemLevel: 58,
          Type: {
            Name: "Knife",
            Index: "Knife",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Set9",
        SetPropertiesString: [
          "22% Increased Chance of Blocking (2 Items)",
          "15 to Dexterity (3 Items)",
          "+25 better chance of getting magic item (4 Items)"
        ],
        Name: "Wall of Modius",
        Index: "Set9.3",
        Enabled: true,
        ItemLevel: 12,
        RequiredLevel: 16,
        Code: "bsh",
        Properties: [
          {
            PropertyString: "Level 7-10 Thorns Aura When Equipped",
            Index: 0
          },
          {
            PropertyString: "15% Damage Taken Goes To Mana",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "3 to 6",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "10",
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
        "Set": "Set9",
        SetPropertiesString: [],
        Name: "Death's Door",
        Index: "Set9.4",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 32,
        Code: "zvb",
        Properties: [
          {
            PropertyString: "+120-130 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+55-75 to Mana",
            Index: 1
          },
          {
            PropertyString: "+2-4 to Mana after each Kill",
            Index: 2
          },
          {
            PropertyString: "1-2 to Experience Gained",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "73-83",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "15 to Energy",
        Index: 0
      },
      {
        PropertyString: "15 to Vitality",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "20% Chance to cast level 3 corpse explosion on striking",
        Index: 1
      },
      {
        PropertyString: "3 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+30 Faster Cast Rate",
        Index: 3
      },
      {
        PropertyString: "25 bonus to Attack Rating",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Set10",
    Name: "Set10",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set10",
        SetPropertiesString: [],
        Name: "Hanabal's Shattered Plate",
        Index: "Set10.1",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 48,
        Code: "xld",
        Properties: [
          {
            PropertyString: "+50 Piercing Attack",
            Index: 4
          },
          {
            PropertyString: "35-50% Chance of Open Wounds",
            Index: 3
          },
          {
            PropertyString: "+130-160 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+ Defense",
            Index: 1
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
          ArmorString: "558-631",
          EquipmentType: 0,
          Name: "Sharktooth Armor",
          RequiredStrength: 103,
          RequiredDexterity: 0,
          Durability: 48,
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
        Type: "Throwing Knife",
        "Set": "Set10",
        SetPropertiesString: [
          "+100 Increased Stack Size (2 Items)",
          "25-75 (3 Items)"
        ],
        Name: "Hanabal's Final Flight",
        Index: "Set10.2",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 62,
        Code: "7bk",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+200-300% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "-20-30% Target Defense",
            Index: 3
          },
          {
            PropertyString: "+75 Slows target by",
            Index: 2
          },
          {
            PropertyString: "+1 Cannot Be Frozen",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(81-108) to (105-140)"
            },
            {
              Type: 2,
              DamageString: "(69-92) to (117-156)"
            }
          ],
          EquipmentType: 1,
          Name: "Winged Knife",
          RequiredStrength: 45,
          RequiredDexterity: 142,
          Durability: 20,
          ItemLevel: 77,
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
        "Set": "Set10",
        SetPropertiesString: [
          "Lightning Resist +30% (3 Items)"
        ],
        Name: "Hanabal's Blurred Vision",
        Index: "Set10.3",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 38,
        Code: "xhl",
        Properties: [
          {
            PropertyString: "+170-200 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "10-20 to Strength",
            Index: 1
          },
          {
            PropertyString: "Fire Resist +25-35%",
            Index: 3
          },
          {
            PropertyString: "1-2 to Experience Gained",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "205-228",
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
        Type: "Boots",
        "Set": "Set10",
        SetPropertiesString: [
          "+20 Faster Run/Walk (2 Items)",
          "100 to Attack Rating (3 Items)"
        ],
        Name: "Hanabal's Bending Knee",
        Index: "Set10.4",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 45,
        Code: "xtb",
        Properties: [
          {
            PropertyString: "+100-120 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "15 to Dexterity",
            Index: 1
          },
          {
            PropertyString: "+300 extra gold from monsters",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "37 to 64",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "90-100",
          EquipmentType: 0,
          Name: "Battle Boots",
          RequiredStrength: 95,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 49,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "1 to All Skills",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "100 to Life",
        Index: 1
      },
      {
        PropertyString: "+50 to Mana",
        Index: 2
      },
      {
        PropertyString: "+150 better chance of getting magic item",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Set11",
    Name: "Set11",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set11",
        SetPropertiesString: [
          "+8 Replenish Life (5 Items)"
        ],
        Name: "Shroud of Anger",
        Index: "Set11.1",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 50,
        Code: "xth",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+180-220 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "55 to Life",
            Index: 3
          },
          {
            PropertyString: "Socketed (2)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "792-905",
          EquipmentType: 0,
          Name: "Embossed Plate",
          RequiredStrength: 125,
          RequiredDexterity: 0,
          Durability: 55,
          ItemLevel: 58,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Javelin",
        "Set": "Set11",
        SetPropertiesString: [
          "37% Chance to cast level 10 chain lightning on striking (2 Items)",
          "+6 to Charged Strike (3 Items)"
        ],
        Name: "Holy Fury",
        Index: "Set11.2",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 64,
        Code: "7s7",
        Properties: [
          {
            PropertyString: "+150-180% Enhanced Damage",
            Index: 3
          },
          {
            PropertyString: "Adds 25-100 to Damage",
            Index: 0
          },
          {
            PropertyString: "+200 Increased Stack Size",
            Index: 1
          },
          {
            PropertyString: "25-100",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(107-117) to (257-276)"
            },
            {
              Type: 2,
              DamageString: "(125-137) to (255-273)"
            }
          ],
          EquipmentType: 1,
          Name: "Balrog Spear",
          RequiredStrength: 127,
          RequiredDexterity: 95,
          Durability: 14,
          ItemLevel: 71,
          Type: {
            Name: "Javelin",
            Index: "Javelin",
            Class: ""
          },
          RequiredClass: "Spear"
        }
      },
      {
        Type: "Boots",
        "Set": "Set11",
        SetPropertiesString: [],
        Name: "Harvest of Cruelty",
        Index: "Set11.3",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 67,
        Code: "uvb",
        Properties: [
          {
            PropertyString: "5% Chance to cast level 1 teleport when struck",
            Index: 4
          },
          {
            PropertyString: "+25 Faster Run/Walk",
            Index: 1
          },
          {
            PropertyString: "+130-150 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+15-25 Life after each Kill",
            Index: 3
          },
          {
            PropertyString: "+15-25 better chance of getting magic item",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "60 to 110",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "131-142",
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
        Type: "Gloves",
        "Set": "Set11",
        SetPropertiesString: [
          "+1 to Frost Nova (2 Items)",
          "+1 to Blizzard (3 Items)",
          "+1 to Frozen Orb (4 Items)"
        ],
        Name: "Guiding Force",
        Index: "Set11.4",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 71,
        Code: "umg",
        Properties: [
          {
            PropertyString: "+20 Faster Cast Rate",
            Index: 0
          },
          {
            PropertyString: "+ to Mana",
            Index: 1
          },
          {
            PropertyString: "Regenerate Mana 25%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "59",
          EquipmentType: 0,
          Name: "Vambraces",
          RequiredStrength: 106,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 69,
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
        "Set": "Set11",
        SetPropertiesString: [
          "1 to All Skills (3 Items)"
        ],
        Name: "Embracing Hatred",
        Index: "Set11.5",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 39,
        Code: "ztb",
        Properties: [
          {
            PropertyString: "Adds 6-8 Mana stolen per hit",
            Index: 3
          },
          {
            PropertyString: "15 to Cold Skill Damage",
            Index: 0
          },
          {
            PropertyString: "+75-120 Enhanced Defense",
            Index: 2
          },
          {
            PropertyString: "+15-20 Cold Absorb",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "66-83",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "2 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "1 to All Skills",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "+20 to Maximum Fire Resist",
        Index: 2
      },
      {
        PropertyString: "All Resistances +50",
        Index: 0
      },
      {
        PropertyString: "+50 Damage Reduced by 50%%",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Set12",
    Name: "Set12",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set12",
        SetPropertiesString: [],
        Name: "Slave to Anarchy",
        Index: "Set12.1",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 51,
        Code: "xul",
        Properties: [
          {
            PropertyString: "Hit blinds target +3",
            Index: 2
          },
          {
            PropertyString: "+ Defense",
            Index: 0
          },
          {
            PropertyString: "+300-400 Defense",
            Index: 1
          },
          {
            PropertyString: "All Resistances +20",
            Index: 4
          },
          {
            PropertyString: "+15-20 Magic Damage Reduced by",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "615-715",
          EquipmentType: 0,
          Name: "Chaos Armor",
          RequiredStrength: 140,
          RequiredDexterity: 0,
          Durability: 70,
          ItemLevel: 61,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Spear",
        "Set": "Set12",
        SetPropertiesString: [],
        Name: "Bound by Honor",
        Index: "Set12.2",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "7tr",
        Properties: [
          {
            PropertyString: "+30 Increased Attack Speed",
            Index: 2
          },
          {
            PropertyString: "+240-270% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "Adds 50-200 to Damage",
            Index: 1
          },
          {
            PropertyString: "+8 Life stolen per hit",
            Index: 4
          },
          {
            PropertyString: "+5-9 to Sword Mastery",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(148-157) to (689-732)"
            }
          ],
          EquipmentType: 1,
          Name: "Stygian Pike",
          RequiredStrength: 168,
          RequiredDexterity: 97,
          Durability: 35,
          ItemLevel: 66,
          Type: {
            Name: "Spear",
            Index: "Spear",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Set12",
        SetPropertiesString: [
          "+3-5 Replenish Life (2 Items)"
        ],
        Name: "Equilibrium",
        Index: "Set12.3",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 43,
        Code: "zmb",
        Properties: [
          {
            PropertyString: "+ Defense",
            Index: 0
          },
          {
            PropertyString: "15-20 to Vitality",
            Index: 2
          },
          {
            PropertyString: "15-20 to Energy",
            Index: 3
          },
          {
            PropertyString: "+20-25 better chance of getting magic item",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "35",
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
      }
    ],
    PartialProperties: [],
    FullProperties: [
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "350 to Attack Rating",
        Index: 1
      },
      {
        PropertyString: "+5 to Whirlwind",
        Index: 3
      },
      {
        PropertyString: "+15 Slows target by",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Set13",
    Name: "Set13",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set13",
        SetPropertiesString: [],
        Name: "Firecam Gilded Plate",
        Index: "Set13.1",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 63,
        Code: "xar",
        Properties: [
          {
            PropertyString: "+150-180 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "All Resistances +75-100",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1045-1170",
          EquipmentType: 0,
          Name: "Ornate Plate",
          RequiredStrength: 170,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 64,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Polearm",
        "Set": "Set13",
        SetPropertiesString: [],
        Name: "Axe of Arvoreen",
        Index: "Set13.2",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "7o7",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 2
          },
          {
            PropertyString: "+220-270% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+200-300 to Maximum Damage",
            Index: 1
          },
          {
            PropertyString: "Socketed (1-3)",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(89-103) to (664-836)"
            }
          ],
          EquipmentType: 1,
          Name: "Ogre Axe",
          RequiredStrength: 195,
          RequiredDexterity: 75,
          Durability: 50,
          ItemLevel: 60,
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
        "Set": "Set13",
        SetPropertiesString: [],
        Name: "Windspar Mask",
        Index: "Set13.3",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "uhm",
        Properties: [
          {
            PropertyString: "+155-185 Enhanced Defense",
            Index: 1
          },
          {
            PropertyString: "+35-50 Damage Reduced by 35-50%%",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "293-327",
          EquipmentType: 0,
          Name: "Spired Helm",
          RequiredStrength: 192,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 79,
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
        "Set": "Set13",
        SetPropertiesString: [],
        Name: "Waterwyrd's Talon",
        Index: "Set13.4",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 55,
        Code: "xhg",
        Properties: [
          {
            PropertyString: "+40 Increased Attack Speed",
            Index: 0
          },
          {
            PropertyString: "+175-200 Enhanced Defense",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "121-132",
          EquipmentType: 0,
          Name: "War Gaunlets",
          RequiredStrength: 110,
          RequiredDexterity: 0,
          Durability: 24,
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
        Type: "Belt",
        "Set": "Set13",
        SetPropertiesString: [],
        Name: "Daystar Wrap",
        Index: "Set13.5",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 58,
        Code: "zhb",
        Properties: [
          {
            PropertyString: "175-200 to Life",
            Index: 0
          },
          {
            PropertyString: "+75-100 to Mana",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "41",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "1 to All Skills",
        Index: 2
      },
      {
        PropertyString: "1 to All Skills",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "5 to All Skills",
        Index: 0
      },
      {
        PropertyString: "25 to Strength",
        Index: 1
      },
      {
        PropertyString: "4 to Experience Gained",
        Index: 2
      },
      {
        PropertyString: "+125 extra gold from monsters",
        Index: 4
      },
      {
        PropertyString: "+125 better chance of getting magic item",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Set14",
    Name: "Set14",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set14",
        SetPropertiesString: [],
        Name: "Incarnadine Elven Plate",
        Index: "Set14.1",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 59,
        Code: "xtp",
        Properties: [
          {
            PropertyString: "3-4 to All Skills",
            Index: 0
          },
          {
            PropertyString: "+300-500 Defense",
            Index: 2
          },
          {
            PropertyString: "Socketed (2)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "525-725",
          EquipmentType: 0,
          Name: "Mage Plate",
          RequiredStrength: 55,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 60,
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
        "Set": "Set14",
        SetPropertiesString: [
          "+20 Faster Cast Rate (3 Items)",
          "2 to Experience Gained (4 Items)"
        ],
        Name: "Staff of Elemental Mastery",
        Index: "Set14.2",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 36,
        Code: "8ss",
        Properties: [
          {
            PropertyString: "2 to All Skills",
            Index: 0
          },
          {
            PropertyString: "+35 Increase Maximum Mana",
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
          Durability: 20,
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
        Type: "Merc Equip",
        "Set": "Set14",
        SetPropertiesString: [
          "+150 Defense (5 Items)",
          "2 to Strength (3 Items)",
          "+40 Increase Maximum Life (4 Items)",
          "+50 better chance of getting magic item (2 Items)"
        ],
        Name: "Lilarcor Cap",
        Index: "Set14.3",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 38,
        Code: "xap",
        Properties: [
          {
            PropertyString: "2 to All Skills",
            Index: 0
          },
          {
            PropertyString: "+75-100 Enhanced Defense",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "80-92",
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
        "Set": "Set14",
        SetPropertiesString: [],
        Name: "Teleomortis' Gloves",
        Index: "Set14.4",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 71,
        Code: "ulg",
        Properties: [
          {
            PropertyString: "2 to All Skills",
            Index: 0
          },
          {
            PropertyString: "+150-200 Defense",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "204-254",
          EquipmentType: 0,
          Name: "Bramble Mitts",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 57,
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
        "Set": "Set14",
        SetPropertiesString: [],
        Name: "Citadel Belt",
        Index: "Set14.5",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 66,
        Code: "ulc",
        Properties: [
          {
            PropertyString: "2 to All Skills",
            Index: 0
          },
          {
            PropertyString: "+125-175 Defense",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "180-230",
          EquipmentType: 0,
          Name: "Spiderweb Sash",
          RequiredStrength: 50,
          RequiredDexterity: 0,
          Durability: 12,
          ItemLevel: 61,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "All Resistances +25",
        Index: 0
      },
      {
        PropertyString: "All Resistances +25",
        Index: 2
      },
      {
        PropertyString: "+25 Damage Reduced by 25%%",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "4 to All Skills",
        Index: 0
      },
      {
        PropertyString: "All Resistances +50",
        Index: 2
      },
      {
        PropertyString: "+20 Life after each Kill",
        Index: 3
      },
      {
        PropertyString: "+5 to Mana after each Kill",
        Index: 4
      },
      {
        PropertyString: "+75 better chance of getting magic item",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Set15",
    Name: "Set15",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set15",
        SetPropertiesString: [],
        Name: "Holy Shroud of Amaunator",
        Index: "Set15.1",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "uui",
        Properties: [
          {
            PropertyString: "+4-6 to Sword Mastery",
            Index: 1
          },
          {
            PropertyString: "+1 Prevent Monster Heal",
            Index: 3
          },
          {
            PropertyString: "+160-200 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+25-30 better chance of getting magic item",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "941-1086",
          EquipmentType: 0,
          Name: "Dusk Shroud",
          RequiredStrength: 77,
          RequiredDexterity: 0,
          Durability: 20,
          ItemLevel: 65,
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
        "Set": "Set15",
        SetPropertiesString: [
          "Adds 40-80 to Damage (5 Items)"
        ],
        Name: "Holy Cleaver of Amaunator",
        Index: "Set15.2",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 47,
        Code: "9ax",
        Properties: [
          {
            PropertyString: "+280-320% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "Adds 25-100 to Cold Damage",
            Index: 2
          },
          {
            PropertyString: "10-15 to Enemy Cold Resistance",
            Index: 3
          },
          {
            PropertyString: "+2 Knockback",
            Index: 1
          },
          {
            PropertyString: "Cold Resist +40-50%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(38-42) to (125-138)"
            }
          ],
          EquipmentType: 1,
          Name: "Cleaver",
          RequiredStrength: 68,
          RequiredDexterity: 0,
          Durability: 24,
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
        Type: "Shield",
        "Set": "Set15",
        SetPropertiesString: [],
        Name: "Holy Buckler of Amaunator",
        Index: "Set15.3",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 65,
        Code: "uml",
        Properties: [
          {
            PropertyString: "+40 Faster Block Rate",
            Index: 1
          },
          {
            PropertyString: "+120-160 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+10-15 Magic Absorb",
            Index: 4
          },
          {
            PropertyString: "+10-15 Damage Reduced by 10-15%%",
            Index: 2
          },
          {
            PropertyString: "+15-20 Damage Reduced by",
            Index: 3
          },
          {
            PropertyString: "+8-12 Life after each Kill",
            Index: 5
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "17 to 29",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "239-283",
          EquipmentType: 0,
          Name: "Luna",
          RequiredStrength: 100,
          RequiredDexterity: 0,
          Durability: 84,
          ItemLevel: 61,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Ring",
        "Set": "Set15",
        SetPropertiesString: [],
        Name: "Holy Ring of Amaunator",
        Index: "Set15.4",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 33,
        Code: "rin",
        Properties: [
          {
            PropertyString: "125-200 to Attack Rating",
            Index: 3
          },
          {
            PropertyString: "15-20 to Strength",
            Index: 2
          },
          {
            PropertyString: "25-30 to Dexterity",
            Index: 1
          },
          {
            PropertyString: "35-50 to Life",
            Index: 0
          },
          {
            PropertyString: "+ Attacker Takes Damage of",
            Index: 4
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
        Type: "Boots",
        "Set": "Set15",
        SetPropertiesString: [
          "+20 to Maximum Damage (6 Items)",
          "8-15 to Lightning Skill Damage (5 Items)",
          "10-15 to Dexterity (2 Items)",
          "Lightning Resist +30% (3 Items)",
          "+33 better chance of getting magic item (4 Items)"
        ],
        Name: "Holy Boots of Amaunator",
        Index: "Set15.5",
        Enabled: true,
        ItemLevel: 15,
        RequiredLevel: 22,
        Code: "hbt",
        Properties: [
          {
            PropertyString: "+20 Faster Run/Walk",
            Index: 1
          },
          {
            PropertyString: "+ Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "10 to 20",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "12",
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
        "Set": "Set15",
        SetPropertiesString: [
          "Regenerate Mana 33% (5 Items)",
          "+33 better chance of getting magic item (4 Items)"
        ],
        Name: "Holy Sash of Amaunator",
        Index: "Set15.6",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 30,
        Code: "zlb",
        Properties: [
          {
            PropertyString: "+190-230 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "15-20 to Vitality",
            Index: 1
          },
          {
            PropertyString: "+10-15 Magic Damage Reduced by",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "54-63",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+25 better chance of getting magic item",
        Index: 0
      },
      {
        PropertyString: "+25 better chance of getting magic item",
        Index: 2
      },
      {
        PropertyString: "+25 better chance of getting magic item",
        Index: 4
      },
      {
        PropertyString: "+25 better chance of getting magic item",
        Index: 6
      }
    ],
    FullProperties: [
      {
        PropertyString: "3 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+50% Enhanced Damage",
        Index: 3
      },
      {
        PropertyString: "All Resistances +25",
        Index: 2
      },
      {
        PropertyString: "+100 extra gold from monsters",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Set16",
    Name: "Set16",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set16",
        SetPropertiesString: [],
        Name: "Frostwyrm Hide",
        Index: "Set16.1",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 60,
        Code: "uea",
        Properties: [
          {
            PropertyString: "+25 Increased Attack Speed",
            Index: 2
          },
          {
            PropertyString: "+30 Faster Cast Rate",
            Index: 0
          },
          {
            PropertyString: "+20 Faster Hit Recovery",
            Index: 1
          },
          {
            PropertyString: "to Dexterity",
            Index: 4
          },
          {
            PropertyString: "40-60 to Life",
            Index: 3
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "364",
          EquipmentType: 0,
          Name: "Wyrmhide",
          RequiredStrength: 84,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 67,
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
        "Set": "Set16",
        SetPropertiesString: [
          "+ to Maximum Damage (4 Items)"
        ],
        Name: "Hallowed Redeemer",
        Index: "Set16.2",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 72,
        Code: "7ba",
        Properties: [
          {
            PropertyString: "+30 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+290-350% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "Adds 12-15 Life stolen per hit",
            Index: 2
          },
          {
            PropertyString: "+3-7 to Mana after each Kill",
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
              Type: 1,
              DamageString: "(241-279) to (429-495)"
            }
          ],
          EquipmentType: 1,
          Name: "Silver-edged Axe",
          RequiredStrength: 166,
          RequiredDexterity: 65,
          Durability: 35,
          ItemLevel: 65,
          Type: {
            Name: "Axe",
            Index: "Axe",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Merc Equip",
        "Set": "Set16",
        SetPropertiesString: [
          "+25 better chance of getting magic item (3 Items)"
        ],
        Name: "Draconian Mask",
        Index: "Set16.3",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 40,
        Code: "xlm",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 4
          },
          {
            PropertyString: "+5 Mana stolen per hit",
            Index: 2
          },
          {
            PropertyString: "+120-150 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+ Defense",
            Index: 1
          },
          {
            PropertyString: "1-2 to Experience Gained",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "140-160",
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
        Type: "Belt",
        "Set": "Set16",
        SetPropertiesString: [],
        Name: "Girdle of Kitthix",
        Index: "Set16.4",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 75,
        Code: "uhc",
        Properties: [
          {
            PropertyString: "+25-35% Enhanced Damage",
            Index: 1
          },
          {
            PropertyString: "+3-5 to Sword Mastery",
            Index: 0
          },
          {
            PropertyString: "35 to Strength",
            Index: 3
          },
          {
            PropertyString: "+10-20 Damage Reduced by 10-20%%",
            Index: 2
          },
          {
            PropertyString: "Requirements -20%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "139-155",
          EquipmentType: 0,
          Name: "Colossus Girdle",
          RequiredStrength: 185,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 85,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      },
      {
        Type: "Gloves",
        "Set": "Set16",
        SetPropertiesString: [
          "45 to Life (4 Items)"
        ],
        Name: "Gauntlets of Quietus",
        Index: "Set16.5",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 48,
        Code: "xtg",
        Properties: [
          {
            PropertyString: "12% Chance to cast level 3 glacial spike on striking",
            Index: 2
          },
          {
            PropertyString: "+15 Increased Attack Speed",
            Index: 3
          },
          {
            PropertyString: "+1-3 to Sword Mastery",
            Index: 1
          },
          {
            PropertyString: "+250 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "10-15 to Dexterity",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "140",
          EquipmentType: 0,
          Name: "Battle Gauntlets",
          RequiredStrength: 88,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 49,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "All Resistances +1-15",
        Index: 0
      },
      {
        PropertyString: "All Resistances +1-20",
        Index: 2
      },
      {
        PropertyString: "All Resistances +10-40",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+20 Lightning Absorb",
        Index: 4
      },
      {
        PropertyString: "+100 Attacker Takes Lightning Damage of",
        Index: 3
      },
      {
        PropertyString: "+50 better chance of getting magic item",
        Index: 1
      },
      {
        PropertyString: "+ better chance of getting magic item",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Set17",
    Name: "Set17",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set17",
        SetPropertiesString: [],
        Name: "Sir Tylan's Sylvan Mail",
        Index: "Set17.1",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 73,
        Code: "ung",
        Properties: [
          {
            PropertyString: "+75-100% Enhanced Damage",
            Index: 1
          },
          {
            PropertyString: "Adds 25-50 to Damage",
            Index: 2
          },
          {
            PropertyString: "+230-300 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "5-20 to Strength",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1267-1536",
          EquipmentType: 0,
          Name: "Diamond Mail",
          RequiredStrength: 131,
          RequiredDexterity: 0,
          Durability: 26,
          ItemLevel: 72,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Crossbow",
        "Set": "Set17",
        SetPropertiesString: [
          "Adds 20-100 to Damage (5 Items)",
          "+10 to Magic Arrow (3 Items)",
          "+6 to Guided Arrow (4 Items)"
        ],
        Name: "Prince Karnd's Abomination",
        Index: "Set17.2",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 79,
        Code: "6rx",
        Properties: [
          {
            PropertyString: "+60 Increased Attack Speed",
            Index: 2
          },
          {
            PropertyString: "+200-240% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+40 Piercing Attack",
            Index: 3
          },
          {
            PropertyString: "Adds 30-60 to Damage",
            Index: 1
          },
          {
            PropertyString: "+1 Knockback",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(108-118) to (180-196)"
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
        Type: "Merc Equip",
        "Set": "Set17",
        SetPropertiesString: [],
        Name: "Yavin's Infernal Visage",
        Index: "Set17.3",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 81,
        Code: "uh9",
        Properties: [
          {
            PropertyString: "+50-75% Enhanced Damage",
            Index: 1
          },
          {
            PropertyString: "Adds 15-30 to Damage",
            Index: 2
          },
          {
            PropertyString: "+200-300 Defense",
            Index: 0
          },
          {
            PropertyString: "5-20 to Dexterity",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "300-400",
          EquipmentType: 0,
          Name: "Bone Visage",
          RequiredStrength: 106,
          RequiredDexterity: 0,
          Durability: 40,
          ItemLevel: 84,
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
        "Set": "Set17",
        SetPropertiesString: [
          "+20 Increased Attack Speed (3 Items)"
        ],
        Name: "Prince Gwar's Bracers",
        Index: "Set17.4",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 44,
        Code: "xmg",
        Properties: [
          {
            PropertyString: "+35-50% Enhanced Damage",
            Index: 1
          },
          {
            PropertyString: "+15-20 to Minimum Damage",
            Index: 2
          },
          {
            PropertyString: "+30-40 to Maximum Damage",
            Index: 3
          },
          {
            PropertyString: "+ Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "37",
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
        "Set": "Set17",
        SetPropertiesString: [
          "+30 Faster Run/Walk (4 Items)"
        ],
        Name: "Lady Daan's Celeritous Jambeau",
        Index: "Set17.5",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 56,
        Code: "xmb",
        Properties: [
          {
            PropertyString: "+10 Increased Attack Speed",
            Index: 3
          },
          {
            PropertyString: "+40-60% Enhanced Damage",
            Index: 1
          },
          {
            PropertyString: "+20-30 to Maximum Damage",
            Index: 2
          },
          {
            PropertyString: "+ Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: "23 to 52",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "37",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+15 Faster Hit Recovery",
        Index: 0
      },
      {
        PropertyString: "+25 Faster Hit Recovery",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+20 Increased Attack Speed",
        Index: 3
      },
      {
        PropertyString: "+ Deadly Strike",
        Index: 4
      },
      {
        PropertyString: "+8 to Dodge",
        Index: 2
      },
      {
        PropertyString: "All Resistances +40",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Set18",
    Name: "Set18",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set18",
        SetPropertiesString: [],
        Name: "Mail of Courageousness",
        Index: "Set18.1",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "uhn",
        Properties: [
          {
            PropertyString: "17% Chance to cast level 22 fire ball when struck",
            Index: 3
          },
          {
            PropertyString: "+20 Faster Hit Recovery",
            Index: 1
          },
          {
            PropertyString: "+150-190 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+3-5 Replenish Life",
            Index: 2
          },
          {
            PropertyString: "Fire Resist +35-45%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1000-1160",
          EquipmentType: 0,
          Name: "Boneweave",
          RequiredStrength: 158,
          RequiredDexterity: 0,
          Durability: 0,
          ItemLevel: 62,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Club",
        "Set": "Set18",
        SetPropertiesString: [],
        Name: "Baton of Intrepidity",
        Index: "Set18.2",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 68,
        Code: "7cl",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+230-280% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+1-3 to Berserk",
            Index: 3
          },
          {
            PropertyString: "+2 Knockback",
            Index: 2
          },
          {
            PropertyString: "Cold Resist +35-45%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(115-133) to (141-163)"
            }
          ],
          EquipmentType: 1,
          Name: "Truncheon",
          RequiredStrength: 88,
          RequiredDexterity: 43,
          Durability: 55,
          ItemLevel: 52,
          Type: {
            Name: "Club",
            Index: "Club",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Shield",
        "Set": "Set18",
        SetPropertiesString: [],
        Name: "Wall of Bravery",
        Index: "Set18.3",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 51,
        Code: "xow",
        Properties: [
          {
            PropertyString: "+25 Faster Block Rate",
            Index: 3
          },
          {
            PropertyString: "20-30% Increased Chance of Blocking",
            Index: 1
          },
          {
            PropertyString: "+100-130 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "All Resistances +25-35",
            Index: 4
          },
          {
            PropertyString: "Level 13 Amplify Damage (100 Charges)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "10 to 17",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "189-207",
          EquipmentType: 0,
          Name: "Pavise",
          RequiredStrength: 133,
          RequiredDexterity: 0,
          Durability: 72,
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
        Type: "Merc Equip",
        "Set": "Set18",
        SetPropertiesString: [],
        Name: "Helm of Chivalry",
        Index: "Set18.4",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 60,
        Code: "ukp",
        Properties: [
          {
            PropertyString: "100% Chance to cast level 4 iron maiden when you Kill an Enemy",
            Index: 3
          },
          {
            PropertyString: "+120-140 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "10-15 to Strength",
            Index: 2
          },
          {
            PropertyString: "10-15 to Dexterity",
            Index: 1
          },
          {
            PropertyString: "Lightning Resist +35-45%",
            Index: 4
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "224-244",
          EquipmentType: 0,
          Name: "Hydraskull",
          RequiredStrength: 84,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 63,
          Type: {
            Name: "Merc Equip",
            Index: "Merc Equip",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      },
      {
        Type: "Belt",
        "Set": "Set18",
        SetPropertiesString: [
          "Adds 1-100 to Lightning Damage (4 Items)",
          "30 to Life (2 Items)",
          "+30 to Mana (3 Items)"
        ],
        Name: "Belt of Temerity",
        Index: "Set18.5",
        Enabled: true,
        ItemLevel: 20,
        RequiredLevel: 30,
        Code: "hbl",
        Properties: [
          {
            PropertyString: "+100-120 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Poison Resist +35-45%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "18-19",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+20 Deadly Strike",
        Index: 0
      },
      {
        PropertyString: "+20 Chance of Crushing Blow",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "Level 1 Salvation Aura When Equipped",
        Index: 3
      },
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "to Life",
        Index: 1
      },
      {
        PropertyString: "+ to Mana",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Set19",
    Name: "Set19",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set19",
        SetPropertiesString: [],
        Name: "Ebony Plate of Evil",
        Index: "Set19.1",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 76,
        Code: "urs",
        Properties: [
          {
            PropertyString: "+1-3 to Poison and Bone Skills (Necromancer only)",
            Index: 2
          },
          {
            PropertyString: "+30 Faster Hit Recovery",
            Index: 3
          },
          {
            PropertyString: "+600-800 Defense",
            Index: 0
          },
          {
            PropertyString: "Level 30 Life Tap (12 Charges)",
            Index: 4
          },
          {
            PropertyString: "Requirements -35%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "995-1195",
          EquipmentType: 0,
          Name: "Great Hauberk",
          RequiredStrength: 118,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 75,
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
        "Set": "Set19",
        SetPropertiesString: [],
        Name: "Deflector of Light",
        Index: "Set19.2",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 49,
        Code: "xts",
        Properties: [
          {
            PropertyString: "Adds 4-6 Life stolen per hit",
            Index: 3
          },
          {
            PropertyString: "Freezes target +4",
            Index: 4
          },
          {
            PropertyString: "+120-140 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+15 Damage Reduced by 15%%",
            Index: 1
          },
          {
            PropertyString: "+1 Half Freeze Duration",
            Index: 5
          },
          {
            PropertyString: "Requirements -50%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "12 to 16",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "178-194",
          EquipmentType: 0,
          Name: "Ancient Shield",
          RequiredStrength: 110,
          RequiredDexterity: 0,
          Durability: 80,
          ItemLevel: 56,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Merc Equip",
        "Set": "Set19",
        SetPropertiesString: [],
        Name: "Dark Cataclysm",
        Index: "Set19.3",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 80,
        Code: "urn",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 3
          },
          {
            PropertyString: "+2 to Evade",
            Index: 4
          },
          {
            PropertyString: "+135-175 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+35 to Mana",
            Index: 2
          },
          {
            PropertyString: "Requirements -60%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "263-308",
          EquipmentType: 0,
          Name: "Corona",
          RequiredStrength: 174,
          RequiredDexterity: 0,
          Durability: 50,
          ItemLevel: 85,
          Type: {
            Name: "Merc Equip",
            Index: "Merc Equip",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      },
      {
        Type: "Wand",
        "Set": "Set19",
        SetPropertiesString: [
          "Adds 80-180 to Damage (4 Items)"
        ],
        Name: "Malignant Rod",
        Index: "Set19.4",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 40,
        Code: "9bw",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 0
          },
          {
            PropertyString: "+20 Faster Cast Rate",
            Index: 1
          },
          {
            PropertyString: "+ to Mana",
            Index: 2
          },
          {
            PropertyString: "Regenerate Mana 45%",
            Index: 3
          },
          {
            PropertyString: "1 to Experience Gained",
            Index: 4
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
          Durability: 15,
          ItemLevel: 43,
          Type: {
            Name: "Wand",
            Index: "Wand",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "1 to All Skills",
        Index: 0
      },
      {
        PropertyString: "50 to Life",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "100% Chance to cast level 9 charged bolt when struck",
        Index: 5
      },
      {
        PropertyString: "1 to All Skills",
        Index: 4
      },
      {
        PropertyString: "+30 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "All Resistances +30",
        Index: 1
      },
      {
        PropertyString: "+5 to Mana after each Kill",
        Index: 3
      },
      {
        PropertyString: "+75 better chance of getting magic item",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Set20",
    Name: "Set20",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set20",
        SetPropertiesString: [],
        Name: "Helshazag",
        Index: "Set20.1",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "upl",
        Properties: [
          {
            PropertyString: "+160-200 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+25 Increase Maximum Life",
            Index: 3
          },
          {
            PropertyString: "+20-25 Magic Damage Reduced by",
            Index: 4
          },
          {
            PropertyString: "+ better chance of getting magic item",
            Index: 2
          },
          {
            PropertyString: "Level 12 Find Item (200 Charges)",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1068-1233",
          EquipmentType: 0,
          Name: "Balrog Skin",
          RequiredStrength: 165,
          RequiredDexterity: 0,
          Durability: 30,
          ItemLevel: 76,
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
        "Set": "Set20",
        SetPropertiesString: [
          "Adds 300-500 Adds 300-500 magic damage (5 Items)"
        ],
        Name: "Summerswerd",
        Index: "Set20.2",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 83,
        Code: "7cr",
        Properties: [
          {
            PropertyString: "Adds 50-150 to Damage",
            Index: 0
          },
          {
            PropertyString: "+175% Damage to Demons Damage to Demons",
            Index: 4
          },
          {
            PropertyString: "+350% Damage to Undead Damage to Undead",
            Index: 3
          },
          {
            PropertyString: "Adds 12-15 Mana stolen per hit",
            Index: 1
          },
          {
            PropertyString: "Adds 15-18 Life stolen per hit",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "81 to 185"
            }
          ],
          EquipmentType: 1,
          Name: "Phase Blade",
          RequiredStrength: 25,
          RequiredDexterity: 136,
          Durability: 0,
          ItemLevel: 73,
          Type: {
            Name: "Sword",
            Index: "Sword",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Set20",
        SetPropertiesString: [],
        Name: "Helghast Waistband",
        Index: "Set20.3",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "utc",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 3
          },
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 4
          },
          {
            PropertyString: "+110-130 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "All Resistances +10-15",
            Index: 2
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
          ArmorString: "126-138",
          EquipmentType: 0,
          Name: "Troll Belt",
          RequiredStrength: 151,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 82,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      },
      {
        Type: "Boots",
        "Set": "Set20",
        SetPropertiesString: [
          "+30 Faster Run/Walk (3 Items)"
        ],
        Name: "Hallowed Greaves",
        Index: "Set20.4",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 58,
        Code: "xtb",
        Properties: [
          {
            PropertyString: "+1",
            Index: 4
          },
          {
            PropertyString: "+30 Faster Hit Recovery",
            Index: 3
          },
          {
            PropertyString: "+25-35 to Minimum Damage",
            Index: 1
          },
          {
            PropertyString: "+125-150 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+75 extra gold from monsters",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "37 to 64",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "90-100",
          EquipmentType: 0,
          Name: "Battle Boots",
          RequiredStrength: 95,
          RequiredDexterity: 0,
          Durability: 30,
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
        Type: "Shield",
        "Set": "Set20",
        SetPropertiesString: [
          "Level 6 Holy Shock Aura When Equipped (2 Items)",
          "+65 better chance of getting magic item (3 Items)"
        ],
        Name: "Sunspear Deflector",
        Index: "Set20.5",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 63,
        Code: "xow",
        Properties: [
          {
            PropertyString: "+15 Faster Block Rate",
            Index: 2
          },
          {
            PropertyString: "100% Increased Chance of Blocking",
            Index: 1
          },
          {
            PropertyString: "+175-200 Enhanced Defense",
            Index: 0
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "10 to 17",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "189-207",
          EquipmentType: 0,
          Name: "Pavise",
          RequiredStrength: 133,
          RequiredDexterity: 0,
          Durability: 72,
          ItemLevel: 50,
          Type: {
            Name: "Shield",
            Index: "Shield",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 0
      },
      {
        PropertyString: "+10 Increased Attack Speed",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+25 Cold Absorb",
        Index: 2
      },
      {
        PropertyString: "+25 Lightning Absorb",
        Index: 3
      },
      {
        PropertyString: "+25 Fire Absorb",
        Index: 1
      },
      {
        PropertyString: "+70 Poison Length Reduced by",
        Index: 4
      }
    ],
    Level: 1
  },
  {
    Index: "Set21",
    Name: "Set21",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set21",
        SetPropertiesString: [],
        Name: "Imperial Plate",
        Index: "Set21.1",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 73,
        Code: "ult",
        Properties: [
          {
            PropertyString: "+200% Damage to Demons Damage to Demons",
            Index: 0
          },
          {
            PropertyString: "75-100 to Enemy Fire Resistance",
            Index: 2
          },
          {
            PropertyString: "+100-125 Enhanced Defense",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "844-949",
          EquipmentType: 0,
          Name: "Hellforge Plate",
          RequiredStrength: 196,
          RequiredDexterity: 0,
          Durability: 60,
          ItemLevel: 78,
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
        "Set": "Set21",
        SetPropertiesString: [],
        Name: "Imperial Helm",
        Index: "Set21.2",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 40,
        Code: "xkp",
        Properties: [
          {
            PropertyString: "75-100 to Enemy Cold Resistance",
            Index: 2
          },
          {
            PropertyString: "+125-150 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "+15 Damage Reduced by 15%%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "119-132",
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
        Type: "Belt",
        "Set": "Set21",
        SetPropertiesString: [],
        Name: "Imperial Girdle",
        Index: "Set21.3",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 75,
        Code: "uhc",
        Properties: [
          {
            PropertyString: "75-100 to Enemy Lightning Resistance",
            Index: 2
          },
          {
            PropertyString: "+125-150 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "All Resistances +35-40",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "139-155",
          EquipmentType: 0,
          Name: "Colossus Girdle",
          RequiredStrength: 185,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 85,
          Type: {
            Name: "Belt",
            Index: "Belt",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      },
      {
        Type: "Boots",
        "Set": "Set21",
        SetPropertiesString: [],
        Name: "Imperial Greaves",
        Index: "Set21.4",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "uhb",
        Properties: [
          {
            PropertyString: "75-100 to Enemy Poison Resistance",
            Index: 2
          },
          {
            PropertyString: "+120-140 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Magic Resist +20%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "83 to 149",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "138-151",
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
        Type: "Gloves",
        "Set": "Set21",
        SetPropertiesString: [
          "+20 Increased Attack Speed (3 Items)"
        ],
        Name: "Imperial Gauntlets",
        Index: "Set21.5",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 76,
        Code: "uhg",
        Properties: [
          {
            PropertyString: "+30 Faster Cast Rate",
            Index: 1
          },
          {
            PropertyString: "+120-150 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "Regenerate Mana 60%",
            Index: 3
          },
          {
            PropertyString: "Requirements -50%",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "138-157",
          EquipmentType: 0,
          Name: "Ogre Gauntlets",
          RequiredStrength: 185,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 85,
          Type: {
            Name: "Gloves",
            Index: "Gloves",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      },
      {
        Type: "Scepter",
        "Set": "Set21",
        SetPropertiesString: [
          "Adds 50-100 to Damage (4 Items)"
        ],
        Name: "Imperial Scepter",
        Index: "Set21.6",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 50,
        Code: "9ws",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 1
          },
          {
            PropertyString: "+200-220% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "Adds 6-8 Life stolen per hit",
            Index: 3
          },
          {
            PropertyString: "5 to Light Radius",
            Index: 4
          },
          {
            PropertyString: "Socketed (2-3)",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 3,
              DamageString: "(48-51) to (114-121)"
            }
          ],
          EquipmentType: 1,
          Name: "Divine Scepter",
          RequiredStrength: 103,
          RequiredDexterity: 0,
          Durability: 70,
          ItemLevel: 45,
          Type: {
            Name: "Scepter",
            Index: "Scepter",
            Class: ""
          },
          RequiredClass: ""
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 0
      },
      {
        PropertyString: "+20 Faster Hit Recovery",
        Index: 2
      },
      {
        PropertyString: "+30 Faster Block Rate",
        Index: 4
      }
    ],
    FullProperties: [
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+30 Faster Run/Walk",
        Index: 3
      },
      {
        PropertyString: "15% Increased Chance of Blocking",
        Index: 1
      },
      {
        PropertyString: "2 to Experience Gained",
        Index: 2
      }
    ],
    Level: 1
  },
  {
    Index: "Set22",
    Name: "Set22",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set22",
        SetPropertiesString: [],
        Name: "Great White Terror",
        Index: "Set22.1",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 74,
        Code: "uld",
        Properties: [
          {
            PropertyString: "+20 Faster Run/Walk",
            Index: 4
          },
          {
            PropertyString: "Lightning Resist -50%",
            Index: 2
          },
          {
            PropertyString: "Fire Resist +75%",
            Index: 3
          },
          {
            PropertyString: "+25 Damage Reduced by 25%%",
            Index: 0
          },
          {
            PropertyString: "+35-50 Damage Reduced by",
            Index: 1
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "417",
          EquipmentType: 0,
          Name: "Kraken Shell",
          RequiredStrength: 174,
          RequiredDexterity: 0,
          Durability: 48,
          ItemLevel: 81,
          Type: {
            Name: "Armor",
            Index: "Armor",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Polearm",
        "Set": "Set22",
        SetPropertiesString: [
          "+45 Increased Attack Speed (4 Items)",
          "Adds 50-250 to Damage (3 Items)"
        ],
        Name: "Feeding Frenzy",
        Index: "Set22.2",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 77,
        Code: "7wc",
        Properties: [
          {
            PropertyString: "+3",
            Index: 4
          },
          {
            PropertyString: "+220-290% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+6 Mana stolen per hit",
            Index: 3
          },
          {
            PropertyString: "+6 Life stolen per hit",
            Index: 2
          },
          {
            PropertyString: "Requirements -25%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 1,
              DamageString: "(128-156) to (364-444)"
            }
          ],
          EquipmentType: 1,
          Name: "Giant Thresher",
          RequiredStrength: 188,
          RequiredDexterity: 140,
          Durability: 55,
          ItemLevel: 85,
          Type: {
            Name: "Polearm",
            Index: "Polearm",
            Class: ""
          },
          RequiredClass: ""
        }
      },
      {
        Type: "Belt",
        "Set": "Set22",
        SetPropertiesString: [],
        Name: "Mako's Quickness",
        Index: "Set22.3",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 39,
        Code: "zvb",
        Properties: [
          {
            PropertyString: "+15 Faster Run/Walk",
            Index: 1
          },
          {
            PropertyString: "+15 Faster Hit Recovery",
            Index: 2
          },
          {
            PropertyString: "+4-8 to Avoid",
            Index: 4
          },
          {
            PropertyString: "+130-160 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "25 to Dexterity",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "73-83",
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
        Type: "Boots",
        "Set": "Set22",
        SetPropertiesString: [],
        Name: "Hammerhead's Persistance",
        Index: "Set22.4",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 44,
        Code: "xvb",
        Properties: [
          {
            PropertyString: "+15-25 Chance of Crushing Blow",
            Index: 3
          },
          {
            PropertyString: "+100 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "60-90 to Life",
            Index: 4
          },
          {
            PropertyString: "+10 Damage Reduced by 10%%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "28 to 50",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "68",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+1 Half Freeze Duration",
        Index: 0
      },
      {
        PropertyString: "+25 Deadly Strike",
        Index: 2
      }
    ],
    FullProperties: [
      {
        PropertyString: "15% Chance to cast level 18 shock wave on striking",
        Index: 4
      },
      {
        PropertyString: "2 to All Skills",
        Index: 0
      },
      {
        PropertyString: "+150% Enhanced Damage",
        Index: 2
      },
      {
        PropertyString: "Adds 25-50 to Damage",
        Index: 3
      },
      {
        PropertyString: "+66 Chance of Crushing Blow",
        Index: 1
      }
    ],
    Level: 1
  },
  {
    Index: "Set23",
    Name: "Set23",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set23",
        SetPropertiesString: [],
        Name: "Angels",
        Index: "Set23.1",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 81,
        Code: "uth",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 5
          },
          {
            PropertyString: "+20 Faster Cast Rate",
            Index: 0
          },
          {
            PropertyString: "+20 Faster Hit Recovery",
            Index: 2
          },
          {
            PropertyString: "+20-25 Faster Block Rate",
            Index: 1
          },
          {
            PropertyString: "+ better chance of getting magic item",
            Index: 3
          },
          {
            PropertyString: "Socketed (1-2)",
            Index: 4
          }
        ],
        DamageArmorEnhanced: false,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "433",
          EquipmentType: 0,
          Name: "Lacquered Plate",
          RequiredStrength: 208,
          RequiredDexterity: 0,
          Durability: 55,
          ItemLevel: 82,
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
        "Set": "Set23",
        SetPropertiesString: [
          "+250 to Maximum Damage (6 Items)",
          "Adds 100-200 Adds 100-200 magic damage (2 Items)",
          "Adds 100-200 to Fire Damage (4 Items)",
          "Adds 100-200 to Lightning Damage (5 Items)",
          "Adds 100-200 to Cold Damage (3 Items)"
        ],
        Name: "Principality",
        Index: "Set23.2",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 45,
        Code: "9b9",
        Properties: [
          {
            PropertyString: "+20 Increased Attack Speed",
            Index: 4
          },
          {
            PropertyString: "+260-300% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+15 Chance of Crushing Blow",
            Index: 2
          },
          {
            PropertyString: "+15 Deadly Strike",
            Index: 1
          },
          {
            PropertyString: "-1 to -5 Drain Life",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageTypes: [
            {
              Type: 0,
              DamageString: "(50-56) to (144-160)"
            },
            {
              Type: 1,
              DamageString: "(140-156) to (216-240)"
            }
          ],
          EquipmentType: 1,
          Name: "Gothic Sword",
          RequiredStrength: 113,
          RequiredDexterity: 20,
          Durability: 40,
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
        Type: "Belt",
        "Set": "Set23",
        SetPropertiesString: [
          "Regenerate Mana 50% (3 Items)",
          "All Resistances +10 (4 Items)",
          "+35 better chance of getting magic item (5 Items)"
        ],
        Name: "Virtue",
        Index: "Set23.3",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 36,
        Code: "zlb",
        Properties: [
          {
            PropertyString: "+80-110 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "35-50 to Life",
            Index: 1
          },
          {
            PropertyString: "+6 Replenish Life",
            Index: 3
          },
          {
            PropertyString: "+7 to Mana after each Kill",
            Index: 2
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "54-63",
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
        Type: "Boots",
        "Set": "Set23",
        SetPropertiesString: [
          "35 to Strength (5 Items)"
        ],
        Name: "Dominion",
        Index: "Set23.4",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 70,
        Code: "utb",
        Properties: [
          {
            PropertyString: "+50 Faster Run/Walk",
            Index: 2
          },
          {
            PropertyString: "-20 Faster Hit Recovery",
            Index: 4
          },
          {
            PropertyString: "+180-210 Enhanced Defense",
            Index: 0
          },
          {
            PropertyString: "-20 to Dexterity",
            Index: 3
          },
          {
            PropertyString: "Requirements -20%",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: "50 to 145",
          DamageStringPrefix: "Unhandled Damage Prefix",
          ArmorString: "168-186",
          EquipmentType: 0,
          Name: "Mirrored Boots",
          RequiredStrength: 163,
          RequiredDexterity: 0,
          Durability: 18,
          ItemLevel: 81,
          Type: {
            Name: "Boots",
            Index: "Boots",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      },
      {
        Type: "Merc Equip",
        "Set": "Set23",
        SetPropertiesString: [],
        Name: "Cherubim",
        Index: "Set23.5",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 61,
        Code: "ulm",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 0
          },
          {
            PropertyString: "+150-200 Defense",
            Index: 1
          },
          {
            PropertyString: "to Energy",
            Index: 4
          },
          {
            PropertyString: "+30 to Mana",
            Index: 2
          },
          {
            PropertyString: "Poison Resist +25%",
            Index: 3
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "255-305",
          EquipmentType: 0,
          Name: "Armet",
          RequiredStrength: 109,
          RequiredDexterity: 0,
          Durability: 24,
          ItemLevel: 68,
          Type: {
            Name: "Merc Equip",
            Index: "Merc Equip",
            Class: ""
          },
          RequiredClass: "Helm"
        }
      },
      {
        Type: "Ring",
        "Set": "Set23",
        SetPropertiesString: [],
        Name: "Seraphim",
        Index: "Set23.6",
        Enabled: true,
        ItemLevel: 49,
        RequiredLevel: 49,
        Code: "rin",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 0
          },
          {
            PropertyString: "+25% Enhanced Damage",
            Index: 1
          },
          {
            PropertyString: "+10 Life after each Kill",
            Index: 2
          },
          {
            PropertyString: "1-2 to Experience Gained",
            Index: 3
          },
          {
            PropertyString: "+5-10 Reduces all Vendor Prices",
            Index: 4
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "+20 better chance of getting magic item",
        Index: 0
      },
      {
        PropertyString: "+25 better chance of getting magic item",
        Index: 2
      },
      {
        PropertyString: "+45 better chance of getting magic item",
        Index: 4
      },
      {
        PropertyString: "2 to All Skills",
        Index: 6
      }
    ],
    FullProperties: [
      {
        PropertyString: "Slain Monsters Rest in Peace",
        Index: 2
      },
      {
        PropertyString: "+20 Replenish Life",
        Index: 1
      },
      {
        PropertyString: "All Resistances +40",
        Index: 0
      }
    ],
    Level: 1
  },
  {
    Index: "Set24",
    Name: "Set24",
    SetItems: [
      {
        Type: "Armor",
        "Set": "Set24",
        SetPropertiesString: [],
        Name: "Mephisto's Misty Aura",
        Index: "Set24.1",
        Enabled: true,
        ItemLevel: 60,
        RequiredLevel: 80,
        Code: "uul",
        Properties: [
          {
            PropertyString: "20% Chance to cast level 8 cloak of shadows when struck",
            Index: 0
          },
          {
            PropertyString: "Level 1 Cleansing Aura When Equipped",
            Index: 3
          },
          {
            PropertyString: "+140-160 Enhanced Defense",
            Index: 2
          },
          {
            PropertyString: "-5 to Light Radius",
            Index: 1
          }
        ],
        DamageArmorEnhanced: true,
        Equipment: {
          DamageString: null,
          DamageStringPrefix: null,
          ArmorString: "1072-1162",
          EquipmentType: 0,
          Name: "Shadow Plate",
          RequiredStrength: 230,
          RequiredDexterity: 0,
          Durability: 70,
          ItemLevel: 83,
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
        "Set": "Set24",
        SetPropertiesString: [
          "+50 better chance of getting magic item (4 Items)"
        ],
        Name: "Diablo's Soulstone Ring",
        Index: "Set24.2",
        Enabled: true,
        ItemLevel: 77,
        RequiredLevel: 77,
        Code: "rin",
        Properties: [
          {
            PropertyString: "1 to All Skills",
            Index: 0
          },
          {
            PropertyString: "50 to Life",
            Index: 1
          },
          {
            PropertyString: "+50 to Mana",
            Index: 2
          },
          {
            PropertyString: "+10 Damage Reduced by 10%%",
            Index: 3
          },
          {
            PropertyString: "+20-25 Magic Damage Reduced by",
            Index: 4
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
        "Set": "Set24",
        SetPropertiesString: [],
        Name: "Baal's Cryptic Amulet",
        Index: "Set24.3",
        Enabled: true,
        ItemLevel: 74,
        RequiredLevel: 74,
        Code: "amu",
        Properties: [
          {
            PropertyString: "2 to All Skills",
            Index: 0
          },
          {
            PropertyString: "+25 Replenish Life",
            Index: 2
          },
          {
            PropertyString: "Regenerate Mana 50%",
            Index: 3
          },
          {
            PropertyString: "+35-50 better chance of getting magic item",
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
        Type: "Javelin",
        "Set": "Set24",
        SetPropertiesString: [
          "+25 Increased Attack Speed (2 Items)",
          "+8 to Lightning Fury (3 Items)"
        ],
        Name: "Heaven's Lances",
        Index: "Set24.4",
        Enabled: true,
        ItemLevel: 30,
        RequiredLevel: 51,
        Code: "9ts",
        Properties: [
          {
            PropertyString: "+190-240% Enhanced Damage",
            Index: 0
          },
          {
            PropertyString: "+2 Knockback",
            Index: 3
          },
          {
            PropertyString: "+75 Increased Stack Size",
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
              DamageString: "(37-44) to (101-119)"
            },
            {
              Type: 2,
              DamageString: "(52-61) to (156-183)"
            }
          ],
          EquipmentType: 1,
          Name: "Harpoon",
          RequiredStrength: 25,
          RequiredDexterity: 118,
          Durability: 18,
          ItemLevel: 51,
          Type: {
            Name: "Javelin",
            Index: "Javelin",
            Class: ""
          },
          RequiredClass: "Spear"
        }
      }
    ],
    PartialProperties: [
      {
        PropertyString: "2 to All Skills",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "13% Chance to cast level 31 charged bolt when struck",
        Index: 1
      },
      {
        PropertyString: "+75 Piercing Attack",
        Index: 0
      },
      {
        PropertyString: "55% Chance of Open Wounds",
        Index: 5
      },
      {
        PropertyString: "+1 Prevent Monster Heal",
        Index: 4
      },
      {
        PropertyString: "+20 Slows target by",
        Index: 2
      },
      {
        PropertyString: "All Resistances +40",
        Index: 3
      }
    ],
    Level: 1
  },
  {
    Index: "Set25",
    Name: "Set25",
    SetItems: [
      {
        Type: "Ring",
        "Set": "Set25",
        SetPropertiesString: [
          "100 to Fire Skill Damage (3 Items)",
          "-20 Drain Life (2 Items)",
          "-15 Drain Life (3 Items)",
          "+200 better chance of getting magic item (2 Items)"
        ],
        Name: "Demonic Chuckle",
        Index: "Set25.1",
        Enabled: true,
        ItemLevel: 45,
        RequiredLevel: 45,
        Code: "rin",
        Properties: [
          {
            PropertyString: "35-50 to Life",
            Index: 0
          },
          {
            PropertyString: "+25 to Mana",
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
        Type: "Ring",
        "Set": "Set25",
        SetPropertiesString: [
          "100 to Lightning Skill Damage (3 Items)",
          "-20 Drain Life (2 Items)",
          "-15 Drain Life (3 Items)",
          "+200 better chance of getting magic item (2 Items)"
        ],
        Name: "Evil Humor",
        Index: "Set25.2",
        Enabled: true,
        ItemLevel: 45,
        RequiredLevel: 45,
        Code: "rin",
        Properties: [
          {
            PropertyString: "35-50 to Life",
            Index: 0
          },
          {
            PropertyString: "+25 to Mana",
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
        "Set": "Set25",
        SetPropertiesString: [
          "100 to Cold Skill Damage (3 Items)",
          "-20 Drain Life (2 Items)",
          "-15 Drain Life (3 Items)",
          "+200 better chance of getting magic item (2 Items)"
        ],
        Name: "Temptation's Death",
        Index: "Set25.3",
        Enabled: true,
        ItemLevel: 45,
        RequiredLevel: 45,
        Code: "amu",
        Properties: [
          {
            PropertyString: "50-75 to Life",
            Index: 0
          },
          {
            PropertyString: "+40 to Mana",
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
      }
    ],
    PartialProperties: [
      {
        PropertyString: "-15 Drain Life",
        Index: 0
      }
    ],
    FullProperties: [
      {
        PropertyString: "10 to All Skills",
        Index: 4
      },
      {
        PropertyString: "100 to Poison Skill Damage",
        Index: 2
      },
      {
        PropertyString: "-45 Drain Life",
        Index: 0
      },
      {
        PropertyString: "-90 to Experience Gained",
        Index: 1
      },
      {
        PropertyString: "+100 better chance of getting magic item",
        Index: 3
      }
    ],
    Level: 1
  }
];
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __knownSymbol = (name2, symbol) => (symbol = Symbol[name2]) ? symbol : Symbol.for("Symbol." + name2);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __decoratorStart = (base) => [, , , __create(null)];
var __decoratorStrings = ["class", "method", "getter", "setter", "accessor", "field", "value", "get", "set"];
var __expectFn = (fn) => fn !== void 0 && typeof fn !== "function" ? __typeError("Function expected") : fn;
var __decoratorContext = (kind, name2, done, metadata, fns) => ({ kind: __decoratorStrings[kind], name: name2, metadata, addInitializer: (fn) => done._ ? __typeError("Already initialized") : fns.push(__expectFn(fn || null)) });
var __decoratorMetadata = (array, target) => __defNormalProp(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++) flags & 1 ? fns[i].call(self) : value = fns[i].call(self, value);
  return value;
};
var __decorateElement = (array, flags, name2, decorators, target, extra) => {
  var fn, it, done, ctx, access, k = flags & 7, s = !!(flags & 8), p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? s ? 1 : 2 : 0, key = __decoratorStrings[k + 5];
  var initializers = k > 3 && (array[j - 1] = []), extraInitializers = array[j] || (array[j] = []);
  var desc = k && (!p && !s && (target = target.prototype), k < 5 && (k > 3 || !p) && __getOwnPropDesc(k < 4 ? target : { get [name2]() {
    return __privateGet(this, extra);
  }, set [name2](x) {
    return __privateSet(this, extra, x);
  } }, name2));
  k ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name2) : __name(target, name2);
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext(k, name2, done = {}, array[3], extraInitializers);
    if (k) {
      ctx.static = s, ctx.private = p, access = ctx.access = { has: p ? (x) => __privateIn(target, x) : (x) => name2 in x };
      if (k ^ 3) access.get = p ? (x) => (k ^ 1 ? __privateGet : __privateMethod)(x, target, k ^ 4 ? extra : desc.get) : (x) => x[name2];
      if (k > 2) access.set = p ? (x, y) => __privateSet(x, target, y, k ^ 4 ? extra : desc.set) : (x, y) => x[name2] = y;
    }
    it = (0, decorators[i])(k ? k < 4 ? p ? extra : desc[key] : k > 4 ? void 0 : { get: desc.get, set: desc.set } : target, ctx), done._ = 1;
    if (k ^ 4 || it === void 0) __expectFn(it) && (k > 4 ? initializers.unshift(it) : k ? p ? extra = it : desc[key] = it : target = it);
    else if (typeof it !== "object" || it === null) __typeError("Object expected");
    else __expectFn(fn = it.get) && (desc.get = fn), __expectFn(fn = it.set) && (desc.set = fn), __expectFn(fn = it.init) && initializers.unshift(fn);
  }
  return k || __decoratorMetadata(array, target), desc && __defProp(target, name2, desc), p ? k ^ 4 ? extra : desc : target;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) => Object(obj) !== obj ? __typeError('Cannot use the "in" operator on this value') : member.has(obj);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _class_dec, _search_dec, _Sets_decorators, _init;
_Sets_decorators = [customElement(__au2ViewDef)], _search_dec = [bindable], _class_dec = [bindable];
class Sets {
  constructor() {
    __publicField(this, "sets", json);
    __publicField(this, "search", __runInitializers(_init, 8, this)), __runInitializers(_init, 11, this);
    __publicField(this, "class", __runInitializers(_init, 12, this)), __runInitializers(_init, 15, this);
    __publicField(this, "classes", [
      { value: "Amazon", label: "Amazon" },
      { value: "Assassin", label: "Assassin" },
      { value: "Barbarian", label: "Barbarian" },
      { value: "Druid", label: "Druid" },
      { value: "Necromancer", label: "Necromancer" },
      { value: "Paladin", label: "Paladin" },
      { value: "Sorceress", label: "Sorceress" }
    ]);
  }
  searchChanged() {
    if (!this.search) {
      this.sets = json;
      return;
    }
    this.updateList();
  }
  classChanged() {
    this.sets = json;
    this.updateList();
  }
  updateList() {
    if (!this.search && !this.class) {
      return;
    }
    try {
      const foundSets = [];
      loop1:
        for (const set of json) {
          set.AllProperties = [...set?.FullProperties, ...set?.PartialProperties];
          if (this.search && set.Name?.toLowerCase().includes(this.search?.toLowerCase())) {
            foundSets.push(set);
            continue;
          }
          for (const property of set?.AllProperties) {
            if (this.class) {
              if (property?.PropertyString?.toLowerCase()?.includes(this.class?.toLowerCase())) {
                foundSets.push(set);
                continue loop1;
              }
            } else {
              if (property?.PropertyString?.toLowerCase()?.includes(this.search?.toLowerCase())) {
                foundSets.push(set);
                continue loop1;
              }
            }
          }
          for (const setItem of set?.SetItems) {
            for (const property of setItem?.Properties) {
              if (this.class) {
                if (property?.PropertyString?.toLowerCase()?.includes(this.class?.toLowerCase())) {
                  foundSets.push(set);
                  continue loop1;
                }
              } else {
                if (property?.PropertyString?.toLowerCase()?.includes(this.search?.toLowerCase())) {
                  foundSets.push(set);
                  continue loop1;
                }
              }
            }
          }
        }
      this.sets = foundSets;
    } catch (e) {
      console.error(e);
    }
  }
  getDamageTypeString(type) {
    switch (type) {
      case 3:
        return "Damage: ";
      case 2:
        return "Throw Damage: ";
      case 1:
        return "Two-Handed Damage: ";
      default:
        return "Damage: ";
    }
  }
}
_init = __decoratorStart();
__decorateElement(_init, 5, "search", _search_dec, Sets);
__decorateElement(_init, 5, "class", _class_dec, Sets);
Sets = __decorateElement(_init, 0, "Sets", _Sets_decorators, Sets);
__runInitializers(_init, 1, Sets);
export {
  Sets
};