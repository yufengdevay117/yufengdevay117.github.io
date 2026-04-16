$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();

       

    // TODO 2 - Create Platforms
    // createBadPlatform(500, 400, 100, 20, "blue")
   createPlatform(1000,200,100,100,"orange");
   createPlatform(900,250,100,170,"red");
   createPlatform(150,650,250,90,"grey"); 
   createPlatform(600,499,100,100,"green");
   createPlatform(700,400,100,50,"gold");
   createPlatform(400,590,300,107,"blue");
   


   

    createPlatform(1200,200,150,150,"purple"); 
    createPlatform(800,300,100,100,"yellow");
    createPlatform(1100,200,90,100,"lime"); // bright green for a finished
    
    
   
    // TODO 3 - Create Collectables
   createCollectable("max",1300,70);
   

   createCollectable("steve",1350,70);
   createCollectable("diamond",200,170,0.5,0.7);


    // TODO 4 - Create Cannons
   createCannon("Top",500,3000);
  createCannon("Bottom",700,500)

   createCannon("top",500,600);
   createCannon("right",300,1000);
   createCannon("left",200,2009);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
