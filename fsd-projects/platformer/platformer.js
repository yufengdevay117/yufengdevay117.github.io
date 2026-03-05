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
   createPlatform(700,300,200,20);
   createPlatform(600,300,100,10,"purple");
   createPlatform(0,0,0,0); 
   createPlatform(0,0,0,0,"orange");
   createPlatform(0,0,0,0);
   createPlatform(0,0,0,0,"blue");
   createPlatform(0,0,0,0);
   createPlatform(0)


   

    createPlatform(500,300,200,20); 
    createPlatform(1350,400,50,50,"red");
    createPlatform(100,20,10,10,"lime"); // bright green for a finished
    
    
   
    // TODO 3 - Create Collectables
   createCollectable("max",1300,70);
   

   createCollectable("steve",1350,50);
   createCollectable("diamond",200,170,0.5,0.7);


    // TODO 4 - Create Cannons
   createCannon("Top",500,300);
  createCannon("Bottom",700,600)

   createCannon("top",200,100);
   createCannon("right",300,2000);
   createCannon("left",300,2000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
