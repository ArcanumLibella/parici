import React, { useState, useEffect } from 'react'
import axios from "axios";

// COMPONENTS
import { NatureChart } from '../CardChart'


// DATA
import {natureSpaces} from '../../data/natureSpaces'

// https://css-tricks.com/using-data-in-react-with-the-fetch-api-and-axios/

const BackNature = ( props ) => {
  const { cardType } = props

  const [records, setRecords] = useState()

  // const fetchGreenSpaces = () => {
  //   axios
  //     .get('https://opendata.paris.fr/api/records/1.0/search/?dataset=espaces_verts&rows=1639&facet=type_ev&facet=categorie&facet=adresse_codepostal&exclude.type_ev=Etablissements+sportifs&exclude.type_ev=P%C3%A9riph%C3%A9rique')
  //     .then( response =>
  //       response.data.records.map(
  //         record => ({
  //           type_ev: `${record.fields.type_ev}`,
  //           adresse_codepostal: `${record.fields.adresse_codepostal}`,
  //           surface_totale_reelle: `${record.fields.surface_totale_reelle}`
  //         })
  //       )
  //     )
  //     // .then( records => {
  //     //   setRecords(response.data.records)
  //     //   console.log(setRecords())
  //     // })
  //     .catch( error => {
  //       console.log( error )
  //     })
  // }

  // useEffect(() => {
  //   fetchGreenSpaces()
  // }, [])

  // const test = (records) => {
  //   return (
  //     console.log(records)
  //   )
  // }

// --------------------------------------------------------------------------------------------
  const fetchRecords = async () => {
    try {
      const response = await axios
        .get(
          'https://opendata.paris.fr/api/records/1.0/search/?dataset=espaces_verts&rows=1639&facet=type_ev&facet=categorie&facet=adresse_codepostal&exclude.type_ev=Etablissements+sportifs&exclude.type_ev=P%C3%A9riph%C3%A9rique'
        )
        // .then(response => 
        //   console.log(response.data.records.map ( 
        //     record => ({
        //       type_ev: record.fields.type_ev,
        //       adresse_codepostal: record.fields.adresse_codepostal,
        //       surface_totale_reelle: record.fields.surface_totale_reelle
        //     })
        //   ))
        // )
        setRecords(response.data)
        // Impossible d'utiliser les records en dehors de fetchRecords (notamment dans le return())
        console.log(response.data.records)
    } 
    catch ( error ) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchRecords()
  }, [])

  // const test = (records) => {
  //   return (
  //       <span>{records}</span>
  //     )
  // }

// --------------------------------------------------------------------------------------------
  // API OPENDATA PARIS
// axios
//   .get('https://opendata.paris.fr/api/records/1.0/search/?dataset=espaces_verts&rows=1639&facet=type_ev&facet=categorie&facet=adresse_codepostal&exclude.type_ev=Etablissements+sportifs&exclude.type_ev=P%C3%A9riph%C3%A9rique')
//   .then(response => 
//     response.data.records.map ( 
//       record => ({
//         type_ev: record.fields.type_ev,
//         adresse_codepostal: record.fields.adresse_codepostal,
//         surface_totale_reelle: record.fields.surface_totale_reelle
//       })
//     )
//   )
//   .then(records => {
//     setRecords = records
//   })

  // .then(users => {
  //   this.setState({
  //     users,
  //     isLoading: false
  //   });
  // })

  // const { type_ev, adresse_codepostal, surface_totale_reelle } = record

    // ETAPE 1 : Récupérer les arrondissements
    // ETAPE 2 : Faire la somme des EV dans chaque arrondissement
    // ETAPE 3 : Faire un pourcentage
    // const recoverDistrict = (records) => {
    //   return records.map (
    //     (record, i) => (
    //       <h1>{record.fields.adresse_libelle_voie}</h1>
    //       // console.log(i, record.fields.adresse_libelle_voie)
    //     )
    //   )
    // }

  // .catch( error => {
  //   console.log( error )
  // })

  return (
    // records.map(record => {
    //   const { type_ev, adresse_codepostal, surface_totale_reelle } = record;
    //   return (
    //     <div key={type_ev}>
    //       <p>{adresse_codepostal}</p>
    //       <p>{surface_totale_reelle}</p>
    //       <hr />
    //     </div>
    //   );
    // })

    <div className={'card-back card-back--' + cardType}>
      <h3 className='card-back__title card-title'>{ cardType }</h3>  
      <div className='card-back__graphic'>
        {/* <NatureChart records={records}/> */}
        {/* {NatureChart(natureSpaces)} */}
        {/* {recoverDistrict(records)} */}
        {/* { test() } */}
      </div>
    </div>
  )
}

export default BackNature