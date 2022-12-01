import React from "react";
import { TarjetaBlog } from "../components/TarjetaBlog";
import '../App.css'

export default function Blog() {
    return (
        <>

            <div className="About">
                <div style={{ textAlign: "center", fontSize: "xx-large" }}>
                    <p> LOVE IN BOX CHRISTMAS BLOG  </p>
                </div>
                <div style={{ textAlign: "center", fontSize: "x-large" }}>
                    <p> On this site you will find the blog section of our store, taking advantage of the Christmas season we have chosen some ideas
                         of gifts for the season, read a little and choose the best gift for your loved ones </p>
                </div>
                <div className="contenedor-principal">
                    <TarjetaBlog
                        nombre='What toys to choose this Christmas: for children from 6 to 9 years old'
                        imagen='blog1'
                        testimonio='"The World Map Magnetic Puzzle starts from a base with the continents, each one in a different colour. Each piece is a country or several of the world, with its name, capital and fun illustrations of its traditions."'
                        testimonio2='Pinball is a fast game, with manual dexterity, in which we have to bounce a small metal ball off the walls and mechanisms to get points.'
                        testimonio3='The Bodymagnet Anatomy Game will open up a whole new field of knowledge: that of the human body inside. With 76 magnetic body parts, children will be able to complete the skeleton, organs, set of muscles and the exterior of the skin.'
                        testimonio4='Is your little one fascinated by slime? With the Extraordinary Slimes Kit, you can create them with your own hands! A game that brings them closer to scientific experimentation through something that motivates them a lot.'
                        testimonio5='' />

                    <TarjetaBlog
                        nombre='Race tracks, parking lots and cars for everyone'
                        imagen='blog2'
                        testimonio='Toy cars are usually one of those gifts that excite the little ones. They are toys that allow you to live a thousand adventures, with the most attractive vehicles and all the possibilities at your fingertips. And for this reason, we have many possibilities to hit the most attractive, fun and exciting toy cars.'
                        testimonio2='Hot Wheels, Scalextric o Ninco son alguna de las marcas de circuitos de carreras que puedes encontrar en el catálogo de juguetes de Todojuguete'
                        testimonio3='The racing circuits can be classic, with the cars driving on metal tracks. The slot world is present in Todojuguete and there are many toy tracks to choose from. From large toy race tracks with expert difficulty to small toy tracks to assemble in the living room and enjoy the excitement of racing among the little ones in the house.'
                        testimonio4='There are also simpler car circuits, designed for the little ones. These toy car circuits are prepared so that boys and girls can feel the excitement of racing in their room with their friends.'
                        testimonio5='These toy car circuits are simpler and can be used by the little ones without any difficulty and they can enjoy and have fun without problems. Hot Wheels circuits continue to be one of the favorite toys for boys and girls. Loopings, high-speed routes and special cars to run more and have a more intense emotion are the hallmarks of Hot Wheels, one of the most popular racing circuit brands.' />

                    <TarjetaBlog
                        nombre='Best NERF x FORTNITE for this Christmas'
                        imagen='blog3'
                        testimonio='NERF guns are products for children and adults that invite fun by making it possible to shoot different types of darts, pellets or water, either at a particular target or between friends. These toy guns, with their loading and unloading mechanism, their easy handling and the fun they bring, are the favorites of those who like to shoot'
                        testimonio2='🔫 Best NERF x FORTNITE for this Christmas
                        NERF guns are products for children and adults that invite fun by making it possible to shoot different types of darts, pellets or water, either at a particular target or among friends. These toy guns, with their loading and unloading mechanism, their easy handling and the fun they bring, are the favorites of those who like to shoot. Nerf x Fortnite Today we analyze the NERF Forntite gun collection, the brands pieces inspired by the most famous video game of recent years. We analyze the different models in detail and we recommend the best ones so that you can buy them this Christmas.'
                        testimonio3='🔫NERF Fortnite Heavy-SR
                        It is an elongated launcher that replicates a Fortnite weapon and is the longest in history in terms of NERF guns, measuring 109 cm long from barrel to stock, it has a removable scope and bolt action (a preparation bolt). with a 6-dart clip for 6 foam NERF Mega darts. Its long-distance reach allows the player to take slow and precise shots with the help of the built-in sight.'
                        testimonio4='🔫NERF Fortnite SMG-E
                        This blaster is short unlike the Heavy-SR, but its no less incredible for that, since the SMG-E model contains motorized blasters with removable clip for 6 refillable foam darts. Its operation is based on a motor, which we can turn on with the acceleration button to later press the trigger, letting out a motorized dart projectile. More power and speed to win the Battle Royale.'
                        testimonio5='🔫NERF Fortnite Legendary TAC
                        Like the rest of the pitching products, its design is inspired by the equipment that is used in the game and it is in a characteristic yellow tone that young fans instantly recognize. This fortnite Nerf shotgun is based on a rotating barrel with room for 6 darts that can be fired all in a row while the shooter pumps the lever and pulls the trigger. The darts are "NERF AccuStrike Mega" type foam darts that can be used for indoor and outdoor play. A classic of Fortnite.'/>

                </div>
            </div>

        </>
    )
}