SyntaxHighlighter.brushes.autolisp = function()
{
	alert("OK");
	/* Contributed by Aleksei Teplykh */
	
	//var operators = '+ - * / = /= < <= > >= ~ 1+ 1-';
	var symbols   =	':constants-prefix :methods-prefix :prog-id :properties-prefix :tlb-filename :vlax-false' +
					':vlax-null :vlax-true :vlr-abortattach :vlr-abortdeepclone :vlr-abortdxfin :vlr-abortdxfout' +
					':vlr-abortinsert :vlr-abortrestore :vlr-abortwblock :vlr-acdb-reactor :vlr-beginattach' +
					':vlr-beginclose :vlr-begindeepclone :vlr-begindeepclonexlation :vlr-begindoubleclick :vlr-begindwgopen' +
					':vlr-begindxfin :vlr-begindxfout :vlr-begininsert :vlr-begininsertm :vlr-beginrestore :vlr-beginrightclick' +
					':vlr-beginsave :vlr-beginwblock :vlr-beginwblockid :vlr-beginwblockobjects :vlr-beginwblockpt :vlr-cancelled' +
					':vlr-comandeered :vlr-command-reactor :vlr-commandcancelled :vlr-commandended :vlr-commandfailed :vlr-commandwillstart' +
					':vlr-copied :vlr-databaseconstructed :vlr-databasetobedestroyed :vlr-deepclone-reactor :vlr-docframemovedorresized' +
					':vlr-docmanager-reactor :vlr-documentbecamecurrent :vlr-documentcreated :vlr-documentlockmodechanged :vlr-documentlockmodechangevetoed'
					':vlr-documentlockmodewillchange :vlr-documenttobeactivated :vlr-documenttobedeactivated :vlr-documenttobedestroyed' +
					':vlr-dwg-reactor :vlr-dwgfileopened :vlr-dxf-reactor :vlr-dxfincomplete :vlr-dxfoutcomplete :vlr-editor-reactor' +
					':vlr-endattach :vlr-enddeepclone :vlr-enddwgopen :vlr-endinsert :vlr-endrestore :vlr-endwblock :vlr-erased' +
					':vlr-goodbye :vlr-insert-reactor :vlr-layoutswitched :vlr-linker-reactor :vlr-lisp-reactor :vlr-lispcancelled' +
					':vlr-lispended :vlr-lispwillstart :vlr-mainframemovedorresized :vlr-miscellaneous-reactor :vlr-modified' +
					':vlr-modifiedxdata :vlr-modifyundone :vlr-mouse-reactor :vlr-object-reactor :vlr-objectappended :vlr-objectclosed' +
					':vlr-objecterased :vlr-objectmodified :vlr-objectopenedformodify :vlr-objectreappended :vlr-objectunappended' +
					':vlr-objectunerased :vlr-openedformodify :vlr-otherattach :vlr-otherinsert :vlr-otherwblock :vlr-pickfirstmodified' +
					':vlr-reappended :vlr-redirected :vlr-rxapploaded :vlr-rxappunloaded :vlr-savecomplete :vlr-subobjmodified :vlr-sysvar-reactor' +
					':vlr-sysvarchanged :vlr-sysvarwillchange :vlr-toolbar-reactor :vlr-toolbarbitmapsizechanged :vlr-toolbarbitmapsizewillchange :vlr-unappended' +
					':vlr-undo-reactor :vlr-undosubcommandauto :vlr-undosubcommandback :vlr-undosubcommandbegin :vlr-undosubcommandcontrol :vlr-undosubcommandend' +
					':vlr-undosubcommandmark :vlr-undosubcommandnumber :vlr-unerased :vlr-unknowncommand :vlr-wblock-reactor :vlr-wblocknotice' +
					':vlr-window-reactor :vlr-xref-reactor :vlr-xrefsubcommandattachitem :vlr-xrefsubcommandbinditem :vlr-xrefsubcommanddetachitem' +
					':vlr-xrefsubcommandoverlayitem :vlr-xrefsubcommandpathitem :vlr-xrefsubcommandreloaditem :vlr-xrefsubcommandunloaditem';
	var globals   =	'*error* *last-value* *merr* *merrmsg*';
	var constants = 'ac0degrees ac100_1 ac10_1 ac180degrees ac1ft_1ft ac1in_1ft ac1_1 ac1_10 ac1_100 ac1_128in_1ft ac1_16 ac1_16in_1ft ac1_2' +
					'ac1_20 ac1_2in_1ft ac1_30 ac1_32in_1ft ac1_4 ac1_40 ac1_4in_1ft ac1_5 ac1_50 ac1_64in_1ft ac1_8 ac1_8in_1ft ac2000_dwg ac2000_dxf' +
					'ac2000_template ac2004_dwg ac2004_dxf ac2004_template ac2007_dwg ac2007_dxf ac2007_template ac2010_dwg ac2010_dxf ac2010_template ac270degrees' +
					'ac2_1 ac3dface ac3dpolyline ac3dsolid ac3in_1ft ac3_16in_1ft ac3_32in_1ft ac3_4in_1ft ac3_8in_1ft ac4_1 ac6in_1ft ac8_1 ac90degrees acabove' +
					'acactiveviewport acaisloaded acalignmentaligned acalignmentbottomcenter acalignmentbottomleft acalignmentbottomright acalignmentcenter acalignmentfit' +
					'acalignmentleft acalignmentmiddle acalignmentmiddlecenter acalignmentmiddleleft acalignmentmiddleright acalignmentproperty acalignmentright acalignmenttopcenter' +
					'acalignmenttopleft acalignmenttopright acalignpntacquisitionautomatic acalignpntacquisitionshifttoacquire acallcellproperties acallnormal acallviewports acalwayscrease' +
					'acalwaysrightreadingangle acangular acany acapplied acarc acarchitectural acarea acarrowarchtick acarrowboxblank acarrowboxfilled acarrowclosed acarrowclosedblank acarrowdatumblank' +
					'acarrowdatumfilled acarrowdefault acarrowdot acarrowdotblank acarrowdotsmall acarrowintegral acarrownone acarrowoblique acarrowopen acarrowopen30 acarrowopen90 acarroworigin acarroworigin2' +
					'acarrowsmall acarrowsonly acarrowuserdefined acattachmentallline acattachmentbottomline acattachmentbottomofbottom acattachmentbottomoftop acattachmentbottomoftopline acattachmentcenter' +
					'acattachmenthorizontal acattachmentlinedcenter acattachmentmiddle acattachmentmiddleofbottom acattachmentmiddleoftop acattachmentpointbottomcenter acattachmentpointbottomleft' +
					'acattachmentpointbottomright acattachmentpointmiddlecenter acattachmentpointmiddleleft acattachmentpointmiddleright acattachmentpointtopcenter acattachmentpointtopleft acattachmentpointtopright' +
					'acattachmenttopoftop acattachmentvertical acattribute acattributemodeconstant acattributemodeinvisible acattributemodelockposition acattributemodemultipleline acattributemodenormal' +
					'acattributemodeverify acattributereference acautoscale acbackgroundcolor acbasemenugroup acbestfit acbeziersurfacemesh acbitproperties acblockbox acblockcell acblockcircle acblockcontent' +
					'acblockhexagon acblockimperial acblockreference acblockslot acblocktriangle acblockuserdefined acblue acbottom acbottomcenter acbottomleft acbottommask acbottomright acbottomtotop acbuffer' +
					'acbyblock acbycolor acbylayer acbystyle accastsandreceivesshadows accastsshadows acccw accellalign accellbackgroundcolor accellbackgroundfillnone accellbottomgridcolor accellbottomgridlineweight' +
					'accellbottomvisibility accellcontentcolor accellcontentlayoutflow accellcontentlayoutstackedhorizontal accellcontentlayoutstackedvertical accellcontenttypeblock accellcontenttypefield' +
					'accellcontenttypeunknown accellcontenttypevalue accelldatatype accellleftgridcolor accellleftgridlineweight accellleftvisibility accellmarginbottom accellmarginhorzspacing accellmarginleft' +
					'accellmarginright accellmargintop accellmarginvertspacing accellrightgridcolor accellrightgridlineweight accellrightvisibility accellstatecontentlocked accellstatecontentmodified accellstatecontentreadonly' +
					'accellstateformatlocked accellstateformatmodified accellstateformatreadonly accellstatelinked accellstatenone accelltextheight accelltextstyle accelltopgridcolor accelltopgridlineweight accelltopvisibility' +
					'accenteralignment accenterline accentermark accenternone acchord accircle accolormethodbyaci accolormethodbyblock accolormethodbylayer accolormethodbyrgb accolormethodforeground acconnectbase' +
					'acconnectextents accontentcolor accontentlayout accontentproperties accontrolvertices accreasebylevel accubicspline3dpoly accubicsplinepoly accubicsurfacemesh accustomparameterization' +
					'accw accyan acdataformat acdatahorzbottomcolor acdatahorzbottomlineweight acdatahorzbottomvisibility acdatahorzinsidecolor acdatahorzinsidelineweight acdatahorzinsidevisibility acdatahorztopcolor' +
					'acdatahorztoplineweight acdatahorztopvisibility acdatarow acdatarowalignment acdatarowcolor acdatarowdatatype acdatarowfillcolor acdatarowfillnone acdatarowtextheight acdatarowtextstyle' +
					'acdatatype acdatatypeandformat acdatavertinsidecolor acdatavertinsidelineweight acdatavertinsidevisibility acdatavertleftcolor acdatavertleftlineweight acdatavertleftvisibility' +
					'acdatavertrightcolor acdatavertrightlineweight acdatavertrightvisibility acdate acdecimal acdefaultunits acdegreeminuteseconds acdegrees acdegrees000 acdegrees090 acdegrees15 acdegrees180' +
					'acdegrees270 acdegrees30 acdegrees45 acdegrees60 acdegrees90 acdegreesany acdegreeshorz acdegreesunknown acdemandloadcmdinvoke acdemandloaddisabled acdemandloadenabled acdemandloadenabledwithcopy' +
					'acdemandloadonobjectdetect acdemanloaddisable acdgnunderlay acdiagonal acdim3pointangular acdimaligned acdimangular acdimarchitectural acdimarchitecturalstacked acdimarclength acdimdecimal' +
					'acdimdiametric acdimenableupdate acdimengineering acdimfractional acdimfractionalstacked acdimlarchitectural acdimldecimal acdimlengineering acdimlfractional acdimlinewithtext' +
					'acdimlscientific acdimlwindowsdesktop acdimordinate acdimprecisioneight acdimprecisionfive acdimprecisionfour acdimprecisionone acdimprecisionseven acdimprecisionsix acdimprecisionthree' +
					'acdimprecisiontwo acdimprecisionzero acdimradial acdimradiallarge acdimrotated acdimscientific acdimwindowsdesktop acdisplay acdisplaydcs acdistance acdouble acdragdisplayautomatically' +
					'acdragdisplayonrequest acdragdonotdisplay acdrawcontentfirst acdrawleaderfirst acdrawleaderheadfirst acdrawleadertailfirst acdwfunderlay acedrepeatlastcommand acedscm acellipse' +
					'acenablebackgroundcolor acenablescm acenablescmoptions acendsnormal acengineering acenglish acextendboth acextendnone acextendotherentity acextendthisentity acextents acexternalreference' +
					'acfalse acfirstextensionline acfirstnormal acfit acfitcurvepoly acflowdirbtot acflowdirection acfontbold acfontbolditalic acfontitalic acfontregular acforediting acforexpression acfractional' +
					'acfullpreview acgeneral acgradientobject acgrads acgreen acgridlinestyledouble acgridlinestylesingle acgroup achatch achatchlooptypedefault achatchlooptypederived achatchlooptypeexternal' +
					'achatchlooptypepolyline achatchlooptypetextbox achatchobject achatchpatterntypecustomdefined achatchpatterntypepredefined achatchpatterntypeuserdefined achatchstyleignore achatchstylenormal' +
					'achatchstyleouter acheaderhorzbottomcolor cheaderhorzbottomlineweight acheaderhorzbottomvisibility acheaderhorzinsidecolor acheaderhorzinsidelineweight acheaderhorzinsidevisibility' +
					'acheaderhorztopcolor acheaderhorztoplineweight acheaderhorztopvisibility acheaderrow acheaderrowalignment acheaderrowcolor acheaderrowdatatype acheaderrowfillcolor acheaderrowfillnone' +
					'acheaderrowtextheight acheaderrowtextstyle acheadersuppressed acheadervertinsidecolor acheadervertinsidelineweight acheadervertinsidevisibility acheadervertleftcolor acheadervertleftlineweight' +
					'acheadervertleftvisibility acheadervertrightcolor acheadervertrightlineweight acheadervertrightvisibility acheight achide achorizontal achorizontalalignmentaligned achorizontalalignmentcenter' +
					'achorizontalalignmentfit achorizontalalignmentleft achorizontalalignmentmiddle achorizontalalignmentright achorizontalangle achorzbottom achorzcellmargin achorzcentered achorzinside' +
					'achorztop acignoremtextformat acignoreshadows acinches acinsertangle acinsertunitsangstroms acinsertunitsastronomicalunits acinsertunitsautoassign acinsertunitscentimeters acinsertunitsdecameters' +
					'acinsertunitsdecimeters acinsertunitsfeet acinsertunitsgigameters acinsertunitshectometers acinsertunitsinches acinsertunitskilometers acinsertunitslightyears acinsertunitsmeters' +
					'acinsertunitsmicroinches acinsertunitsmicrons acinsertunitsmiles acinsertunitsmillimeters acinsertunitsmils acinsertunitsnanometers acinsertunitsparsecs acinsertunitsprompt acinsertunitsunitless' +
					'acinsertunitsyards acintersection acinvalidcellproperty acinvalidgridline acinvisibleleader acisolines acisoparms acjis ackeyboardentry ackeyboardentryexceptscripts ackeyboardrunningobjsnap' +
					'aclastnormal aclayout acleader acleftalignment acleftmask aclefttoright aclimits acline aclinenoarrow aclinespacingstyleatleast aclinespacingstyleexactly aclinewitharrow aclnwt000 aclnwt005' +
					'aclnwt009 aclnwt013 aclnwt015 aclnwt018 aclnwt020 aclnwt025 aclnwt030 aclnwt035 aclnwt040 aclnwt050 aclnwt053 aclnwt060 aclnwt070 aclnwt080 aclnwt090 aclnwt100 aclnwt106 aclnwt120 aclnwt140' +
					'aclnwt158 aclnwt200 aclnwt211 aclnwtbyblock aclnwtbylayer aclnwtbylwdefault aclock aclong aclsall aclscolor aclsfrozen aclslinetype aclslineweight aclslocked aclsnewviewport aclsnone' +
					'aclson aclsplot aclsplotstyle acmagenta acmarginbottom acmarginleft acmarginright acmargintop acmax acmenufilecompiled acmenufilesource acmenuitem acmenuseparator acmenusubmenu acmergeall' +
					'acmergecellstyleconvertduplicatestooverrides acmergecellstylecopyduplicates acmergecellstyleignorenewstyles acmergecellstylenone acmergecellstyleoverwriteduplicates acmetric acmiddlecenter' +
					'acmiddleleft acmiddleright acmillimeters acmin acminsertblock acmleader acmline acmodelspace acmovetextaddleader acmovetextnoleader acmtext acmtextcontent acnative acnodrawingareashortcutmenu' +
					'acnonecontent acnonecrease acnooverrides acnorm acnotstacked acnounits acnurbsurface acobjectid acocs acoff acon acopqhighgraphics acopqlowgraphics acopqmonochrome acoqgraphics acoqhighphoto' +
					'acoqlineart acoqphoto acoqtext acotembedded acotlink acotstatic acoutside acoverfirstextension acoversecondextension acpalettebydrawing acpalettebysession acpaperspace acpaperspacedcs' +
					'acparseoptionnone acpartialmenugroup acpartialpreview acpdfunderlay acpenwidth013 acpenwidth018 acpenwidth025 acpenwidth035 acpenwidth050 acpenwidth070 acpenwidth100 acpenwidth140 acpenwidth200' +
					'acpenwidthunk acpixels acplotorientationlandscape acplotorientationportrait acpoint acpoint2d acpoint3d acpolicylegacy acpolicylegacydefault acpolicylegacylegacy acpolicylegacyquery acpolicynamed' +
					'acpolicynewdefault acpolicynewlegacy acpolyfacemesh acpolyline acpolylinelight acpolymesh acpredefinedgradient acpreferenceclassic acpreferencecustom acpreservemtextformat acpreset' +
					'acprinteralertonce acprinteralwaysalert acprinterneveralert acprinterneveralertlogonce acproxyboundingbox acproxynotshow acproxyshow acpviewport acquadspline3dpoly acquadsplinepoly' +
					'acquadsurfacemesh acr12_dxf acr13_dwg acr13_dxf acr14_dwg acr14_dxf acr15_dwg acr15_dxf acr15_template acr18_dwg acr18_dxf acr18_template acradians acraster acray acreceivesshadows acred' +
					'acregion acrepeatlastcommand acresbuf acrightalignment acrightmask acrighttoleft acrotation acruled acrx_cmd_modal acrx_cmd_redraw acrx_cmd_transparent acrx_cmd_usepickset acscale' +
					'acscaletofit acscientific acscm acsecondextensionline acsectiongenerationdestinationfile acsectiongenerationdestinationnewblock acsectiongenerationdestinationreplaceblock' +
					'acsectiongenerationsourceallobjects acsectiongenerationsourceselectedobjects acsectionstateboundary acsectionstateplane acsectionstatevolume acsectionsubitembackline acsectionsubitembacklinebottom' +
					'acsectionsubitembacklinetop acsectionsubitemknone acsectionsubitemsectionline acsectionsubitemsectionlinebottom acsectionsubitemsectionlinetop acsectionsubitemverticallinebottom' +
					'acsectionsubitemverticallinetop acsectiontype2dsection acsectiontype3dsection acsectiontypelivesection acselectionsetall acselectionsetcrossing acselectionsetcrossingpolygon' +
					'acselectionsetfence acselectionsetlast acselectionsetprevious acselectionsetwindow acselectionsetwindowpolygon acsetdefaultformat acshadeplotasdisplayed acshadeplothidden acshadeplotrendered' +
					'acshadeplotwireframe acshape acshow acsimple3dpoly acsimplemesh acsimplepoly acsmooth acsolid acspline acsplineleader acsplinenoarrow acsplinewitharrow acsqrtchord acstraightleader' +
					'acstring acsubdmesh acsubtraction acsymabove acsyminfront acsymnone actable actablebottomtotop actableflowdownorup actableflowleft actableflowright actableselectcrossing actableselectwindow' +
					'actabletoptobottom actext actextandarrows actextcell actextflagbackward actextflagupsidedown actextheight actextonly actextstyle actitlehorzbottomcolor actitlehorzbottomlineweight' +
					'actitlehorzbottomvisibility actitlehorzinsidecolor actitlehorzinsidelineweight actitlehorzinsidevisibility actitlehorztopcolor actitlehorztoplineweight actitlehorztopvisibility actitlerow' +
					'actitlerowalignment actitlerowcolor actitlerowdatatype actitlerowfillcolor actitlerowfillnone actitlerowtextheight actitlerowtextstyle actitlesuppressed actitlevertinsidecolor' +
					'actitlevertinsidelineweight actitlevertinsidevisibility actitlevertleftcolor actitlevertleftlineweight actitlevertleftvisibility actitlevertrightcolor actitlevertrightlineweight' +
					'actitlevertrightvisibility actolbasic actolbottom actoldeviation actolerance actollimits actolmiddle actolnone actolsymmetrical actoltop actoolbarbutton actoolbarcontrol actoolbardockbottom' +
					'actoolbardockleft actoolbardockright actoolbardocktop actoolbarfloating actoolbarflyout actoolbarseparator actop actopcenter actopleft actopmask actopright actoptobottom actrace actrue' +
					'acturnheight acturns acucs acunder acuniform acuniformparam acunion acunitangle acunitarea acunitdistance acunitless acunitvolume acunknown acunknowncell acunknowndatatype acunknownrow' +
					'acupdatedatafromsource acupdateoptionincludexrefs acupdateoptionnone acupdateoptionoverwritecontentmodifiedafterupdate acupdateoptionoverwriteformatmodifiedafterupdate' +
					'acupdateoptionupdatefullsourcerange acupdatesourcefromdata acusedefaultdrawingareashortcutmenu acusedraftangles acusemaximumprecision acuserdefinedgradient acvertcellmargin' +
					'acvertcentered acverticalalignmentbaseline acverticalalignmentbottom acverticalalignmentmiddle acverticalalignmenttop acvertinside acvertleft acvertright acview acviewport2horizontal' +
					'acviewport2vertical acviewport3above acviewport3below acviewport3horizontal acviewport3left acviewport3right acviewport3vertical acviewport4 acvp100_1 acvp10_1 acvp1and1_2in_1ft acvp1ft_1ft' +
					'acvp1in_1ft acvp1_1 acvp1_10 acvp1_100 acvp1_128in_1ft acvp1_16 acvp1_16in_1ft acvp1_2 acvp1_20 acvp1_2in_1ft acvp1_30 acvp1_32in_1ft acvp1_4 acvp1_40 acvp1_4in_1ft acvp1_5 acvp1_50' +
					'acvp1_64in_1ft acvp1_8 acvp1_8in_1ft acvp2_1 acvp3in_1ft acvp3_16in_1ft acvp3_32in_1ft acvp3_4in_1ft acvp3_8in_1ft acvp4_1 acvp6in_1ft acvp8_1 acvpcustomscale acvpscaletofit acwhite' +
					'acwindow acworld acxline acyellow aczero aczoomscaledabsolute aczoomscaledrelative aczoomscaledrelativepspace';
	var funcs = 	'abs acad-pop-dbmod acad-push-dbmod acadsecurityparams_add_timestamp acadsecurityparams_algid_rc4' +
					'acadsecurityparams_encrypt_data acadsecurityparams_encrypt_props acadsecurityparams_sign_data acad_colordlg acad_helpdlg' +
					'acad_strlsort acad_truecolorcli acad_truecolordlg acenter acet-acad-refresh' +
					'acet-acadreactor-id-add acet-acadreactor-id-remove acet-acadreactor-id-remove-all acet-acadreactor-id-swap acet-acadreactor-ids-get' +
					'acet-addgbinexpress acet-alert acet-alt-viewport acet-angle-equal acet-angle-format' +
					'acet-appid-delete acet-arx-re-load acet-arxload-or-bust acet-autoload acet-autoload-apply' +
					'acet-autoload-exec acet-autoload2 acet-blink-and-show-object acet-block-make-anon acet-block-purge' +
					'acet-bs-strip acet-calc-bitlist acet-calc-round acet-calc-tan acet-cmd-check' +
					'acet-cmd-exit acet-currentviewport-ename acet-dcl-list-make acet-dict-ename acet-dict-filter-match' +
					'acet-dict-make acet-dict-name-list acet-disabled-command acet-dtor acet-dxf' +
					'acet-editor-reactor-add acet-elist-add-defaults acet-elist-filter--4-match acet-elist-filter-and-match acet-elist-filter-gc-match' +
					'acet-elist-filter-match acet-elist-filter-not-match acet-elist-filter-or-match acet-ent-curvepoints acet-ent-geomextents' +
					'acet-error acet-error-init acet-error-restore acet-explode acet-file-attr' +
					'acet-file-backup acet-file-backup-delete acet-file-backup-restore acet-file-chdir acet-file-copy' +
					'acet-file-cwd acet-file-dir acet-file-find acet-file-find-font acet-file-find-image' +
					'acet-file-find-on-path acet-file-mkdir acet-file-move acet-file-open acet-file-readdialog' +
					'acet-file-remove acet-file-rmdir acet-file-systime-compare acet-file-writedialog acet-filename-acad-root' +
					'acet-filename-associated-app acet-filename-dir-on-path acet-filename-directory acet-filename-ext-remove acet-filename-extension' +
					'acet-filename-path-remove acet-filename-supportpath-remove acet-filename-valid acet-full-dwgname acet-general-props-get' +
					'acet-general-props-get-pairs acet-general-props-set acet-general-props-set-pairs acet-geom-angle-to-ellipseangle acet-geom-angle-trans' +
					'acet-geom-arbitrary-x acet-geom-arc-3p-d-angle acet-geom-arc-bulge acet-geom-arc-center acet-geom-arc-d-angle' +
					'acet-geom-arc-delta-angle acet-geom-arc-point-list acet-geom-calc-arc-error acet-geom-cross-product acet-geom-delta-vector' +
					'acet-geom-ellipse-arc-list acet-geom-ellipse-point-at-angle acet-geom-ellipse-point-at-e-angle acet-geom-ellipse-point-list acet-geom-ellipse-to-pline' +
					'acet-geom-ellipseangle-to-angle acet-geom-extents acet-geom-image-bounds acet-geom-image-clip-list acet-geom-insert-clip-list' +
					'acet-geom-insert-point-list acet-geom-intersectwith acet-geom-is-arc acet-geom-list-extents acet-geom-list-fuz' +
					'acet-geom-m-trans acet-geom-matrix-trans acet-geom-midpoint acet-geom-mtxtbox acet-geom-object-end-points' +
					'acet-geom-object-fuz acet-geom-object-normal-vector acet-geom-object-point-list acet-geom-object-z-axis acet-geom-pixel-unit' +
					'acet-geom-pline-arc-info acet-geom-pline-point-list acet-geom-point-fuz acet-geom-point-inside acet-geom-point-rotate' +
					'acet-geom-point-scale acet-geom-rect-points acet-geom-self-intersect acet-geom-spline-point-list acet-geom-ss-extents' +
					'acet-geom-ss-extents-accurate acet-geom-ss-extents-fast acet-geom-textbox acet-geom-trans-image-to-ucs acet-geom-trans-ucs-to-image' +
					'acet-geom-txtbox acet-geom-unit-vector acet-geom-vector-add acet-geom-vector-d-angle acet-geom-vector-parallel' +
					'acet-geom-vector-scale acet-geom-vector-side acet-geom-vertex-list acet-geom-view-points acet-geom-z-axis' +
					'acet-geom-zoom-for-select acet-getvar acet-getvar-cprofile acet-getvar-dwg acet-getvar-fixed-profile' +
					'acet-go-to-express-page acet-group-make-anon acet-hatch-loop-make acet-hatch-loop-make-data-get acet-hatch-loopedge-make' +
					'acet-help acet-help-trap acet-how-to-get-express acet-ini-get acet-ini-set' +
					'acet-init acet-init-acetutil-arx acet-init-add-lib-dir acet-init-exclude-list acet-init-express-installed' +
					'acet-init-express-not-installed-msg acet-init-fas-lib acet-init-force-load-arx-lib acet-init-get-lib-dir acet-init-placemenu' +
					'acet-init-prodkey acet-insert-attrib-get acet-insert-attrib-mod acet-insert-attrib-set acet-insert-spacial-filter' +
					'acet-is-symbol-table acet-layer-locked acet-layer-locked-list acet-layer-unlock-all acet-layerp-mark' +
					'acet-layerp-mode acet-list-assoc-append acet-list-assoc-put acet-list-assoc-remove acet-list-group-by-assoc' +
					'acet-list-insert-nth acet-list-is-dotted-pair acet-list-isort acet-list-m-assoc acet-list-put-nth' +
					'acet-list-remove-adjacent-dups acet-list-remove-duplicates acet-list-remove-nth acet-list-split acet-list-to-ss' +
					'acet-lsp-load acet-lwpline-make acet-menu-load acet-menu-load2 acet-partial-menu-status-get' +
					'acet-partial-menu-status-set acet-path-to-list acet-pline-is-2d acet-pline-make acet-pline-segment-list' +
					'acet-pline-segment-list-apply acet-plines-explode acet-plines-explode-width-data-get acet-plines-rebuild acet-plines-rebuild-apply-widths' +
					'acet-plines-rebuild-set-elevation acet-point-flat acet-pref-supportpath-list acet-pspace-viewport-ename acet-r12-dxf-convert' +
					'acet-re-make acet-reactor-exists acet-reactor-remove acet-reg-del acet-reg-get' +
					'acet-reg-prodkey acet-reg-put acet-reg-setactivex acet-reg-tree-get acet-reg-tree-set' +
					'acet-rtod acet-safe-command acet-set-cmdecho acet-setvar acet-setvar-cprofile' +
					'acet-setvar-dwg acet-setvar-fixed-profile acet-spinner acet-ss-annotation-filter acet-ss-clear-prev' +
					'acet-ss-convert-ellipses-to-plines acet-ss-drag-move acet-ss-drag-rotate acet-ss-drag-scale acet-ss-entdel' +
					'acet-ss-filter acet-ss-filter-current-ucs acet-ss-filter-item acet-ss-filter-validate acet-ss-flt-cspace' +
					'acet-ss-intersection acet-ss-new acet-ss-redraw acet-ss-remove acet-ss-remove-dups' +
					'acet-ss-remove-dups-extents-list acet-ss-remove-dups-generalize-ent acet-ss-remove-dups-reverse acet-ss-scale-to-fit acet-ss-scale-to-fit-base' +
					'acet-ss-sort acet-ss-ssget-filter acet-ss-to-list acet-ss-union acet-ss-visible' +
					'acet-ss-zoom-extents acet-str-collate acet-str-env-expand acet-str-equal acet-str-esc-wildcards' +
					'acet-str-find acet-str-format acet-str-is-printable acet-str-list-select acet-str-lr-trim' +
					'acet-str-m-find acet-str-replace acet-str-space-trim acet-str-to-list acet-str-wcmatch' +
					'acet-sys-beep acet-sys-command acet-sys-control-down acet-sys-foreground acet-sys-keystate' +
					'acet-sys-lasterr acet-sys-lmouse-down acet-sys-procid acet-sys-shift-down acet-sys-sleep' +
					'acet-sys-spawn acet-sys-term acet-sys-wait acet-sysvar-restore acet-sysvar-set' +
					'acet-table-name-list acet-table-purge acet-temp-segment acet-tjust acet-tjust-group-codes' +
					'acet-tjust-keyword acet-ucs-capture-viewports acet-ucs-cmd acet-ucs-get acet-ucs-restore-viewports' +
					'acet-ucs-set acet-ucs-set-z acet-ucs-to-object acet-ui-drag acet-ui-entsel' +
					'acet-ui-fence-select acet-ui-get-long-name acet-ui-getcorner acet-ui-getfile acet-ui-m-get-names' +
					'acet-ui-message acet-ui-pickdir acet-ui-polygon-select acet-ui-progress acet-ui-progress-done' +
					'acet-ui-progress-init acet-ui-progress-safe acet-ui-single-select acet-ui-status acet-ui-table-name-check-flags' +
					'acet-ui-table-name-format acet-ui-table-name-get acet-ui-table-name-get-cmd acet-ui-table-name-get-cmd-list acet-ui-table-name-get-dlg' +
					'acet-ui-table-name-get-ename acet-ui-table-name-get-is-valid acet-ui-table-name-get-item-list acet-ui-table-name-get-pickit acet-ui-table-name-object-data' +
					'acet-ui-txted acet-undo-begin acet-undo-end acet-undo-init acet-undo-restore' +
					'acet-util-ver acet-var-getvar acet-var-setvar acet-vbaload acet-viewport-frozen-layer-list' +
					'acet-viewport-frozen-layer-list-set acet-viewport-lock-set acet-viewport-next-pickable acet-viewport-vpfreeze acet-wmfin' +
					'acet-xdata-get acet-xdata-set acet-xref-cproject-path acet:abortretryignore acet:acetauto' +
					'acet:archive acet:arx-lib acet:defbutton1 acet:defbutton2 acet:defbutton3' +
					'acet:defbutton4 acet:directory acet:fas-lib acet:helpfile acet:hidden' +
					'acet:iconinformation acet:iconquestion acet:iconstop acet:iconwarning acet:idabort' +
					'acet:idcancel acet:idclose acet:idhelp acet:idignore acet:idno' +
					'acet:idok acet:idretry acet:idyes acet:ok acet:okcancel' +
					'acet:prodkey acet:readonly acet:retrycancel acet:system acet:varall' +
					'acet:vardwg acet:varfix acet:varpro acet:website acet:yesno' +
					'acet:yesnocancel acetai_ffile acetai_nofile acetautoarxacedload acetautoarxload' +
					'acetautoload acetautonativeload action_tile add_list ade_endcheckin_message' +
					'ads ai_abort ai_acadapp ai_alert ai_angle' +
					'ai_angtos ai_apploaded ai_aselect ai_aselect1 ai_autossget1' +
					'ai_beep ai_circtan ai_circtanstart ai_common_state ai_dcl' +
					'ai_deselect ai_dim_cen ai_draworder ai_entity_locked ai_entsnap' +
					'ai_error ai_ffile ai_helpfile ai_hideedge_alert ai_nofile' +
					'ai_notrans ai_num ai_onoff ai_popmenucfg ai_putmenucfg' +
					'ai_refedit_alert ai_return ai_rootmenus ai_rtos ai_showedge_alert' +
					'ai_ssget ai_sslength ai_strltrim ai_strrtrim ai_strtrim' +
					'ai_sysvar ai_table ai_tiledvp ai_tiledvp_chk ai_trans' +
					'ai_transd ai_undo_off ai_undo_on ai_undo_pop ai_undo_push' +
					'ai_viewports_alert alert alloc and angle' +
					'angtof angtos append apply arx' +
					'arxload arxunload ascii assoc atan' +
					'atof atoi atom atoms-family autoarxacedload' +
					'autoarxload autoload autonativeload bhatch bherrs' +
					'bns_annotation_ss bns_blink_and_show_object bns_blktbl_match bns_blk_match bns_filter_match' +
					'bns_get_att bns_groups_sel bns_groups_unsel bns_mod_att bns_ss_mod' +
					'bns_tbl_match bns_tjust bns_truncate_2_view bns_vp_on_screen boole' +
					'boundp bpoly caaaar caaadr caaar' +
					'caadar caaddr caadr caar cadaar' +
					'cadadr cadar caddar cadddr caddr' +
					'cadr car cdaaar cdaadr cdaar' +
					'cdadar cdaddr cdadr cdar cddaar' +
					'cddadr cddar cdddar cddddr cdddr' +
					'cddr cdr chr client_data_tile close' +
					'command cond cons cos cvunit' +
					'defun defun-q defun-q-list-ref defun-q-list-set dictadd' +
					'dictnext dictremove dictrename dictsearch dimx_tile' +
					'dimy_tile distance distof done_dialog end_image' +
					'end_list entdel entget entlast entmake' +
					'entmakex entmod entnext entsel entupd' +
					'eq equal eval exit exp' +
					'expand expt fill_image findfile fitstr2len' +
					'fix float fnsplitl foreach function' +
					'gc gcd getangle getcfg getcname' +
					'getcorner getdist getenv getfiled getint' +
					'getkword getorient getpoint getreal getstring' +
					'geturl getvar get_attr get_tile graphscr' +
					'grclear grdraw grread grtext grvecs' +
					'handent help if imageadjust imagefile' +
					'import3ds initcommandversion initdia initget initstring' +
					'inters ismnugrploaded isort is_lead_byte itoa' +
					'kcelloptionnone kformatoptionnone kinheritcellformat lambda last' +
					'layerstate-addlayers layerstate-compare layerstate-delete layerstate-export layerstate-getlastrestored' +
					'layerstate-getlayers layerstate-getnames layerstate-has layerstate-import layerstate-importfromdb' +
					'layerstate-removelayers layerstate-rename layerstate-restore layerstate-save layoutlist' +
					'length lisped list listp load' +
					'loadedp load_dialog log logand logior' +
					'lsh mapcar max maxminpnt mem' +
					'member menucmd menugroup mepguiisloaded min' +
					'minusp mode_tile namedobjdict nentsel nentselp' +
					'new_dialog not nth null numberp' +
					'open or osnap pause pi' +
					'polar pragma prin1 princ print' +
					'progn prompt quit quote read' +
					'read-char read-line redraw regapp rem' +
					'repeat report reverse rtos safearray' +
					'safearray-get-dim safearray-get-element safearray-get-l-bound safearray-get-u-bound safearray-put-element' +
					'safearray-type safearray-value set setcfg setenv' +
					'setfunhelp setq seturl setvar setview' +
					'set_tile sin slide_image snvalid sqrt' +
					'ssadd ssdel ssget ssgetfirst sslength' +
					'ssmemb ssname ssnamex sssetfirst startapp' +
					'start_dialog start_image start_list strcase strcat' +
					'strlen subst substr t tablet' +
					'tblnext tblobjname tblsearch term_dialog terpri' +
					'textbox textpage textscr trace trans' +
					'type unload_dialog untrace variant variant-type' +
					'variant-value vector_image ver verify_arxapp_loaded vl-acad-defun' +
					'vl-acad-undefun vl-arx-import vl-bb-ref vl-bb-set vl-bt' +
					'vl-bt-off vl-bt-on vl-catch-all-apply vl-catch-all-error-message vl-catch-all-error-p' +
					'vl-cmdf vl-consp vl-directory-files vl-doc-export vl-doc-import' +
					'vl-doc-ref vl-doc-set vl-every vl-exit-with-error vl-exit-with-value' +
					'vl-file-copy vl-file-delete vl-file-directory-p vl-file-rename vl-file-size' +
					'vl-file-systime vl-filename-base vl-filename-directory vl-filename-extension vl-filename-mktemp' +
					'vl-get-resource vl-infp vl-init vl-list* vl-list->string' +
					'vl-list-exported-functions vl-list-length vl-list-loaded-vlx vl-load-all vl-load-com' +
					'vl-load-reactors vl-member-if vl-member-if-not vl-mkdir vl-nanp' +
					'vl-position vl-prin1-to-string vl-princ-to-string vl-propagate vl-registry-delete' +
					'vl-registry-descendents vl-registry-read vl-registry-write vl-remove vl-remove-if' +
					'vl-remove-if-not vl-some vl-sort vl-sort-i vl-string->list' +
					'vl-string-elt vl-string-left-trim vl-string-mismatch vl-string-position vl-string-right-trim' +
					'vl-string-search vl-string-subst vl-string-translate vl-string-trim vl-symbol-name' +
					'vl-symbol-value vl-symbolp vl-unload-vlx vl-vbaload vl-vbarun' +
					'vl-vlx-loaded-p vla-activate vla-add vla-add3dface vla-add3dmesh' +
					'vla-add3dpoly vla-addarc vla-addattribute vla-addbox vla-addcircle' +
					'vla-addcone vla-addcustominfo vla-addcustomobject vla-addcylinder vla-adddim3pointangular' +
					'vla-adddimaligned vla-adddimangular vla-adddimarc vla-adddimdiametric vla-adddimordinate' +
					'vla-adddimradial vla-adddimradiallarge vla-adddimrotated vla-addellipse vla-addellipticalcone' +
					'vla-addellipticalcylinder vla-addextrudedsolid vla-addextrudedsolidalongpath vla-addfitpoint vla-addhatch' +
					'vla-additems vla-addleader vla-addleaderline vla-addleaderlineex vla-addlightweightpolyline' +
					'vla-addline vla-addmenuitem vla-addminsertblock vla-addmleader vla-addmline' +
					'vla-addmtext vla-addobject vla-addpoint vla-addpolyfacemesh vla-addpolyline' +
					'vla-addpviewport vla-addraster vla-addray vla-addregion vla-addrevolvedsolid' +
					'vla-addsection vla-addseparator vla-addshape vla-addsolid vla-addsphere' +
					'vla-addspline vla-addsubmenu vla-addtable vla-addtext vla-addtolerance' +
					'vla-addtoolbarbutton vla-addtorus vla-addtrace vla-addvertex vla-addwedge' +
					'vla-addxline vla-addxrecord vla-anglefromxaxis vla-angletoreal vla-angletostring' +
					'vla-appendinnerloop vla-appenditems vla-appendouterloop vla-appendvertex vla-arraypolar' +
					'vla-arrayrectangular vla-attachexternalreference vla-attachtoolbartoflyout vla-auditinfo vla-bind' +
					'vla-block vla-boolean vla-checkinterference vla-clear vla-clearsubselection' +
					'vla-cleartablestyleoverrides vla-clipboundary vla-close vla-converttoanonymousblock vla-converttostaticblock' +
					'vla-copy vla-copyfrom vla-copyobjects vla-copyprofile vla-createcellstyle' +
					'vla-createcellstylefromstyle vla-createcontent vla-createentry vla-createjog vla-createtypedarray' +
					'vla-delete vla-deletecellcontent vla-deletecellstyle vla-deletecolumns vla-deleteconfiguration' +
					'vla-deletecontent vla-deletefitpoint vla-deleteprofile vla-deleterows vla-detach' +
					'vla-display vla-displayplotpreview vla-distancetoreal vla-dock vla-elevateorder' +
					'vla-enablemergeall vla-endundomark vla-erase vla-eval vla-evaluate' +
					'vla-explode vla-export vla-exportprofile vla-fieldcode vla-float' +
					'vla-formatvalue vla-generatelayout vla-generatesectiongeometry vla-generateusagedata vla-get-action' +
					'vla-get-active vla-get-activedimstyle vla-get-activedocument vla-get-activelayer vla-get-activelayout' +
					'vla-get-activelinetype vla-get-activematerial vla-get-activeprofile vla-get-activepviewport vla-get-activeselectionset' +
					'vla-get-activespace vla-get-activetextstyle vla-get-activeucs vla-get-activeviewport vla-get-adcinsertunitsdefaultsource' +
					'vla-get-adcinsertunitsdefaulttarget vla-get-adjustforbackground vla-get-affectsgraphics vla-get-algorithm vla-get-alignment' +
					'vla-get-alignmentpointacquisition vla-get-alignspace vla-get-allowedvalues vla-get-allowlongsymbolnames vla-get-allowmanualheights' +
					'vla-get-allowmanualpositions vla-get-altfontfile vla-get-altrounddistance vla-get-altsubunitsfactor vla-get-altsubunitssuffix' +
					'vla-get-altsuppressleadingzeros vla-get-altsuppresstrailingzeros vla-get-altsuppresszerofeet vla-get-altsuppresszeroinches vla-get-alttabletmenufile' +
					'vla-get-alttextprefix vla-get-alttextsuffix vla-get-alttoleranceprecision vla-get-alttolerancesuppressleadingzeros vla-get-alttolerancesuppresstrailingzeros' +
					'vla-get-alttolerancesuppresszerofeet vla-get-alttolerancesuppresszeroinches vla-get-altunits vla-get-altunitsformat vla-get-altunitsprecision' +
					'vla-get-altunitsscale vla-get-angle vla-get-angleformat vla-get-anglevertex vla-get-annotation' +
					'vla-get-annotative vla-get-application vla-get-arcendparam vla-get-arclength vla-get-arcpoint' +
					'vla-get-arcsmoothness vla-get-arcstartparam vla-get-area vla-get-arrowhead1block vla-get-arrowhead1type' +
					'vla-get-arrowhead2block vla-get-arrowhead2type vla-get-arrowheadblock vla-get-arrowheadsize vla-get-arrowheadtype' +
					'vla-get-arrowsize vla-get-arrowsymbol vla-get-associativehatch vla-get-attachmentpoint vla-get-author' +
					'vla-get-autoaudit vla-get-automaticplotlog vla-get-autosaveinterval vla-get-autosavepath vla-get-autosnapaperture' +
					'vla-get-autosnapaperturesize vla-get-autosnapmagnet vla-get-autosnapmarker vla-get-autosnapmarkercolor vla-get-autosnapmarkersize' +
					'vla-get-autosnaptooltip vla-get-autotrackingveccolor vla-get-autotracktooltip vla-get-axisdirection vla-get-axisposition' +
					'vla-get-backgroundcolor vla-get-backgroundfill vla-get-backgroundlinescolor vla-get-backgroundlineshiddenline vla-get-backgroundlineslayer' +
					'vla-get-backgroundlineslinetype vla-get-backgroundlineslinetypescale vla-get-backgroundlineslineweight vla-get-backgroundlinesplotstylename vla-get-backgroundlinesvisible' +
					'vla-get-backward vla-get-bank vla-get-basepoint vla-get-baseradius vla-get-batchplotprogress' +
					'vla-get-beeponerror vla-get-bigfontfile vla-get-bitflags vla-get-block vla-get-blockcolor' +
					'vla-get-blockconnectiontype vla-get-blockrotation vla-get-blocks vla-get-blockscale vla-get-blockscaling' +
					'vla-get-blue vla-get-bookname vla-get-bottomheight vla-get-breaksenabled vla-get-breaksize' +
					'vla-get-breakspacing vla-get-brightness vla-get-canonicalmedianame vla-get-caption vla-get-categoryname' +
					'vla-get-center vla-get-centermarksize vla-get-centerplot vla-get-centerpoint vla-get-centertype' +
					'vla-get-centroid vla-get-check vla-get-chordpoint vla-get-circumference vla-get-clipped' +
					'vla-get-clippingenabled vla-get-closed vla-get-closed2 vla-get-color vla-get-colorbookpath' +
					'vla-get-colorindex vla-get-colormethod vla-get-colorname vla-get-columns vla-get-columnspacing' +
					'vla-get-commanddisplayname vla-get-comment vla-get-comments vla-get-configfile vla-get-configname' +
					'vla-get-constant vla-get-constantwidth vla-get-constrain vla-get-contentblockname vla-get-contentblocktype' +
					'vla-get-contenttype vla-get-continuousplotlog vla-get-contourlinespersurface vla-get-contrast vla-get-controlpoints' +
					'vla-get-coordinate vla-get-coordinates vla-get-count vla-get-creaselevel vla-get-creasetype' +
					'vla-get-createbackup vla-get-currentsectiontype vla-get-cursorsize vla-get-curvetangencylinescolor vla-get-curvetangencylineslayer' +
					'vla-get-curvetangencylineslinetype vla-get-curvetangencylineslinetypescale vla-get-curvetangencylineslineweight vla-get-curvetangencylinesplotstylename vla-get-curvetangencylinesvisible' +
					'vla-get-customdictionary vla-get-customiconpath vla-get-customscale vla-get-cvhulldisplay vla-get-database' +
					'vla-get-decimalseparator vla-get-defaultinterneturl vla-get-defaultoutputdevice vla-get-defaultplotstyleforlayer vla-get-defaultplotstyleforobjects' +
					'vla-get-defaultplotstyletable vla-get-defaultplottofilepath vla-get-degree vla-get-degree2 vla-get-delta' +
					'vla-get-demandloadarxapp vla-get-description vla-get-destinationblock vla-get-destinationfile vla-get-diameter' +
					'vla-get-dictionaries vla-get-dimconstrdesc vla-get-dimconstrexpression vla-get-dimconstrform vla-get-dimconstrname' +
					'vla-get-dimconstrreference vla-get-dimconstrvalue vla-get-dimensionlinecolor vla-get-dimensionlineextend vla-get-dimensionlinetype' +
					'vla-get-dimensionlineweight vla-get-dimline1suppress vla-get-dimline2suppress vla-get-dimlineinside vla-get-dimlinesuppress' +
					'vla-get-dimstyles vla-get-dimtxtdirection vla-get-direction vla-get-directionvector vla-get-display' +
					'vla-get-displaygrips vla-get-displaygripswithinblocks vla-get-displaylayouttabs vla-get-displaylocked vla-get-displayolescale' +
					'vla-get-displayscreenmenu vla-get-displayscrollbars vla-get-displaysilhouette vla-get-dockedvisiblelines vla-get-dockstatus' +
					'vla-get-document vla-get-documents vla-get-doglegged vla-get-dogleglength vla-get-drafting' +
					'vla-get-drawingdirection vla-get-drawleaderordertype vla-get-drawmleaderordertype vla-get-driverspath vla-get-dwfformat' +
					'vla-get-edgeextensiondistances vla-get-effectivename vla-get-elevation vla-get-elevationmodelspace vla-get-elevationpaperspace' +
					'vla-get-enable vla-get-enableblockrotation vla-get-enableblockscale vla-get-enabledogleg vla-get-enableframetext' +
					'vla-get-enablelanding vla-get-enablestartupdialog vla-get-endangle vla-get-enddraftangle vla-get-enddraftmagnitude' +
					'vla-get-endparameter vla-get-endpoint vla-get-endsmoothcontinuity vla-get-endsmoothmagnitude vla-get-endsubmenulevel' +
					'vla-get-endtangent vla-get-enterprisemenufile vla-get-entitycolor vla-get-entitytransparency vla-get-explodable' +
					'vla-get-extensionlinecolor vla-get-extensionlineextend vla-get-extensionlineoffset vla-get-extensionlineweight vla-get-extline1endpoint' +
					'vla-get-extline1linetype vla-get-extline1point vla-get-extline1startpoint vla-get-extline1suppress vla-get-extline2endpoint' +
					'vla-get-extline2linetype vla-get-extline2point vla-get-extline2startpoint vla-get-extline2suppress vla-get-extlinefixedlen' +
					'vla-get-extlinefixedlensuppress vla-get-facecount vla-get-fade vla-get-feature vla-get-fieldlength' +
					'vla-get-file vla-get-filedependencies vla-get-filename vla-get-files vla-get-filesize' +
					'vla-get-fingerprintguid vla-get-firstsegmentangleconstraint vla-get-fit vla-get-fitpoints vla-get-fittolerance' +
					'vla-get-floatingrows vla-get-flowdirection vla-get-flyout vla-get-fontfile vla-get-fontfilemap' +
					'vla-get-forcelineinside vla-get-foregroundlinescolor vla-get-foregroundlinesedgetransparency vla-get-foregroundlinesfacetransparency vla-get-foregroundlineshiddenline' +
					'vla-get-foregroundlineslayer vla-get-foregroundlineslinetype vla-get-foregroundlineslinetypescale vla-get-foregroundlineslineweight vla-get-foregroundlinesplotstylename' +
					'vla-get-foregroundlinesvisible vla-get-foundpath vla-get-fractionformat vla-get-freeze vla-get-fullcrcvalidation' +
					'vla-get-fullfilename vla-get-fullname vla-get-fullscreentrackingvector vla-get-generationoptions vla-get-gradientangle' +
					'vla-get-gradientcentered vla-get-gradientcolor1 vla-get-gradientcolor2 vla-get-gradientname vla-get-graphicswinlayoutbackgrndcolor' +
					'vla-get-graphicswinmodelbackgrndcolor vla-get-green vla-get-gridon vla-get-gripcolorselected vla-get-gripcolorunselected' +
					'vla-get-gripsize vla-get-groups vla-get-handle vla-get-hasattributes vla-get-hasextensiondictionary' +
					'vla-get-hasleader vla-get-hassheetview vla-get-hassubselection vla-get-hasvpassociation vla-get-hatchobjecttype' +
					'vla-get-hatchstyle vla-get-headersuppressed vla-get-height vla-get-helpfilepath vla-get-helpstring' +
					'vla-get-history vla-get-historylines vla-get-horizontaltextposition vla-get-horzcellmargin vla-get-hwnd' +
					'vla-get-hwnd32 vla-get-hyperlinkbase vla-get-hyperlinkdisplaycursor vla-get-hyperlinks vla-get-imagefile' +
					'vla-get-imageframehighlight vla-get-imageheight vla-get-imagevisibility vla-get-imagewidth vla-get-incrementalsavepercent' +
					'vla-get-index vla-get-indicatorfillcolor vla-get-indicatortransparency vla-get-insertionpoint vla-get-insunits' +
					'vla-get-insunitsfactor vla-get-intersectionboundarycolor vla-get-intersectionboundarydivisionlines vla-get-intersectionboundarylayer vla-get-intersectionboundarylinetype' +
					'vla-get-intersectionboundarylinetypescale vla-get-intersectionboundarylineweight vla-get-intersectionboundaryplotstylename vla-get-intersectionboundaryvisible vla-get-intersectionfillcolor' +
					'vla-get-intersectionfillfacetransparency vla-get-intersectionfillhatchangle vla-get-intersectionfillhatchpatternname vla-get-intersectionfillhatchpatterntype vla-get-intersectionfillhatchscale' +
					'vla-get-intersectionfillhatchspacing vla-get-intersectionfilllayer vla-get-intersectionfilllinetype vla-get-intersectionfilllinetypescale vla-get-intersectionfilllineweight' +
					'vla-get-intersectionfillplotstylename vla-get-intersectionfillvisible vla-get-invisible vla-get-iscloned vla-get-isdynamicblock' +
					'vla-get-islayout vla-get-ismodified vla-get-isopenwidth vla-get-isownerxlated vla-get-ispartial' +
					'vla-get-isperiodic vla-get-isplanar vla-get-isprimary vla-get-isquiescent vla-get-isrational' +
					'vla-get-issuer vla-get-isxref vla-get-itemname vla-get-jogangle vla-get-joglocation' +
					'vla-get-justification vla-get-key vla-get-key32 vla-get-keyboardaccelerator vla-get-keyboardpriority' +
					'vla-get-keylength vla-get-keywords vla-get-knotparameterization vla-get-knots vla-get-label' +
					'vla-get-labelblockid vla-get-labelblockid32 vla-get-landinggap vla-get-largebuttons vla-get-lastheight' +
					'vla-get-lastsavedby vla-get-layer vla-get-layeron vla-get-layerpropertyoverrides vla-get-layers' +
					'vla-get-layerstate vla-get-layout vla-get-layoutcreateviewport vla-get-layoutcrosshaircolor vla-get-layoutdisplaymargins' +
					'vla-get-layoutdisplaypaper vla-get-layoutdisplaypapershadow vla-get-layoutid vla-get-layoutid32 vla-get-layouts' +
					'vla-get-layoutshowplotsetup vla-get-leader1point vla-get-leader2point vla-get-leadercount vla-get-leaderlinecolor' +
					'vla-get-leaderlinetype vla-get-leaderlinetypeid vla-get-leaderlineweight vla-get-leadertype vla-get-left' +
					'vla-get-length vla-get-lenslength vla-get-limits vla-get-linearscalefactor vla-get-linespacingdistance' +
					'vla-get-linespacingfactor vla-get-linespacingstyle vla-get-linetype vla-get-linetypegeneration vla-get-linetypes' +
					'vla-get-linetypescale vla-get-lineweight vla-get-lineweightdisplay vla-get-livesectionenabled vla-get-loadacadlspinalldocuments' +
					'vla-get-localeid vla-get-lock vla-get-lockaspectratio vla-get-locked vla-get-lockposition' +
					'vla-get-logfileon vla-get-logfilepath vla-get-lowerleftcorner vla-get-macro vla-get-maindictionary' +
					'vla-get-maintainassociativity vla-get-majoraxis vla-get-majorradius vla-get-mask vla-get-material' +
					'vla-get-materials vla-get-maxactiveviewports vla-get-maxautocadwindow vla-get-maxleadersegmentspoints vla-get-mclose' +
					'vla-get-mdensity vla-get-measurement vla-get-menubar vla-get-menufile vla-get-menufilename' +
					'vla-get-menugroups vla-get-menus vla-get-minimumtableheight vla-get-minimumtablewidth vla-get-minoraxis' +
					'vla-get-minorradius vla-get-mlinescale vla-get-mode vla-get-modelcrosshaircolor vla-get-modelspace' +
					'vla-get-modeltype vla-get-modelview vla-get-momentofinertia vla-get-monochrome vla-get-mrunumber' +
					'vla-get-mspace vla-get-mtextattribute vla-get-mtextattributecontent vla-get-mtextboundarywidth vla-get-mtextdrawingdirection' +
					'vla-get-mvertexcount vla-get-name vla-get-namenomnemonic vla-get-nclose vla-get-ndensity' +
					'vla-get-normal vla-get-numberofcontrolpoints vla-get-numberofcopies vla-get-numberoffaces vla-get-numberoffitpoints' +
					'vla-get-numberofloops vla-get-numberofvertices vla-get-numcellstyles vla-get-numcrosssections vla-get-numguidepaths' +
					'vla-get-numvertices vla-get-nvertexcount vla-get-objectid vla-get-objectid32 vla-get-objectname' +
					'vla-get-objectsnapmode vla-get-objectsortbyplotting vla-get-objectsortbypsoutput vla-get-objectsortbyredraws vla-get-objectsortbyregens' +
					'vla-get-objectsortbyselection vla-get-objectsortbysnap vla-get-obliqueangle vla-get-oleitemtype vla-get-olelaunch' +
					'vla-get-oleplotquality vla-get-olequality vla-get-olesourceapp vla-get-onmenubar vla-get-opensave' +
					'vla-get-origin vla-get-orthoon vla-get-output vla-get-overridecenter vla-get-overwritepropchanged' +
					'vla-get-ownerid vla-get-ownerid32 vla-get-pagesetupoverridestemplatefile vla-get-paperspace vla-get-paperunits' +
					'vla-get-parent vla-get-password vla-get-path vla-get-patternangle vla-get-patterndouble' +
					'vla-get-patternname vla-get-patternscale vla-get-patternspace vla-get-patterntype vla-get-perimeter' +
					'vla-get-periodic vla-get-pickadd vla-get-pickauto vla-get-pickboxsize vla-get-pickdrag' +
					'vla-get-pickfirst vla-get-pickfirstselectionset vla-get-pickgroup vla-get-plot vla-get-plotconfigurations' +
					'vla-get-plothidden vla-get-plotlegacy vla-get-plotlogfilepath vla-get-plotorigin vla-get-plotpolicy' +
					'vla-get-plotrotation vla-get-plotstylename vla-get-plottable vla-get-plottype vla-get-plotviewportborders' +
					'vla-get-plotviewportsfirst vla-get-plotwithlineweights vla-get-plotwithplotstyles vla-get-polartrackingvector vla-get-position' +
					'vla-get-postscriptprologfile vla-get-preferences vla-get-preset vla-get-primaryunitsprecision vla-get-principaldirections' +
					'vla-get-principalmoments vla-get-printerconfigpath vla-get-printerdescpath vla-get-printerpapersizealert vla-get-printerspoolalert' +
					'vla-get-printerstylesheetpath vla-get-printfile vla-get-printspoolerpath vla-get-printspoolexecutable vla-get-productofinertia' +
					'vla-get-profilerotation vla-get-profiles vla-get-promptstring vla-get-propertyname vla-get-providername' +
					'vla-get-providertype vla-get-proxyimage vla-get-qnewtemplatefile vla-get-quieterrormode vla-get-radiiofgyration' +
					'vla-get-radius vla-get-radiusratio vla-get-readonly vla-get-red vla-get-referencecount' +
					'vla-get-regeneratetablesuppressed vla-get-registeredapplications vla-get-rendersmoothness vla-get-repeatbottomlabels vla-get-repeattoplabels' +
					'vla-get-revisionnumber vla-get-revolutionangle vla-get-rotation vla-get-rounddistance vla-get-rows' +
					'vla-get-rowspacing vla-get-saveastype vla-get-saved vla-get-savepreviewthumbnail vla-get-scale' +
					'vla-get-scalefactor vla-get-scaleheight vla-get-scalelineweights vla-get-scalewidth vla-get-scmcommandmode' +
					'vla-get-scmdefaultmode vla-get-scmeditmode vla-get-scmtimemode vla-get-scmtimevalue vla-get-secondpoint' +
					'vla-get-secondsegmentangleconstraint vla-get-sectionmanager vla-get-segmentperpolyline vla-get-selection vla-get-selectionsets' +
					'vla-get-serialnumber vla-get-settings vla-get-shadeplot vla-get-sheetview vla-get-shortcutmenu' +
					'vla-get-shortcutmenudisplay vla-get-show vla-get-showassociativity vla-get-showhistory vla-get-showplotstyles' +
					'vla-get-showproxydialogbox vla-get-showrasterimage vla-get-showrotation vla-get-showwarningmessages vla-get-singledocumentmode' +
					'vla-get-smoothness vla-get-snapbasepoint vla-get-snapon vla-get-snaprotationangle vla-get-solidfill' +
					'vla-get-solidtype vla-get-sourceobjects vla-get-splineframe vla-get-splinemethod vla-get-standardscale' +
					'vla-get-standardscale2 vla-get-startangle vla-get-startdraftangle vla-get-startdraftmagnitude vla-get-startparameter' +
					'vla-get-startpoint vla-get-startsmoothcontinuity vla-get-startsmoothmagnitude vla-get-starttangent vla-get-state' +
					'vla-get-statusid vla-get-storesqlindex vla-get-stylename vla-get-stylesheet vla-get-subject' +
					'vla-get-submenu vla-get-subunitsfactor vla-get-subunitssuffix vla-get-summaryinfo vla-get-supportpath' +
					'vla-get-suppressleadingzeros vla-get-suppresstrailingzeros vla-get-suppresszerofeet vla-get-suppresszeroinches vla-get-surfacenormals' +
					'vla-get-surfacetype vla-get-symbolposition vla-get-system vla-get-tablebreakflowdirection vla-get-tablebreakheight' +
					'vla-get-tablesreadonly vla-get-tablestyleoverrides vla-get-taborder vla-get-tagstring vla-get-taperangle' +
					'vla-get-target vla-get-tempfileextension vla-get-tempfilepath vla-get-templatedwgpath vla-get-templateid' +
					'vla-get-templateid32 vla-get-tempxrefpath vla-get-textalignmentpoint vla-get-textalignmenttype vla-get-textangletype' +
					'vla-get-textattachmentdirection vla-get-textbackgroundfill vla-get-textbottomattachmenttype vla-get-textcolor vla-get-textdirection' +
					'vla-get-texteditor vla-get-textfill vla-get-textfillcolor vla-get-textfont vla-get-textfontsize' +
					'vla-get-textfontstyle vla-get-textframedisplay vla-get-textgap vla-get-textgenerationflag vla-get-textheight' +
					'vla-get-textinside vla-get-textinsidealign vla-get-textjustify vla-get-textleftattachmenttype vla-get-textlinespacingdistance' +
					'vla-get-textlinespacingfactor vla-get-textlinespacingstyle vla-get-textmovement vla-get-textoutsidealign vla-get-textoverride' +
					'vla-get-textposition vla-get-textprecision vla-get-textprefix vla-get-textrightattachmenttype vla-get-textrotation' +
					'vla-get-textstring vla-get-textstyle vla-get-textstylename vla-get-textstyles vla-get-textsuffix' +
					'vla-get-texttopattachmenttype vla-get-texturemappath vla-get-textwidth vla-get-textwinbackgrndcolor vla-get-textwintextcolor' +
					'vla-get-thickness vla-get-timeserver vla-get-timestamp vla-get-title vla-get-titlesuppressed' +
					'vla-get-tolerancedisplay vla-get-toleranceheightscale vla-get-tolerancejustification vla-get-tolerancelowerlimit vla-get-toleranceprecision' +
					'vla-get-tolerancesuppressleadingzeros vla-get-tolerancesuppresstrailingzeros vla-get-tolerancesuppresszerofeet vla-get-tolerancesuppresszeroinches vla-get-toleranceupperlimit' +
					'vla-get-toolbars vla-get-toolpalettepath vla-get-top vla-get-topheight vla-get-topradius' +
					'vla-get-totalangle vla-get-totallength vla-get-translateids vla-get-transparency vla-get-truecolor' +
					'vla-get-truecolorimages vla-get-turnheight vla-get-turns vla-get-turnslope vla-get-twist' +
					'vla-get-twistangle vla-get-type vla-get-ucsiconatorigin vla-get-ucsiconon vla-get-ucsperviewport' +
					'vla-get-uisolinedensity vla-get-underlaylayeroverrideapplied vla-get-underlayname vla-get-underlayvisibility vla-get-units' +
					'vla-get-unitsformat vla-get-unitstype vla-get-upperrightcorner vla-get-upsidedown vla-get-url' +
					'vla-get-urldescription vla-get-urlnamedlocation vla-get-used vla-get-useentitycolor vla-get-uselastplotsettings' +
					'vla-get-user vla-get-usercoordinatesystems vla-get-usestandardscale vla-get-utility vla-get-value' +
					'vla-get-value32 vla-get-vbe vla-get-verify vla-get-version vla-get-versionguid' +
					'vla-get-vertcellmargin vla-get-vertexcount vla-get-verticaldirection vla-get-verticaltextposition vla-get-vertices' +
					'vla-get-viewingdirection vla-get-viewportdefault vla-get-viewporton vla-get-viewports vla-get-views' +
					'vla-get-viewtoplot vla-get-visibilityedge1 vla-get-visibilityedge2 vla-get-visibilityedge3 vla-get-visibilityedge4' +
					'vla-get-visible vla-get-visolinedensity vla-get-visualstyle vla-get-volume vla-get-weights' +
					'vla-get-width vla-get-windowleft vla-get-windowstate vla-get-windowtitle vla-get-windowtop' +
					'vla-get-wireframetype vla-get-workspacepath vla-get-xeffectivescalefactor vla-get-xrefdatabase vla-get-xrefdemandload' +
					'vla-get-xrefedit vla-get-xreffadeintensity vla-get-xreflayervisibility vla-get-xscalefactor vla-get-xvector' +
					'vla-get-yeffectivescalefactor vla-get-yscalefactor vla-get-yvector vla-get-zeffectivescalefactor vla-get-zscalefactor' +
					'vla-getacadstate vla-getalignment vla-getalignment2 vla-getallprofilenames vla-getangle' +
					'vla-getattachmentpoint vla-getattributes vla-getautoscale vla-getautoscale2 vla-getbackgroundcolor' +
					'vla-getbackgroundcolor2 vla-getbackgroundcolornone vla-getbitmaps vla-getblockattributevalue vla-getblockattributevalue2' +
					'vla-getblockattributevalue232 vla-getblockattributevalue32 vla-getblockrotation vla-getblockscale vla-getblocktablerecordid' +
					'vla-getblocktablerecordid2 vla-getblocktablerecordid232 vla-getblocktablerecordid32 vla-getboundingbox vla-getbreakheight' +
					'vla-getbulge vla-getcanonicalmedianames vla-getcellalignment vla-getcellbackgroundcolor vla-getcellbackgroundcolornone' +
					'vla-getcellclass vla-getcellcontentcolor vla-getcelldatatype vla-getcellextents vla-getcellformat' +
					'vla-getcellgridcolor vla-getcellgridlineweight vla-getcellgridvisibility vla-getcellstate vla-getcellstyle' +
					'vla-getcellstyleoverrides vla-getcellstyles vla-getcelltextheight vla-getcelltextstyle vla-getcelltype' +
					'vla-getcellvalue vla-getcolor vla-getcolor2 vla-getcolumnname vla-getcolumnwidth' +
					'vla-getconstantattributes vla-getcontentcolor vla-getcontentcolor2 vla-getcontentlayout vla-getcontenttype' +
					'vla-getcontrolpoint vla-getcorner vla-getcustombyindex vla-getcustombykey vla-getcustomdata' +
					'vla-getcustomscale vla-getdataformat vla-getdatatype vla-getdatatype2 vla-getdistance' +
					'vla-getdoglegdirection vla-getdynamicblockproperties vla-getentity vla-getextensiondictionary vla-getfieldid' +
					'vla-getfieldid2 vla-getfieldid232 vla-getfieldid32 vla-getfitpoint vla-getfont' +
					'vla-getformat vla-getformat2 vla-getformula vla-getfulldraworder vla-getgridcolor' +
					'vla-getgridcolor2 vla-getgriddoublelinespacing vla-getgridlinestyle vla-getgridlinetype vla-getgridlinetype32' +
					'vla-getgridlineweight vla-getgridlineweight2 vla-getgridspacing vla-getgridvisibility vla-getgridvisibility2' +
					'vla-gethasformula vla-getinput vla-getinteger vla-getinterfaceobject vla-getinvisibleedge' +
					'vla-getiscellstyleinuse vla-getismergeallenabled vla-getkeyword vla-getleaderindex vla-getleaderlineindexes' +
					'vla-getleaderlinevertices vla-getlivesection vla-getlocalemedianame vla-getloopat vla-getmargin' +
					'vla-getminimumcolumnwidth vla-getminimumrowheight vla-getname vla-getobject vla-getobjectidstring' +
					'vla-getorientation vla-getoverride vla-getpapermargins vla-getpapersize vla-getplotdevicenames' +
					'vla-getplotstyletablenames vla-getpoint vla-getprojectfilepath vla-getreal vla-getrelativedraworder' +
					'vla-getremotefile vla-getrotation vla-getrowheight vla-getrowtype vla-getscale' +
					'vla-getsectiontypesettings vla-getsnapspacing vla-getstring vla-getsubentity vla-getsubentity32' +
					'vla-getsubselection vla-gettext vla-gettextheight vla-gettextheight2 vla-gettextrotation' +
					'vla-gettextstring vla-gettextstyle vla-gettextstyle2 vla-gettextstyleid vla-gettextstyleid32' +
					'vla-getucsmatrix vla-getuniquecellstylename vla-getuniquesectionname vla-getvalue vla-getvariable' +
					'vla-getvertexcount vla-getweight vla-getwidth vla-getwindowtoplot vla-getxdata' +
					'vla-getxrecorddata vla-handletoobject vla-highlight vla-hittest vla-import' +
					'vla-importprofile vla-indexof vla-initializeuserinput vla-insertblock vla-insertcolumns' +
					'vla-insertcolumnsandinherit vla-insertinmenubar vla-insertloopat vla-insertmenuinmenubar vla-insertrows' +
					'vla-insertrowsandinherit vla-intersectwith vla-iscontenteditable vla-isempty vla-isformateditable' +
					'vla-ismergeallenabled vla-ismergedcell vla-isremotefile vla-isurl vla-item' +
					'vla-launchbrowserdialog vla-listarx vla-load vla-loadarx vla-loaddvb' +
					'vla-loadshapefile vla-mergecells vla-mirror vla-mirror3d vla-modified' +
					'vla-move vla-moveabove vla-movebelow vla-movecontent vla-movetobottom' +
					'vla-movetotop vla-new vla-numcustominfo vla-objectid32toobjectidstring vla-objectidtoobject' +
					'vla-objectidtoobject32 vla-offset vla-onmodified vla-open vla-plottodevice' +
					'vla-plottofile vla-polarpoint vla-prompt vla-purgeall vla-purgefitdata' +
					'vla-put-action vla-put-activedimstyle vla-put-activedocument vla-put-activelayer vla-put-activelayout' +
					'vla-put-activelinetype vla-put-activematerial vla-put-activeprofile vla-put-activepviewport vla-put-activespace' +
					'vla-put-activetextstyle vla-put-activeucs vla-put-activeviewport vla-put-adcinsertunitsdefaultsource vla-put-adcinsertunitsdefaulttarget' +
					'vla-put-adjustforbackground vla-put-algorithm vla-put-alignment vla-put-alignmentpointacquisition vla-put-alignspace' +
					'vla-put-allowlongsymbolnames vla-put-allowmanualheights vla-put-allowmanualpositions vla-put-altfontfile vla-put-altrounddistance' +
					'vla-put-altsubunitsfactor vla-put-altsubunitssuffix vla-put-altsuppressleadingzeros vla-put-altsuppresstrailingzeros vla-put-altsuppresszerofeet' +
					'vla-put-altsuppresszeroinches vla-put-alttabletmenufile vla-put-alttextprefix vla-put-alttextsuffix vla-put-alttoleranceprecision' +
					'vla-put-alttolerancesuppressleadingzeros vla-put-alttolerancesuppresstrailingzeros vla-put-alttolerancesuppresszerofeet vla-put-alttolerancesuppresszeroinches vla-put-altunits' +
					'vla-put-altunitsformat vla-put-altunitsprecision vla-put-altunitsscale vla-put-angleformat vla-put-anglevertex' +
					'vla-put-annotation vla-put-annotative vla-put-arcendparam vla-put-arcpoint vla-put-arcsmoothness' +
					'vla-put-arcstartparam vla-put-area vla-put-arrowhead1block vla-put-arrowhead1type vla-put-arrowhead2block' +
					'vla-put-arrowhead2type vla-put-arrowheadblock vla-put-arrowheadsize vla-put-arrowheadtype vla-put-arrowsize' +
					'vla-put-arrowsymbol vla-put-associativehatch vla-put-attachmentpoint vla-put-author vla-put-autoaudit' +
					'vla-put-automaticplotlog vla-put-autosaveinterval vla-put-autosavepath vla-put-autosnapaperture vla-put-autosnapaperturesize' +
					'vla-put-autosnapmagnet vla-put-autosnapmarker vla-put-autosnapmarkercolor vla-put-autosnapmarkersize vla-put-autosnaptooltip' +
					'vla-put-autotrackingveccolor vla-put-autotracktooltip vla-put-axisposition vla-put-backgroundcolor vla-put-backgroundfill' +
					'vla-put-backgroundlinescolor vla-put-backgroundlineshiddenline vla-put-backgroundlineslayer vla-put-backgroundlineslinetype vla-put-backgroundlineslinetypescale' +
					'vla-put-backgroundlineslineweight vla-put-backgroundlinesplotstylename vla-put-backgroundlinesvisible vla-put-backward vla-put-bank' +
					'vla-put-basepoint vla-put-baseradius vla-put-batchplotprogress vla-put-beeponerror vla-put-bigfontfile' +
					'vla-put-bitflags vla-put-block vla-put-blockcolor vla-put-blockconnectiontype vla-put-blockrotation' +
					'vla-put-blockscale vla-put-blockscaling vla-put-bottomheight vla-put-breaksenabled vla-put-breaksize' +
					'vla-put-breakspacing vla-put-brightness vla-put-canonicalmedianame vla-put-categoryname vla-put-center' +
					'vla-put-centermarksize vla-put-centerplot vla-put-centerpoint vla-put-centertype vla-put-check' +
					'vla-put-chordpoint vla-put-circumference vla-put-clippingenabled vla-put-closed vla-put-closed2' +
					'vla-put-color vla-put-colorbookpath vla-put-colorindex vla-put-colormethod vla-put-columns' +
					'vla-put-columnspacing vla-put-columnwidth vla-put-commanddisplayname vla-put-comment vla-put-comments' +
					'vla-put-configname vla-put-constant vla-put-constantwidth vla-put-constrain vla-put-contentblockname' +
					'vla-put-contentblocktype vla-put-contenttype vla-put-continuousplotlog vla-put-contourlinespersurface vla-put-contrast' +
					'vla-put-controlpoints vla-put-coordinate vla-put-coordinates vla-put-creaselevel vla-put-creasetype' +
					'vla-put-createbackup vla-put-currentsectiontype vla-put-cursorsize vla-put-curvetangencylinescolor vla-put-curvetangencylineslayer' +
					'vla-put-curvetangencylineslinetype vla-put-curvetangencylineslinetypescale vla-put-curvetangencylineslineweight vla-put-curvetangencylinesplotstylename vla-put-curvetangencylinesvisible' +
					'vla-put-customdictionary vla-put-customiconpath vla-put-customscale vla-put-cvhulldisplay vla-put-decimalseparator' +
					'vla-put-defaultinterneturl vla-put-defaultoutputdevice vla-put-defaultplotstyleforlayer vla-put-defaultplotstyleforobjects vla-put-defaultplotstyletable' +
					'vla-put-defaultplottofilepath vla-put-degree2 vla-put-demandloadarxapp vla-put-description vla-put-destinationblock' +
					'vla-put-destinationfile vla-put-diameter vla-put-dimconstrdesc vla-put-dimconstrexpression vla-put-dimconstrform' +
					'vla-put-dimconstrname vla-put-dimconstrreference vla-put-dimconstrvalue vla-put-dimensionlinecolor vla-put-dimensionlineextend' +
					'vla-put-dimensionlinetype vla-put-dimensionlineweight vla-put-dimline1suppress vla-put-dimline2suppress vla-put-dimlineinside' +
					'vla-put-dimlinesuppress vla-put-dimtxtdirection vla-put-direction vla-put-directionvector vla-put-displaygrips' +
					'vla-put-displaygripswithinblocks vla-put-displaylayouttabs vla-put-displaylocked vla-put-displayolescale vla-put-displayscreenmenu' +
					'vla-put-displayscrollbars vla-put-displaysilhouette vla-put-dockedvisiblelines vla-put-doglegged vla-put-dogleglength' +
					'vla-put-drawingdirection vla-put-drawleaderordertype vla-put-drawmleaderordertype vla-put-driverspath vla-put-dwfformat' +
					'vla-put-edgeextensiondistances vla-put-elevation vla-put-elevationmodelspace vla-put-elevationpaperspace vla-put-enable' +
					'vla-put-enableblockrotation vla-put-enableblockscale vla-put-enablebreak vla-put-enabledogleg vla-put-enableframetext' +
					'vla-put-enablelanding vla-put-enablestartupdialog vla-put-endangle vla-put-enddraftangle vla-put-enddraftmagnitude' +
					'vla-put-endparameter vla-put-endpoint vla-put-endsmoothcontinuity vla-put-endsmoothmagnitude vla-put-endsubmenulevel' +
					'vla-put-endtangent vla-put-enterprisemenufile vla-put-entitycolor vla-put-entitytransparency vla-put-explodable' +
					'vla-put-extensionlinecolor vla-put-extensionlineextend vla-put-extensionlineoffset vla-put-extensionlineweight vla-put-extline1endpoint' +
					'vla-put-extline1linetype vla-put-extline1point vla-put-extline1startpoint vla-put-extline1suppress vla-put-extline2endpoint' +
					'vla-put-extline2linetype vla-put-extline2point vla-put-extline2startpoint vla-put-extline2suppress vla-put-extlinefixedlen' +
					'vla-put-extlinefixedlensuppress vla-put-fade vla-put-fieldlength vla-put-file vla-put-firstsegmentangleconstraint' +
					'vla-put-fit vla-put-fitpoints vla-put-fittolerance vla-put-floatingrows vla-put-flowdirection' +
					'vla-put-fontfile vla-put-fontfilemap vla-put-forcelineinside vla-put-foregroundlinescolor vla-put-foregroundlinesedgetransparency' +
					'vla-put-foregroundlinesfacetransparency vla-put-foregroundlineshiddenline vla-put-foregroundlineslayer vla-put-foregroundlineslinetype vla-put-foregroundlineslinetypescale' +
					'vla-put-foregroundlineslineweight vla-put-foregroundlinesplotstylename vla-put-foregroundlinesvisible vla-put-fractionformat vla-put-freeze' +
					'vla-put-fullcrcvalidation vla-put-fullscreentrackingvector vla-put-generationoptions vla-put-gradientangle vla-put-gradientcentered' +
					'vla-put-gradientcolor1 vla-put-gradientcolor2 vla-put-gradientname vla-put-graphicswinlayoutbackgrndcolor vla-put-graphicswinmodelbackgrndcolor' +
					'vla-put-gridon vla-put-gripcolorselected vla-put-gripcolorunselected vla-put-gripsize vla-put-hasleader' +
					'vla-put-hasvpassociation vla-put-hatchobjecttype vla-put-hatchstyle vla-put-headersuppressed vla-put-height' +
					'vla-put-helpfilepath vla-put-helpstring vla-put-history vla-put-historylines vla-put-horizontaltextposition' +
					'vla-put-horzcellmargin vla-put-hyperlinkbase vla-put-hyperlinkdisplaycursor vla-put-imagefile vla-put-imageframehighlight' +
					'vla-put-imageheight vla-put-imagevisibility vla-put-imagewidth vla-put-incrementalsavepercent vla-put-indicatorfillcolor' +
					'vla-put-indicatortransparency vla-put-insertionpoint vla-put-intersectionboundarycolor vla-put-intersectionboundarydivisionlines vla-put-intersectionboundarylayer' +
					'vla-put-intersectionboundarylinetype vla-put-intersectionboundarylinetypescale vla-put-intersectionboundarylineweight vla-put-intersectionboundaryplotstylename vla-put-intersectionboundaryvisible' +
					'vla-put-intersectionfillcolor vla-put-intersectionfillfacetransparency vla-put-intersectionfillhatchangle vla-put-intersectionfillhatchpatternname vla-put-intersectionfillhatchpatterntype' +
					'vla-put-intersectionfillhatchscale vla-put-intersectionfillhatchspacing vla-put-intersectionfilllayer vla-put-intersectionfilllinetype vla-put-intersectionfilllinetypescale' +
					'vla-put-intersectionfilllineweight vla-put-intersectionfillplotstylename vla-put-intersectionfillvisible vla-put-invisible vla-put-isopenwidth' +
					'vla-put-ispartial vla-put-issuer vla-put-itemname vla-put-jogangle vla-put-joglocation' +
					'vla-put-justification vla-put-keyboardaccelerator vla-put-keyboardpriority vla-put-keylength vla-put-keywords' +
					'vla-put-knotparameterization vla-put-knots vla-put-label vla-put-labelblockid vla-put-labelblockid32' +
					'vla-put-landinggap vla-put-largebuttons vla-put-lastheight vla-put-lastsavedby vla-put-layer' +
					'vla-put-layeron vla-put-layerstate vla-put-layoutcreateviewport vla-put-layoutcrosshaircolor vla-put-layoutdisplaymargins' +
					'vla-put-layoutdisplaypaper vla-put-layoutdisplaypapershadow vla-put-layoutid vla-put-layoutid32 vla-put-layoutshowplotsetup' +
					'vla-put-leader1point vla-put-leader2point vla-put-leaderlength vla-put-leaderlinecolor vla-put-leaderlinetype' +
					'vla-put-leaderlinetypeid vla-put-leaderlineweight vla-put-leadertype vla-put-left vla-put-lenslength' +
					'vla-put-limits vla-put-linearscalefactor vla-put-linespacingdistance vla-put-linespacingfactor vla-put-linespacingstyle' +
					'vla-put-linetype vla-put-linetypegeneration vla-put-linetypescale vla-put-lineweight vla-put-lineweightdisplay' +
					'vla-put-livesectionenabled vla-put-loadacadlspinalldocuments vla-put-lock vla-put-lockaspectratio vla-put-locked' +
					'vla-put-lockposition vla-put-logfileon vla-put-logfilepath vla-put-macro vla-put-maindictionary' +
					'vla-put-maintainassociativity vla-put-majoraxis vla-put-majorradius vla-put-mask vla-put-material' +
					'vla-put-maxactiveviewports vla-put-maxautocadwindow vla-put-maxleadersegmentspoints vla-put-mclose vla-put-mdensity' +
					'vla-put-menufile vla-put-minorradius vla-put-mlinescale vla-put-mode vla-put-modelcrosshaircolor' +
					'vla-put-modelview vla-put-monochrome vla-put-mspace vla-put-mtextattribute vla-put-mtextattributecontent' +
					'vla-put-mtextboundarywidth vla-put-mtextdrawingdirection vla-put-name vla-put-nclose vla-put-ndensity' +
					'vla-put-normal vla-put-numberofcopies vla-put-objectsnapmode vla-put-objectsortbyplotting vla-put-objectsortbypsoutput' +
					'vla-put-objectsortbyredraws vla-put-objectsortbyregens vla-put-objectsortbyselection vla-put-objectsortbysnap vla-put-obliqueangle' +
					'vla-put-oleitemtype vla-put-olelaunch vla-put-oleplotquality vla-put-olequality vla-put-olesourceapp' +
					'vla-put-origin vla-put-orthoon vla-put-overridecenter vla-put-pagesetupoverridestemplatefile vla-put-paperunits' +
					'vla-put-password vla-put-path vla-put-patternangle vla-put-patterndouble vla-put-patternscale' +
					'vla-put-patternspace vla-put-periodic vla-put-pickadd vla-put-pickauto vla-put-pickboxsize' +
					'vla-put-pickdrag vla-put-pickfirst vla-put-pickgroup vla-put-plothidden vla-put-plotlegacy' +
					'vla-put-plotlogfilepath vla-put-plotorigin vla-put-plotpolicy vla-put-plotrotation vla-put-plotstylename' +
					'vla-put-plottable vla-put-plottype vla-put-plotviewportborders vla-put-plotviewportsfirst vla-put-plotwithlineweights' +
					'vla-put-plotwithplotstyles vla-put-polartrackingvector vla-put-position vla-put-postscriptprologfile vla-put-preset' +
					'vla-put-primaryunitsprecision vla-put-printerconfigpath vla-put-printerdescpath vla-put-printerpapersizealert vla-put-printerspoolalert' +
					'vla-put-printerstylesheetpath vla-put-printfile vla-put-printspoolerpath vla-put-printspoolexecutable vla-put-profilerotation' +
					'vla-put-promptstring vla-put-providername vla-put-providertype vla-put-proxyimage vla-put-qnewtemplatefile' +
					'vla-put-quieterrormode vla-put-radius vla-put-radiusratio vla-put-regeneratetablesuppressed vla-put-rendersmoothness' +
					'vla-put-repeatbottomlabels vla-put-repeattoplabels vla-put-revisionnumber vla-put-revolutionangle vla-put-rotation' +
					'vla-put-rounddistance vla-put-rowheight vla-put-rows vla-put-rowspacing vla-put-saveastype' +
					'vla-put-savepreviewthumbnail vla-put-scale vla-put-scalefactor vla-put-scaleheight vla-put-scalelineweights' +
					'vla-put-scalewidth vla-put-scmcommandmode vla-put-scmdefaultmode vla-put-scmeditmode vla-put-scmtimemode' +
					'vla-put-scmtimevalue vla-put-secondpoint vla-put-secondsegmentangleconstraint vla-put-segmentperpolyline vla-put-serialnumber' +
					'vla-put-shadeplot vla-put-sheetview vla-put-shortcutmenudisplay vla-put-showassociativity vla-put-showhistory' +
					'vla-put-showplotstyles vla-put-showproxydialogbox vla-put-showrasterimage vla-put-showrotation vla-put-showwarningmessages' +
					'vla-put-singledocumentmode vla-put-smoothness vla-put-snapbasepoint vla-put-snapon vla-put-snaprotationangle' +
					'vla-put-solidfill vla-put-sourceobjects vla-put-splineframe vla-put-splinemethod vla-put-standardscale' +
					'vla-put-standardscale2 vla-put-startangle vla-put-startdraftangle vla-put-startdraftmagnitude vla-put-startparameter' +
					'vla-put-startpoint vla-put-startsmoothcontinuity vla-put-startsmoothmagnitude vla-put-starttangent vla-put-state' +
					'vla-put-storesqlindex vla-put-stylename vla-put-stylesheet vla-put-subject vla-put-subunitsfactor' +
					'vla-put-subunitssuffix vla-put-supportpath vla-put-suppressleadingzeros vla-put-suppresstrailingzeros vla-put-suppresszerofeet' +
					'vla-put-suppresszeroinches vla-put-surfacenormals vla-put-symbolposition vla-put-tablebreakflowdirection vla-put-tablebreakheight' +
					'vla-put-tablesreadonly vla-put-taborder vla-put-tagstring vla-put-taperangle vla-put-target' +
					'vla-put-tempfileextension vla-put-tempfilepath vla-put-templatedwgpath vla-put-templateid vla-put-templateid32' +
					'vla-put-tempxrefpath vla-put-textalignmentpoint vla-put-textalignmenttype vla-put-textangletype vla-put-textattachmentdirection' +
					'vla-put-textbackgroundfill vla-put-textbottomattachmenttype vla-put-textcolor vla-put-textdirection vla-put-texteditor' +
					'vla-put-textfill vla-put-textfillcolor vla-put-textfont vla-put-textfontsize vla-put-textfontstyle' +
					'vla-put-textframedisplay vla-put-textgap vla-put-textgenerationflag vla-put-textheight vla-put-textinside' +
					'vla-put-textinsidealign vla-put-textjustify vla-put-textleftattachmenttype vla-put-textlinespacingdistance vla-put-textlinespacingfactor' +
					'vla-put-textlinespacingstyle vla-put-textmovement vla-put-textoutsidealign vla-put-textoverride vla-put-textposition' +
					'vla-put-textprecision vla-put-textprefix vla-put-textrightattachmenttype vla-put-textrotation vla-put-textstring' +
					'vla-put-textstyle vla-put-textstylename vla-put-textsuffix vla-put-texttopattachmenttype vla-put-texturemappath' +
					'vla-put-textwidth vla-put-textwinbackgrndcolor vla-put-textwintextcolor vla-put-thickness vla-put-timeserver' +
					'vla-put-title vla-put-titlesuppressed vla-put-tolerancedisplay vla-put-toleranceheightscale vla-put-tolerancejustification' +
					'vla-put-tolerancelowerlimit vla-put-toleranceprecision vla-put-tolerancesuppressleadingzeros vla-put-tolerancesuppresstrailingzeros vla-put-tolerancesuppresszerofeet' +
					'vla-put-tolerancesuppresszeroinches vla-put-toleranceupperlimit vla-put-toolpalettepath vla-put-top vla-put-topheight' +
					'vla-put-topradius vla-put-translateids vla-put-transparency vla-put-truecolor vla-put-truecolorimages' +
					'vla-put-turnheight vla-put-turns vla-put-twist vla-put-twistangle vla-put-type' +
					'vla-put-ucsiconatorigin vla-put-ucsiconon vla-put-ucsperviewport vla-put-uisolinedensity vla-put-underlaylayeroverrideapplied' +
					'vla-put-underlayname vla-put-underlayvisibility vla-put-units vla-put-unitsformat vla-put-upsidedown' +
					'vla-put-url vla-put-urldescription vla-put-urlnamedlocation vla-put-useentitycolor vla-put-uselastplotsettings' +
					'vla-put-usestandardscale vla-put-value vla-put-verify vla-put-vertcellmargin vla-put-verticaldirection' +
					'vla-put-verticaltextposition vla-put-vertices vla-put-viewingdirection vla-put-viewportdefault vla-put-viewporton' +
					'vla-put-viewtoplot vla-put-visibilityedge1 vla-put-visibilityedge2 vla-put-visibilityedge3 vla-put-visibilityedge4' +
					'vla-put-visible vla-put-visolinedensity vla-put-visualstyle vla-put-weights vla-put-width' +
					'vla-put-windowleft vla-put-windowstate vla-put-windowtop vla-put-wireframetype vla-put-workspacepath' +
					'vla-put-xeffectivescalefactor vla-put-xrefdemandload vla-put-xrefedit vla-put-xreffadeintensity vla-put-xreflayervisibility' +
					'vla-put-xscalefactor vla-put-xvector vla-put-yeffectivescalefactor vla-put-yscalefactor vla-put-yvector' +
					'vla-put-zeffectivescalefactor vla-put-zscalefactor vla-putremotefile vla-quit vla-realtostring' +
					'vla-recomputetableblock vla-refreshplotdeviceinfo vla-regen vla-reload vla-remove' +
					'vla-removealloverrides vla-removecustombyindex vla-removecustombykey vla-removeentry vla-removefrommenubar' +
					'vla-removeitems vla-removeleader vla-removeleaderline vla-removemenufrommenubar vla-removevertex' +
					'vla-rename vla-renamecellstyle vla-renameprofile vla-replace vla-reselectsubregion' +
					'vla-resetblock vla-resetcellvalue vla-resetprofile vla-restore vla-reverse' +
					'vla-rotate vla-rotate3d vla-runmacro vla-save vla-saveas' +
					'vla-scaleentity vla-sectionsolid vla-select vla-selectatpoint vla-selectbypolygon' +
					'vla-selectonscreen vla-selectsubregion vla-sendcommand vla-sendmodelessoperationended vla-sendmodelessoperationstart' +
					'vla-setalignment vla-setalignment2 vla-setautoscale vla-setautoscale2 vla-setbackgroundcolor' +
					'vla-setbackgroundcolor2 vla-setbackgroundcolornone vla-setbitmaps vla-setblockattributevalue vla-setblockattributevalue2' +
					'vla-setblockattributevalue232 vla-setblockattributevalue32 vla-setblockrotation vla-setblockscale vla-setblocktablerecordid' +
					'vla-setblocktablerecordid2 vla-setblocktablerecordid232 vla-setblocktablerecordid32 vla-setbreakheight vla-setbulge' +
					'vla-setcellalignment vla-setcellbackgroundcolor vla-setcellbackgroundcolornone vla-setcellclass vla-setcellcontentcolor' +
					'vla-setcelldatatype vla-setcellformat vla-setcellgridcolor vla-setcellgridlineweight vla-setcellgridvisibility' +
					'vla-setcellstate vla-setcellstyle vla-setcelltextheight vla-setcelltextstyle vla-setcelltype' +
					'vla-setcellvalue vla-setcellvaluefromtext vla-setcolor vla-setcolor2 vla-setcolorbookcolor' +
					'vla-setcolumnname vla-setcolumnwidth vla-setcontentcolor vla-setcontentcolor2 vla-setcontentlayout' +
					'vla-setcontrolpoint vla-setcustombyindex vla-setcustombykey vla-setcustomdata vla-setcustomscale' +
					'vla-setdatabase vla-setdataformat vla-setdatatype vla-setdatatype2 vla-setdoglegdirection' +
					'vla-setfieldid vla-setfieldid2 vla-setfieldid232 vla-setfieldid32 vla-setfitpoint' +
					'vla-setfont vla-setformat vla-setformat2 vla-setformula vla-setgridcolor' +
					'vla-setgridcolor2 vla-setgriddoublelinespacing vla-setgridlinestyle vla-setgridlinetype vla-setgridlinetype32' +
					'vla-setgridlineweight vla-setgridlineweight2 vla-setgridspacing vla-setgridvisibility vla-setgridvisibility2' +
					'vla-setinvisibleedge vla-setlayoutstoplot vla-setleaderlinevertices vla-setmargin vla-setnames' +
					'vla-setoverride vla-setpattern vla-setprojectfilepath vla-setrelativedraworder vla-setrgb' +
					'vla-setrotation vla-setrowheight vla-setscale vla-setsnapspacing vla-setsubselection' +
					'vla-settemplateid vla-settemplateid32 vla-settext vla-settextheight vla-settextheight2' +
					'vla-settextrotation vla-settextstring vla-settextstyle vla-settextstyle2 vla-settextstyleid' +
					'vla-settextstyleid32 vla-settooltip vla-setvalue vla-setvaluefromtext vla-setvariable' +
					'vla-setview vla-setweight vla-setwidth vla-setwindowtoplot vla-setxdata' +
					'vla-setxrecorddata vla-slicesolid vla-split vla-startbatchmode vla-startundomark' +
					'vla-swaporder vla-syncmodelview vla-transformby vla-translatecoordinates vla-unload' +
					'vla-unloadarx vla-unloaddvb vla-unmergecells vla-update vla-updateentry' +
					'vla-updatemtextattribute vla-wblock vla-zoomall vla-zoomcenter vla-zoomextents' +
					'vla-zoompickwindow vla-zoomprevious vla-zoomscaled vla-zoomwindow vlarts-init' +
					'vlax-3d-point vlax-add-cmd vlax-create-object vlax-curve-getarea vlax-curve-getclosestpointto' +
					'vlax-curve-getclosestpointtoprojection vlax-curve-getdistatparam vlax-curve-getdistatpoint vlax-curve-getendparam vlax-curve-getendpoint' +
					'vlax-curve-getfirstderiv vlax-curve-getparamatdist vlax-curve-getparamatpoint vlax-curve-getpointatdist vlax-curve-getpointatparam' +
					'vlax-curve-getsecondderiv vlax-curve-getstartparam vlax-curve-getstartpoint vlax-curve-isclosed vlax-curve-isperiodic' +
					'vlax-curve-isplanar vlax-dump-object vlax-ename->vla-object vlax-erased-p vlax-for' +
					'vlax-get vlax-get-acad-object vlax-get-object vlax-get-or-create-object vlax-get-property' +
					'vlax-import-type-library vlax-invoke vlax-invoke-method vlax-ldata-delete vlax-ldata-get' +
					'vlax-ldata-list vlax-ldata-put vlax-ldata-test vlax-make-safearray vlax-make-variant' +
					'vlax-map-collection vlax-method-applicable-p vlax-object-released-p vlax-product-key vlax-property-available-p' +
					'vlax-put vlax-put-property vlax-queueexpr vlax-read-enabled-p vlax-reg-app' +
					'vlax-release-object vlax-remove-cmd vlax-safearray->list vlax-safearray-fill vlax-safearray-get-dim' +
					'vlax-safearray-get-element vlax-safearray-get-l-bound vlax-safearray-get-u-bound vlax-safearray-put-element vlax-safearray-type' +
					'vlax-tmatrix vlax-typeinfo-available-p vlax-variant-change-type vlax-variant-type vlax-variant-value' +
					'vlax-vbabort vlax-vbabortretryignore vlax-vbapplicationmodal vlax-vbarchive vlax-vbarray' +
					'vlax-vbboolean vlax-vbcancel vlax-vbcritical vlax-vbcurrency vlax-vbdataobject' +
					'vlax-vbdate vlax-vbdefaultbutton1 vlax-vbdefaultbutton2 vlax-vbdefaultbutton3 vlax-vbdirectory' +
					'vlax-vbdouble vlax-vbempty vlax-vberror vlax-vbexclamation vlax-vbhidden' +
					'vlax-vbhiragana vlax-vbignore vlax-vbinformation vlax-vbinteger vlax-vbkatakana' +
					'vlax-vblong vlax-vblowercase vlax-vbnarrow vlax-vbno vlax-vbnormal' +
					'vlax-vbnull vlax-vbobject vlax-vbok vlax-vbokcancel vlax-vbokonly' +
					'vlax-vbpropercase vlax-vbquestion vlax-vbreadonly vlax-vbretry vlax-vbretrycancel' +
					'vlax-vbsingle vlax-vbstring vlax-vbsystem vlax-vbsystemmodal vlax-vbuppercase' +
					'vlax-vbvariant vlax-vbvolume vlax-vbwide vlax-vbyes vlax-vbyesno' +
					'vlax-vbyesnocancel vlax-vla-object->ename vlax-write-enabled-p vlisp-dclres-list vlisp-dclres-load-dialog' +
					'vlisp-export-symbol vlisp-fasres-list vlisp-fasres-load vlisp-import-exsubrs vlisp-import-symbol' +
					'vlisp-inires-list vlr-acdb-reactor vlr-add vlr-added-p vlr-beep-reaction' +
					'vlr-command-reactor vlr-current-reaction-name vlr-data vlr-data-set vlr-deepclone-reactor' +
					'vlr-docmanager-reactor vlr-document vlr-dwg-reactor vlr-dxf-reactor vlr-editor-reactor' +
					'vlr-insert-reactor vlr-linker-reactor vlr-lisp-reactor vlr-miscellaneous-reactor vlr-mouse-reactor' +
					'vlr-notification vlr-object-reactor vlr-owner-add vlr-owner-remove vlr-owners' +
					'vlr-pers vlr-pers-activate vlr-pers-dictname vlr-pers-list vlr-pers-p' +
					'vlr-pers-release vlr-reaction-names vlr-reaction-set vlr-reactions vlr-reactor.getdictkey' +
					'vlr-reactors vlr-remove vlr-remove-all vlr-set-notification vlr-sysvar-reactor' +
					'vlr-toolbar-reactor vlr-trace-reaction vlr-type vlr-types vlr-undo-reactor' +
					'vlr-wblock-reactor vlr-window-reactor vlr-xref-reactor vmon vports' +
					'wcmatch while write-char write-line xdroom' +
					'xdsize xstrcase zerop _acetautoarxload _acetautoload' +
					'_acetautoqload _autoarxload _autoload _autoqload _internal-load-all-file' +
					'_matts_util _ver _vl-balance-parenthesis _vl-fast-mode _vl-times _vlisp-version';
				
	this.regexList = [
		{ regex: /;(.*)$/gm,										css: 'comments' },
		{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },
		{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },				
		{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),		css: 'color2' },
		//{ regex: new RegExp(this.getKeywords(operators), 'gmi'),	css: 'color1' },
		{ regex: new RegExp(this.getKeywords(globals), 'gmi'),		css: 'keyword' },
		{ regex: new RegExp(this.getKeywords(symbols), 'gmi'),		css: 'color2' },
		{ regex: new RegExp(this.getKeywords(constants), 'gmi'),	css: 'color1' }
	];
};

SyntaxHighlighter.brushes.autolisp.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.autolisp.aliases = ['autolisp', 'lsp'];
