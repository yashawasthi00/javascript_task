let arr= [

    { author: 'Gates', title: 'The Road Ahead', id: 1, type: 'drama'},
 
    { author: 'Steve', title: 'Walter Isaacson', id: 2, type: 'action'},
 
    { author: 'Collins', title: 'The Final Book of The Hunger Games', id: 3, type: 'action'},
 
    { author: 'Hii', title: 'The Hunger Games', id: 4, type: 'drama'},
 
     { author: 'Collins', title: 'The Final Book of The Hunger Games', id: 3, type: 'action'},
 
     { author: 'Steve', title: 'Walter Isaacson', id: 2, type: 'action'},
 
    ];

    // **********  Remove duplicate from above based on key id  ***********

    // console.log(arr);

    let a=new Map();
    for(let item of arr)
    {
        if(a.has(item.id))
        {
            continue;
        }
        else{
            a.set(item.id,item)
        }
    }


    // console.log(a)

    let ans1=[];
    for(let item of a)
    {
        ans1.push(item[1]);
    }

    console.log(ans1); // gives the result without duplicate based on id

    console.log("****************")
    console.log("****************")
    console.log("****************")
    // ******** Create a group based on type ******


    let drama=new Array();
    let action=new Array();

    for(let item of arr)
    {
        if(item.type=="drama")
        {
            drama.push(item)
        }
        else{
            action.push(item)
        }
    }

    // console.log(drama)

    let ans2={
        "drama":drama,
        "action":action
    }


    console.log(ans2); // gives the output of group based on type

    console.log("****************")
    console.log("****************")
    console.log("****************")

    // ****** sort array based on auther ****** //

    function compare( a, b ) {
        if ( a.author < b.author ){
          return -1;
        }
        if ( a.author > b.author){
          return 1;
        }
        return 0;
      }
      
      arr.sort( compare );
      console.log(arr); // gives sorted array of objects based on author

      console.log("****************")
      console.log("****************")
      console.log("****************")

// ****** make above library array to string. ****** //

      let ans3=JSON.stringify(arr);

      console.log(ans3) // gives arr in string







