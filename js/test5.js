var map = new BMap.Map("myMap");
var point = new BMap.Point(120.143051, 30.246092);
map.centerAndZoom(point, 15);


map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
map.setCurrentCity("杭州"); 

var marker = new BMap.Marker(point);
map.addOverlay(marker);

var local = new BMap.LocalSearch(map, {
	pageCapacity: 7,
  	renderOptions: {
   		map: map,
    	panel: "result",
    	autoViewport: true
  }
});
local.searchNearby("宾馆","西湖");

var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "sousuoresult"
  }
});
transit.search("杭州师范大学-东南门", "西湖,宾馆");

var adress=[
    [120.016976,30.295394,"博文苑1号楼"],
    [120.017441,30.295483,"食堂"],
    [120.013208,30.29502,"操场"],
    [120.015177,30.296387,"博文苑8号"],
];

var opts = {
    width: 250,    
    height: 250,  
}

for(var i=0;i<adress.length;i++){
	var point=new BMap.Marker(new BMap.Point(adress[i][0],adress[i][1]));
	var imgaddress="<img style='width:330px;height:154px;margin-top:20px;' src='/img/"+1+".jpg' />";
	var title="<h4 style='margin-top:10px;padding:0.2em 0'>"+adress[i][2]+"</h4>";
	var content=imgaddress+title;
	addClick(content,point);
	map.addOverlay(point);
}

function addClick(content,point){
		point.addEventListener("click",function(e){
			var p = e.target;
			var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
			var infoWindow = new BMap.InfoWindow(content,opts);  
			map.openInfoWindow(infoWindow,point);
        });
}
	