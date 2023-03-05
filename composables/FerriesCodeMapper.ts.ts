export default function mapper(codes: string[]) {
  const names = codes.map((code) => {
    switch (code) {
      case 'TSA':
        return 'Tsawwassen - TSA'
        break
      case 'SWB':
        return 'Swartz Bay - SWB'
        break
      case 'SGI':
        return 'Southern Gulf Islands - SGI'
        break
      case 'DUK':
        return 'Duke Point (Nanaimo) - DUK'
        break
      case 'FUL':
        return 'Fulford Harbour (Salt Spring Island) - FUL'
        break
      case 'HSB':
        return 'Horseshoe Bay - HSB'
        break
      case 'NAN':
        return 'Departure Bay (Nanaimo) - NAN'
        break
      case 'LNG':
        return 'Langford - LNG'
        break
      case 'BOW':
        return 'Bowen Island - BOW'
        break
      default:
        return ''
        break
    }
  })
  return names
}
