import {
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Login.scss';

const Login: React.FC = () => {

    return (
        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonTitle>Connexion</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>

                        <IonTitle size="large"></IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonList >
                    <IonItem>
                        <IonInput label="Identifiant" placeholder="Entrez votre Identifiant"></IonInput>
                        <IonInput label="Mot de Passe" placeholder="Entrez votre mot de passe" type="password"></IonInput>
                        <IonButton>Se Connecter</IonButton>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Login;
