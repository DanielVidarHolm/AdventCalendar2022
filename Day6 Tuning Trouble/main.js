
function main(data){
    console.log(data[1])
    for(let i = 0;i < data.length - 13; i++){
        let buffer = [data[i],data[i+1],data[i+2],data[i+3]]
        let buffer2 = [data[i],data[i+1],data[i+2],data[i+3],data[i+4],data[i+5],data[i+6],data[i+7],data[i+8],data[i+9],data[i+10],data[i+11],data[i+12],data[i+13]]
        if(checkBuffer2(buffer2)){
            console.log(i+14)
            console.log(buffer2)
            break;
        }
        
    }
    console.log(data.slice(2505,14))
}
function checkBuffer(buffer){
    let a = buffer[0]
    let b = buffer[1]
    let c = buffer[2]
    let d = buffer[3]
    console.log(`Does: ${[b,c,d].join('')} Include: ${a}: ${[b,c,d].join('').includes(a)}`)
    console.log(`Does: ${[a,c,d].join('')} Include: ${b}: ${[a,c,d].join('').includes(b)}`)
    console.log(`Does: ${[a,b,d].join('')} Include: ${c}: ${[a,b,d].join('').includes(c)}`)
    console.log(`Does: ${[a,c,d].join('')} Include: ${d}: ${[a,b,c].join('').includes(d)}`)

    if (!([b,c,d].join('').includes(a))&&!([a,c,d].join('').includes(b))&&!([a,b,d].join('').includes(c))&&!([a,c,b].join('').includes(d))){
        return true
    }else{
        return false
    }

    
}
function checkBuffer2(buffer){
    let b01 = buffer[0]
    let b02 = buffer[1]
    let b03 = buffer[2]
    let b04 = buffer[3]
    let b05 = buffer[4]
    let b06 = buffer[5]
    let b07 = buffer[6]
    let b08 = buffer[7]
    let b09 = buffer[8]
    let b10 = buffer[9]
    let b11 = buffer[10]
    let b12 = buffer[11]
    let b13 = buffer[12]
    let b14 = buffer[13]
    
   
     if (
        !([b02,b03,b04,b05,b06,b07,b08,b09,b10,b11,b12,b13,b14].join('').includes(b01))&&
        !([b01,b03,b04,b05,b06,b07,b08,b09,b10,b11,b12,b13,b14].join('').includes(b02))&&
        !([b01,b02,b04,b05,b06,b07,b08,b09,b10,b11,b12,b13,b14].join('').includes(b03))&&
        !([b01,b02,b03,b05,b06,b07,b08,b09,b10,b11,b12,b13,b14].join('').includes(b04))&&
        !([b01,b02,b03,b04,b06,b07,b08,b09,b10,b11,b12,b13,b14].join('').includes(b05))&&
        !([b01,b02,b03,b04,b05,b07,b08,b09,b10,b11,b12,b13,b14].join('').includes(b06))&&
        !([b01,b02,b03,b04,b05,b06,b08,b09,b10,b11,b12,b13,b14].join('').includes(b07))&&
        !([b01,b02,b03,b04,b05,b06,b07,b09,b10,b11,b12,b13,b14].join('').includes(b08))&&
        !([b01,b02,b03,b04,b05,b06,b07,b08,b10,b11,b12,b13,b14].join('').includes(b09))&&
        !([b01,b02,b03,b04,b05,b06,b07,b08,b09,b11,b12,b13,b14].join('').includes(b10))&&
        !([b01,b02,b03,b04,b05,b06,b07,b08,b09,b10,b12,b13,b14].join('').includes(b11))&&
        !([b01,b02,b03,b04,b05,b06,b07,b08,b09,b10,b11,b13,b14].join('').includes(b12))&&
        !([b01,b02,b03,b04,b05,b06,b07,b08,b09,b10,b11,b12,b14].join('').includes(b13))&&
        !([b01,b02,b03,b04,b05,b06,b07,b08,b09,b10,b11,b12,b13].join('').includes(b14))
        ){
        return true
    }else{
        return false
    }

    
}
const data = "mzrzqrzqrrmcmgmrggvjvcczbczccdwdcwcpwwclwwbttdntnsnllpggqhgqgzqggvjjjfqfhhbbvzvmzvvfccnznwntnptpgpcplpwwvgvzvvcgvvbcvcqqhnqqbsbdsbbbgtgvtgvtgvvrfvvjbjcbcchnhrhvvrmmwzwzmwmggjwwwwzrrmbmbmbrrdjrjfrrrmrffzgghtggwddtllhchdhsshjjwfwsfssnbbnjncczsczzvpvssljsjgsjgjcgjggspsfsfhfppsqqzlzjllblsldsldlndnhnffflwfwmwssvzzvqzzblzbbmrrfnrrqnnhfnnhphbhrrlvrlvrvcrrltrtmrrcscchdhqhfffrddzsszwwrbrfftddbwwtdtnndrrghgcgfgrglllcdcsswvwsvszsddjwdwwcvwvmvhhlqlddbhbrrnddpqpttrtctmcmjjtvjjfvvlcldltdtdqdllnrncrnrznzfnfsfnndqqbhhlnhhhsmhhfghgppflllrhhvdddvrvnrnpplwplldttswsbwwtbbvwbwnnhcczmczmczclcttwcchllmsmbbrvbbsjsswbwwbtwtgtrgtrgrnggqwgwmwrmrqmmghhtbbrppjmpppjtjtffvqvbbwsspzsstlstltrrtmtrmrzmmgqqgmmpzmpzpmmgnnrjjgrjjhgjjsccjllwzzsddznnrsrttdllcnntvnttqjjqljqqwlqlmmfdfttzzvgvtvjjwvwsvvhbhrbhbwbzbppbplphpjpzppljjnttnvnggqbqffqgqrrjwjcjllcblbqqglqgqjqrrffjqqqcvqccgrgqgrqrnqqhphccvwwsgspprmprrwdrwrdwdrwrwswbsbcctscttwvvvstvthtrhhddtppgwwqpwwzpzgzszgzvggzqqmbqqrqsrqrmmjjfggztzdzvvqdqzddrrnmmtccsstdsdrrmrnnzzpggbmbqbcbzczppbjbssfzfcfvcvlclgcglcgllvclcwwwpmwwjrrgtrtfrrnznssvvrjvrjrgjrrcsrrstrsrhrpplfljjwrwbbffdpfpzffrhhjrjdrrgpggbhhschcdcdcqcnncjcvjcvjvbvcbvbssnhhsddclcrcrjrdrtdtqdqrddddlcdcttzzlslblbqqcmmdgmmsnmnmccqmmljjncnhnchcdchddwsdssdrsscfcnffcqfqtfqqjcjrrvbrvvhsvvlqlwwsccjbbgpgzgcgbgzgccpvcpvpddqrrqfqtqrqqcjjwvwttrwwblwlrwllnsshdhqdhqqjllzlflvlgllhnllstsbbdqqpnpwpmwwzhzvzcclcvcfvcvssdcdvdpphcphcppffndfnfmfbfwwgzwwwvhwwmcwwwtmtgtvggvbggzzthzzlbzbzmmhlllvgllmfmpmbbldbdnnzzjcctvvsdvssrpsslglqggcchvcvllzhhbcczjjgllvqlvlflglwwscctfcbmdjhgwtfhjrgvvvrmdcpsrtsnvhwnnznnnmrhcnlnmjvdbqztspwbdwlttdtwlwdvqjpgqdzbnssglqczqwvfgdlbdmsbbmggjdhddzvzlqhrggvvccmcmtqdmmpqvvstmqgvntdsmjbzbwstdrmjjmzfgmczjrftwrwnfbdmlddvzdfwwztldqfvdswfdwrfcgptmmjnzngwnflzlvtwpdsvllfwqjnjjjbfcwmgrvlhdvpgprnjthlqlbtlhflzwqjwtqtdzcvqbgtjlnmwchpjrgfndrnzwctjwvwsvflmgnqmplhhwljqcshqqldcnfrdbdcbslrtbnqrvhhjrddmjbtmcjzlqcdcqbfftsmpdpnfrjjwmdpmrvjjmppbnmcbvnzbphjcjlldnpdcwsqfgpmbszvjbpzngvncbfncpmghfrsssrnbbmhnjjvgmjzwtwlpszphgwvtjzdsmvvhnrplmnrllvqvphtbbrnlwmffdmmbhvzfcnbnlbspfwbcbjwgpnbsfpfbdqbnpfcqpngfqwlwcgrzlvfqgfsbppgmfzgjdntdvzvzclbrfwpqmvgmtmppsjzjhqbgjnntdnwvwljndqbtfgrjcfnlpsgsmbdljdzqfclgwhdgndzwbcthmrgzcjbhrrltlsznbsvswtsjbhwqzwchwzbtqmnrqfrzspwrqwwqwvczmntwggltjmvwdftplrgtrltmpvvgslvhctnwwcgtblmqtnsmqdgcbvzlcbrrsstzgzrgzgtmqtvsnzqqwlfgrjbdsvpdjpgmmczddbptwvpthvdjvrpqsbbgctrpqsdnczzbttdrbflrllrnvjswslnghdqfqlnbcctwbnpvspfmrcnprpjzgwsdwlszzpdcgvzjsjtdgjnpwgtqmvsmsvzddcmfwtqjghrrrmvcjbccgrngcvvfvrrmmqmzsvhdqsfqpqnnhhpffrtblnzhwqmsgvvzvgpbczsznzlnvsgjjzqbpjmvpjzqqpzpvplwsvgtwvrhlvggrpvztvchbcwflwhwmvdslvhsgpcqhdhcpvclgmzdngsmbplzrqgwflltzgsglflhqhpnnfszvtgprqhnjlrvwfsjfpcjzbznsprtldvwjlnhqsdlfnwtlpzldfpnjpnnqfgqqrjrnszznlrjgwwlnbbznzcshtfqcprphgsldtgzzgqjvmjrtfhmgptrnqzmtfclqwgprvjptntgwhbqwhdjcfjtrmdwbslhqwgtcqwhjhhmltrlsqbvzqsjqsczvsqlsjdgmnjnpvmmwbsfnfnshmlrdgslbfrnhmdgcjgsqgwlbmlhhnfmcfnswmwgrzmpdmtrcmwgjlgrhzchmhmbjgjrfgdvplvngjnfdrscwqtnsspdszznnnjrdmvwbvnzmmddbcvsphfqsbcmfmfgrcdfjptzqfsjsmjtbswtqzvtfpwbvqsgjzftfssdmcngtgbfmrrsjtllnpsztvgbpgpcrmqsgvcjrpprhqzjwlcdjpvgrqtjcglwnvzvqtncmndzbgpgfbprpqqjfbnzhfzlfrgnfnbpjfrbtjgrgvmczthqsbfplnzvhqjmrrssnzjdhfvlngwptzzdshzhzfpzhmrcjmdvlnlqtsnlbhqgplsltgznshthcwnpzpcgjjwhjstfcdtmmnvbgqzrjpsqwlmlbjnqtrfmbrdsbdlrrwqqvzdnmzhzvrhdftzldzjrtfgzlrwczbzzzqtthdcjtqpcfdwpqlzqmrnsnhwbzhjnqjzgfdcdcrqsjfhpjcdtwnvwzzbwfgdzcmmfvdvdpjsltcrbfqczvvbjscptjsvzndgwhzfjcqljndrcqzhssnqtmjmwjrsqdpqnhwsntqnmrwhvsnvrvpvwbndpmgsnchtnzpjgshcvjgwlwdhqbqhvcwqmwllhcgvbslqvwgswvnsqvvcphbglrvlsczcscznlwzrvjptmbmrgjlhvbrlghcwjdqjlgrcbrhfmbcwgclqzllqtmshbjnhwpgsgtljbwhgcsznvslmglcnmmgjlsptgdqlbtclfbfvjpmqgwwbcvwtdhgjlpvgggjjvmltdgzjdsvtswgblgfcvdvtwrrfljtqjhdflhbtwmcdqpmdqrtjsvdhzstfnqjrzztnwslvwtvgvzfqlzfrhnthjfpvmwmdgrtzhbtwdfscdpwmwwrhgbmqrdftvjvrgzhbpqtqvvlwbmbvlszzqjwhtvwnsjcdcgdlwlrtvjsdqzngcdtpvsddsbqbhtrrpwqdhvdmnnncgccszqtbcgwbdbwrnwrhpwprslbmhrmwpmqzvssfzvrmwrmrzmhrcwvbdtvdflgmrghqngwsgrnctsnhpnmcmfmrtszttqtvvlhdjgplvgnjrtgnfgmdtvwzmzbtzvmhdvpcjqvgpsmdcfrbmqbrlsnccldrfdldqfnsfzznqtvsgwbljgrvbdmggdmhvvdzjfllzwzpddcnvrfggsddqmczfnnfvrwsmvfctctjqdrhvlntflccqgz"

main(data)