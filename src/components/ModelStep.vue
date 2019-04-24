<template>
  <v-card>
    <span>Select Your Vehcile Model {{ msg }}</span>
    <v-layout>
      <v-flex>
        <v-btn
          v-for="(item, index) in selectedModels"
          :key="index"
          @click="onItemClick(item)"
        >
          {{ item }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'ModelStep',
  data () {
    return {
      models: []
    }
  },
  computed: {
    selectedModels () {
      const { year, make } = this.appState
      let modelList = []

      // Acura Models//
      if (year === '2019' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'NSX', 'RDX', 'RLX', 'TLX']
      }
      if (year === '2018' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'NSX', 'RDX', 'RLX', 'TLX']
      }
      if (year === '2017' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'NSX', 'RDX', 'RLX', 'TLX']
      }
      if (year === '2016' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'RDX', 'RLX', 'TLX']
      }
      if (year === '2015' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'RDX', 'RLX', 'TLX']
      }
      if (year === '2014' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'RDX', 'RLX', 'TL', 'TSX']
      }
      if (year === '2013' && make === 'ACURA') {
        modelList = ['ILX', 'MDX', 'RDX', 'TL', 'TSX', 'ZDX']
      }
      if (year === '2012' && make === 'ACURA') {
        modelList = ['MDX', 'RDX', 'RL', 'TSX', 'ZDX']
      }
      if (year === '2011' && make === 'ACURA') {
        modelList = ['MDX', 'RDX', 'RL', 'TL', 'TSX', 'ZDX']
      }
      if (year === '2010' && make === 'ACURA') {
        modelList = ['MDX', 'RDX', 'RL', 'TL', 'TSX', 'ZDX']
      }
      if (year === '2009' && make === 'ACURA') {
        modelList = ['MDX', 'RDX', 'RL', 'TL', 'TSX']
      }
      if (year === '2008' && make === 'ACURA') {
        modelList = ['MDX', 'RDX', 'RL', 'TL', 'TSX']
      }
      if (year === '2007' && make === 'ACURA') {
        modelList = ['MDX', 'RDX', 'RL', 'TL', 'TSX']
      }
      if (year === '2006' && make === 'ACURA') {
        modelList = ['3.2TL', 'MDX', 'RL', 'TL', 'TSX']
      }
      if (year === '2005' && make === 'ACURA') {
        modelList = ['MDX', 'NSX', 'RL', 'RSX', 'TL', 'TSX']
      }
      if (year === '2004' && make === 'ACURA') {
        modelList = ['3.5RL', 'MDX', 'NSX', 'RSX', 'TL', 'TSX']
      }
      if (year === '2003' && make === 'ACURA') {
        modelList = ['3.2CL', '3.2TL', '3.5RL', 'MDX', 'NSX', 'RSX']
      }
      if (year === '2002' && make === 'ACURA') {
        modelList = ['3.2CL', '3.2TL', '3.5RL', 'MDX', 'NSX', 'RSX']
      }
      if (year === '2001' && make === 'ACURA') {
        modelList = ['3.2CL', '3.2TL', '3.5RL', 'INTEGRA', 'MDX', 'NSX']
      }
      if (year === '2000' && make === 'ACURA') {
        modelList = ['3.2TL', '3.5RL', 'INTEGRA',  'NSX']
      }
      if (year === '1999' && make === 'ACURA') {
        modelList = ['2.3CL', '3.0CL', '3.2TL',  '3.5RL', 'INTEGRA', 'NSX', 'SLX']
      }
      if (year === '1998' && make === 'ACURA') {
        modelList = ['2.3CL', '2.5TL', '3.0CL',  '3.2TL', '3.5RL', 'INTEGRA', 'NSX', 'SLX']
      }
      if (year === '1997' && make === 'ACURA') {
        modelList = ['2.5TL',  '3.2TL', '3.5RL', 'INTEGRA', 'NSX', 'SLX']
      }

      // AUDI MODELS //
      if (year === '2019' && make === 'AUDI') {
        modelList = ['A3',  'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7', 'Q8', 'RS5', 'S3', 'S4', 'SQ5', 'TT', 'TTS']
      }
      if (year === '2018' && make === 'AUDI') {
        modelList = ['A3',  'A4', 'A4 ALLROAD', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7', 'Q8', 'RS5', 'S3', 'S4', 'SQ5', 'TT', 'TTS']
      }
      if (year === '2017' && make === 'AUDI') {
        modelList = ['A3',  'A4', 'A4 ALLROAD', 'A5', 'A6', 'A7', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'RS3', 'RS5', 'S3', 'S4', 'SQ5', 'TT', 'TTS']
      }
      if (year === '2016' && make === 'AUDI') {
        modelList = ['A3',  'A4', 'A4 ALLROAD', 'A5', 'A6', 'A7', 'A8', 'Q3', 'Q5', 'RS7', 'S3', 'S4','S5', 'S6', 'S7', 'SQ5', 'TT', 'TTS']
      }
      if (year === '2015' && make === 'AUDI') {
        modelList = ['A3',  'A4', 'A4 ALLROAD', 'A5', 'A6', 'A7', 'A8', 'Q3', 'Q5', 'Q7',  'R8', 'RS5', 'RS7',  'S3', 'S4','S5', 'S6', 'S7', 'SQ5', 'TT', 'TTS']
      }
      if (year === '2014' && make === 'AUDI') {
        modelList = ['A3', 'A4 ALLROAD', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7',  'R8', 'RS5', 'RS7', 'S4','S5', 'S6', 'S7', 'S8', 'SQ5', 'TT', 'TTS']
      }
      if (year === '2013' && make === 'AUDI') {
        modelList = ['A3', 'A4', 'A4 ALLROAD', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7', 'RS5', 'S4','S5', 'S6', 'S7', 'S8', 'TT', 'TT RS', 'TTS']
      }
      if (year === '2012' && make === 'AUDI') {
        modelList = ['A3', 'A4', 'A4 ALLROAD', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7', 'RS5', 'S4','S5', 'S6', 'S7', 'S8', 'TT', 'TT RS', 'TTS']
      }
      if (year === '2011' && make === 'AUDI') {
        modelList = ['A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q5', 'Q7', 'R8', 'S4', 'S5', 'S6', 'TT', 'TTS']
      }
      if (year === '2010' && make === 'AUDI') {
        modelList = ['A3', 'A4', 'A5', 'A6', 'A8', 'Q5', 'Q7', 'R8', 'S4', 'S5', 'S6', 'TT', 'TTS']
      }
      if (year === '2009' && make === 'AUDI') {
        modelList = ['A3', 'A4', 'A5', 'A6', 'A8', 'Q5', 'Q7', 'R8', 'S4', 'S5', 'S6', 'S8', 'TT', 'TTS']
      }
      if (year === '2008' && make === 'AUDI') {
        modelList = ['A3', 'A4', 'A5', 'A6', 'A8', 'Q7', 'R8','RS4', 'S4', 'S5', 'S6', 'S8', 'TT']
      }
      if (year === '2007' && make === 'AUDI') {
        modelList = ['A3', 'A4', 'A5', 'A6', 'A8', 'Q7', 'RS4', 'S4', 'S6', 'S8']
      }
      if (year === '2006 ' && make === 'AUDI') {
        modelList = ['A3', 'A4', 'A6', 'A8', 'S4', 'TT']
      }
      if (year === '2005 ' && make === 'AUDI') {
        modelList = ['A4', 'A6', 'A8', 'ALLROAD', 'NEW S4', 'S4', 'TT']
      }
      if (year === '2004 ' && make === 'AUDI') {
        modelList = ['A4', 'A6', 'A8', 'ALLROAD', 'S4', 'TT']
      }
      if (year === '2003 ' && make === 'AUDI') {
        modelList = ['A4', 'A6', 'A8', 'ALLROAD', 'RS6', 'S6', 'S8', 'TT']
      }
      if (year === '2002 ' && make === 'AUDI') {
        modelList = ['A4', 'A6', 'A8', 'ALLROAD', 'S4', 'S6', 'S8', 'TT']
      }
      if (year === '2001 ' && make === 'AUDI') {
        modelList = ['A4', 'A6', 'A8', 'ALLROAD', 'S4', 'S8', 'TT']
      }
      if (year === '2000 ' && make === 'AUDI') {
        modelList = ['A4', 'A6', 'A8', 'S4', 'TT']
      }
      if (year === '1999 ' && make === 'AUDI') {
        modelList = ['A4', 'A6', 'A8']
      }
      if (year === '1998 ' && make === 'AUDI') {
        modelList = ['A4', 'A6', 'A8', 'CABRIOLET']
      }
      if (year === '1997 ' && make === 'AUDI') {
        modelList = ['A4', 'A6', 'A8', 'CABRIOLET']
      }
      if (year === '2019' && make === 'BMW') {
        modelList = ['230I', '230XI', '330I', '330XI', '340XI', '430I', '430XI', '440I', '440XI', '530', '530E', '530XE', '540', '640', '650', '740', '750', 'ALPINA B6', 'ALPINA B7', 'I3', 'I8', 'M2', 'M240I', 'M240XI', 'M4', 'M5', 'M550XI', 'M6', 'M760', 'M850X', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z4']
      }
      if (year === '2018' && make === 'BMW') {
        modelList = ['230I', '230XI', '320', '328', '330', '330E', '340', '430I', '430XI', '440I', '440XI', '530', '530E', '530XE', '540', '540XD', '640', '650', '740', '750', 'ALPINA B6', 'ALPINA B7', 'I3', 'M2', 'M240I', 'M240XI', 'M3', 'M4', 'M5', 'M550X', 'M6', 'M760', 'X1', 'X2','X3', 'X4', 'X5', 'X6']
      }
      if (year === '2017' && make === 'BMW') {
        modelList = ['230I', '230XI', '320', '328', '330', '330E', '340', '430I', '430XI', '440I', '440XI', '530', '535', '540', '550', '640', '650', '740', '750', 'ALPINA B6', 'ALPINA B', 'I3', 'I8', 'M2', 'M240I', 'M240XI', 'M3', 'M4', 'M6', 'X1', 'X2', 'X3', 'X4','X5', 'X6']
      }
      if (year === '2016' && make === 'BMW') {
        modelList = ['228', '320', '328', '330E', '335', '340', '428', '435', '528', '535', '550', '640', '650', '740', '750', 'ACTIVEHYBRID 5', 'ALPINA B6', 'I3', 'I8', 'M2', 'M235I', 'M235XI', 'M3', 'M4', 'M5', 'M6', 'M760', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'Z4']
      }
      if (year === '2015' && make === 'BMW') {
        modelList = ['228', '320', '328', '335', '428', '435', '528', '535', '550', '640', '650', '740', '750', '760',  'ACTIVEHYBRID 3', 'ACTIVEHYBRID 5', 'ACTIVEHYBRID 7', 'ALPINA B6', 'ALPINA B7', 'I3', 'I8', 'M2', 'M235I', 'M235XI', 'M3', 'M4', 'M5', 'M6', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'Z4']
      }
      if (year === '2014' && make === 'BMW') {
        modelList = ['228', '320', '328', '335', '428', '435', '528', '535', '550', '640', '650', '740', '750', '760',  'ACTIVEHYBRID 3', 'ACTIVEHYBRID 5', 'ACTIVEHYBRID 7', 'ALPINA B6', 'ALPINA B7', 'I3', 'I8', 'M2', 'M235I', 'M5', 'M6', 'X1', 'X3', 'X5', 'X6', 'Z4']
      }
      if (year === '2013' && make === 'BMW') {
        modelList = ['128', '135', '320', '328', '335', '525', '535', '550', '640', '650', '740', '750', '760',  'ACTIVEHYBRID 3', 'ALPINA B7', 'M3', 'M5', 'M6', 'X1', 'X3', 'X5', 'X6', 'Z4']
      }
      if (year === '2012' && make === 'BMW') {
        modelList = ['128', '135', '328', '335', '528', '535', '550', '640', '650', '740', '750', '760', 'ALPINA B7', 'M3', 'M5', 'M6', 'X1', 'X3', 'X5', 'X6', 'Z4']
      }
      if (year === '2011' && make === 'BMW') {
        modelList = ['128', '135', '1M', '328', '335', '528', '535', '550', '740', '750', '760', 'ACTIVE E', 'ALPINA B7', 'M3', 'X3', 'X5', 'X6', 'Z4']
      }
      if (year === '2010' && make === 'BMW') {
        modelList = ['128', '135', '328', '335', '528', '535', '550', '650', '740', '750', '760', 'M3', 'M5', 'M6', 'X3', 'X5', 'X6', 'Z4']
      }
      if (year === '2009' && make === 'BMW') {
        modelList = ['128', '135', '328', '335', '528', '535', '550', '650', '740', '750', '760', 'M3', 'M5', 'M6', 'X3', 'X5', 'X6', 'Z4']
      }
      if (year === '2008' && make === 'BMW') {
        modelList = ['128', '135', '328', '335', '528', '535', '550', '650', '740', '750', '760', 'ALPINA B7', 'M', 'M3', 'M5', 'M6', 'X3', 'X5', 'X6', 'Z4']
      }
      if (year === '2007' && make === 'BMW') {
        modelList = ['328', '335', '525', '530', '550', '650', '750', '760', 'ALPINA B7', 'M', 'M5', 'M6', 'X3', 'X5', 'Z4']
      }
      if (year === '2006' && make === 'BMW') {
        modelList = ['325', '330', '525', '530', '550', '650', '750', '760', 'M', 'M3', 'M5', 'M6', 'X3', 'X5', 'Z4']
      }
      if (year === '2005' && make === 'BMW') {
        modelList = ['325', '330', '525', '530', '545', '645', '745', '760', 'M', 'M3', 'M5', 'M6', 'X3', 'X5', 'Z4']
      }
      if (year === '2004' && make === 'BMW') {
        modelList = ['325', '330', '525', '530', '545', '645', '745', '760', 'M3', 'X3', 'X5', 'Z4']
      }
      if (year === '2003' && make === 'BMW') {
        modelList = ['325', '330', '525', '530', '540', '745', '760', 'M3', 'M5', 'X5', 'Z4', 'Z8']
      }
      if (year === '2002' && make === 'BMW') {
        modelList = ['325', '330', '525', '530','540', '745', 'M', 'M3', 'M5', 'X5', 'Z3', 'Z8']
      }
      if (year === '2001' && make === 'BMW') {
        modelList = ['325', '330', '525', '530', '540', '740', '750', 'M', 'M3', 'M5', 'X5', 'Z3', 'Z8']
      }
      if (year === '2000' && make === 'BMW') {
        modelList = ['323', '328', '528', '540', '740', '750', 'M', 'M5', 'X5', 'Z3', 'Z8']
      }
      if (year === '1999' && make === 'BMW') {
        modelList = ['318', '323', '328', '528', '540', '740', '750', 'M', 'M3', 'Z3']
      }
      if (year === '1998' && make === 'BMW') {
        modelList = ['18', '323', '328', '528', '540', '740', '750', 'M', 'M3', 'Z3']
      }
      if (year === '1997' && make === 'BMW') {
        modelList = ['318', '328', '528', '540', '740', '750', '840', '850', 'M3', 'Z3']
      }
      if (year === '2019' && make === 'BUICK') {
        modelList = ['CASCADA', 'ENCLAVE', 'ENCORE', 'ENVISION', 'LACROSSE', 'REGAL', 'REGAL TOURX']
      }
      if (year === '2018' && make === 'BUICK') {
        modelList = ['CASCADA', 'ENCLAVE', 'ENCORE', 'ENVISION', 'LACROSSE', 'REGAL', 'REGAL TOURX']
      }
      if (year === '2017' && make === 'BUICK') {
        modelList = ['CASCADA', 'ENCLAVE', 'ENCORE', 'ENVISION', 'LACROSSE', 'REGAL', 'VERANO']
      }
      if (year === '2016' && make === 'BUICK') {
        modelList = ['CASCADA', 'ENCLAVE', 'ENCORE', 'ENVISION', 'LACROSSE', 'REGAL', 'VERANO']
      }
      if (year === '2015' && make === 'BUICK') {
        modelList = ['ENCLAVE', 'ENCORE', 'LACROSSE', 'REGAL', 'VERANO']
      }
      if (year === '2014' && make === 'BUICK') {
        modelList = ['ENCLAVE', 'ENCORE', 'LACROSSE', 'REGAL', 'VERANO']
      }
      if (year === '2013' && make === 'BUICK') {
        modelList = ['ENCLAVE', 'ENCORE', 'LACROSSE', 'REGAL', 'VERANO']
      }
      if (year === '2012' && make === 'BUICK') {
        modelList = ['ENCLAVE', 'LACROSSE', 'REGAL', 'VERANO']
      }
      if (year === '2011' && make === 'BUICK') {
        modelList = ['ENCLAVE', 'LACROSSE', 'LUCERNE', 'REGAL']
      }
      if (year === '2010' && make === 'BUICK') {
        modelList = ['ENCLAVE', 'LACROSSE', 'LUCERNE']
      }
      if (year === '2009' && make === 'BUICK') {
        modelList = ['ENCLAVE', 'LACROSSE', 'LUCERNE']
      }
      if (year === '2008' && make === 'BUICK') {
        modelList = ['ENCLAVE', 'LACROSSE', 'LUCERNE']
      }
      if (year === '2007' && make === 'BUICK') {
        modelList = ['LACROSSE', 'LUCERNE', 'RAINIER', 'RENDEZVOUS', 'TERRAZA']
      }
      if (year === '2006' && make === 'BUICK') {
        modelList = ['LACROSSE', 'LUCERNE', 'RAINIER', 'RENDEZVOUS', 'TERRAZA']
      }
      if (year === '2005' && make === 'BUICK') {
        modelList = ['CENTURY', 'LACROSSE', 'LESABRE', 'PARK AVENUE', 'RAINIER', 'RENDEZVOUS', 'TERRAZA']
      }
      if (year === '2004' && make === 'BUICK') {
        modelList = ['CENTURY', 'LESABRE', 'PARK AVENUE', 'RAINIER', 'REGAL', 'RENDEZVOUS']
      }
      if (year === '2003' && make === 'BUICK') {
        modelList = ['CENTURY', 'LESABRE', 'PARK AVENUE', 'REGAL', 'RENDEZVOUS']
      }
      if (year === '2002' && make === 'BUICK') {
        modelList = ['CENTURY', 'LESABRE', 'PARK AVENUE', 'REGAL', 'RENDEZVOUS']
      }
      if (year === '2001' && make === 'BUICK') {
        modelList = ['CENTURY', 'LESABRE', 'PARK AVENUE', 'REGAL']
      }
      if (year === '2000' && make === 'BUICK') {
        modelList = ['CENTURY', 'LESABRE', 'PARK AVENUE', 'REGAL']
      }
      if (year === '1999' && make === 'BUICK') {
        modelList = ['CENTURY', 'LESABRE', 'PARK AVENUE', 'REGAL', 'RIVIERA']
      }
      if (year === '1998' && make === 'BUICK') {
        modelList = ['CENTURY', 'LESABRE', 'PARK AVENUE', 'REGAL', 'RIVIERA', 'SKYLARK']
      }
      if (year === '1997' && make === 'BUICK') {
        modelList = ['CENTURY', 'LESABRE', 'PARK AVENUE', 'REGAL', 'RIVIERA', 'SKYLARK']
      }
      if (year === '2019' && make === 'CADILLAC') {
        modelList = ['ATS', 'ATS-V', 'CT6', 'CTS', 'CTS-V', 'ESCALADE', 'XT4', 'XT5', 'XTS']
      }
      if (year === '2018' && make === 'CADILLAC') {
        modelList = ['ATS', 'ATS-V', 'CT6', 'CTS', 'CTS-V', 'ESCALADE', 'XT5', 'XTS']
      }
      if (year === '2017' && make === 'CADILLAC') {
        modelList = ['ATS', 'ATS-V', 'CT6', 'CTS', 'CTS-V', 'ESCALADE', 'XT5', 'XTS']
      }
      if (year === '2016' && make === 'CADILLAC') {
        modelList = ['ATS', 'ATS-V', 'CT6', 'CTS', 'CTS-V', 'ELR', 'ESCALADE', 'SRX', 'XTS']
      }
      if (year === '2015' && make === 'CADILLAC') {
        modelList = ['ATS', 'CTS', 'CTS-V', 'ELR', 'ESCALADE', 'SRX', 'XTS']
      }
      if (year === '2014' && make === 'CADILLAC') {
        modelList = ['ATS', 'CTS', 'CTS-V', 'ELR', 'ESCALADE', 'SRX', 'XTS']
      }
      if (year === '2013' && make === 'CADILLAC') {
        modelList = ['ATS', 'CTS', 'CTS-V', 'ESCALADE', 'SRX', 'XTS']
      }
      if (year === '2012' && make === 'CADILLAC') {
        modelList = ['CTS', 'CTS-V', 'ESCALADE', 'SRX']
      }
      if (year === '2011' && make === 'CADILLAC') {
        modelList = ['CTS', 'CTS-V', 'DTS', 'ESCALADE', 'SRX', 'STS']
      }
      if (year === '2010' && make === 'CADILLAC') {
        modelList = ['CTS', 'CTS-V', 'DTS', 'ESCALADE', 'SRX', 'STS']
      }
      if (year === '2009' && make === 'CADILLAC') {
        modelList = ['CTS', 'CTS-V', 'DTS', 'ESCALADE', 'SRX', 'STS', 'STS-V', 'XLR', 'XLR-V']
      }
      if (year === '2008' && make === 'CADILLAC') {
        modelList = ['CTS', 'DTS', 'ESCALADE', 'SRX', 'STS', 'STS-V', 'XLR', 'XLR-V']
      }
      if (year === '2007' && make === 'CADILLAC') {
        modelList = ['CTS', 'CTS-V', 'DTS', 'ESCALADE', 'SRX', 'STS', 'STS-V', 'XLR', 'XLR-V']
      }
      if (year === '2006' && make === 'CADILLAC') {
        modelList = ['CTS', 'CTS-V', 'DTS', 'ESCALADE', 'SRX', 'STS', 'STS-V', 'XLR', 'XLR-V']
      }
      if (year === '2005' && make === 'CADILLAC') {
        modelList = ['CTS', 'CTS-V', 'DEVILLE', 'ESCALADE', 'SRX', 'STS', 'XLR']
      }
      if (year === '2004' && make === 'CADILLAC') {
        modelList = ['CTS', 'CTS-V', 'DEVILLE', 'ESCALADE', 'SEVILLE', 'SRX', 'XLR']
      }
      if (year === '2003' && make === 'CADILLAC') {
        modelList = ['CTS', 'DEVILLE', 'ESCALADE', 'SEVILLE']
      }
      if (year === '2002' && make === 'CADILLAC') {
        modelList = [ 'DEVILLE', 'ELDORADO', 'ESCALADE', 'SEVILLE']
      }
      if (year === '2001' && make === 'CADILLAC') {
        modelList = ['CATERA', 'DEVILLE', 'ELDORADO', 'SEVILLE']
      }
      if (year === '2000' && make === 'CADILLAC') {
        modelList = ['CATERA', 'DEVILLE', 'ELDORADO', 'ESCALADE', 'SEVILLE']
      }
      if (year === '1999' && make === 'CADILLAC') {
        modelList = ['CATERA', 'DEVILLE', 'ELDORADO', 'ESCALADE', 'SEVILLE']
      }
      if (year === '1998' && make === 'CADILLAC') {
        modelList = ['CATERA', 'DEVILLE', 'ELDORADO', 'SEVILLE']
      }
      if (year === '1997' && make === 'CADILLAC') {
        modelList = ['CATERA', 'DEVILLE', 'ELDORADO', 'SEVILLE']
      }

      //Chevy Models//
      if (year === '2019' && make === 'CHEVROLET') {
        modelList = ['BLAZER', 'BOLT EV', 'CAMARO', 'COLORADO', 'CORVETTE', 'CRUZE', 'EQUINOX', 'EXPRESS G2500', 'EXPRESS G3500', 'IMPALA', 'MALIBU', 'SILVERADO', 'SILVERADO LD', 'SONIC', 'SPARK', 'SUBURBAN', 'TAHOE', 'TRAVERSE', 'TRAX', 'VOLT']
      }
      if (year === '2018' && make === 'CHEVROLET') {
        modelList = ['BOLT EV', 'CAMARO', 'COLORADO', 'CORVETTE', 'CRUZE', 'EQUINOX', 'EXPRESS G2500', 'EXPRESS G3500', 'IMPALA', 'MALIBU', 'SILVERADO', 'SONIC', 'SPARK', 'SUBURBAN', 'TAHOE', 'TRAVERSE', 'TRAX', 'VOLT']
      }
      if (year === '2017' && make === 'CHEVROLET') {
        modelList = ['BOLT EV', 'CAMARO', 'CAPRICE', 'COLORADO', 'CORVETTE', 'CRUZE', 'EQUINOX', 'EXPRESS G2500', 'IMPALA', 'MALIBU', 'SILVERADO', 'SONIC', 'SPARK', 'SS', 'SUBURBAN', 'TAHOE', 'TRAVERSE', 'TRAX', 'VOLT']
      }
      if (year === '2016' && make === 'CHEVROLET') {
        modelList = ['CAMARO', 'CAPRICE', 'COLORADO', 'CORVETTE', 'CRUZE', 'CRUZE LIMITED', 'EQUINOX', 'EXPRESS G2500', 'IMPALA', 'IMPALA LIMITED', 'MALIBU', 'MALIBU LIMITED', 'SILVERADO', 'SONIC', 'SPARK', 'SPARK EV', 'SS', 'SUBURBAN', 'TAHOE', 'TRAVERSE', 'TRAX', 'VOLT']
      }
      if (year === '2015' && make === 'CHEVROLET') {
        modelList = ['CAMARO', 'CAPRICE', 'CAPTIVA', 'COLORADO', 'CORVETTE', 'CRUZE', 'EQUINOX', 'EXPRESS G2500', 'IMPALA', 'IMPALA LIMITED', 'MALIBU', 'SILVERADO', 'SONIC', 'SPARK', 'SPARK EV', 'SS', 'SUBURBAN', 'TAHOE', 'TRAVERSE', 'TRAX', 'VOLT']
      }
      if (year === '2014' && make === 'CHEVROLET') {
        modelList = ['CAMARO', 'CAPRICE', 'CAPTIVA', 'CORVETTE', 'CRUZE', 'EQUINOX', 'EXPRESS G1500', 'EXPRESS G2500', 'IMPALA', 'IMPALA LIMITED', 'MALIBU', 'SILVERADO', 'SONIC', 'SPARK', 'SPARK EV', 'SS', 'SUBURBAN', 'TAHOE', 'TRAVERSE', 'VOLT']
      }
      if (year === '2013' && make === 'CHEVROLET') {
        modelList = ['AVALANCHE', 'CAMARO', 'CAPRICE', 'CAPTIVA', 'CORVETTE', 'CRUZE', 'EQUINOX', 'EXPRESS G1500', 'EXPRESS G2500', 'IMPALA', 'MALIBU', 'SILVERADO', 'SONIC', 'SPARK', 'SUBURBAN', 'TAHOE', 'TRAVERSE', 'VOLT']
      }
      if (year === '2012' && make === 'CHEVROLET') {
        modelList = ['AVALANCHE', 'CAMARO', 'CAPRICE', 'CAPTIVA', 'COLORADO', 'CORVETTE', 'CRUZE', 'EQUINOX', 'EXPRESS G1500', 'EXPRESS G2500', 'IMPALA', 'MALIBU', 'SILVERADO', 'SONIC', 'SUBURBAN', 'TAHOE', 'TRAVERSE', 'VOLT']
      }
      if (year === '2011' && make === 'CHEVROLET') {
        modelList = ['AVALANCHE', 'AVEO', 'CAMARO', 'CAPRICE', 'COLORADO', 'CORVETTE', 'CRUZE', 'EQUINOX', 'EXPRESS G1500', 'EXPRESS G2500', 'HHR', 'IMPALA', 'MALIBU', 'SILVERADO', 'SUBURBAN', 'TAHOE', 'TRAVERSE', 'VOLT']
      }
      if (year === '2010' && make === 'CHEVROLET') {
        modelList = ['AVALANCHE', 'AVEO', 'CAMARO', 'COBALT', 'COLORADO', 'CORVETTE', 'EQUINOX', 'EXPRESS G1500', 'EXPRESS G2500', 'HHR', 'IMPALA', 'MALIBU', 'SILVERADO', 'SUBURBAN', 'TAHOE', 'TRAVERSE']
      }
      if (year === '2009' && make === 'CHEVROLET') {
        modelList = ['AVALANCHE', 'AVEO', 'COBALT', 'COLORADO', 'CORVETTE', 'EQUINOX', 'EXPRESS G1500', 'EXPRESS G2500', 'HHR', 'IMPALA', 'MALIBU', 'SILVERADO', 'SUBURBAN', 'TAHOE', 'TRAILBLAZER', 'TRAVERSE']
      }
      if (year === '2008' && make === 'CHEVROLET') {
        modelList = ['AVALANCHE', 'AVEO', 'COBALT', 'COLORADO', 'CORVETTE', 'EQUINOX', 'EXPRESS G1500', 'EXPRESS G2500', 'HHR', 'IMPALA', 'MALIBU', 'SILVERADO', 'SUBURBAN', 'TAHOE', 'TRAILBLAZER', 'UPLANDER']
      }
      if (year === '2007' && make === 'CHEVROLET') {
        modelList = ['AVALANCHE', 'AVEO', 'COBALT', 'COLORADO', 'CORVETTE', 'EQUINOX', 'EXPRESS G1500', 'EXPRESS G2500', 'HHR', 'IMPALA', 'MALIBU', 'MONTE CARLO', 'SILVERADO', 'SUBURBAN', 'TAHOE', 'TRAILBLAZER', 'UPLANDER']
      }
      if (year === '2006' && make === 'CHEVROLET') {
        modelList = ['AVALANCHE', 'AVEO', 'COBALT', 'COLORADO', 'CORVETTE', 'EQUINOX', 'EXPRESS G1500', 'EXPRESS G2500', 'HHR', 'IMPALA', 'MALIBU', 'MONTE CARLO', 'SILVERADO', 'SSR', 'SUBURBAN', 'TAHOE', 'TRAILBLAZER', 'UPLANDER']
      }
      if (year === '2005' && make === 'CHEVROLET') {
        modelList = ['ASTRO', 'AVALANCHE', 'AVEO', 'BLAZER', 'CAVALIER', 'CLASSIC', 'COBALT', 'COLORADO', 'CORVETTE', 'EQUINOX', 'EXPRESS G1500', 'EXPRESS G2500', 'IMPALA', 'MALIBU', 'MONTE CARLO', 'SILVERADO', 'SSR', 'SUBURBAN', 'TAHOE', 'TRAILBLAZER', 'UPLANDER', 'VENTURE']
      }
      if (year === '2004' && make === 'CHEVROLET') {
        modelList = ['ASTRO', 'AVALANCHE', 'AVEO', 'BLAZER', 'CAVALIER', 'CLASSIC', 'COLORADO', 'CORVETTE', 'EXPRESS G1500', 'EXPRESS G2500', 'IMPALA', 'MALIBU', 'MONTE CARLO', 'S TRUCK', 'SILVERADO', 'SSR', 'SUBURBAN', 'TAHOE', 'TRACKER', 'TRAILBLAZER', 'VENTURE']
      }
      if (year === '2003' && make === 'CHEVROLET') {
        modelList = ['ASTRO', 'AVALANCHE', 'BLAZER', 'CAVALIER', 'CORVETTE', 'EXPRESS G1500', 'EXPRESS G2500', 'IMPALA', 'MALIBU', 'MONTE CARLO', 'S TRUCK', 'SILVERADO', 'SSR', 'SUBURBAN', 'TAHOE', 'TRACKER', 'TRAILBLAZER', 'VENTURE']
      }
      if (year === '2002' && make === 'CHEVROLET') {
        modelList = ['ASTRO', 'AVALANCHE', 'BLAZER', 'CAMARO', 'CAVALIER', 'CORVETTE', 'EXPRESS G1500', 'EXPRESS G2500', 'GEO PRIZM', 'IMPALA', 'MALIBU', 'MONTE CARLO', 'S TRUCK', 'SILVERADO', 'SUBURBAN', 'TAHOE', 'TRACKER', 'TRAILBLAZER', 'VENTURE']
      }
      if (year === '2001' && make === 'CHEVROLET') {
        modelList = ['ASTRO', 'BLAZER', 'CAMARO', 'CAVALIER', 'CORVETTE', 'EXPRESS G1500', 'EXPRESS G2500', 'GEO PRIZM', 'IMPALA', 'LUMINA', 'MALIBU', 'METRO', 'MONTE CARLO', 'S TRUCK', 'SILVERADO', 'SUBURBAN', 'TAHOE', 'TRACKER', 'VENTURE']
      }
      if (year === '2000' && make === 'CHEVROLET') {
        modelList = ['ASTRO', 'BLAZER', 'CAMARO', 'CAVALIER', 'CORVETTE', 'EXPRESS G1500', 'EXPRESS G2500', 'GEO PRIZM', 'GMT-400', 'IMPALA', 'LUMINA', 'MALIBU', 'METRO', 'MONTE CARLO', 'S TRUCK', 'S10', 'SILVERADO', 'SUBURBAN', 'TAHOE', 'TRACKER', 'VENTURE']
      }
      if (year === '1999' && make === 'CHEVROLET') {
        modelList = ['ASTRO', 'BLAZER', 'CAMARO', 'CAVALIER', 'CORVETTE', 'EXPRESS G1500', 'EXPRESS G2500', 'GEO PRIZM', 'GMT-400', 'LUMINA', 'MALIBU', 'METRO', 'MONTE CARLO', 'S TRUCK', 'S10', 'SILVERADO', 'SUBURBAN', 'TAHOE', 'TRACKER', 'VENTURE']
      }
      if (year === '1998' && make === 'CHEVROLET') {
        modelList = ['ASTRO', 'BLAZER', 'CAMARO', 'CAVALIER', 'CORVETTE', 'EXPRESS G1500', 'EXPRESS G2500', 'GEO PRIZM', 'GMT-400', 'LUMINA', 'MALIBU', 'METRO', 'MONTE CARLO', 'S TRUCK', 'SUBURBAN', 'TAHOE', 'TRACKER', 'VENTURE']
      }
      if (year === '1997' && make === 'CHEVROLET') {
        modelList = ['ASTRO', 'BLAZER', 'CAMARO', 'CAVALIER', 'CORVETTE', 'EXPRESS G1500', 'EXPRESS G2500', 'GMT-400', 'LUMINA', 'MALIBU', 'MONTE CARLO', 'S TRUCK', 'SUBURBAN', 'TAHOE', 'VENTURE']
      }

      //Chrysler Models//
      if (year === '2019' && make === 'CHRYSLER') {
        modelList = ['300', '300C', 'PACIFICA']
      }
      if (year === '2018' && make === 'CHRYSLER') {
        modelList = ['300', '300C', 'PACIFICA']
      }
      if (year === '2017' && make === 'CHRYSLER') {
        modelList = ['200', '300', '300C', 'PACIFICA']
      }
      if (year === '2016' && make === 'CHRYSLER') {
        modelList = ['200', '300', '300C', 'TOWN & COUNTRY']
      }
      if (year === '2015' && make === 'CHRYSLER') {
        modelList = ['200', '300', '300C', 'TOWN & COUNTRY']
      }
      if (year === '2014' && make === 'CHRYSLER') {
        modelList = ['200', '300', '300C', 'TOWN & COUNTRY']
      }
      if (year === '2013' && make === 'CHRYSLER') {
        modelList = ['200', '300', '300C', 'TOWN & COUNTRY']
      }
      if (year === '2012' && make === 'CHRYSLER') {
        modelList = ['200', '300', '300C', 'TOWN & COUNTRY']
      }
      if (year === '2011' && make === 'CHRYSLER') {
        modelList = ['200', '300', '300C', 'TOWN & COUNTRY']
      }
      if (year === '2010' && make === 'CHRYSLER') {
        modelList = ['300', '300C', 'PT CRUISER', 'SEBRING', 'TOWN & COUNTRY']
      }
      if (year === '2009' && make === 'CHRYSLER') {
        modelList = ['300', '300C', 'ASPEN', 'PT CRUISER', 'SEBRING', 'TOWN & COUNTRY']
      }
      if (year === '2008' && make === 'CHRYSLER') {
        modelList = ['300', '300C', 'ASPEN', 'CROSSFIRE', 'PACIFICA', 'PT CRUISER', 'SEBRING', 'TOWN & COUNTRY']
      }
      if (year === '2007' && make === 'CHRYSLER') {
        modelList = ['300', '300C', 'ASPEN', 'CROSSFIRE', 'PACIFICA', 'PT CRUISER', 'SEBRING', 'TOWN & COUNTRY']
      }
      if (year === '2006' && make === 'CHRYSLER') {
        modelList = ['300', '300C', 'CROSSFIRE', 'PACIFICA', 'PT CRUISER', 'SEBRING', 'TOWN & COUNTRY']
      }
      if (year === '2005' && make === 'CHRYSLER') {
        modelList = ['300', '300C', 'CROSSFIRE', 'PACIFICA', 'PT CRUISER', 'SEBRING', 'TOWN & COUNTRY']
      }
      if (year === '2004' && make === 'CHRYSLER') {
        modelList = ['300M', 'CONCORDE', 'CROSSFIRE', 'PACIFICA', 'PT CRUISER', 'SEBRING', 'TOWN & COUNTRY']
      }
      if (year === '2003' && make === 'CHRYSLER') {
        modelList = ['300M', 'CONCORDE', 'PT CRUISER', 'SEBRING', 'TOWN & COUNTRY', 'VOYAGER']
      }
      if (year === '2002' && make === 'CHRYSLER') {
        modelList = ['300M', 'CONCORDE', 'PROWLER', 'PT CRUISER', 'SEBRING', 'TOWN & COUNTRY', 'VOYAGER']
      }
      if (year === '2001' && make === 'CHRYSLER') {
        modelList = ['300M', 'CONCORDE', 'LHS', 'PROWLER', 'PT CRUISER', 'SEBRING', 'TOWN & COUNTRY', 'VOYAGER']
      }
      if (year === '2000' && make === 'CHRYSLER') {
        modelList = ['300M', 'CIRRUS', 'CONCORDE', 'GRAND VOYAGER', 'LHS', 'SEBRING', 'TOWN & COUNTRY', 'VOYAGER']
      }
      if (year === '1999' && make === 'CHRYSLER') {
        modelList = ['300M', 'CIRRUS', 'CONCORDE', 'LHS', 'SEBRING', 'TOWN & COUNTRY']
      }
      if (year === '1998' && make === 'CHRYSLER') {
        modelList = ['CIRRUS', 'CONCORDE', 'SEBRING', 'TOWN & COUNTRY']
      }
      if (year === '1997' && make === 'CHRYSLER') {
        modelList = ['CIRRUS', 'CONCORDE', 'LHS', 'SEBRING', 'TOWN & COUNTRY']
      }

      //Dodge Models//
      if (year === '2019' && make === 'DODGE') {
        modelList = ['CHALLENGER', 'CHARGER', 'DURANGO', 'GRAND CARAVAN', 'JOURNEY']
      }
      if (year === '2018' && make === 'DODGE') {
        modelList = ['CHALLENGER', 'CHARGER', 'DURANGO', 'GRAND CARAVAN', 'JOURNEY']
      }
      if (year === '2017' && make === 'DODGE') {
        modelList = ['CHALLENGER', 'CHARGER', 'DURANGO', 'GRAND CARAVAN', 'JOURNEY', 'VIPER']
      }
      if (year === '2016' && make === 'DODGE') {
        modelList = ['CHALLENGER', 'CHARGER', 'DART', 'DURANGO', 'GRAND CARAVAN', 'JOURNEY', 'VIPER']
      }
      if (year === '2015' && make === 'DODGE') {
        modelList = ['CHALLENGER', 'CHARGER', 'DART', 'DURANGO', 'GRAND CARAVAN', 'JOURNEY', 'VIPER']
      }
      if (year === '2014' && make === 'DODGE') {
        modelList = ['AVENGER', 'CHALLENGER', 'CHARGER', 'DART', 'DURANGO', 'GRAND CARAVAN', 'JOURNEY', 'VIPER']
      }
      if (year === '2013' && make === 'DODGE') {
        modelList = ['AVENGER', 'CHALLENGER', 'CHARGER', 'DART', 'DURANGO', 'GRAND CARAVAN', 'JOURNEY', 'VIPER']
      }
      if (year === '2012' && make === 'DODGE') {
        modelList = ['AVENGER', 'CALIBER', 'CHALLENGER', 'CHARGER', 'DURANGO', 'GRAND CARAVAN', 'JOURNEY', 'RAM 1500', 'RAM 2500']
      }
      if (year === '2011' && make === 'DODGE') {
        modelList = ['AVENGER', 'CALIBER', 'CHALLENGER', 'CHARGER', 'DAKOTA', 'DURANGO', 'GRAND CARAVAN', 'JOURNEY', 'NITRO', 'RAM 1500', 'RAM 2500']
      }
      if (year === '2010' && make === 'DODGE') {
        modelList = ['AVENGER', 'CALIBER', 'CHALLENGER', 'CHARGER', 'DAKOTA', 'GRAND CARAVAN', 'JOURNEY', 'NITRO', 'RAM 1500', 'RAM 2500', 'VIPER']
      }
      if (year === '2009' && make === 'DODGE') {
        modelList = ['AVENGER', 'CALIBER', 'CHALLENGER', 'CHARGER', 'DAKOTA', 'DURANGO', 'GRAND CARAVAN', 'JOURNEY', 'NITRO', 'RAM 1500', 'RAM 2500', 'SPRINTER', 'VIPER']
      }
      if (year === '2008' && make === 'DODGE') {
        modelList = ['AVENGER', 'CALIBER', 'CHALLENGER', 'CHARGER', 'DAKOTA', 'DURANGO', 'GRAND CARAVAN', 'MAGNUM', 'NITRO', 'RAM 1500', 'RAM 2500', 'SPRINTER', 'VIPER']
      }
      if (year === '2007' && make === 'DODGE') {
        modelList = ['CALIBER', 'CARAVAN', 'CHARGER', 'DAKOTA', 'DURANGO', 'GRAND CARAVAN', 'MAGNUM', 'NITRO', 'RAM 1500', 'RAM 2500', 'SPRINTER']
      }
      if (year === '2006' && make === 'DODGE') {
        modelList = ['CARAVAN', 'CHARGER', 'DAKOTA', 'DURANGO', 'GRAND CARAVAN', 'MAGNUM', 'RAM 1500', 'RAM 2500', 'RAM SRT10', 'SPRINTER', 'STRATUS', 'VIPER']
      }
      if (year === '2005' && make === 'DODGE') {
        modelList = ['CARAVAN', 'DAKOTA', 'DURANGO', 'GRAND CARAVAN', 'MAGNUM', 'NEON', 'RAM 1500', 'RAM 2500', 'RAM SRT10', 'SPRINTER', 'STRATUS', 'VIPER']
      }
      if (year === '2004' && make === 'DODGE') {
        modelList = ['CARAVAN', 'DAKOTA', 'DURANGO', 'GRAND CARAVAN', 'INTREPID', 'NEON', 'RAM 1500', 'RAM 2500', 'RAM SRT10', 'STRATUS', 'VIPER']
      }
      if (year === '2003' && make === 'DODGE') {
        modelList = ['CARAVAN', 'DAKOTA', 'DURANGO', 'GRAND CARAVAN', 'INTREPID', 'NEON', 'RAM 1500', 'RAM 2500', 'STRATUS', 'VIPER']
      }
      if (year === '2002' && make === 'DODGE') {
        modelList = ['CARAVAN', 'DAKOTA', 'DURANGO', 'GRAND CARAVAN', 'INTREPID', 'NEON', 'RAM 1500', 'RAM 2500', 'RAM WAGON', 'STRATUS', 'VIPER']
      }
      if (year === '2001' && make === 'DODGE') {
        modelList = ['CARAVAN', 'DAKOTA', 'DURANGO', 'GRAND CARAVAN', 'INTREPID', 'NEON', 'RAM 1500', 'RAM 2500', 'RAM WAGON', 'STRATUS', 'VIPER']
      }
      if (year === '2000' && make === 'DODGE') {
        modelList = ['AVENGER', 'CARAVAN', 'DAKOTA', 'DURANGO', 'GRAND CARAVAN', 'INTREPID', 'NEON', 'RAM 1500', 'RAM 2500', 'RAM WAGON', 'STRATUS', 'VIPER']
      }
      if (year === '1999' && make === 'DODGE') {
        modelList = ['AVENGER', 'CARAVAN', 'DAKOTA', 'DURANGO', 'GRAND CARAVAN', 'INTREPID', 'NEON', 'RAM 1500', 'RAM 2500', 'RAM WAGON', 'STRATUS', 'VIPER']
      }
      if (year === '1998' && make === 'DODGE') {
        modelList = ['AVENGER', 'CARAVAN', 'DAKOTA', 'DURANGO', 'GRAND CARAVAN', 'INTREPID', 'NEON', 'RAM 1500', 'RAM 2500', 'RAM WAGON', 'STRATUS', 'VIPER']
      }
      if (year === '1997' && make === 'DODGE') {
        modelList = ['AVENGER', 'CARAVAN', 'DAKOTA', 'GRAND CARAVAN', 'INTREPID', 'NEON', 'RAM 1500', 'RAM 2500', 'RAM WAGON', 'STRATUS', 'VIPER']
      }

      //Ford Models//
      if (year === '2019' && make === 'FORD') {
        modelList = ['ECOSPORT', 'EDGE', 'ESCAPE', 'EXPEDITION', 'EXPLORER', 'F150', 'F250', 'F450', 'FIESTA', 'FLEX', 'FUSION', 'GT', 'MUSTANG', 'RANGER', 'TAURUS', 'TRANSIT', 'TRANSIT CONNECT'] }

      if (year === '2018' && make === 'FORD') {
        modelList = ['C-MAX', 'ECOSPORT', 'EDGE', 'ESCAPE', 'EXPEDITION', 'EXPLORER', 'F150', 'F250', 'FIESTA', 'FLEX', 'FOCUS', 'FUSION', 'GT', 'MUSTANG', 'TAURUS', 'TRANSIT', 'TRANSIT CONNECT'] }

      if (year === '2017' && make === 'FORD') {
        modelList = ['C-MAX', 'EDGE', 'ESCAPE', 'EXPEDITION', 'EXPLORER', 'F150', 'F250', 'FIESTA', 'FLEX', 'FOCUS', 'FUSION', 'GT', 'MUSTANG', 'TAURUS', 'TRANSIT', 'TRANSIT CONNECT'] }

      if (year === '2016' && make === 'FORD') {
        modelList = ['C-MAX', 'EDGE', 'ESCAPE', 'EXPEDITION', 'EXPLORER', 'F150', 'F250', 'FIESTA', 'FLEX', 'FOCUS', 'FUSION', 'MUSTANG', 'TAURUS', 'TRANSIT', 'TRANSIT CONNECT'] }

      if (year === '2015' && make === 'FORD') {
        modelList = ['C-MAX', 'EDGE', 'ESCAPE', 'EXPEDITION', 'EXPLORER', 'F150', 'F250', 'FIESTA', 'FLEX', 'FOCUS', 'FUSION', 'MUSTANG', 'TAURUS', 'TRANSIT', 'TRANSIT CONNECT'] }

      if (year === '2014' && make === 'FORD') {
        modelList = ['C-MAX', 'ECONOLINE', 'EDGE', 'ESCAPE', 'EXPEDITION', 'EXPLORER', 'F150', 'F250', 'FIESTA', 'FLEX', 'FOCUS', 'FUSION', 'MUSTANG', 'TAURUS', 'TRANSIT CONNECT'] }

      if (year === '2013' && make === 'FORD') {
        modelList = ['C-MAX', 'ECONOLINE', 'EDGE', 'ESCAPE', 'EXPEDITION', 'EXPLORER', 'F150', 'F250', 'FIESTA', 'FLEX', 'FOCUS', 'FUSION', 'MUSTANG', 'TAURUS', 'TRANSIT CONNECT'] }

      if (year === '2012' && make === 'FORD') {
        modelList = ['ECONOLINE', 'EDGE', 'ESCAPE', 'EXPEDITION', 'EXPLORER', 'F150', 'F250', 'FIESTA', 'FLEX', 'FOCUS', 'FUSION', 'MUSTANG', 'TAURUS', 'TRANSIT CONNECT'] }

      if (year === '2011' && make === 'FORD') {
        modelList = ['CROWN VICTORIA', 'ECONOLINE', 'EDGE', 'ESCAPE', 'EXPEDITION', 'EXPLORER', 'F150', 'F250', 'FIESTA', 'FLEX', 'FOCUS', 'FUSION', 'MUSTANG', 'TAURUS', 'TRANSIT CONNECT'] }

      if (year === '2010' && make === 'FORD') {
        modelList = ['CROWN VICTORIA', 'ECONOLINE', 'EDGE', 'ESCAPE', 'EXPEDITION', 'EXPLORER', 'EXPLORER SPORT TRAC', 'F150', 'F250', 'FLEX', 'FOCUS', 'FUSION', 'MUSTANG', 'RANGER', 'TAURUS', 'TRANSIT CONNECT'] }

      if (year === '2009' && make === 'FORD') {
        modelList = ['CROWN VICTORIA', 'ECONOLINE', 'EDGE', 'ESCAPE', 'EXPEDITION', 'EXPLORER', 'EXPLORER SPORT TRAC', 'F150', 'F250', 'FLEX', 'FOCUS', 'FUSION', 'MUSTANG', 'RANGER', 'TAURUS', 'TAURUS X'] }

      if (year === '2008' && make === 'FORD') {
        modelList = ['CROWN VICTORIA', 'ECONOLINE', 'EDGE', 'ESCAPE', 'EXPEDITION', 'EXPLORER', 'EXPLORER SPORT TRAC', 'F150', 'F250', 'FOCUS', 'FUSION', 'MUSTANG', 'RANGER', 'TAURUS', 'TAURUS X'] }

      if (year === '2007' && make === 'FORD') {
        modelList = ['CROWN VICTORIA', 'ECONOLINE', 'EDGE', 'ESCAPE', 'EXPEDITION', 'EXPLORER', 'EXPLORER SPORT TRAC', 'F150', 'F250', 'FIVE HUNDRED', 'FOCUS', 'FREESTAR', 'FREESTYLE', 'FUSION', 'MUSTANG', 'RANGER', 'TAURUS'] }

      if (year === '2006' && make === 'FORD') {
        modelList = ['CROWN VICTORIA', 'ECONOLINE', 'ESCAPE', 'EXPEDITION', 'EXPLORER', 'F150', 'F250', 'FIVE HUNDRED', 'FOCUS', 'FREESTAR', 'FREESTYLE', 'FUSION', 'GT', 'MUSTANG', 'RANGER', 'TAURUS'] }

      if (year === '2005' && make === 'FORD') {
        modelList = ['CROWN VICTORIA', 'ECONOLINE', 'ESCAPE', 'EXCURSION', 'EXPEDITION', 'EXPLORER', 'EXPLORER SPORT TRAC', 'F150', 'F250', 'FIVE HUNDRED', 'FOCUS', 'FREESTAR', 'FREESTYLE', 'GT', 'MUSTANG', 'RANGER', 'TAURUS', 'THUNDERBIRD'] }

      if (year === '2004' && make === 'FORD') {
        modelList = ['CROWN VICTORIA', 'ECONOLINE', 'ESCAPE', 'EXCURSION', 'EXPEDITION', 'EXPLORER', 'EXPLORER SPORT TRAC', 'F150', 'F150 HERITAGE', 'F250', 'FOCUS', 'FREESTAR', 'GT', 'MUSTANG', 'RANGER', 'TAURUS', 'THUNDERBIRD'] }

      if (year === '2003' && make === 'FORD') {
        modelList = ['CROWN VICTORIA', 'ECONOLINE', 'ESCAPE', 'ESCORT', 'EXCURSION', 'EXPEDITION', 'EXPLORER', 'EXPLORER SPORT TRAC', 'F150', 'F250', 'FOCUS', 'MUSTANG', 'RANGER', 'TAURUS', 'THUNDERBIRD', 'WINDSTAR'] }

      if (year === '2002' && make === 'FORD') {
        modelList = ['CROWN VICTORIA', 'ECONOLINE', 'ESCAPE', 'ESCORT', 'EXCURSION', 'EXPEDITION', 'EXPLORER', 'EXPLORER SPORT TRAC', 'F150', 'F250', 'FOCUS', 'MUSTANG', 'RANGER', 'TAURUS', 'THUNDERBIRD', 'WINDSTAR'] }

      if (year === '2001' && make === 'FORD') {
        modelList = ['CROWN VICTORIA', 'ECONOLINE', 'ESCAPE', 'ESCORT', 'EXCURSION', 'EXPEDITION', 'EXPLORER', 'EXPLORER SPORT TRAC', 'F150', 'F250', 'FOCUS', 'MUSTANG', 'RANGER', 'TAURUS', 'WINDSTAR'] }

      if (year === '2000' && make === 'FORD') {
        modelList = ['CONTOUR', 'CROWN VICTORIA', 'ECONOLINE', 'ESCORT', 'EXCURSION', 'EXPEDITION', 'EXPLORER', 'F150', 'F250', 'FOCUS', 'MUSTANG', 'RANGER', 'TAURUS', 'WINDSTAR'] }

      if (year === '1999' && make === 'FORD') {
        modelList = ['CONTOUR', 'CROWN VICTORIA', 'ECONOLINE', 'ESCORT', 'EXPEDITION', 'EXPLORER', 'F150', 'F250', 'FOCUS', 'MUSTANG', 'RANGER', 'TAURUS', 'WINDSTAR'] }

      if (year === '1998' && make === 'FORD') {
        modelList = ['CONTOUR', 'CROWN VICTORIA', 'ECONOLINE', 'ESCORT', 'EXPEDITION', 'EXPLORER', 'F150', 'F250', 'FOCUS', 'MUSTANG', 'RANGER', 'TAURUS', 'WINDSTAR'] }

      if (year === '1997' && make === 'FORD') {
        modelList = ['AEROSTAR', 'ASPIRE', 'CONTOUR', 'CROWN VICTORIA', 'ECONOLINE', 'ESCORT', 'EXPEDITION', 'EXPLORER', 'F150', 'F250', 'FOCUS', 'MUSTANG', 'PROBE', 'RANGER', 'TAURUS', 'THUNDERBIRD', 'WINDSTAR'] }

      //GMC Models//
      if (year === '2019' && make === 'GMC') {
        modelList = ['ACADIA', 'CANYON', 'SAVANA', 'SIERRA', 'SIERRA LIMITED', 'TERRAIN', 'YUKON', 'YUKON XL'] }

      if (year === '2018' && make === 'GMC') {
        modelList = ['ACADIA', 'CANYON', 'SAVANA', 'SIERRA', 'TERRAIN', 'YUKON', 'YUKON XL'] }

      if (year === '2017' && make === 'GMC') {
        modelList = ['ACADIA', 'ACADIA LIMITED', 'CANYON', 'SAVANA', 'SIERRA', 'TERRAIN', 'YUKON', 'YUKON XL'] }

      if (year === '2016' && make === 'GMC') {
        modelList = ['ACADIA', 'CANYON', 'SAVANA', 'SIERRA', 'TERRAIN', 'YUKON', 'YUKON XL'] }

      if (year === '2015' && make === 'GMC') {
        modelList = ['ACADIA', 'CANYON', 'SAVANA', 'SIERRA', 'TERRAIN', 'YUKON', 'YUKON XL'] }

      if (year === '2014' && make === 'GMC') {
        modelList = ['ACADIA', 'SAVANA', 'SIERRA', 'TERRAIN', 'YUKON', 'YUKON XL'] }

      if (year === '2013' && make === 'GMC') {
        modelList = ['ACADIA', 'SAVANA', 'SIERRA', 'TERRAIN', 'YUKON', 'YUKON XL'] }

      if (year === '2012' && make === 'GMC') {
        modelList = ['ACADIA', 'CANYON', 'SAVANA', 'SIERRA', 'TERRAIN', 'YUKON', 'YUKON XL'] }

      if (year === '2011' && make === 'GMC') {
        modelList = ['ACADIA', 'CANYON', 'SAVANA', 'SIERRA', 'TERRAIN', 'YUKON', 'YUKON XL'] }

      if (year === '2010' && make === 'GMC') {
        modelList = ['ACADIA', 'CANYON', 'SAVANA', 'SIERRA', 'TERRAIN', 'YUKON', 'YUKON XL'] }

      if (year === '2009' && make === 'GMC') {
        modelList = ['ACADIA', 'CANYON', 'ENVOY', 'SAVANA', 'SIERRA', 'YUKON', 'YUKON XL'] }

      if (year === '2008' && make === 'GMC') {
        modelList = ['ACADIA', 'CANYON', 'ENVOY', 'NEW SIERRA', 'SAVANA', 'SIERRA', 'YUKON', 'YUKON XL'] }

      if (year === '2007' && make === 'GMC') {
        modelList = ['ACADIA', 'CANYON', 'ENVOY', 'NEW SIERRA', 'SAVANA', 'SIERRA', 'YUKON', 'YUKON XL'] }

      if (year === '2006' && make === 'GMC') {
        modelList = ['CANYON', 'ENVOY', 'NEW SIERRA', 'SAVANA', 'SIERRA', 'YUKON', 'YUKON XL'] }

      if (year === '2005' && make === 'GMC') {
        modelList = ['CANYON', 'ENVOY', 'NEW SIERRA', 'SAFARI', 'SAVANA', 'SIERRA', 'YUKON', 'YUKON XL'] }

      if (year === '2004' && make === 'GMC') {
        modelList = ['CANYON', 'ENVOY', 'NEW SIERRA', 'SAFARI', 'SAVANA', 'SIERRA', 'SONOMA', 'YUKON', 'YUKON XL'] }

      if (year === '2003' && make === 'GMC') {
        modelList = ['ENVOY', 'NEW SIERRA', 'SAFARI', 'SAVANA', 'SIERRA', 'SONOMA', 'YUKON', 'YUKON XL'] }

      if (year === '2002' && make === 'GMC') {
        modelList = ['DENALI', 'ENVOY', 'NEW SIERRA', 'SAFARI', 'SAVANA', 'SIERRA', 'SONOMA', 'YUKON', 'YUKON XL'] }

      if (year === '2001' && make === 'GMC') {
        modelList = ['DENALI', 'JIMMY', 'NEW SIERRA', 'SAFARI', 'SAVANA', 'SIERRA', 'SONOMA', 'YUKON', 'YUKON XL'] }

      if (year === '2000' && make === 'GMC') {
        modelList = ['DENALI', 'JIMMY', 'JIMMY/ENVOY', 'NEW SIERRA', 'SAFARI', 'SAVANA', 'SIERRA', 'SONOMA', 'YUKON', 'YUKON XL'] }

      if (year === '1999' && make === 'GMC') {
        modelList = ['DENALI', 'ENVOY', 'JIMMY', 'NEW SIERRA', 'SAFARI', 'SAVANA', 'SIERRA', 'SONOMA', 'SUBURBAN', 'YUKON'] }

      if (year === '1998' && make === 'GMC') {
        modelList = ['ENVOY', 'JIMMY', 'SAFARI', 'SAVANA', 'SIERRA', 'SONOMA', 'SUBURBAN', 'YUKON'] }

      if (year === '1997' && make === 'GMC') {
        modelList = ['JIMMY', 'SAFARI', 'SAVANA', 'SIERRA', 'SONOMA', 'SUBURBAN', 'YUKON'] }

      //Hyundai Models//
      if (year === '2019' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'ELANTRA', 'ELANTRA GT', 'IONIQ', 'KONA', 'NEXO', 'SANTA FE', 'SANTA FE XL', 'SONATA', 'TUSCON', 'VELOSTER', 'VELOSTER N'] }

      if (year === '2018' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'ELANTRA', 'ELANTRA GT', 'IONIQ', 'KONA', 'SANTA FE', 'SANTA FE SPORT', 'SONATA', 'TUSCON'] }

      if (year === '2017' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'AZERA', 'ELANTRA', 'ELANTRA GT', 'IONIQ', 'SANTA FE', 'SANTA FE SPORT', 'SONATA', 'TUSCON', 'VELOSTER'] }

      if (year === '2016' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'AZERA', 'ELANTRA', 'ELANTRA GT', 'EQUUS', 'GENESIS', ' GENESIS COUPE', 'SANTA FE', 'SANTA FE SPORT', 'SONATA', 'TUSCON', 'VELOSTER'] }

      if (year === '2015' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'AZERA', 'ELANTRA', 'ELANTRA COUPE', 'ELANTRA GT', 'EQUUS', 'GENESIS', ' GENESIS COUPE', 'SANTA FE', 'SANTA FE SPORT', 'SONATA', 'TUSCON', 'VELOSTER'] }

      if (year === '2014' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'AZERA', 'ELANTRA', 'ELANTRA COUPE', 'ELANTRA GT', 'EQUUS', 'GENESIS', ' GENESIS COUPE', 'SANTA FE', 'SANTA FE SPORT', 'SONATA', 'TUSCON', 'VELOSTER'] }

      if (year === '2013' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'AZERA', 'ELANTRA', 'ELANTRA COUPE', 'ELANTRA GT', 'EQUUS', 'GENESIS', ' GENESIS COUPE', 'SANTA FE', 'SANTA FE SPORT', 'SONATA', 'TUSCON', 'VELOSTER'] }

      if (year === '2012' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'AZERA', 'ELANTRA', 'ELANTRA TOURING', 'EQUUS', 'GENESIS', ' GENESIS COUPE', 'SANTA FE', 'SONATA', 'TUSCON', 'VELOSTER', 'VERACRUZ'] }

      if (year === '2011' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'AZERA', 'ELANTRA', 'ELANTRA TOURING', 'EQUUS', 'GENESIS', ' GENESIS COUPE', 'SANTA FE', 'SONATA', 'TUSCON', 'VERACRUZ'] }

      if (year === '2010' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'AZERA', 'ELANTRA', 'ELANTRA TOURING', 'GENESIS', ' GENESIS COUPE', 'SANTA FE', 'SONATA', 'TUSCON', 'VERACRUZ'] }

      if (year === '2009' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'AZERA', 'ELANTRA', 'ELANTRA TOURING', 'GENESIS', 'SANTA FE', 'SONATA', 'TUSCON', 'VERACRUZ'] }

      if (year === '2008' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'AZERA', 'ELANTRA', 'ENTOURAGE', 'SANTA FE', 'SONATA', 'TIBURON', 'TUSCON', 'VERACRUZ'] }

      if (year === '2007' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'AZERA', 'ELANTRA', 'ENTOURAGE', 'SANTA FE', 'SONATA', 'TIBURON', 'TUSCON', 'VERACRUZ'] }

      if (year === '2006' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'AZERA', 'ELANTRA', 'SANTA FE', 'SONATA', 'TIBURON', 'TUSCON'] }

      if (year === '2005' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'ELANTRA', 'SANTA FE', 'SONATA', 'TIBURON', 'TUSCON', 'XG'] }

      if (year === '2004' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'ELANTRA', 'SANTA FE', 'SONATA', 'TIBURON', 'XG'] }

      if (year === '2003' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'ELANTRA', 'SANTA FE', 'SONATA', 'TIBURON', 'XG'] }

      if (year === '2002' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'ELANTRA', 'SANTA FE', 'SONATA', 'TIBURON', 'XG'] }

      if (year === '2001' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'ELANTRA', 'SANTA FE', 'SONATA', 'TIBURON', 'XG'] }

      if (year === '2000' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'ELANTRA', 'SONATA', 'TIBURON'] }

      if (year === '1999' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'ELANTRA', 'SONATA', 'TIBURON'] }

      if (year === '1998' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'ELANTRA', 'SONATA', 'TIBURON'] }

      if (year === '1997' && make === 'HYUNDAI'){
        modelList = ['ACCENT', 'ELANTRA', 'SONATA', 'TIBURON'] }


      //Jeep Models//
      if (year === '2019' && make === 'JEEP'){
        modelList = ['CHEROKEE', 'COMPASS', 'GRAND CHEROKEE', 'RENEGADE', 'WRANGLER', 'WRANGLER UNLIMITED'] }

      if (year === '2018' && make === 'JEEP'){
        modelList = ['CHEROKEE', 'COMPASS', 'GRAND CHEROKEE', 'RENEGADE', 'WRANGLER', 'WRANGLER UNLIMITED'] }

      if (year === '2017' && make === 'JEEP'){
        modelList = ['CHEROKEE', 'COMPASS', 'GRAND CHEROKEE', 'PATRIOT', 'RENEGADE', 'WRANGLER', 'WRANGLER UNLIMITED'] }

      if (year === '2016' && make === 'JEEP'){
        modelList = ['CHEROKEE', 'COMPASS', 'GRAND CHEROKEE', 'PATRIOT', 'RENEGADE', 'WRANGLER', 'WRANGLER UNLIMITED'] }

      if (year === '2015' && make === 'JEEP'){
        modelList = ['CHEROKEE', 'COMPASS', 'GRAND CHEROKEE', 'PATRIOT', 'RENEGADE', 'WRANGLER', 'WRANGLER UNLIMITED'] }

      if (year === '2014' && make === 'JEEP'){
        modelList = ['CHEROKEE', 'COMPASS', 'GRAND CHEROKEE', 'PATRIOT', 'WRANGLER', 'WRANGLER UNLIMITED'] }

      if (year === '2013' && make === 'JEEP'){
        modelList = ['COMPASS', 'GRAND CHEROKEE', 'PATRIOT', 'WRANGLER', 'WRANGLER UNLIMITED'] }

      if (year === '2012' && make === 'JEEP'){
        modelList = ['COMPASS', 'GRAND CHEROKEE', 'LIBERTY', 'PATRIOT', 'WRANGLER', 'WRANGLER UNLIMITED'] }

      if (year === '2011' && make === 'JEEP'){
        modelList = ['COMPASS', 'GRAND CHEROKEE', 'LIBERTY', 'PATRIOT', 'WRANGLER', 'WRANGLER UNLIMITED'] }

      if (year === '2010' && make === 'JEEP'){
        modelList = ['COMMANDER', 'COMPASS', 'GRAND CHEROKEE', 'LIBERTY', 'PATRIOT', 'WRANGLER', 'WRANGLER UNLIMITED'] }

      if (year === '2009' && make === 'JEEP'){
        modelList = ['COMMANDER', 'COMPASS', 'GRAND CHEROKEE', 'LIBERTY', 'PATRIOT', 'WRANGLER', 'WRANGLER UNLIMITED'] }

      if (year === '2008' && make === 'JEEP'){
        modelList = ['COMMANDER', 'COMPASS', 'GRAND CHEROKEE', 'LIBERTY', 'PATRIOT', 'WRANGLER', 'WRANGLER UNLIMITED'] }

      if (year === '2007' && make === 'JEEP'){
        modelList = ['COMMANDER', 'COMPASS', 'GRAND CHEROKEE', 'LIBERTY', 'PATRIOT', 'WRANGLER'] }

      if (year === '2006' && make === 'JEEP'){
        modelList = ['COMMANDER', 'GRAND CHEROKEE', 'LIBERTY', 'WRANGLER', 'WRANGLER/TJ'] }

      if (year === '2005' && make === 'JEEP'){
        modelList = ['GRAND CHEROKEE', 'LIBERTY', 'WRANGLER', 'WRANGLER/TJ'] }

      if (year === '2004' && make === 'JEEP'){
        modelList = ['GRAND CHEROKEE', 'LIBERTY', 'WRANGLER', 'WRANGLER/TJ'] }

      if (year === '2003' && make === 'JEEP'){
        modelList = ['GRAND CHEROKEE', 'LIBERTY', 'WRANGLER', 'WRANGLER/TJ'] }

      if (year === '2002' && make === 'JEEP'){
        modelList = ['GRAND CHEROKEE', 'LIBERTY', 'WRANGLER/TJ'] }

      if (year === '2001' && make === 'JEEP'){
        modelList = ['CHEROKEE', 'GRAND CHEROKEE', 'WRANGLER/TJ'] }

      if (year === '2000' && make === 'JEEP'){
        modelList = ['CHEROKEE', 'GRAND CHEROKEE', 'WRANGLER/TJ'] }

      if (year === '1999' && make === 'JEEP'){
        modelList = ['CHEROKEE', 'GRAND CHEROKEE', 'WRANGLER/TJ'] }

      if (year === '1998' && make === 'JEEP'){
        modelList = ['CHEROKEE', 'GRAND CHEROKEE', 'WRANGLER/TJ'] }

      if (year === '1997' && make === 'JEEP'){
        modelList = ['CHEROKEE', 'GRAND CHEROKEE', 'WRANGLER/TJ'] }

      // Honda Models//
      if (year === '2019' && make === 'HONDA'){
       modelList = ['ACCORD', 'CIVIC', 'CLARITY', 'CR-V', 'FIT', 'HR-V', 'INSIGHT', 'ODYSSEY', 'PASSPORT', 'PILOT', 'RIDGELINE'] }

      if (year === '2018' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC', 'CLARITY', 'CR-V', 'FIT', 'HR-V', 'ODYSSEY', 'PILOT', 'RIDGELINE'] }

      if (year === '2017' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC', 'CLARITY', 'CR-V', 'FIT', 'HR-V', 'ODYSSEY', 'PILOT', 'RIDGELINE'] }

      if (year === '2016' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'FIT', 'CR-Z', 'HR-V', 'ODYSSEY', 'PILOT', 'RIDGELINE']}
      if (year === '2015' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'FIT', 'CR-Z', 'CROSSTOUR', 'ODYSSEY', 'PILOT', 'RIDGELINE'] }
      if (year === '2014' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'FIT', 'CR-Z', 'CROSSTOUR', 'ODYSSEY', 'PILOT', 'RIDGELINE', 'FCX CLARITY', 'FIT EV', 'INSIGHT'] }
      if (year === '2013' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'FIT', 'CR-Z', 'CROSSTOUR', 'ODYSSEY', 'PILOT', 'RIDGELINE', 'FCX CLARITY', 'FIT EV', 'INSIGHT'] }
      if (year === '2012' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'FIT', 'CR-Z', 'CROSSTOUR', 'ODYSSEY', 'PILOT', 'RIDGELINE', 'FCX CLARITY', 'FIT EV', 'INSIGHT'] }
      if (year === '2011' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'FIT', 'CR-Z', 'ACCORD CROSSTOUR', 'ODYSSEY', 'PILOT', 'RIDGELINE', 'INSIGHT'] }
      if (year === '2010' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'FIT', 'ACCORD CROSSTOUR', 'ODYSSEY', 'PILOT', 'RIDGELINE', 'INSIGHT'] }
      if (year === '2009' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'FIT', 'ELEMENT', 'FCX CLARITY', 'ODYSSEY', 'PILOT', 'RIDGELINE', 'S2000'] }
      if (year === '2008' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'FIT', 'ELEMENT', 'FCX CLARITY', 'ODYSSEY', 'PILOT', 'RIDGELINE', 'S2000'] }
      if (year === '2007' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'FIT', 'ELEMENT', 'ODYSSEY', 'PILOT', 'RIDGELINE', 'S2000'] }
      if (year === '2006' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'ELEMENT', 'FCX', 'INSIGHT', 'ODYSSEY', 'PILOT', 'RIDGELINE', 'S2000'] }
      if (year === '2005' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'ELEMENT', 'FCX', 'INSIGHT', 'ODYSSEY', 'PILOT', 'S2000'] }
      if (year === '2004' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'ELEMENT', 'FCX', 'INSIGHT', 'ODYSSEY', 'PILOT', 'S2000'] }
      if (year === '2003' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'ELEMENT', 'FCX', 'INSIGHT', 'ODYSSEY', 'PILOT', 'S2000'] }
      if (year === '2002' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'INSIGHT', 'ODYSSEY', 'PASSPORT', 'S2000'] }
      if (year === '2001' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'INSIGHT', 'ODYSSEY', 'PASSPORT', 'PRELUDE', 'S2000'] }
      if (year === '2000' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'INSIGHT', 'ODYSSEY', 'PASSPORT', 'PRELUDE', 'S2000'] }
      if (year === '1999' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'EV PLUS', 'ODYSSEY', 'PASSPORT', 'PRELUDE'] }
      if (year === '1998' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'EV PLUS', 'ODYSSEY', 'PASSPORT', 'PRELUDE'] }
      if (year === '1997' && make === 'HONDA'){
        modelList = ['ACCORD', 'CIVIC',  'CR-V', 'EV PLUS', 'ODYSSEY', 'PASSPORT', 'PRELUDE'] }

      //Kia Models//
      if (year === '2019' && make === 'KIA'){
        modelList = ['CADENZA', 'FORTE',  'K900', 'NIRO', 'OPTIMA', 'RIO', 'SEDONA', 'SORENTO', 'SOUL', 'SOUL EV', 'SPORTAGE', 'STINGER'] }
      if (year === '2018' && make === 'KIA'){
        modelList = ['CADENZA', 'FORTE',  'K900', 'NIRO', 'OPTIMA', 'RIO', 'SEDONA', 'SORENTO', 'SOUL', 'SOUL EV', 'SPORTAGE', 'STINGER'] }
      if (year === '2017' && make === 'KIA'){
        modelList = ['CADENZA', 'FORTE',  'K900', 'NIRO', 'OPTIMA', 'RIO', 'SEDONA', 'SORENTO', 'SOUL', 'SOUL EV', 'SPORTAGE', ] }
      if (year === '2016' && make === 'KIA'){
        modelList = ['CADENZA', 'FORTE',  'K900', 'OPTIMA', 'RIO', 'SEDONA', 'SORENTO', 'SOUL', 'SOUL EV', 'SPORTAGE', ] }
      if (year === '2015' && make === 'KIA'){
        modelList = ['CADENZA', 'FORTE',  'K900', 'OPTIMA', 'RIO', 'SEDONA', 'SORENTO', 'SOUL', 'SOUL EV', 'SPORTAGE', ] }
      if (year === '2014' && make === 'KIA'){
        modelList = ['CADENZA', 'FORTE', 'OPTIMA', 'RIO', 'SEDONA', 'SORENTO', 'SOUL', 'SPORTAGE', ] }
      if (year === '2013' && make === 'KIA'){
        modelList = ['FORTE', 'OPTIMA', 'RIO', 'SORENTO', 'SOUL', 'SPORTAGE', ] }
      if (year === '2012' && make === 'KIA'){
        modelList = ['FORTE', 'OPTIMA', 'RIO', 'SEDONA', 'SORENTO', 'SOUL', 'SPORTAGE', ] }
      if (year === '2011' && make === 'KIA'){
        modelList = ['FORTE', 'OPTIMA', 'RIO', 'SEDONA', 'SORENTO', 'SOUL', 'SPORTAGE', ] }
      if (year === '2010' && make === 'KIA'){
        modelList = ['FORTE', 'OPTIMA', 'RIO', 'SEDONA', 'SORENTO', 'SOUL', 'SPORTAGE', ] }
      if (year === '2009' && make === 'KIA'){
        modelList = ['AMANTI', 'BORREGO', 'OPTIMA', 'RIO', 'SORENTO', 'RONDO', 'SEDONA', 'SPECTRA', 'SPORTAGE' ] }
      if (year === '2008' && make === 'KIA'){
        modelList = ['AMANTI', 'OPTIMA', 'RIO', 'SORENTO', 'RONDO', 'SEDONA', 'SPECTRA5', 'SPECTRA', 'SPORTAGE' ] }
      if (year === '2007' && make === 'KIA'){
        modelList = ['AMANTI', 'OPTIMA', 'RIO', 'SORENTO', 'RONDO', 'SEDONA', 'SPECTRA5', 'SPECTRA', 'SPORTAGE' ] }
      if (year === '2006' && make === 'KIA'){
        modelList = ['AMANTI', 'NEW SPECTRA', 'NEW SPORTAGE', 'OPTIMA', 'RIO', 'SEDONA', 'SORENTO', 'SPECTRA5' ] }
      if (year === '2005' && make === 'KIA'){
        modelList = ['AMANTI', 'NEW SPECTRA', 'NEW SPORTAGE', 'OPTIMA', 'RIO', 'SEDONA', 'SORENTO', 'SPECTRA5' ] }
      if (year === '2004' && make === 'KIA'){
        modelList = ['AMANTI', 'NEW SPECTRA', 'OPTIMA', 'RIO', 'SEDONA', 'SORENTO', 'SPECTRA' ] }
      if (year === '2003' && make === 'KIA'){
        modelList = ['OPTIMA', 'RIO', 'SEDONA', 'SORENTO', 'SPECTRA' ] }
      if (year === '2002' && make === 'KIA'){
        modelList = ['OPTIMA', 'RIO', 'SEDONA', 'SORENTO', 'SPECTRA','SPORTAGE' ] }
      if (year === '2001' && make === 'KIA'){
        modelList = ['OPTIMA', 'RIO', 'SEPHIA', 'SPECTRA','SPORTAGE' ] }
      if (year === '2000' && make === 'KIA'){
        modelList = ['SEPHIA', 'SPECTRA','SPORTAGE' ] }
      if (year === '1999' && make === 'KIA'){
        modelList = ['SEPHIA', 'SPORTAGE' ] }
      if (year === '1998' && make === 'KIA'){
        modelList = ['SEPHIA', 'SPORTAGE' ] }
      if (year === '1997' && make === 'KIA'){
        modelList = ['SEPHIA', 'SPORTAGE' ] }

      //Lexus Models//
      if (year === '2019' && make === 'LEXUS'){
        modelList = ['ES', 'GS', 'GS-F', 'GX', 'IS', 'LC' , 'LS', 'LX', 'RC', 'RC-F', 'RX', 'UX'] }
      if (year === '2018' && make === 'LEXUS'){
        modelList = ['ES', 'GS', 'GS-F', 'GX', 'IS', 'LC' , 'LS', 'LX', 'RC', 'RC-F', 'RX'] }
      if (year === '2017' && make === 'LEXUS'){
        modelList = ['CT', 'ES', 'GS', 'GS-F', 'GX', 'IS', 'LS', 'LX', 'NX', 'RC', 'RC-F', 'RX'] }
      if (year === '2016' && make === 'LEXUS'){
        modelList = ['CT', 'ES', 'GS', 'GS-F', 'GX', 'IS', 'LS', 'LX', 'NX', 'RC', 'RC-F', 'RX'] }
      if (year === '2015' && make === 'LEXUS'){
        modelList = ['CT', 'ES', 'GS', 'GX', 'IS', 'LS', 'LX', 'NX', 'RC', 'RC-F', 'RX'] }
      if (year === '2014' && make === 'LEXUS'){
        modelList = ['CT', 'ES', 'GS', 'GX', 'IS', 'LS', 'LX', 'RX'] }
      if (year === '2013' && make === 'LEXUS'){
        modelList = ['CT', 'ES', 'GS', 'GX', 'IS', 'LS', 'LX', 'RX'] }
      if (year === '2012' && make === 'LEXUS'){
        modelList = ['CT', 'ES', 'GX', 'HS', 'IS', 'LFA', 'LS','RX'] }
      if (year === '2011' && make === 'LEXUS'){
        modelList = ['CT', 'ES', 'GS', 'GX', 'HS', 'IS', 'LS','RX'] }
      if (year === '2010' && make === 'LEXUS'){
        modelList = ['ES', 'GS', 'GX', 'HS', 'IS', 'LS', 'LX', 'RX', 'SC'] }
      if (year === '2009' && make === 'LEXUS'){
        modelList = ['ES', 'GS', 'GX', 'IS', 'IS-F','LS', 'LX', 'RX', 'SC'] }
      if (year === '2008' && make === 'LEXUS'){
        modelList = ['ES', 'GS', 'GX', 'IS', 'IS-F','LS', 'LX', 'RX', 'SC'] }
      if (year === '2007' && make === 'LEXUS'){
        modelList = ['ES', 'GS', 'GX', 'IS', 'LS', 'LX', 'RX', 'SC'] }
      if (year === '2006' && make === 'LEXUS'){
        modelList = ['ES', 'GS', 'GX', 'IS', 'LS', 'LX', 'RX', 'SC'] }
      if (year === '2005' && make === 'LEXUS'){
        modelList = ['ES', 'GS', 'GX', 'IS', 'LS', 'LX', 'RX', 'SC'] }
      if (year === '2004' && make === 'LEXUS'){
        modelList = ['ES', 'GS', 'GX', 'IS', 'LS', 'LX', 'RX', 'SC'] }
      if (year === '2003' && make === 'LEXUS'){
        modelList = ['ES', 'GS', 'GX', 'IS', 'LS', 'LX', 'RX', 'SC'] }
      if (year === '2002' && make === 'LEXUS'){
        modelList = ['ES', 'GS', 'IS', 'LS', 'LX', 'RX', 'SC'] }
      if (year === '2001' && make === 'LEXUS'){
        modelList = ['ES', 'GS', 'IS', 'LS', 'LX', 'RX'] }
      if (year === '2000' && make === 'LEXUS'){
        modelList = ['ES', 'GS', 'LS', 'LX', 'RX', 'SC'] }
      if (year === '1999' && make === 'LEXUS'){
        modelList = ['ES', 'GS', 'LS', 'LX', 'RX', 'SC'] }
      if (year === '1998' && make === 'LEXUS'){
        modelList = ['ES', 'GS', 'LS', 'LX', 'RX', 'SC'] }
      if (year === '1997' && make === 'LEXUS'){
        modelList = ['ES', 'GS', 'LS', 'LX', 'SC'] }

      //Mazda Models//
      if (year === '2019' && make === 'MAZDA') {
        modelList = ['3', 'CX-3', 'CX-5', 'CX-9', 'MX-5 MIATA']
      }

      if (year === '2018' && make === 'MAZDA') {
        modelList = ['3', '6', 'CX-3', 'CX-5', 'CX-9', 'MX-5 MIATA']
      }

      if (year === '2017' && make === 'MAZDA') {
        modelList = ['3', '6', 'CX-3', 'CX-5', 'CX-9', 'MX-5 MIATA']
      }

      if (year === '2016' && make === 'MAZDA') {
        modelList = ['3', '6', 'CX-3', 'CX-5', 'CX-9', 'MAZDA 2', 'MX-5 MIATA']
      }

      if (year === '2015' && make === 'MAZDA') {
        modelList = ['3', '5', '6', 'CX-5', 'CX-9', 'MX-5 MIATA']
      }

      if (year === '2014' && make === 'MAZDA') {
        modelList = ['3', '5', '6', 'CX-5', 'CX-9', 'MAZDA 2', 'MX-5 MIATA']
      }

      if (year === '2013' && make === 'MAZDA') {
        modelList = ['3', '5', '6', 'CX-5', 'CX-9', 'MAZDA 2', 'MX-5 MIATA', 'SPEED']
      }

      if (year === '2012' && make === 'MAZDA') {
        modelList = ['3', '5', '6', 'CX-7', 'CX-9', 'MAZDA 2', 'MX-5 MIATA', 'SPEED']
      }

      if (year === '2011' && make === 'MAZDA') {
        modelList = ['3', '6', 'CX-7', 'CX-9', 'MAZDA 2', 'MX-5 MIATA', 'RX8', 'SPEED', 'TRIBUTE']
      }

      if (year === '2010' && make === 'MAZDA') {
        modelList = ['3', '5', '6', 'B2300', 'B4000', 'CX-7', 'CX-9', 'MX-5 MIATA', 'RX8', 'SPEED', 'TRIBUTE']
      }

      if (year === '2009' && make === 'MAZDA') {
        modelList = ['3', '5', '6', 'B2300', 'B4000', 'CX-7', 'CX-9', 'MX-5 MIATA', 'RX8', 'SPEED', 'TRIBUTE']
      }

      if (year === '2008' && make === 'MAZDA') {
        modelList = ['3', '5', '6', 'B2300', 'B3000', 'B4000', 'CX-7', 'CX-9', 'MX-5 MIATA', 'RX8', 'SPEED', 'TRIBUTE']
      }

      if (year === '2007' && make === 'MAZDA') {
        modelList = ['3', '5', '6', 'B2300', 'B3000', 'B4000', 'CX-7', 'CX-9', 'MX-5 MIATA', 'RX8', 'SPEED']
      }

      if (year === '2006' && make === 'MAZDA') {
        modelList = ['3', '5', '6', 'B2300', 'B3000', 'B4000', 'MPV', 'MX-5 MIATA', 'RX8', 'SPEED', 'TRIBUTE']
      }

      if (year === '2005' && make === 'MAZDA') {
        modelList = ['3', '6', 'B2300', 'B3000', 'B4000', 'MPV', 'MX-5 MIATA', 'RX8', 'TRIBUTE']
      }

      if (year === '2004' && make === 'MAZDA') {
        modelList = ['3', '6', 'B2300', 'B3000', 'B4000', 'MPV', 'MX-5 MIATA', 'RX8', 'TRIBUTE']
      }

      if (year === '2003' && make === 'MAZDA') {
        modelList = ['6', 'B2300', 'B3000', 'B4000', 'MPV', 'MX-5 MIATA', 'PROTEGE', 'TRIBUTE']
      }

      if (year === '2002' && make === 'MAZDA') {
        modelList = ['626', 'B2300', 'B3000', 'B4000', 'MILLENIA', 'MPV', 'MX-5 MIATA', 'PROTEGE', 'TRIBUTE']
      }

      if (year === '2001' && make === 'MAZDA') {
        modelList = ['626', 'B2300', 'B2500', 'B3000', 'B4000', 'MILLENIA', 'MPV', 'MX-5 MIATA', 'PROTEGE', 'TRIBUTE']
      }

      if (year === '2000' && make === 'MAZDA') {
        modelList = ['626', 'B2500', 'B3000', 'B4000', 'MILLENIA', 'MPV', 'MX-5 MIATA', 'PROTEGE']
      }

      if (year === '1999' && make === 'MAZDA') {
        modelList = ['626', 'B2500', 'B3000', 'B4000', 'MILLENIA', 'MX-5 MIATA', 'PROTEGE']
      }

      if (year === '1998' && make === 'MAZDA') {
        modelList = ['626', 'B2500', 'B3000', 'B4000', 'MILLENIA', 'MPV', 'PROTEGE']
      }

      if (year === '1997' && make === 'MAZDA') {
        modelList = ['626', 'B2500', 'B3000', 'B4000', 'MILLENIA', 'MPV', 'MX-5 MIATA', 'MX-6', 'PROTEGE']
      }

      // Mercedes Models//
      if (year === '2019' && make === 'MERCEDES') {
        modelList = ['A', 'AMG GT', 'C', 'CLA', 'CLS', 'E', 'G', 'GLA', 'GLC', 'GLC COUPE', 'GLE', 'GLE COUPE', 'GLS', 'METRIS', 'S', 'SL', 'SLC', 'SPRINTER']
      }
      if (year === '2018' && make === 'MERCEDES') {
        modelList = ['AMG GT', 'C', 'CLA', 'CLS', 'E', 'G', 'GLA', 'GLC', 'GLC COUPE', 'GLE', 'GLE COUPE', 'GLS', 'METRIS', 'S', 'SL', 'SLC']
      }
      if (year === '2017' && make === 'MERCEDES') {
        modelList = ['AMG GT', 'B', 'C', 'CLA', 'CLS', 'E', 'G', 'GLA', 'GLC', 'GLC COUPE', 'GLE', 'GLE COUPE', 'GLS', 'METRIS', 'S', 'SL', 'SLC']
      }
      if (year === '2016' && make === 'MERCEDES') {
        modelList = ['AMG GT', 'B', 'C', 'CLA', 'CLS', 'E', 'G', 'GL', 'GLA', 'GLC', 'GLE', 'GLE COUPE', 'METRIS', 'S', 'SL', 'SLK']
      }
      if (year === '2015' && make === 'MERCEDES') {
        modelList = ['B', 'C', 'CLA', 'CLS', 'E', 'G', 'GL', 'GLA', 'GLK', 'ML', 'S', 'SL', 'SLK', 'SLS']
      }
      if (year === '2014' && make === 'MERCEDES') {
        modelList = ['B', 'C', 'CL', 'CLA', 'CLS', 'E', 'G', 'GL', 'GLK', 'ML', 'S', 'SL', 'SLK', 'SLS']
      }
      if (year === '2013' && make === 'MERCEDES') {
        modelList = ['C', 'CL', 'CLS', 'E', 'G', 'GL', 'GLK', 'ML', 'S', 'SL', 'SLK', 'SLS', 'SPRINTER']
      }
      if (year === '2012' && make === 'MERCEDES') {
        modelList = ['B', 'C', 'CL', 'CLS', 'E', 'G', 'GL', 'GLK', 'ML', 'R', 'S', 'SL', 'SLK', 'SLS']
      }
      if (year === '2011' && make === 'MERCEDES') {
        modelList = ['B', 'C', 'CL', 'CLS', 'E', 'G', 'GL', 'GLK', 'ML', 'R', 'S', 'SL', 'SLK', 'SLS']
      }
      if (year === '2010' && make === 'MERCEDES') {
        modelList = ['C', 'CL', 'CLS', 'E', 'G', 'GL', 'GLK', 'ML', 'R', 'S', 'SLK', 'SPRINTER']
      }
      if (year === '2009' && make === 'MERCEDES') {
        modelList = ['C', 'CL', 'CLK', 'CLS', 'E', 'G', 'GL', 'ML', 'R', 'S', 'SL', 'SLK', 'SLR']
      }
      if (year === '2008' && make === 'MERCEDES') {
        modelList = ['C', 'CL', 'CLK', 'CLS', 'E', 'G', 'GL', 'ML', 'R', 'S', 'SL', 'SLK', 'SLR']
      }
      if (year === '2007' && make === 'MERCEDES') {
        modelList = ['C', 'CL', 'CLK', 'CLS', 'E', 'G', 'GL', 'ML', 'R', 'S', 'SL', 'SLK', 'SLR']
      }
      if (year === '2006' && make === 'MERCEDES') {        modelList = ['C', 'CL', 'CLK', 'CLS', 'E', 'G', 'ML', 'R', 'S', 'SL', 'SLK', 'SLR']
      }
      if (year === '2005' && make === 'MERCEDES') {
        modelList = ['C', 'CL', 'CLK', 'E', 'G', 'ML', 'S', 'SL', 'SLK', 'SLR']
      }
      if (year === '2004' && make === 'MERCEDES') {
        modelList = ['C', 'CL', 'CLK', 'E', 'G', 'ML', 'S', 'SL', 'SLK']
      }
      if (year === '2003' && make === 'MERCEDES') {
        modelList = ['C', 'CL', 'CLK', 'E', 'G', 'ML', 'S', 'SL', 'SLK']
      }
      if (year === '2002' && make === 'MERCEDES') {
        modelList = ['C', 'CL', 'CLK', 'E', 'G', 'ML', 'S', 'SL', 'SLK']
      }
      if (year === '2001' && make === 'MERCEDES') {
        modelList = ['C', 'CL', 'CLK', 'E', 'ML', 'S', 'SL', 'SLK']
      }
      if (year === '2000' && make === 'MERCEDES') {
        modelList = ['C', 'CL', 'CLK', 'E', 'ML', 'S', 'SL', 'SLK']
      }
      if (year === '1999' && make === 'MERCEDES') {
        modelList = ['C', 'CL', 'CLK', 'E', 'ML', 'S', 'SL', 'SLK']
      }
      if (year === '1998' && make === 'MERCEDES') {
        modelList = ['C', 'CL', 'CLK', 'E', 'ML', 'S', 'SL', 'SLK']
      }
      if (year === '1997' && make === 'MERCEDES') {
        modelList = ['C', 'E', 'S', 'SL']
      }

      // Mitsubishi Models//
      if (year === '2019' && make === 'MITSUBISHI') {
        modelList = ['ECLIPSE CROSS', 'MIRAGE', 'OUTLANDER', 'OUTLANDER SPORT']
      }
      if (year === '2018' && make === 'MITSUBISHI') {
        modelList = ['ECLIPSE CROSS', 'MIRAGE', 'OUTLANDER', 'OUTLANDER SPORT']
      }
      if (year === '2017' && make === 'MITSUBISHI') {
        modelList = ['I MIEV', 'LANCER', 'MIRAGE', 'OUTLANDER', 'OUTLANDER SPORT']
      }
      if (year === '2016' && make === 'MITSUBISHI') {
        modelList = ['I MIEV', 'LANCER', 'OUTLANDER', 'OUTLANDER SPORT']
      }
      if (year === '2015' && make === 'MITSUBISHI') {
        modelList = ['LANCER', 'MIRAGE', 'OUTLANDER', 'OUTLANDER SPORT']
      }
      if (year === '2014' && make === 'MITSUBISHI') {
        modelList = ['I MIEV', 'LANCER', 'MIRAGE', 'OUTLANDER', 'OUTLANDER SPORT']
      }
      if (year === '2013' && make === 'MITSUBISHI') {
        modelList = ['LANCER', 'OUTLANDER', 'OUTLANDER SPORT']
      }
      if (year === '2012' && make === 'MITSUBISHI') {
        modelList = ['ECLIPSE', 'GALANT', 'I MIEV', 'LANCER', 'OUTLANDER', 'OUTLANDER SPORT']
      }
      if (year === '2011' && make === 'MITSUBISHI') {
        modelList = ['ECLIPSE', 'ENDEAVOR', 'GALANT', 'LANCER', 'OUTLANDER', 'OUTLANDER SPORT']
      }
      if (year === '2010' && make === 'MITSUBISHI') {
        modelList = ['ECLIPSE', 'ENDEAVOR', 'GALANT', 'LANCER', 'OUTLANDER']
      }
      if (year === '2009' && make === 'MITSUBISHI') {
        modelList = ['ECLIPSE', 'ENDEAVOR', 'GALANT', 'LANCER', 'OUTLANDER', 'RAIDER']
      }
      if (year === '2008' && make === 'MITSUBISHI') {
        modelList = ['ECLIPSE', 'ENDEAVOR', 'GALANT', 'LANCER', 'OUTLANDER', 'RAIDER']
      }
      if (year === '2007' && make === 'MITSUBISHI') {
        modelList = ['ECLIPSE', 'ENDEAVOR', 'GALANT', 'LANCER', 'OUTLANDER', 'RAIDER']
      }
      if (year === '2006' && make === 'MITSUBISHI') {
        modelList = ['ECLIPSE', 'ENDEAVOR', 'GALANT', 'LANCER', 'MONTERO', 'OUTLANDER', 'RAIDER']
      }
      if (year === '2005' && make === 'MITSUBISHI') {
        modelList = ['ECLIPSE', 'ENDEAVOR', 'GALANT', 'LANCER', 'MONTERO', 'OUTLANDER']
      }
      if (year === '2004' && make === 'MITSUBISHI') {
        modelList = ['DIAMANTE', 'ECLIPSE', 'ENDEAVOR', 'GALANT', 'LANCER', 'MONTERO', 'OUTLANDER']
      }
      if (year === '2003' && make === 'MITSUBISHI') {
        modelList = ['DIAMANTE', 'ECLIPSE', 'GALANT', 'LANCER', 'MONTERO', 'OUTLANDER']
      }
      if (year === '2002' && make === 'MITSUBISHI') {
        modelList = ['DIAMANTE', 'ECLIPSE', 'GALANT', 'LANCER', 'MIRAGE', 'MONTERO']
      }
      if (year === '2001' && make === 'MITSUBISHI') {
        modelList = ['DIAMANTE', 'ECLIPSE', 'GALANT', 'MIRAGE', 'MONTERO']
      }
      if (year === '2000' && make === 'MITSUBISHI') {
        modelList = ['DIAMANTE', 'ECLIPSE', 'GALANT', 'MIRAGE', 'MONTERO']
      }
      if (year === '1999' && make === 'MITSUBISHI') {
        modelList = ['3000 GT', 'DIAMANTE', 'ECLIPSE', 'GALANT', 'MIRAGE', 'MONTERO']
      }
      if (year === '1998' && make === 'MITSUBISHI') {
        modelList = ['3000 GT', 'DIAMANTE', 'ECLIPSE', 'GALANT', 'MIRAGE', 'MONTERO']
      }
      if (year === '1997' && make === 'MITSUBISHI') {
        modelList = ['3000 GT', 'DIAMANTE', 'ECLIPSE', 'GALANT', 'MIRAGE', 'MONTERO']
      }

      // Nissan Models//
      if (year === '2019' && make === 'NISSAN') {
        modelList = ['370Z', 'ALTIMA', 'ARMADA', 'FRONTIER', 'GT-R', 'KICKS', 'LEAF', 'MAXIMA', 'MURANO', 'NV', 'NV200', 'PATHFINDER', 'ROGUE', 'ROGUE SPORT', 'SENTRA', 'TITAN', 'TITAN XD', 'VERSA', 'VERSA NOTE']
      }
      if (year === '2018' && make === 'NISSAN') {
        modelList = ['370Z', 'ALTIMA', 'ARMADA', 'FRONTIER', 'GT-R', 'KICKS', 'LEAF', 'MAXIMA', 'MURANO', 'NV', 'PATHFINDER', 'ROGUE', 'ROGUE SPORT', 'SENTRA', 'TITAN', 'TITAN XD', 'VERSA', 'VERSA NOTE']
      }
      if (year === '2017' && make === 'NISSAN') {
        modelList = ['370Z', 'ALTIMA', 'ARMADA', 'FRONTIER', 'GT-R', 'JUKE', 'LEAF', 'MAXIMA', 'MURANO', 'NV', 'NV200', 'PATHFINDER', 'QUEST', 'ROGUE', 'ROGUE SPORT', 'SENTRA', 'TITAN', 'TITAN XD', 'VERSA', 'VERSA NOTE']
      }
      if (year === '2016' && make === 'NISSAN') {
        modelList = ['370Z', 'ALTIMA', 'FRONTIER', 'GT-R', 'JUKE', 'LEAF', 'MAXIMA', 'MURANO', 'NV', 'NV200', 'PATHFINDER', 'QUEST', 'ROGUE', 'SENTRA', 'TITAN XD', 'VERSA', 'VERSA NOTE']
      }
      if (year === '2015' && make === 'NISSAN') {
        modelList = ['370Z', 'ALTIMA', 'ARMADA', 'FRONTIER', 'GT-R', 'JUKE', 'LEAF', 'MAXIMA', 'MURANO', 'NV', 'NV200', 'PATHFINDER', 'QUEST', 'ROGUE', 'ROGUE SELECT', 'SENTRA', 'TITAN', 'VERSA', 'VERSA NOTE', 'XTERRA']
      }
      if (year === '2014' && make === 'NISSAN') {
        modelList = ['370Z', 'ALTIMA', 'ARMADA', 'CUBE', 'FRONTIER', 'GT-R', 'JUKE', 'LEAF', 'MAXIMA', 'MURANO', 'NV', 'NV200', 'PATHFINDER', 'QUEST', 'ROGUE', 'ROGUE SELECT', 'SENTRA', 'TITAN', 'VERSA', 'VERSA NOTE', 'XTERRA']
      }
      if (year === '2013' && make === 'NISSAN') {
        modelList = ['370Z', 'ALTIMA', 'ARMADA', 'CUBE', 'FRONTIER', 'GT-R', 'JUKE', 'LEAF', 'MAXIMA', 'MURANO', 'NV', 'PATHFINDER', 'QUEST', 'ROGUE', 'SENTRA', 'TITAN', 'VERSA', 'XTERRA']
      }
      if (year === '2012' && make === 'NISSAN') {
        modelList = ['370Z', 'ALTIMA', 'ARMADA', 'CUBE', 'FRONTIER', 'GT-R', 'JUKE', 'LEAF', 'MAXIMA', 'MURANO', 'NV', 'PATHFINDER', 'QUEST', 'ROGUE', 'SENTRA', 'TITAN', 'VERSA', 'XTERRA']
      }
      if (year === '2011' && make === 'NISSAN') {
        modelList = ['370Z', 'ALTIMA', 'ARMADA', 'CUBE', 'FRONTIER', 'GT-R', 'JUKE', 'LEAF', 'MAXIMA', 'MURANO', 'PATHFINDER', 'QUEST', 'ROGUE', 'SENTRA', 'TITAN', 'VERSA', 'XTERRA']
      }
      if (year === '2010' && make === 'NISSAN') {
        modelList = ['370Z', 'ALTIMA', 'ARMADA', 'CUBE', 'FRONTIER', 'GT-R', 'MAXIMA', 'MURANO', 'PATHFINDER', 'ROGUE', 'SENTRA', 'TITAN', 'VERSA', 'XTERRA']
      }
      if (year === '2009' && make === 'NISSAN') {
        modelList = ['350Z', '370Z', 'ALTIMA', 'ARMADA', 'CUBE', 'FRONTIER', 'GT-R', 'MAXIMA', 'MURANO', 'PATHFINDER', 'QUEST', 'ROGUE', 'SENTRA', 'TITAN', 'VERSA', 'XTERRA']
      }
      if (year === '2008' && make === 'NISSAN') {
        modelList = ['350Z', 'ALTIMA', 'ARMADA', 'FRONTIER', 'MAXIMA', 'PATHFINDER', 'QUEST', 'ROGUE', 'SENTRA', 'TITAN', 'VERSA', 'XTERRA']
      }
      if (year === '2007' && make === 'NISSAN') {
        modelList = ['350Z', 'ALTIMA', 'ARMADA', 'FRONTIER', 'MAXIMA', 'MURANO', 'PATHFINDER', 'QUEST', 'SENTRA', 'TITAN', 'VERSA', 'XTERRA']
      }
      if (year === '2006' && make === 'NISSAN') {
        modelList = ['350Z', 'ALTIMA', 'ARMADA', 'FRONTIER', 'MAXIMA', 'MURANO', 'PATHFINDER', 'QUEST', 'SENTRA', 'TITAN', 'XTERRA']
      }
      if (year === '2005' && make === 'NISSAN') {
        modelList = ['350Z', 'ALTIMA', 'ARMADA', 'FRONTIER', 'MAXIMA', 'MURANO', 'PATHFINDER', 'QUEST', 'SENTRA', 'TITAN', 'XTERRA']
      }
      if (year === '2004' && make === 'NISSAN') {
        modelList = ['350Z', 'ALTIMA', 'ARMADA', 'FRONTIER', 'MAXIMA', 'MURANO', 'PATHFINDER', 'QUEST', 'SENTRA', 'TITAN', 'XTERRA']
      }
      if (year === '2003' && make === 'NISSAN') {
        modelList = ['350Z', 'ALTIMA', 'FRONTIER', 'MAXIMA', 'MURANO', 'PATHFINDER', 'SENTRA', 'XTERRA']
      }
      if (year === '2002' && make === 'NISSAN') {
        modelList = ['ALTIMA', 'ALTRA', 'FRONTIER', 'MAXIMA', 'PATHFINDER', 'QUEST', 'SENTRA', 'XTERRA']
      }
      if (year === '2001' && make === 'NISSAN') {
        modelList = ['ALTIMA', 'FRONTIER', 'MAXIMA', 'PATHFINDER', 'QUEST', 'SENTRA', 'XTERRA']
      }
      if (year === '2000' && make === 'NISSAN') {
        modelList = ['ALTIMA', 'ALTRA', 'FRONTIER', 'MAXIMA', 'PATHFINDER', 'QUEST', 'SENTRA', 'XTERRA']
      }
      if (year === '1999' && make === 'NISSAN') {
        modelList = ['ALTIMA', 'ALTRA', 'FRONTIER', 'MAXIMA', 'PATHFINDER', 'QUEST', 'SENTRA', 'XTERRA']
      }
      if (year === '1998' && make === 'NISSAN') {
        modelList = ['ALTIMA', 'FRONTIER', 'MAXIMA', 'PATHFINDER', 'QUEST', 'SENTRA']
      }
      if (year === '1997' && make === 'NISSAN') {
        modelList = ['200SX', '240SX', 'ALTIMA', 'MAXIMA', 'PATHFINDER', 'QUEST', 'SENTRA', 'TRUCK']
      }

      //  Porsche Models//
      if (year === '2019' && make === 'PORSCHE') {
      modelList = ['911', 'BOXSTER', 'CAYENNE', 'CAYMAN', 'PANAMERA']}
      if (year === '2018' && make === 'PORSCHE') {
      modelList = ['911', 'BOXSTER', 'CAYENNE', 'CAYMAN', 'MACAN','PANAMERA']}
      if (year === '2017' && make === 'PORSCHE') {
      modelList = ['911', 'BOXSTER', 'CAYENNE', 'CAYMAN', 'MACAN','PANAMERA']}
      if (year === '2016' && make === 'PORSCHE') {
      modelList = ['911', 'BOXSTER', 'CAYENNE', 'CAYMAN', 'MACAN','PANAMERA']}
      if (year === '2015' && make === 'PORSCHE') {
      modelList = ['911', '918', 'BOXSTER', 'CAYENNE', 'CAYMAN', 'MACAN','PANAMERA']}
      if (year === '2014' && make === 'PORSCHE') {
      modelList = ['911', 'BOXSTER', 'CAYENNE', 'CAYMAN', 'PANAMERA']}
      if (year === '2013' && make === 'PORSCHE') {
      modelList = ['911', 'BOXSTER', 'CAYENNE', 'PANAMERA']}
      if (year === '2012' && make === 'PORSCHE') {
      modelList = ['911', 'BOXSTER', 'CAYENNE', 'CAYMAN', 'PANAMERA']}
      if (year === '2011' && make === 'PORSCHE') {
      modelList = ['911', 'BOXSTER', 'CAYENNE', 'CAYMAN', 'PANAMERA']}
      if (year === '2010' && make === 'PORSCHE') {
      modelList = ['911', 'BOXSTER', 'CAYENNE', 'CAYMAN', 'PANAMERA']}
      if (year === '2009' && make === 'PORSCHE') {
      modelList = ['911', 'BOXSTER', 'CAYENNE', 'CAYMAN']}
      if (year === '2008' && make === 'PORSCHE') {
      modelList = ['911', 'BOXSTER', 'CAYENNE', 'CAYMAN']}
      if (year === '2007' && make === 'PORSCHE') {
      modelList = ['911', 'BOXSTER', '911 NEW GENERATION', 'CAYMAN']}
      if (year === '2006' && make === 'PORSCHE') {
      modelList = ['911', '911 NEW GENERATION', 'BOXSTER', 'CAYENNE', 'CAYMAN']}
      if (year === '2005' && make === 'PORSCHE') {
      modelList = ['911', '911 NEW GENERATION', 'BOXSTER', 'CAYENNE', 'CAYMAN']}
      if (year === '2004' && make === 'PORSCHE') {
      modelList = ['911', 'BOXSTER', 'CAYENNE', 'CAYMAN']}
      if (year === '2003' && make === 'PORSCHE') {
      modelList = ['911', 'BOXSTER', 'CAYENNE']}
      if (year === '2002' && make === 'PORSCHE') {
      modelList = ['911', 'BOXSTER']}
      if (year === '2001' && make === 'PORSCHE') {
        modelList = ['911', 'BOXSTER']}
      if (year === '2000' && make === 'PORSCHE') {
        modelList = ['911', 'BOXSTER']}
      if (year === '1999' && make === 'PORSCHE') {
        modelList = ['911', 'BOXSTER']}
      if (year === '1998' && make === 'PORSCHE') {
        modelList = ['911', 'BOXSTER']}
      if (year === '1997' && make === 'PORSCHE') {
        modelList = ['911', 'BOXSTER']}

      // Ram Models//
      if (year === '2019' && make === 'RAM') {
        modelList = ['1500', '1500 CLASSIC', '2500', '3500', 'PROMASTER CITY']}
      if (year === '2018' && make === 'RAM') {
        modelList = ['1500', '2500', 'PROMASTER CITY']}
      if (year === '2017' && make === 'RAM') {
        modelList = ['1500', '2500', 'PROMASTER CITY']}
      if (year === '2016' && make === 'RAM') {
        modelList = ['1500', '2500', 'PROMASTER CITY']}
      if (year === '2015' && make === 'RAM') {
        modelList = ['1500', '2500', 'PROMASTER CITY']}
      if (year === '2014' && make === 'RAM') {
        modelList = ['1500', '2500']}
      if (year === '2013' && make === 'RAM') {
        modelList = ['1500', '2500']}
      if (year === '2012' && make === 'RAM') {
        modelList = ['1500', '2500']}

      // Subaru Models //
      if (year === '2019' && make === 'SUBARU') {
            modelList = ['ASCENT', 'BRZ', 'CROSSTREK', 'FORESTER','LEGACY', 'OUTBACK', 'WRX']}
      if (year === '2018' && make === 'SUBARU') {
            modelList = ['BRZ', 'CROSSTREK', 'FORESTER', 'IMPREZA','LEGACY', 'OUTBACK', 'WRX']}
      if (year === '2017' && make === 'SUBARU') {
            modelList = ['BRZ', 'CROSSTREK', 'FORESTER', 'IMPREZA','LEGACY', 'OUTBACK', 'WRX']}
      if (year === '2016' && make === 'SUBARU') {
            modelList = ['BRZ', 'CROSSTREK', 'FORESTER', 'IMPREZA','LEGACY', 'OUTBACK', 'WRX']}
      if (year === '2015' && make === 'SUBARU') {
            modelList = ['BRZ', 'FORESTER', 'IMPREZA','LEGACY', 'OUTBACK', 'WRX', 'XV CROSSTREK']}
      if (year === '2014' && make === 'SUBARU') {
            modelList = ['BRZ', 'FORESTER', 'IMPREZA','LEGACY', 'OUTBACK', 'WRX', 'XV CROSSTREK']}
      if (year === '2013' && make === 'SUBARU') {
            modelList = ['BRZ', 'FORESTER', 'IMPREZA','LEGACY', 'OUTBACK', 'TRIBECA', 'XV CROSSTREK']}
      if (year === '2012' && make === 'SUBARU') {
            modelList = ['FORESTER', 'IMPREZA','LEGACY', 'OUTBACK', 'TRIBECA']}
      if (year === '2011' && make === 'SUBARU') {
            modelList = ['FORESTER', 'IMPREZA','LEGACY', 'OUTBACK', 'TRIBECA']}
      if (year === '2010' && make === 'SUBARU') {
            modelList = ['FORESTER', 'IMPREZA','LEGACY', 'OUTBACK', 'TRIBECA']}
      if (year === '2009' && make === 'SUBARU') {
            modelList = ['FORESTER', 'IMPREZA','LEGACY', 'OUTBACK', 'TRIBECA']}
      if (year === '2008' && make === 'SUBARU') {
            modelList = ['FORESTER', 'IMPREZA','LEGACY', 'OUTBACK', 'TRIBECA']}
      if (year === '2007' && make === 'SUBARU') {
            modelList = ['B9 TRIBECA', 'FORESTER', 'IMPREZA','LEGACY', 'OUTBACK']}
      if (year === '2006' && make === 'SUBARU') {
        modelList = ['B9 TRIBECA', 'FORESTER', 'IMPREZA','LEGACY', 'BAJA']}
      if (year === '2005' && make === 'SUBARU') {
        modelList = ['FORESTER', 'IMPREZA','LEGACY', 'BAJA']}
      if (year === '2004' && make === 'SUBARU') {
        modelList = ['FORESTER', 'IMPREZA','LEGACY', 'BAJA']}
      if (year === '2003' && make === 'SUBARU') {
        modelList = ['FORESTER', 'IMPREZA','LEGACY', 'BAJA']}
      if (year === '2002' && make === 'SUBARU') {
        modelList = ['FORESTER', 'IMPREZA','LEGACY']}
      if (year === '2001' && make === 'SUBARU') {
        modelList = ['FORESTER', 'IMPREZA','LEGACY']}
      if (year === '2000' && make === 'SUBARU') {
        modelList = ['FORESTER', 'IMPREZA','LEGACY']}
      if (year === '1999' && make === 'SUBARU') {
        modelList = ['FORESTER', 'IMPREZA','LEGACY']}
      if (year === '1998' && make === 'SUBARU') {
        modelList = ['FORESTER', 'IMPREZA','LEGACY']}
      if (year === '1997' && make === 'SUBARU') {
        modelList = ['SVX', 'IMPREZA','LEGACY']}

      //Telsa Models
      if (year === '2019' && make === 'TESLA') {
        modelList = ['MODEL 3', 'MODEL S', 'MODEL X']}

      if (year === '2018' && make === 'TESLA') {
        modelList = ['MODEL 3', 'MODEL S', 'MODEL X']}

      if (year === '2017' && make === 'TESLA') {
        modelList = ['MODEL 3', 'MODEL S', 'MODEL X']}

      if (year === '2016' && make === 'TESLA') {
        modelList = ['MODEL S', 'MODEL X']}

      if (year === '2015' && make === 'TESLA') {
        modelList = ['MODEL S']}

      if (year === '2014' && make === 'TESLA') {
        modelList = ['MODEL S']}

      if (year === '2013' && make === 'TESLA') {
        modelList = ['MODEL S']}

      if (year === '2012' && make === 'TESLA') {
        modelList = ['MODEL S']}

      if (year === '2011' && make === 'TESLA') {
        modelList = ['ROADSTER']}

      if (year === '2000' && make === 'TESLA') {
        modelList = ['ROADSTER']}

      // Toyota Models//
      if (year === '2019' && make === 'TOYOTA') {
      modelList = ['4 RUNNER', '86', 'AVALON', 'CAMRY', 'C-HR', 'COROLLA', 'HIGHLANDER', 'LAND CRUISER', 'MIRAI', 'PRIUS', 'PRIUS C', 'RAV4', 'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA', 'YARIS']}
      if (year === '2018' && make === 'TOYOTA') {
      modelList = ['4 RUNNER', '86', 'AVALON', 'CAMRY', 'C-HR', 'COROLLA', 'COROLLA IM', 'HIGHLANDER', 'LAND CRUISER', 'MIRAI', 'PRIUS', 'PRIUS C', 'PRIUS PRIME', 'RAV4', 'RAV4 HV',  'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA', 'YARIS', 'YARIS IA']}
      if (year === '2017' && make === 'TOYOTA') {
      modelList = ['4 RUNNER', '86', 'AVALON', 'CAMRY', 'COROLLA', 'COROLLA IM', 'HIGHLANDER', 'LAND CRUISER', 'MIRAI', 'PRIUS', 'PRIUS C', 'PRIUS PRIME', 'PRIUS V', 'RAV4', 'RAV4 HV',  'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA', 'YARIS', 'YARIS IA']}
      if (year === '2016' && make === 'TOYOTA') {
      modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'COROLLA', 'HIGHLANDER', 'LAND CRUISER', 'MIRAI', 'PRIUS', 'PRIUS C', 'PRIUS V', 'RAV4', 'RAV4 HV', 'SCION FR-S', 'SCION IA', 'SCION IM', 'SCION TC', 'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA', 'YARIS']}
      if (year === '2015' && make === 'TOYOTA') {
      modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'COROLLA', 'HIGHLANDER', 'LAND CRUISER', 'PRIUS', 'PRIUS C', 'PRIUS PLUGIN', 'PRIUS V', 'RAV4', 'SCION FR-S', 'SCION IQ', 'SCION XB', 'SCION TC', 'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA', 'VENZA', 'YARIS']}
      if (year === '2014' && make === 'TOYOTA') {
      modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'COROLLA', 'FJ CRUISER', 'HIGHLANDER', 'LAND CRUISER', 'PRIUS', 'PRIUS C', 'PRIUS PLUGIN', 'PRIUS V', 'RAV4', 'RAV4 EV', 'SCION FR-S', 'SCION IQ', 'SCION XB', 'SCION TC', 'SCION XD', 'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA', 'VENZA', 'YARIS']}
      if (year === '2013' && make === 'TOYOTA') {
      modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'COROLLA', 'COROLLA MATRIX', 'FJ CRUISER', 'HIGHLANDER', 'LAND CRUISER', 'PRIUS', 'PRIUS C', 'PRIUS PLUGIN', 'PRIUS V', 'RAV4', 'RAV4 EV', 'SCION FR-S', 'SCION IQ', 'SCION XB', 'SCION IQ', 'SCION TC','SCION XB', 'SCION XS',  'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA', 'VENZA', 'YARIS']}
      if (year === '2012' && make === 'TOYOTA') {
      modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'COROLLA', 'COROLLA MATRIX', 'FJ CRUISER', 'HIGHLANDER', 'PRIUS', 'PRIUS C', 'PRIUS PLUGIN', 'PRIUS V', 'RAV4', 'RAV4 EV', 'SCION' , 'SCION IQ', 'SCION TC','SCION XB', 'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA', 'VENZA', 'YARIS']}
      if (year === '2011' && make === 'TOYOTA') {
      modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'COROLLA', 'COROLLA MATRIX', 'FJ CRUISER', 'HIGHLANDER', 'LAND CRUISER', 'PRIUS', 'RAV4', 'RAV4 EV', 'SCION', 'SCION XD', 'SCION IQ', 'SCION TC', 'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA', 'VENZA', 'YARIS']}
      if (year === '2010' && make === 'TOYOTA') {
      modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'COROLLA', 'COROLLA MATRIX', 'FJ CRUISER', 'HIGHLANDER', 'LAND CRUISER', 'PRIUS', 'RAV4', 'SCION', 'SCION XD',   'SCION TC', 'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA', 'VENZA', 'YARIS']}
      if (year === '2009' && make === 'TOYOTA') {
      modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'COROLLA', 'COROLLA MATRIX', 'FJ CRUISER', 'HIGHLANDER', 'LAND CRUISER', 'PRIUS', 'RAV4', 'SCION', 'SCION XD',   'SCION TC', 'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA', 'VENZA', 'YARIS']}
      if (year === '2008' && make === 'TOYOTA') {
      modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'SOLARA', 'COROLLA', 'COROLLA MATRIX', 'FJ CRUISER', 'HIGHLANDER', 'LAND CRUISER', 'PRIUS', 'RAV4', 'SCION', 'SCION XD',   'SCION TC', 'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA', 'VENZA', 'YARIS']}
      if (year === '2007' && make === 'TOYOTA') {
      modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'SOLARA', 'COROLLA', 'COROLLA MATRIX', 'FJ CRUISER', 'HIGHLANDER', 'LAND CRUISER', 'PRIUS', 'RAV4', 'SCION TC', 'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA', 'YARIS']}
      if (year === '2006' && make === 'TOYOTA') {
      modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'SOLARA', 'COROLLA', 'COROLLA MATRIX', 'HIGHLANDER', 'LAND CRUISER', 'PRIUS', 'RAV4', 'SCION', 'SCION TC', 'SCION XA',  'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA', 'YARIS']}
      if (year === '2005' && make === 'TOYOTA') {
      modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'SOLARA', 'CELICA', 'COROLLA', 'COROLLA MATRIX', 'ECHO', 'HIGHLANDER', 'LAND CRUISER', 'MR2', 'PRIUS', 'RAV4', 'SCION', 'SCION TC', 'SCION XA',  'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA']}
      if (year === '2004' && make === 'TOYOTA') {
      modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'SOLARA', 'CELICA', 'COROLLA', 'COROLLA MATRIX', 'ECHO', 'HIGHLANDER', 'LAND CRUISER', 'MR2', 'PRIUS', 'RAV4', 'SCION', 'SCION XA',  'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA']}
      if (year === '2003' && make === 'TOYOTA') {
      modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'SOLARA', 'CELICA', 'COROLLA', 'COROLLA MATRIX', 'ECHO', 'HIGHLANDER', 'LAND CRUISER', 'MR2', 'PRIUS', 'RAV4', 'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA']}
      if (year === '2002' && make === 'TOYOTA') {
      modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'SOLARA', 'CELICA', 'COROLLA', 'ECHO', 'HIGHLANDER', 'LAND CRUISER', 'MR2', 'PRIUS', 'RAV4', 'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA']}
      if (year === '2001' && make === 'TOYOTA') {
        modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'SOLARA', 'CELICA', 'COROLLA', 'ECHO', 'HIGHLANDER', 'LAND CRUISER', 'MR2', 'PRIUS', 'RAV4', 'SEQUOIA', 'SIENNA', 'TACOMA', 'TUNDRA']}
      if (year === '2000' && make === 'TOYOTA') {
        modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'SOLARA', 'CELICA', 'COROLLA', 'ECHO', 'HIGHLANDER', 'LAND CRUISER', 'MR2', 'RAV4',  'SIENNA', 'TACOMA', 'TUNDRA']}
      if (year === '1999' && make === 'TOYOTA') {
        modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'SOLARA', 'CELICA', 'COROLLA', 'LAND CRUISER', 'RAV4',  'SIENNA', 'TACOMA']}
      if (year === '1998' && make === 'TOYOTA') {
        modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'CELICA', 'COROLLA', 'LAND CRUISER', 'RAV4',  'SIENNA', 'SUPRA', 'T100', 'TACOMA', 'TERCEL']}
      if (year === '1997' && make === 'TOYOTA') {
        modelList = ['4 RUNNER', 'AVALON', 'CAMRY', 'CELICA', 'COROLLA', 'LAND CRUISER', 'PASEO',  'PREVIA', 'RAV4', 'SUPRA', 'T100', 'TACOMA', 'TERCEL']}

      // Volkswagen Models//
      if (year === '2019' && make === 'VOLKSWAGEN') {
      modelList = ['ATLAS', 'BEETLE', 'E-GOLF', 'GOLF ALLTRACK', 'GOLF R', 'GOLF SPORTSWAGEN', 'GTI', 'JETTA', 'PASSAT', 'TIGUAN']}
      if (year === '2018' && make === 'VOLKSWAGEN') {
      modelList = ['ATLAS', 'BEETLE', 'E-GOLF', 'GOLF ALLTRACK', 'GOLF R', 'GOLF SPORTSWAGEN', 'GTI', 'JETTA', 'PASSAT', 'TIGUAN', 'TIGUAN LIMITED']}
      if (year === '2017' && make === 'VOLKSWAGEN') {
      modelList = ['BEETLE', 'CC', 'E-GOLF', 'GOLF ALLTRACK', 'GOLF R', 'GOLF SPORTSWAGEN', 'GTI', 'JETTA', 'PASSAT', 'TIGUAN', 'TOUAREG']}
      if (year === '2016' && make === 'VOLKSWAGEN') {
      modelList = ['BEETLE', 'CC', 'E-GOLF', 'GOLF ALLTRACK', 'GOLF R', 'GOLF SPORTSWAGEN', 'GTI', 'JETTA', 'PASSAT', 'TIGUAN', 'TOUAREG']}
      if (year === '2015' && make === 'VOLKSWAGEN') {
      modelList = ['BEETLE', 'CC', 'E-GOLF', 'EOS', 'GOLF R', 'GOLF SPORTSWAGEN', 'GTI', 'JETTA', 'PASSAT', 'TIGUAN', 'TOUAREG']}
      if (year === '2014' && make === 'VOLKSWAGEN') {
      modelList = ['BEETLE', 'CC', 'GOLF', 'EOS', 'GTI', 'JETTA', 'PASSAT', 'ROUTAN','TIGUAN', 'TOUAREG']}
      if (year === '2013' && make === 'VOLKSWAGEN') {
      modelList = ['BEETLE', 'CC', 'GOLF', 'GOLF R', 'EOS', 'GTI', 'JETTA', 'PASSAT', 'ROUTAN','TIGUAN', 'TOUAREG']}
      if (year === '2012' && make === 'VOLKSWAGEN') {
      modelList = ['BEETLE', 'CC', 'GOLF', 'EOS', 'GTI', 'JETTA', 'PASSAT', 'ROUTAN','TIGUAN', 'TOUAREG']}
      if (year === '2011' && make === 'VOLKSWAGEN') {
      modelList = ['CC', 'GOLF', 'EOS', 'GTI', 'JETTA', 'PASSAT', 'ROUTAN','TIGUAN', 'TOUAREG']}
      if (year === '2010' && make === 'VOLKSWAGEN') {
      modelList = ['CC', 'GOLF', 'EOS', 'GTI', 'JETTA', 'NEW BEETLE', 'PASSAT', 'ROUTAN','TIGUAN', 'TOUAREG']}
      if (year === '2009' && make === 'VOLKSWAGEN') {
      modelList = ['CC', 'EOS', 'GLI',  'GTI', 'JETTA', 'NEW BEETLE', 'PASSAT', 'R32', 'RABBIT', 'ROUTAN','TIGUAN', 'TOUAREG 2']}
      if (year === '2008' && make === 'VOLKSWAGEN') {
        modelList = ['EOS', 'GLI',  'GTI', 'JETTA', 'NEW BEETLE', 'PASSAT', 'R32', 'RABBIT', 'TOUAREG 2']}
      if (year === '2007' && make === 'VOLKSWAGEN') {
        modelList = ['EOS', 'JETTA', 'NEW BEETLE', 'NEW GTI', 'PASSAT', 'RABBIT', 'TOUAREG']}
      if (year === '2006' && make === 'VOLKSWAGEN') {
        modelList = ['GOLF', 'GTI', 'JETTA', 'NEW BEETLE', 'NEW GTI', 'PASSAT', 'PHAETON', 'RABBIT', 'TOUAREG']}
      if (year === '2005' && make === 'VOLKSWAGEN') {
        modelList = ['GOLF', 'GTI', 'JETTA', 'NEW BEETLE', 'NEW JETTA', 'PASSAT', 'PHAETON', 'TOUAREG']}
      if (year === '2004' && make === 'VOLKSWAGEN') {
        modelList = ['GOLF', 'GTI', 'JETTA', 'NEW BEETLE', 'PASSAT', 'PHAETON', 'R32', 'TOUAREG']}
      if (year === '2003' && make === 'VOLKSWAGEN') {
        modelList = ['EUROVAN', 'GOLF', 'GTI', 'JETTA', 'NEW BEETLE', 'PASSAT', 'PHAETON']}
      if (year === '2002' && make === 'VOLKSWAGEN') {
        modelList = ['CABRIO', 'EUROVAN', 'GOLF', 'GTI', 'JETTA', 'NEW BEETLE', 'PASSAT']}
      if (year === '2001' && make === 'VOLKSWAGEN') {
        modelList = ['CABRIO', 'EUROVAN', 'GOLF', 'GTI', 'JETTA', 'NEW BEETLE', 'PASSAT']}
      if (year === '2000' && make === 'VOLKSWAGEN') {
        modelList = ['CABRIO', 'EUROVAN', 'GOLF', 'GTI', 'JETTA', 'NEW BEETLE', 'PASSAT']}
      if (year === '1999' && make === 'VOLKSWAGEN') {
        modelList = ['CABRIO', 'EUROVAN', 'GOLF', 'GTI', 'JETTA', 'NEW BEETLE', 'PASSAT']}
      if (year === '1998' && make === 'VOLKSWAGEN') {
        modelList = ['CABRIO', 'GOLF', 'GTI', 'JETTA', 'NEW BEETLE', 'PASSAT']}
      if (year === '1997' && make === 'VOLKSWAGEN') {
        modelList = ['CABRIO', 'EUROVAN', 'GOLF', 'GTI', 'JETTA', 'PASSAT']}

      // Volvo Models//
      if (year === '2019' && make === 'VOLVO') {
        modelList = ['S60', 'S90', 'V60', 'V90', 'V90 CROSS COUNTRY', 'XC40', 'XC60', 'XC90']}
      if (year === '2018' && make === 'VOLVO') {
        modelList = ['S60', 'S60 CROSS CROUNTRY', 'S90', 'V60', 'V90', 'V90 CROSS COUNTRY', 'XC60', 'XC90']}
      if (year === '2017' && make === 'VOLVO') {
        modelList = ['S60', 'S60 CROSS CROUNTRY', 'S90', 'V60', 'V90 CROSS COUNTRY', 'XC60', 'XC90']}
      if (year === '2016' && make === 'VOLVO') {
        modelList = ['S60', 'S60 CROSS CROUNTRY', 'S80', 'V60', 'XC60', 'XC70', 'XC90']}
      if (year === '2015' && make === 'VOLVO') {
        modelList = ['S60', 'S60 CROSS CROUNTRY', 'S80', 'V60', 'XC60', 'XC70']}
      if (year === '2014' && make === 'VOLVO') {
        modelList = ['S60', 'S80', 'XC60', 'XC70', 'XC90']}
      if (year === '2013' && make === 'VOLVO') {
        modelList = ['C30', 'C70', 'S60', 'S80', 'XC60', 'XC70', 'XC90']}
      if (year === '2012' && make === 'VOLVO') {
        modelList = ['C30', 'C70', 'S60', 'S80', 'XC60', 'XC70', 'XC90']}
      if (year === '2011' && make === 'VOLVO') {
        modelList = ['C30', 'C70', 'S40', 'S60', 'S80', 'V50', 'XC60', 'XC70', 'XC90']}
      if (year === '2010' && make === 'VOLVO') {
        modelList = ['C30', 'C70', 'S40', 'S80', 'V50', 'V70', 'XC60', 'XC70', 'XC90']}
      if (year === '2009' && make === 'VOLVO') {
        modelList = ['C30', 'C70', 'S40', 'S60', 'S80', 'V50', 'V70', 'XC70', 'XC90']}
      if (year === '2008' && make === 'VOLVO') {
        modelList = ['C30', 'C70', 'S40', 'S60', 'S80', 'V50', 'V70', 'XC70', 'XC90']}
      if (year === '2007' && make === 'VOLVO') {
        modelList = ['C70', 'S40', 'S60', 'S80', 'V50', 'V70', 'XC70', 'XC90']}
      if (year === '2006' && make === 'VOLVO') {
        modelList = ['C70', 'S40', 'S60', 'S80', 'V50', 'V70', 'XC70', 'XC90']}
      if (year === '2005' && make === 'VOLVO') {
        modelList = ['S40', 'S60', 'S80', 'V50', 'V70', 'XC70', 'XC90']}
      if (year === '2004' && make === 'VOLVO') {
        modelList = ['C70', 'S40', 'S60', 'S80', 'V40', 'V70', 'XC70', 'XC90']}
      if (year === '2003' && make === 'VOLVO') {
        modelList = ['C70', 'S40', 'S60', 'S80', 'V40', 'V70', 'XC70', 'XC90']}
      if (year === '2002' && make === 'VOLVO') {
        modelList = ['C70', 'S40', 'S60', 'S80', 'V40', 'V70']}
      if (year === '2001' && make === 'VOLVO') {
        modelList = ['C70', 'S40', 'S60', 'S80', 'V40', 'V70']}
      if (year === '2000' && make === 'VOLVO') {
        modelList = ['C70', 'S40', 'S70', 'S80', 'V40', 'V70']}
      if (year === '1999' && make === 'VOLVO') {
        modelList = ['C70', 'S70', 'S80', 'V70']}
      if (year === '1998' && make === 'VOLVO') {
        modelList = ['C70', 'S70', 'S90', 'V70', 'V90']}
      if (year === '1997' && make === 'VOLVO') {
        modelList = ['850', '960']}

      return modelList
    }
  },
  methods: {
    onItemClick (item) {
      this.$store.dispatch('appStore/setModel', item)
      this.$store.dispatch('appStore/setStep', 4)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
