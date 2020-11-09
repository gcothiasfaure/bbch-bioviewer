# BBCH Bioviewer 

### Bienvenue sur **BBCH Bioviewer** !

Vous trouverez dans ce *depository* le travail réalisé par l'équipe de **BBCH Bioviewer** composé de :
- Amina Barmani 
- Walid Houfaf-Khoufaf 
- Florentin Brisebard
- Gaspard Cothias Faure

Comme nous avons travaillé en **Angular**, vous trouverez notre travail sous deux formes :
- dans la branche ``projet-builde`` : Le projet *buildé* qui peut être visualisé sur n'importe quel PC sans Angular, mais dans lequel il n'est pas possible de visualiser le code source.
- dans la branche ``code-source`` : Le code source commenté (fait office de documentation développeur) du projet pouvant être *serve* uniquement avec node.js et Angular CLI. Si vous désirez une notice pour *serve* directement le code source grace à ces deux outils, nous pouvons vous la fournir.

Vous trouverez une branche ``installation`` où est stockée l'archive du dossier nécessaire à l'installation de notre viewer sur votre environnement local.

Vous trouverez également une branche ``presentation``où est stocké notre support de présentation de notre soutenance du lundi 11 mai.

Vous trouverez enfin une branche ``rendus`` où sont stockés les différents rendus attendus par l'ENSG. 

#### Pour pouvoir naviguer sur le *viewer* cartographique que nous avons développé, veuillez suivre les deux notices suivantes.

>**Information préalable :** 
>
>Nous avons uniquement pu réaliser cette installation sur le système d'exploitation Windows.

## Notice d'installation

Pour pouvoir utiliser les données que nous avons mises à votre disposition pour utiliser toutes les capacités de notre *viewer* vous devez être équipé des logiciels suivants : 
- une JRE Java (installation testée sur la version 1.8.0)  
- PostgreSQL (installation testée sur la version 12.0) avec l'extension PostGIS créée (installation testée sur la version 3.0)
- Apache Tomcat (installation testée sur la version 9.0.34, disponible au téléchargement en suivant ce lien : [https://tomcat.apache.org/download-90.cgi](https://tomcat.apache.org/download-90.cgi))
- un serveur HTTP local : Apache avec WAMP ou MAMP par exemple (installation testée sur l'Apache 2.4.41 de WampServer)

Vous devez également être en possession du dossier ``installation BBCH Bioviewer`` dont nous vous avons fourni l'archive dans la branche ``installation`` de ce *depository*.
Ce dossier d'installation contient :
- un dump sql de données fournies par nos commanditaires exploitées par notre application : ``donnees_bdd_BBCHBioviewer.sql``
- l'archive web de GeoServer 2.10.1 : ``geoserver.war``
- le dossier racine du GeoServer 2.10.1 de l'application (avec son plugin WFS installé et tous les réglages sauvegardés) nécessaire à l'exploitation des données : ``geoserver``

>**ATTENTION :**
>
>Nous nous sommes rendu compte que l'extracteur d'archives *.zip* par défaut de Windows rendait inutilisables certains fichiers après extraction, il faut que vous extrayiez les fichiers téléchargés à l'aide d'un autre extracteur : **WinRAR** ou **7z** par exemple.

Dans un premier temps, vous devez importer la base de données dont nous vous avons fourni un dump nommé ``donnees_bdd_BBCHBioviewer.sql``. Utilisez par exemple l'outil Restore de pgAdmin en veillant à nommer cette base **donnees_bdd_BBCHBioviewer**.

Lorsque vous avez installé Apache Tomcat, il vous faut copier le fichier ``geoserver.war`` et le dossier ``geoserver`` dans le dossier ``<dossier racine d'Apache Tomcat>\apacheTomcat-9.0.34\webapps`` .

>**ATTENTION :**
>
>Si vous avez déjà installé une version du logiciel sur GeoServer sur votre ordinateur, il faut modifier les variables d'environnement de votre système associées à GeoServer. 
>
>Même si vous n'aviez pas de GeoServer, il est toujours mieux d'aller vérifier que ces deux variables d'environnement sont bien initialisées.
>
>Associez à **GEOSERVER_DATA_DIR** : ``<dossier racine d'Apache Tomcat>\apache-tomcat-9.0.34\webapps\geoserver\data``
>
>Associez à **GEOSERVER_HOME** : ``<dossier racine d'Apache Tomcat>\apache-tomcat-9.0.34\webapps\geoserver``

Rendez-vous dans ``<dossier racine d'Apache Tomcat>\apache-tomcat-9.0.34\bin`` et lancez dans cet ordre  les fichiers ``catalina.bat`` et ``startup.bat``.
Connectez-vous ensuite sur votre nouveau GeoServer (à l'adresse [http://localhost:8080/geoserver](http://localhost:8080/geoserver) sur votre navigateur) grâce à ces identifiants :  
- username  : **admin**
- password : **geoserver**

>**ATTENTION :**
>
> Sur certains de nos PC, nous avons remarqué que lorsque nous installons **Apache Tomcat** dans le dossier ``C:/Programmes`` ou ``C:/Programmes(x86)``, il était alors impossible de lancer l'interface web de GeoServer. Si votre navigateur vous dit : *The origin server did not find a current representation for the target resource*, alors déplacez simplement le dossier racine d'Apache Tomcat ailleurs sur votre PC (par exemple dans un dossier quelconque sur votre bureau).

Rendez-vous dans l’onglet **Entrepôts** (ou **Store** si vous avez une version anglaise de GeoServer). Il faut que vous activiez les trois entrepôts (tous nommés **donnees_bdd_BBCHBioviewer**) qui seront normalement inactifs. 
Pour cela, dans les 3 entrepôts, rendez-vous dans les réglages (en cliquant sur le nom de l'entrepôt) et cochez la case **Activé** puis insérez dans les champs **user** et **passwd** votre nom d'utilisateur et mot de passe pour vous connecter à votre propre base de données PostgreSQL (définis lors de l'installation de PostgreSQL).

Dans la branche ``projet-builde`` de ce *depository*, téléchargez le dossier ``bbch-bioviewer`` (lien de téléchargement : https://gitlab.com/Gaspard_Cothias_Faure/bbch-bioviewer/-/archive/projet-builde/bbch-bioviewer-projet-builde.zip?path=bbch-bioviewer). 

Sur votre ordinateur, définissez le dossier ``bbch-bioviewer`` comme dossier racine de votre serveur local (serveur HTTP *Apache* par exemple).


## Notice d'utilisation

A chaque nouvelle connexion au site : 

Rendez-vous dans ``<dossier racine d'Apache Tomcat>\apache-tomcat-9.0.34\bin`` et lancez dans cet ordre  les fichiers ``catalina.bat`` et ``startup.bat``.
Connectez-vous ensuite sur votre nouveau GeoServer (à l'adresse [http://localhost:8080/geoserver](http://localhost:8080/geoserver) sur votre navigateur) grâce à ces identifiants :  
- username  : **admin**
- password : **geoserver**

Connectez-vous à internet et lancez votre serveur HTTP local. Puis connectez-vous à votre serveur HTTP local en tapant http://localhost/bbch-bioviewer dans la barre URL de votre navigateur.
 
##### Vous pouvez alors naviguer sur BBCH Bioviewer !