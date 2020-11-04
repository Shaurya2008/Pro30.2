class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB
        this.rope= Constraint.create(options);
        World.add(world, this.rope);
    }
    
    attach(body){
        this.rope.bodyA = point;
    }
    fly(){
        this.rope.bodyA = null;
    }

    display(){
        if(this.rope.bodyA){ 
      var pointA = this.rope.bodyA.position
      var pointB = this.pointB

        push()
        
         line(pointA.x,pointA.y,pointB.x,pointB.y)                                 
         
    pop()      
    }
}
}
    
