//test cookie
document.cookie = "characters=hello world";
console.log(document.cookie);
document.cookie = "characters=hello world; Secure; SameSite=None";
console.log(document.cookie);
document.cookie = "";
console.log(document.cookie);

console.log("test");





// util
function mapToJSON(map) {
    return JSON.stringify(Object.fromEntries(map), null, 2);
}

function jsonToMap(jsonStr) {
    const obj = JSON.parse(jsonStr);
    return new Map(Object.entries(obj));
}



//controller

class DaiRow extends Map {
    constructor(table_name, row_num) {
        super();
        this.set("name", document.querySelector(`#${table_name}1${row_num}1`));
        this.set("base", document.querySelector(`#${table_name}1${row_num}2`));
        this.set("point", document.querySelector(`#${table_name}1${row_num}3`));
        this.set("growth", document.querySelector(`#${table_name}1${row_num}4`));
        this.set("skill", document.querySelector(`#${table_name}1${row_num}5`));
        this.set("shub", document.querySelector(`#${table_name}1${row_num}6`));
        this.set("total", document.querySelector(`#${table_name}1${row_num}7`));
    }
}

class ShubRow extends Map {
    constructor(table_name, row_num) {
        super();
        this.set("name", document.querySelector(`#${table_name}2${row_num}1`));
        this.set("base", document.querySelector(`#${table_name}2${row_num}2`));
        this.set("point", document.querySelector(`#${table_name}2${row_num}3`));
        this.set("growth", document.querySelector(`#${table_name}2${row_num}4`));
        this.set("skill", document.querySelector(`#${table_name}2${row_num}5`));
        this.set("dai", document.querySelector(`#${table_name}2${row_num}6`));
        this.set("total", document.querySelector(`#${table_name}2${row_num}7`));
        if (table_name == "skn") {
            ["point", "growth"].forEach((key) => {
                this.get(key).addEventListener("input", () => {
                    this.get("skill").value = Number(this.get("base").value) + Number(this.get("point").value) + Number(this.get("growth").value);
                    this.get("total").value = Number(this.get("skill").value) + Number(this.get("dai").value);
                });
            });
        }
    }
}

class PairOfRow extends Object {
    constructor(table_name, row_num) {
        super();
        this.d = new DaiRow(table_name, row_num);
        this.s = new ShubRow(table_name, row_num);

        ["point", "growth"].forEach((key) => {
            this.d.get(key).addEventListener("input", () => {
                this.d.get("skill").value = Number(this.d.get("base").value) + Number(this.d.get("point").value) + Number(this.d.get("growth").value);
                this.d.get("total").value = Number(this.d.get("skill").value) + Number(this.d.get("shub").value);
                this.s.get("dai").value = Number(this.d.get("skill").value);
                this.s.get("total").value = Number(this.s.get("skill").value) + Number(this.s.get("dai").value);
            });
            this.s.get(key).addEventListener("input", () => {
                this.s.get("skill").value = Number(this.s.get("base").value) + Number(this.s.get("point").value) + Number(this.s.get("growth").value);
                this.s.get("total").value = Number(this.s.get("skill").value) + Number(this.s.get("dai").value);
                this.d.get("shub").value = Number(this.s.get("skill").value);
                this.d.get("total").value = Number(this.d.get("skill").value) + Number(this.d.get("shub").value);
            });
        });
    }
}

class Table extends Array {
    constructor(table_name, row_length, mode = "pair", type_num = null) {
        super();
        this.table_name = table_name;
        this.type_num = type_num;
        this.mode = mode;
        if (mode == "pair") {
            for (let i = 1; i <= row_length; i++) {
                this.push(new PairOfRow(table_name, i));
            }
        }
        else if (mode == "single") {
            if (type_num == null) {
                throw new Error("type_num is required in single mode");
            }
            for (let i = 1; i <= row_length; i++) {
                if (type_num == 1) {
                    this.push(new DaiRow(table_name, i));
                } else if (type_num == 2) {
                    this.push(new ShubRow(table_name, i));
                } else {
                    throw new Error("Invalid type_num: " + type_num);
                }
            }
        } else {
            throw new Error("Invalid mode: " + mode);
        }

    }

    getRow(row_num) {
        return this[row_num - 1];
    }

    getRowByName(name, type_num = null) {
        if (mode == "pair") {
            if (type_num == 1) {
                for (let row of this) {
                    if (row.d.get("name").value == name) {
                        return row;
                    }
                }
            } else if (type_num == 2) {
                for (let row of this) {
                    if (row.s.get("name").value == name) {
                        return row;
                    }
                }
            }
        } else if (mode == "single") {
            for (let row of this) {
                if (row.get("name").value == name) {
                    return row;
                }
            }
        }

        return null;
    }

}

class Tables extends Map {
    constructor() {
        super();
        this.set("tan", new Table("tan", 12, "pair"));
        this.set("sen", new Table("sen", 10, "pair"));
        this.set("tai", new Table("tai", 3, "pair"));
        this.set("tis", new Table("tis", 15, "pair"));
        this.set("unn", new Table("unn", 3, "pair"));
        this.set("skn", new Table("skn", 1, "single", 2));
    }
}

class DaiProfile extends Map {
    constructor() {
        super();
        this.set("name", document.querySelector("#Name11"));
        this.set("name_ruby", document.querySelector("#Name12"));
        this.set("gender", document.querySelector("#Name13"));
        this.set("age", document.querySelector("#Name14"));
        this.set("hp", document.querySelector("#Name15"));
        this.set("sk", document.querySelector("#Name16"));
        this.set("decade_rate", document.querySelector("#Name17"));
        this.set("kinryoku", document.querySelector("#Name18"));
        this.set("initiative", document.querySelector("#Name19"));
        this.set("taikaku", document.querySelector("#Name110"));
        this.set("app", document.querySelector("#Name111"));
        this.set("dice", document.querySelector("#dice1"));
    }
}

class ShubProfile extends Map {
    constructor() {
        super();
        this.set("name", document.querySelector("#Name21"));
        this.set("name_ruby", document.querySelector("#Name22"));
        this.set("gender", document.querySelector("#Name23"));
        this.set("kisei_year", document.querySelector("#Name24"));
        this.set("color", document.querySelector("#Name25"));
        this.set("life", document.querySelector("#Name26"));
        this.set("sk_skill", document.querySelector("#Name27"));
        this.set("sk_skill_description", document.querySelector("#Name28"));
        this.set("hp", document.querySelector("#Name29"));
        this.set("sk", document.querySelector("#Name210"));
        this.set("kairi_rate", document.querySelector("#Name211"));
        this.set("kinryoku", document.querySelector("#Name212"));
        this.set("initiative", document.querySelector("#Name213"));
        this.set("taikaku", document.querySelector("#Name214"));
        this.set("app", document.querySelector("#Name215"));
        this.set("dice", document.querySelector("#dice2"));
    }
}

class ResultTables extends Map {
}

class Controller {
    constructor() {
        this.dai_profile = new DaiProfile();
        this.shub_profile = new ShubProfile();
        this.tables = new Tables();
    }

    display_character(input_character) {
        console.log(input_character);
        this.dai_profile.forEach((elm, key) => {
            elm.value = input_character.dai_profile.get(key);
        });
        this.shub_profile.forEach((elm, key) => {
            elm.value = input_character.shub_profile.get(key);
        });
        this.tables.forEach((table, table_name) => {
            if (table_name == "skn") {
                table.getRow(1).get("point").value = input_character.input_tables.get(table_name).get("point");
                table.getRow(1).get("growth").value = input_character.input_tables.get(table_name).get("growth");
            } else {
                for (let i = 1; i < table.length; i++) {
                    table.getRow(i).d.get("point").value = input_character.input_tables.get(table_name).get("point").d[i - 1];
                    table.getRow(i).d.get("growth").value = input_character.input_tables.get(table_name).get("growth").d[i - 1];
                    table.getRow(i).s.get("point").value = input_character.input_tables.get(table_name).get("point").s[i - 1];
                    table.getRow(i).s.get("growth").value = input_character.input_tables.get(table_name).get("growth").s[i - 1];
                }
            }
        });
        this.tables.get("skn").getRow(1).get("name").value = input_character.skn_name;
        this.tables.get("tan").getRow(11).d.get("name").value = input_character.dai_tan11_name;
        this.tables.get("tan").getRow(11).s.get("name").value = input_character.shub_tan11_name;
    }
    get_character_name() {
        return this.dai_profile.get("name").value + "/" + this.shub_profile.get("name").value;
    }
}

// database

class InputTables extends Map {
    constructor(tables) {
        super();
        tables.forEach((table, table_name) => {
            if (table_name == "skn") {
                this.set(table_name, new Map([["point", ""], ["growth", ""]]));
                this.get(table_name).set("point", table.getRow(1).get("point").value);
                this.get(table_name).set("growth", table.getRow(1).get("growth").value);
            } else {
                this.set(table_name, new Map([["point", { d: [], s: [] }], ["growth", { d: [], s: [] }]]));
                for (let i = 1; i < table.length; i++) {
                    this.get(table_name).get("point").d.push(table.getRow(i).d.get("point").value);
                    this.get(table_name).get("growth").d.push(table.getRow(i).d.get("growth").value);
                    this.get(table_name).get("point").s.push(table.getRow(i).s.get("point").value);
                    this.get(table_name).get("growth").s.push(table.getRow(i).s.get("growth").value);
                }
            }
        });
    }
}

class InputCharacter {
    constructor(controller) {
        this.dai_profile = new Map();
        controller.dai_profile.forEach((elm, key) => {
            this.dai_profile.set(key, elm.value);
        });
        this.shub_profile = new Map();
        controller.shub_profile.forEach((elm, key) => {
            this.shub_profile.set(key, elm.value);
        });
        this.input_tables = new InputTables(controller.tables);
        this.dai_tan11_name = controller.tables.get("tan").getRow(11).d.get("name").value;
        this.shub_tan11_name = controller.tables.get("tan").getRow(11).s.get("name").value;
        this.skn_name = controller.tables.get("skn").getRow(1).get("name").value;
    }
}


const database = {
    controller: new Controller(),
    input_character_map: new Map(), // input_character: InputCharacter の Map
    current_character_name: null,
    current_character: document.querySelector("#current_character"),
    init_data() {
        if (document.cookie) {
            this.input_character_map = jsonToMap(document.cookie);
            let current_character = Array.from(this.input_character_map.entries()).pop();
            this.controller.display_character(current_character);
            this.current_character_name = this.controller.get_character_name();
            this.current_character.innerText = this.current_character_name;
        } else {
            this.input_character_map.set("はじめてのキャラクター", new InputCharacter(this.controller));
            this.controller.display_character(this.input_character_map.get("はじめてのキャラクター"));
            this.current_character_name = "はじめてのキャラクター";
            this.current_character.innerText = this.current_character_name;
        }
    },
    load_character(character_name) {
        if (this.input_character_map.has(character_name)) {

            this.controller.display_character(this.input_character_map.get(character_name));
            this.current_character_name = character_name;
            this.current_character.innerText = this.current_character_name;
        } else {
            console.log("キャラクターが見つかりません");
        }
    },
    create_new_character() {
        this.controller.display_character(
            "新規キャラクター",
            {
                "dai_profile": {},
                "shub_profile": {},
                "input_tables": {},
                "dai_tan11_name": "痕跡(戦闘)",
                "shub_tan11_name": "痕跡(戦闘)",
                "skn_name": "SK能力"
            });
        this.current_character_name = "新規キャラクター";
        this.current_character.innerText = this.current_character_name;
    },
    add_current_character() {
        if (this.current_character_name) {
            if (this.input_character_map.has(this.current_character_name)) {
                this.input_character_map.delete(this.current_character_name);
            }
            this.input_character_map.set(this.current_character_name, new InputCharacter(this.controller));
        }
    },
    save_data() {
        // issue
        console.log(document.cookie);
        const json = mapToJSON(this.input_character_map);
        console.log(json);
        document.cookie = `characters=${json}`;
        console.log(document.cookie);
        try {
            const json = mapToJSON(this.input_character_map);
            console.log(json);
            document.cookie = `characters=${json}`;
            console.log(document.cookie);
            if (!`characters=${json}` == document.cookie) {
                throw new Error("Cookieの保存に失敗しました");
            }
            alert("データを保存しました");
        } catch (e) {
            console.error("Error saving data: " + e);
            alert("データの保存に失敗しました");
        }
    }
    ,
    copy_character(type) {
        let obj = {};
        if (type == 1) {
            with (this.controller.dai_profile) {
                obj = {
                    kind: "character",
                    data: {
                        name: `${get("name").value} (${get("name_ruby").value})`,
                        initiative: Number(get("initiative").value),
                        status: [{
                            label: "HP",
                            value: get("hp").value,
                            max: get("hp").value,
                        },
                        {
                            label: "SK",
                            value: get("sk").value,
                            max: get("sk").value,
                        },
                        {
                            label: "腐敗率",
                            value: get("decade_rate").value,
                            max: 100,
                        },
                        {
                            label: "シュブルテ",
                            value: this.controller.shub_profile.get("kairi_rate").value,
                        },
                        ],
                        params: [{
                            label: "筋力基礎値",
                            value: get("kinryoku").value,

                        }],
                    },
                }
            }
            with (this.controller.tables) {
                obj.data.commands = `100-{腐敗率}*3/4-{シュブルテ}*1/4-1d100>=0 【腐敗判定】 \n:シュブルテ=
            〇探索系技能 \n${get("tan").getRow(1).d.get("skill").value}-1d100>=0 【知覚】\n${get("tan").getRow(2).d.get("skill").value}-1d100>=0 【観察】 \n${get("tan").getRow(3).d.get("skill").value}-1d100>=0 【人間観察】\n${get("tan").getRow(4).d.get("skill").value}-1d100>=0 【応急処置】 \n${get("tan").getRow(5).d.get("skill").value}-1d100>=0 【隠蔽】 \n${get("tan").getRow(6).d.get("skill").value}-1d100>=0 【潜伏】 \n${get("tan").getRow(7).d.get("skill").value}-1d100>=0 【検索】 \n${get("tan").getRow(8).d.get("skill").value}-1d100>=0 【体内時計】 \n${get("tan").getRow(9).d.get("skill").value}-1d100>=0 【結合】 \n${get("tan").getRow(10).d[4]}-1d100>=0 【痕跡(スカミア)】 \n${get("tan").getRow(11).d[4]}-1d100>=0 【痕跡(戦闘)】 \n${get("tan").getRow(12).d[4]}-1d100>=0 【${get("tan").getRow(12).d[0]}】
            〇戦闘系技能 \n${get("sen").getRow(1).d.get("skill").value}-1d100>=0 【躱す】 \n${get("sen").getRow(2).d.get("skill").value}-1d100>=0 【見切り】 \n${get("sen").getRow(3).d.get("skill").value}-1d100>=0 【死んだふり】 \n${get("sen").getRow(4).d.get("skill").value}-1d100>=0 【体術】 \n${get("sen").getRow(5).d.get("skill").value}-1d100>=0 【投げつける】 \n${get("sen").getRow(6).d.get("skill").value}-1d100>=0 【締め落とし】 \n${get("sen").getRow(7).d.get("skill").value}-1d100>=0 【特攻】 \n${get("sen").getRow(8).d.get("skill").value}-1d100>=0 【銃火器】 \n${get("sen").getRow(9).d.get("skill").value}-1d100>=0 【刀】 \n${get("sen").getRow(10).d.get("skill").value}-1d100>=0 【スカミア銃】 \n{筋力基礎値}+{HP}-1d100>=0 【筋力】 \n{initiative}-1d100>=0 【速さ】
            〇対人系技能 \n${get("tai").getRow(1).d.get("skill").value}-1d100>=0 【攪乱】 \n${get("tai").getRow(2).d.get("skill").value}-1d100>=0 【交渉】 \n${get("tai").getRow(3).d.get("skill").value}-1d100>=0 【恐喝】
            〇知識系技能 \n${get("tis").getRow(1).d.get("skill").value}-1d100>=0 【シュブルテ言語】 \n${get("tis").getRow(2).d.get("skill").value}-1d100>=0 【料理】 \n${get("tis").getRow(3).d.get("skill").value}-1d100>=0 【スカミア学】 \n${get("tis").getRow(4).d.get("skill").value}-1d100>=0 【考古学】 \n${get("tis").getRow(5).d.get("skill").value}-1d100>=0 【戦闘知識】 \n${get("tis").getRow(6).d.get("skill").value}-1d100>=0 【解剖学】 \n${get("tis").getRow(7).d.get("skill").value}-1d100>=0 【他言語】 \n${get("tis").getRow(8).d.get("skill").value}-1d100>=0 【現代史】 \n${get("tis").getRow(9).d.get("skill").value}-1d100>=0 【科学】 \n${get("tis").getRow(10).d.get("skill").value}-1d100>=0 【天文学】 \n${get("tis").getRow(11).d.get("skill").value}-1d100>=0 【電子機器】 \n${get("tis").getRow(12).d.get("skill").value}-1d100>=0 【芸術】 \n${get("tis").getRow(13).d.get("skill").value}-1d100>=0 【加工術】 \n${get("tis").getRow(14).d.get("skill").value}-1d100>=0 【考案】 \n${get("tis").getRow(15).d.get("skill").value}-1d100>=0 【知識】
            〇運技能 \n${get("unn").getRow(1).d.get("skill").value}-1d100>=0 【弱運】 \n${get("unn").getRow(2).d.get("skill").value}-1d100>=0 【運】 \n${get("unn").getRow(3).d.get("skill").value}-1d100>=0 【強運】
            〇完全化 \n100-1d({腐敗率}+{シュブルテ})>=0 【完全化判定】\n{シュブルテ}-1d({腐敗率}+{シュブルテ})>=0 【犠牲者決定】 \nC100-({腐敗率}*3/4+{シュブルテ}*1/4) 【期待値計算】`;
            }
        } else if (type == 2) {
            with (this.controller.shub_profile) {
                obj = {
                    kind: "character",
                    data: {
                        name: `${get("name").value} (${get("name_ruby").value})`,
                        initiative: Number(get("initiative").value),
                        status: [{
                            label: "HP",
                            value: get("hp").value,
                            max: get("hp").value,
                        },
                        {
                            label: "SK",
                            value: get("sk").value,
                            max: get("sk").value,
                        },
                        {
                            label: "乖離率",
                            value: get("kairi_rate").value,
                            max: 100,
                        },
                        {
                            label: "代償者",
                            value: this.controller.dai_profile.get("decade_rate").value,
                        },
                        ],
                        params: [{
                            label: "筋力基礎値",
                            value: get("kinryoku").value,

                        }],
                    },
                }
            }
            with (this.controller.tables) {
                obj.data.commands = `100-{乖離率}*3/4-{代償者}*1/4-1d100>=0 【乖離判定】 \n:代償者=
                〇探索系技能 \n${get("tan").getRow(1).s.get("skill").value}-1d100>=0 【知覚】\n${get("tan").getRow(2).s.get("skill").value}-1d100>=0 【観察】 \n${get("tan").getRow(3).s.get("skill").value}-1d100>=0 【人間観察】\n${get("tan").getRow(4).s.get("skill").value}-1d100>=0 【応急処置】 \n${get("tan").getRow(5).s.get("skill").value}-1d100>=0 【隠蔽】 \n${get("tan").getRow(6).s.get("skill").value}-1d100>=0 【潜伏】 \n${get("tan").getRow(7).s.get("skill").value}-1d100>=0 【検索】 \n${get("tan").getRow(8).s.get("skill").value}-1d100>=0 【体内時計】 \n${get("tan").getRow(9).s.get("skill").value}-1d100>=0 【結合】 \n${get("tan").getRow(10).s.get("skill").value}-1d100>=0 【痕跡(スカミア)】 \n${get("tan").getRow(11).s.get("skill").value}-1d100>=0 【痕跡(戦闘)】 \n${get("tan").getRow(12).s.get("skill").value}-1d100>=0 【${get("tan").getRow(12).s.get("name").value}】
                〇戦闘系技能 \n${get("sen").getRow(1).s.get("skill").value}-1d100>=0 【躱す】 \n${get("sen").getRow(2).s.get("skill").value}-1d100>=0 【見切り】 \n${get("sen").getRow(3).s.get("skill").value}-1d100>=0 【死んだふり】 \n${get("sen").getRow(4).s.get("skill").value}-1d100>=0 【体術】 \n${get("sen").getRow(5).s.get("skill").value}-1d100>=0 【投げつける】 \n${get("sen").getRow(6).s.get("skill").value}-1d100>=0 【締め落とし】 \n${get("sen").getRow(7).s.get("skill").value}-1d100>=0 【特攻】 \n${get("sen").getRow(8).s.get("skill").value}-1d100>=0 【銃火器】 \n${get("sen").getRow(9).s.get("skill").value}-1d100>=0 【刀】 \n${get("sen").getRow(10).s.get("skill").value}-1d100>=0 【スカミア銃】 \n{筋力基礎値}+{HP}-1d100>=0 【筋力】 \n{initiative}-1d100>=0 【速さ】
                〇対人系技能 \n${get("tai").getRow(1).s.get("skill").value}-1d100>=0 【攪乱】 \n${get("tai").getRow(2).s.get("skill").value}-1d100>=0 【交渉】 \n${get("tai").getRow(3).s.get("skill").value}-1d100>=0 【恐喝】
                〇知識系技能 \n${get("tis").getRow(1).s.get("skill").value}-1d100>=0 【シュブルテ言語】 \n${get("tis").getRow(2).s.get("skill").value}-1d100>=0 【料理】 \n${get("tis").getRow(3).s.get("skill").value}-1d100>=0 【スカミア学】 \n${get("tis").getRow(4).s.get("skill").value}-1d100>=0 【考古学】 \n${get("tis").getRow(5).s.get("skill").value}-1d100>=0 【戦闘知識】 \n${get("tis").getRow(6).s.get("skill").value}-1d100>=0 【解剖学】 \n${get("tis").getRow(7).s.get("skill").value}-1d100>=0 【他言語】 \n${get("tis").getRow(8).s.get("skill").value}-1d100>=0 【現代史】 \n${get("tis").getRow(9).s.get("skill").value}-1d100>=0 【科学】 \n${get("tis").getRow(10).s.get("skill").value}-1d100>=0 【天文学】 \n${get("tis").getRow(11).s.get("skill").value}-1d100>=0 【電子機器】 \n${get("tis").getRow(12).s.get("skill").value}-1d100>=0 【芸術】 \n${get("tis").getRow(13).s.get("skill").value}-1d100>=0 【加工術】 \n${get("tis").getRow(14).s.get("skill").value}-1d100>=0 【考案】 \n${get("tis").getRow(15).s.get("skill").value}-1d100>=0 【知識】
                〇運技能 \n${get("unn").getRow(1).s.get("skill").value}-1d100>=0 【弱運】 \n${get("unn").getRow(2).s.get("skill").value}-1d100>=0 【運】 \n${get("unn").getRow(3).s.get("skill").value}-1d100>=0 【強運】
                〇SK能力 \n${get("skn").getRow(1).get("skill").value}-1d100>=0 【SK能力】
                〇完全化 \n100-1d({乖離率}+{代償者})>=0 【完全化判定】\n{代償者}-1d({乖離率}+{代償者})>=0 【犠牲者決定】 \nC100-({乖離率}*3/4+{代償者}*1/4) 【期待値計算】`;
            }
        }
        let data = JSON.stringify(obj);
        navigator.clipboard.writeText(data)
            .then(() => {
                alert('コピーしました: ');
            }).catch(err => {
                alert('コピーに失敗しました: ' + err);
            });

    }

}


database.init_data();
console.log(database.input_character_map);
