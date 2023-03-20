<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title>Exercice 1</title>
</head>

<body>

    <h1>Exercice 2</h1>

    <form action="/" method="Post">
        <div id="qcm"></div>
        <button type="submit">Submit form</button>
    </form>

    <div id="question" style="display:none">

        <p id="title">Question</p>
        <div id="choices">
        </div>

        <p style="display: none" id="correction" style="color: red">error</p>
    </div>

    <div id="choice" style="display: none">
        <input type="radio" id="input" name="fav_language" value="HTML">
        <label for="html" id="label">HTML</label><br>
    </div>

    <script src="../js/script.js"></script>
</body>

</html>