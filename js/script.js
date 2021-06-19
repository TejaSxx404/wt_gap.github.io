


var subjects=document.getElementById('subjects');
var esiot_sub=document.getElementById('esiot_sub');
var spos_sub=document.getElementById('spos_sub');

var back_btn=document.getElementsByClassName('back_btn');

var link_esiot=document.getElementById('link_esiot');
var as_data=document.getElementById('as_data');
var as_data_spos=document.getElementById('as_data_spos');
var as_data_wt=document.getElementById('as_data_wt');
var as_data_smd=document.getElementById('as_data_smd');









function show_esiot(){
    var x="";
    subjects.style.display='none';
    esiot_sub.style.display='block';

    $.getJSON('data/esiot.JSON',function(data1){
        console.log(data1.length);

        for(var i=0;i<data1.length;i++){
           

            if(data1[i]['id']==1){
                x+= "<div class='elements_as' >"
                x+=" <span class='token' > PBL  :</span> "
                x+="<a href='"+ data1[i]['link'] +"' class='links_assignment' target='_blank'>"+ data1[i]['title']+"</a> "
                x+="</div>";
            }
              else{
                x+= "<div class='elements_as' >"
                x+=" <span class='token' > Assignment "+ Number(data1[i]['id']-1) +" :</span> "
                x+="<a href='"+ data1[i]['link'] +"' class='links_assignment' target='_blank'>"+ data1[i]['title']+"</a> "
                x+="</div>";

            }
                
          
            as_data.innerHTML=x;
            
            
           
            // var as_no=document.createElement('p');
            // var as_node = document.createTextNode("Assignment "+data[i]['id']+" : ");
            // as_no.appendChild(as_node);
            // token.appendChild(as_no);

            
            // var as_link=document.createElement('a');
            // var as_node_link = document.createTextNode(data[i]['title']);
            // as_link.appendChild(as_node_link);


            
            // as_link.href=data[i]['link'];
            // as_link.target='_blank';
            // as_link.id='link';
            // links_assignment.appendChild(as_link);

            
            
            // var div_c=document.createElement('div');
            // div_c.appendChild(a )
            // div_c.appendChild(a );

        }
    })
}




function show_spos(){
    var y="";
    subjects.style.display='none';
    spos_sub.style.display='block';

    $.getJSON('data/spos.JSON',function(data){
        console.log(data.length);

        for(var i=0;i<data.length;i++){
           

            if(data[i]['id']==1){
                y+= "<div class='elements_as' >"
                y+=" <span class='token' > PBL  :</span> "
                y+="<a href='"+ data[i]['link'] +"' class='links_assignment' target='_blank'>"+ data[i]['title']+"</a> "
                y+="</div>";
            }
              else{
                y+= "<div class='elements_as' >"
                y+=" <span class='token' > Assignment "+ Number(data[i]['id']-1) +" :</span> "
                y+="<a href='"+ data[i]['link'] +"' class='links_assignment' target='_blank'>"+ data[i]['title']+"</a> "
                y+="</div>";

            }
                
          
            as_data_spos.innerHTML=y;
            
            
           
            // var as_no=document.createElement('p');
            // var as_node = document.createTextNode("Assignment "+data[i]['id']+" : ");
            // as_no.appendChild(as_node);
            // token.appendChild(as_no);

            
            // var as_link=document.createElement('a');
            // var as_node_link = document.createTextNode(data[i]['title']);
            // as_link.appendChild(as_node_link);


            
            // as_link.href=data[i]['link'];
            // as_link.target='_blank';
            // as_link.id='link';
            // links_assignment.appendChild(as_link);

            
            
            // var div_c=document.createElement('div');
            // div_c.appendChild(a )
            // div_c.appendChild(a );

        }
    })
}

function show_wt(){
    var y="";
    subjects.style.display='none';
    wt_sub.style.display='block';

    $.getJSON('data/wt.JSON',function(data){
        console.log(data.length);

        for(var i=0;i<data.length;i++){
           

            if(data[i]['id']==1){
                y+= "<div class='elements_as' >"
                y+=" <span class='token' > PBL  :</span> "
                y+="<a href='"+ data[i]['link'] +"' class='links_assignment' target='_blank'>"+ data[i]['title']+"</a> "
                y+="</div>";
            }
              else{
                y+= "<div class='elements_as' >"
                y+=" <span class='token' > Assignment "+ Number(data[i]['id']-1) +" :</span> "
                y+="<a href='"+ data[i]['link'] +"' class='links_assignment' target='_blank'>"+ data[i]['title']+"</a> "
                y+="</div>";

            }
                
          
            as_data_wt.innerHTML=y;
            
            
           
            // var as_no=document.createElement('p');
            // var as_node = document.createTextNode("Assignment "+data[i]['id']+" : ");
            // as_no.appendChild(as_node);
            // token.appendChild(as_no);

            
            // var as_link=document.createElement('a');
            // var as_node_link = document.createTextNode(data[i]['title']);
            // as_link.appendChild(as_node_link);


            
            // as_link.href=data[i]['link'];
            // as_link.target='_blank';
            // as_link.id='link';
            // links_assignment.appendChild(as_link);

            
            
            // var div_c=document.createElement('div');
            // div_c.appendChild(a )
            // div_c.appendChild(a );

        }
    })
}





function show_smd(){
    var y="";
    subjects.style.display='none';
    smd_sub.style.display='block';

    $.getJSON('data/smd.JSON',function(data){
        console.log(data.length);

        for(var i=0;i<data.length;i++){
           

            if(data[i]['id']==1){
                y+= "<div class='elements_as' >"
                y+=" <span class='token' > PBL  :</span> "
                y+="<a href='"+ data[i]['link'] +"' class='links_assignment' target='_blank'>"+ data[i]['title']+"</a> "
                y+="</div>";
            }
              else{
                y+= "<div class='elements_as' >"
                y+=" <span class='token' > Assignment "+ Number(data[i]['id']-1) +" :</span> "
                y+="<a href='"+ data[i]['link'] +"' class='links_assignment' target='_blank'>"+ data[i]['title']+"</a> "
                y+="</div>";

            }
                
          
            as_data_smd.innerHTML=y;
            
            
           
            // var as_no=document.createElement('p');
            // var as_node = document.createTextNode("Assignment "+data[i]['id']+" : ");
            // as_no.appendChild(as_node);
            // token.appendChild(as_no);

            
            // var as_link=document.createElement('a');
            // var as_node_link = document.createTextNode(data[i]['title']);
            // as_link.appendChild(as_node_link);


            
            // as_link.href=data[i]['link'];
            // as_link.target='_blank';
            // as_link.id='link';
            // links_assignment.appendChild(as_link);

            
            
            // var div_c=document.createElement('div');
            // div_c.appendChild(a )
            // div_c.appendChild(a );

        }
    })
}



function show_daa (){
    var y="";
    subjects.style.display='none';
    smd_sub.style.display='block';

    $.getJSON('data/daa.JSON',function(data){
        console.log(data.length);

        for(var i=0;i<data.length;i++){
           

            if(data[i]['id']==1){
                y+= "<div class='elements_as' >"
                y+=" <span class='token' > PBL  :</span> "
                y+="<a href='"+ data[i]['link'] +"' class='links_assignment' target='_blank'>"+ data[i]['title']+"</a> "
                y+="</div>";
            }
              else{
                y+= "<div class='elements_as' >"
                y+=" <span class='token' > Assignment "+ Number(data[i]['id']-1) +" :</span> "
                y+="<a href='"+ data[i]['link'] +"' class='links_assignment' target='_blank'>"+ data[i]['title']+"</a> "
                y+="</div>";

            }
                
          
            as_data_daa.innerHTML=y;
            
            
           
            // var as_no=document.createElement('p');
            // var as_node = document.createTextNode("Assignment "+data[i]['id']+" : ");
            // as_no.appendChild(as_node);
            // token.appendChild(as_no);

            
            // var as_link=document.createElement('a');
            // var as_node_link = document.createTextNode(data[i]['title']);
            // as_link.appendChild(as_node_link);


            
            // as_link.href=data[i]['link'];
            // as_link.target='_blank';
            // as_link.id='link';
            // links_assignment.appendChild(as_link);

            
            
            // var div_c=document.createElement('div');
            // div_c.appendChild(a )
            // div_c.appendChild(a );

        }
    })
}




function go_back(){
    location.reload();
}
