var $ = jQuery;

// Form 1
var form1 = [
  {
    field:"ContentPlaceHolder1_personDetails_familyNameTextBox",
    value:'Pepe Santos' // Nombre (tal cual aparece en el pasaporte),
  },
  {
    field:'ContentPlaceHolder1_personDetails_givenName1Textbox',
    value:'Pepe', // Primer nombre
  },
  {
    field:'ContentPlaceHolder1_personDetails_givenName2Textbox',
    value:'Santos' // Segundo nombre
  },
  {
    field:'ContentPlaceHolder1_personDetails_genderDropDownList',
    value:'F', // Sexo ( F = femenino M = masculino)
    type:'select'
  },
  {
    field:'ContentPlaceHolder1_personDetails_dateOfBirthDatePicker_DatePicker',
    value:'11-06-91' // Fecha de nacimiento
  },
  {
    field:'ContentPlaceHolder1_personDetails_CountryDropDownList',
    value:'13', // Pais donde nacio (Arg=13)
    type:'select'
  },
  // Parte 2 - Lugar en el que reside
  {
    field:'ContentPlaceHolder1_addressContactDetails_address_streetNumberTextbox',
    value:'80', // Numero de la calle ( Maxiomo 18 caracteres )
  },
  {
    field:'ContentPlaceHolder1_addressContactDetails_address_address1TextBox',
    value:'sur', // Nombre de la calle
  },
  {
    field:'ContentPlaceHolder1_addressContactDetails_address_suburbTextBox',
    value:'Ejido', // Barrio o colonia
  },
  {
    field:'ContentPlaceHolder1_addressContactDetails_address_cityTextBox',
    value:'playa del carmen', // Ciudad
  },
   {
    field:'ContentPlaceHolder1_addressContactDetails_address_provinceStateTextBox',
    value:'quintana roo', // Estado / provincia
  },
   {
    field:'ContentPlaceHolder1_addressContactDetails_address_postalCodeTextBox',
    value:'77712', // Codigo postal
  },
  {
    field:'ContentPlaceHolder1_addressContactDetails_address_countryDropDownList',
    value:'139', // Pais en el que reside (MX= 139 | ARG=13)
    type:'select'
  },
  {
    field:'ContentPlaceHolder1_hasAgent_representedByAgentDropdownlist',
    value:'No',
    type:'select'
  },
  {
    field:'ContentPlaceHolder1_communicationMethod_communicationMethodDropDownList',
    value:'1', // Selecciono para que se comuniquen via email
    type:'select'
  },
  {
    field:'ContentPlaceHolder1_addressContactDetails_contactDetails_emailAddressTextBox',
    value:'pepesantos@gmail.com', // Correo
  },
   {
    field:'ContentPlaceHolder1_addressContactDetails_contactDetails_phoneNumberMobileTextBox',
    value:'+5219922362026', // Celular
  },
   {
    field:'ContentPlaceHolder1_hasCreditCard_hasCreditCardDropDownlist',
    value:'Yes', // Indico que tengo las tarjetas Mastercard o Visa
    type:'select'
  },
]

// Identification
form2 = [
  {
    field:'ContentPlaceHolder1_identification_passportNumberTextBox',
    value:'AAB032588' // Pasaporte
  },
  {
    field:'ContentPlaceHolder1_identification_confirmPassportNumberTextBox',
    value:'AAB032588' // Pasaporte (confirmacion)
  },
  {
    field:'ContentPlaceHolder1_identification_passportExpiryDateDatePicker_DatePicker',
    value:'28 june, 2023' // Fecha de expiracion
  },
  {
    field:'ContentPlaceHolder1_identification_otherIdentificationDropdownlist',
    value:'3' // Indico como National ID el tipo de identificacion
  },
  {
    field:'ContentPlaceHolder1_identification_otherIssueDateDatePicker_DatePicker',
    value:'21 november, 2012' // Fecha de creacion
  },
  {
    field:'ContentPlaceHolder1_identification_otherExpiryDateDatePicker_DatePicker',
    value:'21 november, 2027' // Fecha de vencimiento
  }
]


/*
* Health Form
* Este formulario hace ciertas preguntas sobre enfermedades, por defectos respondo a todas por NO
*/
form4 = [
  {field:'ContentPlaceHolder1_medicalConditions_renalDialysisDropDownList', value:'No'},
  {field:'ContentPlaceHolder1_medicalConditions_tuberculosisDropDownList', value:'No'},
  {field:'ContentPlaceHolder1_medicalConditions_cancerDropDownList', value:'No'},
  {field:'ContentPlaceHolder1_medicalConditions_heartDiseaseDropDownList', value:'No'},
  {field:'ContentPlaceHolder1_medicalConditions_disabilityDropDownList', value:'No'},
  {field:'ContentPlaceHolder1_medicalConditions_hospitalisationDropDownList', value:'No'},
  {field:'ContentPlaceHolder1_medicalConditions_residentailCareDropDownList', value:'No'},
  {field:'ContentPlaceHolder1_medicalConditions_pregnancy_pregnancyStatusDropDownList', value:'No'},
  {field:'ContentPlaceHolder1_medicalConditions_tbRiskDropDownList', value:'No'}
];

/*
* Character Form
* Este formulario hace ciertas preguntas sobre delitos, por defectos respondo a todas por NO
*/
form5 = [
  {field:'ContentPlaceHolder1_character_imprisonment5YearsDropDownList', value:'No'},
  {field:'ContentPlaceHolder1_character_imprisonment12MonthsDropDownList', value:'No'},
  {field:'ContentPlaceHolder1_character_removalOrderDropDownList', value:'No'},
  {field:'ContentPlaceHolder1_character_deportedDropDownList', value:'No'},
  {field:'ContentPlaceHolder1_character_chargedDropDownList', value:'No'},
  {field:'ContentPlaceHolder1_character_convictedDropDownList', value:'No'},
  {field:'ContentPlaceHolder1_character_underInvestigationDropDownList', value:'No'},
  {field:'ContentPlaceHolder1_character_excludedDropDownList', value:'No'},
  {field:'ContentPlaceHolder1_character_removedDropDownList', value:'No'}
];

form6 = [
  {
    field:'ContentPlaceHolder1_offshoreDetails_commonWHSQuestions_previousWhsPermitVisaDropDownList', 
    value:'No',
    type:'select'
  },
  {
    field:'ContentPlaceHolder1_offshoreDetails_commonWHSQuestions_sufficientFundsHolidayDropDownList',
    value:'Yes',
    type:'select'

  },
  {
    field:'ContentPlaceHolder1_offshoreDetails_intendedTravelDateDatePicker_DatePicker',
     value:'10 April, 2018'
  },
  {
    field:'ContentPlaceHolder1_offshoreDetails_beenToNzDropDownList',
     value:'No',
     type:'select'
  },
  {
    field:'ContentPlaceHolder1_offshoreDetails_requirementsQuestions_sufficientFundsOnwardTicketDropDownList',
     value:'Yes',
     type:'select'
  },
  {
    field:'ContentPlaceHolder1_offshoreDetails_requirementsQuestions_readRequirementsDropDownList',
     value:'Yes',
     type:'select'
  },
  {
    field:'ContentPlaceHolder1_offshoreDetails_lengthOfStay_lengthOfStayDropDownList',
     value:'2', // Cantidad de meses (12 meses = 2, 23 meses = 3)
     type:'select'
  },
];


var formSubmit = [
    {
      field:'ContentPlaceHolder1_falseStatementCheckBox',
      type:'checkbox'
    },
    {
      field:'ContentPlaceHolder1_notesCheckBox',
      type:'checkbox'
    },
    {
      field:'ContentPlaceHolder1_circumstancesCheckBox',
      type:'checkbox'
    },



    {
      field:'ContentPlaceHolder1_warrantsCheckBox',
      type:'checkbox'
    },
    {
      field:'ContentPlaceHolder1_informationCheckBox',
      type:'checkbox'
    },
    {
      field:'ContentPlaceHolder1_healthCheckBox',
      type:'checkbox'
    },
    {
      field:'ContentPlaceHolder1_adviceCheckBox',
      type:'checkbox'
    },
    {
      field:'ContentPlaceHolder1_registrationCheckBox',
      type:'checkbox'
    },
    {
      field:'ContentPlaceHolder1_entitlementCheckbox',
      type:'checkbox'
    },
    {
      field:'ContentPlaceHolder1_permitExpiryCheckBox',
      type:'checkbox'
    },
    {
      field:'ContentPlaceHolder1_medicalInsuranceCheckBox',
      type:'checkbox'
    }

]











function load(formAnswers){
$.each( formAnswers, function(i,v){
  
  var field = v.field;
  var value = v.value;
  
  if( v.type == "select" ){
     $("#"+field).val(value).change();
    console.log(value)
    console.log(field)
  }else if( v.type == "checkbox"){
    $('#'+field).attr('checked','checked')
  }

  else{
     $("#"+field).val(value).change();
  }
 })
}

load(form1)
load(form2)
load(form4)
load(form5)
load(form6)
load(formSubmit)