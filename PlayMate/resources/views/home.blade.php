@extends('layouts.app')

@section('content')
<head>

<title>JS and PHP</title>

<script type="text/javascript">

    import "./app.js"

    function runProg(){
        call(app.js.App());
    }

</script>

</head>

<body>

<?php

echo '<script type="text/javascript"> src="app.js";</script>';

?>

</body>    
@endsection
