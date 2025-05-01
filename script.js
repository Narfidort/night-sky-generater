//知覚

let tan112 = document.querySelector("#tan112");
let tan113 = document.querySelector("#tan113");
let tan114 = document.querySelector("#tan114");
let tan115 = document.querySelector("#tan115");
let tan116 = document.querySelector("#tan116");
let tan117 = document.querySelector("#tan117");

let tan212 = document.querySelector("#tan212");
let tan213 = document.querySelector("#tan213");
let tan214 = document.querySelector("#tan214");
let tan215 = document.querySelector("#tan215");
let tan216 = document.querySelector("#tan216");
let tan217 = document.querySelector("#tan217");


tan115.value = Number(tan112.value);
tan116.value = Number(tan212.value)+Number(tan213.value)+Number(tan214.value);
tan117.value = Number(tan115.value)+Number(tan116.value);

tan215.value = Number(tan212.value);
tan216.value = Number(tan112.value)+Number(tan113.value)+Number(tan114.value);
tan217.value = Number(tan215.value)+Number(tan216.value);

//代償者

tan113.addEventListener("input", function(){
    tan115.value = Number(tan112.value)+Number(tan113.value)+Number(tan114.value);
})
tan114.addEventListener("input", function(){
    tan115.value = Number(tan112.value)+Number(tan113.value)+Number(tan114.value);
})

tan213.addEventListener("input", function(){
    tan116.value = Number(tan212.value)+Number(tan213.value)+Number(tan214.value);
})
tan214.addEventListener("input", function(){
    tan116.value = Number(tan212.value)+Number(tan213.value)+Number(tan214.value);;
})
tan113.addEventListener("input", function(){
    tan117.value = Number(tan115.value)+Number(tan116.value);
})
tan114.addEventListener("input", function(){
    tan117.value = Number(tan115.value)+Number(tan116.value);
})
tan213.addEventListener("input", function(){
    tan117.value = Number(tan115.value)+Number(tan116.value);
})
tan214.addEventListener("input", function(){
    tan117.value = Number(tan115.value)+Number(tan116.value);
})

//シュブルテ

tan213.addEventListener("input", function(){
    tan215.value = Number(tan212.value)+Number(tan213.value)+Number(tan214.value);
})
tan214.addEventListener("input", function(){
    tan215.value = Number(tan212.value)+Number(tan213.value)+Number(tan214.value);
})

tan113.addEventListener("input", function(){
    tan216.value = Number(tan115.value);
})
tan114.addEventListener("input", function(){
    tan216.value = Number(tan115.value);
})
tan113.addEventListener("input", function(){
    tan217.value = Number(tan215.value)+Number(tan216.value);
})
tan114.addEventListener("input", function(){
    tan217.value = Number(tan215.value)+Number(tan216.value);
})
tan213.addEventListener("input", function(){
    tan217.value = Number(tan215.value)+Number(tan216.value);
})
tan214.addEventListener("input", function(){
    tan217.value = Number(tan215.value)+Number(tan216.value);
})

//観察

let tan122 = document.querySelector("#tan122");
let tan123 = document.querySelector("#tan123");
let tan124 = document.querySelector("#tan124");
let tan125 = document.querySelector("#tan125");
let tan126 = document.querySelector("#tan126");
let tan127 = document.querySelector("#tan127");

let tan222 = document.querySelector("#tan222");
let tan223 = document.querySelector("#tan223");
let tan224 = document.querySelector("#tan224");
let tan225 = document.querySelector("#tan225");
let tan226 = document.querySelector("#tan226");
let tan227 = document.querySelector("#tan227");


tan125.value = Number(tan122.value);
tan126.value = Number(tan222.value)+Number(tan223.value)+Number(tan224.value);
tan127.value = Number(tan125.value)+Number(tan126.value);

tan225.value = Number(tan222.value);
tan226.value = Number(tan122.value)+Number(tan123.value)+Number(tan124.value);
tan227.value = Number(tan225.value)+Number(tan226.value);

//代償者

tan123.addEventListener("input", function(){
    tan125.value = Number(tan122.value)+Number(tan123.value)+Number(tan124.value);
})
tan124.addEventListener("input", function(){
    tan125.value = Number(tan122.value)+Number(tan123.value)+Number(tan124.value);
})

tan223.addEventListener("input", function(){
    tan126.value = Number(tan222.value)+Number(tan223.value)+Number(tan224.value);
})
tan224.addEventListener("input", function(){
    tan126.value = Number(tan222.value)+Number(tan223.value)+Number(tan224.value);;
})
tan123.addEventListener("input", function(){
    tan127.value = Number(tan125.value)+Number(tan126.value);
})
tan124.addEventListener("input", function(){
    tan127.value = Number(tan125.value)+Number(tan126.value);
})
tan223.addEventListener("input", function(){
    tan127.value = Number(tan125.value)+Number(tan126.value);
})
tan224.addEventListener("input", function(){
    tan127.value = Number(tan125.value)+Number(tan126.value);
})

//シュブルテ

tan223.addEventListener("input", function(){
    tan225.value = Number(tan222.value)+Number(tan223.value)+Number(tan224.value);
})
tan224.addEventListener("input", function(){
    tan225.value = Number(tan222.value)+Number(tan223.value)+Number(tan224.value);
})

tan123.addEventListener("input", function(){
    tan226.value = Number(tan125.value);
})
tan124.addEventListener("input", function(){
    tan226.value = Number(tan125.value);
})
tan123.addEventListener("input", function(){
    tan227.value = Number(tan225.value)+Number(tan226.value);
})
tan124.addEventListener("input", function(){
    tan227.value = Number(tan225.value)+Number(tan226.value);
})
tan223.addEventListener("input", function(){
    tan227.value = Number(tan225.value)+Number(tan226.value);
})
tan224.addEventListener("input", function(){
    tan227.value = Number(tan225.value)+Number(tan226.value);
})

//人間観察

let tan132 = document.querySelector("#tan132");
let tan133 = document.querySelector("#tan133");
let tan134 = document.querySelector("#tan134");
let tan135 = document.querySelector("#tan135");
let tan136 = document.querySelector("#tan136");
let tan137 = document.querySelector("#tan137");

let tan232 = document.querySelector("#tan232");
let tan233 = document.querySelector("#tan233");
let tan234 = document.querySelector("#tan234");
let tan235 = document.querySelector("#tan235");
let tan236 = document.querySelector("#tan236");
let tan237 = document.querySelector("#tan237");


tan135.value = Number(tan132.value);
tan136.value = Number(tan232.value)+Number(tan233.value)+Number(tan234.value);
tan137.value = Number(tan135.value)+Number(tan136.value);

tan235.value = Number(tan232.value);
tan236.value = Number(tan132.value)+Number(tan133.value)+Number(tan134.value);
tan237.value = Number(tan235.value)+Number(tan236.value);

//代償者

tan133.addEventListener("input", function(){
    tan135.value = Number(tan132.value)+Number(tan133.value)+Number(tan134.value);
})
tan134.addEventListener("input", function(){
    tan135.value = Number(tan132.value)+Number(tan133.value)+Number(tan134.value);
})

tan233.addEventListener("input", function(){
    tan136.value = Number(tan232.value)+Number(tan233.value)+Number(tan234.value);
})
tan234.addEventListener("input", function(){
    tan136.value = Number(tan232.value)+Number(tan233.value)+Number(tan234.value);;
})
tan133.addEventListener("input", function(){
    tan137.value = Number(tan135.value)+Number(tan136.value);
})
tan134.addEventListener("input", function(){
    tan137.value = Number(tan135.value)+Number(tan136.value);
})
tan233.addEventListener("input", function(){
    tan137.value = Number(tan135.value)+Number(tan136.value);
})
tan234.addEventListener("input", function(){
    tan137.value = Number(tan135.value)+Number(tan136.value);
})

//シュブルテ

tan233.addEventListener("input", function(){
    tan235.value = Number(tan232.value)+Number(tan233.value)+Number(tan234.value);
})
tan234.addEventListener("input", function(){
    tan235.value = Number(tan232.value)+Number(tan233.value)+Number(tan234.value);
})

tan133.addEventListener("input", function(){
    tan236.value = Number(tan135.value);
})
tan134.addEventListener("input", function(){
    tan236.value = Number(tan135.value);
})
tan133.addEventListener("input", function(){
    tan237.value = Number(tan235.value)+Number(tan236.value);
})
tan134.addEventListener("input", function(){
    tan237.value = Number(tan235.value)+Number(tan236.value);
})
tan233.addEventListener("input", function(){
    tan237.value = Number(tan235.value)+Number(tan236.value);
})
tan234.addEventListener("input", function(){
    tan237.value = Number(tan235.value)+Number(tan236.value);
})

//応急処置

let tan142 = document.querySelector("#tan142");
let tan143 = document.querySelector("#tan143");
let tan144 = document.querySelector("#tan144");
let tan145 = document.querySelector("#tan145");
let tan146 = document.querySelector("#tan146");
let tan147 = document.querySelector("#tan147");

let tan242 = document.querySelector("#tan242");
let tan243 = document.querySelector("#tan243");
let tan244 = document.querySelector("#tan244");
let tan245 = document.querySelector("#tan245");
let tan246 = document.querySelector("#tan246");
let tan247 = document.querySelector("#tan247");


tan145.value = Number(tan142.value);
tan146.value = Number(tan242.value)+Number(tan243.value)+Number(tan244.value);
tan147.value = Number(tan145.value)+Number(tan146.value);

tan245.value = Number(tan242.value);
tan246.value = Number(tan142.value)+Number(tan143.value)+Number(tan144.value);
tan247.value = Number(tan245.value)+Number(tan246.value);

//代償者

tan143.addEventListener("input", function(){
    tan145.value = Number(tan142.value)+Number(tan143.value)+Number(tan144.value);
})
tan144.addEventListener("input", function(){
    tan145.value = Number(tan142.value)+Number(tan143.value)+Number(tan144.value);
})

tan243.addEventListener("input", function(){
    tan146.value = Number(tan242.value)+Number(tan243.value)+Number(tan244.value);
})
tan244.addEventListener("input", function(){
    tan146.value = Number(tan242.value)+Number(tan243.value)+Number(tan244.value);;
})
tan143.addEventListener("input", function(){
    tan147.value = Number(tan145.value)+Number(tan146.value);
})
tan144.addEventListener("input", function(){
    tan147.value = Number(tan145.value)+Number(tan146.value);
})
tan243.addEventListener("input", function(){
    tan147.value = Number(tan145.value)+Number(tan146.value);
})
tan244.addEventListener("input", function(){
    tan147.value = Number(tan145.value)+Number(tan146.value);
})

//シュブルテ

tan243.addEventListener("input", function(){
    tan245.value = Number(tan242.value)+Number(tan243.value)+Number(tan244.value);
})
tan244.addEventListener("input", function(){
    tan245.value = Number(tan242.value)+Number(tan243.value)+Number(tan244.value);
})

tan143.addEventListener("input", function(){
    tan246.value = Number(tan145.value);
})
tan144.addEventListener("input", function(){
    tan246.value = Number(tan145.value);
})
tan143.addEventListener("input", function(){
    tan247.value = Number(tan245.value)+Number(tan246.value);
})
tan144.addEventListener("input", function(){
    tan247.value = Number(tan245.value)+Number(tan246.value);
})
tan243.addEventListener("input", function(){
    tan247.value = Number(tan245.value)+Number(tan246.value);
})
tan244.addEventListener("input", function(){
    tan247.value = Number(tan245.value)+Number(tan246.value);
})

//隠蔽

let tan152 = document.querySelector("#tan152");
let tan153 = document.querySelector("#tan153");
let tan154 = document.querySelector("#tan154");
let tan155 = document.querySelector("#tan155");
let tan156 = document.querySelector("#tan156");
let tan157 = document.querySelector("#tan157");

let tan252 = document.querySelector("#tan252");
let tan253 = document.querySelector("#tan253");
let tan254 = document.querySelector("#tan254");
let tan255 = document.querySelector("#tan255");
let tan256 = document.querySelector("#tan256");
let tan257 = document.querySelector("#tan257");


tan155.value = Number(tan152.value);
tan156.value = Number(tan252.value)+Number(tan253.value)+Number(tan254.value);
tan157.value = Number(tan155.value)+Number(tan156.value);

tan255.value = Number(tan252.value);
tan256.value = Number(tan152.value)+Number(tan153.value)+Number(tan154.value);
tan257.value = Number(tan255.value)+Number(tan256.value);

//代償者

tan153.addEventListener("input", function(){
    tan155.value = Number(tan152.value)+Number(tan153.value)+Number(tan154.value);
})
tan154.addEventListener("input", function(){
    tan155.value = Number(tan152.value)+Number(tan153.value)+Number(tan154.value);
})

tan253.addEventListener("input", function(){
    tan156.value = Number(tan252.value)+Number(tan253.value)+Number(tan254.value);
})
tan254.addEventListener("input", function(){
    tan156.value = Number(tan252.value)+Number(tan253.value)+Number(tan254.value);;
})
tan153.addEventListener("input", function(){
    tan157.value = Number(tan155.value)+Number(tan156.value);
})
tan154.addEventListener("input", function(){
    tan157.value = Number(tan155.value)+Number(tan156.value);
})
tan253.addEventListener("input", function(){
    tan157.value = Number(tan155.value)+Number(tan156.value);
})
tan254.addEventListener("input", function(){
    tan157.value = Number(tan155.value)+Number(tan156.value);
})

//シュブルテ

tan253.addEventListener("input", function(){
    tan255.value = Number(tan252.value)+Number(tan253.value)+Number(tan254.value);
})
tan254.addEventListener("input", function(){
    tan255.value = Number(tan252.value)+Number(tan253.value)+Number(tan254.value);
})

tan153.addEventListener("input", function(){
    tan256.value = Number(tan155.value);
})
tan154.addEventListener("input", function(){
    tan256.value = Number(tan155.value);
})
tan153.addEventListener("input", function(){
    tan257.value = Number(tan255.value)+Number(tan256.value);
})
tan154.addEventListener("input", function(){
    tan257.value = Number(tan255.value)+Number(tan256.value);
})
tan253.addEventListener("input", function(){
    tan257.value = Number(tan255.value)+Number(tan256.value);
})
tan254.addEventListener("input", function(){
    tan257.value = Number(tan255.value)+Number(tan256.value);
})

//潜伏

let tan162 = document.querySelector("#tan162");
let tan163 = document.querySelector("#tan163");
let tan164 = document.querySelector("#tan164");
let tan165 = document.querySelector("#tan165");
let tan166 = document.querySelector("#tan166");
let tan167 = document.querySelector("#tan167");

let tan262 = document.querySelector("#tan262");
let tan263 = document.querySelector("#tan263");
let tan264 = document.querySelector("#tan264");
let tan265 = document.querySelector("#tan265");
let tan266 = document.querySelector("#tan266");
let tan267 = document.querySelector("#tan267");


tan165.value = Number(tan162.value);
tan166.value = Number(tan262.value)+Number(tan263.value)+Number(tan264.value);
tan167.value = Number(tan165.value)+Number(tan166.value);

tan265.value = Number(tan262.value);
tan266.value = Number(tan162.value)+Number(tan163.value)+Number(tan164.value);
tan267.value = Number(tan265.value)+Number(tan266.value);

//代償者

tan163.addEventListener("input", function(){
    tan165.value = Number(tan162.value)+Number(tan163.value)+Number(tan164.value);
})
tan164.addEventListener("input", function(){
    tan165.value = Number(tan162.value)+Number(tan163.value)+Number(tan164.value);
})

tan263.addEventListener("input", function(){
    tan166.value = Number(tan262.value)+Number(tan263.value)+Number(tan264.value);
})
tan264.addEventListener("input", function(){
    tan166.value = Number(tan262.value)+Number(tan263.value)+Number(tan264.value);;
})
tan163.addEventListener("input", function(){
    tan167.value = Number(tan165.value)+Number(tan166.value);
})
tan164.addEventListener("input", function(){
    tan167.value = Number(tan165.value)+Number(tan166.value);
})
tan263.addEventListener("input", function(){
    tan167.value = Number(tan165.value)+Number(tan166.value);
})
tan264.addEventListener("input", function(){
    tan167.value = Number(tan165.value)+Number(tan166.value);
})

//シュブルテ

tan263.addEventListener("input", function(){
    tan265.value = Number(tan262.value)+Number(tan263.value)+Number(tan264.value);
})
tan264.addEventListener("input", function(){
    tan265.value = Number(tan262.value)+Number(tan263.value)+Number(tan264.value);
})

tan163.addEventListener("input", function(){
    tan266.value = Number(tan165.value);
})
tan164.addEventListener("input", function(){
    tan266.value = Number(tan165.value);
})
tan163.addEventListener("input", function(){
    tan267.value = Number(tan265.value)+Number(tan266.value);
})
tan164.addEventListener("input", function(){
    tan267.value = Number(tan265.value)+Number(tan266.value);
})
tan263.addEventListener("input", function(){
    tan267.value = Number(tan265.value)+Number(tan266.value);
})
tan264.addEventListener("input", function(){
    tan267.value = Number(tan265.value)+Number(tan266.value);
})

//検索

let tan172 = document.querySelector("#tan172");
let tan173 = document.querySelector("#tan173");
let tan174 = document.querySelector("#tan174");
let tan175 = document.querySelector("#tan175");
let tan176 = document.querySelector("#tan176");
let tan177 = document.querySelector("#tan177");

let tan272 = document.querySelector("#tan272");
let tan273 = document.querySelector("#tan273");
let tan274 = document.querySelector("#tan274");
let tan275 = document.querySelector("#tan275");
let tan276 = document.querySelector("#tan276");
let tan277 = document.querySelector("#tan277");


tan175.value = Number(tan172.value);
tan176.value = Number(tan272.value)+Number(tan273.value)+Number(tan274.value);
tan177.value = Number(tan175.value)+Number(tan176.value);

tan275.value = Number(tan272.value);
tan276.value = Number(tan172.value)+Number(tan173.value)+Number(tan174.value);
tan277.value = Number(tan275.value)+Number(tan276.value);

//代償者

tan173.addEventListener("input", function(){
    tan175.value = Number(tan172.value)+Number(tan173.value)+Number(tan174.value);
})
tan174.addEventListener("input", function(){
    tan175.value = Number(tan172.value)+Number(tan173.value)+Number(tan174.value);
})

tan273.addEventListener("input", function(){
    tan176.value = Number(tan272.value)+Number(tan273.value)+Number(tan274.value);
})
tan274.addEventListener("input", function(){
    tan176.value = Number(tan272.value)+Number(tan273.value)+Number(tan274.value);;
})
tan173.addEventListener("input", function(){
    tan177.value = Number(tan175.value)+Number(tan176.value);
})
tan174.addEventListener("input", function(){
    tan177.value = Number(tan175.value)+Number(tan176.value);
})
tan273.addEventListener("input", function(){
    tan177.value = Number(tan175.value)+Number(tan176.value);
})
tan274.addEventListener("input", function(){
    tan177.value = Number(tan175.value)+Number(tan176.value);
})

//シュブルテ

tan273.addEventListener("input", function(){
    tan275.value = Number(tan272.value)+Number(tan273.value)+Number(tan274.value);
})
tan274.addEventListener("input", function(){
    tan275.value = Number(tan272.value)+Number(tan273.value)+Number(tan274.value);
})

tan173.addEventListener("input", function(){
    tan276.value = Number(tan175.value);
})
tan174.addEventListener("input", function(){
    tan276.value = Number(tan175.value);
})
tan173.addEventListener("input", function(){
    tan277.value = Number(tan275.value)+Number(tan276.value);
})
tan174.addEventListener("input", function(){
    tan277.value = Number(tan275.value)+Number(tan276.value);
})
tan273.addEventListener("input", function(){
    tan277.value = Number(tan275.value)+Number(tan276.value);
})
tan274.addEventListener("input", function(){
    tan277.value = Number(tan275.value)+Number(tan276.value);
})

//体内時計

let tan182 = document.querySelector("#tan182");
let tan183 = document.querySelector("#tan183");
let tan184 = document.querySelector("#tan184");
let tan185 = document.querySelector("#tan185");
let tan186 = document.querySelector("#tan186");
let tan187 = document.querySelector("#tan187");

let tan282 = document.querySelector("#tan282");
let tan283 = document.querySelector("#tan283");
let tan284 = document.querySelector("#tan284");
let tan285 = document.querySelector("#tan285");
let tan286 = document.querySelector("#tan286");
let tan287 = document.querySelector("#tan287");


tan185.value = Number(tan182.value);
tan186.value = Number(tan282.value)+Number(tan283.value)+Number(tan284.value);
tan187.value = Number(tan185.value)+Number(tan186.value);

tan285.value = Number(tan282.value);
tan286.value = Number(tan182.value)+Number(tan183.value)+Number(tan184.value);
tan287.value = Number(tan285.value)+Number(tan286.value);

//代償者

tan183.addEventListener("input", function(){
    tan185.value = Number(tan182.value)+Number(tan183.value)+Number(tan184.value);
})
tan184.addEventListener("input", function(){
    tan185.value = Number(tan182.value)+Number(tan183.value)+Number(tan184.value);
})

tan283.addEventListener("input", function(){
    tan186.value = Number(tan282.value)+Number(tan283.value)+Number(tan284.value);
})
tan284.addEventListener("input", function(){
    tan186.value = Number(tan282.value)+Number(tan283.value)+Number(tan284.value);;
})
tan183.addEventListener("input", function(){
    tan187.value = Number(tan185.value)+Number(tan186.value);
})
tan184.addEventListener("input", function(){
    tan187.value = Number(tan185.value)+Number(tan186.value);
})
tan283.addEventListener("input", function(){
    tan187.value = Number(tan185.value)+Number(tan186.value);
})
tan284.addEventListener("input", function(){
    tan187.value = Number(tan185.value)+Number(tan186.value);
})

//シュブルテ

tan283.addEventListener("input", function(){
    tan285.value = Number(tan282.value)+Number(tan283.value)+Number(tan284.value);
})
tan284.addEventListener("input", function(){
    tan285.value = Number(tan282.value)+Number(tan283.value)+Number(tan284.value);
})

tan183.addEventListener("input", function(){
    tan286.value = Number(tan185.value);
})
tan184.addEventListener("input", function(){
    tan286.value = Number(tan185.value);
})
tan183.addEventListener("input", function(){
    tan287.value = Number(tan285.value)+Number(tan286.value);
})
tan184.addEventListener("input", function(){
    tan287.value = Number(tan285.value)+Number(tan286.value);
})
tan283.addEventListener("input", function(){
    tan287.value = Number(tan285.value)+Number(tan286.value);
})
tan284.addEventListener("input", function(){
    tan287.value = Number(tan285.value)+Number(tan286.value);
})

//結合

let tan192 = document.querySelector("#tan192");
let tan193 = document.querySelector("#tan193");
let tan194 = document.querySelector("#tan194");
let tan195 = document.querySelector("#tan195");
let tan196 = document.querySelector("#tan196");
let tan197 = document.querySelector("#tan197");

let tan292 = document.querySelector("#tan292");
let tan293 = document.querySelector("#tan293");
let tan294 = document.querySelector("#tan294");
let tan295 = document.querySelector("#tan295");
let tan296 = document.querySelector("#tan296");
let tan297 = document.querySelector("#tan297");


tan195.value = Number(tan192.value);
tan196.value = Number(tan292.value)+Number(tan293.value)+Number(tan294.value);
tan197.value = Number(tan195.value)+Number(tan196.value);

tan295.value = Number(tan292.value);
tan296.value = Number(tan192.value)+Number(tan193.value)+Number(tan194.value);
tan297.value = Number(tan295.value)+Number(tan296.value);

//代償者

tan193.addEventListener("input", function(){
    tan195.value = Number(tan192.value)+Number(tan193.value)+Number(tan194.value);
})
tan194.addEventListener("input", function(){
    tan195.value = Number(tan192.value)+Number(tan193.value)+Number(tan194.value);
})

tan293.addEventListener("input", function(){
    tan196.value = Number(tan292.value)+Number(tan293.value)+Number(tan294.value);
})
tan294.addEventListener("input", function(){
    tan196.value = Number(tan292.value)+Number(tan293.value)+Number(tan294.value);;
})
tan193.addEventListener("input", function(){
    tan197.value = Number(tan195.value)+Number(tan196.value);
})
tan194.addEventListener("input", function(){
    tan197.value = Number(tan195.value)+Number(tan196.value);
})
tan293.addEventListener("input", function(){
    tan197.value = Number(tan195.value)+Number(tan196.value);
})
tan294.addEventListener("input", function(){
    tan197.value = Number(tan195.value)+Number(tan196.value);
})

//シュブルテ

tan293.addEventListener("input", function(){
    tan295.value = Number(tan292.value)+Number(tan293.value)+Number(tan294.value);
})
tan294.addEventListener("input", function(){
    tan295.value = Number(tan292.value)+Number(tan293.value)+Number(tan294.value);
})

tan193.addEventListener("input", function(){
    tan296.value = Number(tan195.value);
})
tan194.addEventListener("input", function(){
    tan296.value = Number(tan195.value);
})
tan193.addEventListener("input", function(){
    tan297.value = Number(tan295.value)+Number(tan296.value);
})
tan194.addEventListener("input", function(){
    tan297.value = Number(tan295.value)+Number(tan296.value);
})
tan293.addEventListener("input", function(){
    tan297.value = Number(tan295.value)+Number(tan296.value);
})
tan294.addEventListener("input", function(){
    tan297.value = Number(tan295.value)+Number(tan296.value);
})

//痕跡(スカミア)

let tan1102 = document.querySelector("#tan1102");
let tan1103 = document.querySelector("#tan1103");
let tan1104 = document.querySelector("#tan1104");
let tan1105 = document.querySelector("#tan1105");
let tan1106 = document.querySelector("#tan1106");
let tan1107 = document.querySelector("#tan1107");

let tan2102 = document.querySelector("#tan2102");
let tan2103 = document.querySelector("#tan2103");
let tan2104 = document.querySelector("#tan2104");
let tan2105 = document.querySelector("#tan2105");
let tan2106 = document.querySelector("#tan2106");
let tan2107 = document.querySelector("#tan2107");


tan1105.value = Number(tan1102.value);
tan1106.value = Number(tan2102.value)+Number(tan2103.value)+Number(tan2104.value);
tan1107.value = Number(tan1105.value)+Number(tan1106.value);

tan2105.value = Number(tan2102.value);
tan2106.value = Number(tan1102.value)+Number(tan1103.value)+Number(tan1104.value);
tan2107.value = Number(tan2105.value)+Number(tan2106.value);

//代償者

tan1103.addEventListener("input", function(){
    tan1105.value = Number(tan1102.value)+Number(tan1103.value)+Number(tan1104.value);
})
tan1104.addEventListener("input", function(){
    tan1105.value = Number(tan1102.value)+Number(tan1103.value)+Number(tan1104.value);
})

tan2103.addEventListener("input", function(){
    tan1106.value = Number(tan2102.value)+Number(tan2103.value)+Number(tan2104.value);
})
tan2104.addEventListener("input", function(){
    tan1106.value = Number(tan2102.value)+Number(tan2103.value)+Number(tan2104.value);;
})
tan1103.addEventListener("input", function(){
    tan1107.value = Number(tan1105.value)+Number(tan1106.value);
})
tan1104.addEventListener("input", function(){
    tan1107.value = Number(tan1105.value)+Number(tan1106.value);
})
tan2103.addEventListener("input", function(){
    tan1107.value = Number(tan1105.value)+Number(tan1106.value);
})
tan2104.addEventListener("input", function(){
    tan1107.value = Number(tan1105.value)+Number(tan1106.value);
})

//シュブルテ

tan2103.addEventListener("input", function(){
    tan2105.value = Number(tan2102.value)+Number(tan2103.value)+Number(tan2104.value);
})
tan2104.addEventListener("input", function(){
    tan2105.value = Number(tan2102.value)+Number(tan2103.value)+Number(tan2104.value);
})

tan1103.addEventListener("input", function(){
    tan2106.value = Number(tan1105.value);
})
tan1104.addEventListener("input", function(){
    tan2106.value = Number(tan1105.value);
})
tan1103.addEventListener("input", function(){
    tan2107.value = Number(tan2105.value)+Number(tan2106.value);
})
tan1104.addEventListener("input", function(){
    tan2107.value = Number(tan2105.value)+Number(tan2106.value);
})
tan2103.addEventListener("input", function(){
    tan2107.value = Number(tan2105.value)+Number(tan2106.value);
})
tan2104.addEventListener("input", function(){
    tan2107.value = Number(tan2105.value)+Number(tan2106.value);
})

//痕跡(戦闘)

let tan1112 = document.querySelector("#tan1112");
let tan1113 = document.querySelector("#tan1113");
let tan1114 = document.querySelector("#tan1114");
let tan1115 = document.querySelector("#tan1115");
let tan1116 = document.querySelector("#tan1116");
let tan1117 = document.querySelector("#tan1117");

let tan2112 = document.querySelector("#tan2112");
let tan2113 = document.querySelector("#tan2113");
let tan2114 = document.querySelector("#tan2114");
let tan2115 = document.querySelector("#tan2115");
let tan2116 = document.querySelector("#tan2116");
let tan2117 = document.querySelector("#tan2117");


tan1115.value = Number(tan1112.value);
tan1116.value = Number(tan2112.value)+Number(tan2113.value)+Number(tan2114.value);
tan1117.value = Number(tan1115.value)+Number(tan1116.value);

tan2115.value = Number(tan2112.value);
tan2116.value = Number(tan1112.value)+Number(tan1113.value)+Number(tan1114.value);
tan2117.value = Number(tan2115.value)+Number(tan2116.value);

//代償者

tan1113.addEventListener("input", function(){
    tan1115.value = Number(tan1112.value)+Number(tan1113.value)+Number(tan1114.value);
})
tan1114.addEventListener("input", function(){
    tan1115.value = Number(tan1112.value)+Number(tan1113.value)+Number(tan1114.value);
})

tan2113.addEventListener("input", function(){
    tan1116.value = Number(tan2112.value)+Number(tan2113.value)+Number(tan2114.value);
})
tan2114.addEventListener("input", function(){
    tan1116.value = Number(tan2112.value)+Number(tan2113.value)+Number(tan2114.value);;
})
tan1113.addEventListener("input", function(){
    tan1117.value = Number(tan1115.value)+Number(tan1116.value);
})
tan1114.addEventListener("input", function(){
    tan1117.value = Number(tan1115.value)+Number(tan1116.value);
})
tan2113.addEventListener("input", function(){
    tan1117.value = Number(tan1115.value)+Number(tan1116.value);
})
tan2114.addEventListener("input", function(){
    tan1117.value = Number(tan1115.value)+Number(tan1116.value);
})

//シュブルテ

tan2113.addEventListener("input", function(){
    tan2115.value = Number(tan2112.value)+Number(tan2113.value)+Number(tan2114.value);
})
tan2114.addEventListener("input", function(){
    tan2115.value = Number(tan2112.value)+Number(tan2113.value)+Number(tan2114.value);
})

tan1113.addEventListener("input", function(){
    tan2116.value = Number(tan1115.value);
})
tan1114.addEventListener("input", function(){
    tan2116.value = Number(tan1115.value);
})
tan1113.addEventListener("input", function(){
    tan2117.value = Number(tan2115.value)+Number(tan2116.value);
})
tan1114.addEventListener("input", function(){
    tan2117.value = Number(tan2115.value)+Number(tan2116.value);
})
tan2113.addEventListener("input", function(){
    tan2117.value = Number(tan2115.value)+Number(tan2116.value);
})
tan2114.addEventListener("input", function(){
    tan2117.value = Number(tan2115.value)+Number(tan2116.value);
})

//その他痕跡()

let tan1122 = document.querySelector("#tan1122");
let tan1123 = document.querySelector("#tan1123");
let tan1124 = document.querySelector("#tan1124");
let tan1125 = document.querySelector("#tan1125");
let tan1126 = document.querySelector("#tan1126");
let tan1127 = document.querySelector("#tan1127");

let tan2122 = document.querySelector("#tan2122");
let tan2123 = document.querySelector("#tan2123");
let tan2124 = document.querySelector("#tan2124");
let tan2125 = document.querySelector("#tan2125");
let tan2126 = document.querySelector("#tan2126");
let tan2127 = document.querySelector("#tan2127");


tan1125.value = Number(tan1122.value);
tan1126.value = Number(tan2122.value)+Number(tan2123.value)+Number(tan2124.value);
tan1127.value = Number(tan1125.value)+Number(tan1126.value);

tan2125.value = Number(tan2122.value);
tan2126.value = Number(tan1122.value)+Number(tan1123.value)+Number(tan1124.value);
tan2127.value = Number(tan2125.value)+Number(tan2126.value);

//代償者

tan1123.addEventListener("input", function(){
    tan1125.value = Number(tan1122.value)+Number(tan1123.value)+Number(tan1104.value);
})
tan1124.addEventListener("input", function(){
    tan1125.value = Number(tan1122.value)+Number(tan1123.value)+Number(tan1104.value);
})

tan2123.addEventListener("input", function(){
    tan1126.value = Number(tan2122.value)+Number(tan2123.value)+Number(tan2104.value);
})
tan2124.addEventListener("input", function(){
    tan1126.value = Number(tan2122.value)+Number(tan2123.value)+Number(tan2104.value);;
})
tan1123.addEventListener("input", function(){
    tan1127.value = Number(tan1125.value)+Number(tan1126.value);
})
tan1124.addEventListener("input", function(){
    tan1127.value = Number(tan1125.value)+Number(tan116.value);
})
tan2123.addEventListener("input", function(){
    tan1127.value = Number(tan1125.value)+Number(tan1106.value);
})
tan2124.addEventListener("input", function(){
    tan1127.value = Number(tan1125.value)+Number(tan1106.value);
})

//シュブルテ

tan2123.addEventListener("input", function(){
    tan2125.value = Number(tan2122.value)+Number(tan2103.value)+Number(tan2104.value);
})
tan2124.addEventListener("input", function(){
    tan2125.value = Number(tan2122.value)+Number(tan2103.value)+Number(tan2104.value);
})

tan1123.addEventListener("input", function(){
    tan2126.value = Number(tan1125.value);
})
tan1124.addEventListener("input", function(){
    tan2126.value = Number(tan1125.value);
})
tan1123.addEventListener("input", function(){
    tan2127.value = Number(tan2125.value)+Number(tan2106.value);
})
tan1124.addEventListener("input", function(){
    tan2127.value = Number(tan2125.value)+Number(tan2106.value);
})
tan2123.addEventListener("input", function(){
    tan2127.value = Number(tan2125.value)+Number(tan2106.value);
})
tan2124.addEventListener("input", function(){
    tan2127.value = Number(tan2125.value)+Number(tan2106.value);
})

//躱す

let sen112 = document.querySelector("#sen112");
let sen113 = document.querySelector("#sen113");
let sen114 = document.querySelector("#sen114");
let sen115 = document.querySelector("#sen115");
let sen116 = document.querySelector("#sen116");
let sen117 = document.querySelector("#sen117");

let sen212 = document.querySelector("#sen212");
let sen213 = document.querySelector("#sen213");
let sen214 = document.querySelector("#sen214");
let sen215 = document.querySelector("#sen215");
let sen216 = document.querySelector("#sen216");
let sen217 = document.querySelector("#sen217");


sen115.value = Number(sen112.value);
sen116.value = Number(sen212.value)+Number(sen213.value)+Number(sen214.value);
sen117.value = Number(sen115.value)+Number(sen116.value);

sen215.value = Number(sen212.value);
sen216.value = Number(sen112.value)+Number(sen113.value)+Number(sen114.value);
sen217.value = Number(sen215.value)+Number(sen216.value);

//代償者

sen113.addEventListener("input", function(){
    sen115.value = Number(sen112.value)+Number(sen113.value)+Number(sen114.value);
})
sen114.addEventListener("input", function(){
    sen115.value = Number(sen112.value)+Number(sen113.value)+Number(sen114.value);
})

sen213.addEventListener("input", function(){
    sen116.value = Number(sen212.value)+Number(sen213.value)+Number(sen214.value);
})
sen214.addEventListener("input", function(){
    sen116.value = Number(sen212.value)+Number(sen213.value)+Number(sen214.value);;
})
sen113.addEventListener("input", function(){
    sen117.value = Number(sen115.value)+Number(sen116.value);
})
sen114.addEventListener("input", function(){
    sen117.value = Number(sen115.value)+Number(sen116.value);
})
sen213.addEventListener("input", function(){
    sen117.value = Number(sen115.value)+Number(sen116.value);
})
sen214.addEventListener("input", function(){
    sen117.value = Number(sen115.value)+Number(sen116.value);
})

//シュブルテ

sen213.addEventListener("input", function(){
    sen215.value = Number(sen212.value)+Number(sen213.value)+Number(sen214.value);
})
sen214.addEventListener("input", function(){
    sen215.value = Number(sen212.value)+Number(sen213.value)+Number(sen214.value);
})

sen113.addEventListener("input", function(){
    sen216.value = Number(sen115.value);
})
sen114.addEventListener("input", function(){
    sen216.value = Number(sen115.value);
})
sen113.addEventListener("input", function(){
    sen217.value = Number(sen215.value)+Number(sen216.value);
})
sen114.addEventListener("input", function(){
    sen217.value = Number(sen215.value)+Number(sen216.value);
})
sen213.addEventListener("input", function(){
    sen217.value = Number(sen215.value)+Number(sen216.value);
})
sen214.addEventListener("input", function(){
    sen217.value = Number(sen215.value)+Number(sen216.value);
})

//見切り

let sen122 = document.querySelector("#sen122");
let sen123 = document.querySelector("#sen123");
let sen124 = document.querySelector("#sen124");
let sen125 = document.querySelector("#sen125");
let sen126 = document.querySelector("#sen126");
let sen127 = document.querySelector("#sen127");

let sen222 = document.querySelector("#sen222");
let sen223 = document.querySelector("#sen223");
let sen224 = document.querySelector("#sen224");
let sen225 = document.querySelector("#sen225");
let sen226 = document.querySelector("#sen226");
let sen227 = document.querySelector("#sen227");


sen125.value = Number(sen122.value);
sen126.value = Number(sen222.value)+Number(sen223.value)+Number(sen224.value);
sen127.value = Number(sen125.value)+Number(sen126.value);

sen225.value = Number(sen222.value);
sen226.value = Number(sen122.value)+Number(sen123.value)+Number(sen124.value);
sen227.value = Number(sen225.value)+Number(sen226.value);

//代償者

sen123.addEventListener("input", function(){
    sen125.value = Number(sen122.value)+Number(sen123.value)+Number(sen124.value);
})
sen124.addEventListener("input", function(){
    sen125.value = Number(sen122.value)+Number(sen123.value)+Number(sen124.value);
})

sen223.addEventListener("input", function(){
    sen126.value = Number(sen222.value)+Number(sen223.value)+Number(sen224.value);
})
sen224.addEventListener("input", function(){
    sen126.value = Number(sen222.value)+Number(sen223.value)+Number(sen224.value);;
})
sen123.addEventListener("input", function(){
    sen127.value = Number(sen125.value)+Number(sen126.value);
})
sen124.addEventListener("input", function(){
    sen127.value = Number(sen125.value)+Number(sen126.value);
})
sen223.addEventListener("input", function(){
    sen127.value = Number(sen125.value)+Number(sen126.value);
})
sen224.addEventListener("input", function(){
    sen127.value = Number(sen125.value)+Number(sen126.value);
})

//シュブルテ

sen223.addEventListener("input", function(){
    sen225.value = Number(sen222.value)+Number(sen223.value)+Number(sen224.value);
})
sen224.addEventListener("input", function(){
    sen225.value = Number(sen222.value)+Number(sen223.value)+Number(sen224.value);
})

sen123.addEventListener("input", function(){
    sen226.value = Number(sen125.value);
})
sen124.addEventListener("input", function(){
    sen226.value = Number(sen125.value);
})
sen123.addEventListener("input", function(){
    sen227.value = Number(sen225.value)+Number(sen226.value);
})
sen124.addEventListener("input", function(){
    sen227.value = Number(sen225.value)+Number(sen226.value);
})
sen223.addEventListener("input", function(){
    sen227.value = Number(sen225.value)+Number(sen226.value);
})
sen224.addEventListener("input", function(){
    sen227.value = Number(sen225.value)+Number(sen226.value);
})

//死んだふり

let sen132 = document.querySelector("#sen132");
let sen133 = document.querySelector("#sen133");
let sen134 = document.querySelector("#sen134");
let sen135 = document.querySelector("#sen135");
let sen136 = document.querySelector("#sen136");
let sen137 = document.querySelector("#sen137");

let sen232 = document.querySelector("#sen232");
let sen233 = document.querySelector("#sen233");
let sen234 = document.querySelector("#sen234");
let sen235 = document.querySelector("#sen235");
let sen236 = document.querySelector("#sen236");
let sen237 = document.querySelector("#sen237");


sen135.value = Number(sen132.value);
sen136.value = Number(sen232.value)+Number(sen233.value)+Number(sen234.value);
sen137.value = Number(sen135.value)+Number(sen136.value);

sen235.value = Number(sen232.value);
sen236.value = Number(sen132.value)+Number(sen133.value)+Number(sen134.value);
sen237.value = Number(sen235.value)+Number(sen236.value);

//代償者

sen133.addEventListener("input", function(){
    sen135.value = Number(sen132.value)+Number(sen133.value)+Number(sen134.value);
})
sen134.addEventListener("input", function(){
    sen135.value = Number(sen132.value)+Number(sen133.value)+Number(sen134.value);
})

sen233.addEventListener("input", function(){
    sen136.value = Number(sen232.value)+Number(sen233.value)+Number(sen234.value);
})
sen234.addEventListener("input", function(){
    sen136.value = Number(sen232.value)+Number(sen233.value)+Number(sen234.value);;
})
sen133.addEventListener("input", function(){
    sen137.value = Number(sen135.value)+Number(sen136.value);
})
sen134.addEventListener("input", function(){
    sen137.value = Number(sen135.value)+Number(sen136.value);
})
sen233.addEventListener("input", function(){
    sen137.value = Number(sen135.value)+Number(sen136.value);
})
sen234.addEventListener("input", function(){
    sen137.value = Number(sen135.value)+Number(sen136.value);
})

//シュブルテ

sen233.addEventListener("input", function(){
    sen235.value = Number(sen232.value)+Number(sen233.value)+Number(sen234.value);
})
sen234.addEventListener("input", function(){
    sen235.value = Number(sen232.value)+Number(sen233.value)+Number(sen234.value);
})

sen133.addEventListener("input", function(){
    sen236.value = Number(sen135.value);
})
sen134.addEventListener("input", function(){
    sen236.value = Number(sen135.value);
})
sen133.addEventListener("input", function(){
    sen237.value = Number(sen235.value)+Number(sen236.value);
})
sen134.addEventListener("input", function(){
    sen237.value = Number(sen235.value)+Number(sen236.value);
})
sen233.addEventListener("input", function(){
    sen237.value = Number(sen235.value)+Number(sen236.value);
})
sen234.addEventListener("input", function(){
    sen237.value = Number(sen235.value)+Number(sen236.value);
})

//体術

let sen142 = document.querySelector("#sen142");
let sen143 = document.querySelector("#sen143");
let sen144 = document.querySelector("#sen144");
let sen145 = document.querySelector("#sen145");
let sen146 = document.querySelector("#sen146");
let sen147 = document.querySelector("#sen147");

let sen242 = document.querySelector("#sen242");
let sen243 = document.querySelector("#sen243");
let sen244 = document.querySelector("#sen244");
let sen245 = document.querySelector("#sen245");
let sen246 = document.querySelector("#sen246");
let sen247 = document.querySelector("#sen247");


sen145.value = Number(sen142.value);
sen146.value = Number(sen242.value)+Number(sen243.value)+Number(sen244.value);
sen147.value = Number(sen145.value)+Number(sen146.value);

sen245.value = Number(sen242.value);
sen246.value = Number(sen142.value)+Number(sen143.value)+Number(sen144.value);
sen247.value = Number(sen245.value)+Number(sen246.value);

//代償者

sen143.addEventListener("input", function(){
    sen145.value = Number(sen142.value)+Number(sen143.value)+Number(sen144.value);
})
sen144.addEventListener("input", function(){
    sen145.value = Number(sen142.value)+Number(sen143.value)+Number(sen144.value);
})

sen243.addEventListener("input", function(){
    sen146.value = Number(sen242.value)+Number(sen243.value)+Number(sen244.value);
})
sen244.addEventListener("input", function(){
    sen146.value = Number(sen242.value)+Number(sen243.value)+Number(sen244.value);;
})
sen143.addEventListener("input", function(){
    sen147.value = Number(sen145.value)+Number(sen146.value);
})
sen144.addEventListener("input", function(){
    sen147.value = Number(sen145.value)+Number(sen146.value);
})
sen243.addEventListener("input", function(){
    sen147.value = Number(sen145.value)+Number(sen146.value);
})
sen244.addEventListener("input", function(){
    sen147.value = Number(sen145.value)+Number(sen146.value);
})

//シュブルテ

sen243.addEventListener("input", function(){
    sen245.value = Number(sen242.value)+Number(sen243.value)+Number(sen244.value);
})
sen244.addEventListener("input", function(){
    sen245.value = Number(sen242.value)+Number(sen243.value)+Number(sen244.value);
})

sen143.addEventListener("input", function(){
    sen246.value = Number(sen145.value);
})
sen144.addEventListener("input", function(){
    sen246.value = Number(sen145.value);
})
sen143.addEventListener("input", function(){
    sen247.value = Number(sen245.value)+Number(sen246.value);
})
sen144.addEventListener("input", function(){
    sen247.value = Number(sen245.value)+Number(sen246.value);
})
sen243.addEventListener("input", function(){
    sen247.value = Number(sen245.value)+Number(sen246.value);
})
sen244.addEventListener("input", function(){
    sen247.value = Number(sen245.value)+Number(sen246.value);
})

//投げつける

let sen152 = document.querySelector("#sen152");
let sen153 = document.querySelector("#sen153");
let sen154 = document.querySelector("#sen154");
let sen155 = document.querySelector("#sen155");
let sen156 = document.querySelector("#sen156");
let sen157 = document.querySelector("#sen157");

let sen252 = document.querySelector("#sen252");
let sen253 = document.querySelector("#sen253");
let sen254 = document.querySelector("#sen254");
let sen255 = document.querySelector("#sen255");
let sen256 = document.querySelector("#sen256");
let sen257 = document.querySelector("#sen257");


sen155.value = Number(sen152.value);
sen156.value = Number(sen252.value)+Number(sen253.value)+Number(sen254.value);
sen157.value = Number(sen155.value)+Number(sen156.value);

sen255.value = Number(sen252.value);
sen256.value = Number(sen152.value)+Number(sen153.value)+Number(sen154.value);
sen257.value = Number(sen255.value)+Number(sen256.value);

//代償者

sen153.addEventListener("input", function(){
    sen155.value = Number(sen152.value)+Number(sen153.value)+Number(sen154.value);
})
sen154.addEventListener("input", function(){
    sen155.value = Number(sen152.value)+Number(sen153.value)+Number(sen154.value);
})

sen253.addEventListener("input", function(){
    sen156.value = Number(sen252.value)+Number(sen253.value)+Number(sen254.value);
})
sen254.addEventListener("input", function(){
    sen156.value = Number(sen252.value)+Number(sen253.value)+Number(sen254.value);;
})
sen153.addEventListener("input", function(){
    sen157.value = Number(sen155.value)+Number(sen156.value);
})
sen154.addEventListener("input", function(){
    sen157.value = Number(sen155.value)+Number(sen156.value);
})
sen253.addEventListener("input", function(){
    sen157.value = Number(sen155.value)+Number(sen156.value);
})
sen254.addEventListener("input", function(){
    sen157.value = Number(sen155.value)+Number(sen156.value);
})

//シュブルテ

sen253.addEventListener("input", function(){
    sen255.value = Number(sen252.value)+Number(sen253.value)+Number(sen254.value);
})
sen254.addEventListener("input", function(){
    sen255.value = Number(sen252.value)+Number(sen253.value)+Number(sen254.value);
})

sen153.addEventListener("input", function(){
    sen256.value = Number(sen155.value);
})
sen154.addEventListener("input", function(){
    sen256.value = Number(sen155.value);
})
sen153.addEventListener("input", function(){
    sen257.value = Number(sen255.value)+Number(sen256.value);
})
sen154.addEventListener("input", function(){
    sen257.value = Number(sen255.value)+Number(sen256.value);
})
sen253.addEventListener("input", function(){
    sen257.value = Number(sen255.value)+Number(sen256.value);
})
sen254.addEventListener("input", function(){
    sen257.value = Number(sen255.value)+Number(sen256.value);
})

//締め落とし

let sen162 = document.querySelector("#sen162");
let sen163 = document.querySelector("#sen163");
let sen164 = document.querySelector("#sen164");
let sen165 = document.querySelector("#sen165");
let sen166 = document.querySelector("#sen166");
let sen167 = document.querySelector("#sen167");

let sen262 = document.querySelector("#sen262");
let sen263 = document.querySelector("#sen263");
let sen264 = document.querySelector("#sen264");
let sen265 = document.querySelector("#sen265");
let sen266 = document.querySelector("#sen266");
let sen267 = document.querySelector("#sen267");


sen165.value = Number(sen162.value);
sen166.value = Number(sen262.value)+Number(sen263.value)+Number(sen264.value);
sen167.value = Number(sen165.value)+Number(sen166.value);

sen265.value = Number(sen262.value);
sen266.value = Number(sen162.value)+Number(sen163.value)+Number(sen164.value);
sen267.value = Number(sen265.value)+Number(sen266.value);

//代償者

sen163.addEventListener("input", function(){
    sen165.value = Number(sen162.value)+Number(sen163.value)+Number(sen164.value);
})
sen164.addEventListener("input", function(){
    sen165.value = Number(sen162.value)+Number(sen163.value)+Number(sen164.value);
})

sen263.addEventListener("input", function(){
    sen166.value = Number(sen262.value)+Number(sen263.value)+Number(sen264.value);
})
sen264.addEventListener("input", function(){
    sen166.value = Number(sen262.value)+Number(sen263.value)+Number(sen264.value);;
})
sen163.addEventListener("input", function(){
    sen167.value = Number(sen165.value)+Number(sen166.value);
})
sen164.addEventListener("input", function(){
    sen167.value = Number(sen165.value)+Number(sen166.value);
})
sen263.addEventListener("input", function(){
    sen167.value = Number(sen165.value)+Number(sen166.value);
})
sen264.addEventListener("input", function(){
    sen167.value = Number(sen165.value)+Number(sen166.value);
})

//シュブルテ

sen263.addEventListener("input", function(){
    sen265.value = Number(sen262.value)+Number(sen263.value)+Number(sen264.value);
})
sen264.addEventListener("input", function(){
    sen265.value = Number(sen262.value)+Number(sen263.value)+Number(sen264.value);
})

sen163.addEventListener("input", function(){
    sen266.value = Number(sen165.value);
})
sen164.addEventListener("input", function(){
    sen266.value = Number(sen165.value);
})
sen163.addEventListener("input", function(){
    sen267.value = Number(sen265.value)+Number(sen266.value);
})
sen164.addEventListener("input", function(){
    sen267.value = Number(sen265.value)+Number(sen266.value);
})
sen263.addEventListener("input", function(){
    sen267.value = Number(sen265.value)+Number(sen266.value);
})
sen264.addEventListener("input", function(){
    sen267.value = Number(sen265.value)+Number(sen266.value);
})

//特攻

let sen172 = document.querySelector("#sen172");
let sen173 = document.querySelector("#sen173");
let sen174 = document.querySelector("#sen174");
let sen175 = document.querySelector("#sen175");
let sen176 = document.querySelector("#sen176");
let sen177 = document.querySelector("#sen177");

let sen272 = document.querySelector("#sen272");
let sen273 = document.querySelector("#sen273");
let sen274 = document.querySelector("#sen274");
let sen275 = document.querySelector("#sen275");
let sen276 = document.querySelector("#sen276");
let sen277 = document.querySelector("#sen277");


sen175.value = Number(sen172.value);
sen176.value = Number(sen272.value)+Number(sen273.value)+Number(sen274.value);
sen177.value = Number(sen175.value)+Number(sen176.value);

sen275.value = Number(sen272.value);
sen276.value = Number(sen172.value)+Number(sen173.value)+Number(sen174.value);
sen277.value = Number(sen275.value)+Number(sen276.value);

//代償者

sen173.addEventListener("input", function(){
    sen175.value = Number(sen172.value)+Number(sen173.value)+Number(sen174.value);
})
sen174.addEventListener("input", function(){
    sen175.value = Number(sen172.value)+Number(sen173.value)+Number(sen174.value);
})

sen273.addEventListener("input", function(){
    sen176.value = Number(sen272.value)+Number(sen273.value)+Number(sen274.value);
})
sen274.addEventListener("input", function(){
    sen176.value = Number(sen272.value)+Number(sen273.value)+Number(sen274.value);;
})
sen173.addEventListener("input", function(){
    sen177.value = Number(sen175.value)+Number(sen176.value);
})
sen174.addEventListener("input", function(){
    sen177.value = Number(sen175.value)+Number(sen176.value);
})
sen273.addEventListener("input", function(){
    sen177.value = Number(sen175.value)+Number(sen176.value);
})
sen274.addEventListener("input", function(){
    sen177.value = Number(sen175.value)+Number(sen176.value);
})

//シュブルテ

sen273.addEventListener("input", function(){
    sen275.value = Number(sen272.value)+Number(sen273.value)+Number(sen274.value);
})
sen274.addEventListener("input", function(){
    sen275.value = Number(sen272.value)+Number(sen273.value)+Number(sen274.value);
})

sen173.addEventListener("input", function(){
    sen276.value = Number(sen175.value);
})
sen174.addEventListener("input", function(){
    sen276.value = Number(sen175.value);
})
sen173.addEventListener("input", function(){
    sen277.value = Number(sen275.value)+Number(sen276.value);
})
sen174.addEventListener("input", function(){
    sen277.value = Number(sen275.value)+Number(sen276.value);
})
sen273.addEventListener("input", function(){
    sen277.value = Number(sen275.value)+Number(sen276.value);
})
sen274.addEventListener("input", function(){
    sen277.value = Number(sen275.value)+Number(sen276.value);
})

//銃火器

let sen182 = document.querySelector("#sen182");
let sen183 = document.querySelector("#sen183");
let sen184 = document.querySelector("#sen184");
let sen185 = document.querySelector("#sen185");
let sen186 = document.querySelector("#sen186");
let sen187 = document.querySelector("#sen187");

let sen282 = document.querySelector("#sen282");
let sen283 = document.querySelector("#sen283");
let sen284 = document.querySelector("#sen284");
let sen285 = document.querySelector("#sen285");
let sen286 = document.querySelector("#sen286");
let sen287 = document.querySelector("#sen287");


sen185.value = Number(sen182.value);
sen186.value = Number(sen282.value)+Number(sen283.value)+Number(sen284.value);
sen187.value = Number(sen185.value)+Number(sen186.value);

sen285.value = Number(sen282.value);
sen286.value = Number(sen182.value)+Number(sen183.value)+Number(sen184.value);
sen287.value = Number(sen285.value)+Number(sen286.value);

//代償者

sen183.addEventListener("input", function(){
    sen185.value = Number(sen182.value)+Number(sen183.value)+Number(sen184.value);
})
sen184.addEventListener("input", function(){
    sen185.value = Number(sen182.value)+Number(sen183.value)+Number(sen184.value);
})

sen283.addEventListener("input", function(){
    sen186.value = Number(sen282.value)+Number(sen283.value)+Number(sen284.value);
})
sen284.addEventListener("input", function(){
    sen186.value = Number(sen282.value)+Number(sen283.value)+Number(sen284.value);;
})
sen183.addEventListener("input", function(){
    sen187.value = Number(sen185.value)+Number(sen186.value);
})
sen184.addEventListener("input", function(){
    sen187.value = Number(sen185.value)+Number(sen186.value);
})
sen283.addEventListener("input", function(){
    sen187.value = Number(sen185.value)+Number(sen186.value);
})
sen284.addEventListener("input", function(){
    sen187.value = Number(sen185.value)+Number(sen186.value);
})

//シュブルテ

sen283.addEventListener("input", function(){
    sen285.value = Number(sen282.value)+Number(sen283.value)+Number(sen284.value);
})
sen284.addEventListener("input", function(){
    sen285.value = Number(sen282.value)+Number(sen283.value)+Number(sen284.value);
})

sen183.addEventListener("input", function(){
    sen286.value = Number(sen185.value);
})
sen184.addEventListener("input", function(){
    sen286.value = Number(sen185.value);
})
sen183.addEventListener("input", function(){
    sen287.value = Number(sen285.value)+Number(sen286.value);
})
sen184.addEventListener("input", function(){
    sen287.value = Number(sen285.value)+Number(sen286.value);
})
sen283.addEventListener("input", function(){
    sen287.value = Number(sen285.value)+Number(sen286.value);
})
sen284.addEventListener("input", function(){
    sen287.value = Number(sen285.value)+Number(sen286.value);
})

//刀

let sen192 = document.querySelector("#sen192");
let sen193 = document.querySelector("#sen193");
let sen194 = document.querySelector("#sen194");
let sen195 = document.querySelector("#sen195");
let sen196 = document.querySelector("#sen196");
let sen197 = document.querySelector("#sen197");

let sen292 = document.querySelector("#sen292");
let sen293 = document.querySelector("#sen293");
let sen294 = document.querySelector("#sen294");
let sen295 = document.querySelector("#sen295");
let sen296 = document.querySelector("#sen296");
let sen297 = document.querySelector("#sen297");


sen195.value = Number(sen192.value);
sen196.value = Number(sen292.value)+Number(sen293.value)+Number(sen294.value);
sen197.value = Number(sen195.value)+Number(sen196.value);

sen295.value = Number(sen292.value);
sen296.value = Number(sen192.value)+Number(sen193.value)+Number(sen194.value);
sen297.value = Number(sen295.value)+Number(sen296.value);

//代償者

sen193.addEventListener("input", function(){
    sen195.value = Number(sen192.value)+Number(sen193.value)+Number(sen194.value);
})
sen194.addEventListener("input", function(){
    sen195.value = Number(sen192.value)+Number(sen193.value)+Number(sen194.value);
})

sen293.addEventListener("input", function(){
    sen196.value = Number(sen292.value)+Number(sen293.value)+Number(sen294.value);
})
sen294.addEventListener("input", function(){
    sen196.value = Number(sen292.value)+Number(sen293.value)+Number(sen294.value);;
})
sen193.addEventListener("input", function(){
    sen197.value = Number(sen195.value)+Number(sen196.value);
})
sen194.addEventListener("input", function(){
    sen197.value = Number(sen195.value)+Number(sen196.value);
})
sen293.addEventListener("input", function(){
    sen197.value = Number(sen195.value)+Number(sen196.value);
})
sen294.addEventListener("input", function(){
    sen197.value = Number(sen195.value)+Number(sen196.value);
})

//シュブルテ

sen293.addEventListener("input", function(){
    sen295.value = Number(sen292.value)+Number(sen293.value)+Number(sen294.value);
})
sen294.addEventListener("input", function(){
    sen295.value = Number(sen292.value)+Number(sen293.value)+Number(sen294.value);
})

sen193.addEventListener("input", function(){
    sen296.value = Number(sen195.value);
})
sen194.addEventListener("input", function(){
    sen296.value = Number(sen195.value);
})
sen193.addEventListener("input", function(){
    sen297.value = Number(sen295.value)+Number(sen296.value);
})
sen194.addEventListener("input", function(){
    sen297.value = Number(sen295.value)+Number(sen296.value);
})
sen293.addEventListener("input", function(){
    sen297.value = Number(sen295.value)+Number(sen296.value);
})
sen294.addEventListener("input", function(){
    sen297.value = Number(sen295.value)+Number(sen296.value);
})

//スカミア銃

let sen1102 = document.querySelector("#sen1102");
let sen1103 = document.querySelector("#sen1103");
let sen1104 = document.querySelector("#sen1104");
let sen1105 = document.querySelector("#sen1105");
let sen1106 = document.querySelector("#sen1106");
let sen1107 = document.querySelector("#sen1107");

let sen2102 = document.querySelector("#sen2102");
let sen2103 = document.querySelector("#sen2103");
let sen2104 = document.querySelector("#sen2104");
let sen2105 = document.querySelector("#sen2105");
let sen2106 = document.querySelector("#sen2106");
let sen2107 = document.querySelector("#sen2107");


sen1105.value = Number(sen1102.value);
sen1106.value = Number(sen2102.value)+Number(sen2103.value)+Number(sen2104.value);
sen1107.value = Number(sen1105.value)+Number(sen1106.value);

sen2105.value = Number(sen2102.value);
sen2106.value = Number(sen1102.value)+Number(sen1103.value)+Number(sen1104.value);
sen2107.value = Number(sen2105.value)+Number(sen2106.value);

//代償者

sen1103.addEventListener("input", function(){
    sen1105.value = Number(sen1102.value)+Number(sen1103.value)+Number(sen1104.value);
})
sen1104.addEventListener("input", function(){
    sen1105.value = Number(sen1102.value)+Number(sen1103.value)+Number(sen1104.value);
})

sen2103.addEventListener("input", function(){
    sen1106.value = Number(sen2102.value)+Number(sen2103.value)+Number(sen2104.value);
})
sen2104.addEventListener("input", function(){
    sen1106.value = Number(sen2102.value)+Number(sen2103.value)+Number(sen2104.value);;
})
sen1103.addEventListener("input", function(){
    sen1107.value = Number(sen1105.value)+Number(sen1106.value);
})
sen1104.addEventListener("input", function(){
    sen1107.value = Number(sen1105.value)+Number(sen1106.value);
})
sen2103.addEventListener("input", function(){
    sen1107.value = Number(sen1105.value)+Number(sen1106.value);
})
sen2104.addEventListener("input", function(){
    sen1107.value = Number(sen1105.value)+Number(sen1106.value);
})

//シュブルテ

sen2103.addEventListener("input", function(){
    sen2105.value = Number(sen2102.value)+Number(sen2103.value)+Number(sen2104.value);
})
sen2104.addEventListener("input", function(){
    sen2105.value = Number(sen2102.value)+Number(sen2103.value)+Number(sen2104.value);
})

sen1103.addEventListener("input", function(){
    sen2106.value = Number(sen1105.value);
})
sen1104.addEventListener("input", function(){
    sen2106.value = Number(sen1105.value);
})
sen1103.addEventListener("input", function(){
    sen2107.value = Number(sen2105.value)+Number(sen2106.value);
})
sen1104.addEventListener("input", function(){
    sen2107.value = Number(sen2105.value)+Number(sen2106.value);
})
sen2103.addEventListener("input", function(){
    sen2107.value = Number(sen2105.value)+Number(sen2106.value);
})
sen2104.addEventListener("input", function(){
    sen2107.value = Number(sen2105.value)+Number(sen2106.value);
})

//錯乱

let tai112 = document.querySelector("#tai112");
let tai113 = document.querySelector("#tai113");
let tai114 = document.querySelector("#tai114");
let tai115 = document.querySelector("#tai115");
let tai116 = document.querySelector("#tai116");
let tai117 = document.querySelector("#tai117");

let tai212 = document.querySelector("#tai212");
let tai213 = document.querySelector("#tai213");
let tai214 = document.querySelector("#tai214");
let tai215 = document.querySelector("#tai215");
let tai216 = document.querySelector("#tai216");
let tai217 = document.querySelector("#tai217");


tai115.value = Number(tai112.value);
tai116.value = Number(tai212.value)+Number(tai213.value)+Number(tai214.value);
tai117.value = Number(tai115.value)+Number(tai116.value);

tai215.value = Number(tai212.value);
tai216.value = Number(tai112.value)+Number(tai113.value)+Number(tai114.value);
tai217.value = Number(tai215.value)+Number(tai216.value);

//代償者

tai113.addEventListener("input", function(){
    tai115.value = Number(tai112.value)+Number(tai113.value)+Number(tai114.value);
})
tai114.addEventListener("input", function(){
    tai115.value = Number(tai112.value)+Number(tai113.value)+Number(tai114.value);
})

tai213.addEventListener("input", function(){
    tai116.value = Number(tai212.value)+Number(tai213.value)+Number(tai214.value);
})
tai214.addEventListener("input", function(){
    tai116.value = Number(tai212.value)+Number(tai213.value)+Number(tai214.value);;
})
tai113.addEventListener("input", function(){
    tai117.value = Number(tai115.value)+Number(tai116.value);
})
tai114.addEventListener("input", function(){
    tai117.value = Number(tai115.value)+Number(tai116.value);
})
tai213.addEventListener("input", function(){
    tai117.value = Number(tai115.value)+Number(tai116.value);
})
tai214.addEventListener("input", function(){
    tai117.value = Number(tai115.value)+Number(tai116.value);
})

//シュブルテ

tai213.addEventListener("input", function(){
    tai215.value = Number(tai212.value)+Number(tai213.value)+Number(tai214.value);
})
tai214.addEventListener("input", function(){
    tai215.value = Number(tai212.value)+Number(tai213.value)+Number(tai214.value);
})

tai113.addEventListener("input", function(){
    tai216.value = Number(tai115.value);
})
tai114.addEventListener("input", function(){
    tai216.value = Number(tai115.value);
})
tai113.addEventListener("input", function(){
    tai217.value = Number(tai215.value)+Number(tai216.value);
})
tai114.addEventListener("input", function(){
    tai217.value = Number(tai215.value)+Number(tai216.value);
})
tai213.addEventListener("input", function(){
    tai217.value = Number(tai215.value)+Number(tai216.value);
})
tai214.addEventListener("input", function(){
    tai217.value = Number(tai215.value)+Number(tai216.value);
})

//交渉

let tai122 = document.querySelector("#tai122");
let tai123 = document.querySelector("#tai123");
let tai124 = document.querySelector("#tai124");
let tai125 = document.querySelector("#tai125");
let tai126 = document.querySelector("#tai126");
let tai127 = document.querySelector("#tai127");

let tai222 = document.querySelector("#tai222");
let tai223 = document.querySelector("#tai223");
let tai224 = document.querySelector("#tai224");
let tai225 = document.querySelector("#tai225");
let tai226 = document.querySelector("#tai226");
let tai227 = document.querySelector("#tai227");


tai125.value = Number(tai122.value);
tai126.value = Number(tai222.value)+Number(tai223.value)+Number(tai224.value);
tai127.value = Number(tai125.value)+Number(tai126.value);

tai225.value = Number(tai222.value);
tai226.value = Number(tai122.value)+Number(tai123.value)+Number(tai124.value);
tai227.value = Number(tai225.value)+Number(tai226.value);

//代償者

tai123.addEventListener("input", function(){
    tai125.value = Number(tai122.value)+Number(tai123.value)+Number(tai124.value);
})
tai124.addEventListener("input", function(){
    tai125.value = Number(tai122.value)+Number(tai123.value)+Number(tai124.value);
})

tai223.addEventListener("input", function(){
    tai126.value = Number(tai222.value)+Number(tai223.value)+Number(tai224.value);
})
tai224.addEventListener("input", function(){
    tai126.value = Number(tai222.value)+Number(tai223.value)+Number(tai224.value);;
})
tai123.addEventListener("input", function(){
    tai127.value = Number(tai125.value)+Number(tai126.value);
})
tai124.addEventListener("input", function(){
    tai127.value = Number(tai125.value)+Number(tai126.value);
})
tai223.addEventListener("input", function(){
    tai127.value = Number(tai125.value)+Number(tai126.value);
})
tai224.addEventListener("input", function(){
    tai127.value = Number(tai125.value)+Number(tai126.value);
})

//シュブルテ

tai223.addEventListener("input", function(){
    tai225.value = Number(tai222.value)+Number(tai223.value)+Number(tai224.value);
})
tai224.addEventListener("input", function(){
    tai225.value = Number(tai222.value)+Number(tai223.value)+Number(tai224.value);
})

tai123.addEventListener("input", function(){
    tai226.value = Number(tai125.value);
})
tai124.addEventListener("input", function(){
    tai226.value = Number(tai125.value);
})
tai123.addEventListener("input", function(){
    tai227.value = Number(tai225.value)+Number(tai226.value);
})
tai124.addEventListener("input", function(){
    tai227.value = Number(tai225.value)+Number(tai226.value);
})
tai223.addEventListener("input", function(){
    tai227.value = Number(tai225.value)+Number(tai226.value);
})
tai224.addEventListener("input", function(){
    tai227.value = Number(tai225.value)+Number(tai226.value);
})

//恐喝

let tai132 = document.querySelector("#tai132");
let tai133 = document.querySelector("#tai133");
let tai134 = document.querySelector("#tai134");
let tai135 = document.querySelector("#tai135");
let tai136 = document.querySelector("#tai136");
let tai137 = document.querySelector("#tai137");

let tai232 = document.querySelector("#tai232");
let tai233 = document.querySelector("#tai233");
let tai234 = document.querySelector("#tai234");
let tai235 = document.querySelector("#tai235");
let tai236 = document.querySelector("#tai236");
let tai237 = document.querySelector("#tai237");


tai135.value = Number(tai132.value);
tai136.value = Number(tai232.value)+Number(tai233.value)+Number(tai234.value);
tai137.value = Number(tai135.value)+Number(tai136.value);

tai235.value = Number(tai232.value);
tai236.value = Number(tai132.value)+Number(tai133.value)+Number(tai134.value);
tai237.value = Number(tai235.value)+Number(tai236.value);

//代償者

tai133.addEventListener("input", function(){
    tai135.value = Number(tai132.value)+Number(tai133.value)+Number(tai134.value);
})
tai134.addEventListener("input", function(){
    tai135.value = Number(tai132.value)+Number(tai133.value)+Number(tai134.value);
})

tai233.addEventListener("input", function(){
    tai136.value = Number(tai232.value)+Number(tai233.value)+Number(tai234.value);
})
tai234.addEventListener("input", function(){
    tai136.value = Number(tai232.value)+Number(tai233.value)+Number(tai234.value);;
})
tai133.addEventListener("input", function(){
    tai137.value = Number(tai135.value)+Number(tai136.value);
})
tai134.addEventListener("input", function(){
    tai137.value = Number(tai135.value)+Number(tai136.value);
})
tai233.addEventListener("input", function(){
    tai137.value = Number(tai135.value)+Number(tai136.value);
})
tai234.addEventListener("input", function(){
    tai137.value = Number(tai135.value)+Number(tai136.value);
})

//シュブルテ

tai233.addEventListener("input", function(){
    tai235.value = Number(tai232.value)+Number(tai233.value)+Number(tai234.value);
})
tai234.addEventListener("input", function(){
    tai235.value = Number(tai232.value)+Number(tai233.value)+Number(tai234.value);
})

tai133.addEventListener("input", function(){
    tai236.value = Number(tai135.value);
})
tai134.addEventListener("input", function(){
    tai236.value = Number(tai135.value);
})
tai133.addEventListener("input", function(){
    tai237.value = Number(tai235.value)+Number(tai236.value);
})
tai134.addEventListener("input", function(){
    tai237.value = Number(tai235.value)+Number(tai236.value);
})
tai233.addEventListener("input", function(){
    tai237.value = Number(tai235.value)+Number(tai236.value);
})
tai234.addEventListener("input", function(){
    tai237.value = Number(tai235.value)+Number(tai236.value);
})

//シュブルテ言語

let tis112 = document.querySelector("#tis112");
let tis113 = document.querySelector("#tis113");
let tis114 = document.querySelector("#tis114");
let tis115 = document.querySelector("#tis115");
let tis116 = document.querySelector("#tis116");
let tis117 = document.querySelector("#tis117");

let tis212 = document.querySelector("#tis212");
let tis213 = document.querySelector("#tis213");
let tis214 = document.querySelector("#tis214");
let tis215 = document.querySelector("#tis215");
let tis216 = document.querySelector("#tis216");
let tis217 = document.querySelector("#tis217");


tis115.value = Number(tis112.value);
tis116.value = Number(tis212.value)+Number(tis213.value)+Number(tis214.value);
tis117.value = Number(tis115.value)+Number(tis116.value);

tis215.value = Number(tis212.value);
tis216.value = Number(tis112.value)+Number(tis113.value)+Number(tis114.value);
tis217.value = Number(tis215.value)+Number(tis216.value);

//代償者

tis113.addEventListener("input", function(){
    tis115.value = Number(tis112.value)+Number(tis113.value)+Number(tis114.value);
})
tis114.addEventListener("input", function(){
    tis115.value = Number(tis112.value)+Number(tis113.value)+Number(tis114.value);
})

tis213.addEventListener("input", function(){
    tis116.value = Number(tis212.value)+Number(tis213.value)+Number(tis214.value);
})
tis214.addEventListener("input", function(){
    tis116.value = Number(tis212.value)+Number(tis213.value)+Number(tis214.value);;
})
tis113.addEventListener("input", function(){
    tis117.value = Number(tis115.value)+Number(tis116.value);
})
tis114.addEventListener("input", function(){
    tis117.value = Number(tis115.value)+Number(tis116.value);
})
tis213.addEventListener("input", function(){
    tis117.value = Number(tis115.value)+Number(tis116.value);
})
tis214.addEventListener("input", function(){
    tis117.value = Number(tis115.value)+Number(tis116.value);
})

//シュブルテ

tis213.addEventListener("input", function(){
    tis215.value = Number(tis212.value)+Number(tis213.value)+Number(tis214.value);
})
tis214.addEventListener("input", function(){
    tis215.value = Number(tis212.value)+Number(tis213.value)+Number(tis214.value);
})

tis113.addEventListener("input", function(){
    tis216.value = Number(tis115.value);
})
tis114.addEventListener("input", function(){
    tis216.value = Number(tis115.value);
})
tis113.addEventListener("input", function(){
    tis217.value = Number(tis215.value)+Number(tis216.value);
})
tis114.addEventListener("input", function(){
    tis217.value = Number(tis215.value)+Number(tis216.value);
})
tis213.addEventListener("input", function(){
    tis217.value = Number(tis215.value)+Number(tis216.value);
})
tis214.addEventListener("input", function(){
    tis217.value = Number(tis215.value)+Number(tis216.value);
})

//料理

let tis122 = document.querySelector("#tis122");
let tis123 = document.querySelector("#tis123");
let tis124 = document.querySelector("#tis124");
let tis125 = document.querySelector("#tis125");
let tis126 = document.querySelector("#tis126");
let tis127 = document.querySelector("#tis127");

let tis222 = document.querySelector("#tis222");
let tis223 = document.querySelector("#tis223");
let tis224 = document.querySelector("#tis224");
let tis225 = document.querySelector("#tis225");
let tis226 = document.querySelector("#tis226");
let tis227 = document.querySelector("#tis227");


tis125.value = Number(tis122.value);
tis126.value = Number(tis222.value)+Number(tis223.value)+Number(tis224.value);
tis127.value = Number(tis125.value)+Number(tis126.value);

tis225.value = Number(tis222.value);
tis226.value = Number(tis122.value)+Number(tis123.value)+Number(tis124.value);
tis227.value = Number(tis225.value)+Number(tis226.value);

//代償者

tis123.addEventListener("input", function(){
    tis125.value = Number(tis122.value)+Number(tis123.value)+Number(tis124.value);
})
tis124.addEventListener("input", function(){
    tis125.value = Number(tis122.value)+Number(tis123.value)+Number(tis124.value);
})

tis223.addEventListener("input", function(){
    tis126.value = Number(tis222.value)+Number(tis223.value)+Number(tis224.value);
})
tis224.addEventListener("input", function(){
    tis126.value = Number(tis222.value)+Number(tis223.value)+Number(tis224.value);;
})
tis123.addEventListener("input", function(){
    tis127.value = Number(tis125.value)+Number(tis126.value);
})
tis124.addEventListener("input", function(){
    tis127.value = Number(tis125.value)+Number(tis126.value);
})
tis223.addEventListener("input", function(){
    tis127.value = Number(tis125.value)+Number(tis126.value);
})
tis224.addEventListener("input", function(){
    tis127.value = Number(tis125.value)+Number(tis126.value);
})

//シュブルテ

tis223.addEventListener("input", function(){
    tis225.value = Number(tis222.value)+Number(tis223.value)+Number(tis224.value);
})
tis224.addEventListener("input", function(){
    tis225.value = Number(tis222.value)+Number(tis223.value)+Number(tis224.value);
})

tis123.addEventListener("input", function(){
    tis226.value = Number(tis125.value);
})
tis124.addEventListener("input", function(){
    tis226.value = Number(tis125.value);
})
tis123.addEventListener("input", function(){
    tis227.value = Number(tis225.value)+Number(tis226.value);
})
tis124.addEventListener("input", function(){
    tis227.value = Number(tis225.value)+Number(tis226.value);
})
tis223.addEventListener("input", function(){
    tis227.value = Number(tis225.value)+Number(tis226.value);
})
tis224.addEventListener("input", function(){
    tis227.value = Number(tis225.value)+Number(tis226.value);
})

//スカミア学

let tis132 = document.querySelector("#tis132");
let tis133 = document.querySelector("#tis133");
let tis134 = document.querySelector("#tis134");
let tis135 = document.querySelector("#tis135");
let tis136 = document.querySelector("#tis136");
let tis137 = document.querySelector("#tis137");

let tis232 = document.querySelector("#tis232");
let tis233 = document.querySelector("#tis233");
let tis234 = document.querySelector("#tis234");
let tis235 = document.querySelector("#tis235");
let tis236 = document.querySelector("#tis236");
let tis237 = document.querySelector("#tis237");


tis135.value = Number(tis132.value);
tis136.value = Number(tis232.value)+Number(tis233.value)+Number(tis234.value);
tis137.value = Number(tis135.value)+Number(tis136.value);

tis235.value = Number(tis232.value);
tis236.value = Number(tis132.value)+Number(tis133.value)+Number(tis134.value);
tis237.value = Number(tis235.value)+Number(tis236.value);

//代償者

tis133.addEventListener("input", function(){
    tis135.value = Number(tis132.value)+Number(tis133.value)+Number(tis134.value);
})
tis134.addEventListener("input", function(){
    tis135.value = Number(tis132.value)+Number(tis133.value)+Number(tis134.value);
})

tis233.addEventListener("input", function(){
    tis136.value = Number(tis232.value)+Number(tis233.value)+Number(tis234.value);
})
tis234.addEventListener("input", function(){
    tis136.value = Number(tis232.value)+Number(tis233.value)+Number(tis234.value);;
})
tis133.addEventListener("input", function(){
    tis137.value = Number(tis135.value)+Number(tis136.value);
})
tis134.addEventListener("input", function(){
    tis137.value = Number(tis135.value)+Number(tis136.value);
})
tis233.addEventListener("input", function(){
    tis137.value = Number(tis135.value)+Number(tis136.value);
})
tis234.addEventListener("input", function(){
    tis137.value = Number(tis135.value)+Number(tis136.value);
})

//シュブルテ

tis233.addEventListener("input", function(){
    tis235.value = Number(tis232.value)+Number(tis233.value)+Number(tis234.value);
})
tis234.addEventListener("input", function(){
    tis235.value = Number(tis232.value)+Number(tis233.value)+Number(tis234.value);
})

tis133.addEventListener("input", function(){
    tis236.value = Number(tis135.value);
})
tis134.addEventListener("input", function(){
    tis236.value = Number(tis135.value);
})
tis133.addEventListener("input", function(){
    tis237.value = Number(tis235.value)+Number(tis236.value);
})
tis134.addEventListener("input", function(){
    tis237.value = Number(tis235.value)+Number(tis236.value);
})
tis233.addEventListener("input", function(){
    tis237.value = Number(tis235.value)+Number(tis236.value);
})
tis234.addEventListener("input", function(){
    tis237.value = Number(tis235.value)+Number(tis236.value);
})

//考古学

let tis142 = document.querySelector("#tis142");
let tis143 = document.querySelector("#tis143");
let tis144 = document.querySelector("#tis144");
let tis145 = document.querySelector("#tis145");
let tis146 = document.querySelector("#tis146");
let tis147 = document.querySelector("#tis147");

let tis242 = document.querySelector("#tis242");
let tis243 = document.querySelector("#tis243");
let tis244 = document.querySelector("#tis244");
let tis245 = document.querySelector("#tis245");
let tis246 = document.querySelector("#tis246");
let tis247 = document.querySelector("#tis247");


tis145.value = Number(tis142.value);
tis146.value = Number(tis242.value)+Number(tis243.value)+Number(tis244.value);
tis147.value = Number(tis145.value)+Number(tis146.value);

tis245.value = Number(tis242.value);
tis246.value = Number(tis142.value)+Number(tis143.value)+Number(tis144.value);
tis247.value = Number(tis245.value)+Number(tis246.value);

//代償者

tis143.addEventListener("input", function(){
    tis145.value = Number(tis142.value)+Number(tis143.value)+Number(tis144.value);
})
tis144.addEventListener("input", function(){
    tis145.value = Number(tis142.value)+Number(tis143.value)+Number(tis144.value);
})

tis243.addEventListener("input", function(){
    tis146.value = Number(tis242.value)+Number(tis243.value)+Number(tis244.value);
})
tis244.addEventListener("input", function(){
    tis146.value = Number(tis242.value)+Number(tis243.value)+Number(tis244.value);
})
tis143.addEventListener("input", function(){
    tis147.value = Number(tis145.value)+Number(tis146.value);
})
tis144.addEventListener("input", function(){
    tis147.value = Number(tis145.value)+Number(tis146.value);
})
tis243.addEventListener("input", function(){
    tis147.value = Number(tis145.value)+Number(tis146.value);
})
tis244.addEventListener("input", function(){
    tis147.value = Number(tis145.value)+Number(tis146.value);
})

//シュブルテ

tis243.addEventListener("input", function(){
    tis245.value = Number(tis242.value)+Number(tis243.value)+Number(tis244.value);
})
tis244.addEventListener("input", function(){
    tis245.value = Number(tis242.value)+Number(tis243.value)+Number(tis244.value);
})

tis143.addEventListener("input", function(){
    tis246.value = Number(tis145.value);
})
tis144.addEventListener("input", function(){
    tis246.value = Number(tis145.value);
})
tis143.addEventListener("input", function(){
    tis247.value = Number(tis245.value)+Number(tis246.value);
})
tis144.addEventListener("input", function(){
    tis247.value = Number(tis245.value)+Number(tis246.value);
})
tis243.addEventListener("input", function(){
    tis247.value = Number(tis245.value)+Number(tis246.value);
})
tis244.addEventListener("input", function(){
    tis247.value = Number(tis245.value)+Number(tis246.value);
})

//戦闘知識

let tis152 = document.querySelector("#tis152");
let tis153 = document.querySelector("#tis153");
let tis154 = document.querySelector("#tis154");
let tis155 = document.querySelector("#tis155");
let tis156 = document.querySelector("#tis156");
let tis157 = document.querySelector("#tis157");

let tis252 = document.querySelector("#tis252");
let tis253 = document.querySelector("#tis253");
let tis254 = document.querySelector("#tis254");
let tis255 = document.querySelector("#tis255");
let tis256 = document.querySelector("#tis256");
let tis257 = document.querySelector("#tis257");


tis155.value = Number(tis152.value);
tis156.value = Number(tis252.value)+Number(tis253.value)+Number(tis254.value);
tis157.value = Number(tis155.value)+Number(tis156.value);

tis255.value = Number(tis252.value);
tis256.value = Number(tis152.value)+Number(tis153.value)+Number(tis154.value);
tis257.value = Number(tis255.value)+Number(tis256.value);

//代償者

tis153.addEventListener("input", function(){
    tis155.value = Number(tis152.value)+Number(tis153.value)+Number(tis154.value);
})
tis154.addEventListener("input", function(){
    tis155.value = Number(tis152.value)+Number(tis153.value)+Number(tis154.value);
})

tis253.addEventListener("input", function(){
    tis156.value = Number(tis252.value)+Number(tis253.value)+Number(tis254.value);
})
tis254.addEventListener("input", function(){
    tis156.value = Number(tis252.value)+Number(tis253.value)+Number(tis254.value);
})
tis153.addEventListener("input", function(){
    tis157.value = Number(tis155.value)+Number(tis156.value);
})
tis154.addEventListener("input", function(){
    tis157.value = Number(tis155.value)+Number(tis156.value);
})
tis253.addEventListener("input", function(){
    tis157.value = Number(tis155.value)+Number(tis156.value);
})
tis254.addEventListener("input", function(){
    tis157.value = Number(tis155.value)+Number(tis156.value);
})

//シュブルテ

tis253.addEventListener("input", function(){
    tis255.value = Number(tis252.value)+Number(tis253.value)+Number(tis254.value);
})
tis254.addEventListener("input", function(){
    tis255.value = Number(tis252.value)+Number(tis253.value)+Number(tis254.value);
})

tis153.addEventListener("input", function(){
    tis256.value = Number(tis155.value);
})
tis154.addEventListener("input", function(){
    tis256.value = Number(tis155.value);
})
tis153.addEventListener("input", function(){
    tis257.value = Number(tis255.value)+Number(tis256.value);
})
tis154.addEventListener("input", function(){
    tis257.value = Number(tis255.value)+Number(tis256.value);
})
tis253.addEventListener("input", function(){
    tis257.value = Number(tis255.value)+Number(tis256.value);
})
tis254.addEventListener("input", function(){
    tis257.value = Number(tis255.value)+Number(tis256.value);
})

//解剖学

let tis162 = document.querySelector("#tis162");
let tis163 = document.querySelector("#tis163");
let tis164 = document.querySelector("#tis164");
let tis165 = document.querySelector("#tis165");
let tis166 = document.querySelector("#tis166");
let tis167 = document.querySelector("#tis167");

let tis262 = document.querySelector("#tis262");
let tis263 = document.querySelector("#tis263");
let tis264 = document.querySelector("#tis264");
let tis265 = document.querySelector("#tis265");
let tis266 = document.querySelector("#tis266");
let tis267 = document.querySelector("#tis267");


tis165.value = Number(tis162.value);
tis166.value = Number(tis262.value)+Number(tis263.value)+Number(tis264.value);
tis167.value = Number(tis165.value)+Number(tis166.value);

tis265.value = Number(tis262.value);
tis266.value = Number(tis162.value)+Number(tis163.value)+Number(tis164.value);
tis267.value = Number(tis265.value)+Number(tis266.value);

//代償者

tis163.addEventListener("input", function(){
    tis165.value = Number(tis162.value)+Number(tis163.value)+Number(tis164.value);
})
tis164.addEventListener("input", function(){
    tis165.value = Number(tis162.value)+Number(tis163.value)+Number(tis164.value);
})

tis263.addEventListener("input", function(){
    tis166.value = Number(tis262.value)+Number(tis263.value)+Number(tis264.value);
})
tis264.addEventListener("input", function(){
    tis166.value = Number(tis262.value)+Number(tis263.value)+Number(tis264.value);
})
tis163.addEventListener("input", function(){
    tis167.value = Number(tis165.value)+Number(tis166.value);
})
tis164.addEventListener("input", function(){
    tis167.value = Number(tis165.value)+Number(tis166.value);
})
tis263.addEventListener("input", function(){
    tis167.value = Number(tis165.value)+Number(tis166.value);
})
tis264.addEventListener("input", function(){
    tis167.value = Number(tis165.value)+Number(tis166.value);
})

//シュブルテ

tis263.addEventListener("input", function(){
    tis265.value = Number(tis262.value)+Number(tis263.value)+Number(tis264.value);
})
tis264.addEventListener("input", function(){
    tis265.value = Number(tis262.value)+Number(tis263.value)+Number(tis264.value);
})

tis163.addEventListener("input", function(){
    tis266.value = Number(tis165.value);
})
tis164.addEventListener("input", function(){
    tis266.value = Number(tis165.value);
})
tis163.addEventListener("input", function(){
    tis267.value = Number(tis265.value)+Number(tis266.value);
})
tis164.addEventListener("input", function(){
    tis267.value = Number(tis265.value)+Number(tis266.value);
})
tis263.addEventListener("input", function(){
    tis267.value = Number(tis265.value)+Number(tis266.value);
})
tis264.addEventListener("input", function(){
    tis267.value = Number(tis265.value)+Number(tis266.value);
})

//他言語

let tis172 = document.querySelector("#tis172");
let tis173 = document.querySelector("#tis173");
let tis174 = document.querySelector("#tis174");
let tis175 = document.querySelector("#tis175");
let tis176 = document.querySelector("#tis176");
let tis177 = document.querySelector("#tis177");

let tis272 = document.querySelector("#tis272");
let tis273 = document.querySelector("#tis273");
let tis274 = document.querySelector("#tis274");
let tis275 = document.querySelector("#tis275");
let tis276 = document.querySelector("#tis276");
let tis277 = document.querySelector("#tis277");


tis175.value = Number(tis172.value);
tis176.value = Number(tis272.value)+Number(tis273.value)+Number(tis274.value);
tis177.value = Number(tis175.value)+Number(tis176.value);

tis275.value = Number(tis272.value);
tis276.value = Number(tis172.value)+Number(tis173.value)+Number(tis174.value);
tis277.value = Number(tis275.value)+Number(tis276.value);

//代償者

tis173.addEventListener("input", function(){
    tis175.value = Number(tis172.value)+Number(tis173.value)+Number(tis174.value);
})
tis174.addEventListener("input", function(){
    tis175.value = Number(tis172.value)+Number(tis173.value)+Number(tis174.value);
})

tis273.addEventListener("input", function(){
    tis176.value = Number(tis272.value)+Number(tis273.value)+Number(tis274.value);
})
tis274.addEventListener("input", function(){
    tis176.value = Number(tis272.value)+Number(tis273.value)+Number(tis274.value);;
})
tis173.addEventListener("input", function(){
    tis177.value = Number(tis175.value)+Number(tis176.value);
})
tis174.addEventListener("input", function(){
    tis177.value = Number(tis175.value)+Number(tis176.value);
})
tis273.addEventListener("input", function(){
    tis177.value = Number(tis175.value)+Number(tis176.value);
})
tis274.addEventListener("input", function(){
    tis177.value = Number(tis175.value)+Number(tis176.value);
})

//シュブルテ

tis273.addEventListener("input", function(){
    tis275.value = Number(tis272.value)+Number(tis273.value)+Number(tis274.value);
})
tis274.addEventListener("input", function(){
    tis275.value = Number(tis272.value)+Number(tis273.value)+Number(tis274.value);
})

tis173.addEventListener("input", function(){
    tis276.value = Number(tis175.value);
})
tis174.addEventListener("input", function(){
    tis276.value = Number(tis175.value);
})
tis173.addEventListener("input", function(){
    tis277.value = Number(tis275.value)+Number(tis276.value);
})
tis174.addEventListener("input", function(){
    tis277.value = Number(tis275.value)+Number(tis276.value);
})
tis273.addEventListener("input", function(){
    tis277.value = Number(tis275.value)+Number(tis276.value);
})
tis274.addEventListener("input", function(){
    tis277.value = Number(tis275.value)+Number(tis276.value);
})

//現代史

let tis182 = document.querySelector("#tis182");
let tis183 = document.querySelector("#tis183");
let tis184 = document.querySelector("#tis184");
let tis185 = document.querySelector("#tis185");
let tis186 = document.querySelector("#tis186");
let tis187 = document.querySelector("#tis187");

let tis282 = document.querySelector("#tis282");
let tis283 = document.querySelector("#tis283");
let tis284 = document.querySelector("#tis284");
let tis285 = document.querySelector("#tis285");
let tis286 = document.querySelector("#tis286");
let tis287 = document.querySelector("#tis287");


tis185.value = Number(tis182.value);
tis186.value = Number(tis282.value)+Number(tis283.value)+Number(tis284.value);
tis187.value = Number(tis185.value)+Number(tis186.value);

tis285.value = Number(tis282.value);
tis286.value = Number(tis182.value)+Number(tis183.value)+Number(tis184.value);
tis287.value = Number(tis285.value)+Number(tis286.value);

//代償者

tis183.addEventListener("input", function(){
    tis185.value = Number(tis182.value)+Number(tis183.value)+Number(tis184.value);
})
tis184.addEventListener("input", function(){
    tis185.value = Number(tis182.value)+Number(tis183.value)+Number(tis184.value);
})

tis283.addEventListener("input", function(){
    tis186.value = Number(tis282.value)+Number(tis283.value)+Number(tis284.value);
})
tis284.addEventListener("input", function(){
    tis186.value = Number(tis282.value)+Number(tis283.value)+Number(tis284.value);;
})
tis183.addEventListener("input", function(){
    tis187.value = Number(tis185.value)+Number(tis186.value);
})
tis184.addEventListener("input", function(){
    tis187.value = Number(tis185.value)+Number(tis186.value);
})
tis283.addEventListener("input", function(){
    tis187.value = Number(tis185.value)+Number(tis186.value);
})
tis284.addEventListener("input", function(){
    tis187.value = Number(tis185.value)+Number(tis186.value);
})

//シュブルテ

tis283.addEventListener("input", function(){
    tis285.value = Number(tis282.value)+Number(tis283.value)+Number(tis284.value);
})
tis284.addEventListener("input", function(){
    tis285.value = Number(tis282.value)+Number(tis283.value)+Number(tis284.value);
})

tis183.addEventListener("input", function(){
    tis286.value = Number(tis185.value);
})
tis184.addEventListener("input", function(){
    tis286.value = Number(tis185.value);
})
tis183.addEventListener("input", function(){
    tis287.value = Number(tis285.value)+Number(tis286.value);
})
tis184.addEventListener("input", function(){
    tis287.value = Number(tis285.value)+Number(tis286.value);
})
tis283.addEventListener("input", function(){
    tis287.value = Number(tis285.value)+Number(tis286.value);
})
tis284.addEventListener("input", function(){
    tis287.value = Number(tis285.value)+Number(tis286.value);
})

//科学

let tis192 = document.querySelector("#tis192");
let tis193 = document.querySelector("#tis193");
let tis194 = document.querySelector("#tis194");
let tis195 = document.querySelector("#tis195");
let tis196 = document.querySelector("#tis196");
let tis197 = document.querySelector("#tis197");

let tis292 = document.querySelector("#tis292");
let tis293 = document.querySelector("#tis293");
let tis294 = document.querySelector("#tis294");
let tis295 = document.querySelector("#tis295");
let tis296 = document.querySelector("#tis296");
let tis297 = document.querySelector("#tis297");


tis195.value = Number(tis192.value);
tis196.value = Number(tis292.value)+Number(tis293.value)+Number(tis294.value);
tis197.value = Number(tis195.value)+Number(tis196.value);

tis295.value = Number(tis292.value);
tis296.value = Number(tis192.value)+Number(tis193.value)+Number(tis194.value);
tis297.value = Number(tis295.value)+Number(tis296.value);

//代償者

tis193.addEventListener("input", function(){
    tis195.value = Number(tis192.value)+Number(tis193.value)+Number(tis194.value);
})
tis194.addEventListener("input", function(){
    tis195.value = Number(tis192.value)+Number(tis193.value)+Number(tis194.value);
})

tis293.addEventListener("input", function(){
    tis196.value = Number(tis292.value)+Number(tis293.value)+Number(tis294.value);
})
tis294.addEventListener("input", function(){
    tis196.value = Number(tis292.value)+Number(tis293.value)+Number(tis294.value);;
})
tis193.addEventListener("input", function(){
    tis197.value = Number(tis195.value)+Number(tis196.value);
})
tis194.addEventListener("input", function(){
    tis197.value = Number(tis195.value)+Number(tis196.value);
})
tis293.addEventListener("input", function(){
    tis197.value = Number(tis195.value)+Number(tis196.value);
})
tis294.addEventListener("input", function(){
    tis197.value = Number(tis195.value)+Number(tis196.value);
})

//シュブルテ

tis293.addEventListener("input", function(){
    tis295.value = Number(tis292.value)+Number(tis293.value)+Number(tis294.value);
})
tis294.addEventListener("input", function(){
    tis295.value = Number(tis292.value)+Number(tis293.value)+Number(tis294.value);
})

tis193.addEventListener("input", function(){
    tis296.value = Number(tis195.value);
})
tis194.addEventListener("input", function(){
    tis296.value = Number(tis195.value);
})
tis193.addEventListener("input", function(){
    tis297.value = Number(tis295.value)+Number(tis296.value);
})
tis194.addEventListener("input", function(){
    tis297.value = Number(tis295.value)+Number(tis296.value);
})
tis293.addEventListener("input", function(){
    tis297.value = Number(tis295.value)+Number(tis296.value);
})
tis294.addEventListener("input", function(){
    tis297.value = Number(tis295.value)+Number(tis296.value);
})

//天文学

let tis1102 = document.querySelector("#tis1102");
let tis1103 = document.querySelector("#tis1103");
let tis1104 = document.querySelector("#tis1104");
let tis1105 = document.querySelector("#tis1105");
let tis1106 = document.querySelector("#tis1106");
let tis1107 = document.querySelector("#tis1107");

let tis2102 = document.querySelector("#tis2102");
let tis2103 = document.querySelector("#tis2103");
let tis2104 = document.querySelector("#tis2104");
let tis2105 = document.querySelector("#tis2105");
let tis2106 = document.querySelector("#tis2106");
let tis2107 = document.querySelector("#tis2107");


tis1105.value = Number(tis1102.value);
tis1106.value = Number(tis2102.value)+Number(tis2103.value)+Number(tis2104.value);
tis1107.value = Number(tis1105.value)+Number(tis1106.value);

tis2105.value = Number(tis2102.value);
tis2106.value = Number(tis1102.value)+Number(tis1103.value)+Number(tis1104.value);
tis2107.value = Number(tis2105.value)+Number(tis2106.value);

//代償者

tis1103.addEventListener("input", function(){
    tis1105.value = Number(tis1102.value)+Number(tis1103.value)+Number(tis1104.value);
})
tis1104.addEventListener("input", function(){
    tis1105.value = Number(tis1102.value)+Number(tis1103.value)+Number(tis1104.value);
})

tis2103.addEventListener("input", function(){
    tis1106.value = Number(tis2102.value)+Number(tis2103.value)+Number(tis2104.value);
})
tis2104.addEventListener("input", function(){
    tis1106.value = Number(tis2102.value)+Number(tis2103.value)+Number(tis2104.value);;
})
tis1103.addEventListener("input", function(){
    tis1107.value = Number(tis1105.value)+Number(tis1106.value);
})
tis1104.addEventListener("input", function(){
    tis1107.value = Number(tis1105.value)+Number(tis1106.value);
})
tis2103.addEventListener("input", function(){
    tis1107.value = Number(tis1105.value)+Number(tis1106.value);
})
tis2104.addEventListener("input", function(){
    tis1107.value = Number(tis1105.value)+Number(tis1106.value);
})

//シュブルテ

tis2103.addEventListener("input", function(){
    tis2105.value = Number(tis2102.value)+Number(tis2103.value)+Number(tis2104.value);
})
tis2104.addEventListener("input", function(){
    tis2105.value = Number(tis2102.value)+Number(tis2103.value)+Number(tis2104.value);
})

tis1103.addEventListener("input", function(){
    tis2106.value = Number(tis1105.value);
})
tis1104.addEventListener("input", function(){
    tis2106.value = Number(tis1105.value);
})
tis1103.addEventListener("input", function(){
    tis2107.value = Number(tis2105.value)+Number(tis2106.value);
})
tis1104.addEventListener("input", function(){
    tis2107.value = Number(tis2105.value)+Number(tis2106.value);
})
tis2103.addEventListener("input", function(){
    tis2107.value = Number(tis2105.value)+Number(tis2106.value);
})
tis2104.addEventListener("input", function(){
    tis2107.value = Number(tis2105.value)+Number(tis2106.value);
})

//電子機器

let tis1112 = document.querySelector("#tis1112");
let tis1113 = document.querySelector("#tis1113");
let tis1114 = document.querySelector("#tis1114");
let tis1115 = document.querySelector("#tis1115");
let tis1116 = document.querySelector("#tis1116");
let tis1117 = document.querySelector("#tis1117");

let tis2112 = document.querySelector("#tis2112");
let tis2113 = document.querySelector("#tis2113");
let tis2114 = document.querySelector("#tis2114");
let tis2115 = document.querySelector("#tis2115");
let tis2116 = document.querySelector("#tis2116");
let tis2117 = document.querySelector("#tis2117");


tis1115.value = Number(tis1112.value);
tis1116.value = Number(tis2112.value)+Number(tis2113.value)+Number(tis2114.value);
tis1117.value = Number(tis1115.value)+Number(tis1116.value);

tis2115.value = Number(tis2112.value);
tis2116.value = Number(tis1112.value)+Number(tis1113.value)+Number(tis1114.value);
tis2117.value = Number(tis2105.value)+Number(tis2116.value);

//代償者

tis1113.addEventListener("input", function(){
    tis1115.value = Number(tis1112.value)+Number(tis1113.value)+Number(tis1114.value);
})
tis1114.addEventListener("input", function(){
    tis1115.value = Number(tis1112.value)+Number(tis1113.value)+Number(tis1114.value);
})

tis2113.addEventListener("input", function(){
    tis1116.value = Number(tis2112.value)+Number(tis2113.value)+Number(tis2114.value);
})
tis2114.addEventListener("input", function(){
    tis1116.value = Number(tis2112.value)+Number(tis2113.value)+Number(tis2114.value);;
})
tis1113.addEventListener("input", function(){
    tis1117.value = Number(tis1115.value)+Number(tis1116.value);
})
tis1114.addEventListener("input", function(){
    tis1117.value = Number(tis1115.value)+Number(tis1116.value);
})
tis2113.addEventListener("input", function(){
    tis1117.value = Number(tis1115.value)+Number(tis1116.value);
})
tis2114.addEventListener("input", function(){
    tis1117.value = Number(tis1115.value)+Number(tis1116.value);
})

//シュブルテ

tis2113.addEventListener("input", function(){
    tis2115.value = Number(tis2112.value)+Number(tis2113.value)+Number(tis2114.value);
})
tis2114.addEventListener("input", function(){
    tis2115.value = Number(tis2112.value)+Number(tis2113.value)+Number(tis2114.value);
})

tis1113.addEventListener("input", function(){
    tis2116.value = Number(tis1115.value);
})
tis1114.addEventListener("input", function(){
    tis2116.value = Number(tis1115.value);
})
tis1113.addEventListener("input", function(){
    tis2117.value = Number(tis2115.value)+Number(tis2116.value);
})
tis1114.addEventListener("input", function(){
    tis2117.value = Number(tis2115.value)+Number(tis2116.value);
})
tis2113.addEventListener("input", function(){
    tis2117.value = Number(tis2115.value)+Number(tis2116.value);
})
tis2114.addEventListener("input", function(){
    tis2117.value = Number(tis2115.value)+Number(tis2116.value);
})

//芸術

let tis1122 = document.querySelector("#tis1122");
let tis1123 = document.querySelector("#tis1123");
let tis1124 = document.querySelector("#tis1124");
let tis1125 = document.querySelector("#tis1125");
let tis1126 = document.querySelector("#tis1126");
let tis1127 = document.querySelector("#tis1127");

let tis2122 = document.querySelector("#tis2122");
let tis2123 = document.querySelector("#tis2123");
let tis2124 = document.querySelector("#tis2124");
let tis2125 = document.querySelector("#tis2125");
let tis2126 = document.querySelector("#tis2126");
let tis2127 = document.querySelector("#tis2127");


tis1125.value = Number(tis1122.value);
tis1126.value = Number(tis2122.value)+Number(tis2123.value)+Number(tis2124.value);
tis1127.value = Number(tis1125.value)+Number(tis1126.value);

tis2125.value = Number(tis2122.value);
tis2126.value = Number(tis1122.value)+Number(tis1123.value)+Number(tis1124.value);
tis2127.value = Number(tis2125.value)+Number(tis2126.value);

//代償者

tis1123.addEventListener("input", function(){
    tis1125.value = Number(tis1122.value)+Number(tis1123.value)+Number(tis1124.value);
})
tis1124.addEventListener("input", function(){
    tis1125.value = Number(tis1122.value)+Number(tis1123.value)+Number(tis1124.value);
})

tis2123.addEventListener("input", function(){
    tis1126.value = Number(tis2122.value)+Number(tis2123.value)+Number(tis2124.value);
})
tis2124.addEventListener("input", function(){
    tis1126.value = Number(tis2122.value)+Number(tis2123.value)+Number(tis2124.value);;
})
tis1123.addEventListener("input", function(){
    tis1127.value = Number(tis1125.value)+Number(tis1126.value);
})
tis1124.addEventListener("input", function(){
    tis1127.value = Number(tis1125.value)+Number(tis1126.value);
})
tis2123.addEventListener("input", function(){
    tis1127.value = Number(tis1125.value)+Number(tis1126.value);
})
tis2124.addEventListener("input", function(){
    tis1127.value = Number(tis1125.value)+Number(tis1126.value);
})

//シュブルテ

tis2123.addEventListener("input", function(){
    tis2125.value = Number(tis2122.value)+Number(tis2123.value)+Number(tis2124.value);
})
tis2124.addEventListener("input", function(){
    tis2125.value = Number(tis2122.value)+Number(tis2123.value)+Number(tis2124.value);
})

tis1123.addEventListener("input", function(){
    tis2126.value = Number(tis1125.value);
})
tis1124.addEventListener("input", function(){
    tis2126.value = Number(tis1125.value);
})
tis1123.addEventListener("input", function(){
    tis2127.value = Number(tis2125.value)+Number(tis2126.value);
})
tis1124.addEventListener("input", function(){
    tis2127.value = Number(tis2125.value)+Number(tis2126.value);
})
tis2123.addEventListener("input", function(){
    tis2127.value = Number(tis2125.value)+Number(tis2126.value);
})
tis2124.addEventListener("input", function(){
    tis2127.value = Number(tis2125.value)+Number(tis2126.value);
})

//加工術

let tis1132 = document.querySelector("#tis1132");
let tis1133 = document.querySelector("#tis1133");
let tis1134 = document.querySelector("#tis1134");
let tis1135 = document.querySelector("#tis1135");
let tis1136 = document.querySelector("#tis1136");
let tis1137 = document.querySelector("#tis1137");

let tis2132 = document.querySelector("#tis2132");
let tis2133 = document.querySelector("#tis2133");
let tis2134 = document.querySelector("#tis2134");
let tis2135 = document.querySelector("#tis2135");
let tis2136 = document.querySelector("#tis2136");
let tis2137 = document.querySelector("#tis2137");


tis1135.value = Number(tis1132.value);
tis1136.value = Number(tis2132.value)+Number(tis2133.value)+Number(tis2134.value);
tis1137.value = Number(tis1135.value)+Number(tis1136.value);

tis2135.value = Number(tis2132.value);
tis2136.value = Number(tis1132.value)+Number(tis1133.value)+Number(tis1134.value);
tis2137.value = Number(tis2135.value)+Number(tis2136.value);

//代償者

tis1133.addEventListener("input", function(){
    tis1135.value = Number(tis1132.value)+Number(tis1133.value)+Number(tis1134.value);
})
tis1134.addEventListener("input", function(){
    tis1135.value = Number(tis1132.value)+Number(tis1133.value)+Number(tis1134.value);
})

tis2133.addEventListener("input", function(){
    tis1136.value = Number(tis2132.value)+Number(tis2133.value)+Number(tis2134.value);
})
tis2134.addEventListener("input", function(){
    tis1136.value = Number(tis2132.value)+Number(tis2133.value)+Number(tis2134.value);;
})
tis1133.addEventListener("input", function(){
    tis1137.value = Number(tis1135.value)+Number(tis1136.value);
})
tis1134.addEventListener("input", function(){
    tis1137.value = Number(tis1135.value)+Number(tis1136.value);
})
tis2133.addEventListener("input", function(){
    tis1137.value = Number(tis1135.value)+Number(tis1136.value);
})
tis2134.addEventListener("input", function(){
    tis1137.value = Number(tis1135.value)+Number(tis1136.value);
})

//シュブルテ

tis2133.addEventListener("input", function(){
    tis2135.value = Number(tis2132.value)+Number(tis2133.value)+Number(tis2134.value);
})
tis2134.addEventListener("input", function(){
    tis2135.value = Number(tis2132.value)+Number(tis2133.value)+Number(tis2134.value);
})

tis1133.addEventListener("input", function(){
    tis2136.value = Number(tis1135.value);
})
tis1134.addEventListener("input", function(){
    tis2136.value = Number(tis1135.value);
})
tis1133.addEventListener("input", function(){
    tis2137.value = Number(tis2135.value)+Number(tis2136.value);
})
tis1134.addEventListener("input", function(){
    tis2137.value = Number(tis2135.value)+Number(tis2136.value);
})
tis2133.addEventListener("input", function(){
    tis2137.value = Number(tis2135.value)+Number(tis2136.value);
})
tis2134.addEventListener("input", function(){
    tis2137.value = Number(tis2135.value)+Number(tis2136.value);
})

//考案

let tis1142 = document.querySelector("#tis1142");
let tis1143 = document.querySelector("#tis1143");
let tis1144 = document.querySelector("#tis1144");
let tis1145 = document.querySelector("#tis1145");
let tis1146 = document.querySelector("#tis1146");
let tis1147 = document.querySelector("#tis1147");

let tis2142 = document.querySelector("#tis2142");
let tis2143 = document.querySelector("#tis2143");
let tis2144 = document.querySelector("#tis2144");
let tis2145 = document.querySelector("#tis2145");
let tis2146 = document.querySelector("#tis2146");
let tis2147 = document.querySelector("#tis2147");


tis1145.value = Number(tis1142.value);
tis1146.value = Number(tis2142.value)+Number(tis2143.value)+Number(tis2144.value);
tis1147.value = Number(tis1145.value)+Number(tis1146.value);

tis2145.value = Number(tis2142.value);
tis2146.value = Number(tis1142.value)+Number(tis1143.value)+Number(tis1144.value);
tis2147.value = Number(tis2145.value)+Number(tis2146.value);

//代償者

tis1143.addEventListener("input", function(){
    tis1145.value = Number(tis1142.value)+Number(tis1143.value)+Number(tis1144.value);
})
tis1144.addEventListener("input", function(){
    tis1145.value = Number(tis1142.value)+Number(tis1143.value)+Number(tis1144.value);
})

tis2143.addEventListener("input", function(){
    tis1146.value = Number(tis2142.value)+Number(tis2143.value)+Number(tis2144.value);
})
tis2144.addEventListener("input", function(){
    tis1146.value = Number(tis2142.value)+Number(tis2143.value)+Number(tis2144.value);;
})
tis1143.addEventListener("input", function(){
    tis1147.value = Number(tis1145.value)+Number(tis1146.value);
})
tis1144.addEventListener("input", function(){
    tis1147.value = Number(tis1145.value)+Number(tis1146.value);
})
tis2143.addEventListener("input", function(){
    tis1147.value = Number(tis1145.value)+Number(tis1146.value);
})
tis2144.addEventListener("input", function(){
    tis1147.value = Number(tis1145.value)+Number(tis1146.value);
})

//シュブルテ

tis2143.addEventListener("input", function(){
    tis2145.value = Number(tis2142.value)+Number(tis2143.value)+Number(tis2144.value);
})
tis2144.addEventListener("input", function(){
    tis2145.value = Number(tis2142.value)+Number(tis2143.value)+Number(tis2144.value);
})

tis1143.addEventListener("input", function(){
    tis2146.value = Number(tis1145.value);
})
tis1144.addEventListener("input", function(){
    tis2146.value = Number(tis1145.value);
})
tis1143.addEventListener("input", function(){
    tis2147.value = Number(tis2145.value)+Number(tis2146.value);
})
tis1144.addEventListener("input", function(){
    tis2147.value = Number(tis2145.value)+Number(tis2146.value);
})
tis2143.addEventListener("input", function(){
    tis2147.value = Number(tis2145.value)+Number(tis2146.value);
})
tis2144.addEventListener("input", function(){
    tis2147.value = Number(tis2145.value)+Number(tis2146.value);
})

//知識

let tis1152 = document.querySelector("#tis1152");
let tis1153 = document.querySelector("#tis1153");
let tis1154 = document.querySelector("#tis1154");
let tis1155 = document.querySelector("#tis1155");
let tis1156 = document.querySelector("#tis1156");
let tis1157 = document.querySelector("#tis1157");

let tis2152 = document.querySelector("#tis2152");
let tis2153 = document.querySelector("#tis2153");
let tis2154 = document.querySelector("#tis2154");
let tis2155 = document.querySelector("#tis2155");
let tis2156 = document.querySelector("#tis2156");
let tis2157 = document.querySelector("#tis2157");


tis1155.value = Number(tis1152.value);
tis1156.value = Number(tis2152.value)+Number(tis2153.value)+Number(tis2154.value);
tis1157.value = Number(tis1155.value)+Number(tis1156.value);

tis2155.value = Number(tis2152.value);
tis2156.value = Number(tis1152.value)+Number(tis1153.value)+Number(tis1154.value);
tis2157.value = Number(tis2155.value)+Number(tis2156.value);

//代償者

tis1153.addEventListener("input", function(){
    tis1155.value = Number(tis1152.value)+Number(tis1153.value)+Number(tis1154.value);
})
tis1154.addEventListener("input", function(){
    tis1155.value = Number(tis1152.value)+Number(tis1153.value)+Number(tis1154.value);
})

tis2153.addEventListener("input", function(){
    tis1156.value = Number(tis2152.value)+Number(tis2153.value)+Number(tis2154.value);
})
tis2154.addEventListener("input", function(){
    tis1156.value = Number(tis2152.value)+Number(tis2153.value)+Number(tis2154.value);;
})
tis1153.addEventListener("input", function(){
    tis1157.value = Number(tis1155.value)+Number(tis1156.value);
})
tis1154.addEventListener("input", function(){
    tis1157.value = Number(tis1155.value)+Number(tis1156.value);
})
tis2153.addEventListener("input", function(){
    tis1157.value = Number(tis1155.value)+Number(tis1156.value);
})
tis2154.addEventListener("input", function(){
    tis1157.value = Number(tis1155.value)+Number(tis1156.value);
})

//シュブルテ

tis2153.addEventListener("input", function(){
    tis2155.value = Number(tis2152.value)+Number(tis2153.value)+Number(tis2154.value);
})
tis2154.addEventListener("input", function(){
    tis2155.value = Number(tis2152.value)+Number(tis2153.value)+Number(tis2154.value);
})

tis1153.addEventListener("input", function(){
    tis2156.value = Number(tis1155.value);
})
tis1154.addEventListener("input", function(){
    tis2156.value = Number(tis1155.value);
})
tis1153.addEventListener("input", function(){
    tis2157.value = Number(tis2155.value)+Number(tis2156.value);
})
tis1154.addEventListener("input", function(){
    tis2157.value = Number(tis2155.value)+Number(tis2156.value);
})
tis2153.addEventListener("input", function(){
    tis2157.value = Number(tis2155.value)+Number(tis2156.value);
})
tis2154.addEventListener("input", function(){
    tis2157.value = Number(tis2155.value)+Number(tis2156.value);
})

//弱運

let unn112 = document.querySelector("#unn112");
let unn113 = document.querySelector("#unn113");
let unn114 = document.querySelector("#unn114");
let unn115 = document.querySelector("#unn115");
let unn116 = document.querySelector("#unn116");
let unn117 = document.querySelector("#unn117");

let unn212 = document.querySelector("#unn212");
let unn213 = document.querySelector("#unn213");
let unn214 = document.querySelector("#unn214");
let unn215 = document.querySelector("#unn215");
let unn216 = document.querySelector("#unn216");
let unn217 = document.querySelector("#unn217");


unn115.value = Number(unn112.value);
unn116.value = Number(unn212.value)+Number(unn213.value)+Number(unn214.value);
unn117.value = Number(unn115.value)+Number(unn116.value);

unn215.value = Number(unn212.value);
unn216.value = Number(unn112.value)+Number(unn113.value)+Number(unn114.value);
unn217.value = Number(unn215.value)+Number(unn216.value);

//代償者

unn113.addEventListener("input", function(){
    unn115.value = Number(unn112.value)+Number(unn113.value)+Number(unn114.value);
})
unn114.addEventListener("input", function(){
    unn115.value = Number(unn112.value)+Number(unn113.value)+Number(unn114.value);
})

unn213.addEventListener("input", function(){
    unn116.value = Number(unn212.value)+Number(unn213.value)+Number(unn214.value);
})
unn214.addEventListener("input", function(){
    unn116.value = Number(unn212.value)+Number(unn213.value)+Number(unn214.value);
})
unn113.addEventListener("input", function(){
    unn117.value = Number(unn115.value)+Number(unn116.value);
})
unn114.addEventListener("input", function(){
    unn117.value = Number(unn115.value)+Number(unn116.value);
})
unn213.addEventListener("input", function(){
    unn117.value = Number(unn115.value)+Number(unn116.value);
})
unn214.addEventListener("input", function(){
    unn117.value = Number(unn115.value)+Number(unn116.value);
})

//シュブルテ

unn213.addEventListener("input", function(){
    unn215.value = Number(unn212.value)+Number(unn213.value)+Number(unn214.value);
})
unn214.addEventListener("input", function(){
    unn215.value = Number(unn212.value)+Number(unn213.value)+Number(unn214.value);
})

unn113.addEventListener("input", function(){
    unn216.value = Number(unn115.value);
})
unn114.addEventListener("input", function(){
    unn216.value = Number(unn115.value);
})
unn113.addEventListener("input", function(){
    unn217.value = Number(unn215.value)+Number(unn216.value);
})
unn114.addEventListener("input", function(){
    unn217.value = Number(unn215.value)+Number(unn216.value);
})
unn213.addEventListener("input", function(){
    unn217.value = Number(unn215.value)+Number(unn216.value);
})
unn214.addEventListener("input", function(){
    unn217.value = Number(unn215.value)+Number(unn216.value);
})

//運

let unn122 = document.querySelector("#unn122");
let unn123 = document.querySelector("#unn123");
let unn124 = document.querySelector("#unn124");
let unn125 = document.querySelector("#unn125");
let unn126 = document.querySelector("#unn126");
let unn127 = document.querySelector("#unn127");

let unn222 = document.querySelector("#unn222");
let unn223 = document.querySelector("#unn223");
let unn224 = document.querySelector("#unn224");
let unn225 = document.querySelector("#unn225");
let unn226 = document.querySelector("#unn226");
let unn227 = document.querySelector("#unn227");


unn125.value = Number(unn122.value);
unn126.value = Number(unn222.value)+Number(unn223.value)+Number(unn224.value);
unn127.value = Number(unn125.value)+Number(unn126.value);

unn225.value = Number(unn222.value);
unn226.value = Number(unn122.value)+Number(unn123.value)+Number(unn124.value);
unn227.value = Number(unn225.value)+Number(unn226.value);

//代償者

unn123.addEventListener("input", function(){
    unn125.value = Number(unn122.value)+Number(unn123.value)+Number(unn124.value);
})
unn124.addEventListener("input", function(){
    unn125.value = Number(unn122.value)+Number(unn123.value)+Number(unn124.value);
})

unn223.addEventListener("input", function(){
    unn126.value = Number(unn222.value)+Number(unn223.value)+Number(unn224.value);
})
unn224.addEventListener("input", function(){
    unn126.value = Number(unn222.value)+Number(unn223.value)+Number(unn224.value);
})
unn123.addEventListener("input", function(){
    unn127.value = Number(unn125.value)+Number(unn126.value);
})
unn124.addEventListener("input", function(){
    unn127.value = Number(unn125.value)+Number(unn126.value);
})
unn223.addEventListener("input", function(){
    unn127.value = Number(unn125.value)+Number(unn126.value);
})
unn224.addEventListener("input", function(){
    unn127.value = Number(unn125.value)+Number(unn126.value);
})

//シュブルテ

unn223.addEventListener("input", function(){
    unn225.value = Number(unn222.value)+Number(unn223.value)+Number(unn224.value);
})
unn224.addEventListener("input", function(){
    unn225.value = Number(unn222.value)+Number(unn223.value)+Number(unn224.value);
})

unn123.addEventListener("input", function(){
    unn226.value = Number(unn125.value);
})
unn124.addEventListener("input", function(){
    unn226.value = Number(unn125.value);
})
unn123.addEventListener("input", function(){
    unn227.value = Number(unn225.value)+Number(unn226.value);
})
unn124.addEventListener("input", function(){
    unn227.value = Number(unn225.value)+Number(unn226.value);
})
unn223.addEventListener("input", function(){
    unn227.value = Number(unn225.value)+Number(unn226.value);
})
unn224.addEventListener("input", function(){
    unn227.value = Number(unn225.value)+Number(unn226.value);
})

//強運

let unn132 = document.querySelector("#unn132");
let unn133 = document.querySelector("#unn133");
let unn134 = document.querySelector("#unn134");
let unn135 = document.querySelector("#unn135");
let unn136 = document.querySelector("#unn136");
let unn137 = document.querySelector("#unn137");

let unn232 = document.querySelector("#unn232");
let unn233 = document.querySelector("#unn233");
let unn234 = document.querySelector("#unn234");
let unn235 = document.querySelector("#unn235");
let unn236 = document.querySelector("#unn236");
let unn237 = document.querySelector("#unn237");


unn135.value = Number(unn132.value);
unn136.value = Number(unn232.value)+Number(unn233.value)+Number(unn234.value);
unn137.value = Number(unn135.value)+Number(unn136.value);

unn235.value = Number(unn232.value);
unn236.value = Number(unn132.value)+Number(unn133.value)+Number(unn134.value);
unn237.value = Number(unn235.value)+Number(unn236.value);
//代償者

unn133.addEventListener("input", function(){
    unn135.value = Number(unn132.value)+Number(unn133.value)+Number(unn134.value);
})
unn134.addEventListener("input", function(){
    unn135.value = Number(unn132.value)+Number(unn133.value)+Number(unn134.value);
})

unn233.addEventListener("input", function(){
    unn136.value = Number(unn232.value)+Number(unn233.value)+Number(unn234.value);
})
unn234.addEventListener("input", function(){
    unn136.value = Number(unn232.value)+Number(unn233.value)+Number(unn234.value);
})
unn133.addEventListener("input", function(){
    unn137.value = Number(unn135.value)+Number(unn136.value);
})
unn134.addEventListener("input", function(){
    unn137.value = Number(unn135.value)+Number(unn136.value);
})
unn233.addEventListener("input", function(){
    unn137.value = Number(unn135.value)+Number(unn136.value);
})
unn234.addEventListener("input", function(){
    unn137.value = Number(unn135.value)+Number(unn136.value);
})

//シュブルテ

unn233.addEventListener("input", function(){
    unn235.value = Number(unn232.value)+Number(unn233.value)+Number(unn234.value);
})
unn234.addEventListener("input", function(){
    unn235.value = Number(unn232.value)+Number(unn233.value)+Number(unn234.value);
})

unn133.addEventListener("input", function(){
    unn236.value = Number(unn135.value);
})
unn134.addEventListener("input", function(){
    unn236.value = Number(unn135.value);
})
unn133.addEventListener("input", function(){
    unn237.value = Number(unn235.value)+Number(unn236.value);
})
unn134.addEventListener("input", function(){
    unn237.value = Number(unn235.value)+Number(unn236.value);
})
unn233.addEventListener("input", function(){
    unn237.value = Number(unn235.value)+Number(unn236.value);
})
unn234.addEventListener("input", function(){
    unn237.value = Number(unn235.value)+Number(unn236.value);
})

//強運

let skn212 = document.querySelector("#skn212");
let skn213 = document.querySelector("#skn213");
let skn214 = document.querySelector("#skn214");
let skn215 = document.querySelector("#skn215");
let skn216 = document.querySelector("#skn216");
let skn217 = document.querySelector("#skn217");

skn215.value = Number(skn212.value);
skn217.value = Number(skn215.value)+Number(skn216.value);

//シュブルテ

skn213.addEventListener("input", function(){
    skn215.value = Number(skn212.value)+Number(skn213.value)+Number(skn214.value);
})
skn214.addEventListener("input", function(){
    skn215.value = Number(skn212.value)+Number(skn213.value)+Number(skn214.value);
})

skn213.addEventListener("input", function(){
    skn217.value = Number(skn215.value)+Number(skn216.value);
})
skn214.addEventListener("input", function(){
    skn217.value = Number(skn215.value)+Number(skn216.value);
})

let Result1 = document.querySelector("#Result1");
let Result2 = document.querySelector("#Result2");
let Result3 = document.querySelector("#Result3");
let Result4 = document.querySelector("#Result4");
let Result5 = document.querySelector("#Result5");
let Result6 = document.querySelector("#Result6");

//代償者ポイント
tan113.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan123.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan133.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan143.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan153.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan163.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan173.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan183.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan193.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan1103.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan1113.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan1123.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen113.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen123.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen133.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen143.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen153.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen163.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen173.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen183.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen193.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen1103.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tai113.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tai123.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tai133.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis113.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis123.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis133.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis143.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis153.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis163.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis173.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis183.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis193.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis1103.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis1113.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis1123.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis1133.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis1143.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis1153.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

unn113.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

unn123.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

unn133.addEventListener("input", function(){
    Result1.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

//ボタン４
tan113.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan123.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan133.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan143.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan153.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan163.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan173.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan183.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan193.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan1103.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan1113.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tan1123.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen113.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen123.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen133.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen143.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen153.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen163.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen173.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen183.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen193.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

sen1103.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tai113.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tai123.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tai133.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis113.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis123.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis133.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis143.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis153.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis163.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis173.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis183.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis193.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis1103.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis1113.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis1123.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis1133.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis1143.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

tis1153.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

unn113.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

unn123.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

unn133.addEventListener("input", function(){
    Result4.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
})

//シュブルテポイント
tan213.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan223.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan233.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan243.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan253.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan263.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan273.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan283.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan293.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan2103.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan2113.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan2123.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen213.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen223.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen233.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen243.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen253.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen263.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen273.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen283.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen293.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen2103.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tai213.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tai223.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tai233.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis213.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis223.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis233.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis243.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis253.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis263.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis273.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis283.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis293.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis2103.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis2113.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis2123.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis2133.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis2143.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis2153.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

unn213.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

unn223.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

unn233.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

skn213.addEventListener("input", function(){
    Result2.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

//シュブルテ側
tan213.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan223.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan233.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan243.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan253.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan263.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan273.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan283.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan293.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan2103.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan2113.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tan2123.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen213.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen223.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen233.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen243.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen253.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen263.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen273.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen283.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen293.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

sen2103.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tai213.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tai223.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tai233.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis213.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis223.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis233.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis243.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis253.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis263.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis273.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis283.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis293.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis2103.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis2113.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis2123.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis2133.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis2143.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

tis2153.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

unn213.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

unn223.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

unn233.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

skn213.addEventListener("input", function(){
    Result5.value = Number(tan213.value)+Number(tan223.value)+Number(tan233.value)
    +Number(tan243.value)+Number(tan253.value)+Number(tan263.value)+Number(tan273.value)
    +Number(tan283.value)+Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)
    +Number(tan2123.value)+Number(sen213.value)+Number(sen223.value)+Number(sen233.value)
    +Number(sen243.value)+Number(sen253.value)+Number(sen263.value)+Number(sen273.value)
    +Number(sen283.value)+Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)
    +Number(tai223.value)+Number(tai233.value)+Number(tis213.value)+Number(tis223.value)
    +Number(tis233.value)+Number(tis243.value)+Number(tis253.value)+Number(tis263.value)
    +Number(tis273.value)+Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)
    +Number(tis2113.value)+Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)
    +Number(tis2153.value)+Number(unn213.value)+Number(unn223.value)+Number(unn233.value)
    +Number(skn213.value)
})

//合計ポイント
tan113.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan123.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan133.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan143.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan153.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan163.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan173.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan183.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan193.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan1103.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan1113.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan1123.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen113.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen123.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen133.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen143.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen153.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen163.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen173.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen183.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen193.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen1103.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tai113.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tai123.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tai133.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis113.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis113.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis123.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis133.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis143.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis153.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis163.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis173.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis183.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis193.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis1103.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis1113.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis1123.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis1133.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis1143.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis1153.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

unn113.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

unn123.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

unn133.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan213.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan223.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan233.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan243.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan253.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan263.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan273.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan283.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan293.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan2103.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan2113.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan2123.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen213.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen223.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen233.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen243.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen253.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen263.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen273.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen283.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen293.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen2103.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tai213.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tai223.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tai233.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis213.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis213.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis223.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis233.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis243.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis253.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis263.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis273.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis283.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis293.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis2103.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis2113.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis2123.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis2133.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis2143.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis2153.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

unn213.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

unn223.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

unn233.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

skn213.addEventListener("input", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

//ボタン６
tan113.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan123.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan133.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan143.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan153.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan163.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan173.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan183.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan193.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan1103.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan1113.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan1123.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen113.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen123.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen133.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen143.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen153.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen163.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen173.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen183.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen193.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen1103.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tai113.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tai123.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tai133.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis113.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis113.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis123.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis133.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis143.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis153.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis163.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis173.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis183.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis193.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis1103.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis1113.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis1123.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis1133.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis1143.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis1153.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

unn113.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

unn123.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

unn133.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan213.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan223.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan233.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan243.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan253.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan263.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan273.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan283.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan293.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan2103.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan2113.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tan2123.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen213.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen223.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen233.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen243.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen253.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen263.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen273.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen283.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen293.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

sen2103.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tai213.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tai223.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tai233.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis213.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis213.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis223.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis233.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis243.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis253.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis263.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis273.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis283.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis293.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis2103.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis2113.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis2123.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis2133.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis2143.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

tis2153.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

unn213.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

unn223.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

unn233.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

skn213.addEventListener("input", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})




button3.addEventListener("click", function(){
    Result3.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

button6.addEventListener("click", function(){
    Result6.value = Number(tan113.value)+Number(tan123.value)+Number(tan133.value)
    +Number(tan143.value)+Number(tan153.value)+Number(tan163.value)+Number(tan173.value)
    +Number(tan183.value)+Number(tan193.value)+Number(tan1103.value)+Number(tan1113.value)
    +Number(tan1123.value)+Number(sen113.value)+Number(sen123.value)+Number(sen133.value)
    +Number(sen143.value)+Number(sen153.value)+Number(sen163.value)+Number(sen173.value)
    +Number(sen183.value)+Number(sen193.value)+Number(sen1103.value)+Number(tai113.value)
    +Number(tai123.value)+Number(tai133.value)+Number(tis113.value)+Number(tis123.value)
    +Number(tis133.value)+Number(tis143.value)+Number(tis153.value)+Number(tis163.value)
    +Number(tis173.value)+Number(tis183.value)+Number(tis193.value)+Number(tis1103.value)
    +Number(tis1113.value)+Number(tis1123.value)+Number(tis1133.value)+Number(tis1143.value)
    +Number(tis1153.value)+Number(unn113.value)+Number(unn123.value)+Number(unn133.value)
    +Number(tan213.value)+Number(tan223.value)+Number(tan233.value)+Number(tan243.value)
    +Number(tan253.value)+Number(tan263.value)+Number(tan273.value)+Number(tan283.value)
    +Number(tan293.value)+Number(tan2103.value)+Number(tan2113.value)+Number(tan2123.value)
    +Number(sen213.value)+Number(sen223.value)+Number(sen233.value)+Number(sen243.value)
    +Number(sen253.value)+Number(sen263.value)+Number(sen273.value)+Number(sen283.value)
    +Number(sen293.value)+Number(sen2103.value)+Number(tai213.value)+Number(tai223.value)
    +Number(tai233.value)+Number(tis213.value)+Number(tis223.value)+Number(tis233.value)
    +Number(tis243.value)+Number(tis253.value)+Number(tis263.value)+Number(tis273.value)
    +Number(tis283.value)+Number(tis293.value)+Number(tis2103.value)+Number(tis2113.value)
    +Number(tis2123.value)+Number(tis2133.value)+Number(tis2143.value)+Number(tis2153.value)
    +Number(unn213.value)+Number(unn223.value)+Number(unn233.value)+Number(skn213.value)
})

let tan1121 = document.querySelector("#tan1121");
let dice1 = document.querySelector("#dice1");
let Name11 = document.querySelector("#Name11");
let Name12 = document.querySelector("#Name12");
let Name13 = document.querySelector("#Name13");
let Name14 = document.querySelector("#Name14");
let Name15 = document.querySelector("#Name15");
let Name16 = document.querySelector("#Name16");
let Name17 = document.querySelector("#Name17");
let Name18 = document.querySelector("#Name18");
let Name19 = document.querySelector("#Name19");
let Name110 = document.querySelector("#Name110");
let Name111 = document.querySelector("#Name111");

dice1.addEventListener("click", function(){
    Name110.value = Number(Math.floor(Math.random()*10)+1);
    Name111.value = Number(Math.floor(Math.random()*10)+1);
});

Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
sen113.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});
sen123.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});
sen133.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});
sen143.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});
sen153.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});
sen163.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});
sen173.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});
sen183.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});
sen193.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});
sen1103.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});
sen114.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});
sen124.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});
sen134.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});
sen144.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});
sen154.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});
sen164.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});
sen174.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});
sen184.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});
sen194.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});
sen1104.addEventListener("input", function(){
    Name19.value = Number(Math.max(sen115.value,sen125.value,sen135.value,sen145.value,sen155.value,sen165.value,sen175.value,sen185.value,sen195.value,sen1105.value));
});

Name16.addEventListener("input", function(){
    Name17.value = Number(Name16.value)
});

function copyValue1() {
    let obj = {
        kind: "character",
        data: {name: `${Name11.value} (${Name12.value})`,
            initiative: Number(Name19.value),
            commands: `100-{腐敗率}*3/4-{シュブルテ}*1/4-1d100>=0 【腐敗判定】 \n:シュブルテ=
            〇探索系技能 \n${tan115.value}-1d100>=0 【知覚】\n${tan125.value}-1d100>=0 【観察】 \n${tan135.value}-1d100>=0 【人間観察】\n${tan145.value}-1d100>=0 【応急処置】 \n${tan155.value}-1d100>=0 【隠蔽】 \n${tan165.value}-1d100>=0 【潜伏】 \n${tan175.value}-1d100>=0 【検索】 \n${tan185.value}-1d100>=0 【体内時計】 \n${tan195.value}-1d100>=0 【結合】 \n${tan1105.value}-1d100>=0 【痕跡(スカミア)】 \n${tan1115.value}-1d100>=0 【痕跡(戦闘)】 \n${tan1125.value}-1d100>=0 【${tan1121.value}】
            〇戦闘系技能 \n${sen115.value}-1d100>=0 【躱す】 \n${sen125.value}-1d100>=0 【見切り】 \n${sen135.value}-1d100>=0 【死んだふり】 \n${sen145.value}-1d100>=0 【体術】 \n${sen155.value}-1d100>=0 【投げつける】 \n${sen165.value}-1d100>=0 【締め落とし】 \n${sen175.value}-1d100>=0 【特攻】 \n${sen185.value}-1d100>=0 【銃火器】 \n${sen195.value}-1d100>=0 【刀】 \n${sen1105.value}-1d100>=0 【スカミア銃】 \n{筋力基礎値}+{HP}-1d100>=0 【筋力】 \n{initiative}-1d100>=0 【速さ】
            〇対人系技能 \n${tai115.value}-1d100>=0 【攪乱】 \n${tai125.value}-1d100>=0 【交渉】 \n${tai135.value}-1d100>=0 【恐喝】
            〇知識系技能 \n${tis115.value}-1d100>=0 【シュブルテ言語】 \n${tis125.value}-1d100>=0 【料理】 \n${tis135.value}-1d100>=0 【スカミア学】 \n${tis145.value}-1d100>=0 【考古学】 \n${tis155.value}-1d100>=0 【戦闘知識】 \n${tis165.value}-1d100>=0 【解剖学】 \n${tis175.value}-1d100>=0 【他言語】 \n${tis185.value}-1d100>=0 【現代史】 \n${tis195.value}-1d100>=0 【科学】 \n${tis1105.value}-1d100>=0 【天文学】 \n${tis1115.value}-1d100>=0 【電子機器】 \n${tis1125.value}-1d100>=0 【芸術】 \n${tis1135.value}-1d100>=0 【加工術】 \n${tis1145.value}-1d100>=0 【考案】 \n${tis1155.value}-1d100>=0 【知識】
            〇運技能 \n${unn115.value}-1d100>=0 【弱運】 \n${unn125.value}-1d100>=0 【運】 \n${unn135.value}-1d100>=0 【強運】
            〇完全化 \n100-1d({腐敗率}+{シュブルテ})>=0 【完全化判定】\n{シュブルテ}-1d({腐敗率}+{シュブルテ})>=0 【犠牲者決定】 \nC100-({腐敗率}*3/4+{シュブルテ}*1/4) 【期待値計算】`,
            status:[{label:"HP",
                value:Name15.value,
                max:Name15.value,
            },
            {label:"SK",
                value:Name16.value,
                max:Name16.value,
            },
            {label:"腐敗率",
                value:Name17.value,
                max:100,
            },
            {label:"シュブルテ",
                value:Name30.value,
            },
        ],
        params:[{label:"筋力基礎値",
            value:Name18.value,

        }],
        },
    }


    let data = JSON.stringify(obj);
    navigator.clipboard.writeText(data)
    .then(() => {
        alert('コピーしました: ' );
    }).catch(err => {
        alert('コピーに失敗しました: ' + err);
    });
}
let tan2121 = document.querySelector("#tan2121");
let dice2 = document.querySelector("#dice2");
let Name21 = document.querySelector("#Name21");
let Name22 = document.querySelector("#Name22");
let Name23 = document.querySelector("#Name23");
let Name24 = document.querySelector("#Name24");
let Name25 = document.querySelector("#Name25");
let Name26 = document.querySelector("#Name26");
let Name27 = document.querySelector("#Name27");
let Name28 = document.querySelector("#Name28");
let Name29 = document.querySelector("#Name29");
let Name30 = document.querySelector("#Name30");
let Name31 = document.querySelector("#Name31");

dice2.addEventListener("click", function(){
    Name33.value = Number(Math.floor(Math.random()*10)+1);
    Name34.value = Number(Math.floor(Math.random()*10)+1);
})

get_sen_max = function(){
    return Number(Mat.max(sen215.value,sen225.value,sen235.value,sen245.value,sen255.value,sen265.value,sen275.value,sen285.value,sen295.value,sen2105.value));
}

Name32.value = get_sen_max();
sen213.addEventListener("input", function(){
    Name32.value = get_sen_max();
})
sen223.addEventListener("input", function(){
    Name32.value = get_sen_max();
});;
sen233.addEventListener("input", function(){
    Name32.value = get_sen_max();
});
sen243.addEventListener("input", function(){
    Name32.value = get_sen_max();
});
sen243.addEventListener("input", function(){
    Name32.value = get_sen_max();
});
sen253.addEventListener("input", function(){
    Name32.value = get_sen_max();
});
sen263.addEventListener("input", function(){
    Name32.value = get_sen_max();
});
sen273.addEventListener("input", function(){
    Name32.value = get_sen_max();
});
sen273.addEventListener("input", function(){
    Name32.value = get_sen_max();
});
sen283.addEventListener("input", function(){
    Name32.value = get_sen_max();
});
sen293.addEventListener("input", function(){
    Name32.value = get_sen_max();
});
sen2103.addEventListener("input", function(){
    Name32.value = get_sen_max();
});
sen214.addEventListener("input", function(){
    Name32.value = get_sen_max();
});
sen224.addEventListener("input", function(){
    Name32.value = get_sen_max();
});
sen234.addEventListener("input", function(){
    Name32.value = get_sen_max();
});
sen244.addEventListener("input", function(){
    Name32.value = get_sen_max();
});
sen254.addEventListener("input", function(){
    Name32.value = get_sen_max();
});
sen264.addEventListener("input", function(){
    Name32.value = get_sen_max();
});
sen274.addEventListener("input", function(){
    Name32.value = get_sen_max();
});
sen284.addEventListener("input", function(){
    Name32.value = get_sen_max();
});
sen294.addEventListener("input", function(){
    Name32.value = get_sen_max();
});
sen2104.addEventListener("input", function(){
    Name32.value = get_sen_max();
});

Name29.addEventListener("input", function(){
    Name30.value = Number(Name29.value)
});

function copyValue2() {
    let obj = {
        kind: "character",
        data: {name: `${Name21.value} (${Name22.value})`,
            initiative: Number(Name29.value),
            commands: `100-{乖離率}*3/4-{代償者}*1/4-1d100>=0 【乖離判定】 \n:代償者=
            〇探索系技能 \n${tan215.value}-1d100>=0 【知覚】\n${tan225.value}-1d100>=0 【観察】 \n${tan235.value}-1d100>=0 【人間観察】\n${tan245.value}-1d100>=0 【応急処置】 \n${tan255.value}-1d100>=0 【隠蔽】 \n${tan265.value}-1d100>=0 【潜伏】 \n${tan275.value}-1d100>=0 【検索】 \n${tan285.value}-1d100>=0 【体内時計】 \n${tan295.value}-1d100>=0 【結合】 \n${tan2105.value}-1d100>=0 【痕跡(スカミア)】 \n${tan2115.value}-1d100>=0 【痕跡(戦闘)】 \n${tan2125.value}-1d100>=0 【${tan2121.value}】
            〇戦闘系技能 \n${sen215.value}-1d100>=0 【躱す】 \n${sen225.value}-1d100>=0 【見切り】 \n${sen235.value}-1d100>=0 【死んだふり】 \n${sen245.value}-1d100>=0 【体術】 \n${sen255.value}-1d100>=0 【投げつける】 \n${sen265.value}-1d100>=0 【締め落とし】 \n${sen275.value}-1d100>=0 【特攻】 \n${sen285.value}-1d100>=0 【銃火器】 \n${sen295.value}-1d100>=0 【刀】 \n${sen2105.value}-1d100>=0 【スカミア銃】 \n{筋力基礎値}+{HP}-1d100>=0 【筋力】 \n{initiative}-1d100>=0 【速さ】
            〇対人系技能 \n${tai215.value}-1d100>=0 【攪乱】 \n${tai225.value}-1d100>=0 【交渉】 \n${tai235.value}-1d100>=0 【恐喝】
            〇知識系技能 \n${tis215.value}-1d100>=0 【シュブルテ言語】 \n${tis225.value}-1d100>=0 【料理】 \n${tis235.value}-1d100>=0 【スカミア学】 \n${tis245.value}-1d100>=0 【考古学】 \n${tis255.value}-1d100>=0 【戦闘知識】 \n${tis265.value}-1d100>=0 【解剖学】 \n${tis275.value}-1d100>=0 【他言語】 \n${tis285.value}-1d100>=0 【現代史】 \n${tis295.value}-1d100>=0 【科学】 \n${tis2105.value}-1d100>=0 【天文学】 \n${tis2115.value}-1d100>=0 【電子機器】 \n${tis2125.value}-1d100>=0 【芸術】 \n${tis2135.value}-1d100>=0 【加工術】 \n${tis2145.value}-1d100>=0 【考案】 \n${tis2155.value}-1d100>=0 【知識】
            〇運技能 \n${unn215.value}-1d100>=0 【弱運】 \n${unn225.value}-1d100>=0 【運】 \n${unn235.value}-1d100>=0 【強運】
            〇SK能力 \n${skn215.value}-1d100>=0 【SK能力】
            〇完全化 \n100-1d({乖離率}+{代償者})>=0 【完全化判定】\n{代償者}-1d({乖離率}+{代償者})>=0 【犠牲者決定】 \nC100-({乖離率}*3/4+{代償者}*1/4) 【期待値計算】`,
            status:[{label:"HP",
                value:Name28.value,
                max:Name28.value,
            },
            {label:"SK",
                value:Name29.value,
                max:Name29.value,
            },
            {label:"乖離率",
                value:Name30.value,
                max:100,
            },
            {label:"代償者",
                value:Name17.value,
            },
        ],
        params:[{label:"筋力基礎値",
            value:Name31.value,

        }],
        },
    }


    let data = JSON.stringify(obj);
    navigator.clipboard.writeText(data)
    .then(() => {
        alert('コピーしました: ' );
    }).catch(err => {
        alert('コピーに失敗しました: ' + err);
    });
}

// "externalUrl":"https://iachara.com/view/11168581","iconUrl":"https://image.iaproject.app/50f12445-25a0-4bc8-bfb9-7a8e2b7d33f1",