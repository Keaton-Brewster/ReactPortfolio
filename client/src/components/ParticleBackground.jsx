import React, { Component } from 'react'

import ParticlesBg from 'particles-bg'

export default class ParticleBG extends Component {
    config = {
        num: [5, 1],
        rps: 1,
        radius: [5, 10],
        life: [1.5, 3],
        v: [5, 10],
        tha: [0], // direction in degrees where things go initially 0 is down
        // body: "./img/icon.png", // Whether to render pictures
        // rotate: [0, 20],
        alpha: [0.6, 0],
        scale: [1, 0.1],
        position: "all", // all or center or {x:1,y:1,width:100,height:100}
        color: ["#4164ff"],
        cross: "dead", // cross or bround
        random: 150,  // or null,
        g: 0,    // gravity
        // f: [2, -1], // force
        onParticleUpdate: (ctx, particle) => {
            ctx.beginPath();
            ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
        }
    };

    render() {
        return (
            // <ParticlesBg type="custom" config={this.config} bg={true} />
            <ParticlesBg type="cobweb" color={["#4164ff"]} bg={true} />
        )
    }
}
