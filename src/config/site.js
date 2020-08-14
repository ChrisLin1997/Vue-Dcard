// 看板分類排行
export const TAB_LIST = [
  "全部",
  "追蹤",
  "熱門",
  "即時",
  "😍 愛心",
  "😡 森77",
  "😢 嗚嗚",
  "🤣 哈哈",
  "😲 驚訝",
  "🙇 跪"
];

// 看板列表
export const KANBAN_LIST = {
  // 預設看板
  defalut: {
    title: "",
    data: [
      {
        name: "所有看板",
        icon: ["fas", "list"],
        code: "all",
        color: "#006aa6",
        fontColor: "#fff"
      },
      {
        name: "即時熱門看板",
        icon: ["fas", "fire"],
        code: "hot",
        color: "#f4cf20",
        fontColor: "#da0a29"
      },
      {
        name: "好物研究室",
        icon: ["fas", "store-alt"],
        code: "goods",
        color: "#f97c00",
        fontColor: "#fff"
      },
      {
        name: "遊戲專區",
        icon: ["fas", "gamepad"],
        code: "game",
        color: "#00b8dc",
        fontColor: "#333333"
      },
      {
        name: "社會新鮮人熱門看版",
        icon: ["fas", "briefcase"],
        code: "novice",
        color: "#7c4a2c",
        fontColor: "#f9e6cc"
      }
    ]
  },

  // 追蹤看版
  follows: {
    title: "追蹤的看版",
    data: [
      {
        name: "麻省理工學院",
        icon: ["fas", "graduation-cap"],
        code: "mit"
      }
    ]
  },

  // 精選看板
  featured: {
    title: "Dacrd 精選看板",
    data: [
      {
        name: "穿搭",
        icon: ["fas", "tshirt"],
        code: "wear",
        color: "#3397cf",
        fontColor: "#f97c00"
      },
      {
        name: "成長",
        icon: ["fas", "shoe-prints"],
        code: "grow",
        color: "#7e511b",
        fontColor: "#000"
      },
      {
        name: "程式語言",
        icon: ["fas", "bug"],
        code: "program",
        color: "#3c4e60",
        fontColor: "#ee3a42"
      },
      {
        name: "運動",
        icon: ["fas", "running"],
        code: "sport",
        color: "#7096c5",
        fontColor: "#f9f748"
      },
      {
        name: "理財",
        icon: ["fas", "dollar-sign"],
        code: "financial",
        color: "#000",
        fontColor: "#e9c01f"
      },
      {
        name: "食物",
        icon: ["fas", "hamburger"],
        code: "food",
        color: "#2a7544",
        fontColor: "#dcbc89"
      },
      {
        name: "西斯",
        icon: ["fas", "car"],
        code: "sex",
        color: "#f90000",
        fontColor: "#000"
      },
      {
        name: "Apple",
        icon: ["fas", "apple-alt"],
        code: "apple",
        color: "#000",
        fontColor: "#fff"
      },
      {
        name: "疫情",
        icon: ["fas", "biohazard"],
        code: "covid19",
        color: "#444",
        fontColor: "#ff0000"
      },
      {
        name: "Podcast",
        icon: ["fas", "microphone"],
        code: "podcast",
        color: "#8338bf",
        fontColor: "#fff"
      },
      {
        name: "居家生活",
        icon: ["fas", "home"],
        code: "house",
        color: "#73b537",
        fontColor: "#683a0e"
      },
      {
        name: "追星",
        icon: ["fas", "star"],
        code: "star",
        color: "#00324e",
        fontColor: "#f4b400"
      },
      {
        name: "閒聊",
        icon: ["fas", "comment"],
        code: "talk",
        color: "#41c206",
        fontColor: "#fff"
      },
      {
        name: "有趣",
        icon: ["fas", "grin-alt"],
        code: "interest",
        color: "#6e6d69",
        fontColor: "#f7cf48"
      },
      {
        name: "感情",
        icon: ["fas", "heart"],
        code: "love",
        color: "#00588a",
        fontColor: "#f90707"
      },
      {
        name: "廣告",
        icon: ["fas", "ad"],
        code: "ad",
        color: "#f5ac3a",
        fontColor: "#c282d1"
      },
      {
        name: "攝影",
        icon: ["fas", "camera"],
        code: "photograph",
        color: "#4b4b49",
        fontColor: "#059de2"
      }
    ]
  }
};

// 使用者導覽列
export const USER_NAVIGATION_LIST = [
  { name: "我的收藏", icon: ["fas", "bookmark"], code: "collect" },
  { name: "我追蹤的看板", icon: ["fas", "heart"], code: "followkanban" },
  { name: "我追蹤的卡稱", icon: ["fas", "rss"], code: "followid" },
  { name: "我發表的文章", icon: ["fas", "pen-square"], code: "article" },
  { name: "抽卡自我介紹", icon: ["fas", "dice-d6"], code: "introduction" },
  { name: "我的卡稱", icon: ["fas", "id-badge"], code: "id" },
  { name: "我的卡友", icon: ["fas", "user-friends"], code: "friend" },
  { name: "設定", icon: ["fas", "cog"], code: "setting" }
];
