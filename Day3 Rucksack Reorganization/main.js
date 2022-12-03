


function main(data){
    // firstPart(data)
    secondPart(data)
    
}
function secondPart(data){
    let allRucksacks = data.split(/\n/gi)
    let rucksacksThree = splitByThree(allRucksacks)
    // console.log(rucksacksThree)
    let sum = calcBadge(rucksacksThree)
    console.log(sum)
}
function calcBadge(rs){
    // console.log(`Bingo: ${rs}`)
    let score = 0
    for (let i = 0; i < rs.length; i++){
        let badge = findBadge(rs[i])
        let convertedType = badge.charCodeAt(0) 
        if (convertedType >= 97 && convertedType <= 122){
            // its lowerCase
            score += convertedType - 96
        }else if (convertedType >= 65 && convertedType <= 90){
            // its upperCase
            score += convertedType - 38
        }

    }
    return score
}
function findBadge(group){
    let flag1, flag2, flag3
    let g1 = group[0].split('')
    let g2 = group[1].split('')
    let g3 = group[2].split('')
    for (let i = 0; i < g1.length; i++){
        let g1Badge = g1[i]
        flag1 = true
        for(let j = 0; j < g2.length; j++){
            let g2Badge = g2[j]
            if(g2Badge === g1Badge){
                for(let k = 0; k < g3.length; k++){
                    let g3Badge = g3[k]
                    if (g2Badge === g3Badge){
                        return g3[k]
                    }
                }
            }
            
        }
    }
}
function splitByThree(rucksacks){
    let rucksacksThree = []
    for (let i = 0; i < rucksacks.length; i += 3){
        let data = [rucksacks[i], rucksacks[i+1], rucksacks[i+2]]
        rucksacksThree.push(data)
    }
    // console.log(rucksacksThree)
    return rucksacksThree
}

function firstPart(){

    let allRucksacks = data.split(/\n/gi)
    let sum = 0
    allRucksacks.forEach(rucksack => {
        let rucksackCompartments = splitEqually(rucksack)
        console.log()
        console.log(`rucksack: ${rucksack}`)
        console.log(`1st compartment: ${rucksackCompartments[0]}`)
        console.log(`2nd compartment: ${rucksackCompartments[1]}`)
        sum += calcSharedTypes(rucksackCompartments)
        
        console.log(`sum: ${sum}`)
    })
    console.log(sum)

}
function splitEqually(str){
    
    let comp1 = str.slice(0, str.length / 2) 
    let comp2 = str.slice(str.length / 2, str.length)
    return [comp1,comp2]
}

function calcSharedTypes(compartments){
    let comp1 = compartments[0].split('')
    let comp2 = compartments[1].split('')
    let commonTypes = {}

    for (let i = 0; i < comp1.length; i++){
        
        for(let j = 0; j < comp2.length; j++){
            if(comp1[i] === comp2[j]){
                if(!(comp1[i] in commonTypes)){
                    let convertedType = comp1[i].charCodeAt(0) 
                    let score = 0
                    if (convertedType >= 97 && convertedType <= 122){
                        // its lowerCase
                        score = convertedType - 96
                    }else if (convertedType >= 65 && convertedType <= 90){
                        // its upperCase
                        score = convertedType - 38
                    }
                    commonTypes[comp1[i]] = score
                }
            }
        }
        
    }
    let points = 0
    Object.entries(commonTypes).forEach(([key,value]) => points += value)
    console.log(`score for letter: ${points}`)
    return points
    
}

function calcPoints(sharedType){
    // console.log(sharedTypes)
    let score = 0
    let convertedType = sharedType.charCodeAt(0)

        
    if (convertedType >= 97 && convertedType <= 122){
        // its lowerCase
        score = convertedType - 96
    }else if (convertedType >= 65 && convertedType <= 90){
        // its upperCase
        score = convertedType - 38
    }
    
    return score
}














const data = `JppMDcJPcQbqGqFb
ZStgnHtsSjGBhqFbBmsm
djzzwgHHggdnfwjtMPDPMGpPlNfpLDll
dRCtwtlCSttPtlNPNtgvPrDqmBsjGSpjBBsJsqqmrp
ZhWnZhzMMfnWWTDzBrmsmjsBccJB
TFQMrZrMfZrLZZnLQdlvNdCgdHPlCllHNF
PVddPnZWDDPqmHZzqVPzqdHdMRMJjQtvmvjvtTQQtlRtbbQl
fsNswFpChpNwfgtMvCbjTRJBbtRj
SFgfSMShLcsLgNMFhpwShFFZPHqZGZPqHdzPZHZcdzDDqd
dHffzCqSfJCCzCPvdcpzRrBDDBSBBBMtthDDrFMT
bVsZbsrgbWshBTFtDTtZTD
slWGNbNWgWwnmNnwgnlGjdJJdPHcvcrcHjqPzdqPvp
vBFBzGvGBvjFpGWcvCCvBvGPPhZbgLhMnhrPgFgPFgLLPF
dVlslfdJNVJJmQQwdNRNwLZZZrrqhbPbZndpdgMhLP
HJRHJpNJlVmftHfNQNRsHmmGCtGWjGDDTvCzcjWDStvcvT
cVQzCCCpVVjgHsNwwFRqSRSRRtNH
PWfhfPhbWWdWllPDdTvdbnvhLJLLMJFTSNwJtMRwJLqJJNMq
DnfblllPbDrbWmbdPFdvlhdgQzzZZzQgcpcsZGcGQQgcpr
hdFnnrdLnJRrZMzVlMbrwZvz
TgfjGCcfsqfqqBfRMPDVvVVvTZRPbP
qQqffcGStBSCQcsqCCBRjGqWhHFptFdnhNLmhnLWmphLLt
WHPqWhLWHBMqddCdtDRwStDSwgnw
rfCfZTmvpvvpFVfFrbvTbvcgtwgtStntggwbSJttgJtwgw
fpQFsmfFmfZcrFCMhWNQWLCzhhCM
zdqqJHDWwqNNZjQSmtdjpmfnjj
GFBcPfBLPThcTcLRbpTQQjpTQrjSnQjlvn
MFVLcsPVbPcRGfVPFRgDzJsHZNDCZNCNZsHg
WQdMhlmQMwfZlQdgdHfddvtzmbJbcsctbBJqqcvqzB
rSTrDDCSSGRCnnSGwwzJsbBvJsCCttccsvsz
VnFwDrNwPwVSDrLgjfZZdMQFMWgljQ
rJNjBLNQjvLQjFFLQJCFTvGWlRRgfGWDWlCDzlGnRRWG
tMMhShhwhbgplflwDlnnnzDH
ZcSZVMSqshhQBQqQvqQgjJ
btTtWGbvtcvHHccdNRhHdl
TDzqLPSqBzqVSldPddHhhNNlRQ
jBLDqDgZZBzJJmsbWjppmmpTWw
LLDTRRfTwZRGZfDCRTwRsVHsVFBVZVlmVFBFlFJl
QjWpQrzQcbhfMqrVVHVPFslFVpVmHH
hqhzqMfNvjvMMzhdRDdCwGDSSdnvRn
jmMdNCLjLmJPtHtSHhSVVJ
pDBqgBgCvbfGBBbCGHZhtQZtPHVSVHPV
pBnWgBpzWzBbWDWvzwpgCvqcmLNTrdLmmrnRLTrmrTdmLd
dRWWtRGBDPQctQDZ
CMfnCfFMmTTFVCmfmTLvsnMPZjccHRcPrRPsZQQZPQDRrQ
fLCffmRTCvRnmTllzVvpdpphNJggpGbJJJpdlh
cfsfbbWqqZqDScbhGDPDjTPmpVtmmPjPntFD
dCBBCRQCHNHLMQvrJJJBJLrGPMnjVtPjVMmnjPFmPmMpFn
HvRGLddgHHvqhwzbWhcgcf
DHmhhDDhbqrRhvbrHqhPbPvBwwWwTmMGTVwwBMGWVNNwVw
gSzJjnnjsscfcsZcSfWwQGdMMcWTBcTTMTMw
nsFCCFZsnSlCFBFflfflsztRPCqvvHPttRbHbhvPrrRr
SGNRLzpNpgNSNNlWFNwzqJfHfJHBtBdJhBJrHd
bQnjPTnjVdZtPPrfLP
TTnTccLnjGFcDNggFl
lBJmNzJlzmmQBlzgVVjLWRDfLjRsRLWWRS
vTMvTvtrfdhrrrPTdZwTTwtDqSSnWFWDFMMsRssjjsRqWD
ZpbvHbZddtbrdrdhcBmmpGQfBQgJNcmz
qsmhTmTVcDdcffhPhPvvzFhF
BNNlJbjWBWjtRtNljbmBBCpFzPlFPgpPfwFnlffnlPgg
JtBmmrrrRbDSrVqDqVSD
VmSgpSLgJjVDMrFrmMlfFmsG
bZWhZbzWcCwTWPRCwwwSPQzwMHnflHnGsMGnTrsflGMnlfTF
CqWhWqWCCWRRZQcLqDLpVDDLNStpgD
JwzTVzzcLzVJVVlJpVTwzGcrWhFjqsBjCjQFjWcCCjCjBF
MDSNQMtbSSnSbgbRDvnRNgvhmrqrjBCBtmCrCCWFqthhWm
bgMfNSSNZTwZQddGJZ
jjPgbFjjStjjPcSbrbtpvNrGnGDvBnMGvNDNGG
LwdZwsTdWTTmwDNCNppGBsnpBR
mWmHwZWhTTJWHBdQQWBjcFczSgjlSftjbtQPzg
fCBlrffzlCzcmfLDlfgRRnHScsHvRSQHMQvs
LthpZqtpVThZhGJtqTFvHsVnvsvMsggjHQjgQH
ZWFWGTLTWBNCWfDfmD
BpFqJrpcZZBDhDsNqMHhRG
zwlzPdmzPLhwvhMgsHnN
mPlWjlQfQjjllWtjQCWzCrBFJFTBcSNcJbbZfcZJSb
FpzNFTThBDChnnzNBCBNDzWGndgWqbJWVGqmPbJqQgQm
HQRctcvwgddVcJGd
LwRMZLjQfSRjFNzFSrhNsThS
WgRWVLWhFqgqgcgWHqLRWHVRbbbNwBmtBcNcwdwwBNwBzwBN
pSfssjDSrSvJpNJCztbJBtMNbt
TzsvGGnjGPsPjSTpDrPfPDSHhWqLgZZVHVhZZZZVQQFLnZ
sHjtPjQTtDbsfrrqWR
ZmccchvlvSvvZNMVNhvBLWRJJblWJWJlJfwHbwlL
hMMBzSMppVSzSNNmNgHjPgGPFTCpTTgTgG
rPQpCPPCQQZdcFhcZgzVJgwt
vDBSHmvHSSMlDWWmljnHBvFwzzcrwhVSJwVFtzcJJghw
bmmrsrsbsvNdCTdbPTdb
NgzBnsBNnfjgNvvfvWbtShSSFSMLJMFjjbPh
CCcRHdlQrQPLTJPLGP
HrDlRcqcDJCCDJHlcplrDJDfgfzBWWNZfvsnNqWwngZWwW
TggFVbjVTVzRwFFjjqBBqpzNztqcQqNNqN
SnZPrWndmShSZSPsnSLsJhpMQpcJtNqBClltqctC
mfWsGdnZZWmZmrLSfsrnmPggwtggRgGTVHvRwgFDjTGT
wQMZFQwppbPHPbLQJsgQNJJmBnds
qrSGvRRCvTzTDNnhNgmCgdBm
qzRrcRlGjvvzlzrvjcGqSSzMHWwVdPMWFpFMHMHWlPWMVV
BccsFzrBcsfpccccgFmQqlGNqCTLTlQnqgLlRG
MZbVSMddddSPPtdHPVJPJdTllqLNLGGTNCCRhTnHTQHh
DMwtbVZDZbSbpprcpccppwrq
bSZTdNqFjjzjqQMQ
WtRztLsWJpPLzrsMDlDQjMhVMC
pcgHRpHmWPJgLRzBJHBPPRBfvvfGNGvvFwfvSvfTmNNZfN
RjvBljWTTWTlqmBvHjGptRgccZcbPtcttbpzbn
VhDSDdJLJpSNNVVznPzzzSzcZFngZt
LsMdQNVMHsBHjqps
rSPSLTnSCClfSFCR
MwtZgwNBzzTjzZMbbmjNtwmBcRvFqQllqtQRlFRVqRqVVcvq
TsMhZsjNjBbTbBbwZLpDnHdDGdHWnpGHnh
LfdssTFBjFHSwlhzCcZZgMMfMhZZ
DmtDvrpmNStVvqpPczrZMMhZhhChCC
vJtJpQWvNVDtJFbHlJSlBbSF
PgvHLbcgRcGGHzRvgGgchBzsCZnmNZmZddrCrvdddZCZrF
JQBMjlStJrQsZFrNCZ
JSJTlqMtjptlplSSqJVDBqphwhhwHRPRggGbGzHbgzVRPH
pBsztsZdBsnWhntVnhtVTqTWNQlGGTGGFFlQFlTl
fDvLSMcbDbfMrGqFqSGwSQPzqz
zjcvLMMvffLjgggzfjjJCCLcdBtRphddBmmZBpCZZpZpmmhs
gmmSDplcPHDfHDlbVNrtCtCCNqHvTn
QGwJjzdPMzJhFLwnbvMqrTVCCMnvMv
LQQZdGjGdJhFBFQGjLGBJzzsBSWcPflllcfmDmfBsmBWPs
sMppbLDRMQbrTDTJjwcqnfnjwwnw
CgmFgSPHPzHgdmJWZZFzCzZZcVnGGnttWtVVVnccfjVqwVff
PhCChPSNgPgPJhPHhFZgsDNRspsvMNQLRvNDvpbD
pHnVnlRGVpfgpfgCpCTz
LCNQPqZCqNSSZCStzPgTmztwPfzwzT
dbSqhjhqQhNLQLFjLjGvFcRnCcsvRVvvsFnG
QTdnDTDQbCnMdbqdwSmJBljFJZhttJZMSh
HfNfLNzGLsgWBpGJthlZFBSB
ssRPHPfNsWHzZZvrvHfgLzNwnbbVVRwwRbVVcqDTddCVdD
ZhZBrJssjrNsbRtWpjwjlmlm
qTfHzGTfTGqqLGMdCCRcmmRRZcbPMccWmcRw
dVCZdDHdGHQhBVNJSsBhBF
NsplbGDbblHcbCpDlDGDPlPpJjdrVjgrvHnghvVdJrJdvvdn
tQFMZNWSmWFQRzQSwtzFmwFFJdVBghVrnBjVjBgrvVjMvrhJ
FFRmFZZRzQRmFLQSZZWQWFCPCNGcTCpGpfGfLTpblpff
dnhQHqQCnqWwNQCwCRRdJjjJVVPmVVJsJP
LccFRDgfMgLFBJVlmVVmgjrPzZ
pvfGpRpSpTnTQbvbTv
nwNlWwhWwNmJvQQdzdzZGMqDzn
rcVscPfrLcfvjTFcQDqGdZqMzMSHZHjS
LsfbbFcvVgRRblJRNR
Rmrrlmltcffhllfl
DDZMMMFZVsFsWZDSHhPPfgQbPPnQgcHctf
zGMGSBVDWCrvwjtBvm
DCZHwdDwNNGNZDZCjjtpTHLvtlgLbRLttlTL
BzPzBJffJJQgLlRgGztQ
PJffcJhJfNNSwFhGZC
blplfHbwZSfbcbwSbfVSHDHcNvdrvrWsCrvWVCRWnvNndtWW
hQzBTQLLMBWBsnsnNC
zMsgTjqTqPpZHbfp
ZLNNLtfZhRJQtpQhNRttZRqcGFcqGBzjrcqclGScFljjcj
VnvVVPMWHwgJCMvwdcGFdFrGcwzGBG
WHgPJJvWVTgnvgvTHmWCHmsNZRtNRDZpfZQffZZssR
rZgMFMVVjGbVSqZbhftLRDmCGRCNDCtm
cdddQzdWsWnQvzscnfRHmfnDNtLNChRmfH
zplDQdDzwszlDsWdPcldzMFFrFrBFgpqVBZgSgZFrF
gbzfbTvbJgbvzvTvJvJmzvjcBBQSfWDLCSBQQfLZWSCdBHHD
GhnMhsGrMNPPwnwsRPNsFCZDWHZdWBWHdrZLdCHBBC
PsnGsssGNsNRFsLGwMVNccJVmbjcjJblbzTVjlTz
RfBqNfVmPLTTTVRZMMBWjlMvBgbbMs
rHJzDwJdHzQgbMQlWMhd
HtJrpCcHflLPFfpq
SSGtmjQFStDbQbqGWJNnpZwgPsZjnJNNfZ
RdClRMhlldHdlvdThNgwfJNRspNwJpwZcN
CMBLgvvBLhrrBHTCVVLBQrWtbrDGmbtWGtzDQFGb
ZRRCqHpRdztLSqWz
hRsGjMVccGshPVDVcBmfgFFzggFgfBmWWtSd
PVjlGhcGJjGPsGMjjDVrMTpRnvRZlHnZNNQbHppTTC
QjbjWWlndRbwwwQWQdtpTVVZtzRPhHDzThhP
fFfLsvrLCrmvGlSfLSrlPHThDzTztHVtzDzGtTVh
fvrgsfccFLLLSvfMCCSWBjdMqdqNWBdBQNnWld
pjGPvvbllvqGvGjwMbpbRmgSmSwtRtShgSSWWQmW
DffTZLLzFFFTCRJMhWBzhmhgJt
CVVZLLTTsZTFCnMffMTFHffLVpGpNqGjNbNPljqVPcGNGlcv
rvJfztqQJqqrqHHwCzClTbBhDBBDrbSgphbVTrrV
FFGdNWFLGWMmLDbpRwVbgRBp
dmNGmZjMjQwtHCCw
MSGbqbqMbbGDhSSGDhLNBPNcrDPPfzfczPfrnv
rRwsrljslRgslwwgpssCjRtBNvnmPmBmccvmPnmzcP
CjVjsssJQpTCrCCgHJLMSZbhMhWGZhHG
JtBGBFGRVGVLLctRttthLFRBDQlDppljJwNQlpHHQqDHbHHN
szSZTrzdzTSMdzsmsqqQqwdbgDNqgQNjlN
SzmrlWPrlfPMsMZTPtCVCFRhhvhccLFPvL
chmbsMDMMcBnGbZBzZGL
JjjgJrJJggNgtrQSQBLjWBZlGnnB
rFNrFtFCRNVrrsHmMDcsLqMhMF
DLMwrBGgrBBDrcBcNBgWhpGhqVhhqSjqqqmjjp
JfJCZCdtlbZlHHbjWVpPmHWb
lTtZtnFQCztWFzJflZLcsrLFNDRNBcswcLMM
tsVttVCBsCcCqPqwvtqNPQjWDDWjzQQWnpJQSrWJJN
LMRdZvHGgMmZZGGLGLbhLhJpjWrSjndWJpSJrJppJnpj
RhRgLMlmgMGMFGLlTtcBvwcfFCtVvfFT
llBBmtncBglfqwsdwsjdbHwQHm
zGRhPJvFzhvFvMDGFvGPwSWWQpdpHSwSjWjHsWMw
JGFhDPrLTzhLhvFPzPjLjTzFlBqltnCqqBffcTgfnZfCfCnB
QWQGNHQBffCNDMPdRTDLPVMN
hrtlhtzZwJtwwgFgtlJthJJtZMqPVVpLmDVqRDmVPmMPVRTV
SJSSnJwJlsFFvcHSBbfLQHGL
zMNVzhNFsdNssmhlvtQvlttBlVGbTt
wHpFwjHjLFHlwtncTQlnwn
CCpjpqLCLqJggghqRmFsNRFmPszh
CTjmprmNcnmCNVQbstnstvbnQv
jqqdGhHgPRdfRRQvfLQffz
BGgqBhMdgqBHMDDqqMPwgdhSTJNjjmJWWCTCCmwTWZNpmZ
LqSDFFmdqDBDbbBHWl
dQcRpgwRQPngBWHbVWht
vdQMJQCQQvrJNqrTNsSZSmZT
cqrHcHHFNFPLLNPHLWnHHFHFjvlbZfWjSjBjZfSblhbBSbSf
VdVTGwTzTwTpMJslvjfsbbZSvnBClj
nJdGmmTpTTdmNQNNLPPmDFQL
VcjpTTtpcbThJBTTcjBvSPJzJlvPlwfJrgrgvw
dmshCNqnqdhmRsCsqCnrNgPPrPfzrNLfSwSgzl
ddQZdFnhsMttFTbDDD
hLThMTSdfMzzLzTLsFTbwtDvtsFTnttF
pZlNllPWrPCQPQlWNqjrqrjsnfDFbbtbstwswtvDnwtwjt
pCNNQBCClQrplrfHQpQdSRMSVRhJzRchRhGHSh
RZfVfRnTcPQWZcRVcRNSvljQsSSjNvvNqvss
pwbwgmqJhGlNvvzgMM
pthrhpmthmwhHHpLbbdrJmLWWRPTRZnCnPCPBnWTWTZq
nzsJJsMjGMMsQFbnNmLnmCfb
HlllPPTPlWTPDRRDRHcwwhrLLZfQmgmmQCFHvNZCgfggZQ
lPcNTwNWddGsMSttdjzj
bTbJZJDVFdqpBZTFTZJprdcsjjGszmjQszcjzDvsgccv
HHLnhMNCCPhfhCLMlPlnvgGfctscSvtSjGjztQtm
wWNQMPPMwlPHHPnnRLwWpJbrbbqbdppqJVJdZV
gpgpNnnrhwBVWFqgjqqF
ZCTsdRbCGZpZzCSGbWmtMBmWtqBBqdjjmq
LcsTSlplZrJNcQQPvH
DJDpMcqJDcDddNcJPGcJGFfnfZZmZZfRQZRNmVQVnBNn
WWThvSSHFshlSsHvgTHLlzBQfVWwmwnnfmRQWnQVRn
vljlgHjhstHbLhjLjrbPqMGJcJFJCMPrdF
pJlPMpMBrrMcnrBBMMrvdhdgFvmcFdWtmdtftg
bVVRmTRVTVVSVVVzZZqsggFHWTWtWffWFfWdtHdH
RjLQDSzmVsjRRZSZQrCMJDPwlnJJnGGrPB
GRgJtglPGlCrhQQrfW
vSjvZvZHNBjZSvwjvmvNDqhhFqhHrMhrHpfWqQfhpW
NBmwDSbZbvsNNBjmZfJzJgbVnGJbzVzPVRtL
QQZVQCdlVmdZnWmJBrLwSJRdggwdJr
DqHhPhcpvDqPFjhHjtFPssSJNfSBwBvffrgJwwJLBJbr
jpsHcptHsqtPttsjctpFhGlZwCMlWMmWGCWVQnTMVWmz
zzvnHjHWSfnvzpnfSRHdgrrsmWmhVrrwwbTrTmsrwm
NlLNGqqclqlZZCLCGGCPllJhhPJbrmpmrwVshFVsJbwr
DMLDNCZQCGLQGDtQpGtMjRdfdSRSSBtjtBjfjgjS
WBBJfjBQJjftGCbttVJptC
sdlmTHsqNsqpRtGcbWdbnR
svNMhmWHNmvmvHZWTvBQDgSSjDFPSBSFPP
mrlgqncgwHdqWWhRNtRttSvbRwwSvN
jZLCZVZzVcCTcpCDVSBBSbvvRFbfDBSDNS
VPJVpQjTZLjVLJJQGZTZGcQVghsGlmhshlqnghqrdrgldhlW
qwGDMqMFWbFbqbDwMgqgnjfnffffcTTjNnpTfBncZZ
lSdclSltlzPsJlhNNfTQPTmQhpPh
LtllsscLLLvvJlSzWGqwrDGqvbqMwMGb
bnfvnnQsVTdHQDmdNN
fwlttwrfSfLwdGZGmGND
qlPrjjplfSpjSltfttBBsvgzgbgnggBqWVvC
HHrBSmBqBHdHCFcQsc
WqtMDDnMMZhMhcsQVM
bqtbGDLLTTnRPwvGgBNmNrwvjm
RwWzWFwBcdSdMgJW
mrTjVQDQthQvjrvTmggFbbdgSJcJDFgSdg
phhFtvjNvFvTTvmTHZzlGlzZRZLBlzRp
cHlZmZmJSHZcTVGmvZVcGVHlNtbDNbtWFWdtlbCWbWtQDFdr
pwfwgRhngPjjtdWdNtFrdFwT
RTgMpfhBcMJGHqcz
dmCbpCLQVFmCRddCTFLCgZtWPNBhSNNwZWgWZvSwhN
rDzGDjJHhhwzThBS
rJrclsjjsJMJnJMLnbQQQFmRTqLVRT
TgFTGPtrWHzgCJDz
fQbfLwbbFbWjHJHWjd
LvQvwVfQvQhLLLLsmMBfLfBhqchtGFSNSFNqrSqPcqSGttSN
MsMmFgTVMMgMdFVMhdzWqCCBCWjWqBWqhzzL
nHfZDlbvcrDpcpcfDJbNJqGLbCjBmjLzJC
RnDZHwmmTwVMTsMS
NpdpdnjNCRjBnHRPpBDnhSdSwFFLFdScFFWcFWLd
stqMrMZtsQMJmMqvrtqMbstQVchPFWgFVVFVwfWJcSSWVSSV
MQrZzbvMrrrZZtZmstMtMsDRRjPHCGTjBnzpnDHTCGjG
ClGGvDMGMNhNSmFVPbpgFgmFgZPb
WhTTLWsBBWTcrPpggtQpsQFpVb
fBRTqWLjTrzDNhMvCSGDzl
jbzjttVzpbWzWVbTtzWzVwPbPPcwDDccccFNFLMFsm
rlghJZHmCHvHJvRLSNLhhhccNPwcMP
QffmBZRBGtVTBdTG
bDRqHwwRpNPnbppn
FqrlQSQJSVsQrSCmpdPNpcNCcP
jFZjrssjBhrZVhJLLGHfMHfwtqRjMqRTvD
SMMCTBzFfSRhTThCSMRSzzHnJgqGDHQgGVDnqrqnqqnqcQ
ljvjpWPbrWWtrbmDVDlmnDnqVmgJ
bNjsNPrNPtswfZzfTSTBwhSM
hNMNdssdMqdTQchqgNZzHtwmwGHHzmQZGHDH
JrbJvJrvLrPjrPCVCjRBLPbzfRFZmzwHgFHmGHmwFwzFZR
rpbrvVjPCBbCJrCSLSPsTlphNncMglcNTMWMql
fGWGHbrllCCWWllFNPQSZvdPSvdZTffZ
tqssVjJMJWzWVvSvWS
qtwMwDWjnRRwssWjngwjjnhhDcCLhhCFHlcmcbCHFmDC
rFTdFjdRDTTlDWCqvhwLhwZdLS
QzfJfnfsbsJHMnNmHhVpCZwSQSWqSqVQhS
nJnczsHzNMmBJnbnbNwnfzJfcDTltllRTgPlFlgPrTDjPRGl
ZLCGDvvJlvGChSPZWPSsZWdRRN
rQccBwcccnHmQggnVLPLWpgVWPpWzSRs
fmwTfTHnMBTfJDbfftJLvhlL`;

main(data);