<template>
  <v-card>
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

    modelList = ['230I', '230XI', '330I', '330XI', '340XI', '430I', '430XI', '440I', '440XI', '530', '530E', '530XE', '540', '640', '650', '740', '750', 'ALPINA B6', 'ALPINA B7', 'I3', 'I8', 'M2', 'M240I', 'M240XI', 'M4', 'M5', 'M550XI', 'M6', 'M760', 'M850X', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z4']      }

if (year === '2018' && make === 'BMW') {

    modelList = ['230I', '230XI', '320', '328', '330', '330E', '340', '430I', '430XI', '440I', '440XI', '530', '530E', '530XE', '540', '540XD', '640', '650', '740', '750', 'ALPINA B6', 'ALPINA B7', 'I3', 'M2', 'M240I', 'M240XI', 'M3', 'M4', 'M5', 'M550X', 'M6', 'M760', 'X1', 'X2','X3', 'X4', 'X5', 'X6']      }

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

    modelList === ['CTS', 'CTS-V', 'ESCALADE', 'SRX']

}

if (year === '2011' && make === 'CADILLAC') {

    modelList === ['CTS', 'CTS-V', 'DTS', 'ESCALADE', 'SRX', 'STS']

}

if (year === '2010' && make === 'CADILLAC') {

    modelList === ['CTS', 'CTS-V', 'DTS', 'ESCALADE', 'SRX', 'STS']

}

if (year === '2009' && make === 'CADILLAC') {

    modelList === ['CTS', 'CTS-V', 'DTS', 'ESCALADE', 'SRX', 'STS', 'STS-V', 'XLR', 'XLR-V']

}

if (year === '2008' && make === 'CADILLAC') {

    modelList === ['CTS', 'DTS', 'ESCALADE', 'SRX', 'STS', 'STS-V', 'XLR', 'XLR-V']

}

if (year === '2007' && make === 'CADILLAC') {

    modelList === ['CTS', 'CTS-V', 'DTS', 'ESCALADE', 'SRX', 'STS', 'STS-V', 'XLR', 'XLR-V']

}

if (year === '2006' && make === 'CADILLAC') {

    modelList === ['CTS', 'CTS-V', 'DTS', 'ESCALADE', 'SRX', 'STS', 'STS-V', 'XLR', 'XLR-V']

}

if (year === '2005' && make === 'CADILLAC') {

    modelList === ['CTS', 'CTS-V', 'DEVILLE', 'ESCALADE', 'SRX', 'STS', 'XLR']

}

if (year === '2004' && make === 'CADILLAC') {

    modelList === ['CTS', 'CTS-V', 'DEVILLE', 'ESCALADE', 'SEVILLE', 'SRX', 'XLR']

}

if (year === '2003' && make === 'CADILLAC') {

    modelList === ['CTS', 'DEVILLE', 'ESCALADE', 'SEVILLE']

}

if (year === '2002' && make === 'CADILLAC') {

    modelList === [ 'DEVILLE', 'ELDORADO', 'ESCALADE', 'SEVILLE']

}

if (year === '2001' && make === 'CADILLAC') {

    modelList === ['CATERA', 'DEVILLE', 'ELDORADO', 'SEVILLE']

}

if (year === '2000' && make === 'CADILLAC') {

    modelList === ['CATERA', 'DEVILLE', 'ELDORADO', 'ESCALADE', 'SEVILLE']

}

if (year === '1999' && make === 'CADILLAC') {

    modelList === ['CATERA', 'DEVILLE', 'ELDORADO', 'ESCALADE', 'SEVILLE']

}

if (year === '1998' && make === 'CADILLAC') {

    modelList === ['CATERA', 'DEVILLE', 'ELDORADO', 'SEVILLE']

}

if (year === '1997' && make === 'CADILLAC') {

    modelList === ['CATERA', 'DEVILLE', 'ELDORADO', 'SEVILLE']

}



      return modelList
    }
  },
  methods: {
    onItemClick (item) {
      this.$store.dispatch('appStore/setStep', 4)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
