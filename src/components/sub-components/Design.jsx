import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const Design = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);  // Initialisation du moteur ts-particles
        await loadSlim(engine);  // Chargement de la version slim de ts-particles
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);  // Conteneur ts-particles chargé
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false },  // Désactive le mode plein écran
                fpsLimit: 70,  // Limite des FPS à 120
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,  // Active les interactions au clic
                            mode: "push",  // Mode d'interaction: ajout de particules
                        },
                        onHover: {
                            enable: true,  // Active les interactions au survol
                            mode: "repulse",  // Mode d'interaction: répulsion des particules
                        },
                        resize: true,  // Redimensionne les particules lors du redimensionnement de la fenêtre
                    },
                    modes: {
                        push: {
                            quantity: 2,  // Nombre de particules ajoutées au clic
                        },
                        repulse: {
                            distance: 200,  // Distance de répulsion au survol
                            duration: 0.4,  // Durée de la répulsion
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#57b2b56b",  // Couleur des particules
                    },
                    links: {
                        color: "#ffffff",  // Couleur des liens entre particules
                        distance: 150,  // Distance entre les particules pour créer un lien
                        enable: true,  // Active les liens entre particules
                        opacity: 0.25,  // Opacité des liens
                        width: 1,  // Largeur des liens
                    },
                    move: {
                        direction: "none",  // Direction du mouvement des particules
                        enable: true,  // Active le mouvement des particules
                        outModes: {
                            default: "bounce",  // Comportement des particules aux bords: rebond
                        },
                        random: false,  // Désactive le mouvement aléatoire
                        speed: 2,  // Vitesse de mouvement des particules (modifiée de 6 à 3)
                        straight: false,  // Désactive le mouvement en ligne droite
                    },
                    number: {
                        density: {
                            enable: true,  // Active la densité des particules
                            area: 800,  // Aire de densité des particules
                        },
                        value: 80,  // Nombre de particules
                    },
                    opacity: {
                        value: 0.5,  // Opacité des particules
                    },
                    shape: {
                        type: "circle",  // Forme des particules: cercle
                    },
                    size: {
                        value: { min: 1, max: 5 },  // Taille des particules
                    },
                },
                detectRetina: true,  // Active la détection Retina
            }}
        />
    );
}

export default Design;
