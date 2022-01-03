# Projet infinity scroll
[voir la page](https://momoneli.github.io/Portfolio/)

# Html
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Mon e-Portfolio">
    <title>Mon e-Portfolio</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="icon" type="image/jpg" sizes="40x40" href="./favicon/icon.jpg">
</head>
```
-----------------------------
# Css
``` Css
/*reset*/
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&family=Source+Sans+3:wght@200;300;500&display=swap');
    html{
        font-size: 62.5% ;
        scroll-behavior: smooth;
    }
    body{
        font: 1.6rem 'Source Sans 3',sans-serif;
         margin: 0;
         background: url("../asset/R\ \(1\).jpg")no-repeat fixed center center / cover;
    
      
    }

    h1, h2, h3, h4, p, figure, ul,ol { 

        margin: 0;
        padding: 0;
        list-style-type: none;
        box-sizing: border-box;
    } 
 /*Theme*/
:root{
    --color-primary:#0b2a3334;
    --color-secondary: #ffffff;
    --color-main: #ffffff3a;
    --color-text: #ffffff;

    }
    
.logo{
    width: 10rem;
    height: 10.0rem;
}
.nav{
    background-color: #000000;
    overflow: hidden;
    
}

.nav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 1.4rem 1.6rem;
    text-decoration: none;
    font-size: 1.7rem; /* 1px 0.1rem*/
    transition: all 500ms ease-in-out;
  }

.nav a:hover {
    background-color: #ffffff;
    color: #000;
}

.nav a.active {
    background-color: #0000003f;
    color: #ffffff;
}
header{
    position: relative;
    
}
header h1 {
    text-align: center;
    line-height: 6.5rem;
    padding: 2rem 0;
    
}
header h1, section h2{
    line-height: 3.5rem;
    color: var(--color-secondary);
    background-color: var(--color-primary);
    font-weight: 300;
    text-shadow: .1rem .1rem 0 var(--color-default-global);
}
```
