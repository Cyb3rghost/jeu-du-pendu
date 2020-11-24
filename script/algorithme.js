$( document ).ready(function() {

    $('#cadrePartie').hide();

    var motAleatoire = ''
    var lettreMot = []

    $('#nouvellePartie').on('click', function() {

        console.log('nouvelle partie !');

        var urlData = "data/dictionnaire.json";
        var request = new XMLHttpRequest();
        request.open('GET', urlData);
        request.responseType = 'json';
        request.send();

        request.onload = function() {

            var total = request.response.total
            motAleatoire = request.response[Math.floor(Math.random() * 11)].toUpperCase()
            lettreMot = motAleatoire.split('');
            var totalLettre = motAleatoire.length
            var depart = 0

            var contenu = ''

            contenu += `<input type='hidden' id='etat' value='${depart}'><input type='hidden' id='total_etat' value='${totalLettre}'>`

            for (let index = 0; index < totalLettre; index++) {

                contenu += `<span id='zone${depart}'>_</span> `
                
                depart++;

            }

            $('.contenu').html(contenu)

            $('#nouvellePartie').hide();
            $('#cadrePartie').show();

        }



    });

    $('#boutonA').on('click', function() {

        var etat = $('#etat').val()
        var totalEtat = $('#total_etat').val()
        var lettre = $('#boutonA').val()

        if(lettre === lettreMot[etat])
        {

            $('#zone' + etat).html(lettre)
            $('#etat').val(parseInt(etat) + 1)

            var nouvelleEtat = $('#etat').val()

            if(nouvelleEtat === totalEtat)
            {
    
                alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"
    
            }

        }
        else
        {

            var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE

        }

    });

    $('#boutonB').on('click', function() {

        var etat = $('#etat').val()
        var totalEtat = $('#total_etat').val()
        var lettre = $('#boutonB').val()

        if(lettre === lettreMot[etat])
        {

            $('#zone' + etat).html(lettre)
            $('#etat').val(parseInt(etat) + 1)

            var nouvelleEtat = $('#etat').val()

            if(nouvelleEtat === totalEtat)
            {
    
                alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"
    
            }

        }
        else
        {

                       var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
            // ON CHANGE L'IMAGE

        }

    });

    $('#boutonC').on('click', function() {

        var etat = $('#etat').val()
        var totalEtat = $('#total_etat').val()
        var lettre = $('#boutonC').val()

        if(lettre === lettreMot[etat])
        {

            $('#zone' + etat).html(lettre)
            $('#etat').val(parseInt(etat) + 1)

            var nouvelleEtat = $('#etat').val()

            if(nouvelleEtat === totalEtat)
            {
    
                alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"
    
            }

        }
        else
        {

                       var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
            // ON CHANGE L'IMAGE

        }

    });

    $('#boutonD').on('click', function() {

        var etat = $('#etat').val()
        var totalEtat = $('#total_etat').val()
        var lettre = $('#boutonD').val()

        if(lettre === lettreMot[etat])
        {

            $('#zone' + etat).html(lettre)
            $('#etat').val(parseInt(etat) + 1)

            var nouvelleEtat = $('#etat').val()

            if(nouvelleEtat === totalEtat)
            {
    
                alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"
    
            }

        }
        else
        {

                       var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
            // ON CHANGE L'IMAGE

        }

    });

    $('#boutonE').on('click', function() {

        var etat = $('#etat').val()
        var totalEtat = $('#total_etat').val()
        var lettre = $('#boutonE').val()

        if(lettre === lettreMot[etat])
        {

            $('#zone' + etat).html(lettre)
            $('#etat').val(parseInt(etat) + 1)

            var nouvelleEtat = $('#etat').val()

            if(nouvelleEtat === totalEtat)
            {
    
                alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"
    
            }

        }
        else
        {

                       var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
            // ON CHANGE L'IMAGE

        }

    });

    $('#boutonF').on('click', function() {

    var etat = $('#etat').val()
    var totalEtat = $('#total_etat').val()
    var lettre = $('#boutonF').val()

    if(lettre === lettreMot[etat])
    {

        $('#zone' + etat).html(lettre)
        $('#etat').val(parseInt(etat) + 1)

        var nouvelleEtat = $('#etat').val()

        if(nouvelleEtat === totalEtat)
        {

            alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"

        }

    }
    else
    {

                   var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
        // ON CHANGE L'IMAGE

    }

    });

    $('#boutonG').on('click', function() {

    var etat = $('#etat').val()
    var totalEtat = $('#total_etat').val()
    var lettre = $('#boutonG').val()

    if(lettre === lettreMot[etat])
    {

        $('#zone' + etat).html(lettre)
        $('#etat').val(parseInt(etat) + 1)

        var nouvelleEtat = $('#etat').val()

        if(nouvelleEtat === totalEtat)
        {

            alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"

        }

    }
    else
    {

                   var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
        // ON CHANGE L'IMAGE

    }

    });

    $('#boutonH').on('click', function() {

    var etat = $('#etat').val()
    var totalEtat = $('#total_etat').val()
    var lettre = $('#boutonH').val()

    if(lettre === lettreMot[etat])
    {

        $('#zone' + etat).html(lettre)
        $('#etat').val(parseInt(etat) + 1)

        var nouvelleEtat = $('#etat').val()

        if(nouvelleEtat === totalEtat)
        {

            alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"

        }

    }
    else
    {

                   var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
        // ON CHANGE L'IMAGE

    }

    });

    $('#boutonI').on('click', function() {

    var etat = $('#etat').val()
    var totalEtat = $('#total_etat').val()
    var lettre = $('#boutonI').val()

    if(lettre === lettreMot[etat])
    {

        $('#zone' + etat).html(lettre)
        $('#etat').val(parseInt(etat) + 1)

        var nouvelleEtat = $('#etat').val()

        if(nouvelleEtat === totalEtat)
        {

            alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"

        }

    }
    else
    {

                   var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
        // ON CHANGE L'IMAGE

    }

    });

    $('#boutonJ').on('click', function() {

        var etat = $('#etat').val()
        var totalEtat = $('#total_etat').val()
        var lettre = $('#boutonJ').val()

        if(lettre === lettreMot[etat])
        {

            $('#zone' + etat).html(lettre)
            $('#etat').val(parseInt(etat) + 1)

            var nouvelleEtat = $('#etat').val()

            if(nouvelleEtat === totalEtat)
            {
    
                alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"
    
            }

        }
        else
        {

                       var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
            // ON CHANGE L'IMAGE

        }

    });

    $('#boutonK').on('click', function() {

        var etat = $('#etat').val()
        var totalEtat = $('#total_etat').val()
        var lettre = $('#boutonK').val()

        if(lettre === lettreMot[etat])
        {

            $('#zone' + etat).html(lettre)
            $('#etat').val(parseInt(etat) + 1)

            var nouvelleEtat = $('#etat').val()

            if(nouvelleEtat === totalEtat)
            {
    
                alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"
    
            }


        }
        else
        {

                       var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
            // ON CHANGE L'IMAGE

        }

    });

    $('#boutonL').on('click', function() {

    var etat = $('#etat').val()
    var totalEtat = $('#total_etat').val()
    var lettre = $('#boutonL').val()

    if(lettre === lettreMot[etat])
    {

        $('#zone' + etat).html(lettre)
        $('#etat').val(parseInt(etat) + 1)

        var nouvelleEtat = $('#etat').val()

        if(nouvelleEtat === totalEtat)
        {

            alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"

        }

    }
    else
    {

                   var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
        // ON CHANGE L'IMAGE

    }

    });

    $('#boutonM').on('click', function() {

    var etat = $('#etat').val()
    var totalEtat = $('#total_etat').val()
    var lettre = $('#boutonM').val()

    if(lettre === lettreMot[etat])
    {

        $('#zone' + etat).html(lettre)
        $('#etat').val(parseInt(etat) + 1)

        var nouvelleEtat = $('#etat').val()

        if(nouvelleEtat === totalEtat)
        {

            alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"

        }

    }
    else
    {

                   var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
        // ON CHANGE L'IMAGE

    }

    });

    $('#boutonN').on('click', function() {

    var etat = $('#etat').val()
    var totalEtat = $('#total_etat').val()
    var lettre = $('#boutonN').val()

    if(lettre === lettreMot[etat])
    {

        $('#zone' + etat).html(lettre)
        $('#etat').val(parseInt(etat) + 1)

        var nouvelleEtat = $('#etat').val()

        if(nouvelleEtat === totalEtat)
        {

            alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"

        }

    }
    else
    {

                   var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
        // ON CHANGE L'IMAGE

    }

    });

    $('#boutonO').on('click', function() {

    var etat = $('#etat').val()
    var totalEtat = $('#total_etat').val()
    var lettre = $('#boutonO').val()

    if(lettre === lettreMot[etat])
    {

        $('#zone' + etat).html(lettre)
        $('#etat').val(parseInt(etat) + 1)

        var nouvelleEtat = $('#etat').val()

        if(nouvelleEtat === totalEtat)
        {

            alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"

        }

    }
    else
    {

                   var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
        // ON CHANGE L'IMAGE

    }

    });

    $('#boutonP').on('click', function() {

    var etat = $('#etat').val()
    var totalEtat = $('#total_etat').val()
    var lettre = $('#boutonP').val()

    if(lettre === lettreMot[etat])
    {

        $('#zone' + etat).html(lettre)
        $('#etat').val(parseInt(etat) + 1)

        var nouvelleEtat = $('#etat').val()

        if(nouvelleEtat === totalEtat)
        {

            alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"

        }

    }
    else
    {

                   var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
        // ON CHANGE L'IMAGE

    }

    });

    $('#boutonQ').on('click', function() {

    var etat = $('#etat').val()
    var totalEtat = $('#total_etat').val()
    var lettre = $('#boutonQ').val()

    if(lettre === lettreMot[etat])
    {

        $('#zone' + etat).html(lettre)
        $('#etat').val(parseInt(etat) + 1)

        var nouvelleEtat = $('#etat').val()

        if(nouvelleEtat === totalEtat)
        {

            alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"

        }

    }
    else
    {

                   var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
        // ON CHANGE L'IMAGE

    }

    });

    $('#boutonR').on('click', function() {

    var etat = $('#etat').val()
    var totalEtat = $('#total_etat').val()
    var lettre = $('#boutonR').val()

    if(lettre === lettreMot[etat])
    {

        $('#zone' + etat).html(lettre)
        $('#etat').val(parseInt(etat) + 1)

        var nouvelleEtat = $('#etat').val()

        if(nouvelleEtat === totalEtat)
        {

            alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"

        }

    }
    else
    {

                   var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
        // ON CHANGE L'IMAGE

    }

    });

    $('#boutonS').on('click', function() {

    var etat = $('#etat').val()
    var totalEtat = $('#total_etat').val()
    var lettre = $('#boutonS').val()

    if(lettre === lettreMot[etat])
    {

        $('#zone' + etat).html(lettre)
        $('#etat').val(parseInt(etat) + 1)

        var nouvelleEtat = $('#etat').val()

        if(nouvelleEtat === totalEtat)
        {

            alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"

        }

    }
    else
    {

                   var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
        // ON CHANGE L'IMAGE

    }

    });

    $('#boutonT').on('click', function() {

    var etat = $('#etat').val()
    var totalEtat = $('#total_etat').val()
    var lettre = $('#boutonT').val()

    if(lettre === lettreMot[etat])
    {

        $('#zone' + etat).html(lettre)
        $('#etat').val(parseInt(etat) + 1)

        var nouvelleEtat = $('#etat').val()

        if(nouvelleEtat === totalEtat)
        {

            alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"

        }

    }
    else
    {

                   var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
        // ON CHANGE L'IMAGE

    }

    });

    $('#boutonU').on('click', function() {

    var etat = $('#etat').val()
    var totalEtat = $('#total_etat').val()
    var lettre = $('#boutonU').val()

    if(lettre === lettreMot[etat])
    {

        $('#zone' + etat).html(lettre)
        $('#etat').val(parseInt(etat) + 1)

        var nouvelleEtat = $('#etat').val()

        if(nouvelleEtat === totalEtat)
        {

            alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"

        }

    }
    else
    {

                   var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
        // ON CHANGE L'IMAGE

    }

    });

    $('#boutonV').on('click', function() {

    var etat = $('#etat').val()
    var totalEtat = $('#total_etat').val()
    var lettre = $('#boutonV').val()

    if(lettre === lettreMot[etat])
    {

        $('#zone' + etat).html(lettre)
        $('#etat').val(parseInt(etat) + 1)

        var nouvelleEtat = $('#etat').val()

        if(nouvelleEtat === totalEtat)
        {

            alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"

        }

    }
    else
    {

                   var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
        // ON CHANGE L'IMAGE

    }

    });

    $('#boutonW').on('click', function() {

    var etat = $('#etat').val()
    var totalEtat = $('#total_etat').val()
    var lettre = $('#boutonW').val()

    if(lettre === lettreMot[etat])
    {

        $('#zone' + etat).html(lettre)
        $('#etat').val(parseInt(etat) + 1)

        var nouvelleEtat = $('#etat').val()

        if(nouvelleEtat === totalEtat)
        {

            alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"

        }

    }
    else
    {

                   var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
        // ON CHANGE L'IMAGE

    }

    });

    $('#boutonX').on('click', function() {

    var etat = $('#etat').val()
    var totalEtat = $('#total_etat').val()
    var lettre = $('#boutonX').val()

    if(lettre === lettreMot[etat])
    {

        $('#zone' + etat).html(lettre)
        $('#etat').val(parseInt(etat) + 1)

        var nouvelleEtat = $('#etat').val()

        if(nouvelleEtat === totalEtat)
        {

            alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"

        }

    }
    else
    {

                   var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
        // ON CHANGE L'IMAGE

    }

    });

    $('#boutonY').on('click', function() {

    var etat = $('#etat').val()
    var totalEtat = $('#total_etat').val()
    var lettre = $('#boutonY').val()

    if(lettre === lettreMot[etat])
    {

        $('#zone' + etat).html(lettre)
        $('#etat').val(parseInt(etat) + 1)

        var nouvelleEtat = $('#etat').val()

        if(nouvelleEtat === totalEtat)
        {

            alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"

        }

    }
    else
    {

                   var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
        // ON CHANGE L'IMAGE

    }

    });

    $('#boutonZ').on('click', function() {

        var etat = $('#etat').val()
        var totalEtat = $('#total_etat').val()
        var lettre = $('#boutonZ').val()

        if(lettre === lettreMot[etat])
        {

            $('#zone' + etat).html(lettre)
            $('#etat').val(parseInt(etat) + 1)

            var nouvelleEtat = $('#etat').val()

            if(nouvelleEtat === totalEtat)
            {

                alert("Félicitation, vous avez gagné !")

                document.location.href="index.php"

            }

        }
        else
        {

                       var etape = $('#etape').val()

            switch (etape) {
                case "1":
                    $('#statutPendu').attr('src', 'assets/etape2.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "2":
                    $('#statutPendu').attr('src', 'assets/etape3.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "3":
                    $('#statutPendu').attr('src', 'assets/etape4.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "4":
                    $('#statutPendu').attr('src', 'assets/etape5.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "5":
                    $('#statutPendu').attr('src', 'assets/etape6.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "6":
                    $('#statutPendu').attr('src', 'assets/etape7.png');
                    $('#etape').val(parseInt(etape) + 1)
                    break;
                case "7":
                    $('#statutPendu').attr('src', 'assets/etape8.png');
                    alert('Vous avez perdu !')
                    document.location.href="index.php"
                    break;
                default:
                    break;
                    
            }

            // ON CHANGE L'IMAGE
            // ON CHANGE L'IMAGE

        }

    });





});