var backend_root_url = "http://localhost:8080";

var map_service_url = {
    "baseMap": "http://58.49.165.89:8010/ServiceAdapter/MAP/%E7%94%B5%E5%AD%90%E5%9C%B0%E5%9B%BE%EF%BC%88%E5%AE%A1%E5%9B%BE%E7%89%88%EF%BC%89/07769b53b5243b7d6aea9df803f471c1",
    "company": "http://219.140.192.142:6080/arcgis/rest/services/东西湖产业地图/东西湖产业地图/MapServer/0",
    "factory": "http://219.140.192.142:6080/arcgis/rest/services/东西湖产业地图/东西湖产业地图/MapServer/1",
    "building": "http://219.140.192.142:6080/arcgis/rest/services/东西湖产业地图/东西湖产业地图/MapServer/2",
    "incubator": "http://219.140.192.142:6080/arcgis/rest/services/东西湖产业地图/东西湖产业地图/MapServer/3",
    "tdgy":"http://27.17.26.115:6085/arcgis/rest/services/GLSPWH2000/TDGY/MapServer/1"
}

var industry_img_info = {
    "all": [
        "../images/industry/DXH_CXBJ.png",
        "../images/industry/DXH_2.png"
    ],
    "digital": [
        "../images/industry/总体规划图.jpg"
    ],
    "health": [
        "../images/industry/DXH_CXBJ.png"
    ],
    "service": [
        "../images/industry/DXH_2.png"
    ],
    "inteligence": [
        "../images/industry/DXH_CXBJ.png"
    ]

}

var featureOutFields = {
    "company": ["类型", "产业门类", "细分领域", "企业名称", "地址", "行业分类"],
    "厂房": ["厂房名称", "厂房地址", "联系人", "联系电话", "所属行业", "所属园区", "总建筑面积", "可销售面积", "可租用面积", "层高", "承重_KG_", "售价（元_m", "租金__（元", "厂房入驻企", "其他相关信"],
    "楼宇": ["楼宇名称", "楼宇地址", "联系人", "联系电话", "所属园区", "所属物业", "总建筑面积", "可销售面积", "可租用面积", "是否带装修", "售价（元_m", "租金（元_m", "纳税规模（", "其他相关信"],
    "孵化器": ["孵化器名称", "运营机构", "孵化器地址", "联系人", "联系电话", "孵化器定位", "所属园区", "孵化器场地", "在孵企业使", "孵化器可租", "在孵企业数", "专职孵化服", "租金水平（", "其他相关信"]
}

var featureKeyMap = {
    "总建筑面积": "总建筑面积(㎡)",
    "可销售面积": "可销售面积(㎡)",
    "可租用面积": "可租用面积(㎡)",
    "层高": "层高(m)",
    "承重_KG_": "承重(kg)",
    "售价（元_m": "售价(元/㎡)",
    "租金__（元": "租金(元/㎡/月)",
    "厂房入驻企": "厂房入驻企业名单",

    "租金（元_m": "租金(元/㎡/月)",
    "纳税规模（": "纳税规模(万元)",
    "租金水平（": "租金(元/㎡/月)",
    "租金（元_m": "租金(元/㎡/月)",

    "孵化器定位": "定位技术领域",
    "孵化器场地": "场地总面积(㎡)",
    "在孵企业使": "企业使用面积(㎡)",
    "孵化器可租": "可租面积(㎡)",
    "在孵企业数": "在孵企业数量",
    "专职孵化服": "专职孵化服务人员",
    "租金水平（": "租金(元/㎡/月)",

    "其他相关信": "其他相关信息",
    "备注": "备 注",
};