/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import img1 from "../images/새벽저주.jpeg";
import subImg from "../images/새벽저주썸네일.jpeg";
import MainHeader from "../components/Layout/MainHeader";
const DUMMY_MOVIE = {
  id: 1,
  image: img1,
  title: "새벽의 저주",
  year: 2004,
  country: "미국, 캐나다, 일본, 프랑스",
  rating: 3.7,
  grade: "청불", //백엔드에서 어떻게 들어오는지?
  subImg: subImg,
  runningTime: 100, //백엔드에서 어떻게 들어오는지?
  genre: "공포/액션",
};
const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(DUMMY_MOVIE);
  // useEffect에서 movieId를 가지고 해당 id를 가진 영화의 상세 정보를 가지고 와 movie에 넣는다.
  useEffect(() => {}, []);
  return (
    <Layout image={movie.subImg} movie={movie}>
      <h2>Movie ID: {movieId}</h2>
      <p>
        Quot adversarium eos id. No autem facilis graecis sea, nam ex omnes
        sanctus petentium. Omittantur complectitur id sit. Vero semper dolorem
        te quo. Quas assueverit ex vix, quot eruditi dissentiet te cum. Eos
        ferri malis tractatos ut, an fastidii elaboraret nec, sea tibique
        legendos an. Usu tempor ignota accusam id, eum eu primis scribentur.
        Wisi vocent an pro, ne laoreet voluptatum assueverit has, quo ex omnium
        habemus conclusionemque. Eos in sonet errem adolescens, ut quo soluta
        ignota civibus, mediocrem reprimique adversarium cum in. Pri ex natum
        altera consulatu, velit vitae eu sea, ne iriure denique periculis sea.
        His ne ancillae officiis periculis, ei pri velit liber intellegat. Ad
        sea molestie appareat, veri option molestie qui ad, te his vocent
        appareat. Ei postea expetendis sea, accusamus eloquentiam eum ad, cetero
        ancillae ne quo. Repudiare incorrupte conclusionemque at mea, animal
        tacimates persequeris nam te. Pro eu agam soleat, eam at omnes debitis
        efficiendi, clita graeco molestie te nec. Tale civibus corpora duo an,
        aeque impetus docendi vis ex, est dicit ridens apeirian te. Elitr
        ullamcorper cu est. Enim sensibus no mei. Sit eros disputando
        efficiantur et, et per purto cibo, sed cu vidit errem honestatis. Ut
        erroribus elaboraret intellegebat cum, latine petentium sit te. At
        facilisi suavitate dissentiunt duo, vix at decore deserunt expetendis.
        Duo saepe feugiat ne. Ne has nihil explicari, mazim exerci cu est.
        Causae epicuri ocurreret has an, id his tempor timeam moderatius, at sed
        facete delenit argumentum. Per te possit delenit verterem, pro an
        docendi cotidieque deterruisset. Ea elit epicurei efficiantur sit, cum
        soluta eleifend eu. Eu vis sint tempor petentium, ex mea ignota
        eleifend, accumsan tacimates atomorum pri id. Ex mel diam quas, nostro
        melius voluptaria has ei. Tota debitis te eam. Ad duo autem munere
        aliquip, mel no erat aliquam dissentias. Usu no quaeque delicatissimi.
        Quas fabulas oportere eu sea, sint sapientem conclusionemque sea no, ne
        scripta qualisque patrioque sed. Tibique scaevola sea ei, altera virtute
        deseruisse mel eu, esse viderer eleifend in eam. Eam alii dolorum in.
        Eos no possim alienum. Agam tollit aperiam ex sit, atqui possit ius ex.
        Iusto laoreet nonumes ei mea, tantas detracto cu eos, quidam habemus
        gloriatur usu no. At affert eripuit imperdiet mea, sententiae
        deterruisset per eu. Ne viris concludaturque eum, errem audiam et mei.
        Vis eu dicta consetetur, tibique suavitate constituam at mel, at mei
        inani solet nonumy. Minim integre ea cum, eu duo modus efficiendi. Ex
        putant pertinax mea, an zril suavitate definitiones usu. Iusto salutandi
        eos id, et eos discere incorrupte. Putent dolores comprehensam ea eos.
        Dolore soleat scripserit his eu, te malis graecis vis. Sea cu posidonium
        eloquentiam. Tantas labore repudiare id cum, ut inermis eleifend
        appellantur has. At sit aliquam docendi. Suas accumsan at quo, alii
        inermis rationibus ut quo. Soleat disputationi nam ad. Ex prima reque
        corrumpit sed, sed et tale aperiam numquam, ea ferri adhuc ius. Quot
        adversarium eos id. No autem facilis graecis sea, nam ex omnes sanctus
        petentium. Omittantur complectitur id sit. Vero semper dolorem te quo.
        Quas assueverit ex vix, quot eruditi dissentiet te cum. Eos ferri malis
        tractatos ut, an fastidii elaboraret nec, sea tibique legendos an. Usu
        tempor ignota accusam id, eum eu primis scribentur. Wisi vocent an pro,
        ne laoreet voluptatum assueverit has, quo ex omnium habemus
        conclusionemque. Eos in sonet errem adolescens, ut quo soluta ignota
        civibus, mediocrem reprimique adversarium cum in. Pri ex natum altera
        consulatu, velit vitae eu sea, ne iriure denique periculis sea. His ne
        ancillae officiis periculis, ei pri velit liber intellegat. Ad sea
        molestie appareat, veri option molestie qui ad, te his vocent appareat.
        Ei postea expetendis sea, accusamus eloquentiam eum ad, cetero ancillae
        ne quo. Repudiare incorrupte conclusionemque at mea, animal tacimates
        persequeris nam te. Pro eu agam soleat, eam at omnes debitis efficiendi,
        clita graeco molestie te nec. Tale civibus corpora duo an, aeque impetus
        docendi vis ex, est dicit ridens apeirian te. Elitr ullamcorper cu est.
        Enim sensibus no mei. Sit eros disputando efficiantur et, et per purto
        cibo, sed cu vidit errem honestatis. Ut erroribus elaboraret
        intellegebat cum, latine petentium sit te. At facilisi suavitate
        dissentiunt duo, vix at decore deserunt expetendis. Duo saepe feugiat
        ne. Ne has nihil explicari, mazim exerci cu est. Causae epicuri
        ocurreret has an, id his tempor timeam moderatius, at sed facete delenit
        argumentum. Per te possit delenit verterem, pro an docendi cotidieque
        deterruisset. Ea elit epicurei efficiantur sit, cum soluta eleifend eu.
        Eu vis sint tempor petentium, ex mea ignota eleifend, accumsan tacimates
        atomorum pri id. Ex mel diam quas, nostro melius voluptaria has ei. Tota
        debitis te eam. Ad duo autem munere aliquip, mel no erat aliquam
        dissentias. Usu no quaeque delicatissimi. Quas fabulas oportere eu sea,
        sint sapientem conclusionemque sea no, ne scripta qualisque patrioque
        sed. Tibique scaevola sea ei, altera virtute deseruisse mel eu, esse
        viderer eleifend in eam. Eam alii dolorum in. Eos no possim alienum.
        Agam tollit aperiam ex sit, atqui possit ius ex. Iusto laoreet nonumes
        ei mea, tantas detracto cu eos, quidam habemus gloriatur usu no. At
        affert eripuit imperdiet mea, sententiae deterruisset per eu. Ne viris
        concludaturque eum, errem audiam et mei. Vis eu dicta consetetur,
        tibique suavitate constituam at mel, at mei inani solet nonumy. Minim
        integre ea cum, eu duo modus efficiendi. Ex putant pertinax mea, an zril
        suavitate definitiones usu. Iusto salutandi eos id, et eos discere
        incorrupte. Putent dolores comprehensam ea eos. Dolore soleat scripserit
        his eu, te malis graecis vis. Sea cu posidonium eloquentiam. Tantas
        labore repudiare id cum, ut inermis eleifend appellantur has. At sit
        aliquam docendi. Suas accumsan at quo, alii inermis rationibus ut quo.
        Soleat disputationi nam ad. Ex prima reque corrumpit sed, sed et tale
        aperiam numquam, ea ferri adhuc ius. Quot adversarium eos id. No autem
        facilis graecis sea, nam ex omnes sanctus petentium. Omittantur
        complectitur id sit. Vero semper dolorem te quo. Quas assueverit ex vix,
        quot eruditi dissentiet te cum. Eos ferri malis tractatos ut, an
        fastidii elaboraret nec, sea tibique legendos an. Usu tempor ignota
        accusam id, eum eu primis scribentur. Wisi vocent an pro, ne laoreet
        voluptatum assueverit has, quo ex omnium habemus conclusionemque. Eos in
        sonet errem adolescens, ut quo soluta ignota civibus, mediocrem
        reprimique adversarium cum in. Pri ex natum altera consulatu, velit
        vitae eu sea, ne iriure denique periculis sea. His ne ancillae officiis
        periculis, ei pri velit liber intellegat. Ad sea molestie appareat, veri
        option molestie qui ad, te his vocent appareat. Ei postea expetendis
        sea, accusamus eloquentiam eum ad, cetero ancillae ne quo. Repudiare
        incorrupte conclusionemque at mea, animal tacimates persequeris nam te.
        Pro eu agam soleat, eam at omnes debitis efficiendi, clita graeco
        molestie te nec. Tale civibus corpora duo an, aeque impetus docendi vis
        ex, est dicit ridens apeirian te. Elitr ullamcorper cu est. Enim
        sensibus no mei. Sit eros disputando efficiantur et, et per purto cibo,
        sed cu vidit errem honestatis. Ut erroribus elaboraret intellegebat cum,
        latine petentium sit te. At facilisi suavitate dissentiunt duo, vix at
        decore deserunt expetendis. Duo saepe feugiat ne. Ne has nihil
        explicari, mazim exerci cu est. Causae epicuri ocurreret has an, id his
        tempor timeam moderatius, at sed facete delenit argumentum. Per te
        possit delenit verterem, pro an docendi cotidieque deterruisset. Ea elit
        epicurei efficiantur sit, cum soluta eleifend eu. Eu vis sint tempor
        petentium, ex mea ignota eleifend, accumsan tacimates atomorum pri id.
        Ex mel diam quas, nostro melius voluptaria has ei. Tota debitis te eam.
        Ad duo autem munere aliquip, mel no erat aliquam dissentias. Usu no
        quaeque delicatissimi. Quas fabulas oportere eu sea, sint sapientem
        conclusionemque sea no, ne scripta qualisque patrioque sed. Tibique
        scaevola sea ei, altera virtute deseruisse mel eu, esse viderer eleifend
        in eam. Eam alii dolorum in. Eos no possim alienum. Agam tollit aperiam
        ex sit, atqui possit ius ex. Iusto laoreet nonumes ei mea, tantas
        detracto cu eos, quidam habemus gloriatur usu no. At affert eripuit
        imperdiet mea, sententiae deterruisset per eu. Ne viris concludaturque
        eum, errem audiam et mei. Vis eu dicta consetetur, tibique suavitate
        constituam at mel, at mei inani solet nonumy. Minim integre ea cum, eu
        duo modus efficiendi. Ex putant pertinax mea, an zril suavitate
        definitiones usu. Iusto salutandi eos id, et eos discere incorrupte.
        Putent dolores comprehensam ea eos. Dolore soleat scripserit his eu, te
        malis graecis vis. Sea cu posidonium eloquentiam. Tantas labore
        repudiare id cum, ut inermis eleifend appellantur has. At sit aliquam
        docendi. Suas accumsan at quo, alii inermis rationibus ut quo. Soleat
        disputationi nam ad. Ex prima reque corrumpit sed, sed et tale aperiam
        numquam, ea ferri adhuc ius. Quot adversarium eos id. No autem facilis
        graecis sea, nam ex omnes sanctus petentium. Omittantur complectitur id
        sit. Vero semper dolorem te quo. Quas assueverit ex vix, quot eruditi
        dissentiet te cum. Eos ferri malis tractatos ut, an fastidii elaboraret
        nec, sea tibique legendos an. Usu tempor ignota accusam id, eum eu
        primis scribentur. Wisi vocent an pro, ne laoreet voluptatum assueverit
        has, quo ex omnium habemus conclusionemque. Eos in sonet errem
        adolescens, ut quo soluta ignota civibus, mediocrem reprimique
        adversarium cum in. Pri ex natum altera consulatu, velit vitae eu sea,
        ne iriure denique periculis sea. His ne ancillae officiis periculis, ei
        pri velit liber intellegat. Ad sea molestie appareat, veri option
        molestie qui ad, te his vocent appareat. Ei postea expetendis sea,
        accusamus eloquentiam eum ad, cetero ancillae ne quo. Repudiare
        incorrupte conclusionemque at mea, animal tacimates persequeris nam te.
        Pro eu agam soleat, eam at omnes debitis efficiendi, clita graeco
        molestie te nec. Tale civibus corpora duo an, aeque impetus docendi vis
        ex, est dicit ridens apeirian te. Elitr ullamcorper cu est. Enim
        sensibus no mei. Sit eros disputando efficiantur et, et per purto cibo,
        sed cu vidit errem honestatis. Ut erroribus elaboraret intellegebat cum,
        latine petentium sit te. At facilisi suavitate dissentiunt duo, vix at
        decore deserunt expetendis. Duo saepe feugiat ne. Ne has nihil
        explicari, mazim exerci cu est. Causae epicuri ocurreret has an, id his
        tempor timeam moderatius, at sed facete delenit argumentum. Per te
        possit delenit verterem, pro an docendi cotidieque deterruisset. Ea elit
        epicurei efficiantur sit, cum soluta eleifend eu. Eu vis sint tempor
        petentium, ex mea ignota eleifend, accumsan tacimates atomorum pri id.
        Ex mel diam quas, nostro melius voluptaria has ei. Tota debitis te eam.
        Ad duo autem munere aliquip, mel no erat aliquam dissentias. Usu no
        quaeque delicatissimi. Quas fabulas oportere eu sea, sint sapientem
        conclusionemque sea no, ne scripta qualisque patrioque sed. Tibique
        scaevola sea ei, altera virtute deseruisse mel eu, esse viderer eleifend
        in eam. Eam alii dolorum in. Eos no possim alienum. Agam tollit aperiam
        ex sit, atqui possit ius ex. Iusto laoreet nonumes ei mea, tantas
        detracto cu eos, quidam habemus gloriatur usu no. At affert eripuit
        imperdiet mea, sententiae deterruisset per eu. Ne viris concludaturque
        eum, errem audiam et mei. Vis eu dicta consetetur, tibique suavitate
        constituam at mel, at mei inani solet nonumy. Minim integre ea cum, eu
        duo modus efficiendi. Ex putant pertinax mea, an zril suavitate
        definitiones usu. Iusto salutandi eos id, et eos discere incorrupte.
        Putent dolores comprehensam ea eos. Dolore soleat scripserit his eu, te
        malis graecis vis. Sea cu posidonium eloquentiam. Tantas labore
        repudiare id cum, ut inermis eleifend appellantur has. At sit aliquam
        docendi. Suas accumsan at quo, alii inermis rationibus ut quo. Soleat
        disputationi nam ad. Ex prima reque corrumpit sed, sed et tale aperiam
        numquam, ea ferri adhuc ius.
      </p>
    </Layout>
  );
};

export default MovieDetail;
