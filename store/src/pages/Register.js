import React, { Component } from "react";
import '../hojas-de-estilo/Register.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

class Register extends Component {

  state = {
    modalTermsAndConditions: false,
  };
  render() {
    return (
          <div className="register-main">
            <div className="register-sub-main ">
              <div>
                <div className="register-imgs">
                </div>
                <div>
                  <div>
                    <h1>LoveInBox</h1>
                  </div>
                  <div>
                    <input type="text" placeholder="Name" className="register-input" ></input>
                  </div>
                  <div className="register-space">
                    <input type="text" placeholder="Surname" className="register-input" ></input>
                  </div>
                  <div className="register-space">
                    <input type="text" placeholder="E-Mail" className="register-input" ></input>
                  </div>
                  <div className="register-space">
                    <input type="text" placeholder="Password" className="register-input" ></input>
                  </div>
                  <div className="register-space">
                    <input type="text" placeholder="Address" className="register-input" ></input>
                  </div>
                  <div className="register-space">
                    <label className="register-label">
                        Al hacer clic en "Register", aceptas nuestros -Terminos y condiciones-.
                    </label>
                    <button className="termsanconditions-button" onClick={()=>this.setState({modalTermsAndConditions: true})}>Terms And Conditions</button>
                    </div>
                  <div className="register-space">
                   <button className="register-button" >Register</button>
                  </div>
                  <div className="register-space">
                    <p className="register-link">
                      <a href= "../login" className="register-a"> Login </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>


    <Modal isOpen={this.state.modalTermsAndConditions}>
      <ModalHeader>Terms And Conditions</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Términos y Condiciones

                Actualizado el 2022-12-31
                    
                    
                Términos generales
                    
                Al acceder y realizar un pedido con Love In Box, usted confirma que está de acuerdo y sujeto a los términos de servicio contenidos en los Términos y condiciones que se describen a continuación. Estos términos se aplican a todo el sitio web y a cualquier correo electrónico u otro tipo de comunicación entre usted y Love In Box.
                    
                Bajo ninguna circunstancia el equipo de Love In Box será responsable de ningún daño directo, indirecto, especial, incidental o consecuente, que incluye, entre otros, la pérdida de datos o ganancias que surjan del uso o la incapacidad de usar, los materiales de este sitio, incluso si el equipo de Love In Box o un representante autorizado han sido informados de la posibilidad de tales daños. Si su uso de materiales de este sitio resulta en la necesidad de servicio, reparación o corrección de equipos o datos, usted asume los costos de los mismos.
                    
                Love In Box no será responsable de ningún resultado que pueda ocurrir durante el curso del uso de nuestros recursos. Nos reservamos el derecho de cambiar los precios y revisar la política de uso de recursos en cualquier momento.
                    
                    
                Licencia
                    
                Love In Box le otorga una licencia revocable, no exclusiva, intransferible y limitada para descargar, instalar y usar la plataforma estrictamente de acuerdo con los términos de este Acuerdo.
                    
                Estos Términos y condiciones son un contrato entre usted y Love In Box (referidos en estos Términos y condiciones como "Love In Box", "nosotros", o "nuestro"), el proveedor del sitio web de Love In Box y los servicios accesibles desde el sitio web de Love In Box (que se denominan colectivamente en estos Términos y condiciones como el "Servicio de Love In Box").
                    
                Usted acepta estar sujeto a estos Términos y condiciones. Si no está de acuerdo con estos Términos y condiciones, no utilice el Servicio Love In Box. En estos Términos y condiciones, "usted" se refiere tanto a usted como individuo como a la entidad que representa. Si viola cualquiera de estos Términos y condiciones, nos reservamos el derecho de cancelar su cuenta o bloquear el acceso a su cuenta sin previo aviso.
                    
                    
                Definiciones y términos clave
                    
                Para ayudar a explicar las cosas de la manera más clara posible en estos Términos y Condiciones, cada vez que se hace referencia a cualquiera de estos términos, se definen estrictamente como:
                    
                  -Cookie: pequeña cantidad de datos generados por un sitio web y guardados por su navegador web. Se utiliza para identificar su navegador, proporcionar análisis, recordar información sobre usted, como su preferencia de idioma o información de inicio de sesión.
                  -Compañía: cuando estos Términos y Condiciones mencionan "Compañía", "nosotros", "nos" o "nuestro", se refiere a Love In Box, que es responsable de su información en virtud de estos Términos y Condiciones.
                  -Plataforma: sitio web de Internet, aplicación web o aplicación digital de cara al público de Love In Box.
                  -País: donde se encuentra Love In Box o los propietarios / fundadores de Love In Box, en este caso es Colombia
                  -Dispositivo: cualquier dispositivo conectado a Internet, como un teléfono, tablet, computadora o cualquier otro dispositivo que se pueda usar para visitar Love In Box y usar los servicios.
                  -Servicio: se refiere al servicio brindado por Love In Box como se describe en los términos relativos (si están disponibles) y en esta plataforma.
                  -Terceros: se refiere a anunciantes, patrocinadores de concursos, socios promocionales y de marketing, y otros que brindan nuestro contenido o cuyos productos o servicios que creemos que pueden interesarle.
                  -Sitio web: el sitio de Love In Box, al que se puede acceder a través de esta URL: https://loveinbox1.herokuapp.com
                  -Usted: una persona o entidad que está registrada con Love In Box para utilizar los Servicios.
                    
                    
                Restricciones
                    
                Usted acepta no hacerlo y no permitirá que otros:
                    
                  -Licenciar, vender, alquilar, arrendar, asignar, distribuir, transmitir, alojar, subcontratar, divulgar o explotar comercialmente la plataforma o poner la plataforma a disposición de terceros.
                  -Modificar, realizar trabajos derivados, desensamblar, descifrar, realizar una compilación inversa o realizar ingeniería inversa de cualquier parte de la plataforma.
                  -Eliminar, alterar u ocultar cualquier aviso de propiedad (incluido cualquier aviso de derechos de autor o marca registrada) de sus afiliados, socios, proveedores o licenciatarios de la plataforma.
                    
                    
                Política de Devolución y Reembolso
                    
                Gracias por comprar en Love In Box. Apreciamos el hecho de que le guste comprar las cosas que construimos. También queremos asegurarnos de que tenga una experiencia gratificante mientras explora, evalúa y compra nuestros productos.
                    
                Al igual que con cualquier experiencia de compra, existen términos y condiciones que se aplican a las transacciones en Love In Box. Seremos tan breves como lo permitan nuestros abogados. Lo principal que debe recordar es que al realizar un pedido o realizar una compra en Love In Box, acepta los términos junto con la Política de privacidad de Love In Box.
                    
                Si por alguna razón no está completamente satisfecho con algún bien o servicio que le brindamos, no dude en contactarnos y discutiremos cualquiera de los problemas que esté atravesando con nuestro producto.
                    
                    
                Tus sugerencias
                    
                Cualquier, comentario, idea, mejora o sugerencia (colectivamente, "Sugerencias") que usted proporcione a Love In Box con respecto a la plataforma seguirá siendo propiedad única y exclusiva de Love In Box.
                    
                Love In Box tendrá la libertad de usar, copiar, modificar, publicar o redistribuir las Sugerencias para cualquier propósito y de cualquier manera sin ningún crédito o compensación para usted.
                    
                    
                Tu consentimiento
                    
                Hemos actualizado nuestros Términos y condiciones para brindarle total transparencia sobre lo que se establece cuando visita nuestro sitio y cómo se utiliza. Al utilizar nuestra plataforma, registrar una cuenta o realizar una compra, por la presente acepta nuestros Términos y condiciones.
                    
                    
                Enlaces a otros Sitios Web
                    
                Estos Términos y Condiciones se aplican solo a los Servicios. Los Servicios pueden contener enlaces a otros sitios web que Love In Box no opera ni controla. No somos responsables por el contenido, la precisión o las opiniones expresadas en dichos sitios web, y dichos sitios web no son investigados, monitoreados o verificados por nuestra precisión o integridad. Recuerde que cuando utiliza un enlace para ir de los Servicios a otro sitio web, nuestros Términos y condiciones dejan de estar vigentes. Su navegación e interacción en cualquier otro sitio web, incluidos aquellos que tienen un enlace en nuestra plataforma, están sujetos a las propias reglas y políticas de ese sitio web. Dichos terceros pueden utilizar sus propias cookies u otros métodos para recopilar información sobre usted.
                    
                    
                Cookies
                    
                Love In Box utiliza "cookies" para identificar las áreas de nuestro sitio web que ha visitado. Una cookie es una pequeña porción de datos que su navegador web almacena en su computadora o dispositivo móvil. Usamos cookies para mejorar el rendimiento y la funcionalidad de nuestra plataforma, pero no son esenciales para su uso. Sin embargo, sin estas cookies, es posible que ciertas funciones, como los videos, no estén disponibles o se le solicitará que ingrese sus datos de inicio de sesión cada vez que visite la plataforma, ya que no podríamos recordar que había iniciado sesión anteriormente. La mayoría de los navegadores web se pueden configurar para desactivar el uso de cookies. Sin embargo, si desactiva las cookies, es posible que no pueda acceder a la funcionalidad de nuestro sitio web correctamente o en absoluto. Nunca colocamos información de identificación personal en cookies.
                    
                    
                Cambios en nuestros Términos y Condiciones
                    
                Usted reconoce y acepta que Love In Box puede dejar de brindarle (de forma permanente o temporal) el Servicio (o cualquier función dentro del Servicio) a usted o a los usuarios en general, a discreción exclusiva de Love In Box, sin previo aviso. Puede dejar de utilizar el Servicio en cualquier momento. No es necesario que informe específicamente a Love In Box cuando deje de usar el Servicio. Usted reconoce y acepta que si Love In Box deshabilita el acceso a su cuenta, es posible que no pueda acceder al Servicio, los detalles de su cuenta o cualquier archivo u otro material contenido en su cuenta.
                    
                Si decidimos cambiar nuestros Términos y condiciones, publicaremos esos cambios en esta página y / o actualizaremos la fecha de modificación de los Términos y condiciones a continuación.
                    
                    
                Modificaciones a nuestra plataforma
                    
                Love In Box se reserva el derecho de modificar, suspender o interrumpir, temporal o permanentemente, la plataforma o cualquier servicio al que se conecte, con o sin previo aviso y sin responsabilidad ante usted.
                    
                    
                Actualizaciones a nuestra plataforma
                    
                Love In Box puede, de vez en cuando, proporcionar mejoras a las características / funcionalidad de la plataforma, que pueden incluir parches, corrección de errores, actualizaciones, mejoras y otras modificaciones ("Actualizaciones").
                    
                Las actualizaciones pueden modificar o eliminar ciertas características y / o funcionalidades de la plataforma. Usted acepta que Love In Box no tiene la obligación de (i) proporcionar Actualizaciones, o (ii) continuar proporcionándole o habilitando características y / o funcionalidades particulares de la plataforma.
                    
                Además, acepta que todas las Actualizaciones (i) se considerarán una parte integral de la plataforma y (ii) estarán sujetas a los términos y condiciones de este Acuerdo.
                    
                    
                Servicios de Terceros
                    
                Podemos mostrar, incluir o poner a disposición contenido de terceros (incluidos datos, información, aplicaciones y otros servicios de productos) o proporcionar enlaces a sitios web o servicios de terceros ("Servicios de terceros").
                    
                Usted reconoce y acepta que Love In Box no será responsable de ningún Servicio de terceros, incluida su precisión, integridad, puntualidad, validez, cumplimiento de los derechos de autor, legalidad, decencia, calidad o cualquier otro aspecto de los mismos. Love In Box no asume ni tendrá ninguna obligación o responsabilidad ante usted o cualquier otra persona o entidad por los Servicios de terceros.
                    
                Los Servicios de terceros y los enlaces a los mismos se brindan únicamente para su conveniencia y usted accede a ellos y los usa completamente bajo su propio riesgo y sujeto a los términos y condiciones de dichos terceros.
                    
                    
                Duración y Terminación
                    
                Este Acuerdo permanecerá en vigor hasta que usted o Love In Box lo rescindan.
                    
                Love In Box puede, a su entera discreción, en cualquier momento y por cualquier motivo o sin él, suspender o rescindir este Acuerdo con o sin previo aviso.
                    
                Este Acuerdo terminará inmediatamente, sin previo aviso de Love In Box, en caso de que no cumpla con alguna de las disposiciones de este Acuerdo. También puede rescindir este Acuerdo eliminando la plataforma y todas las copias del mismo de su computadora.
                    
                Tras la rescisión de este Acuerdo, deberá dejar de utilizar la plataforma y eliminar todas las copias de la plataforma de su computadora.
                    
                La rescisión de este Acuerdo no limitará ninguno de los derechos o recursos de Love In Box por ley o en equidad en caso de incumplimiento por su parte (durante la vigencia de este Acuerdo) de cualquiera de sus obligaciones en virtud del presente Acuerdo.
                    
                    
                Aviso de infracción de Derechos de Autor
                    
                Si usted es propietario de los derechos de autor o el agente de dicho propietario y cree que cualquier material de nuestra plataforma constituye una infracción de sus derechos de autor, comuníquese con nosotros y proporcione la siguiente información: (a) una firma física o electrónica del propietario de los derechos de autor o una persona autorizada para actuar en su nombre; (b) identificación del material que se alega infringe; (c) su información de contacto, incluida su dirección, número de teléfono y un correo electrónico; (d) una declaración suya de que cree de buena fe que el uso del material no está autorizado por los propietarios de los derechos de autor; y (e) la declaración de que la información en la notificación es precisa y, bajo pena de perjurio, usted está autorizado a actuar en nombre del propietario.
                    
                    
                Indemnización
                    
                Usted acepta indemnizar y eximir de responsabilidad a Love In Box y a sus empresas matrices, subsidiarias, afiliadas, funcionarios, empleados, agentes, socios y otorgantes de licencias (si corresponde) de cualquier reclamo o demanda, incluidos los honorarios razonables de abogados, debido a que surja de su: (a) uso de la plataforma; (b) violación de este Acuerdo o cualquier ley o reglamento; o (c) violación de cualquier derecho de un tercero.
                    
                    
                Sin garantías
                    
                La plataforma se le proporciona "TAL CUAL" y "SEGÚN DISPONIBILIDAD" y con todas las fallas y defectos sin garantía de ningún tipo. En la medida máxima permitida por la ley aplicable, Love In Box, en su propio nombre y en nombre de sus afiliados y sus respectivos licenciantes y proveedores de servicios, renuncia expresamente a todas las garantías, ya sean expresas, implícitas, legales o de otro tipo, con con respecto a la plataforma, incluidas todas las garantías implícitas de comerciabilidad, idoneidad para un propósito particular, título y no infracción, y garantías que puedan surgir del curso del trato, el curso del desempeño, el uso o la práctica comercial. Sin limitación a lo anterior, Love In Box no ofrece garantía ni compromiso, y no hace ninguna representación de ningún tipo de que la plataforma cumplirá con sus requisitos, logrará los resultados previstos, será compatible o funcionará con cualquier otro software, sitios web, sistemas o servicios, operen sin interrupciones, cumplan con los estándares de rendimiento o confiabilidad o que no tengan errores o que cualquier error o defecto puede o será corregido.
                    
                Sin limitar lo anterior, ni Love In Box ni ningún proveedor de Love In Box hace ninguna representación o garantía de ningún tipo, expresa o implícita: (i) en cuanto al funcionamiento o disponibilidad de la plataforma, o la información, contenido y materiales o productos incluidos en el mismo; (ii) que la plataforma será ininterrumpida o libre de errores; (iii) en cuanto a la precisión, confiabilidad o vigencia de cualquier información o contenido proporcionado a través de la plataforma; o (iv) que la plataforma, sus servidores, el contenido o los correos electrónicos enviados desde o en nombre de Love In Box están libres de virus, scripts, troyanos, gusanos, malware, bombas de tiempo u otros componentes nocivos.
                    
                Algunas jurisdicciones no permiten la exclusión o las limitaciones de las garantías implícitas o las limitaciones de los derechos legales aplicables de un consumidor, por lo que algunas o todas las exclusiones y limitaciones anteriores pueden no aplicarse en su caso.
                    
                    
                Limitación de Responsabilidad
                    
                Sin perjuicio de los daños en los que pueda incurrir, la responsabilidad total de Love In Box y cualquiera de sus proveedores en virtud de cualquier disposición de este Acuerdo y su recurso exclusivo por todo lo anterior se limitará al monto realmente pagado por usted para la plataforma.
                    
                En la máxima medida permitida por la ley aplicable, en ningún caso Love In Box o sus proveedores serán responsables de ningún daño especial, incidental, indirecto o consecuente de ningún tipo (incluidos, entre otros, daños por lucro cesante, por pérdida de datos u otra información, por interrupción del negocio, por lesiones personales, por la pérdida de privacidad que surja de alguna manera relacionada con el uso o la imposibilidad de usar la plataforma, software de terceros y / o - hardware de terceros utilizado con la plataforma, o de otro modo en relación con cualquier disposición de este Acuerdo), incluso si Love In Box o cualquier proveedor ha sido informado de la posibilidad de tales daños e incluso si el recurso no cumple con su propósito esencial.
                    
                Algunos estados / jurisdicciones no permiten la exclusión o limitación de daños incidentales o consecuentes, por lo que es posible que la limitación o exclusión anterior no se aplique en su caso.
                    
                    
                Divisibilidad
                    
                Si alguna disposición de este Acuerdo se considera inaplicable o inválida, dicha disposición se cambiará e interpretará para lograr los objetivos de dicha disposición en la mayor medida posible según la ley aplicable y las disposiciones restantes continuarán en pleno vigor y efecto.
                    
                Este Acuerdo, junto con la Política de privacidad y cualquier otro aviso legal publicado por Love In Box en los Servicios, constituirá el acuerdo completo entre usted y Love In Box con respecto a los Servicios. Si alguna disposición de este Acuerdo es considerada inválida por un tribunal de jurisdicción competente, la invalidez de dicha disposición no afectará la validez de las disposiciones restantes de este Acuerdo, que permanecerán en pleno vigor y efecto. Ninguna renuncia a cualquier término de este Acuerdo se considerará una renuncia adicional o continua de dicho término o cualquier otro término, y el hecho de que Love In Box no haga valer ningún derecho o disposición en virtud de este Acuerdo no constituirá una renuncia a dicho derecho. o provisión. USTED Y Love In Box ACEPTAN QUE CUALQUIER CAUSA DE ACCIÓN QUE SURJA O ESTÉ RELACIONADA CON LOS SERVICIOS DEBE COMENZAR DENTRO DE UN (1) AÑO DESPUÉS DE QUE LA CAUSA DE ACCIÓN SE ACUERDA. DE LO CONTRARIO, DICHA CAUSA DE ACCIÓN ESTÁ PERMANENTEMENTE PROHIBIDA.
                    
                    
                Renuncia
                    
                Salvo lo dispuesto en el presente, el hecho de no ejercer un derecho o exigir el cumplimiento de una obligación en virtud de este Acuerdo no afectará la capacidad de una de las partes para ejercer dicho derecho o requerir dicho cumplimiento en cualquier momento posterior, ni constituirá la renuncia a una infracción. cualquier incumplimiento posterior.
                    
                Ninguna falla en el ejercicio, ni demora en el ejercicio, por parte de cualquiera de las partes, de cualquier derecho o poder bajo este Acuerdo operará como una renuncia a ese derecho o poder. El ejercicio único o parcial de cualquier derecho o poder en virtud de este Acuerdo tampoco impedirá el ejercicio posterior de ese o cualquier otro derecho otorgado en este documento. En caso de conflicto entre este Acuerdo y cualquier compra u otros términos aplicables, regirán los términos de este Acuerdo.
                    
                    
                Enmiendas a este Acuerdo
                    
                Love In Box se reserva el derecho, a su entera discreción, de modificar o reemplazar este Acuerdo en cualquier momento. Si una revisión es importante, proporcionaremos un aviso de al menos 30 días antes de que entren en vigencia los nuevos términos. Lo que constituye un cambio material se determinará a nuestro exclusivo criterio.
                    
                Si continúa accediendo o utilizando nuestra plataforma después de que las revisiones entren en vigencia, usted acepta estar sujeto a los términos revisados. Si no está de acuerdo con los nuevos términos, ya no está autorizado para usar Love In Box.
                    
                    
                Acuerdo completo
                    
                El Acuerdo constituye el acuerdo completo entre usted y Love In Box con respecto a su uso de la plataforma y reemplaza todos los acuerdos escritos u orales anteriores y contemporáneos entre usted y Love In Box.
                    
                Es posible que esté sujeto a términos y condiciones adicionales que se aplican cuando usa o compra otros servicios de Love In Box, que Love In Box le proporcionará en el momento de dicho uso o compra.
                    
                    
                Actualizaciones de nuestros Términos
                    
                Podemos cambiar nuestro Servicio y nuestras políticas, y es posible que debamos realizar cambios en estos Términos para que reflejen con precisión nuestro Servicio y nuestras políticas. A menos que la ley exija lo contrario, le notificaremos (por ejemplo, a través de nuestro Servicio) antes de realizar cambios en estos Términos y le daremos la oportunidad de revisarlos antes de que entren en vigencia. Luego, si continúa utilizando el Servicio, estará sujeto a los Términos actualizados. Si no desea aceptar estos o alguno de los Términos actualizados, puede eliminar su cuenta.
                    
                    
                Propiedad intelectual
                    
                The website and its entire contents, features and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection and arrangement thereof), are owned by Love In Box, its licensors or other providers of such material and are protected by Colombia and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws. The material may not be copied, modified, reproduced, downloaded or distributed in any way, in whole or in part, without the express prior written permission of Love In Box, unless and except as is expressly provided in these Terms & Conditions. Any unauthorized use of the material is prohibited.
                    
                    
                Acuerdo de Arbitraje
                    
                Esta sección se aplica a cualquier disputa, EXCEPTO QUE NO INCLUYE UNA DISPUTA RELACIONADA CON RECLAMOS POR RECURSOS INJUNTIVOS O EQUITATIVOS CON RESPECTO A LA EJECUCIÓN O VALIDEZ DE SUS DERECHOS DE PROPIEDAD INTELECTUAL O DE Love In Box. El término "disputa" significa cualquier disputa, acción u otra controversia entre usted y Love In Box en relación con los Servicios o este acuerdo, ya sea en contrato, garantía, agravio, estatuto, regulación, ordenanza o cualquier otra base legal o equitativa. "Disputa" tendrá el significado más amplio posible permitido por la ley.
                    
                    
                Aviso de Disputa
                    
                En el caso de una disputa, usted o Love In Box deben darle al otro un Aviso de Disputa, que es una declaración escrita que establece el nombre, la dirección y la información de contacto de la parte que la proporcionó, los hechos que dieron lugar a la disputa y la reparación solicitada. Debe enviar cualquier Aviso de disputa por correo electrónico a: danielsan99104@hotmail.com. Love In Box le enviará cualquier Aviso de disputa por correo a su dirección si la tenemos, o de otra manera a su dirección de correo electrónico. Usted y Love In Box intentarán resolver cualquier disputa mediante una negociación informal dentro de los sesenta (60) días a partir de la fecha en que se envíe la Notificación de disputa. Después de sesenta (60) días, usted o Love In Box pueden comenzar el arbitraje.
                    
                    
                Arbitraje Obligatorio
                    
                Si usted y Love In Box no resuelven ninguna disputa mediante una negociación informal, cualquier otro esfuerzo para resolver la disputa se llevará a cabo exclusivamente mediante arbitraje vinculante como se describe en esta sección. Está renunciando al derecho de litigar (o participar como parte o miembro de la clase) todas las disputas en la corte ante un juez o jurado. La disputa se resolverá mediante arbitraje vinculante de acuerdo con las reglas de arbitraje comercial de la Asociación Americana de Arbitraje. Cualquiera de las partes puede buscar medidas cautelares provisionales o preliminares de cualquier tribunal de jurisdicción competente, según sea necesario para proteger los derechos o la propiedad de las partes en espera de la finalización del arbitraje. Todos y cada uno de los costos, honorarios y gastos legales, contables y de otro tipo en los que incurra la parte ganadora correrán a cargo de la parte no ganadora.
                    
                    
                Envíos y Privacidad
                    
                En el caso de que envíe o publique ideas, sugerencias creativas, diseños, fotografías, información, anuncios, datos o propuestas, incluidas ideas para productos, servicios, funciones, tecnologías o promociones nuevos o mejorados, acepta expresamente que dichos envíos se realizarán automáticamente. será tratado como no confidencial y no propietario y se convertirá en propiedad exclusiva de Love In Box sin ningún tipo de compensación o crédito para usted. Love In Box y sus afiliados no tendrán obligaciones con respecto a dichos envíos o publicaciones y pueden usar las ideas contenidas en dichos envíos o publicaciones para cualquier propósito en cualquier medio a perpetuidad, incluyendo, pero no limitado a desarrollo, fabricación, y comercializar productos y servicios utilizando tales ideas.
                    
                    
                Promociones
                    
                Love In Box puede, de vez en cuando, incluir concursos, promociones, sorteos u otras actividades ("Promociones") que requieren que envíe material o información sobre usted. Tenga en cuenta que todas las promociones pueden regirse por reglas independientes que pueden contener ciertos requisitos de elegibilidad, como restricciones de edad y ubicación geográfica. Usted es responsable de leer todas las reglas de Promociones para determinar si es elegible para participar o no. Si participa en alguna Promoción, acepta cumplir con todas las Reglas de promociones.
                    
                Es posible que se apliquen términos y condiciones adicionales a las compras de bienes o servicios a través de los Servicios, cuyos términos y condiciones forman parte de este Acuerdo mediante esta referencia.
                    
                    
                Errores Tipográficos
                    
                En el caso de que un producto y / o servicio se enumere a un precio incorrecto o con información incorrecta debido a un error tipográfico, tendremos el derecho de rechazar o cancelar cualquier pedido realizado para el producto y / o servicio enumerado al precio incorrecto. Tendremos derecho a rechazar o cancelar cualquier pedido, ya sea que se haya confirmado o no y se haya cargado a su tarjeta de crédito. Si su tarjeta de crédito ya ha sido cargada por la compra y su pedido es cancelado, emitiremos inmediatamente un crédito a su cuenta de tarjeta de crédito u otra cuenta de pago por el monto del cargo.
                    
                    
                Diverso
                    
                Si por alguna razón un tribunal de jurisdicción competente determina que alguna disposición o parte de estos Términos y condiciones no se puede hacer cumplir, el resto de estos Términos y condiciones continuará en pleno vigor y efecto. Cualquier renuncia a cualquier disposición de estos Términos y condiciones será efectiva solo si está por escrito y firmada por un representante autorizado de Love In Box. Love In Box tendrá derecho a una medida cautelar u otra compensación equitativa (sin la obligación de depositar ninguna fianza o garantía) en caso de incumplimiento anticipado por su parte. Love In Box opera y controla el Servicio Love In Box desde sus oficinas en Colombia. El Servicio no está destinado a ser distribuido ni utilizado por ninguna persona o entidad en ninguna jurisdicción o país donde dicha distribución o uso sea contrario a la ley o regulación. En consecuencia, las personas que eligen acceder al Servicio Love In Box desde otras ubicaciones lo hacen por iniciativa propia y son las únicas responsables del cumplimiento de las leyes locales, en la medida en que las leyes locales sean aplicables. Estos Términos y condiciones (que incluyen e incorporan la Política de privacidad de Love In Box) contienen el entendimiento completo y reemplazan todos los entendimientos previos entre usted y Love In Box con respecto a su tema, y ​​usted no puede cambiarlos ni modificarlos. Los títulos de las secciones que se utilizan en este Acuerdo son solo por conveniencia y no se les dará ninguna importancia legal.
                    
                    
                Descargo de Responsabilidad
                    
                Love In Box no es responsable de ningún contenido, código o cualquier otra imprecisión.
                    
                Love In Box no ofrece garantías.
                    
                En ningún caso Love In Box será responsable de ningún daño especial, directo, indirecto, consecuente o incidental o de cualquier daño, ya sea en una acción contractual, negligencia u otro agravio, que surja de o en conexión con el uso del Servicio o el contenido del Servicio. Love In Box se reserva el derecho de realizar adiciones, eliminaciones o modificaciones al contenido del Servicio en cualquier momento sin previo aviso.
                    
                El Servicio Love In Box y su contenido se proporcionan "tal cual" y "según esté disponible" sin ninguna garantía o representación de ningún tipo, ya sea expresa o implícita. Love In Box es un distribuidor y no un editor del contenido proporcionado por terceros; como tal, Love In Box no ejerce ningún control editorial sobre dicho contenido y no ofrece ninguna garantía o representación en cuanto a la precisión, confiabilidad o vigencia de cualquier información, contenido, servicio o mercancía proporcionada o accesible a través del Servicio Love In Box. Sin limitar lo anterior, Love In Box renuncia específicamente a todas las garantías y representaciones en cualquier contenido transmitido en conexión con el Servicio Love In Box o en sitios que pueden aparecer como enlaces en el Servicio Love In Box, o en los productos proporcionados como parte o en relación con el Servicio Love In Box, incluidas, entre otras, las garantías de comerciabilidad, idoneidad para un propósito particular o no infracción de derechos de terceros. Ningún consejo oral o información escrita proporcionada por Love In Box o cualquiera de sus afiliados, empleados, funcionarios, directores, agentes o similares creará una garantía. La información sobre precios y disponibilidad está sujeta a cambios sin previo aviso. Sin limitar lo anterior, Love In Box no garantiza que el Servicio de Love In Box sea ininterrumpido, sin corrupción, oportuno o sin errores.
                    
                    
                Contáctenos
                    
                No dude en contactarnos si tiene alguna pregunta.
                    
                 -A través del número de teléfono:  3001112233
                 -A través de este enlace:  https://loveinbox1.herokuapp.com</label>
        </div>
        </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={()=>this.setState({modalTermsAndConditions: false})}>Aceptar</button>
            <button className="btn btn-danger" onClick={()=>this.setState({modalTermsAndConditions: false})}>Cerrar</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Register;