
# PAlMOODLE

palmoodle est un projet angular qui vise à récuperer d'une api des informations de sondages, et permet de voter et de créer d'autre sondages

#

## prérequis

- avoir une connection internet
- avoir une vm debian
- avoir installé node 21.7.1
- avoir npm 10.5 et angular 17.3.1
- ajouter un point de configuration .conf avec le code écrit en dessous (vhost)

voici le code du vhost : 

```xml
<VirtualHost *:80>
        ServerName thedomain.com
        ServerAdmin webmaster@thedomain.com
        DocumentRoot /var/www/websites/sondage/public

        <Directory /var/www/websites/sondage/public>
                AllowOverride All
        </Directory>
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}access.log combined
</VirtualHost>
```

## langage utilisé 

| Rank | Languages |
|-----:|-----------|
|     1| Angular   |
|     2| SQL       |
|     3| HTML      |


#

shema de la base de donnée 

![schema de la BDD](https://media.discordapp.net/attachments/1019490902319829013/1235597458294177832/image.png?ex=6634f34e&is=6633a1ce&hm=e72c003fe559e662314d71864eb9c0bc8e80be8d02499d2d8004374a4bdc4560&=&format=webp&quality=lossless&width=1231&height=700)

voici les pages principal de l'appli : 

![](https://media.discordapp.net/attachments/1019490902319829013/1235597958142234735/image.png?ex=6634f3c5&is=6633a245&hm=93f7e31b9a823ad91f060c620c06f658b88672de56b1b5cbcbe4555dd6ec3277&=&format=webp&quality=lossless&width=1440&height=649)

![](https://media.discordapp.net/attachments/1019490902319829013/1235598158172524604/image.png?ex=6634f3f5&is=6633a275&hm=cd75852732af57fa69c7d43b85dba352795cb6515bf49c61a20a08b33fe1233d&=&format=webp&quality=lossless&width=1369&height=700)

![](https://media.discordapp.net/attachments/1019490902319829013/1235598189068030052/image.png?ex=6634f3fc&is=6633a27c&hm=8dfad6c8e51fcc1f3908db3e804e31f968c6c1a0ac5e85e3931935ac4f6704e4&=&format=webp&quality=lossless&width=1440&height=412)

et voici la preuve que les donnée son bien récuperer 

![](https://media.discordapp.net/attachments/1019490902319829013/1235598333876240384/image.png?ex=6634f41f&is=6633a29f&hm=9284dad8e843256b9bbacbdb7668a73c7a85cb21aebcf681ad4e730c27bedbce&=&format=webp&quality=lossless&width=915&height=700)
